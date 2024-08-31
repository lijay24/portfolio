import  Logo from '../../../assets/logo.png';
import hamburger from '../../../assets/handburger.svg';
import { useState } from 'react';
import propType from 'prop-types'

const Navbar = () => {
  const [handburger, setHamburger] =useState(false);
  return (
    <div className="flex items-center justify-between w-screen mx-5">
    <div>
      <img className='w-20' src={Logo} alt="logo" />
    </div>
    <div className='bg-black h[25px] w-[25px] md:hidden' onClick={()=>setHamburger((s)=>!s)}>
      <img className='h-full' src={hamburger} alt="hamburger" />
    </div>
    <ul className=' text-black gap-7 hidden md:flex text-bold'>
        <li className='hover:text-[#FD5956] underline  hover:underline-offset-4 text-[#FD5956]'><a href="#home"> Home</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#contributors">Contributors</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#about">About me</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#servcices"></a>Services</li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="portfolio">Portfolio</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#contact">Contact</a></li>
    </ul>
    <button className= 'hidden bg-black px-3 py-1 text-white font-bold md:block'>Portfolio Here</button>
    <MobileNav handburger={handburger}/>
    </div>
    
  );
};
function MobileNav({handburger }){
  return (
    <>
    { handburger && (
    <div className='bg-black absolute left-0 top-14 w-full p-5 text-white grid place-content-center gap-5'>
    <ul className=' text-black gap-5 text-bold'>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#home"> Home</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#contributors">Contributors</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#about">About me</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#servcices"></a>Services</li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="portfolio">Portfolio</a></li>
        <li className='hover:text-[#FD5956] hover:underline  hover:underline-offset-4'><a href="#contact">Contact</a></li>
    </ul>
    <button className= 'h bg-black px-3 py-1 text-white'>Portfolio Here</button>
    </div>
   
  )
} 
</>
  );
}
MobileNav.propType ={
  handburger: propType.bool,
};
export default Navbar
