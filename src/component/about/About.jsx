import React from 'react'
import Aboutimg from '../../assets/imageabout.png';
import dot from '../../assets/dots.png';
import round from '../../assets/round.png';
const About = () => {
  return (
    <div className=' text-black p-14 relative '>
      <main className=' text-center'>
        <header className='font-bold text-3xl my-5'>About me<span className='text-[#FD5956] text-4xl'>.</span></header>
        <p className='lg:w-[50%] lg:mx-auto lg:my-0' >I&apos;m Justin Vaccaro and i do web design, Graphic Design, User Experiences. habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
      </main>
      <div className='bg-about-pattern bg-contain bg-no-repeat place-content-center items-center h-[550px] pt-10 mx-auto my-0 ml-96'>
      <section className='w-[100%] mx-auto my-0 h-[450px]'>
        <div className='h-[100%] '>
          <img className='h-[100%]  mr-60' src={Aboutimg} alt="about img" />
        </div>
      </section>
      </div>
      <article className=' hidden md:block absolute top-40 h-[200px]'>
        <img  className='h-[100%]'src={dot} alt="dots" />
      </article>
      <article className=' hidden  md:block absolute right-48 bottom-40 h-[150px] '>
        <img  className='h-[100%]'src={round} alt="round" />
      </article>
      
    </div>
  )
}

export default About
