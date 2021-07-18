
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import NavBar from './components/Navbar'
import SignInPage from './pages/sign-in'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
