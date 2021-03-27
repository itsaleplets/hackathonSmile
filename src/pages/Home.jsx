import React from 'react';
import '../styles/form/Form.css'
import '../styles/routes/Home.css'

import Wallet from '../components/home/Wallet';
import NextTrip from '../components/home/NextTrip';
import Partners from '../components/home/Partners';
import SmilesClub from '../components/home/SmilesClub';
import MyNextTrips from '../components/home/MyNextTrips';

function Home() {

  return (
    <div className="bodyForm">
      <Wallet />
      <p className="bold nextTripTitle">Próxima Viagem</p>
      <NextTrip />
      <MyNextTrips />
      <SmilesClub />
      <Partners />
    </div>
  );
}

export default Home;
