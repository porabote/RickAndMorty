import React, { Component } from 'react'
import Moment from 'moment';

import CardRow from './card-row'

class Card extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        rows: []
    }

    getRows = (data) => {

        //data.created = moment().format('MMMM Do YYYY, h:mm:ss a');
        data.created = Moment(data.created).format('D MMM YYYY');
        return Object.keys(data).map((key) => {

            return (
                <CardRow
                    label={key}
                    value={data[key]}
                    key={`f${(~~(Math.random()*1e8)).toString(16)}`}
                />
            )
        })
    }

    render() {

        const { data } = this.props
        const rows = this.getRows(data)

        return (
            <div>
                <div className="card-character">
                    <div className="card-character__image" style={{ backgroundImage: `url(${data.image})` }}></div>
                    <div className="card-character__descr">
                        {rows}
                    </div>
                </div>
            </div>
        )
    }

}

export default Card