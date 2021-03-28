import React, { useState } from 'react';
import { connect } from 'react-redux';
import { travelerAction } from '../../actions/travelerAction';
import '../../styles/form/Form.css'
import '../../styles/form/TripDate.css'
import mainImg from '../../images/date.png'
import PrevButton from './../sharedComponents/PrevButton';

function TripDate({ nextStep, prevStep, sendDate }) {
  const [isDisable, setIsDisable] = useState(true);
  const [departure, setDeparture] = useState('');
  const [returnTicket, setReturnTicket] = useState('');

  const handleInput = ({ target }) => {
    let { name, value } = target
    // value.replace(/\D/g,"")
    if (name === 'departure') {
      if (value.length <= 6) {
        let teste = value.replace(/(\d{2})(\d)/, "$1/$2");
        setDeparture(teste);
      } else {
        setDeparture(value);
      }
      setIsDisable(false);
    } else {
      if (value.length <= 6) {
        let teste = value.replace(/(\d{2})(\d)/, "$1/$2");
        setReturnTicket(teste);
      } else {
        setReturnTicket(value);
      }
      setIsDisable(false);
    }
    
  }

  const handleClick = () => {
    const payload = {
      name: 'date',
      value: {
        departure,
        returnTicket,
      }
    }
    sendDate(payload);
    nextStep();
  }
  
  return (
    <div className="bodyForm body">
      <PrevButton prevStep={prevStep} />
      <div className="mainDiv">

        <img
          className="mainImg"
          src={mainImg}
          alt="eiffel tower in purple"
        />

        <p className="bold dateTitle">Quando você irá viajar?</p>

        <label>Data de partida</label>
        <input
          name="departure"
          type="text"
          value={departure}
          onChange={event => handleInput(event)}
          maxLength="10"
          className="input dateInput"
          placeholder="Selecionar data"
        />

        <label>Data de retorno</label>
        <input
          type="text"
          value={returnTicket}
          onChange={event => handleInput(event)}
          maxLength="10"
          className="input dateInput"
          placeholder="Selecionar data"
        />
        
        <button
          disabled={isDisable}
          className={isDisable ? 'btn nextBtn' : 'abledBtn nextBtn'}
          onClick={handleClick}
        >
          Próximo
        </button>

      </div> 
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sendDate: (e) => dispatch(travelerAction(e)),
})

export default connect(null, mapDispatchToProps)(TripDate);