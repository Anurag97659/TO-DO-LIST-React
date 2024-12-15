import './App.css';
import Body from './comp/body.js';
import Head from './comp/Header.js';
import Footer from './comp/Footer.js';
import About from './comp/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
   <Router>
      <Head title="My Todos List"  /> 
      <Switch>

          <Route exact path="/" render={()=>{
            return(
            <>
           <Body />
           <Footer />
            </>)
          }}> 
          </Route>

          <Route exact path="/about">
            <About />
          </Route> 

        </Switch> 
      
    </Router>
    
     
    </> 
  );
}

export default App;

