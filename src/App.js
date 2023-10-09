import logo from './logo.svg';
import './App.css';
import NavBar from './Components/molecules/NavBar';
import Footer from './Components/molecules/Footer';
import Home from './Components/page/Home';


function App() {
  return (
    <div>
      
      <NavBar/>
      <Home />
      <Footer/>
      
    </div>
  );
}

export default App;
