import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import { Generator } from './Generator';
import { Home } from './Home';

export function App() {
  return (
    <Router>
      <div className={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path={['/generator/:generatorName', '/generator']}
            component={Generator}
          />
        </Switch>
      </div>
    </Router>
  );
}
