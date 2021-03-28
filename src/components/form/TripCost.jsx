import React, { useEffect, useState } from 'react';
import '../../styles/form/Form.css'
import '../../styles/form/TripCost.css'
import PrevButton from './../sharedComponents/PrevButton';
import { connect } from 'react-redux';
import { TripInfo } from '../../services/api';

import mainImg from '../../images/cost.png';
import airplane from '../../images/icons/airplane.png';
import stay from '../../images/icons/stay.png'
import food from '../../images/icons/food.png'
import extras from '../../images/icons/extras.png'
import Loading from './Loading';

function TripCost({ nextStep, prevStep }) {
  const [data, setData] = useState('');

  useEffect(() => {
    const get = async () => {
      await investInfo();
    };

    get();
  }, []);
  
  const investInfo = async () => {
    const result = await TripInfo();
    setData(result.response);
  };

  const handleClick = () => {
    nextStep();
  }

  return (
    <div>
    {data ? <div className="body bodyForm">
      <PrevButton prevStep={prevStep} />
      <div className="mainDiv">

        <img
          className="mainImg"
          src={mainImg}
          alt="pig safe"
        />
        <p className="bold title">Custo médio para sua viagem!</p>

        <div className="sumDiv">
          <div className="summary">
            <span className="bold sumTitle">{data.destination}</span> <br/>
            <p className="size12px weight300">{`${data.trip_date} - Faltam ${data.remaining_days} dias`}</p>
          </div>
          <div className="summary">
            <span className="bold sumTitle">{`R$ ${data.total}`}</span>
            <p className="size12px weight300">Custo total</p>
          </div>
          
        </div>
        <div className="costs">
          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={airplane} alt="airplane icon" />
              <span>Passagens</span>
            </div>
            <span className="size12px">{`R$ ${data.passagem}`}</span>
          </div>

          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={stay} alt="airplane icon" />
              <span>Hospedagem</span>
            </div>
            <span className="size12px">{`R$ ${data.hospedagem}`}</span>
          </div>

          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={food} alt="airplane icon" />
              <span>Alimentação</span>
            </div>
            <span className="size12px">{`R$ ${data.alimentacao}`}</span>
          </div>

          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={extras} alt="airplane icon" />
              <span>Custo Extra</span>
            </div>
            <span className="size12px">{`R$ ${data.extra}`}</span>
          </div>
        </div>

        <div className="info size12px weight300">
          (*) Esta é uma simulação do custo médio. Os valores são calculados pelo feedback de outros viajantes e podem sofrer variações na viagem
        </div>

        <button
          className="abledBtn nextBtn"
          onClick={handleClick}
        >
          Próximo
        </button>

      </div> 
    </div> : <Loading />}
    
    </div>
  );
}

const mapStateToProps = (state) => ({
  getData: state.travelerReducer.form
});

export default connect(mapStateToProps)(TripCost);
