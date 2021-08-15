import './App.css';
import Navigation from './Nav';
import {Switch,BrowserRouter,Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './Nav.css';
import TakeATest from './TakeATest';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import HomePage from './HomePage';
import FormPage from './Feed';
import Ret from './Message';
import 'font-awesome/css/font-awesome.css';
import Footer from './footer';
//import 'bootstrap-social/bootstrap-social.css';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Navigation/>
       <Switch>
       <Route path="/" exact component={HomePage}></Route>  
       <Route path="/Test" exact component = {TakeATest}/>
       <Route path="/About" exact component = {About}/> 
       <Route path="/Contact" exact component = {Contact}/>
       <Route path="/Blog" exact component = {Blog}/>
       <Route path="/Feedback" exact component={FormPage}/>
       <Route path="/Message" exact component={Ret}/>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
