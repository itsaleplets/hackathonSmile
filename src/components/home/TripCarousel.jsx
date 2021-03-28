import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/form/Wallet.css';
import '../../styles/routes/NextTrip.css';
import '../../styles/routes/MyNextTrips.css'
import MyTripsProgress from './MyTripsProgress';
import rio from '../../images/rio.jpg';
import barcelona from '../../images/barcelona.jpg';
import location from '../../images/icons/location.png';

function TripCarousel({ progress, payload }) {
  const history = useHistory();
  
  const handleClick = () => {
    history.push('/trip-details');
  };

  return (
    <div onClick={handleClick} className="myTripsBody">
      <div className="myTrip">
        <img className="myTripImg"
          src={payload.img === 'rio' ? rio : barcelona}
          alt="mountains and sea of Rio de Janeiro"
        />
        <div className="myTripDestiny">
          <img src={location} alt="location icon"/>      
          <span>DESTINO</span>
        </div>

        <div className="myTripDiv">
            <div className="myTripInfo">
              <p>{payload.title}</p>
              <p>{payload.value}</p>
            </div>
            <div className="myTripInfo"> 
              <span>{payload.status}</span>
            </div>
            <MyTripsProgress progress={payload.progress}/>
        </div>
      </div>
    </div>
  );
}

export default TripCarousel;
