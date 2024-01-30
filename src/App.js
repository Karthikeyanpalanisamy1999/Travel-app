import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import Mainpage from './Components/Mainpage.js';
import Booking from './Components/Booking.js';
import Bookingform from './Components/Bookingform.js';
import Final from './Components/Finalpage.js';
import List from './Components/List.js';
import Addpackages from './Components/Admin/Addtamilnadu.js';
import Addnational from './Components/Admin/Addnational.js';
import Addinternational from './Components/Admin/Addinternational.js';
import TamilNadu from './Components/data/tamilnadu.js';
import National from './Components/data/National.js';
import International from './Components/data/International.js';
import Updatetamilnadu from './Components/Admin/Updatetamilnadu.js';
import Updatenational from './Components/Admin/Updatenational.js';
import Updateinternational from './Components/Admin/UpdateInternational.js';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/main' element={<Mainpage/>}></Route>
          <Route path='/booking' element={<Booking/>}></Route>
          <Route path='/bookingform' element={<Bookingform/>}></Route>
          <Route path='/final' element={<Final/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/addtamilnadu' element={<Addpackages/>}></Route>
          <Route path='/addnational' element={<Addnational/>}></Route>
          <Route path='/addinternational' element={<Addinternational/>}></Route>
          <Route path='/tamilnadu' element={<TamilNadu/>}></Route>
          <Route path='/national' element={<National/>}></Route>
          <Route path='/international' element={<International/>}></Route>
          <Route path='/updatetamilnadu/:id' element={<Updatetamilnadu/>}></Route>
          <Route path='/updatenational/:id' element={<Updatenational/>}></Route>ou
          <Route path='/updateinternational/:id' element={<Updateinternational/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
