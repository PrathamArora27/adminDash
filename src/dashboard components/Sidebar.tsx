import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <ul className="mt-4 space-y-2">
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Trips</li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Users</li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
