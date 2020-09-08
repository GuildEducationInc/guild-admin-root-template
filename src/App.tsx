import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Navigation } from './layout/Navigation';
import SubApp from './SubApp'; 
import { Providers } from './components/Providers';

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Providers>
          <Navigation />
          <Switch>
            <SubApp />
          </Switch>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
