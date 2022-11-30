import React from 'react'




export default function PerformanceCard({number, growth, status, stylestauts, prefix}) {
  return (
    <div class="box">
        <div className="glass-effect"></div>
        <div className="main-header"><b>{prefix}</b>&nbsp;{number}</div>
        <div className={`${stylestauts = false ? "counter-text red" : "counter-text green"}`} >{growth}</div>
        <div className="header half-text">{status}</div>
      </div>
  )
}
