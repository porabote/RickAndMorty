import React, { Component } from 'react'

import Loader from '../loader'
import ErrorNotice from '../error-notice'

const CardDetails = (View, getData) => {

    return class extends Component {

        state = {
            data: null,
            loading: true,
            loadError: false
        }

        onError = (error) => {
            this.setState({
                loadError: `Ошибка соединения ${error}`,
                loading: false
            });
        }

        componentDidMount() {

            const id = this._extractId(window.location.pathname);

            getData(id)
                .then((data) => {
                    this.setState({
                        data: data,
                        loading: false
                    });
                })
                .catch(this.onError)
        }

        _extractId(string) {

            const regExp = /\/([0-9]*)\/?$/;
            const id = string.match(regExp)[1];
            if(id !== undefined) return id;
            return null;
        }

        render() {

            const { data, loading, loadError } = this.state

            if(loadError) {
                return <ErrorNotice message={loadError}/>
            }

            if(loading) {
                return <Loader/>
            }

            return (
                <View {...this.props} data={data} />
            )

        }

    }
}

export default CardDetails