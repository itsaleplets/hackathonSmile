import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateTrip from './pages/CreateTrip';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Withdraw from './pages/Withdraw';
import TripDetails from './pages/TripDetails';

function App() { 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/create-trip" component={ CreateTrip } />
        <Route path="/trip-details" component={ TripDetails } />
        <Route path="/invest" component={ Invest } />
        <Route path="/withdraw" component={ Withdraw } />

      </Switch>
    </Router>
  );
}

export default App;
