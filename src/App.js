import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Skills  from './Components/Skills';
import Projects from './Components/Projects'
import Contect from './Components/Contect'
import {Education} from './Components/education'
 
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contect />
    </div>
  );
}

export default App;
