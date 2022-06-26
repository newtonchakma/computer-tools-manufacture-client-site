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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import MyReview from './Components/Pages/Dashboard/MyReview';
import Footer from './Components/SharePages/Footer';
import MyProfile from './Components/Pages/MyProfile';
import Users from './Components/Pages/Dashboard/Users';
import RequireAdmin from './Components/SharePages/RequireAdmin';
import UpDateProfile from './Components/Pages/Dashboard/UpDateProfile';
import Payment from './Components/Pages/Dashboard/Payment';
import Blogs from './Components/Pages/Dashboard/Blogs';








function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/items' element={<Items/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
     
      <Route path='/purchcase' element={<RequireAuth><Purchcase></Purchcase></RequireAuth>}></Route>
     
      <Route path='/dashboard' element={
      <RequireAuth>
        <Dashboard/>
      </RequireAuth>
    }>
      <Route index element={<MyOrder></MyOrder>}></Route>
      <Route path='review' element={<MyReview></MyReview>}></Route>
      <Route path='payment/:id' element={<Payment></Payment>}></Route>
      <Route path='updateprofile' element={<UpDateProfile></UpDateProfile>}></Route>
      
      <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      
    </Route>
      <Route path='/item/:id' element={
      <RequireAuth><Purchcase></Purchcase></RequireAuth>
      }></Route>
      <Route path='/bussnessSumary' element={<BussnessSumary></BussnessSumary>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route> 
      </Routes>
      
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
