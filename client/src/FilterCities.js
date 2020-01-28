import React from 'react'
import FilterForm from './filterForm'

class FilterCities extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            isFetching: "false",
            filteredCities: []
        }
    }


    fetchCities = () => {
        this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/cities/all")
            .then(response => response.json())
            .then(result => this.setState({ cities: result, filteredCities: result, isFetching: false }))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        console.log(this)
        this.fetchCities()
        this.setState({
            filteredCities: this.state.filteredCities
        })
    }

    filterCities = (cityFilter) => {
        let filteredCities = this.state.cities
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
            FilterForm cityFilter = { this.state.filteredCities }
            match = { this.props.match }
            onChange = { this.filterCities }
            /> <
            ul > {
                this.state.filteredCities.map((city) =>
                    <
                    li key = { city.name }
                    value = { city.name } > { city.name }, { city.country } < /li >
                )
            } < /ul> < /
            React.Fragment >
        )
    }
}

export default FilterCities