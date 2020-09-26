import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Init from './page/Init'




const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/"  exact component={Init}/>
   
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;