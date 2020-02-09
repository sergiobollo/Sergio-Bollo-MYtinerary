import React from 'react';
import FilterCities from './FilterCities';
//import VisibleCities from './VisibleCities';
import HomeLink from './homeLink';

class Cities extends React.Component {

    render() {
        return ( <
            React.Fragment >
            <
            p className = "pt-4" > Filter our current cities < /p> <
            FilterCities / >
            <
            HomeLink / >
            <
            /React.Fragment>
        )
    }
}

export default Cities