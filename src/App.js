import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import DetailsCard from './components/DetailsCard';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/service/:id">
            <DetailsCard/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
