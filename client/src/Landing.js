import React from 'react';

function Logo(props) {
    return <img src = { props.source }
    alt = { props.alt }
    className = "App-logo" /
        >
    ;
}

function Browser(props) {
    return <a href = { props.href } > < img src = { props.src }
    alt = { props.alt }
    className = "App-browser" /
        >
        <
        /a >
}

function FindTrip(props) {
    return <
        div > < p > Find your perfect trip, designed by < br / >
        insiders who know and love their cities. < /p> <
    h1 > Start Browsing < /h1> <
    Browser href = { props.link }
    src = { props.source }
    alt = { props.name }
    / > < /
    div >
}

function LogIn(props) {
    return <a href = { props.href }
    className = "App-link" > Log in < /a>
}

function CreateNewAccount(props) {
    return <a href = { props.href }
    className = "App-link" > Create Account < /a>
}

function BuildMytineray(props) {
    return <div >
        <
        p > Whant to build your own MYtinerary ? < /p> <
    LogIn href = { props.linkLogin }
    / > <
    CreateNewAccount href = { props.linkCreateAccount }
    /> < /
    div >
}

function Home(props) {
    return <a href = { props.link } > < img src = { props.source }
    alt = { props.alt }
    className = "App-home mt-4" /
        >
        <
        /a >
}

function Landing() {
    return <div >
        <
        Logo source = "./MYtineraryLogo.png"
    alt = "Logo" / >

        <
        FindTrip source = "./circled-right-2.png"
    name = "Browser"
    link = "./Cities" / >

        <
        BuildMytineray linkLogin = "./Login"
    linkCreateAccount = "./CreateAccount" / >
        <
        Home link = "/"
    source = "./homeIcon.png"
    alt = "Home" / >
        <
        /div>
}

export default Landing;