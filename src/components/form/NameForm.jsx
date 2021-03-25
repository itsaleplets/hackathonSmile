import React from 'react';
import '../../styles/form/Form.css'
function NameForm({ nextStep }) {

  return (
    <div className="bodyForm">
      <span>Hey viajante!</span>
      <br />
      <span><strong>Como posso te chamar?</strong></span>
      <br />
      <input name="name" className="input" placeholder="Nome" />
      <br />
      <button className="btn" onClick={nextStep}>Próximo</button>
    </div>
  );
}

export default NameForm;