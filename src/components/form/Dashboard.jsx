import React from 'react';
import '../../styles/form/Form.css'

function Dashboard({ nextStep }) {

  return (
    <div className="bodyForm">
      <h3>Bem-Vindo!</h3>
      <p>Curl up and sleep on the freshly laundered towels grass smells good but growl at dogs in my sleep. </p>
      <button className="btn" onClick={nextStep} >Começar</button>
    </div>
  );
}

export default Dashboard;