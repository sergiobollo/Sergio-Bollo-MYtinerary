import React from 'react';

class Cities extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            isFetching: "false"
        }
    }


    fetchCities = () => {
        this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/cities/all")
            .then(response => response.json())
            .then(result => this.setState({ cities: result, isFetching: false }))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        console.log(this)
        this.fetchCities()
    }

    render() {
        return ( <
            React.Fragment >
            <
            h1 > Cities < /h1> <
            ul > {
                this.state.cities.map((city) =>
                    <
                    li key = { city.name }
                    value = { city.name } > { city.name }, { city.country } < /li >
                )
            } < /ul> < /
            React.Fragment >
        )
    }
}

export default Cities