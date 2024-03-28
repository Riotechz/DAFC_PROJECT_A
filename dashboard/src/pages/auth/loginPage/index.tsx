import React from 'react'
import BlankLayout from '../../../layouts/BlankLayout'
import { LoginForm } from '../../../components/auth'
import { LoginPayload } from '../../../models'
import authApi from '../../../services/authApi'
import { toast } from 'react-toastify'
import useAuth from '../../../hooks/useAuth'
import { Login } from '../../../contexts/auth/reducers'

function LoginPage() {

  const {dispatch} = useAuth()

  const handleLogin = async (payload: LoginPayload) =>{
      try {
        const { accessToken, user} = await authApi.loginApi(payload);
        localStorage.setItem('ACCESS_TOKEN', accessToken)
        toast.success("Login success")
        dispatch(Login(user))
      } catch (error){
        toast.error("Login faild")
      }
  }

  return (
    <BlankLayout>
      <LoginForm onSubmit={handleLogin}/>
    </BlankLayout>
  )
}

export default LoginPage