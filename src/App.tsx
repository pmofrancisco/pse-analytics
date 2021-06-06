import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { faChartBar, faHome, faUpload } from '@fortawesome/free-solid-svg-icons';
import SideMenu from './components/SideMenu';
import Dashboard from './dashboard';
import TrendFollowing from './trend-following';
import UploadDailyQuotes from './upload-daily-quotes';

export default () => (
  <BrowserRouter>
    <SideMenu>
      <SideMenu.Item to="/" icon={faHome} />
      <SideMenu.Item to="/upload-daily-quotes" icon={faUpload} />
      <SideMenu.Item to="/trend-following" icon={faChartBar} />
    </SideMenu>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/trend-following">
        <TrendFollowing />
      </Route>
      <Route path="/upload-daily-quotes">
        <UploadDailyQuotes />
      </Route>
    </Switch>
  </BrowserRouter>
);
