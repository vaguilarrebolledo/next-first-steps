import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
   
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/pricing', label: 'Pricing' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href={'/'}>
            <HomeIcon size={24} className='mr-2' />
            <span>Home</span>
        </Link>

        <div className='flex flex-1'></div>
        {
            navItems.map(navItem => (
                <ActiveLink key={navItem.path} {...navItem} text={navItem.label} />
            ))
        }
            


    </nav>
  )
}
