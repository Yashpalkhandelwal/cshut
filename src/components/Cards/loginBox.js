import React, { Component } from 'react'



export class loginBox extends Component {
  render() {
    return (
        <div className="login-box">
        <div className="header">Sign in</div>

        <div className="w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-2">

            <input 
            type="text" 
            className="input w-input" 
            maxlength="256" name="Email" 
            data-name="Email" 
            placeholder="Email" 
            id="Email-2" />
            
            <input 
            type="password" 
            className="input w-input" 
            maxlength="256" 
            name="Password" 
            data-name="Password" 
            placeholder="Password" 
            id="Password" r
            equired="" />

            <div className="text-conatiner">

                <label className="field-label">Forgot password?</label></div>

                <input type="submit" value="Submit" data-wait="Please wait..." className="submit-button w-button" />
          </form>
 
        </div>
      </div>
    )
  }
}

export default loginBox