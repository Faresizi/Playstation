import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar/Navbar';
import HomeSection from './compnents/HomeSection/HomeSection';
import MainSection from './compnents/MainSection/MainSection';
import Footer from './compnents/Footer/Footer';

function App() {
  return ( 
    <div className="App"> 
    <Navbar/>
    <HomeSection/>
    <MainSection/>          
    <Footer/>
    
    </div>

);
}

export default App;
