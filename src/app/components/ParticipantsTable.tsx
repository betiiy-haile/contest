import React from 'react';
import Link from 'next/link';
import ContestFilter from './ContestsFilter';


type Participant = {
    name: string;
    codeforceHandle: string;
    totalSubmission: string;
    wrongSubmission: string;
    problemSolved: string;
    conversionRate: string;
    rank: string;
};


type Prop = {
    data: Participant[]
    headers: string[];
};



const ParticipantsTable = ({ data, headers }: Prop) => {
    return (
        <div className="absolute top-[150px] left-[350px] w-[1100px] overflow-x-auto sm:rounded-lg">
            {/*  students filter part goes here  */}
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
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-[#6B7280] whitespace-nowrap"
                            >
                                <Link href={`/contest/${item.name}`}>{item.name}</Link>
                            </th>
                            <td className="px-6 py-4">{item.codeforceHandle}</td>
                            <td className="px-6 py-4">{item.totalSubmission}</td>
                            <td className="px-6 py-4">{item.wrongSubmission}</td>
                            <td className="px-6 py-4">{item.problemSolved}</td>
                            <td className="px-6 py-4">{item.conversionRate}</td>
                            <td className="px-6 py-4">{item.rank}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantsTable;