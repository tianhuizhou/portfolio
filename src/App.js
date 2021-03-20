import Navbar from "./components/Navbar";
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products"
import Cards from "./components/Cards"
function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path={'/services'} component={Services} />
            <Route path={'/products'} component={Products} />

        </Switch>
    </Router>
    </>
  );
}

export default App;
