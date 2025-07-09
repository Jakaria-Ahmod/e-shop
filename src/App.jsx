import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import RootLayout from './layout/rootlayout';
import HomePage from './pages/home';
import Cart from './pages/cart';
import Contact from './pages/contact';
import Login from './pages/auth/login';
import Register from './pages/auth/register/Index';
import Blog from './pages/Blog';
import BlogDetail from './pages/blogDetail/Index';
import Chackout from './pages/chackout';
import MyAccout from './pages/myAccount';
import Product from './pages/product';
import ProductDetail from './pages/productDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
        },
        {
          path: '/cart',
          element: <Cart></Cart>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '/blogdetail/:id',
          element: <BlogDetail></BlogDetail>,
        },
        {
          path: '/chackout',
          element: <Chackout></Chackout>,
        },
        {
          path: '/myaccout',
          element: <MyAccout></MyAccout>,
        },
        {
          path: '/product',
          element: <Product></Product>,
        },
        {
          path: '/product/:id',
          element: <ProductDetail></ProductDetail>,
        },
        {
          path: '/productdetail',
          element: <ProductDetail></ProductDetail>,
        },
        {
          path: '*',
          element: <div>not route</div>,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
