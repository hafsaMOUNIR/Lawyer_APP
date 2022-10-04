import React from 'react'
import SignInForm from '../../Components/SignIn/SignInForm';
import './SignIn.css'

function SignIn() {
  return (
    <div className='SignIn-container'>
        <div className='left-item'>
            <SignInForm />
        </div>

        <div className='right-item'>
            <img src='/Images/Connexion.jpg' className='signIn-img'/>
        </div>
    </div>
  )
}

export default SignIn