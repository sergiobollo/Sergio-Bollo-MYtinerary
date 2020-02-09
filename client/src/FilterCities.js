import React from 'react';
import FilterForm from './filterForm';
import { connect } from "react-redux";
import { LISTAR_CIUDADES, FILTER_CITIES } from "./store/actions/cityActions";
import { Link } from 'react-router-dom';
import { FILTER_ITINERARIES } from "./store/actions/itineraryActions";
import ListGroup from 'react-bootstrap/ListGroup';

class FilterCities extends React.Component {



    fetchCities = () => {
        // this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/cities/all")
            .then(response => response.json())
            .then(result => this.props.listarCiudades(result))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fetchCities()
        console.log(this)
    }

    filterCities = (cityFilter) => {
        this.props.filtrarCiudades(cityFilter);
    }

    handleClick = (name) => {
        this.props.clickearCiudad(name)
    }

    render() {
        return ( <
            React.Fragment >
            <
            FilterForm cityFilter = { this.props.filteredCities }
            match = { this.props.match }
            onChange = { this.filterCities }
            />  <
            ListGroup > {
                this.props.filteredCities.map((city) =>
                    <
                    ListGroup.Item key = { city.name }
                    value = { city.name } > <
                    Link to = "/itinerary"
                    onClick = {
                        () => this.handleClick(city.name)
                    } > { city.name }, { city.country } < /Link> </ListGroup.Item >
                )
            } < /ListGroup> < /
            React.Fragment >
        )
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        listarCiudades: (result) => dispatch({ type: LISTAR_CIUDADES, payload: result }),
        filtrarCiudades: (cityFilter) => dispatch({ type: FILTER_CITIES, payload: cityFilter }),
        clickearCiudad: (name) => dispatch({ type: FILTER_ITINERARIES, payload: name })
    }
}

const mapStateToProps = (state) => {
    return {
        citiesList: state.cities.cities,
        filteredCities: state.cities.filteredCities,
        isFetching: state.isFetching,
        url: state.itineraries.url
    }

}

export default connect(mapStateToProps, mapDispactchToProps)(FilterCities)