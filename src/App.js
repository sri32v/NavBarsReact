import "./App.css";
import { Route } from "react-router-dom";
import {
  Home,
  NavBar1,
  NavBar2,
  NavBar3,
  NavBar4,
  NavBar5,
  NavBar6,
} from "./components";
function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/NavBar1" component={NavBar1} />
      <Route exact path="/NavBar2" component={NavBar2} />
      <Route exact path="/NavBar3" component={NavBar3} />
      <Route exact path="/NavBar4" component={NavBar4} />
      <Route exact path="/NavBar5" component={NavBar5} />
      <Route exact path="/NavBar6" component={NavBar6} />
    </>
  );
}

export default App;
