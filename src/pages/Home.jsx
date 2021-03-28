import React, { useEffect, useState } from 'react';
import '../styles/form/Form.css'
import '../styles/routes/Home.css'

import Wallet from '../components/home/Wallet';
import NextTrip from '../components/home/NextTrip';
import Partners from '../components/home/Partners';
import SmilesClub from '../components/home/SmilesClub';
import MyNextTrips from '../components/home/MyNextTrips';
import { TripInfo } from '../services/api';
import Loading from '../components/form/Loading';

function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    investInfo();
  }, []);

  const investInfo = async () => {
    const result = await TripInfo();
    setData(result.response);
  };

  return (
    <div>
      {data ? <div className="bodyForm">
        <Wallet data={data}/>
        <p className="bold nextTripTitle">Próxima Viagem</p>
        <NextTrip data={data} />
        <MyNextTrips data={data} />
        <SmilesClub />
        <Partners />
      </div> : <Loading /> }
      
    </div>
  );
}

export default Home;
