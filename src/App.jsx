import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Setting from './pages/Setting/Setting';
import Header from './components/Header/Header';
import NotFound from './pages/404/NotFound';


function App() {
  return (
    <div className="App">
        <Header> </Header>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/*' element={<NotFound/>}></Route>
        </Routes>  
      </div>
  );
}

export default App;
