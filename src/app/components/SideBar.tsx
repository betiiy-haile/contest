import React from 'react';
import Image from 'next/image';
import { MdDashboard, MdLeaderboard } from 'react-icons/md';
import { FaRankingStar, FaUserGroup } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa'
import { RiSettingsLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className="relative w-[270px] h-full bg-white flex flex-col items-center justify-center">
            <Image src="/A2SV-Logo.svg" className="absolute left-10 top-10" alt="a2sv logo" width={160} height={80} />
            <ul className="flex flex-col gap-5 text-primaryGray-300 absolute top-40 left-10 font-poppins">
                <li className="flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                    <MdDashboard size={24} />
                    <span>DashBoard</span>
                </li>
                <li className="flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                    <FaRankingStar size={24} />
                    <span>Contest</span>
                </li>
                <li className="flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                    <FaUser size={24} />
                    <span>Users</span>
                </li>
                <li className="flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                    <RiSettingsLine size={24} />
                    <span>Settings</span>
                </li>
                <li className="flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                    <MdLeaderboard size={24} />
                    <span>LeaderBoard</span>
                </li>
                <li className="flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                    <FaUserGroup size={24} />
                    <span>Members</span>
                </li>
            </ul>
            <div className="absolute left-10 bottom-20 text-primaryGray-300 flex gap-8 hover:bg-[#F5F7FD] hover:text-primaryBlue-400 px-5 py-3">
                <FiLogOut size={24} />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;