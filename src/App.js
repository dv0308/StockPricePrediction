import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Layout from './components/layout/layout';
import Portfolio from "./components/Portfolio"
import Resume from "./components/pages/Resume"
import Skill from "./components/pages/Skills"
import Project from "./components/pages/Projects"
import ContactMe from "./components/ContactMe"

function App() {

  const [showContactMe, setContactMe] = useState(false);
  function onContactMeHandler(){
      setContactMe(!showContactMe)
  }

  return (
    <React.Fragment>
      <Layout onClick = {onContactMeHandler} >
        {showContactMe && <ContactMe onClick = {onContactMeHandler}/>}
        <Switch>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
          <Route path="/home">
            <Portfolio/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/skills">
            <Skill/>
          </Route>
          <Route path="/projects">
            <Project/>
          </Route>
        </Switch>
        </Layout>
    </React.Fragment>
  );
}

export default App;
