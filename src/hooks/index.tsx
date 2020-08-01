import React from 'react';

import { CategoryProvider } from './categories';

const AppProvider: React.FC = ({ children }) => (
  <CategoryProvider>{children}</CategoryProvider>
);

export default AppProvider;
