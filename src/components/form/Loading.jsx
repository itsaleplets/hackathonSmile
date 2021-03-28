import React from 'react';
import '../../styles/form/Loading.css'

function Loading({ nextStep }) {

  if(nextStep) {
    setTimeout(() => {
      nextStep();
    }, 3000);
  }

  return (
    <div className="bgLoading">
      <div className="loading"></div>
    </div>
  );
}

export default Loading;
