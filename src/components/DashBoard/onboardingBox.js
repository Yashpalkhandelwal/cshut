import React from 'react'

import PerformanceCard from '../Cards/PerformanceCard'
import CustomerCard from '../Cards/CustomerCard'

export default function onboardingBox() {
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
      <CustomerCard 
     Name="Yash"
     Email="test@test.test"
     Countrycode="+91"
     PhoneNumber="00000000"
     Notes="Notes"
     Schedules="Schedules"/>
          <CustomerCard 
     Name="Yash"
     Email="test@test.test"
     Countrycode="+91"
     PhoneNumber="00000000"
     Notes="Notes"
     Schedules="Schedules"/>
     
  </div>
  </div>
  
  </div>
      
  )
}
