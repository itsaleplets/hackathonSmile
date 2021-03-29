import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/form/Wallet.css';
import logo from '../../images/white_logo.png';
import arrowUp from '../../images/icons/arrow_up.png';
import arrowDown from '../../images/icons/arrow_down.png';
// import { FiMenu } from 'react-icons/fi'
import coin from '../../images/icons/milhas.svg';

function Home({ data }) {
  const history = useHistory();

  const handleClick = ({ target }) => {
    const { name } = target;

    console.log(name);
    if (name === 'invest') {
      history.push('/invest');
    } else {
      history.push('/withdraw');
    }
  }

  return (
    <div className="gradient">
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
        {/* <FiMenu fontSize="22px" /> */}
      </div>
      <div className="wallet">
        <span className="twelvePx">CARTEIRA</span>
        <span className="money">{`R$ ${data.wallet}`}</span>
        <span className="twelvePx income">Seu dinheiro rendeu:<span className="totalIncome">{`+ R$ ${data.income} em milhas`}</span></span>
      </div>

      <div className="buttons">
        <button
          name="invest"
          className="btnWallet"
          onClick={(e) => handleClick(e)}
        >
          <img className="arrow" src={arrowUp} alt="white arrow up" />
          Investir
        </button>
        <button
          name="withdraw"
          className="btnWallet"
          onClick={(e) => handleClick(e)}
        >
          <img className="arrow" src={arrowDown} alt="white arrow up" />
          Retirar
        </button>
      </div>

    </div>
  );
}

export default Home;
