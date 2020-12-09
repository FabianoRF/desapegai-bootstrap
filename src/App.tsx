import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ProductProvider } from './hooks';

import './styles/bootstrap.min.css';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
