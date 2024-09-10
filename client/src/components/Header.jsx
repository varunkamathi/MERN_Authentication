import {Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold '> Auth App</h1>
            <ul className='flex gap-4'>
                <Link to= "/">
                <li className='font-bold'>Home</li>
                </Link>
                <Link to= "/about">
                <li className='font-bold'>About</li>
                </Link>
                <Link to= "/sign-in"> 
                <li className='font-bold'>Sign In</li> 
                </Link>
             </ul>
        </div>
        </div>
  );
}
