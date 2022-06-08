import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} >Home</Route>
        <Route path='contact-us' element={<Contact />} >Home</Route>
      </Routes>


    </div>
  );
}

export default App;
