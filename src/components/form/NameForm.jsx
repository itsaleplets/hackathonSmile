import React, { useState } from 'react';
import '../../styles/form/Form.css';
import '../../styles/form/NameForm.css';
import { connect } from 'react-redux';
import { travelerAction } from '../../actions/travelerAction';
import travelersImg from '../../images/travelers.png'

function NameForm({ nextStep, sendName }) {
  const [isDisable, setIsDisable] = useState(true);
  const [name, setName] = useState(true);

  const handleInput = ({ target }) => {
    const { name, value } = target
    const payload = {
      name,
      value,
    }
    setName(payload);
    setIsDisable(false);
  };

  const handleClick = () => {
    sendName(name)
    nextStep();
  };

  return (
    <div className="bodyForm body">
      <img className="travelers" src={travelersImg} alt="black woman and white man with luggage"/>
      <p className="nameText">Mas antes do embarque,</p>
      <p className=" nameText bold">como podemos te chamar?</p>
      <input
        name="name"
        className="input nameInput"
        placeholder="Nome"
        onChange={handleInput}
      />
      <button
        disabled={isDisable}
        className={isDisable ? 'btn nextBtn' : 'abledBtn nextBtn'}
        onClick={handleClick}>
          Próximo
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendName: (e) => dispatch(travelerAction(e)),
});

export default connect(null, mapDispatchToProps)(NameForm);
