import React from 'react'
import design from "../../assets/99d.png";
import behance from "../../assets/behance.png";
import google from "../../assets/google.png";
import dribble from "../../assets/dribble.png";
import uplabs from "../../assets/uplabs.png";
const Contributors = () => {
  return (
    <div className=" text-black p-5">
      <main className=" text-center ">
        <header className="font-bold text-4xl">
        Contributors<span className="text-[#FD5956] text-4xl">.</span>
        </header>
        <p className='lg:w-[50%] lg:mx-auto lg:my-0'>
        They support products that simplify and automate decent mechanic processes saving time for activities.
        </p>
      </main>
      <section className='mt-5'>
        <div className='grid grid-cols-3 place-content-center gap-5 lg:place-items-center'>
        <div className='lg:w-[200px]'>
          <img src={behance} alt="behance" />
        </div>
        <div className='lg:w-[200px]'>
          <img src={google} alt="google" />
        </div>
        <div className='lg:w-[250px]'>
          <img src={dribble} alt="dribble" />
        </div>
        </div>
        <div className='grid grid-cols-2 place-items-center mt-5 '>
        <div className='w-[150px] md:w-[250px]'>
          <img src={uplabs} alt="uplab" />
        </div>
        <div className='w-[150px] md:w-[250px] '>
          <img src={design} alt="99" />
        </div>
        </div>
      </section>
    </div>
  )
}

export default Contributors
