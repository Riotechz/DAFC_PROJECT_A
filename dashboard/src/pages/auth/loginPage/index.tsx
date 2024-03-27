import React from 'react'
import BlankLayout from '../../../layouts/BlankLayout'
import { LoginForm } from '../../../components/auth'
import { LoginPayload } from '../../../models'

function LoginPage() {

  const handleLogin = (payload: LoginPayload) =>{
      
  }

  return (
    <BlankLayout>
      <LoginForm onSubmit={handleLogin}/>
    </BlankLayout>
  )
}

export default LoginPage