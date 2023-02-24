import './App.css';
import Index from './Page';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
