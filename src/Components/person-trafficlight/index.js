import TrafficLights from '../../assets/person/traffic.png';
import Red from '../../assets/person/red.png';
import Green from '../../assets/person/green.png';

import './index.css'

export default function PersonTrafficLights() {
  return (
        <div className='persontrafficlight-container'>
        <img src={TrafficLights} alt="TrafficLights" className='person-trafficlight' />
        <img src={Red} alt="Red" className='person-red'/>
        <img src={Green} alt="Green" className='person-green'/>
        </div>
  );
}


