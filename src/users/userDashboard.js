import React, { Component } from 'react'

import MainNavBar from '../components/NavBar/mainNavBar';
import UserBoard from '../components/DashBoard/userBoard';



export class userDashboard extends Component {
  render() {
    return (
        <div><MainNavBar />
        <UserBoard /></div>
    )
  }
}

export default userDashboard