import React, { Component } from 'react'

import MainNavBar from '../components/NavBar/mainNavBar';
import ManagerBoard from '../components/DashBoard/managerBoard';


export class managerDashBoard extends Component {
  render() {
    return (
      <div><MainNavBar />
       <ManagerBoard /></div>
    )
  }
}

export default managerDashBoard