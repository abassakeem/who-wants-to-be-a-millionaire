
import './App.css';
import {BrowserRouter as Router, Route,Switch, Routes} from 'react-router-dom'
import Homepage from './components/homepage/homepage';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';



import Wwtbam from './components/wwtbam/wwtbam';
// import QuizSummary2 from './components/quizSummary/quizSummary2';



function App() {
  return (
    <Fragment>
      <Helmet><title>WWTBAM</title></Helmet>

    <Router>
     
      <div>
        
      
    <Switch>
        <Route exact path="/" component={Homepage} />
      
        <Route exact path="/start" component={Wwtbam} />
       
   
       
       

      </Switch>
        </div>
        
       
        
    
       
    
     
    </Router>
    </Fragment>
    
  );
}

export default App;
