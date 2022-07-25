import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';
import Contact from './components/Contact';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   

  <Router>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} ></Route>
  </Routes>
  </Router>


    </div>
  );
}

export default App;
