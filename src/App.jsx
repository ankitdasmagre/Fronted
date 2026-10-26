// import logo from './logo.svg';
import './App.css';
import Home from './Components/home/Home';
import NavBar from './Components/navbar/NavBar';
import About from './Components/about/About';
import Login from './Components/login/Login';
import Contact from './Components/contact/Contact';
import Layout from './Components/layout/Layout';
import Layout1 from './Components/layout/Layout1';


import Dashboard from './Components/dashboard/Dashboard';
import Order from './Components/order/Order';
import Customers from './Components/customers/Customers';
import Setting from './Components/setting/Setting';

import { BrowserRouter,Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
    
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Contact" element={<Contact/>} />
    {/* <Route path="/Layout" element={<Layout/>} /> */}
    <Route path="/Layout1" element={<Layout1/>}/>
    <Route path="/Layout" element={<Layout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="order" element={<Order />} />
      <Route path="customers" element={<Customers />} />
      <Route path="setting" element={<Setting />} />
    </Route>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
