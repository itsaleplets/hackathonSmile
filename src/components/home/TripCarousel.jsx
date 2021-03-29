import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/form/Wallet.css';
import '../../styles/routes/NextTrip.css';
import '../../styles/routes/MyNextTrips.css'
import MyTripsProgress from './MyTripsProgress';
import rio from '../../images/rio.jpg';
import barcelona from '../../images/barcelona.jpg';
import location from '../../images/icons/location.png';
import bahia from '../../images/bahia.jpeg'

function TripCarousel({ data }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/trip-details');
  };

  return (
    <div onClick={handleClick} className="myTripsBody">
      <div className="myTrip">
        <img className="myTripImg"
          src={data.destination === 'Salvador' ? bahia : barcelona}
          alt="bahia beach"
        />
        <div className="myTripDestiny">
          <img src={location} alt="location icon" />
          <span>DESTINO</span>
        </div>

        <div className="myTripDiv">
          <div className="myTripInfo">
            <p>{data.destination}</p>
            <p>{data.total}</p>
          </div>
          <div className="myTripInfo">
            {data.destination === 'Salvador' ? <span>{`${data.trip_date} - Faltam ${data.remaining_days} dias`}</span> : <span>{data.status}</span>}

          </div>
          <MyTripsProgress progress={data} />
        </div>
      </div>
    </div>
  );
}

export default TripCarousel;
