import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AdminPage from 'feature/admin';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getListCartAction } from 'stores/slices/cart.slice';

const HomePage = React.lazy(() => import('feature/homepage/HomePage'));

const Login = React.lazy(() => import('feature/Login/Login'));

const Register = React.lazy(() => import('feature/register/Register'));

const MensClothing = React.lazy(() => import('feature/product/product-category/MensClothing'));

const WomensClothing = React.lazy(() => import('feature/product/product-category/WomensClothing'));

const KidsClothing = React.lazy(() => import('feature/product/product-category/KidsClothing'));

const KidShoes = React.lazy(() => import('feature/product/product-category/KidShoes'));

const WomenShoes = React.lazy(() => import('feature/product/product-category/WomenShoes'));

const MenShoes = React.lazy(() => import('feature/product/product-category/MenShoes'));

const Cart = React.lazy(() => import('feature/product/product-cart/Cart'));

const AllProducts = React.lazy(() => import('feature/product/product-list/Products'));

const ProductSearch = React.lazy(() => import('feature/product/product-search/ProductSearch'));

const ProductDetail = React.lazy(() => import('feature/product/product-detail/ProductDetail'));

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<React.Suspense fallback={<>Loading...</>}> <HomePage /> </React.Suspense>} />
          <Route path="/login" element={<React.Suspense fallback={<>Loading...</>}> <Login /> </React.Suspense>} />
          <Route path="/register" element={<React.Suspense fallback={<>Loading...</>}> <Register /> </React.Suspense>} />
          <Route path="/mens-clothing" element={<React.Suspense fallback={<>Loading...</>}> <MensClothing /> </React.Suspense>} />
          <Route path="/womens-clothing" element={<React.Suspense fallback={<>Loading...</>}> <WomensClothing /> </React.Suspense>} />
          <Route path="/kids-clothing" element={<React.Suspense fallback={<>Loading...</>}> <KidsClothing /> </React.Suspense>} />
          <Route path="/kids-shoes" element={<React.Suspense fallback={<>Loading...</>}> <KidShoes /> </React.Suspense>} />
          <Route path="/womens-shoes" element={<React.Suspense fallback={<>Loading...</>}> <WomenShoes /> </React.Suspense>} />
          <Route path="/mens-shoes" element={<React.Suspense fallback={<>Loading...</>}> <MenShoes /> </React.Suspense>} />
          <Route path="/cart" element={<React.Suspense fallback={<>Loading...</>}> <Cart /> </React.Suspense>} />
          <Route path="/all-products" element={<React.Suspense fallback={<>Loading...</>}> <AllProducts /> </React.Suspense>} />
          <Route path="/products-search/:q" element={<React.Suspense fallback={<>Loading...</>}> <ProductSearch /> </React.Suspense>} />
          <Route path="/products-detail/:id" element={<React.Suspense fallback={<>Loading...</>}> <ProductDetail /> </React.Suspense>} />
          <Route
            path={"admin"}
            element={
              <AdminPage />
            }
          >
            <Route
              path={"category"}
              element={
                <AdminPage />
              }
            />
            <Route
              path={"product"}
              element={
                <AdminPage />
              }
            />
            <Route
              path={"order"}
              element={
                <AdminPage />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;