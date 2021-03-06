import React from 'react';
import { connect } from "react-redux";
import { FILTER_ITINERARIES, LISTAR_ITINERARIOS } from "./store/actions/itineraryActions";
import HomeLink from './homeLink';


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
                    h1 > { this.props.city } < /h1> <
                    ol > {
                        this.props.itineraries.map((itinerary) =>
                            <
                            li key = { itinerary.title }
                            value = { itinerary.title } > { itinerary.title }, { itinerary.username }, { itinerary.rating }, { itinerary.profilePicture }, { itinerary.duration }, { itinerary.price }, { itinerary.hashtags }, { < h5 > Activities: < /h5>}, {
                                itinerary.activities.map((activity) => < ul > < li key = { activity } > < button href = "#" > { activity } < /button > < /li > < /ul > )
                                } < /li > )
                            } < /ol>
<HomeLink/>
< /
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
                        city: state.itineraries.city
                    }

                }




                export default connect(mapStateToProps, mapDispactchToProps)(Itinerary)
