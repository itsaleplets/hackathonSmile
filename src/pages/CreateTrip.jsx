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


function CreateTrip() {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

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
        <GoalForm prevStep={prevStep} nextStep={nextStep} />
      )
    case 3:
      return (
        <DestinationForm prevStep={prevStep} nextStep={nextStep} />
      )
    case 4:
      return (
        <TripDate  prevStep={prevStep} nextStep={nextStep} />
      )
    case 5:
      return (
        <TravelerStyle  prevStep={prevStep} nextStep={nextStep} />
      )
    case 6:
      return (
        <Investment prevStep={prevStep} nextStep={nextStep}/>
      )
    case 7:
      return (
        <TripCost prevStep={prevStep} nextStep={nextStep}/>
      )
    case 8:
      return (
        <MonthlyInvestment prevStep={prevStep} nextStep={nextStep}/>
      )
    case 9:
      return (
        <ScheduledTrip prevStep={prevStep} nextStep={nextStep}/>
      )
    default:
  };
}

export default CreateTrip;
