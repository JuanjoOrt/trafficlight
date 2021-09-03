import ClearTrafficlight from '../../assets/trafficlight/clear-trafficlight.png';
import Red from '../../assets/trafficlight/red.png';
import Orange from '../../assets/trafficlight/orange.png';
import Green from '../../assets/trafficlight/green.png';

import './index.css'

export default function CarTrafficLights() {
  return (
        <div className='cartrafficlight-container'>
        <img src={ClearTrafficlight} alt="CarTrafficLights" className='car-trafficlight' />
        <img src={Red} alt="Red" className='car-red'/>
        <img src={Orange} alt="Orange" className='car-orange'/>
        <img src={Green} alt="Green" className='car-green'/>

        <div className='car-background'/>
        </div>
  );
}


