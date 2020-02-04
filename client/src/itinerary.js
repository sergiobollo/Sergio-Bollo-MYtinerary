import React from 'react';
import { connect } from "react-redux";
import FILTER_ITINERARIES from "/itineraryAction";

class Itinerary extends React.Component {

 fetchItineraries = () => {
        // this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/itineraries/${this.props.filteredCities.name}")
            .then(response => response.json())
            .then(result => this.props.listarItinerarios(result))
            .catch(e => console.log(e))
    }
 
     componentDidMount() {
        this.fetchItineraries()
        console.log(this.props.filteredCities)
    }



    render() {
        return ( <
            React.Fragment >
             <
            ul > {
                this.props.itineraries.map((city) =>
                    <
                    li key = { itinerary.title }
                    value = { itinerary.title } > { itinerary.title }, { itinerary.city } < /li >
                )
            } < /ul> < /
            React.Fragment >
        )
    }

}

const mapDispactchToProps = (dispatch) => {
    return {
        listarItinerarios: (result) => dispatch({ type: LISTAR_ITINERARIOS, payload: result }),
        filtrarItinerarios: (cityName) => dispatch({ type: FILTER_ITINERARIES, payload: cityName })
    }
}

const mapStateToProps = (state) => {
    return {
        itineraries: state.itineraries.itineraries,
        filteredItineraries: state.itineraries.filteredItineraries,
        isFetching: state.isFetching,
        filteredCities: state.cities.filteredCities
    }

}




export default connect(mapStateToProps, mapDispactchToProps)(FilterItineraries)
