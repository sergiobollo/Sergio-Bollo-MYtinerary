import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Cities from './Cities';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Itinerary from './itinerary';
import Notfound from './notfound';

export default class App extends Component {
    render() {
        return ( < BrowserRouter basename = '/' >
            <
            div className = "App" >
            <
            Switch >
            <
            Route exact path = '/'
            component = { Landing }
            /> <
            Route path = '/Cities'
            component = { Cities }
            />  <
            Route path = '/Login'
            component = { Login }
            />  <
            Route path = '/CreateAccount'
            component = { CreateAccount }
            />  <
            Route path = '/itinerary'
            component = { Itinerary }
            />  <
            Route component = { Notfound }
            /> < /
            Switch > <
            /
            div >
            <
            /
            BrowserRouter >
        );
    }
}