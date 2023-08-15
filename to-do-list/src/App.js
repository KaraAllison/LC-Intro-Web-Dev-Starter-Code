import './App.css';
import Header from './components/Header/Header.js';
import SignUp from './components/SignUp/SignUp';
import ToDo from './components/ToDo/ToDo';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/todo' element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
