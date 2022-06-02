import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Albums from './components/Albums/Albums';
import News from './components/News/News';
import Events from './components/Events/Events';
import Sailors from './components/Sailors/Sailors';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import RequireAuth from './components/Login/RequireAuth';
import Analysis from './components/Dashboard/Analysis';
import MyBooking from './components/Dashboard/MyBooking';
import AddImage from './components/Dashboard/AddImage';
import AddEvent from './components/Dashboard/AddEvent';
import ManageUser from './components/Dashboard/ManageUser';
import AboutUs from './components/Dashboard/AboutUs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="news" element={<News></News>}></Route>
        <Route path="photo" element={<Albums></Albums>}></Route>
        <Route path="events" element={<Events></Events>}></Route>
        <Route
          path="sailors"
          element={
            <RequireAuth>
              <Sailors></Sailors>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Analysis/>}></Route>
         <Route path='booking' element={<MyBooking/>}></Route>
         <Route path='addImages' element={<AddImage/>}></Route>
         <Route path='addEvents' element={<AddEvent/>}></Route>
         <Route path='manageUser' element={<ManageUser/>}></Route>
         <Route path='about' element={<AboutUs/>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
