import React from 'react';
import { connect } from "react-redux";
import { FILTER_ITINERARIES, LISTAR_ITINERARIOS } from "./store/actions/itineraryActions";


class Itinerary extends React.Component {

    fetchItineraries = () => {
        // this.setState({...this.state, isFetching: true })
        fetch(this.props.url)
            .then(response => response.json())
            .then(result => this.props.listarItinerarios(result))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fetchItineraries()
        console.log(this.props.url)
    }



    render() {
        return ( <
            React.Fragment >
            <
            ul > {
                this.props.itineraries.map((itinerary) =>
                    <
                    li key = { itinerary.title }
                    value = { itinerary.title } > { itinerary.title }, { itinerary.city } , { itinerary.rating }, { itinerary.profilePicture }, { itinerary.duration }, { itinerary.price }, { itinerary.hashtags} , { itinerary.activities} < /li >
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
        url: state.itineraries.url,
        isFetching: state.isFetching,
        filteredCities: state.cities.filteredCities
    }

}




export default connect(mapStateToProps, mapDispactchToProps)(Itinerary)
