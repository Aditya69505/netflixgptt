import { useState } from "react";
import Header from "./Header";
const Login=() =>{
        
       const[isSignInForm,setIsSignInForm]=useState(true);

       const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
       };


    return <div className="relative">
        <Header />
        <div className="absolute z-[-1]">
         <img className="w-screen h-screen" src="https://imgs.search.brave.com/8luuq-K_BXc9TUs-vfkwtzQQbD9q_ms6bgvfyZcMPS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE0ODE4/ODE3LndlYnA" alt="logo" />
        </div>
        <form  className="w-full md:w-3/12 absolute p-4 md:p-12 bg-black my-24 md:my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg" >

           <h1 className="font-bold text-xl md:text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm &&(
                <input type="text"
                placeholder="Full Name"
                className="p-4 my-2 w-full bg-gray-800 "
            />)}
            <input type ="text"
            placeholder="Email Address" className="p-4 my-2 w-full bg-gray-800 " />
            <input type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800" />

            <button className="p-4 my-4 bg-red-600 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}

            </button>

            <p className="py-4 cursor-pointer "onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix ? Sign Up Now":" Already registed? Sign in now"}</p>
        </form>
    </div>
}
export default Login;