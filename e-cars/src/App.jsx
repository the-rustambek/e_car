import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import BuyPage from './Page/BuyPage/BuyPage';
import HomePage from './Page/HomePage/HomePage';
import VehiclesPage from './Page/VehiclesPage/VehiclesPage';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    
    <Switch>
      <Route path="/vehiclespage" component={VehiclesPage} />
      <Route path="/buypage" component={BuyPage} />
      <Route path="/" component={HomePage} />
     </Switch>
  );
}

export default App;
