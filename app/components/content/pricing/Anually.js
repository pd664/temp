import { Button } from '@/components/ui/button'
import React from 'react'
import Card from './Card'



function Anually() {
  return (
    <div className='flex justify-between gap-10'>
            <div className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row gap-10">

        <div className="pt-0 sm:pt-0 md:pt-10 lg:pt-10">
        <div className="lg:pt-5 sm:lg:pt-5 md:lg:pt-10 lg:pt-10 w-[400px] text-center pb-0">
            <div className="bg-white text-center rounded-t-[20px] h-10px">
              <p className="text-white py-3 text-lg">.</p>
            </div>
          </div>
            <Card planName={'Basic plan'} price={96} desc={'Ideal for small teams and startups.'} num={0} />
        </div>
        <div className="pt-0 sm:pt-0 md:pt-10 lg:pt-10">
          <div className="lg:pt-5 sm:lg:pt-5 md:lg:pt-10 lg:pt-10 w-[400px] text-center pb-0">
            <div className="bg-[rgb(242,76,39)] text-center rounded-t-[20px] h-10px">
              <p className="text-white py-3 text-lg">Most popular plan</p>
            </div>
          </div>
            <Card planName={'Business plan'} price={192} desc={'Growing teams up to 20 users.'} num={1} />
        </div>
        <div className="pt-0 sm:pt-0 md:pt-10 lg:pt-10">
        <div className="lg:pt-5 sm:lg:pt-5 md:lg:pt-10 lg:pt-10 w-[400px] text-center pb-0">
            <div className="bg-white text-center rounded-t-[20px] h-10px">
              <p className="text-white py-3 text-lg">.</p>
            </div>
          </div>
            <Card planName={'Enterprise plan'} price={384} desc={'Large teams with unlimited users.'} num={2} />
        </div>
    </div>
    </div>
  )
}

export default Anually