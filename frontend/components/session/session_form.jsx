import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  header() {
    return this.props.formType == 'login' ? 'Log In' : 'Sign Up';
  }

  linkPath() {
    return this.props.formType == 'login' ? '/signup' : '/login';
  }

  linkText() {
    return this.props.formType == 'login' ? 'Sign Up' : 'Log In';
  }

  render() {
    let { errors } = this.props;

    return (
      <div>
        <h1>{this.header()}</h1>
        <ul>
          {
            errors.map( (error, i) => <li key={i}>{error}</li>)
          }
        </ul>
        <Link to={this.linkPath()}>{this.linkText()}</Link>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.update('username').bind(this)} value={this.state.username} placeholder="Username" />
          <input type="text" onChange={this.update('password').bind(this)} value={this.state.password} placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
