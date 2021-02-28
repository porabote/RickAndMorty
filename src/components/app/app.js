import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../header'
import CharactersList from '../characters-list'
import CharacterDetails from '../character-details'
//import ApiService from '../../services/api-client-service'

import './app.scss'

export default class App extends Component {

    //api = new ApiService();

    render() {

        return (
            <div className="main">
                <BrowserRouter>
                    <Header/>
                    <div className="content-container">
                        <Switch>
                            <Route path="/" exact component={CharactersList}></Route>
                            <Route path="/character-details/:id" component={CharacterDetails}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}