import React, { useState } from 'react';
import '../../styles/form/Wallet.css';
import '../../styles/routes/NextTrip.css';
import '../../styles/routes/MyNextTrips.css'
import { useHistory } from 'react-router-dom';
import TripCarousel from './TripCarousel';

function MyNextTrips() {
  const history = useHistory();
  // const [card1, setCard1] = useState('');
  // const [card2, setCard2] = useState('');
  // const [caroulsel, setCarousel] = useState(1);


  const handleClick = () => {
    history.push('create-trip');
  }

  const Rio = {
    title: 'Rio de Janeiro',
    value: 'R$ 2.500',
    status: '18/10/2021 - Faltam 180 dias',
    progress: 60,
    img: 'rio'
  };

  const Barcelona = {
    title: 'Barcelona',
    value: 'R$ 2.000',
    status: 'Concluido',
    progress: 100,
    img: 'barcelona'
  };

  const Paris = {
    title: 'Paris',
    value: 'R$ 5.500',
    status: '18/10/2021 - Faltam 180 dias',
    progress: 60,
    img: 'paris'
  };

  const Roma = {
    title: 'Roma',
    value: 'R$ 7.000',
    status: 'Concluido',
    progress: 100,
    img: 'roma'
  };
  
  // const handleCarousel = ({ target }) => {
  //   if(target.name === "go") {
  //     setCarousel(caroulsel + 1);
  //   } else {
  //     setCarousel(caroulsel - 1);
  //   }
  // }

  // switch(caroulsel) {
  //   case 1:
  //     setCard1(Rio);
  //     setCard2(Barcelona);
  //     break;
  //   case 2:
  //     setCard1(Paris);
  //     setCard2(Roma);
  //     break;
  //   default:
  // };

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
        {/* <button onClick={handleCarousel}>
          aqui
        </button> */}
        <TripCarousel payload={Rio} progress={60}/>
        <TripCarousel payload={Barcelona} progress={100}/>
      </div>
      
    </div>
  );
}

export default MyNextTrips;
