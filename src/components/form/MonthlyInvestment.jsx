import React, { useEffect, useState } from 'react';
import '../../styles/form/Form.css'
import '../../styles/form/MonthlyInvestment.css'
import PrevButton from './../sharedComponents/PrevButton';
import { useHistory } from 'react-router-dom';
import { TripInvestment } from '../../services/api';
import { connect } from 'react-redux';
import Loading from '../form/Loading';
import mainImg from '../../images/monthlyInvest.png';

function MonthlyInvestment({ nextStep, prevStep, getData }) {
  const history = useHistory();
  const [data, setData] = useState('');

  useEffect(() => {
    investInfo();
  }, []);


  const investInfo = async () => {
    const date = getData[3];
    const style = getData[4];

    const result = await TripInvestment(style, date);
    setData(result.response);
    console.log(result.response);
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'teste') {
      return nextStep();
    }
    if (name === 'invest') {
      history.push('/invest');
    } else {
      history.push('/');
    }
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
          <p className="bold monthlyTitle">Aqui o seu dinheiro rende todo dia. Comece agora!</p>

          <div className="monthlyDiv">
            <p className="monthlyText">Para esta viagem você precisa investir mensalmente o valor de:</p>
            <span className="bold quantity">{`R$ ${data.money_month}`}</span>
            <p className="tripDetails">
              {`Em ${data.trip_date} você terá: `}
              <span className="bold tripDetails">{`R$ ${data.money_end}`}</span>
            </p>
            <p className="tripDetails">
              Seu dinheiro irá render:
              <span className="bold tripDetails">{`+ R$ ${data.income}`}</span>
            </p>
          </div>

          <div className="info size12px weight300">
            {`(*) Data da última atualização: ${data.date}`}
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
      </div> : <Loading />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  getData: state.travelerReducer.form
});

export default connect(mapStateToProps)(MonthlyInvestment);
