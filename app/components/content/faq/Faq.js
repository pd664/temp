import React from 'react'
import FaqAcordian from './FaqAcordion'
function Faq() {
  return (
    <div className='container'>
        <div className='py-[5rem] flex justify-center'>
            <div className='max-w-5xl'>
                <div className='text-center '>
                    <h1 className='text-[rgb(239,54,24)] text-4xl sm:text-4xl md:text-6xl font-bold'>FAQ's</h1>
                    <p className='text-md text-slate-700 pt-[2rem] px-0 text-center container lg:container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>
                <div className='flex justify-center py-10 px-0'>
                    <FaqAcordian />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq