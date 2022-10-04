import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Vues/Home/Home'
import SignIn from './Vues/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn/>} />
      </Routes>

    </div>
  );
}

export default App;
