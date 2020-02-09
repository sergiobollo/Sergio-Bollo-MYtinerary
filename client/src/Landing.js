import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
    return <img src = { props.source }
    alt = { props.alt }
    className = "App-logo my-4" /
        >
    ;
}

function Browser(props) {
    return <
        Link to = "/Cities" > < img src = { props.src }
    alt = { props.alt }
    className = "App-browser mb-4" /
        >
        <
        /Link>

}

function FindTrip(props) {
    return <
        div > <
        h3 className = "mt-4" > Start Browsing < /h3> <
    Browser src = { props.source }
    alt = { props.name }
    / > < /
    div >
}

function LogIn(props) {
    return <Link to = "./Login"
    className = "App-link" > Log in < /Link>
}

function CreateNewAccount(props) {
    return <Link to = "./CreateAccount"
    className = "App-link" > Create Account < /Link>
}

function BuildMytineray(props) {
    return <div >
        <
        p > Whant to build your own MYtinerary ? < /p> <
    LogIn / > <
        CreateNewAccount / > < /
    div >
}

function Home(props) {
    return <Link to = "/" > < img src = { props.source }
    alt = { props.alt }
    className = "App-home my-5" /
        >
        <
        /Link >
}

function Landing() {
    return <div >
        <
        Logo source = "./MYtineraryLogo.png"
    alt = "Logo" / >
        <
        p > Find your perfect trip, designed by < br / >
        insiders who know and love their cities. < /p> <
    FindTrip source = "./circled-right-2.png"
    name = "Browser" /
        >
        <
        BuildMytineray / >
        <
        Home source = "./homeIcon.png"
    alt = "Home" / >
        <
        /div>
}

export default Landing;