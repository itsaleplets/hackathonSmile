import React, { useEffect, useState } from 'react';
import '../../styles/routes/MyTripsProgress.css';

export default function ProgressBar({ progress }) {
  const [newColor, setNewColor] = useState('');
  const [progressColor, setProgressColor] = useState('');

  useEffect(() => {
    changeColor();
  });

  const changeColor = () => {
    if (progress.percent === 0) {
      setProgressColor(1.5)
    } else {
      setProgressColor(progress.percent)
    }
    if (progress.percent >= 90) {
      return setNewColor('white');
    }
  }

  return (
    <div className="myTripsProgress">
      <div className="progress-done" style={{ width: `${progressColor}%` }}>
        <span className="myTripsProgressText" style={{ color: newColor }}>
          {`${progress.percent}%`}
        </span>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  progress: 0,
};
