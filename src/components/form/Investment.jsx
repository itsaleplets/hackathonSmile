import React, { useState } from 'react';
import { connect } from 'react-redux';
import { travelerAction } from '../../actions/travelerAction';
import '../../styles/form/Form.css'
import '../../styles/form/Investment.css'
import PrevButton from './../sharedComponents/PrevButton';
import mainImg from '../../images/investment.png'

function TripDate({ nextStep, prevStep, sendInvestment }) {
  const [isDisable, setIsDisable] = useState(true);
  const [left, setLeft] = useState('');
  const [rangeValue, setRangeValue] = useState('R$');
  const [investment, setInvestment] = useState('R$');

  const handleInput = ({ target }) => {
    let { name, value } = target;
    const payload = {
      name,
      value,
    };
    setInvestment(payload)
    setRangeValue(value);
    setLeft(`${value/10}%`);
    setIsDisable(false);
  }

  const handleClick = () => {
    sendInvestment(investment);
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

        <p className="bold investTitle">Quanto você pode investir por mê?</p>
        
        <div className="main">
          <input
            name="investment"
            type="range"
            min="0"
            max="1000" 
            className="slider"
            onInput={handleInput}
          />

          <div className="selector" style={{left: left}} >
            <div className="SelectValue">
              {rangeValue}
            </div>
          </div>
          <div className="progressBar" style={{width: left}}></div>
        </div>
        
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
  sendInvestment: (e) => dispatch(travelerAction(e)),
})

export default connect(null, mapDispatchToProps)(TripDate);