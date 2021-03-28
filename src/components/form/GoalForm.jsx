import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { travelerAction } from '../../actions/travelerAction';
import '../../styles/form/Form.css'
import '../../styles/form/Goal.css'
import img from '../../images/goal.png'
import PrevButton from './../sharedComponents/PrevButton';

function GoalForm({ chooseGoal, getName, nextStep, prevStep, sendGoal }) {
  const [isDisable, setIsDisable] = useState(true);
  const [goal, setGoal] = useState(true);
  const [travelerName, setTravelerName] = useState('Viajante');

  useEffect(() => {
    setTravelerName(getName[0].name);
  }, []);

  const handleRadio = ({ target }) => {
    const { name, value } = target
    const payload = {
      name,
      value,
    }
    setGoal(payload)
    setIsDisable(false);
  }

  const handleClick = () => {
    chooseGoal(goal.value)
    sendGoal(goal)
    nextStep();
  }

  return (
    <div className="bodyForm body">
      <PrevButton prevStep={prevStep} />

      <img className="goalImg" src={img} alt="girl in purple" />
  
      <div className="goalTitle">
        <p>{`Oi, ${travelerName}!`}</p>
        <p className="bold">Qual o seu objetivo?</p>
      </div>

      <div className="mainDiv">
        
        <div className="radioDiv">
            <input
            className="radio"
            onChange={(e) => handleRadio(e)}
            type="radio" name="goal"
            value="investment"/>

            <div className="radioSpan">
              <span>
                <strong>Descobrir investimento mensal.</strong>
              </span>
              <span className="goalText">
                Já sei a data da viagem e quero saber quanto preciso investir cada mês até lá.
              </span>
            </div>
        </div>

        <div className="radioDiv">
            <input
              onChange={(e) => handleRadio(e)}
              className="radio"
              type="radio"
              name="goal"
              value="date"/>
          <div className="radioSpan">
            <span>
              <strong>Descobrir a data de viagem.</strong>
            </span>
            <span className="goalText">
            Já sei quanto posso investir por mês e quero saber quando poderei viajar viajar.
            </span>
          </div>
        </div>
      </div>
      

      <button
        disabled={isDisable}
        className={isDisable ? 'btn' : 'abledBtn'}
        onClick={handleClick}>
          Próximo
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sendGoal: (e) => dispatch(travelerAction(e)),
});

const mapStateToProps = (state) => ({
  getName: state.travelerReducer.form
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);


      