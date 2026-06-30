"use client";

import { useState } from 'react';
import Link from 'next/link';

// Your data source
const cves = [
  { id: 'CVE-2024-3094', title: 'XZ Utils Backdoor — Supply Chain Compromise', severity: 'Critical', status: 'Open' },
  { id: 'CVE-2024-21762', title: 'Fortinet SSL-VPN Out-of-Bounds Write RCE', severity: 'High', status: 'In Review' },
  { id: 'CVE-2024-32002', title: 'Git Submodule Arbitrary Code Execution', severity: 'Medium', status: 'Patched' },
];

export default function Dashboard() {
  const [filter, setFilter] = useState('All');

  // Filter the data based on selection
  const filteredData = filter === 'All' 
    ? cves 
    : cves.filter((cve) => cve.status === filter);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Vulnerability Dashboard</h1>
      
      {/* Filter Buttons */}
      <div className="mb-6 space-x-2">
        {['All', 'Open', 'In Review', 'Patched'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded transition-colors ${
              filter === status ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">CVE ID</th>
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="p-2">
                <Link href={`/vulnerability/${item.id}`} className="text-blue-600 underline font-medium">
                  {item.id}
                </Link>
              </td>
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}