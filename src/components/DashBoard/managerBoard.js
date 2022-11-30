import React, { Component } from 'react'


import PerformanceCard from '../Cards/PerformanceCard'
import InfoCards from '../Cards/InfoCards'


export class managerBoard extends Component {
  render() {
    return (
      <div className='board'>
        <div class="container-box">
        <div class="boxs">
        <PerformanceCard 
        prefix=""
        number='15'
        growth='∆ 12%'
        stylestauts="true"
        status='Customer in Pipline '/>

        <PerformanceCard 
        prefix="$"
        number='239,769'
        growth='∆ 12%'
        stylestauts="false"
        status='Revenue through onbaording'/>


        <PerformanceCard 
         prefix="$"
          number='15'
          growth='∆ 12%'
          stylestauts="false"
          status='Pending the Revenue'/>


        </div>


        </div>

        <div class="expander">
        <div class="divider"></div>
        <div class="expander-text-link">view more</div>
        <div class="divider"></div>
      </div>

      <div class="container-box">
        <div class="boxs">
            <InfoCards 
            name='Name of the manager'
            prefix="$"
            number='1500000'
            growth='∆ 12%'
            stylestauts="true"
            value='MRR '/>

<InfoCards 
            name='Name of the manager'
            prefix="$"
            number='1500000'
            growth='∆ 12%'
            stylestauts="true"
            value='MRR '/>
            
        </div>
        <div class="boxs">
        <InfoCards 
            name='Name of the manager'
            prefix="$"
            number='1500000'
            growth='∆ 12%'
            stylestauts="true"
            value='MRR '/> 
                 <InfoCards 
            name='Name of the manager'
            prefix="$"
            number='1500000'
            growth='∆ 12%'
            stylestauts="true"
            value='MRR '/>
        </div>
        <div class="boxs">
        <InfoCards 
            name='Name of the manager'
            prefix="$"
            number='1500000'
            growth='∆ 12%'
            stylestauts="true"
            value='MRR '/>  
                <InfoCards 
            name='Name of the manager'
            prefix="$"
            number='1500000'
            growth='∆ 12%'
            stylestauts="true"
            value='MRR '/>
        </div>
        </div>
        
        </div>
    )
  }
}

export default managerBoard