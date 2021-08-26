import React from 'react';
import './App.css';
import {Dashboard} from "./features/dashboard/Dashboard";

interface AppProps {}

function App({}: AppProps) {
  return (<div>
      <Dashboard/>
    </div>
  );
}

export default App;
