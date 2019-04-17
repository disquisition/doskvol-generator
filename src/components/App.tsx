import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import { Clocks } from './Clocks';
import { Districts } from './Districts';
import { Generator } from './Generator';
import { Home } from './Home';

export function App() {
  return (
    <Router>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li className={styles.mainNavListItem}>
            <Link className={styles.mainNavLink} to="/">
              Home
            </Link>
          </li>

          <li className={styles.mainNavListItem}>
            <Link className={styles.mainNavLink} to="/districts">
              Districts
            </Link>
          </li>

          <li className={styles.mainNavListItem}>
            <Link className={styles.mainNavLink} to="/clocks">
              Clocks
            </Link>
          </li>

          <li className={styles.mainNavListItem}>
            <Link className={styles.mainNavLink} to="/generators">
              Generators
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/districts" component={Districts} />

          <Route path="/clocks" component={Clocks} />

          <Route
            path={['/generators/:generatorName', '/generators']}
            component={Generator}
          />
        </Switch>
      </main>
    </Router>
  );
}
