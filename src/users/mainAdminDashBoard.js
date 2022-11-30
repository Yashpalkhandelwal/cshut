import React, { Component } from 'react'

import MainNavBar from '../components/NavBar/mainNavBar';
import MainAdminBoard from '../components/DashBoard/mainAdminBoard';


export class mainAdminDashBoard extends Component {
  render() {
    return (
      <div className='dashboard'>
        
        
        <MainNavBar />
        <MainAdminBoard/>
        
        </div>
    )
  }
}

export default mainAdminDashBoard