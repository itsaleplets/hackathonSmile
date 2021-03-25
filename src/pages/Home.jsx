import React from 'react';
import '../styles/form/Form.css'
import Wallet from '../components/home/Wallet';
import NextTrip from '../components/home/NextTrip';

function Home() {

  return (
    <div className="bodyForm">
      <Wallet />
      <NextTrip />
    </div>
  );
}

export default Home;
