import React from 'react';
import '../../styles/form/Form.css'
import '../../styles/form/MonthlyInvestment.css'
import PrevButton from './../sharedComponents/PrevButton';
import { useHistory } from 'react-router-dom';
import mainImg from '../../images/monthlyInvest.png';

function TripCost({ nextStep, prevStep }) {
  const history = useHistory();

  const handleClick = ({ target }) => {
    const { name } = target;
    if(name === 'teste') {
      return nextStep();
    }
    if (name === 'invest') {
      history.push('/invest');
    } else {
      history.push('/home');
    }
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
        <p className="bold monthlyTitle">Aqui o seu dinheiro rende todo dia. Comece agora!</p>

        <div className="monthlyDiv">
          <p className="monthlyText">Para esta viagem você precisa investir mensalmente o valor de:</p>
          <span className="bold quantity">R$ 200,00</span>
          <p className="tripDetails">
            Em 18/20/2021 você terá: 
            <span className="bold tripDetails"> R$ 2.625,00</span>
          </p>
          <p className="tripDetails">
            Seu dinheiro irá render:  
            <span className="bold tripDetails">+ R$ 125,00</span>
          </p>
        </div>

        <div className="info size12px weight300">
        (*) Data da última atualização: 05/08/2020
        </div>
        <div className="info size12px weight300">
        (**) Valor de redimento referente a data da última atualização e podem sofrer alterações de acordo com o mercado.
        </div>
        
        <button
          name="invest"
          className="abledBtn startInvestBtn"
          onClick={handleClick}
        >
          Começar a investir
        </button>
        <button
          name="home"
          className="btn walletBtn"
          onClick={handleClick}
        >
          Ir para carteira
        </button>

      </div> 
    </div>
  );
}

export default TripCost;
