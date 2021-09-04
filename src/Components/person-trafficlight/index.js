import TrafficLights from '../../assets/person/traffic.png';
import Red from '../../assets/person/red.png';
import Green from '../../assets/person/green.png';
import './index.css'
import { useEffect, useState } from 'react';

export default function PersonTrafficLights({turnOn = true}) {
  const [switched, setSwitched] = useState(false)

  useEffect(() => {
    if (turnOn){
      setSwitched(true)
    }else {
      setTimeout(() => {
        setSwitched(false)
      }, 4000)
    }
  }, [turnOn])

  return (
        <div className='persontrafficlight-container'>
        <img src={TrafficLights} alt="TrafficLights" className='person-trafficlight' />
        {switched
          ? <img src={Green} alt="Green" className={`person-green ${!turnOn && 'person-green-anim'}`}/>
          : <img src={Red} alt="Red" className='person-red'/>
        }
        </div>
  );
}


