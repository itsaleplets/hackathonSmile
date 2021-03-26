import React from 'react';
import '../../styles/form/Form.css'
import '../../styles/form/Dashboard.css'

import graphic_plane from '../../images/graphic_plane.png'
import purpleLogo from '../../images/purple_logo.png'

function Dashboard({ nextStep }) {

  return (
    <div className="bodyForm">
      <div className="dashImg">
        <img  src={graphic_plane} alt="aiplane alongside a growing graphic"/>
        <img className="dashLogo" src={purpleLogo} alt="Trip Invest purple logo"/>
      </div>
      <div className="dashBg">
        <h1 className="bold">Olá viajante!</h1>
        <p className="dashText">Você já está a um passo</p>
        <p className="dashText">para começar a fazer as malas.</p>
        <button
            name="start"
            className="abledBtn startInvestBtn"
            onClick={nextStep}
          >
            Vamos lá
          </button>
      </div> 
    </div>
  );
}

export default Dashboard;
