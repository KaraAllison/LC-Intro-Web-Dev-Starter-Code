import './App.css';
import Header from './components/Header/Header.js';
import SignUp from './components/SignUp/SignUp';
import ToDo from './components/ToDo/ToDo';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      {/* <Header log={log} setLog={setLog}/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Header log={log} setLog={setLog}/>}>
            <Route index element={<SignUp log={log} setLog={setLog}/>} />
            <Route path="todo" element={<ToDo />} />
          </Route> */}
          <Route path='/' element={<><Header log={log} setLog={setLog}/>
          <SignUp log={log} setLog={setLog}/></>} />
          <Route path='/todo' element={<><Header log={log} setLog={setLog}/>
          <ToDo log={log} setLog={setLog}/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
