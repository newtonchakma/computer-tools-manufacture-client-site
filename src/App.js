import logo from './logo.svg';
import './App.css';
import Header from './Components/SharePages/Header'
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </div>
  );
}

export default App;
