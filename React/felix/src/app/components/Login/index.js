import React, {useCallback, useState} from "react";
import "./index.css";
import BigButton from "../BigButton";
import {withRouter} from  'react-router-dom';
import eye from "../../images/eye.png"

// const regexp = RegExp ('tester');
// const initState = {
//   userName: '',
//   password: '',
//   userNameError:'',
//   passwordError:''
// }

export function LoginForm ({history}) {
  const [usernameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  // const [passwordShown, setPasswordShown] = useState('');

  let signIn = useCallback(async (e) => {
      e.preventDefault();
      await fetch ('https://academy-video-api.herokuapp.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({
           username: usernameInput,
           password: passwordInput,
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
         history.replace('/content');
      })
      .catch(console.log);
    });

    let setUsername = (e) => {
      setUserNameInput( e.target.value );
    }
    let setPassword =(e) => {
      setPasswordInput( e.target.value );
    }

    // let validate = (e) => {
    //   let inputError = false;
    //   const errors = {
    //     userNameError: '',
    //     passwordError: ''
    //   }
    //   if(!userName) {
    //     inputError = true;
    //     errors.userNameError = 'Please enter a valid user name'
    //   } else if (!userName.match(regexp)) {
    //     inputError = true;
    //     errors.userNameError = (
    //       <span style={{color: 'red' }}>Please enter a valid user name</span>
    //      )
    //   } 

    //   this.setState({
    //     ...errors 
    //   })
    //   return inputError;
    // }

    // let onSubmit = e => {
    //   e.preventDefault()

    //   const err = this.validate();
    //   if(!err) {
    //     this.setState(initState);
    //   }
    // }

    // togglePasswordVisiblity = () => {
    //   this.setState(this.passwordShown ? false : true);
    // };

    return (
    <div className="form">
      <div className="form-container">
        <form onSubmit={signIn}>
          <div className="input-container">
            <input className="input" type="username" required onChange={setUsername}/>
            <label>Username</label>
            {/* <span>{userNameError}</span> */}
          </div>
         
          <div className="input-container">
            <input className="input" type="password" required onChange={setPassword}/>
            <label>Password <img src={eye} alt="eye-logo" /*onClick={togglePasswordVisiblity}*/ /></label>
            {/* <span>{passwordError}</span> */}
          </div>
         
          <BigButton type="submit" title="Sign In" onClick={e => this.onSubmit(e)}/>
        </form>
      </div>
    </div>
    );
  }

export default withRouter(LoginForm);
