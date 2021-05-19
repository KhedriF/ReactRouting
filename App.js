import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';

import Movies from './components/Movies';
import NotFound from './components/NotFound';
import Rentals from './components/Rentals';
import Customers from './components/Customers';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <React.Fragment>

    <Navbar />
    <main className="App">
      <Switch>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect exact from="/" to="/movies" />
      <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
