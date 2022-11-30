
import React from 'react'


export default function menuListMobile({icon, active}) {
  return (
    <div class="menu-list">
      <img src={icon} loading="lazy" alt="" class="icon-menu" active={active}/></div>
  )
}


