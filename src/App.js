import CarTrafficLights from './Components/car-trafficlight';
import PersonTrafficLights from './Components/person-trafficlight';
import ButtonBox from './Components/button-box';
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [showText, setShowText] = useState(false)
  const [canBePressed, setCanBePressed] = useState(true)
  const [personTraffic, setPersonTraffic] = useState(false)
  const [carTraffic, setCarTraffic] = useState(true)

  const handleOnClick = () => {
    setShowText(true)
      setTimeout(() => {
        setTimeout(() => {
          setCarTraffic(false)
          setTimeout(() => {
            setPersonTraffic(true)
          }, 3000)
        }, 3000)
        setCanBePressed(false)
      }, canBePressed ? 0 : 10000)
      
  }
  
  useEffect(() => {
    if (personTraffic) {
      setTimeout(() => {
        setPersonTraffic(false)
      
        setTimeout(() => {
          setCarTraffic(true)
          setShowText(false)
        }, 4000)
        setTimeout(() => {setCanBePressed(true)}, 20000)
      }, 10000)
    }
  }, [personTraffic])

  return (
    <div className='main-container'>
      <div className='flex-container-column'>
        <PersonTrafficLights turnOn={personTraffic}/>
        <ButtonBox onClick={handleOnClick} showText={showText}/>
      </div>
      <CarTrafficLights turnOn={carTraffic}/>
    </div>
  );
}

export default App;
