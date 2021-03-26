import React from 'react';
import '../styles/form/Form.css'
import '../styles/routes/TripDetails.css'

import arrowBack from '../images/icons/white_arrow.png';
import NextTrip from '../components/home/NextTrip';
import { useHistory } from 'react-router-dom';

function TripDetails() {
  const history = useHistory();

  const handleClick = ({ target }) => {
    const { name } = target;
    if(name === "invest") {
      history.push('/invest')
    } else {
      history.push('/')
    }
  };

  return (
    <div className="bodyForm">
      <div className="imgBackgroung">
        <button
          name="back"
          className="backBtn btnDetails"
          onClick={handleClick}
        >
          <img src={arrowBack} alt="left arrow" />
        </button>
      </div>

      <NextTrip />

      <div className="detailTexts">
        <p className="detailText">Falta pouco para alcançar seu objetivo!</p>
        <p className="detailSubText">Os valores são calculados pelo feedback de outros viajantes</p>
      </div>
      <button
          name="invest"
          className="abledBtn"
          onClick={handleClick}
        >
          Investir na viagem
        </button>
    </div>
  );
}

export default TripDetails;
