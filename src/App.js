import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';
import Blog from './Component/Bog/Blog';
import Skill from './Component/Skill/Skill';
import Contact from './Component/Contact/Contact';
import HeaderMain from './Component/HeaderMain/HeaderMain';
import HomeMain from './Component/HomeMain/HomeMain';

function App() {
  return (
   <Router>
     <Header></Header>
     <Switch>
     <Route exact path="/">
         <HomeMain></HomeMain>
       </Route>
       <Route path="/home">
          <Home></Home>
       </Route>
       <Route path="/project">
         <Projects></Projects>
       </Route>
       <Route path="/blog">
        <Blog></Blog>
       </Route>
       <Route path="/skill">
        <Skill></Skill>
       </Route>
       <Route path="/contact">
        <Contact></Contact>
       </Route> 
     </Switch>
   </Router>
  );
}

export default App;
