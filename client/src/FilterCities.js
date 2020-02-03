import React from 'react';
import FilterForm from './filterForm';
import { connect } from "react-redux";

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
        console.log(this.props)
        console.log(this.props.citiesList)

        //  this.setState({
        //    filteredCities: this.state.filteredCities
        // })
    }

    filterCities = (cityFilter) => {
        let filteredCities = this.props.cities
        filteredCities = filteredCities.filter((city) => {
            let cityName = city.name.toLowerCase()
            return cityName.indexOf(
                cityFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredCities
        })
    }

    render() {
        return ( <
            React.Fragment >
            <
            FilterForm cityFilter = { this.props.cities }
            match = { this.props.match }
            onChange = { this.filterCities }
            /> < /
            React.Fragment >
        )
    }
}


const mapDispactchToProps = (dispatch) => {
    return {
        listarCiudades: (result) => dispatch({ type: 'LISTAR__USUARIOS', payload: result })
    }
}

const mapStateToProps = (state) => {
    return {
        citiesList: state.cities.cities
            //filteredCities: state.filteredCities,
            //isFetching: state.isFetching
    }

}

export default connect(mapStateToProps, mapDispactchToProps)(FilterCities)