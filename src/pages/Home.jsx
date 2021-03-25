import React from 'react';
import '../styles/form/Form.css'
import Wallet from '../components/home/Wallet';
import NextTrip from '../components/home/NextTrip';
import Partners from '../components/home/Partners';

function Home() {

  return (
    <div className="bodyForm">
      <Wallet />
      <NextTrip />
      <h1>My next trips</h1>
      <Partners />
    </div>
  );
}

export default Home;
