import React, { useState } from 'react';
import Dashboard from '../components/form/Dashboard';
import '../App.css';
import NameForm from '../components/form/NameForm';
import GoalForm from '../components/form/GoalForm';
import DestinationForm from '../components/form/DestinationForm';
import TripDate from '../components/form/TripDate';
import Investment from '../components/form/Investment';
import TripCost from '../components/form/TripCost';
import MonthlyInvestment from '../components/form/MonthlyInvestment';
import ScheduledTrip from '../components/form/ScheduledTrip';
import TravelerStyle from '../components/form/TravelerStyle';
import Loading from '../components/form/Loading';


function CreateTrip() {
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState(false)


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const chooseGoal = (path) => {
    console.log(path);
    if (path === 'investment') {
      setGoal(true);
    }
  }

  switch (step) {
    case 0:
      return (
        <Dashboard nextStep={nextStep} />
      );
    case 1:
      return (
        <NameForm nextStep={nextStep} />
      )
    case 2:
      return (
        <GoalForm chooseGoal={chooseGoal} prevStep={prevStep} nextStep={nextStep} />
      )
    case 3:
      return (
        <DestinationForm prevStep={prevStep} nextStep={nextStep} />
      )
    case 4:
      return (
        <div>
          {goal ? <TripDate  prevStep={prevStep} nextStep={nextStep} /> : <Investment prevStep={prevStep} nextStep={nextStep}/>  }
        </div>
      )
    case 5:
      return (
        <TravelerStyle  prevStep={prevStep} nextStep={nextStep} />
      )
    case 6:
      return (
        <Loading nextStep={nextStep}/>
      )
    
    case 7:
      return (
        <TripCost prevStep={prevStep} nextStep={nextStep}/>
      )
    case 8:
      return (
        <div>
          {goal ? <MonthlyInvestment prevStep={prevStep} nextStep={nextStep}/> : <ScheduledTrip prevStep={prevStep} nextStep={nextStep}/>  }
        </div>
      )
    default:
  };
}

export default CreateTrip;

