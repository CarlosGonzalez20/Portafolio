import './App.css';
import './Modules/SwitchTheme/SwitchTheme';
import SwitchTheme from './Modules/SwitchTheme/SwitchTheme';
import PersonalImage from './Modules/PersonalImage/PersonalImage';

function App() {
  return (
    <div className="App">
      <SwitchTheme />
      <PersonalImage id={'1EP9g4gpShjRFBiYNM5Fo1-IDXM3J1g4j'} />
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}

export default App;
