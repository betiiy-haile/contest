import React from 'react';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { FiLoader } from "react-icons/fi";
import Link from 'next/link';
import ContestFilter from './ContestsFilter';

type Contest = {
    name: string;
    createdBy: string;
    questions: string;
    allowedHours: string;
    participant: string;
    attendance: string;
    date: string;
    status: string;
};

type Participant = {
    name: string;
    codeforceHandle: string;
    totalSubmission: string;
    wrongSubmission: string;
    probleSolved: string;
    conversionRate: string;
    rank: string;
};

type User = {
    name: string;
    email: string;
    role: string;
    emailVerfication: string;
    actions: string;
};

type Prop = {
    type: 'contests' | 'participants' | 'users';
    data: Contest[] | Participant[] | User[];
    headers: string[];
};

const isContest = (item: any): item is Contest => {
    return item && item.name && typeof item.name === 'string';
};

const isParticipant = (item: any): item is Participant => {
    return item && item.codeforceHandle && typeof item.codeforceHandle === 'string';
};

const isUser = (item: any): item is User => {
    return item && item.email && typeof item.email === 'string';
};

const Table = ({ data, headers, type }: Prop) => {
    return (
        <div className="absolute top-[150px] left-[350px] w-[1400px] overflow-x-auto sm:rounded-lg">
            <ContestFilter />
            <table className="w-full border rounded-lg text-sm text-left rtl:text-right text-gray-500 shadow-md">
                <thead className="text-xs text-[#6B7280] uppercase bg-gray-50">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            {isContest(item) && type === 'contests' && (
                                <>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-[#6B7280] whitespace-nowrap"
                                    >
                                        <Link href={`/contest/${item.name}`}>{item.name}</Link>
                                    </th>
                                    <td className="px-6 py-4">{item.createdBy ? item.createdBy : ''}</td>
                                    <td className="px-6 py-4">{item.questions}</td>
                                    <td className="px-6 py-4">{item.allowedHours}</td>
                                    <td className="px-6 py-4">{item.participant}</td>
                                    <td className="px-6 py-4">{item.attendance}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-2">
                                        {item.status === 'completed' ? (
                                            <div className="flex gap-5 items-center">
                                                <span className="text-green-400">
                                                    <MdOutlineCheckCircle size={28} />
                                                </span>
                                                <span>Completed</span>
                                            </div>
                                        ) : (
                                            <div className="flex gap-5 items-center">
                                                <span className="text-red-400">
                                                    <FiLoader size={28} />
                                                </span>
                                                <span>Upcoming</span>
                                            </div>
                                        )}
                                    </td>
                                </>
                            )}
                            {isParticipant(item) && type === 'participants' && (
                                <>
                                    {/* Render table cells for participant type */}
                                </>
                            )}
                            {isUser(item) && type === 'users' && (
                                <>
                                    {/* Render table cells for user type */}
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;