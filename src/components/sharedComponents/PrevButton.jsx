import React from 'react';
import '../../styles/form/Form.css'
import arrowBack from '../../images/icons/arrow_back_24px.png';

function PrevButton({ prevStep }) {
  
  return (
    <div>
      <button
        className="backBtn"
        onClick={prevStep}
      >
        <span className="arrowBtn">
          <img src={arrowBack} alt="left arrow" />
        </span>
        <span className="btnText">
          Voltar
        </span>
      </button>
    </div>
  );
}

export default PrevButton;
