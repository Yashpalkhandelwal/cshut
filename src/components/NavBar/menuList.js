
import React from 'react'



export default function menuList({icon, menuName, active}) {
  return (
    <div class="menu-list">
    <div class="hover-menu">
      <img 
      src={icon} 
      loading="lazy" 
      alt={menuName} 
      class="icon-menu" 
      active={active} />
      </div>
<div class="link-text">{menuName}</div></div>
  )
}
