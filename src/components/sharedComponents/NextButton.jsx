import React, { useState } from 'react';
import '../../styles/form/Form.css'

function NextButton({ nextStep, goal }) {
  const [isDisable, setIsDisable] = useState(true);
  // const [goal, setGoal] = useState(true);

  const handleClick = () => {
    // sendGoal(goal)
    nextStep();
  }

  return (
    <div>
      <button
        disabled={isDisable}
        className={isDisable ? 'btn' : 'abledBtn'}
        onClick={handleClick}>
          Próximo
      </button>
    </div>
  );
}

export default NextButton;


      