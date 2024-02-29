import React from 'react';
import Item from './Item';

interface TableProps {
  data: any[]; // Assuming your data is an array of objects
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
  <div className="table-responsive border border-gray-100 shadow-lg rounded-md mt-40">
      <table className="table bg-white w-full">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Car</th>
            {/* Hide the subtitle on mobile */}
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">NEXT RESERVATION</th>
            {/* Hide the subtitle on mobile */}
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">STATUS</th>
            {/* Hide the subtitle on mobile */}
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">RATING</th>
            {/* Hide the subtitle on mobile */}
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
