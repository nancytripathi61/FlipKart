import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {

    

    let [input,SetInput]=useState({
        email:"",
        password:""
      })
    
      function fun1(e)
      {
        let {name,value} = e.target
        SetInput({...input,[name]:value})
      }
      async function done(e)
      {
        e.preventDefault();
      }

  return (
    <div>
       
       <div className="popup" id="signup_popup">
        <div class="form">
          <h4 style={{display: "inline-block"}}>Login</h4>
          <h4 id="closesignup">X</h4>
         <form action="" onSubmit={done}>
         <label for="">Email</label>
         <br/>
         <input type="email" name='email' placeholder="email" class="inp" value={input.email} onChange={fun1}/>
         <label for="">Password</label>
         <br/>
         <input type="password" name='password' placeholder="enter your password" class="inp" value={input.password} onChange={fun1}/> 
         </form> 
        <button id="button" type='submit'>Login</button>
       </div>
      </div>


      <NavLink to='/signup'> <span>SignUp</span></NavLink>
    
    </div>
  )
}

export default Login




