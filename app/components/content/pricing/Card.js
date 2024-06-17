import { Button } from '@/components/ui/button'
import React from 'react'

const listData = [
    ['Access to all basic features','Basic reporting and analytics','Up to 10 individual users','20GB individual data each user','Basic chat and email support'],
    ['200+ integrations', 'Advanced reporting and analytics', 'Up to 20 individual users', '40GB individual data each user','Priority chat and email support'],
    ['Advanced custom fields','Audit log and data history','Unlimited individual users','Unlimited individual data','Personalised+priotity service']
]

function Card({ planName, price, desc, num }) {
    return (
        <div className='p-5 shadow border border-slate-100 w-[25rem]'>
            <div className=''>
                <div className='text-center'>
                    <p className='font-medium text-2xl'>{planName}</p>
                    <p className='ml-1 text-base font-light leading-6 font-xl'><span className='text-[3rem] font-semibold leading-[1.2]'>${price}</span>/month</p>
                    <p className='text-xl text-slate-700 pt-[2rem]'>{desc}</p>
                </div>
                <ul className='flex flex-col gap-5 py-5'>
                    {
                        listData[num].map((data, index) => {
                            return (
                                <li key={index} className='flex gap-3 text-lg leading-6'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z" fill="#12B76A"></path>
                                </svg>{data}</li>
                            )
                        })
                    }
                </ul>
                <div className='w-[100%]'>
                    <Button className="w-[100%]">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Card