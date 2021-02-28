import React, { Component } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';

import store from '../../store'
import Loader from '../loader'

const ListWithData = (View, storeKey) => {

    return class extends Component {

        constructor(props) {

            super(props);
            this.container = React.createRef();

        }

        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
            if(this.props.list.currentPage == 1) store.dispatch(this.props.action())
        }

        componentWillUnmount() {
            console.log(this.props.list);
            window.removeEventListener('scroll', this.handleScroll);
        }

        handleScroll = (event) => {

            const containerHeight = this.container.current.offsetHeight

            if(
                (document.documentElement.scrollTop + document.documentElement.clientHeight + 100) > containerHeight
                & this.props.list.currentPage < this.props.list.pagesCount
            ) {
                store.dispatch(this.props.action())
            }
        }

        render() {

            const { records } = this.props.list

            if(!records) {
                return <Loader/>
            }

            return (
                <div ref={this.container}>
                    <View {...this.props} records={records} />
                </div>
            )
        }
    }
}

export default ListWithData