import React from 'react'

import Dropdown from '../Buttons/dropDown'


export default function detailsOnboad({Name, Email,Countrycode, PhoneNumber, Notes, Schedules}) {
  return (
    <div class="box">
    <div class="header-box">
      <div class="header">{Name}</div><img src="images/expand.png" loading="lazy" alt="" class="icon-menu" />
    </div>
    <div class="header-box">
      <div class="variable-text">{Email}</div>
      <div class="variable-text">{Countrycode}&nbsp;{PhoneNumber}</div>
    </div>
    <div class="glass-effect"></div>
    <div class="data-box">
      <div class="data">
        <div class="data-dis"><img src="images/finance.png" loading="lazy" alt="" class="icon-menu" />
          <div class="header">{Notes}</div>
        </div>
      </div>
      <div class="data">
        <div class="data-dis"><img src="images/finance.png" loading="lazy" alt="" class="icon-menu" />
          <div class="header">{Schedules}</div>
        </div>
      </div>
      <div class="data-dis drop-down">
        
        <Dropdown
        stage1="stage1"
        stage2="stage2"
        stage3="stage3"/>
      </div>
    </div>
  </div>
  
  
  
  )
}
