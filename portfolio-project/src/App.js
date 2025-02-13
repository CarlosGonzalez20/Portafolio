import './App.css';
import './Modules/SwitchTheme/SwitchTheme';
import SwitchTheme from './Modules/SwitchTheme/SwitchTheme';
import PersonalImage from './Modules/PersonalImage/PersonalImage';
import TechCard from './Modules/Tech-Card/Tech-card';

const techs = [
  { name: "React", image: "https://th.bing.com/th/id/R.41d22b08d745d995729400638deb352c?rik=qrhTfesVMR5slQ&pid=ImgRaw&r=0" },
  { name: "Node.js", image: "https://th.bing.com/th/id/R.093bd57c711ea2f031fb4579f9da9547?rik=BkDQC6mdRxAxOA&pid=ImgRaw&r=0" },
  { name: "JS", image: "https://icon-library.com/images/js-icon/js-icon-24.jpg" },
  { name: "CSS", image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" },
  { name: "C#", image: "https://static-00.iconduck.com/assets.00/csharp-icon-1755x2048-5r3ugs1f.png" },
  { name: "C++", image: "https://miro.medium.com/v2/resize:fit:1358/1*C4SccvODYv4SBypJFmYAEw.png" },
  { name: "Python", image: "https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png"},
  { name: "Java", image: "https://static.vecteezy.com/system/resources/previews/022/100/214/non_2x/java-logo-transparent-free-png.png"},
  { name: "MySQL", image: "https://th.bing.com/th/id/R.b84998c3873218ccad17a3dce959ae39?rik=LFgM2txNiFwy7A&riu=http%3a%2f%2fsqlbackupandftp.com%2fblog%2fwp-content%2fuploads%2f2015%2f01%2fmysql-logo_2800x2800_pixels1.png&ehk=nBPoTAB5G8HRtK%2f7O9e7uMMM%2fchy1XZ01UocW71SS48%3d&risl=&pid=ImgRaw&r=0" },
  { name: "MongoDB", image: "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" },
  { name: "ODBC", image: "https://logodix.com/logo/2068919.png" },
];

function App() {
  return (
    <div className="App">
      <SwitchTheme />
      <PersonalImage id={'1EP9g4gpShjRFBiYNM5Fo1-IDXM3J1g4j'} />
      <h1>Skills</h1>
      <div className="tech-container">
        {techs.map((tech, index) => (
          <TechCard key={index} image={tech.image} name={tech.name} />
        ))}
      </div>
      <footer>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </footer>
    </div>
  );
}

export default App;
