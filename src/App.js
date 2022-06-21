import './App.css';
import Header from './Components/SharePages/Header'
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import BussnessSumary from './Components/Home/BussnessSumary';
import Items from './Components/Home/Items/Items/Items';
import Login from './Components/Home/Login/Login';
import SignUp from './Components/Home/Login/SignUp';
import RequireAuth from './Components/SharePages/RequireAuth';
import Purchcase from './Components/Pages/Purchcase';


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/items' element={<Items/>}></Route>
      <Route path='/purchcase' element={<RequireAuth><Purchcase></Purchcase></RequireAuth>}></Route>
      <Route path='/item/:id' element={
      <RequireAuth><Purchcase></Purchcase></RequireAuth>
      }></Route>
        <Route path='/bussnessSumary' element={<BussnessSumary></BussnessSumary>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
