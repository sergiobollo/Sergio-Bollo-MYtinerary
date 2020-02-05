import React, { Component } from 'react';

export default class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      picture: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
   }
  
      handlePasswordChange(event) {
    this.setState({password: event.target.value});
   }
  
      handlePictureChange(event) {
    this.setState({picture: event.target.value});
   }
  
  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.email);
    event.preventDefault();
  }


  
  render() {
    return (
        <div>
        <h1 > Create Account < /h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input placeholder="Email" type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
              <label>
          Password:
          <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
              </label>
              <label>
          Picture:
          <input placeholder="Picture" type="url" value={this.state.picture} onChange={this.handlePictureChange} />
        </label>
      
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
  }
}
