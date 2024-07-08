import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CEO from './components/CEO';
import CFO from './components/CFO';


function App() {
  return (
    <div className="App">
      <h1> Understanding Routing Hooks</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutUs/>}/>
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="ceo" element={<CEO/>}/>
        <Route path="cfo" element={<CFO/>}/>


      </Routes>
    </div>
  );
}


export default App;