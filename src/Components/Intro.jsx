import React from 'react'

export default function Intro() {
  return (
    <div className="wrap py-16">
        <div className="img-wrap">
            <img src="/d1.jpeg" className='w-[100px] mx-auto' alt="Nugget" />
        </div>

        <div className="socials flex gap-5 justify-center items-center font-light uppercase text-lg mt-5">
            <a href="#" className='underline'>Socials:</a>
            <a href="https://t.me/">Telegram</a>
            <a href="https://x.com/">X</a>
            <a href="#">Intagram</a>
            <a href="#">Discord</a>
        </div>

        <div className="wrap mt-16 text-center">
            <p className='uppercase font-xl'>A solana memecoin</p>
            <h1 className='lg:text-8xl text-4xl font-extrabold my-5 mt-3 font-jumb'>MEet $CHUCHU</h1>
            <span className='italic'>Isn't $CHCHU Adorable</span>
        </div>

        <div className="btn-wrap text-center my-10 ">
            <button className='p-4 px-7 border border-black font-jumb text-red-800'>Buy Now</button>
        </div>

        <div className="wrap py-5 my-5">
            <div className="flex flex-wrap gap-5 justify-center">
                <img src="/d1.jpeg" alt="chuchu" className='w-[400px]' />
                <img src="/d2.jpeg" alt="chuchu" className='w-[400px]' />
                <img src="/d3.jpeg" alt="chuchu" className='w-[400px]' />
                <img src="/d4.jpeg" alt="chuchu" className='w-[400px]' />
            </div>
        </div>
    </div>
  )
}
