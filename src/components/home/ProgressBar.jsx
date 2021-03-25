import React, { useEffect, useState } from 'react';
import '../../styles/routes/ProgressBar.css'

export default function ProgressBar({ progress }) {
  const [newColor, setNewColor] = useState('');

  useEffect(() => {
    changeColor();
  });

  const changeColor = () => {
    if (progress >= 90) {
      return setNewColor('white');
    }
  }

  return (
    <div className="progress">
      <div className="progress-done" style={{ width: `${progress}%`, opacity: 1 }}>
        <span className="progressText" style={{ color: newColor}}>
          {`${progress}%`}
        </span>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  progress: 0,
};