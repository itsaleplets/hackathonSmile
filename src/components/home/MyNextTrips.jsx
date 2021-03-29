import React from 'react';
import '../../styles/form/Wallet.css';
import '../../styles/routes/NextTrip.css';
import '../../styles/routes/MyNextTrips.css'
import { useHistory } from 'react-router-dom';
import TripCarousel from './TripCarousel';

function MyNextTrips({ data }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('create-trip');
  }

  const Barcelona = {
    destination: 'Barcelona',
    total: 'R$ 2.000',
    status: 'Concluido',
    percent: 100,
  };

  return (
    <div className="myTripsBody">
      <div className="myTripsTop">
        <h1 className="myTripsTitle">Minhas Viagens</h1>
        <button
          name="teste"
          className="btn walletBtn"
          onClick={handleClick}
        >
          Criar Viagem
          </button>
      </div>
      <div className="carousel">
        <TripCarousel data={data} />
        <TripCarousel data={Barcelona} />
      </div>

    </div>
  );
}

export default MyNextTrips;
