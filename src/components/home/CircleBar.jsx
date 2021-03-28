import React from 'react';
import '../../styles/Circle.css'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  circle: {
    color: "#B34DC5",
  },
}));

export default function CircleBar({ progress }) {
  const classes = useStyles();

  return (
    <div className="divCircle">
      <CircularProgress
        className={classes.circle}
        thickness="2"
        size="7em"
        variant="determinate"
        value={progress.percent}
      />
      <div className="bgCircle">
        <p className="bold percent">{`${progress.percent}%`}</p>
        <p>{progress.wallet}</p>
      </div>
    </div>
  );
}

CircleBar.defaultProps = {
  progress: 0,
};