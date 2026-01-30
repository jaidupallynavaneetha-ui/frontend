import React from 'react'

function signup() {
  return (
    <>
    <form style={{textAlign:"center"}}>
        
        <h1>Registration Form</h1>
        <div>
            <label>Username</label><br>
            </br>

        <input type="text" placeholder='usernsme'/>    
        </div>
        <div>
            <label>Email</label>
            <br></br>

        <input type="text" placeholder='email'/>   
        </div>
        <div>
            <label>Passwored</label>
            <br></br>

        <input type="password" placeholder='password'/>   
        </div>

        <button>Register</button>
    </form>
    
    
    </>
  )
}

export default signup