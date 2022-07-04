import './App.css';
import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterApp } from './router-app/RouterApp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;