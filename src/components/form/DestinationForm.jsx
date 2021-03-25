import React, { useState } from 'react';
import { connect } from 'react-redux';
import { travelerAction } from '../../actions/travelerAction';
import '../../styles/form/Form.css'
import '../../styles/form/Destination.css'
import mainImg from  '../../images/tower.png'
import PrevButton from './../sharedComponents/PrevButton';

function DestinationForm({ nextStep, prevStep, sendDestination }) {
  const [isDisable, setIsDisable] = useState(true);
  const [destination, setDestination] = useState(true);

  const handleInput = ({ target }) => {
    const { name, value } = target
    const payload = {
      name,
      value,
    }
    setDestination(payload)
    setIsDisable(false);
  }

  const handleClick = () => {
    sendDestination(destination)
    nextStep();
  }

  return (
    <div className="bodyForm">
      <PrevButton prevStep={prevStep} />

      <img src={mainImg} alt="eiffel tower in purple" className="destImg" />
      <div className="mainDiv">
        <p className="bold destination">Qual o destino da sua viagem?</p>
        
        <label>Origem</label>
        <input
          type="text"
          name="destination"
          className="input searchInput"
          placeholder="Buscar origem"
          onChange={handleInput}
        />

        <label>Destino</label>
        <input
          type="text"
          name="destination"
          className="input searchInput"
          placeholder="Buscar destino"
          onChange={handleInput}
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
  sendDestination: (e) => dispatch(travelerAction(e)),
})

export default connect(null, mapDispatchToProps)(DestinationForm);