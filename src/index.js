import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import promise from "redux-promise";

import HomePage from './components/home_page';
import SummonerPage from "./components/summoner_page";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/:server/summoner/:name" component={SummonerPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
