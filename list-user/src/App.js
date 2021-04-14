import './App.css';
import {Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './page/Home';
import Detail from './page/Detail';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as userAction from './actions/users'
// import Prototype from 'prop-types';
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

// App.prototype = {
//   userAction: Prototype.shape({
//     getUsers: Prototype.func,
//   })
// }

// const mapStateToProps = null;
// const mapDispatchToProps = dispatch => {
//   return {
//     userAction: bindActionCreators(userAction, dispatch)
//   }
// };

export default App;
