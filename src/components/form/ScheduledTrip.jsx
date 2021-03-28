import React, { useEffect, useState } from 'react';
import '../../styles/form/Form.css'
import '../../styles/form/ScheduledTrip.css'
import PrevButton from './../sharedComponents/PrevButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { TripDate } from '../../services/api';
import Loading from '../form/Loading';
import mainImg from '../../images/date.png';

function ScheduledTrip({ prevStep, getData }) {
  const history = useHistory();
  const [data, setData] = useState('');

  useEffect(() => {
    investInfo();
  }, []);

  const investInfo = async () => {
    const investment = getData[3];
    const style = getData[4];

    // console.log(investment, style);
    const result = await TripDate(style, investment);
    setData(result.response);
    console.log(result.response);
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'invest') {
      history.push('/invest');
    } else {
      history.push('/home');
    }
  }

  return (
    <div>
      {data ?   <div className="body bodyForm">
        <PrevButton prevStep={prevStep} />

        <div className="mainDiv">
          <img
            className="mainImg"
            src={mainImg}
            alt="pig safe"
          />
          <p className="bold scheduledTitle">Sua viagem já tem data marcada!</p>

          <div className="monthlyDiv">
            <p className="monthlyText">Você poderá viajar a partir de:</p>
            <span className="bold quantity">{data.trip_date}</span>
            <p className="tripDetails">
            Com investimento mensal de: 
              <span className="bold tripDetails">{` R$ ${data.money_month},00`}</span>
            </p>
            <p className="tripDetails">
            Nesta data você terá investido:  
              <span className="bold tripDetails">{` R$ ${data.money_end},00`}</span>
            </p>
            <p className="tripDetails">
            Seu dinheiro irá render:  
              <span className="bold tripDetails">{` + R$ ${data.income},00`}</span>
            </p>
          </div>

          <div className="info tenPx weight300">
          {`(*) Data da última atualização: ${data.date}`}
          </div>
          <div className="info tenPx weight300">
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
      </div> : <Loading /> }
    
    
    </div>
  );
}


const mapStateToProps = (state) => ({
  getData: state.travelerReducer.form
});

export default connect(mapStateToProps)(ScheduledTrip);
