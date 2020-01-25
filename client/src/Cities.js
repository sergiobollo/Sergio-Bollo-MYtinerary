import React from 'react';

class Cities extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: "",
            isFetching: "false"
        }
    }

    fetchCities = () => {
        this.setState({...this.state, isFetching: true })
        fetch("http://localhost:5000/cities/all", {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(result => this.setState({ cities: result, isFetching: false }))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        console.log("this")
        console.log(this)
        this.fetchCities()
    }

    render() {
        const cities = this.cities;
        return ( <
            div >
            <
            h1 > Cities < /h1>;

            <
            ul > {
                cities.map((city) =>
                    <
                    li key = { city._id }
                    value = { city }
                    />
                )
            } < /ul> < /
            div > )
    }
}

export default Cities