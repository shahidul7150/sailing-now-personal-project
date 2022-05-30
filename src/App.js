import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Albums from './components/Albums/Albums';
import News from './components/News/News';
import Events from './components/Events/Events';
import Sailors from './components/Sailors/Sailors';
import './App.css'
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/photo' element={<Albums></Albums>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/sailors' element={<Sailors></Sailors>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

     </Routes>
    </div>
  );
}

export default App;
