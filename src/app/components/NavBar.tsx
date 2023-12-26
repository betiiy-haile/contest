import React from 'react'
import { TbCoins } from 'react-icons/tb'
import { IoChatboxEllipsesOutline, IoNotificationsOutline } from 'react-icons/io5'
import { MdOutlineExpandMore } from "react-icons/md"


const NavBar = () => {
    return (
        <nav className='absolute top-0 lg:left-[270px] bg-white right-0 flex justify-between items-center px-24 font-poppins'>
            <div className='my-5 flex gap-5 '>

             {/* this part should be related to the routes of the page  ( useRouter() ) */}
                <TbCoins size={24} />
                <span>/</span>
                <span>contests</span>

            </div>
            <div className='flex items-center gap-8'>
                <IoChatboxEllipsesOutline size={24} />
                <IoNotificationsOutline size={24} />
                <div className='flex gap-2 items-center'>
                    <span>John Doe</span>

                    <div className='w-12 h-12 overflow-hidden rounded-full'>
                        <img src='/image.jpg' alt='profile image' className='object-cover w-full h-full ' />
                    </div>
                    <span >
                        <MdOutlineExpandMore size={24} />
                    </span>
                </div>

            </div>

        </nav>
    )
}

export default NavBar
