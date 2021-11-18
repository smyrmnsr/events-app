import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './store/reducers/rootReducer';
import ManageEvent from './routes/manage-event';
import RegisterPage from './routes/register';
import LoginPage from './routes/login';
import LogoutPage from './routes/logout';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Get Redux store */
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Provider store={store}> 
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/manage-event" element={<ManageEvent />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/logout" element={<LogoutPage />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


