
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

    let [input,SetInput]=useState({
        name:"",
        email:"",
        password:""
      })
    
      function fun1(e)
      {
        let {name,value} = e.target
        SetInput({...input,[name]:value})
        console.log(input,"jejej");
      }
   async function done(e){
    e.preventDefault();
    console.log('heheheh');
  
    let res = await axios.post('http://localhost:5000/api/users',input)
    console.log(res,'resssss');
   }

  return (
    <div>
       
       <div className="popup" id="signup_popup">
        <div class="form">
          <h4 style={{display: "inline-block"}}>Sign up</h4>
          <h4 id="closesignup">X</h4>
         <form action="" onSubmit={done}>
         <label for="">Name</label>
         <br/>
         <input type="text" name="name" placeholder='enter your first name' value={input.name} onChange={fun1} class="inp"/>
         <br/>
         <label for="">Email</label>
         <br/>
         <input type="email" name='email' placeholder="email" class="inp" value={input.email} onChange={fun1}/>
         <br/>
         <label for="">Password</label>
         <br/>
         <input type="password" name='password' placeholder="enter your password" class="inp" value={input.password} onChange={fun1}/>
         <button id="button" type='submit'>Sign</button> 
         </form> 
       
       </div>
      </div>


      <NavLink to='/login'> <span>Login</span></NavLink>

    </div>
  )
}

export default Signup
