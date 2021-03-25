import React from 'react';
import '../../styles/form/Form.css'
import '../../styles/form/TripCost.css'
import PrevButton from './../sharedComponents/PrevButton';

import mainImg from '../../images/cost.png';
import airplane from '../../images/icons/airplane.png';
import stay from '../../images/icons/stay.png'
import food from '../../images/icons/food.png'
import extras from '../../images/icons/extras.png'

function TripCost({ nextStep, prevStep }) {

  const handleClick = () => {
    nextStep();
  }

  return (
    <div className="body bodyForm">
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
            <span className="bold sumTitle">Rio de Janeiro</span> <br/>
            <p className="size12px weight300">18/10/2021 - Faltam 180 dias</p>
          </div>
          <div className="summary">
            <span className="bold sumTitle">R$ 2.500</span>
            <p className="size12px weight300">Custo total</p>
          </div>
          
        </div>
        <div className="costs">
          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={airplane} alt="airplane icon" />
              <span>Passagens</span>
            </div>
            <span className="size12px">R$ 900</span>
          </div>

          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={stay} alt="airplane icon" />
              <span>Hospedagem</span>
            </div>
            <span className="size12px">R$ 400</span>
          </div>

          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={food} alt="airplane icon" />
              <span>Alimentação</span>
            </div>
            <span className="size12px">R$ 700</span>
          </div>

          <div className="individualCost">
            <div className="ticket size12px bold">
              <img className="icon" src={extras} alt="airplane icon" />
              <span>Custo Extra</span>
            </div>
            <span className="size12px">R$ 500</span>
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
    </div>
  );
}

export default TripCost;
