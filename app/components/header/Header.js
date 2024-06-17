'use client'
import Image from 'next/image'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Popup from './Popup'
import { Button } from '@/components/ui/button'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuClasses = `
  absolute top-[calc(100% + 8px)] pt-3 left-0 right-0 bg-white shadow-lg mt-2 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
`;
  return (
    <header className="sm:container w-100 sticky px-0 lg:top-0 bg-[white] z-10 fixed ">
      <div className={`container flex justify-between border-bottom sm:px-2 py-4 gap-10`}>
        <div className="flex items-center gap-8">
          <Link href={'/'}>
            <Image src="/logo.png" alt="logo" width={200} height={200} unoptimized />
          </Link>
        </div>
        <div className="hidden lg:block">
            <div className=''>
                <div className=''>
                    <ul className='flex gap-[3rem] items-center'>
                        <li className='hover:cursor-pointer'>Home</li>
                        <li className='hover:cursor-pointer'>Features</li>
                        <li className='hover:cursor-pointer'>Pricing</li>
                        <li className='hover:cursor-pointer'>Contact</li>
                        <li className='hover:cursor-pointer'>
                          <div className='flex gap-[3rem]'>
                            <Popup title={'Sign In'} bg={'white'} text={'blue-500'} px={0}/>
                           
                          </div>
                        </li>
                        <li className='hover:cursor-pointer'><Button className="text-md px-4 py-4 font-medium">Book a Demo</Button></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="lg:hidden sm:block block transition-transform duration-300 ease-in-out delay-100">
          <button onClick={toggleMenu} className='text-[rgb(239,54,24)]'>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          {isMenuOpen && <div className={menuClasses}>
            <div className="flex flex-col items-start gap-4 p-8 bg-[rgb(143,32,14)]">
            <div className=''>
                    <ul className='space-y-4'>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        <li>
                          <div className='flex gap-5 w-[20rem]'>
                            <Popup title={'Sign In'} bg={'white'} text={'blue-500'} px={4}/>
                            <li className=''><Button className="text-lg px-4 py-4 font-medium">Book a Demo</Button></li>
                          </div>
                        </li>
                    </ul>
                </div>
            </div>

          </div>}
        </div>
      </div>
    </header>
  );
}

export default Header;




