import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'swiper/css';
import { Provider } from 'react-redux';
import { store } from './service/redux/store.js';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer></ToastContainer>
    <App />
  </Provider>
);
