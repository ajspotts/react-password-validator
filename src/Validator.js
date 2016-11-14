import React, { Component } from 'react';


class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
    };
  }
  handleEmail (event) {
    this.setState({email: event.target.value});
  }
  handlePassword (event) {
    this.setState({password: event.target.value});
  }
  handlePasswordConf (event) {
    this.setState({passwordConf: event.target.value});
  }
  handleSubmit (event) {
    event.preventDefault();
  }

  render() {
    return(
      <form>
        <input type="text" email={this.state.email} onChange={this.handleEmail}; />
        <input type="text" password={this.state.password} onChange={this.handlePassword}; />
        <input type="text" passwordConf={this.state.passwordConf} onChange={this.handlePasswordConf}; />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default Validator;
