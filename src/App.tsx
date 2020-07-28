import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index.routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
