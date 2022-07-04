import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './componetes/Login';
import NavBar from './componetes/NavBar';
import TaskForm from './componetes/TaskForm';
import TaskListTable from './componetes/TaskListTable';

class App extends Component {
  constructor(props) {  
    super(props)

    this.onRefreshHandler = this.onRefreshHandler.bind(this);
  }

  onRefreshHandler() {
    this.forceUpdate();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar onLinkClick={this.onRefreshHandler} />
          <div className="container" style={{ marginTop: 20 }}>
          <Switch>
          <Route exact path="/login" render={() => <Login onLoginSuccess={this.onRefreshHandler} />} />
            <Route exact path="/form" component={TaskForm} />
            <Route exact path="/form/:id" component={TaskForm} />
            <Route path="/" component={TaskListTable} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;