import React from 'react';
import Home from './pages/Home.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.js';

const App = () => {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;