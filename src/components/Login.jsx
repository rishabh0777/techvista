import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser as loginUserAction } from '../../authSlice'


const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [passMess, setPassMess] = useState("")
  const {user, loading, error} = useSelector((state)=>state.auth)


  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const validatePassword = (e)=>{
    const newPassword = e.target.value
    setPassword(e.target.value)
    newPassword.length < 8?setPassMess("Password length should not less than 8"):setPassMess("")
  }

  const loginUser = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      alert("Please enter a valid email address")
      return
    }
    if (password.length < 8) {
      alert("Password length should not be less than 8")
      return
    }
    dispatch(loginUserAction({ email, password }))
  }

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    } else if (error) {
      alert("Please enter your correct data")
    }
  }, [user, error, navigate])

  


 //Navigate to signup page
  const goSignup = ()=>{
    navigate('/signup',{replace:true})
  }
 
  return (
    <>

<main className="w-screen bg-[#ccc] dark:bg-[#555]">
      <div
        id="loginPage"
        className="w-[100vw] h-[100vh] z-10 flex flex-col items-center justify-center"
      >
        <div
          className="md:w-[95%] md:h-[87vh] xsm:w-full xsm:h-full p-4 mx-[2.5%]  bg-white dark:bg-zinc-900 shadow-lg shadow-black md:rounded-3xl overflow-hidden flex items-center box-sizing justify-center gap-5"
        >
          
              <div className='lg:w-[26vw]  sm:w-full xsm:w-full xsm:h-[70vh] md:h-[70vh] bg-white dark:bg-black dark:text-white shadow-md shadow-black flex flex-col  items-center'>
        <div className='w-full h-[25%] flex flex-col justify-center items-center'>
          <h1 className='lg:text-[1.8em] xsm:text-[1.9rem] justify-self-start'>Login Account</h1>
          <p className='text-[0.8em] font-thin-bold mt-2'>Enter your data to logged in your account.</p>
        </div>
        <div className='h-[80%] w-[90%]'>
          <button className='w-full md:py-2 xsm:py-3 rounded-lg shadow-black shadow-md'>Google</button>
    <div className='h-[8%]  w-full md:mt-3 xsm:mt-5 flex justify-between items-center'>
      <div className='w-[45%] border-t-[0.1em] border-zinc-400'></div>
      or
      <div className='w-[45%] border-t-[0.1em] border-zinc-400'></div>
    </div>
    <div className='w-full h-[70%] '>

      <form 
      onSubmit={loginUser}
      action="" 
      className='w-full h-full flex flex-col'>

        <input 
        type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
        className='md:py-3 px-2 xsm:py-3 rounded-2xl md:mt-4 xsm:mt-5 w-[98%] shadow-sm shadow-black outline-none dark:bg-zinc-900' />
        <input 
        type="password" 
        value={password}
        onChange={validatePassword}
        placeholder="Enter your password"
        className='md:py-3 px-2 xsm:py-3 rounded-2xl md:mt-4 xsm:mt-5 w-[98%] shadow-sm shadow-black outline-none dark:bg-zinc-900' />
        <p className='text-[0.8em] text-red-500'>{passMess}</p>
        <button 
        type='submit'
        className='bg-[#3ab611] text-white py-3 px-2 md:mt-4 xsm:mt-5 w-[98%] rounded-2xl'>Login</button>
        <p className='text-center md:mt-4 xsm:mt-5 text-[0.8em]'>Don't Have an account?<span className='font-bold cursor-pointer' onClick={goSignup}>create</span></p>
      </form>

    </div>
        </div>
    </div>

        </div>
      </div>
    </main>
   
  
  
    </>
  )
}

export default Login