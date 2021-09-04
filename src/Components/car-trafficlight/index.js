import ClearTrafficlight from '../../assets/trafficlight/clear-trafficlight.png';
import Red from '../../assets/trafficlight/red.png';
import Orange from '../../assets/trafficlight/orange.png';
import Green from '../../assets/trafficlight/green.png';
import { useEffect, useState } from 'react';
import './index.css'


export default function CarTrafficLights({turnOn = true}) {
  const [turnGreen, setTurnGreen] = useState(false)
  const [turnRed, setTurnRed] = useState(false)
  const [turnOrange, setTurnOrange] = useState(false)


  useEffect(() => {
   if (turnOn){
    setTurnGreen(true)
    setTurnOrange(false)
    setTurnRed(false)
    }else {
      setTurnGreen(false)
      setTurnOrange(true)
      setTimeout(() => {
        setTurnOrange(false)
        setTurnRed(true)
      }, 3000)
    }
    
  }, [turnOn])

  return (
        <div className='cartrafficlight-container'>
        <img src={ClearTrafficlight} alt="CarTrafficLights" className='car-trafficlight' />
        { turnRed && <img src={Red} alt="Red" className='car-red'/>}
        { turnOrange && <img src={Orange} alt="Orange" className='car-orange'/>}
        { turnGreen && <img src={Green} alt="Green" className='car-green'/>}

        <div className='car-background'/>
        </div>
  );
}


