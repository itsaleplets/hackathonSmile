import React, { useState } from 'react';
import { connect } from 'react-redux';
import { travelerAction } from '../../actions/travelerAction';
import '../../styles/form/Form.css';
import '../../styles/form/Goal.css';
import '../../styles/form/TravelerStyle.css'

import travelerImg from '../../images/travelers_style.png';
import PrevButton from './../sharedComponents/PrevButton';

function TravelerStyle({ nextStep, prevStep, sendStyle }) {
  const [isDisable, setIsDisable] = useState(true);
  const [style, setStyle] = useState(true);


  const handleRadio = ({ target }) => {
    const { name, value } = target
    const payload = {
      name,
      value,
    }
    setStyle(payload)
    setIsDisable(false);
  }

  const handleClick = () => {
    sendStyle(style)
    nextStep();
  }

  return (
    
    <div className="bodyForm">
      <PrevButton prevStep={prevStep} />

      <img className="styleImg" src={travelerImg} alt="girl in purple" />
  
      <p className="bold styleTitle">Qual o seu perfil de viajante?</p>

      <div className="mainDiv">
        
        <div className="radioDiv">
            <input
            className="radio"
            onChange={(e) => handleRadio(e)}
            type="radio"
            name="style"
            value="backpacker"/>

            <div className="radioSpan">
              <span>
                <strong>Mochileiro</strong>
              </span>
              <span className="goalText">
              Gosto de aproveitar a viagem com experiências, mesmo que não seja com tanto conforto.
              </span>
            </div>
        </div>

        <div className="radioDiv">
            <input
              onChange={(e) => handleRadio(e)}
              className="radio"
              type="radio"
              name="style"
              value="economic"/>
          <div className="radioSpan">
            <span>
              <strong>Econômico</strong>
            </span>
            <span className="goalText">
            Prefiro mais o custo benefício, conforto e economia podem andar juntos.
            </span>
          </div>
        </div>

        <div className="radioDiv">
            <input
              onChange={(e) => handleRadio(e)}
              className="radio"
              type="radio"
              name="style"
              value="fancy"/>
          <div className="radioSpan">
            <span>
              <strong>Sofisticado</strong>
            </span>
            <span className="goalText">
            Quero aproveitar ao máximo da minha viagem, quanto mais conforto, melhor.
            </span>
          </div>
        </div>
      </div>

      <button
        disabled={isDisable}
        className={isDisable ? 'btn nextBtn' : 'abledBtn nextBtn'}
        onClick={handleClick}>
          Próximo
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sendStyle: (e) => dispatch(travelerAction(e)),
})

export default connect(null, mapDispatchToProps)(TravelerStyle);


      