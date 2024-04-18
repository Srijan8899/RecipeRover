import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";

function Signup({ onLogin }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Here you can perform validation, authentication, etc.
  //   // For simplicity, I'm just passing the username to the parent component
  //   onLogin(username);
  // };

  const [formData, setFormData] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //To handle backend on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/signup', {       //need to check 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5]">
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#5e968b] space-y-8 text-[#466e66] font-['Neue_Montreal']">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form onSubmit={handleSubmit} className="bg-[#F8FAE5] rounded-md shadow-4xl p-5">
              <h1 className="text-[#43766C] font-[600] text-4xl mb-3">Hello There!</h1>
              <p className="text-2xl font-light text-[#43766C] mb-8">Welcome to our website</p>
              <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="username" className="bg-[#F8FAE5] text-xl pl-2 w-full outline-none border-none" type="text" name="fullName" onChange={handleChange} placeholder="Your Full Name" />
              </div>
              <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="email" className="bg-[#F8FAE5] text-xl pl-2 w-full outline-none border-none" type="email" name="email" onChange={handleChange}  placeholder="Email Address" />
              </div>
              <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 w-full outline-none border-none bg-[#F8FAE5] text-xl" type="password" name="password" id="password" onChange={handleChange} placeholder="Password" />
              </div>
              <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 w-full outline-none border-none bg-[#F8FAE5] text-xl" type="password" name="cpassword" id="cpassword" onChange={handleChange} placeholder="Confirm Password" />
              </div>
              <button type="submit" className="block w-full bg-[#43766C] mt-5 py-2 rounded-2xl hover:bg-[#39665d] hover:-translate-y-1 transition-all duration-500 text-white font-light tracking-wide mb-2 text-2xl">Signup</button>
              <button type="submit" className="block w-full bg-[#43766C] my-5 py-2 rounded-2xl hover:bg-[#39665d] hover:-translate-y-1 transition-all duration-500 text-white font-semibold text-2xl "> <FcGoogle/> Signup with google </button>
            </form>
            </div>
    </div>
        <div className="relative image w-1/2 flex flex-col">
            <img src="./src/assets/pizza.jpg" alt="food" className="absolute bg-cover w-full object-cover h-screen z-1 opacity-80 brightness-75"/>
            <div className="flex items-center justify-center w-full h-full">
            <div className="uppercase absolute top-48 text-[10vw] font-light "> Existing User?</div>
            <Link to="/login" className="absolute flex items-center justify-center mt-20">
            <button className="absolute flex items-center justify-center border rounded-2xl px-10 pb-6 text-4xl pt-6 leading-[.6] bg-[#43766C] uppercase tracking-tight font-['Neue_Montreal']">Login</button> </Link>
        </div></div>

        {/* {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )} */}

    </div>
  )
}

export default Signup;