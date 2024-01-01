import React, { useState } from 'react'

import picture from '../assets/stock/login.jpeg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()
    const loginAccount = async () => {
        try {
            const response = await axios.post('http://localhost:3001/auth/login', { email, password })
            console.log("success");
            localStorage.setItem()
            navigate('/dashboard');
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div className="h-screen w-full flex ">
                <div className="w-[50dvw] w-[50vw] h-full" style={{backgroundImage:`url(${picture})`}}>
                </div>
                <div className="w-[50dvw] w-[50vw] h-[full]">
                    <div className="flex justify-between h-[65vh] items-center flex-col">
                        <h1 className="text-4xl relative top-12 right-80 font-extrabold">Eduhub</h1>
                        <div className="mr-16">
                            <div className="flex justify-center items-center relative ">
                                <h1 className="font-bold text-4xl mr-40">Login</h1>
                            </div>
                            <div className="w-[50vw] flex justify-center pt-10 items-center flex-col ">
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="email" className='font-bold'>Email</label>
                                    <input type="email" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}} className='focus:border-blue-400 w-[150%] py-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 pl-2 ' id="" />
                                </div>
                                <div className="flex flex-col mt-7">
                                    <label htmlFor="email" className='font-bold'>Password</label>
                                    <input type="password" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}} className='focus:border-blue-400 w-[150%] py-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 pl-2 ' id="" />
                                </div>
                                <div className="">
                                    <button onClick={loginAccount} className='bg-black py-2 px-4 text-white rounded-lg mr-48 mt-10 hover:scale-110'>Login</button>
                                </div>
                                <div className="mr-16 mt-4">
                                    <p className="">New user need help? <span className='text-slate-400 underline'>sign up</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
