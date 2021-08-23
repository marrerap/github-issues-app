import "./App.css";
import React, { useEffect, useState } from "react";
import IssuesList from "./components/IssuesList";
import Issue from "./components/Issue";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // getCharacters();

    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)        
        setIssues(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/issues-list">
            <IssuesList issues={issues} />
          </Route>
          <Route exact path="/issue/:id">
            <Issue issues={issues} />
          </Route>
          <Redirect to="/issues-list" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
