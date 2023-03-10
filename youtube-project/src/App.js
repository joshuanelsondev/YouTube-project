import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
