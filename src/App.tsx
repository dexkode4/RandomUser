import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import PageLayout from './components/PageLayout';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <PageLayout>
          <UserList />
        </PageLayout>
      </Route>

      <Route path="/:userId" exact>
        <PageLayout>
          <UserDetails />
        </PageLayout>
      </Route>
    </Router>
  );
}

export default App;
