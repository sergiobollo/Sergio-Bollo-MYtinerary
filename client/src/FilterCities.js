import React from 'react';
import FilterForm from './filterForm';
import { connect } from "react-redux";
import { LISTAR_CIUDADES, FILTER_CITIES } from "./store/actions/cityActions";


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

    render() {
        return ( <
            React.Fragment >
            <
            FilterForm cityFilter = { this.props.filteredCities }
            match = { this.props.match }
            onChange = { this.filterCities }
            /> <
            ul > {
                this.props.filteredCities.map((city) =>
                    <
                    li key = { city.name }
                    value = { city.name } > { city.name }, { city.country } < /li >
                )
            } < /ul> < /
            React.Fragment >
        )
    }
}


const mapDispactchToProps = (dispatch) => {
    return {
        listarCiudades: (result) => dispatch({ type: LISTAR_CIUDADES, payload: result }),
        filtrarCiudades: (cityFilter) => dispatch({ type: FILTER_CITIES, payload: cityFilter })
    }
}

const mapStateToProps = (state) => {
    return {
        citiesList: state.cities.cities,
        filteredCities: state.cities.filteredCities,
        isFetching: state.isFetching
    }

}

export default connect(mapStateToProps, mapDispactchToProps)(FilterCities)