import React from "react";
import "./index.css";
import BigButton from "../BigButton";
import {withRouter} from  'react-router-dom';
import eye from "../../images/eye.png"

const initState = {
  email: '',
  password: '',
  emailError:'',
  passwordError:''
}

class LoginForm extends React.Component {
  state = initState;

  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      passwordShown: false,
    };
  }

    signIn = (e) => {
      e.preventDefault();
      fetch ('https://academy-video-api.herokuapp.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({
           username: this.state.usernameInput,
           password: this.state.passwordInput,
          }),
          headers: {'Content-Type':'application/json'},
        })
      .then((res) => {
        if(res.ok) {
          return res.json()
        } 
          throw res.json()
      })
      .then((response) => {
        localStorage.setItem('token', response.token);
        console.log(response);
        this.props.history.replace('/content');
      })
      .catch(console.log);
    };

    setUsername = (e) => {
      this.setState({ usernameInput: e.target.value });
    }
    setPassword =(e) => {
     this.setState({ passwordInput: e.target.value });
    }

    validate = () => {
      let inputError = false;
      const errors = {
        emailError: '',
        passwordError: ''
      }
      if(this.state.email.length<1 && this.state.password.length<1) {
        inputError = true;
        errors.passwordError = 'Please enter a valid email address'
        errors.passwordError = 'Please enter a valid email address'
      } 

      this.setState({
        ...errors 
      })
      return inputError;
    }

    onSubmit = e => {
      e.preventDefault()

      const err = this.validate();
      if(!err) {
        this.setState(initState);
      }
    }

    // togglePasswordVisiblity = () => {
    //   this.setState(this.passwordShown ? false : true);
    // };

  render () {
    return (
    <div className="form">
      <div className="form-container">
        <form onSubmit={this.signIn}>
          <div className="input-container">
            <input className="input" type="text" required onChange={this.setUsername}/>
            <label>Username</label>
            <span>{this.state.emailError}</span>
          </div>
         
          <div className="input-container">
            <input className="input" type="password" required onChange={this.setPassword}/>
            <label>Password <img src={eye} alt="eye-logo" onClick={this.togglePasswordVisiblity}/></label>
            <span>{this.state.passwordError}</span>
          </div>
         
          <BigButton type="submit" title="Sign In" onClick={e => this.onSubmit(e)}/>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(LoginForm);
