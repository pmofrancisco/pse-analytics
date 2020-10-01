import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Dashboard from './dashboard';
import UploadDailyQuotes from './upload-daily-quotes';

export default () => (
  <BrowserRouter>
    <SideMenu>
      <SideMenu.Item to="/" label="Dashboard" />
      <SideMenu.Item to="/upload-daily-quotes" label="Upload Daily Quotes" />
    </SideMenu>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/upload-daily-quotes">
        <UploadDailyQuotes />
      </Route>
    </Switch>
  </BrowserRouter>
);
