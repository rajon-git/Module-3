
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Menu from './components/nav/Menu';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './pages/user/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import AdminRoute from './components/routes/AdminRoute';
import AdminCategory from './pages/admin/Category';
import AdminProduct from './pages/admin/Product';
import UserProfile from './pages/user/Profile';
import UserOrders from './pages/user/Order';
import AdminProducts from './pages/admin/Products';
import AdminProductUpdate from './pages/admin/ProductUpdate';
import Shop from './pages/Shop';
import Search from './pages/Search';
import ProductView from './pages/ProductView';
import Cart from './pages/cart';
import AdminOrders from './pages/admin/Orders';

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};

const App=()=> {
  return (
    <BrowserRouter>
      <Menu/>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product/:slug" element={<ProductView/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="user" element={<UserProfile/>}/>
          <Route path="user/orders" element={<UserOrders/>}/>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/category" element={<AdminCategory/>}/>
          <Route path="admin/product" element={<AdminProduct/>} />
          <Route path="admin/products" element={<AdminProducts/>} />
          <Route
            path="admin/product/update/:slug"
            element={<AdminProductUpdate />}
          />
          <Route path="admin/orders" element={<AdminOrders/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
