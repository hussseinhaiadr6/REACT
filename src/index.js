import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FecthApp from './APIFetecher';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
     <Router> 

 <Link className="linker" to="/signup">Registration</Link>
<Link  className="linker" to="/Hello">API Fetcher</Link>
<Link  className="linker" to="/">Home</Link>

 <Switch>
    <Route path="/signup">
      <App />
    </Route>


 </Switch>
 <Switch>
    <Route path="/Hello" >
     <FecthApp />
    </Route>


 </Switch>
 <Switch>
    <Route path="/" >
     
    </Route>


 </Switch>
</Router>
 


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
