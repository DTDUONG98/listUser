import './App.css';
import {Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './page/Home'
import Detail from './page/Detail'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Detail/:id" exact component={Detail} />
        </Switch>
    </Router>
  );
}

export default App;
