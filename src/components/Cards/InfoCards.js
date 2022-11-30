import React from 'react'




export default function InfoCards({name,prefix, number, value, growth, stylestauts}) {
  return (
    <div class="box">
    <div class="glass-effect"></div>

  
     
    <div class="header-box">
    <div class="header">{name}</div><img src="images/expand.png" loading="lazy" alt="" class="icon-menu" />
  </div>
  <div class="information-box">
    <div class="data-box">
    <div class="data">
    <div class="data-heade">
      <div class="header">{prefix}&nbsp;{number}</div>
    </div>
    <div class="data-dis">
      <div class="variable-text">{value}</div>
      <div class={`${stylestauts = false ? "counter-text red" : "counter-text green"}`} >{growth}</div>
    </div>
  </div>
  <div class="data">
    <div class="data-heade">
      <div class="header">{prefix}&nbsp;{number}</div>
    </div>
    <div class="data-dis">
      <div class="variable-text">{value}</div>
      <div class={`${stylestauts = false ? "counter-text red" : "counter-text green"}`} >{growth}</div>
    </div>
  </div>
  </div>
  <div class="data-box">
    <div class="data">
    <div class="data-heade">
      <div class="header">{prefix}&nbsp;{number}</div>
    </div>
    <div class="data-dis">
      <div class="variable-text">{value}</div>
      <div class={`${stylestauts = false ? "counter-text red" : "counter-text green"}`} >{growth}</div>
    </div>
  </div>
  <div class="data">
    <div class="data-heade">
      <div class="header">{prefix}&nbsp;{number}</div>
    </div>
    <div class="data-dis">
      <div class="variable-text">{value}</div>
      <div class={`${stylestauts = false ? "counter-text red" : "counter-text green"}`} >{growth}</div>
    </div>
  </div>
  </div>
  </div>
  

      
    
  </div>
  )
}
