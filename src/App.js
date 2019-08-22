import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../src/pages/Home';
import Bikes from '../src/pages/Bikes';
import SingleBike from '../src/pages/SingleBike';
import Contact from '../src/pages/Contact';
import Error from '../src/pages/Error';
import Navbar from '../src/components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bikes/" component={Bikes} />
        <Route exact path="/bikes/:slug" component={SingleBike} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
