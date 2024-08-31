import React from 'react'
import splash1 from '../../assets/splash1.png';
import splash2 from '../../assets/splash2.png';
import splash3 from '../../assets/splash3.png';
import splash4 from '../../assets/splash4.png';
import splash5 from '../../assets/splash5.png';
const Portfolio = () => {
  return (
    <main className='p-14 md:p-5 lg:p-32 text-center text-2xl'>
        <div>
        <header>Our Regurlar Updated</header>
        <p className='font-bold text-[#FD5956]'>Portfolio.</p>
        </div>
        <section className='grid md:grid-cols-3 gap-5'>
            <div className='  hidden md:block  row-span-2'>
                <img  className='h-[100%] ' src={splash1} alt="splash1" />
            </div>
            <div className='h-[200px] md:block hidden' >
                <img className='h-[100%] w-full' src={splash2} alt="splash2" />
            </div>
            <div className='h-[200px]' >
                <img className='h-[100%] w-full'src={splash3} alt="splash3" />
            </div>
            <div className='h-[200px]'>
                <img className='h-[100%] w-full' src={splash4} alt="splash4" />
            </div>
            <div className='h-[200px] '>
                <img  className='h-[100%] w-full'src={splash5} alt="splash5" />
            </div>
        </section>
    </main>
  )
}

export default Portfolio
