import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function SellMore() {
  return (
    <div className='container'>
        <div className='pt-8'>
            <div className=''>
                <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row items-center '>
                    <div className='flex-1 flex flex-col gap-5'>
                        <div className='text-[rgb(239,54,24)] flex flex-col gap-5 text-4xl sm:text-4xl md:text-6xl lg:text-6xl'>
                            <h1 className='font-bold'>Sell More,</h1>
                            <h1 className='font-bold'>Sell Faster,</h1>
                            <h1 className='font-bold'>Sell Better.</h1>
                        </div>
                        <div className='py-5'>
                            <p className='text-xl text-slate-800'>Manage every sale from one centeral location,</p>
                            <p className='text-xl text-slate-800'>Whether it's from an email, your website, or a sale rep.</p>

                        </div>
                        <div className='flex gap-5 pt-0 sm:pt-0 md:pt-5 lg:pt-5 '>
                            <div className=''>
                                <Button className="text-slate-700 border border-slate-500 text-md px-4 py-4 font-medium" variant="outline">Book a demo</Button>
                            </div>
                            <div className=''>
                                <Button className="text-md px-4 py-4 font-medium">Start Free Trial</Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='py-[3rem] sm:py-[3rem] md:py-0 lg:py-0'>
                            <Image src='/sellMore.png' 
                            alt="Example Image"
                            // layout="responsive"
                            width={1800}
                            height={900}
                            className="w-full h-auto rounded-tr-[20px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellMore