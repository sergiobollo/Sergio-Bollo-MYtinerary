import React from 'react';
import { connect } from "react-redux";
import FILTER_ITINERARIES from "/itineraryAction";

class Itinerary extends React.Component {

 fetchItineraries = () => {
        // this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/itineraries/all")
            .then(response => response.json())
            .then(result => this.props.listarItinerarios(result))
            .catch(e => console.log(e))
    }
 
     componentDidMount() {
        this.fetchCities()
        console.log(this)
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
        isFetching: state.isFetching
    }

}




export default connect(mapStateToProps, mapDispactchToProps)(FilterItineraries)
