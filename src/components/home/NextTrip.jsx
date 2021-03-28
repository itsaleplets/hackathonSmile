import React, { useEffect, useState } from 'react';

import '../../styles/form/Wallet.css';
import '../../styles/routes/NextTrip.css';
import { TripInfo } from '../../services/api';
import airplane from '../../images/icons/airplane.png';
import stay from '../../images/icons/stay.png';
import food from '../../images/icons/food.png';
import extras from '../../images/icons/extras.png';
import location from '../../images/icons/location.png';
import CircleBar from './CircleBar';
import ProgressBar from './ProgressBar';

function NextTrip({ data }) {

  return (
    <div>
      
      <div className="destinyDiv">
        <img src={location} alt="location icon"/>      
        <span className="destiny">DESTINO</span>
      </div>

      <div className="mainDiv">
        <div className="sumDiv nextTripInfo">
          <div className="summary">
            <span className="bold sumTitle">Rio de Janeiro</span> <br/>
            <p className="nextTripLegend">{`${data.trip_date} - Faltam ${data.remaining_days} dias`}</p>
          </div>
          <div className="summary">
            <span className="bold sumTitle">{`R$ ${data.total},00`}</span>
            <p className=" nextTripLegend">Custo total</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="nextTripCosts">
          
          <section className="sectionCost">
            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={airplane} alt="airplane icon" />
                <span>Passagens</span>
              </div>
              <span className="size12px">{`R$ ${data.passagem}`}</span>
            </div>
            <ProgressBar progress={100}/>

            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={stay} alt="airplane icon" />
                <span>Hospedagem</span>
              </div>
              <span className="size12px">{`R$ ${data.hospedagem}`}</span>
            </div>
            <ProgressBar progress={100}/>

            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={food} alt="airplane icon" />
                <span>Alimentação</span>
              </div>
              <span className="size12px">{`R$ ${data.alimentacao}`}</span>
            </div>
            <ProgressBar progress={20}/>

            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={extras} alt="airplane icon" />
                <span>Custo Extra</span>
              </div>
              <span className="size12px">{`R$ ${data.extra}`}</span>
            </div>
            <ProgressBar progress={0}/>
          </section>
          
          <div className="circleProg">
            <CircleBar progress="60"/>
            <p className="size12px weight300 circleText">Valor investido para esta viagem</p>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default NextTrip;
