import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function Signup() {
  const [fromData, setFromData] = useState({});
  const handleChange = (e) => {
    setFromData({...fromData, [e.target.id]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefult();
    const res = await fetch('/api/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(fromData),
    });
    const data = await res.json();
    console.log(data); {message : 'User created successfully'}
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1  className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'onChange={handleChange}/>
        <input type= "email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type= "password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button className='bg-black text-cyan-50 rounded-xl p-3 uppercase hover:opacity-80'>sign up</button>
        
      </form>
      <div className='flex gap-2 mt-3'><p>Have a account</p>
        <Link to='/sign-in'>
        <span className='text-blue-400'>Sign-in</span>
        </Link>
        </div>
      </div>
  );
}
