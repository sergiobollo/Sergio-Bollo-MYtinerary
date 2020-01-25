import React, { Component } from 'react'

import FetchCities from './FetchCities'

import FilterForm from './filterForm'

class VisibleCities extends Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            filteredCities: []
        }
    }

    componentWillMount() {
        this.setState({
            cities: FetchCities.state.cities,
            filteredCities: FetchCities.state.cities
        })
    }

    filterCities = (cityFilter) => {
        let filteredCities = this.state.cities
        filteredCities = filteredCities.filter((city) => {
            let cityName = FetchCities.state.cities.name.toLowerCase()
            return cityName.indexOf(
                cityFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredCities
        })
    }

    render() {
        return ( <
            FilterForm cityFilter = { this.state.filteredCities }
            match = { this.props.match }
            onChange = { this.filterCities }
            />
        )
    }
}

export default VisibleCities