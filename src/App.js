import './App.css';
import {Route} from 'react-router-dom';
import {Home,NavBar1,NavBar2,NavBar3} from './components'
function App() {
  return (
    <>
<Route exact path='/' component={Home}/>
<Route exact path='/NavBar1' component={NavBar1}/>
<Route exact path='/NavBar2' component={NavBar2}/>
<Route exact path='/NavBar3' component={NavBar3}/>
    </>
  );
}

export default App;
