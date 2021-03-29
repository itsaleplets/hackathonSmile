import React from 'react';
import '../../styles/routes/WalletWithoutBtn.css';
import logo from '../../images/white_logo.png';
import coin from '../../images/icons/milhas.svg';

function WalletWithoutBtn() {

  return (
    <div className="gradientInvest">
      <div className="topBox">
        <div className="box"></div>
        <div className="rightBox">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>

      <div className="icons">
        <img width="89px" src={logo} alt="white trip invest text" />
        <div className="milhas">
          <span className="miles">
            <img width="13px" src={coin} alt="orange coins"/>
            <span>1554</span>
          </span>
          <p>Saldo de Milhas</p>
        </div>
      </div>

      <div className="wallet">
        <span className="twelvePx">CARTEIRA</span>
        <span className="money">R$ 1.500,00</span>
        <span className="twelvePx income">Seu dinheiro rendeu:<span className="totalIncome">+ R$ 25,90 em milhas</span></span>
      </div>
    </div>
  );
}

export default WalletWithoutBtn;
