import React from 'react';
import FilterCities from './FilterCities';
//import VisibleCities from './VisibleCities';
import HomeLink from './homeLink';

class Cities extends React.Component {

    render() {
        return ( <
            React.Fragment >
            <
            h1 > Cities < /h1> <
            FilterCities / >
                <HomeLink/>
            <
            /React.Fragment>
        )
    }
}

export default Cities
