import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import About from 'containers/About';
import Sum from 'containers/Sum';
import NotFound from 'containers/NotFound';

export default () => {
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="sum" component={Sum}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
