
import React from 'react'


import LogoText from '../logoText';
import MenuList from '../NavBar/menuList';
import MenuListMobile from '../NavBar/menuListMobile';


export default function mainNavBar() {
  return (
    <div><div className='nav-bar-fixed'>
    <div className='nav-bar-fixed'>
        <div className='nav-bar_menu'>
        <div className='glass-effect'></div>
        
        <div class="menu-upper">
      <div class="logo-container menu-box">
      <LogoText />
      </div>
      <div class="menu">

          <MenuList 
           menuName= "Dashboard"
           icon='../images/dashboard.png'
           active='true'
           />
          
          <MenuList 
          menuName= "Report"
          icon='../images/report.png'/>

          <MenuList 
          menuName= "Scheduling"
          icon='../images/scheduling.png'/>

          <MenuList 
          menuName= "Finance"
          icon='../images/finance.png'/>

          <MenuList 
          menuName= "Setting"
          icon='../images/setting.png'/>
       

      </div>
    </div>

    <div class="menu-lower">
      <div class="menu">

      <MenuList 
      menuName= "Logout"
      icon='../images/Logout.png'/>

      </div>
    </div>

        </div>
    </div>
  </div>

  <div class="nav-bar-fixed mobile">
  <div class="nav-bar_menu mobile">
    <div class="glass-effect"></div>
    <div class="menu-upper">
      <div class="logo-container menu-box">
        <LogoText />
      </div>
      <div class="menu">

      <MenuListMobile
      icon='../images/dashboard.png'
      active='true' />

      <MenuListMobile 
      icon='../images/report.png' />

      <MenuListMobile 
       icon='../images/scheduling.png'/>

      <MenuListMobile 
       icon='../images/finance.png'/>

      <MenuListMobile 
      icon='../images/setting.png'/>
        
      </div>
    </div>
    <div class="menu-lower">
      <div class="menu">

      <MenuListMobile
       icon='../images/Logout.png' />

      </div>
    </div>
  </div>
</div>
  </div>
  )
}
