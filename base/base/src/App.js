import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from '../src/components/Navbar'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'


function App() {
  return (
   <Router>
     {/* <Navbar/> */}
      <Switch>
        <Route path="/contact/:service" component={Contact} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Navbar} />
        <Route component={PageNotFound} />
      </Switch>
   </Router>
   
  );
}

export default App;
