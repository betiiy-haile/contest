import NavBar from '@/app/components/NavBar'
import ParticipantsTable from '@/app/components/ParticipantsTable';
import Sidebar from '@/app/components/SideBar'
import Table from '@/app/components/Table'
import React from 'react'

type Participant = {
    name: string;
    codeforceHandle: string;
    totalSubmission: string;
    wrongSubmission: string;
    probleSolved: string;
    conversionRate: string;
    rank: string;
}; 

const participants = [
    {
        name: 'Ibsa Abraham',
        codeforceHandle: '@Ibsa',
        totalSubmission: '6',
        wrongSubmission: '2',
        problemSolved: '30',
        conversionRate: '0.83',
        rank: '2'
    },
    {
        name: 'Ibsa Abraham',
        codeforceHandle: '@Ibsa',
        totalSubmission: '6',
        wrongSubmission: '2',
        problemSolved: '30',
        conversionRate: '0.83',
        rank: '2'
    },
    {
        name: 'Ibsa Abraham',
        codeforceHandle: '@Ibsa',
        totalSubmission: '6',
        wrongSubmission: '2',
        problemSolved: '30',
        conversionRate: '0.83',
        rank: '2'
    },
    {
        name: 'Ibsa Abraham',
        codeforceHandle: '@Ibsa',
        totalSubmission: '6',
        wrongSubmission: '2',
        problemSolved: '30',
        conversionRate: '0.83',
        rank: '2'
    }
]

const ParticipantsHeader = [
    'Student Name', 'Codeforce Handle', 'Total Sumission', 'Wrong Submission', 'Problems Solved', 'Conversion Rate', 'Rank'
]

const ContestDetail = () => {
  return (
        <div className='bg-[#F6F6F9] h-screen relative '>
            <Sidebar />
            <NavBar />
            <ParticipantsTable data={participants} headers={ParticipantsHeader} />
        </div>       
    )
}

export default ContestDetail
