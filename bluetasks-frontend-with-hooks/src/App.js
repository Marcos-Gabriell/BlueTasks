import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './componetes/Login';
import NavBar from './componetes/NavBar';
import TaskForm from './componetes/TaskForm';
import TaskListTable from './componetes/TaskListTable';
import { AuthContext, useAuth } from './hooks/useAuth';

const App = (props) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container" style={{ marginTop: 20 }}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/form" component={TaskForm} />
              <Route exact path="/form/:id" component={TaskForm} />
              <Route path="/" component={TaskListTable} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;