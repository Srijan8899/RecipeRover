import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import pizza from '../assets/pizza.jpg'

function Signup() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const apiURL = import.meta.env.VITE_SERVER_URL;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  //To handle backend on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setErrorMessage(null);
      const res = await fetch(`${apiURL}/user/signup`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        navigate("/login");
        toast.success("Signup Successful");
      }
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex font-['Founders_Grotesk_X_Condensed'] text-[#5e968b]">
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#5e968b] space-y-8 text-[#466e66] font-['Neue_Montreal']">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form
            onSubmit={handleSubmit}
            className="bg-[#F8FAE5] rounded-md shadow-4xl p-5"
          >
            <h1 className="text-[#43766C] font-[600] text-4xl mb-3">
              Hello There!
            </h1>
            <p className="text-2xl font-light text-[#43766C] mb-8">
              Welcome to our website
            </p>
            <div className="flex gap-4">
              <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                    ></circle>{" "}
                    <path
                      d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <input
                  className="bg-[#F8FAE5] text-xl pl-2 w-full focus:ring-[#F8FAE5] border-none"
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl">
              <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                    ></circle>{" "}
                    <path
                      d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <input
                  className="bg-[#F8FAE5] text-xl pl-2 w-full focus:ring-[#F8FAE5] border-none"
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                className="bg-[#F8FAE5] text-xl pl-2 w-full focus:ring-[#F8FAE5] border-none"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 w-full focus:ring-[#F8FAE5] border-none bg-[#F8FAE5] text-xl"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="flex items-center border-2 mb-6 py-1 px-3 rounded-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 w-full focus:ring-[#F8FAE5] border-none bg-[#F8FAE5] text-xl"
                type="password"
                name="cpassword"
                id="cpassword"
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-[#43766C] mt-5 py-2 rounded-2xl hover:bg-[#39665d] hover:-translate-y-1 transition-all duration-500 text-[#F8FAE5] font-light tracking-wide mb-2 text-2xl"
            >
              Signup
            </button>
            {/* <button
              type="submit"
              className="flex items-center justify-center w-full bg-[#43766C] my-5 py-2 rounded-2xl hover:bg-[#39665d] hover:-translate-y-1 transition-all duration-500 text-[#F8FAE5] font-light text-2xl "
            >
              {" "}
              <FcGoogle size={30} className="mr-4" /> Signup with google{" "}
            </button> */}
          </form>
        </div>
      </div>
      <div className="relative image w-1/2 flex flex-col">
        <img
          src={pizza}
          alt="food"
          className="absolute bg-cover w-full object-cover h-screen z-1 opacity-80 brightness-75"
        />
        <div className="flex items-center justify-center w-full h-full text-[#F8FAE5]">
          <div className="uppercase absolute top-48 text-[10vw] font-light ">
            {" "}
            Existing User?
          </div>
          <Link
            to="/login"
            className="absolute flex items-center justify-center mt-20"
          >
            <button className="absolute flex items-center justify-center border rounded-2xl px-10 pb-6 text-4xl pt-6 leading-[.6] bg-[#43766C] uppercase tracking-tight font-['Neue_Montreal']">
              Login
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
