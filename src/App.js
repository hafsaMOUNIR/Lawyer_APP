import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Vues/Home/Home'
import SignIn from './Vues/SignIn/SignIn';
import Files from './Vues/Files/Files';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route exact path='/'element={<SignIn/>} />
        <Route exact path='/Files'element={<Files/>} />
      </Routes>

    </div>
  );
}

export default App;
