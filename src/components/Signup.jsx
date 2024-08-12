import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../authSlice'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [passMess, setPassMess] = useState("")

  const {user ,loading, error} = useSelector((state)=>state.auth)

  // Email Validation Function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const validatePassword = (e)=>{
    const newPassword = e.target.value
    setPassword(e.target.value)
    newPassword.length < 8?setPassMess("Password length should not less than 8"):setPassMess("")
  }


  const createUser = (e)=>{
    e.preventDefault()
    if(!validateEmail(email)){
      alert("Invalid email format")
      return
    }if(password.length<8){
      alert("Password Should be at least 8 characters long")
      return
    }
    dispatch(signUpUser({email, password}))
    alert("Please check your mail box")
    navigate('/login', {replace:true})
  }

    const goLogin = ()=>{
      navigate('/login', {replace:true})
    }

  return (
    <>
    <main className="w-screen bg-[#0b0b0b]">
      <div
        id="landingPage"
        className="w-[100vw] bg-[#ccc] h-[100vh] z-10 flex flex-col items-center justify-center"
      >
        <div
          className="md:w-[95%] md:h-[87vh] xsm:w-full xsm:h-full p-4 mx-[2.5%]  bg-white shadow-lg shadow-black md:rounded-3xl overflow-hidden flex items-center box-sizing justify-center gap-5"
        >
          
              <div className='lg:w-[26vw] sm:w-[50vw] xsm:w-full xsm:h-[85%] md:h-[70vh] bg-white  shadow-md shadow-black flex flex-col  items-center'>
        <div className='w-full h-[25%] flex flex-col justify-center items-center'>
        <h1 className='lg:text-[1.8em] xsm:text-[1.9rem] justify-self-start'>Signup Account</h1>
        <p className='text-[0.8em] font-thin-bold mt-2'>Enter your personal data to create account.</p>
        </div>
        <div className='h-[80%] w-[90%]'>
          <button className='w-full md:py-2 xsm:py-3 rounded-lg shadow-black shadow-md'>Google</button>
    <div className='h-[8%]  w-full md:mt-3 xsm:mt-5 flex justify-between items-center'>
      <div className='w-[45%] border-t-[0.1em] border-zinc-400'></div>
      or
      <div className='w-[45%] border-t-[0.1em] border-zinc-400'></div>
    </div>
    <div className='w-full h-[70%] '>

    <form action="" className='w-full h-full flex flex-col' onSubmit={createUser}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='md:py-3 px-2 xsm:py-3 rounded-2xl md:mt-4 xsm:mt-5 w-[98%] shadow-sm shadow-black outline-none' />
                <input type="password"
                  value={password}
                  onChange={validatePassword}
                  placeholder='Enter your password'
                  className='md:py-3 px-2 xsm:py-3 rounded-2xl md:mt-4 xsm:mt-5 w-[98%] shadow-sm shadow-black outline-none' />
                <p className='text-[0.8em] text-red-500'>{passMess}</p>
                <button
                  type='submit'
                  className='bg-[#3ab611] text-white py-3 px-2 md:mt-4 xsm:mt-5 w-[98%] rounded-2xl'>{loading?"Loading":"Create"}</button>
                <p className='text-center md:mt-4 xsm:mt-5 text-[0.8em]'>Already have an account?<span className='font-bold cursor-pointer' onClick={goLogin}>Login</span></p>
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

export default Signup
