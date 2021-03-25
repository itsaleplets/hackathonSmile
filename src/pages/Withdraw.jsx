import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { travelerAction } from '../actions/travelerAction';
import '../styles/form/Form.css'
import '../styles/routes/Invest.css';

import WalletWithoutBtn from '../components/sharedComponents/WalletWithoutBtn'

function Withdraw({ sendWithdrawType }) {
  const [isDisable, setIsDisable] = useState(true);
  const [withdrawType, setWithdrawType] = useState('');
  const history = useHistory();

  const handleClick = () => {
    sendWithdrawType(withdrawType);
    history.push('/')
  }

  const handleRadio = ({ target }) => {
    const { name, value } = target;
    const payload = {
      name,
      value
    }
    setWithdrawType(payload);
    setIsDisable(false);
  }

  return (
    <div className="bodyForm">
      <WalletWithoutBtn />
      <div className="mainDiv">

      <div className="divInvTitle">
        <p className="bold investTitle">PARA RETIRAR</p>
        <p className="bold investTitle investSubTitle">Selecione o tipo de operação</p>

      </div>

      <div className="radioDiv radioInvest">
          <input
           name="withdraw"
          className="radio"
          onChange={(e) => handleRadio(e)}
          type="radio"
          value="transferencia"/>

          <div className="radioSpan">
            <span>
              <strong> Retirar via Transferência.</strong>
            </span>
            <span className="goalText investText">
            Pode ter custos e cai somente em horário comercial de dias úteis.
            </span>
          </div>
      </div>

      <div className="radioDiv radioInvest">
          <input
           name="withdraw"
          className="radio"
          onChange={(e) => handleRadio(e)}
          type="radio"
          value="boleto"/>

          <div className="radioSpan">
            <span>
              <strong> Pagar Boleto.</strong>
            </span>
            <span className="goalText investText">
            Invista em sua viagem através do boleto, pode levar até 3 dias úteis para investir.
            </span>
          </div>
      </div>

      <div className="radioDiv radioInvest">
          <input
           name="withdraw"
          className="radio"
          onChange={(e) => handleRadio(e)}
          type="radio"
          value="pix"/>

          <div className="radioSpan">
            <span>
              <strong>Pagar via Pix.</strong>
            </span>
            <span className="goalText investText">
            Sem custo e cai na hora, invista em sua viagem mesmo de madrugada e fim de semana.
            </span>
          </div>
      </div>

      <button
        disabled={isDisable}
        className={isDisable ? 'btn investBtn' : 'abledBtn investBtn'}
        onClick={handleClick}
      >
          Próximo
      </button>
    </div>
  </div>      
  );
}

const mapDispatchToProps = (dispatch) => ({
  sendWithdrawType: (e) => dispatch(travelerAction(e)),
});

export default connect(null, mapDispatchToProps)(Withdraw);
