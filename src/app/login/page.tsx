'use client'
import { signIn } from 'next-auth/react'
import classes from './login.module.css'

type Props = {}

const Login = (props: Props) => {
  // eslint-disable-next-line no-undef
  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={(e) => { handleSubmit(e) }} className={classes.loginContainer}>
      <button onClick={() => signIn('google', { callbackUrl: '/' })} className='button'>Google Sign In</button>
      <div className={classes.divider}>OR</div>
      <input name="username" type='text' placeholder='Email address' className='input margin-input'/>
      <input name="password" type='password' placeholder='Password' className='input margin-input'/>
      <button className='bg-sky-400 px-3 py-2 rounded'>Sign In</button>
    </form>
  )
}

export default Login
