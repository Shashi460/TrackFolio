import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const End = () => {
return (
    <section className='bg-black w-full p-32 flex justify-center items-center gap-24 relative'>
        <Image src='/stockmarketimg1.jpg' layout='fill' objectFit='cover' alt='End' className='z-0 opacity-50'/>
        <div className='flex flex-col justify-center items-start py-10 px-12 rounded-lg gap-10 z-10'>
            <p className='text-white font-semibold font-monserrat text-xl border-2 border-white object-center text-center px-2'>
                Super Finance App
            </p>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600 font-moserrat text-8xl font-semibold'>
                Track All Your Finances at one place.
            </p>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 font-monserrat text-white text-lg font-normal'>
                    <Image src="/checkmark.jpg" height={10} width={30} alt='checkmark'/>
                    <p>Great Portfolio Tracker for all your Investments</p>
                </div>
                <div className='flex gap-4 font-monserrat text-white text-lg font-normal'>
                    <Image src="/checkmark.jpg" height={10} width={30} alt='checkmark'/>
                    <p>Diversify your Portfolio</p>
                </div>
            </div>
        </div>
    </section>
)
}

export default End