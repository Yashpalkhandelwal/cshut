import React, { Component } from 'react'


import NavBar from '../components/navBar'
import LoginBox from '../components/loginBox'



export class Login extends Component {
  render() {
    return (
<div className="main" Style={"background-image: url('./images/login_background.png')"}>
  <NavBar />
  <LoginBox />
</div>
    )
  }
}

export default Login




