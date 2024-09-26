import React from 'react'
import youtube from '../assets/images/youtube.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import '../Components/footer.css'

function Footer() {
  return (
    <div className='footer px-8 py-[4%] max-w-[1000px] my-0 mx-auto'>
    <div className="footer-icons flex gap-5 my-10 mx-0">
      <img src={youtube} className='w-[30px] cursor-pointer' />
      <img src={instagram} className='w-[30px] cursor-pointer' />
      <img src={facebook}  className='w-[30px] cursor-pointer'/>
      <img src={twitter} className='w-[30px] cursor-pointer' />
    </div>

    <ul className=' footer-ul text-white gap-4 mb-8 list-none'>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notice</li>
      <li>Cookie Preference</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className='text-sm text-gray-400'>1997-2024 Netflix, Inc.</p>
      
    </div>
  )
}

export default Footer
