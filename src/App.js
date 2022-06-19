import './App.css';
import Header from './Components/SharePages/Header'
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import BussnessSumary from './Components/Home/BussnessSumary';


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/bussnessSumary' element={<BussnessSumary></BussnessSumary>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
