import React, { useEffect, useRef } from 'react'
import search from '../assets/images/search.png'
import bell from '../assets/images/notification-bell.png'
import dropdown from '../assets/images/down-chevron.png'
import '../Components/navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  const navRef = useRef();

  useEffect(() => {
   window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }
    else{
      navRef.current.classList.remove('nav-dark')
    }
   })
  }, [])

  const handleLogout =()=>{
    signOut(auth)
    navigate('/login')
  };
  

  return (
    <div ref={navRef} className='flex w-full justify-between fixed px-[6%] py-[20px] text-[14px] text-[#e5e5e5] z-[1]'>
      <div className="navbar-left flex items-center gap-12">
        <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"  width={150} />
        <ul className='text-white flex list-none gap-5 cursor-pointer'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language </li>
        </ul>
      </div>
      <div className="navbar-right flex items-center gap-5 cursor-pointer">
        <img src={search} width={20}  />
        <p>Children</p>
        <img src={bell} width={20} />
        <div className="navbar-profile flex items-center gap-2 cursor-pointer relative">
          <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" width={35} className='rounded-[4px]' />
          <img src={dropdown} width={20} />
          <div className="dropdown absolute top-full right-0 w-max bg-[#191919] px-6 py-4 underline z-[1] hidden group-hover:block">
          </div>
            <button onClick={handleLogout} className='bg-red-500 text-sm p-2 rounded-lg'>Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
