import React from 'react';
import { Link } from 'react-router-dom';

function HomeLink(props) {
    return <
        Link to = "/" > < img src = "./homeIcon.png"
    alt = "Home"
    className = "App-home mt-4" /
        >
        <
        /Link>
}

export default HomeLink;