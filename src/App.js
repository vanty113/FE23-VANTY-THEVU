import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('feature/homepage/HomePage'));

const Login = React.lazy(() => import('feature/Login/Login'));

const Register = React.lazy(() => import('feature/register/Register'));

const MensClothing = React.lazy(() => import('feature/product/product-category/MensClothing'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<React.Suspense fallback={<>Loading...</>}> <HomePage /> </React.Suspense>}/>
          <Route path="/login" element={<React.Suspense fallback={<>Loading...</>}> <Login /> </React.Suspense>} />
          <Route path="/register" element={<React.Suspense fallback={<>Loading...</>}> <Register /> </React.Suspense>} />
          <Route path="/mens-clothing" element={<React.Suspense fallback={<>Loading...</>}> <MensClothing /> </React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;