import React from 'react';
import './App.css';
import { Dashboard } from './features/dashboard/Dashboard';

interface AppProps {}

function App({}: AppProps) {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
