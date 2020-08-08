import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';
import Home from "./Pages/Home/Home";
import notFound from "./Pages/404/notFound";
import Layout from "./components/Layout/Layout";

function App() {
  return (
      <BrowserRouter>
            <Layout>
                <Switch>

                <Route path="/" exact  component={Home}/>
                </Switch>
                <Route path="/not-found" exact component={notFound}/>

            </Layout>

      </BrowserRouter>
  );
}

export default App;
