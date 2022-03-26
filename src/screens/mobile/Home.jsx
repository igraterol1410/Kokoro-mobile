import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Redirect, useLocation } from 'react-router-dom'
import Menu from "./menu/Menu";
import ProcessRouter from "./routers/ProcessRouter";
import ProcessList from "./process/ProcessList";
import StartProcess from "./process/StartProcess";
import RecomendedTests from "./tests/RecomendedTests";
import Invitation from "./about/Invitation";
import Company from "./about/Company";
import About from "./about/About";
import ShareReport from "./share/ShareReport";
import Report from "./report/Report";
import PostulantHome from "./postulant/PostulantHome";
import Instructions from "./tests/Instruccions";
import ExpiredTime from "./tests/ExpiredTime";
import TestContainer from "./tests/TestContainer";


const Home = () => {
  const location = useLocation();
  const { path } = useRouteMatch()

  // useEffect(()=>{
  //   console.log(path)
  // },[])

  return (
    <>
      <Menu />
      <Router>
        <Switch>
            <ProcessRouter exact path={`${path}/list`} component={ProcessList} />
            <ProcessRouter exact path={`${path}/start-process`} component={StartProcess} />
            <ProcessRouter exact path={`${path}/recomended-test`} component={RecomendedTests} />
            <ProcessRouter exact path={`${path}/invite`} component={Invitation} />
            <ProcessRouter exact path={`${path}/about-company`} component={Company} />
            <ProcessRouter exact path={`${path}/about`} component={About} />
            <ProcessRouter exact path={`${path}/share-report`} component={ShareReport} />
            <ProcessRouter exact path={`${path}/test-report`} component={Report} />
            <ProcessRouter exact path={`${path}/postulant-home`} component={PostulantHome} />
            <ProcessRouter exact path={`${path}/test-instructions`} component={Instructions} />
            <ProcessRouter exact path={`${path}/expired-time`} component={ExpiredTime} />
            <ProcessRouter exact path={`${path}/test`} component={TestContainer} />
          </Switch>
        </Router>
    </>
  )
}

export default Home
