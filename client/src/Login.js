import React, { Component } from 'react';
import { connect } from "react-redux";
import { POST_EMAIL, POST_PASSWORD, LOGIN } from "./store/actions/usersAction";
import axios from 'axios';

class Login extends React.Component {
    
    
    
    async handleSubmit(event) {
        let res = await axios.post('http://localhost:5000/login/', this.props.params);

        console.log(res.data);

        alert("Login", this.props.logged);
        //this.onLoginSuccess(this.props.logged.token)
        event.preventDefault();

    }
       
    
    handleEmailChange(event) {
        this.props.ingresarEmail(event.target.value);
    }

    handlePasswordChange(event) {
        this.props.ingresarPassword(event.target.value);
    }
    
    render() {
        return(
        <React.Fragment>
         <h1 > Login < /h1>
                
            <
            form onSubmit = { this.handleSubmit.bind(this) } >
            <
            label >
            Email:
            <
            input placeholder = "Email"
            type = "email"
            value = { this.props.email }
            onChange = { this.handleEmailChange.bind(this) }
            /> < /
            label > <
            label >
            Password:
            <
            input placeholder = "Password"
            type = "password"
            value = { this.props.password }
            onChange = { this.handlePasswordChange.bind(this) }
            /> < /
            label >

            <
            input type = "submit"
            value = "Submit" / >
            <
            /form>
            
         </React.Fragment>
        );
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        ingresarEmail: (value) => dispatch({ type: POST_EMAIL, payload: value }),
        ingresarPassword: (value) => dispatch({ type: POST_PASSWORD, payload: value }),
        login: (value) => dispatch({ type: LOGIN, payload: value }),
    }
}

const mapStateToProps = (state) => {
    return {
        params: state.user,
        email: state.user.email,
        password: state.user.password,
        logged: state.user.logged
    };
}

export default connect(mapStateToProps, mapDispactchToProps)(Login)
