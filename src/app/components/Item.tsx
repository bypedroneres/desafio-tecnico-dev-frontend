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
  const renderRatingStars = React.useMemo(() => {
    const stars = Array.from({ length: item.rating }, (_, index) => (
      <span key={index} className="mr-2">&#9733;</span>
    ));
    return stars;
  }, [item.rating]);

  return (
    <tr className='border border-gray-100 hover:bg-gray-100 cursor-pointer'>
      {/* Desktop style */}
      <td className="py-2 pl-4 hidden lg:table-cell">
        <div className="car-image flex items-center rounded" style={{ width: '40px', height: '40px' }}>
          <div className="car-image h-full w-full rounded" style={{ backgroundImage: `url(${item.car})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <span className="ml-2">{item.carname}</span>
        </div>
      </td>
      <td className="px-2 py-2 pl-6 hidden lg:table-cell text-gray-500">{item.nextReservation}</td>
      <td className="px-2 py-2 pl-6 hidden lg:table-cell">
        <span className={`px-2 py-1 rounded-md ${item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {item.status}
        </span>
      </td>
      <td className="py-2 pl-6 hidden lg:table-cell">{renderRatingStars}</td>
      <td className="py-2 pl-12 hidden lg:table-cell">
        <div className="actions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 24" width="10" height="24">
            <circle cx="5" cy="4" r="2" fill="#000"/>
            <circle cx="5" cy="12" r="2" fill="#000"/>
            <circle cx="5" cy="20" r="2" fill="#000"/>
          </svg>
        </div>
      </td>

      {/* Mobile style */}
      <td className="py-2 pl-4 lg:hidden relative">
        <div className="car-info flex items-center">
          <div className="relative" style={{ width: '40px', height: '40px' }}>
            <div className="absolute top-0 left-0">
              <span className={`text-2xl flex items-center justify-center ${item.status === 'Available' ? 'bg-green-400 text-white' : 'bg-red-400 text-white'} rounded-full h-8 w-8`}>
                {item.status === 'Available' ? '\u2713' : 'x'}
              </span>
            </div>
            <div className="car-image h-full w-full rounded" style={{ backgroundImage: `url(${item.car})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
          <div className="flex-grow px-4">
            <p className="text-base font-semibold">{item.carname}</p>
            <p className="text-sm text-gray-500">Next reservation: {item.nextReservation}</p>
            <p className="text-base text-black">{renderRatingStars}</p>
          </div>
          {/* Action */}
          <div className="actions flex w-1/6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 24" width="10" height="24">
              <circle cx="5" cy="4" r="2" fill="#000"/>
              <circle cx="5" cy="12" r="2" fill="#000"/>
              <circle cx="5" cy="20" r="2" fill="#000"/>
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Item;
