import Navbar from "./components/Navbar";
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact />
        </Switch>
    </Router>
    </>
  );
}

export default App;
