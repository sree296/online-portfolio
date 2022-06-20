// Import Components
import {
  Route,
  Routes,
} from 'react-router-dom';
import {
  Contact,
  Experience,
  Header,
  Home,
  Projects,
  Skills,
} from './containers';

// Import Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
