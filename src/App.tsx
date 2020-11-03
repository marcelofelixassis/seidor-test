import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './shared/layouts/layout';
import Home from './containers/Home';
import AddUser from './containers/AddUser';
import EditUser from './containers/EditUser';

const App: React.FC = () => {
  return (
    <Layout>
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/add" component={ AddUser } />
            <Route exact path="/edit" component={ EditUser } />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </Layout>
  );
}

export default App;
