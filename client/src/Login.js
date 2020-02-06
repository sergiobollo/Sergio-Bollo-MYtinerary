import React, { Component } from 'react';

class Login extends React.Component {
    
    
      handleSubmit = async () => {
        await this.props.login(this.props.param);
        
        alert("Login", this.props.logged);
        this.onLoginSuccess(this.props.logged.token)

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
        ingresarEmail: (value) => dispatch({ type: LOG_EMAIL, payload: value }),
        ingresarPassword: (value) => dispatch({ type: LOG_PASSWORD, payload: value }),
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
