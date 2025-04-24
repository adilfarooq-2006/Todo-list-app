import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto bg-blue-800 px-5 py-2 text-white' >
        <div className="logo font-bold text-2xl">iTASKS</div>
        <ul className='flex md:gap-5 gap-2 cursor-pointer '>
            <li className='hover:font-bold transition-all'>Home</li>
            <li className='hover:font-bold transition-all'>About Us</li>
            <li className='hover:font-bold transition-all'>My Todos</li>
            <li className='hover:font-bold transition-all'>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar