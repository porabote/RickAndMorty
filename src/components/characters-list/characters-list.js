import React, { Component, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../store'
import { Route, Switch, Redirect } from 'react-router-dom'

import './characters-list.scss'
import ListWithData from '../hoc/list-with-data'
import { fetchRecords } from '../../reducers/characters-actions'

class CharactersList extends Component {

    constructor(props) {
        super(props);
    }

    getItems = () => {

        return this.props.list.records.map(({id, name}) => {
            return (
                <Link to={`/character-details/${id}`} className="items-list__item" key={`f${(~~(Math.random()*1e8)).toString(16)}`}>
                        {name}
                </Link>
            )
        })
    }

    render() {

        const items = this.getItems()

        return (
            <div className="items-list">
                {items}
            </div>
        )
    }

}

const mapStateToProps = store => ({
    list: store.characters
})

const mapDispatchToProps = (dispatch) => {
    return {
        action: fetchRecords
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListWithData(CharactersList, 'characters'))