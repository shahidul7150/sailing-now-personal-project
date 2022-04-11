import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Events from './components/My_Events/Events';
import News from './components/News/News';
import PhotoAlbums from './components/PhotoAlbums/PhotoAlbums';
import Sailors from './components/Sailors/Sailors';
import './App.css'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/photo' element={<PhotoAlbums></PhotoAlbums>}></Route>
        <Route path='/sailors' element={<Sailors></Sailors>}></Route>

     </Routes>
    </div>
  );
}

export default App;
