import CarTrafficLights from './Components/car-trafficlight';
import PersonTrafficLights from './Components/person-trafficlight';
import './App.css'

function App() {
  return (
    <div className='main-container'>
      <PersonTrafficLights />
      <CarTrafficLights />
    </div>
  );
}

export default App;
