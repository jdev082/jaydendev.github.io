import Title from './components/title/title'
import Motd from './components/motd/motd'
import Projects from './components/projects/projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Title />
        <Motd />
        <Projects />
      </header>
    </div>
  );
}

export default App;
