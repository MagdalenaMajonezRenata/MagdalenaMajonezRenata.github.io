import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let isCactus = false;
function App() {
  const [buttonText, setButtonText] = useState('Click me If you want To Know');
  const [styleText, setStyleText] = useState('Body');
  const [styleCactus, setStyleCactus] = useState('Hidden');
  const [styleCow, setStyleCow] = useState('Hidden');
  const [imgSrc, setImgSrc] = useState('/cow.png');

  
  function launchCactus() {
    setButtonText('Do not click me. Trust me this time');
    setStyleText('Hidden');
    setStyleCactus('Cactus');
    setStyleCow('CowColumn');
    if (isCactus) {
      setButtonText('You never listen to me...');
      setImgSrc('/magda.jpg');
    }
    isCactus = true;
  }
  return (
    <>
    <div className="Background">
      <div className="TitleBox">
        <h1 className="Title">The Truth</h1>
      </div>
      <div className={styleText}>
        <p>After reading this
          Everything will make
          Sense and you will
          know everything I wish 
          I could tell you
        </p>
      </div>
      <div className="ImgBox">
        <div className={styleCow}>
          <img className="logo" src={imgSrc} alt="Italian Trulli"></img>
          <img className="logo" src={imgSrc} alt="Italian Trulli"></img>
        </div>
        <img className={styleCactus} src="/cactus.gif" alt="Italian Trulli"></img>
        <div className={styleCow}>
          <img className="logo" src={imgSrc} alt="Italian Trulli"></img>
          <img className="logo" src={imgSrc} alt="Italian Trulli"></img>
        </div>
       </div>
      <div className="ButtonBox">
        <button className="Button" onClick={launchCactus}>
          {buttonText}
        </button>
      </div>
    </div>
     </>
  )
}

export default App
