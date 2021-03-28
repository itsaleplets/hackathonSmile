import React from 'react';
import '../../styles/form/Loading.css'

function Loading({ nextStep }) {

  if(nextStep) {
    setTimeout(() => {
      nextStep();
    }, 2000);
  }

  return (
    <div className="body bgLoading">
      <div className="loading"></div>
    </div>
  );
}

export default Loading;
