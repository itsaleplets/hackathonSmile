import React, { useEffect, useState } from 'react';
import '../../styles/routes/ProgressBar.css'

export default function ProgressBar({ progress }) {
  const [newColor, setNewColor] = useState('');
  const [progressColor, setProgressColor] = useState('');

  useEffect(() => {
    changeColor();
  });

  const changeColor = () => {
    if (progress === 0) {
      setProgressColor(1.5)
    } else {
      setProgressColor(progress)
    }
    if (progress >= 90) {
      return setNewColor('white');
    }
  }

  return (
    <div className="progress">
      <div className="progress-done" style={{ width: `${progressColor}%`}}>
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