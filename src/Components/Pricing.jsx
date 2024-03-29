import React from 'react'
import Messi from '../assets/messi.png'
import Neymar from '../assets/neymar.jpg'
import Suarez from '../assets/Suarez.png'

function Pricing() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[3rem] bg-white' src={Suarez} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1Granted user</p>
                    <p className='py-2 border-b mx-8'>Send to upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trials</button>
            </div>
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='bg-transparent w-20 mx-auto mt-[3rem] bg-white' src={Messi} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1Granted user</p>
                    <p className='py-2 border-b mx-8'>Send to upto 2GB</p>
                </div>
                <button className='bg-[#000000] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trials</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[3rem] bg-white' src={Neymar} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1Granted user</p>
                    <p className='py-2 border-b mx-8'>Send to upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trials</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing