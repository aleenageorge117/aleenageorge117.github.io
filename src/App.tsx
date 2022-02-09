import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router } from "react-router-dom";

// COMPONENTS
import SiteLayout from './containers/Sitelayout/Sitelayout';

// SCSS
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <SiteLayout></SiteLayout>
      </Router>
    </div>
  );
}

export default App;
