import React from 'react';
import { connect } from "react-redux";
import FILTER_ITINERARIES from "/itineraryAction";

class Itinerary extends React.Component {

 fetchItineraries = () => {
        // this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/itineraries/:name")
            .then(response => response.json())
            .then(result => this.props.listarCiudades(result))
            .catch(e => console.log(e))
    }

}

export default connect(mapStateToProps, mapDispactchToProps)(FilterItineraries)
