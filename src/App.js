import './App.css';
import Home from './project/home';
import Next from './project/List';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/next">
          <Next />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
