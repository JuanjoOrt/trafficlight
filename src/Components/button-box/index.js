
import Box from '../../assets/button/box.png';
import Text from '../../assets/button/text.png';
import Button from '../../assets/button/button.png';
import './index.css'


export default function ButtonBox({showText = false, onClick}) {

    const handleOnClick = () => {
        onClick && onClick()
    }

  return (
        <div className='button-box-container'>
                <img src={Box} alt="button-box" />
                {showText && <img src={Text} alt="button-text" className='button-text'/>}
                 <img src={Button} alt="button" className='button-click' onClick={handleOnClick}/>
        </div>
  );
}


