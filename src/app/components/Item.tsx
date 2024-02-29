import React from 'react';

interface ItemProps {
  item: {
    car: string;
    carname: string;
    nextReservation: string; 
    status: string;
    rating: number;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <tr className='border border-gray-100 hover:bg-gray-100 cursor-pointer'>
      {/* Desktop style */}
      <td className="py-2 pl-4 hidden lg:table-cell">
        <div className="car-image flex items-center">
          <img src={item.car} alt="Car" className="h-10 w-10" />
          <span className="ml-2 ">{item.carname}</span>
        </div>
      </td>
      <td className="px-2 py-2 pl-6 hidden lg:table-cell text-gray-500">{item.nextReservation}</td>
      <td className=" px-2 py-2 pl-6 hidden lg:table-cell">
        <span className={`px-2 py-1 rounded-md ${item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {item.status}
        </span>
      </td>
      <td className="py-2 pl-6 hidden lg:table-cell">
        {Array.from({ length: item.rating }, (_, index) => (
          <span key={index} className="mr-2">&#9733;</span>
        ))}
      </td>
      <td className="py-2 pl-12 hidden lg:table-cell">
        <div className="actions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 24" width="10" height="24">
            <circle cx="5" cy="4" r="2" fill="#000" />
            <circle cx="5" cy="12" r="2" fill="#000" />
            <circle cx="5" cy="20" r="2" fill="#000" />
          </svg>
        </div>
      </td>

      {/* Mobile style */}
      <td className="py-2 pl-4 lg:hidden">
        <div className="car-info flex items-center">
          <img src={item.car} alt="Car" className="w-1/3" />
          <div className="ml-2 flex-grow">
            <p className="text-base font-semibold">{item.carname}</p>
            <p className="text-sm text-gray-500">Next reservation: {item.nextReservation}</p>
            <p className="text-base text-black">
              {Array.from({ length: item.rating }, (_, index) => (
                <span key={index} className="mr-2">&#9733;</span>
              ))}
            </p>
          </div>
          <div className="actions flex w-1/6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 24" width="10" height="24">
              <circle cx="5" cy="4" r="2" fill="#000" />
              <circle cx="5" cy="12" r="2" fill="#000" />
              <circle cx="5" cy="20" r="2" fill="#000" />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Item;
