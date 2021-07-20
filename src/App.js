
import './App.css';
import Header from './Header/Header';
import Pay from './Pay/Pay';
import Schedule from './Schedule/Schedule';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      
      <Switch>
      <Route path="/schedule"> 
      <Schedule></Schedule>
      </Route>

      <Route path="/pay"> 
      <Pay></Pay>
      </Route>
      <Route path="/">
      <Home></Home>
      </Route>
      </Switch>
      </Router>
      
      {/* <Pay></Pay> */}
      
    </div>
  );
}

export default App;
