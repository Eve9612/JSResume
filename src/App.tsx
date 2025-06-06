import { Routes, Route, Link,} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home /Home'
import Ecom from './Pages/Ecom/Ecom'
import Feature from './Pages/Feature/Feature'
import Resume from './Pages/Resume/Resume'
import Navbar from './Components/src/components/Navbar';


export default function App() {
  return (
    <div>
      <Navbar/>

      <nav>
      <Link to="/" style={{ marginRight: '16px' }}>Home</Link>
      <Link to="/Ecom" style={{ marginRight: '16px' }}>Ecom</Link>
      <Link to="/Feature" style={{ marginRight: '16px' }}>Feature</Link>
      <Link to="/Resume">Resume</Link>

      </nav>
      <div style={{padding: '20px'}}>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Ecom" element={< Ecom />} />
        <Route path="/Feature" element={< Feature />} />
        <Route path="/Resume" element={< Resume/>} />
      </Routes>
      </div>
    </div>

  );
}