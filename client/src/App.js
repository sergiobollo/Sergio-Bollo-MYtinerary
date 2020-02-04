import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
            ul >
            <
            li >
            <
            Link to = "/" > Home < /Link> < /
            li > <
            li >
            <
            Link to = "/Cities" > Cities < /Link> < /
            li > <
            li >
            <
            Link to = "/Login" > Login < /Link> < /
            li >
            <
            li >
            <
            Link to = "/CreateAccount" > Create Account < /Link> < /
            li >
                <
            li >
            <
            Link to = "/itinerary" > Itinerary < /Link> < /
            li >
                < /
            ul >
            <
            hr / >

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
            /> 
                <
            Route path = '/itinerary'
            component = { Itinerary }
            /> 
                <
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
