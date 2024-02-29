// Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';

function Dashboard() {
  const data = [
    {
      car: 'car1.jpg',
      carname: 'Mini Cooper 2020',
      nextReservation: '11/07',
      status: 'Available',
      rating: 4,
    },
    {
      car: 'car1.jpg',
      carname: 'Mini Cooper 2020',
      nextReservation: '11/08',
      status: 'Unavailable',
      rating: 1,
    },
    {
      car: 'car1.jpg',
      carname: 'Mini Cooper 2020',
      nextReservation: '11/09',
      status: 'Available',
      rating: 5,
    },
    {
      car: 'car1.jpg',
      carname: 'Mini Cooper 2020',
      nextReservation: '11/10',
      status: 'Unavailable',
      rating: 3,
    },
    {
      car: 'car1.jpg',
      carname: 'Mini Cooper 2020',
      nextReservation: '11/11',
      status: 'Available',
      rating: 4,
    },
    {
      car: 'car1.jpg',
      carname: 'Mini Cooper 2020',
      nextReservation: '11/12',
      status: 'Unavailable',
      rating: 2,
    },
  ];

  return (
    <div className='dashboard'>
      <Navbar />
      <div className='flex flex-col h-screen px-8'> 
        <Table data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
