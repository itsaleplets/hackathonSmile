import React from 'react';
// import { useHistory } from 'react-router-dom';
import '../../styles/form/Wallet.css';
import '../../styles/routes/NextTrip.css';

import airplane from '../../images/icons/airplane.png';
import stay from '../../images/icons/stay.png'
import food from '../../images/icons/food.png'
import extras from '../../images/icons/extras.png'
import location from '../../images/icons/location.png'
import CircleBar from './CircleBar';
import ProgressBar from './ProgressBar';


function Home() {
  // const history = useHistory();

  // const handleClick = ({ target }) => {
  //   const { name } = target;
    
  //   console.log(name);
  //   if (name === 'invest') {
  //     history.push('/invest');
  //   } else {
  //     history.push('/withdraw');
  //   }
  // }

  return (
    <div>
      <p className="bold">Próxima Viagem</p>
      <img src={location} alt="location icon"/>      
      <span>DESTINO</span>

      

      <div className="mainDiv">
        <div className="sumDiv">
          <div className="summary">
            <span className="bold sumTitle">Rio de Janeiro</span> <br/>
            <p className="size12px weight300">18/10/2021 - Faltam 180 dias</p>
          </div>
          <div className="summary">
            <span className="bold sumTitle">R$ 2.500</span>
            <p className="size12px weight300">Custo total</p>
          </div>
        </div>

        <div className="nextTripCosts">
          
          <section className="sectionCost">
            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={airplane} alt="airplane icon" />
                <span>Passagens</span>
              </div>
              <span className="size12px">R$ 900</span>
            </div>
            <ProgressBar progress={100}/>

            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={stay} alt="airplane icon" />
                <span>Hospedagem</span>
              </div>
              <span className="size12px">R$ 400</span>
            </div>
            <ProgressBar progress={100}/>

            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={food} alt="airplane icon" />
                <span>Alimentação</span>
              </div>
              <span className="size12px">R$ 700</span>
            </div>
            <ProgressBar progress={50}/>

            <div className="eachCost">
              <div className="ticket size12px bold">
                <img className="icon" src={extras} alt="airplane icon" />
                <span>Custo Extra</span>
              </div>
              <span className="size12px">R$ 500</span>
            </div>
            <ProgressBar progress={0}/>
          </section>
          
          <div className="circleProg">
            <CircleBar progress="60"/>
            <p className="size12px weight300 circleText">Valor investido para esta viagem</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
