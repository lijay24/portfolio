import React from 'react'
import  Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import insta from '../../assets/insta.png';
import linkedln from '../../assets/linkedln.png';
import twitter from '../../assets/twitter.png';
import pink from '../../assets/linesm.png';
const Footer = () => {
  return (
    <div className='p-5 text-center flex flex-col items-center gap-10'>
      <div className='h-[50px]'>
        <img className='h-[100%]' src={pink} alt="line" />
      </div>
      <section>
        <header className='text-4xl font-bold text-[#FD5956] mb-10'>Contact.</header>
        <p className='lg:w-[50%] lg:mx-auto lg:my-0'>Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still.</p>
      </section>
      <div>
          <img src={Logo} alt="logo" />
        </div>
        
      <section>
        <div className="flex gap-5 h-[23px]">
        <div className="h-[100%]"><img src={Facebook} alt="facebook" /></div>
        <div className="h-[100%]"><img src={insta} alt="insta" /></div>
        <div className="h-[100%]"><img src={linkedln} alt="linkedln" /></div>
        <div className="h-[100%]"><img src={twitter} alt="" /></div>
      </div>
      </section>
      <div>
        <h1>© 2021 AbbVie Inc. . All rights reserved</h1>
      </div>
      
    </div>
  )
}

export default Footer
