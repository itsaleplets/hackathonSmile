import React from 'react';
// import { useHistory } from 'react-router-dom';
import '../../styles/routes/Partners.css';
import '../../styles/routes/NextTrip.css';

import plane from '../../images/icons/plane.png';
import hotel from '../../images/icons/hotel.png'
import foods from '../../images/icons/foods.png'
import bike from '../../images/icons/bike.png'

function Partners() {
  return (
    <div>
      <p
      className="bold sumTitle partnerTitle"
      >
        Economize!
      </p>
      <p className="partnerSub">Temos ofertas em nossos parceiros para você.</p>
      
      <section className="partnersSection">
        <div className="partner">
          <img src={plane} alt="orange airplane" />
          <div>
            <p className="bold partnerText">Promoção</p>
            <p className="partnerText">em passagens</p>
          </div>
        </div>

        <div className="partner">
          <img src={hotel} alt="orange airplane" />
          <div>
            <p className="bold partnerText">Descontos</p>
            <p className="partnerText">em hotéis</p>
          </div>
        </div>

        <div className="partner">
          <img src={foods} alt="orange airplane" />
          <div>
            <p className="bold partnerText">Cupons</p>
            <p className="partnerText">de alimentação</p>
          </div>
        </div>

        <div className="partner">
          <img src={bike} alt="orange airplane" />
          <div>
            <p className="bold partnerText">Pacotes</p>
            <p className="partnerText">turísticos</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
