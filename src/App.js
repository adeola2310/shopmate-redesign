import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';
import Home from "./Pages/Home/Home";
import notFound from "./Pages/404/notFound";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./Pages/PoductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import { Provider } from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <Switch>

                      <Route path="/" exact  component={Home}/>
                      <Route path="/cart" exact  component={Cart}/>
                      <Route path="/:id" exact component={ProductDetails}/>
                  </Switch>
                  <Route path="/not-found" exact component={notFound}/>

              </Layout>

          </BrowserRouter>
      </Provider>

  );
}

export default App;
