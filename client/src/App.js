import './App.css';
import {BrowserRouter as Router,Switch, Route, useParams } from "react-router-dom";
import Navbar from './component/Navbar';
import Carouselm from './component/Carousel';
import Mynavbar from './component/Mynavbar';
import Ecommerce from './component/Ecommerce';
import Landing from './component/Landing';
import Signin from './component/Signin';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
      <Route exact path="/shop"><Ecommerce/><Footer/></Route>
      <Route exact path="/shop/:_id"><Ecommerce/><Footer/></Route>
      <Route exact path='/landing'  component={Landing} />
      <Route exact path='/Signin'  component={Signin} />
</Switch>

      </Router>

    </div>
  );
}

export default App;
