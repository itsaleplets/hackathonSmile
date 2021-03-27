import React from 'react';
import '../../styles/routes/SmilesClub.css'
import '../../styles/form/MonthlyInvestment.css'
import smiles from '../../images/Clube-Smiles.png';
import { Link } from 'react-router-dom';

function SmilesClub() {

  return (
    <div className="smiles">
      <img
        src={smiles}
        alt="smiles ad"
        className="smileImg"
      />
      <a target="blank" href="https://www.smiles.com.br/clube-smiles">
        <button
          name="invest"
          className="abledBtn smileBtn"
        >
          Ver vantagens
        </button>
      </a>
    </div>
  );
}

export default SmilesClub;
