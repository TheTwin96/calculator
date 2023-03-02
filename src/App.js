import './App.css';
import Button from './components/Button';
import freecodecamp_logo from './images/Freecodecamp_Logo.png';
import Screen from './components/Screen.jsx'
import Button_Clear from './components/Button_Clear.jsx'

function App() {
  return (
    <div className="App">
      <div className="freecodecamp_logo_container">
        <img className="freecodecamp_logo" src={freecodecamp_logo} alt="Freecodecamp's logo" />
      </div>
      <div className="container_calculator">
        <Screen />
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button_Clear>Clear</Button_Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
