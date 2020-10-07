import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <ToastContainer />
    <Dashboard />
    <GlobalStyle />
  </>
);

export default App;
