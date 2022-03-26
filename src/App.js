import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Page2 from "./components/Page/Page2";
import Page3 from "./components/Page/Page3";
import Page4 from "./components/Page/Page4";

import Home from "./screens/Home";
import Process from "./screens/Process";
import MainProcess from "./screens/Process/process";
import ProcessStart from "./screens/Process/process-start";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Otp from "./screens/Otp";
import PageList from "./screens/PageList";
import Reports from "./screens/reports";
import Test from "./screens/Test";
import TestForm from "./screens/Test/test-form";
import TestDone from "./screens/Test/test-done";
import TestTimeout from "./screens/Test/test-timeout";
import ProcessDone from "./screens/Test/process-done";
import TestInstructions from "./screens/Test/text-instruction";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import AOS from 'aos';

// MOBILE VERSION
import HomeMobile from "./screens/mobile/Home";
import MobileRouter from "./screens/mobile/routers/mobileRouter";

function App() {
  AOS.init()
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <SignIn />} />
        <Route
          exact
          path="/process"
          render={() => (
            <Page
              title="Bienvenido a tus procesos, Daniel"
              subtitle="Tienes 30 días para seguir disfrutando Kokoro gratis"
            >
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/new-process"
          render={() => (
            <Page2>
              <Process />
            </Page2>
          )}
        />
        <Route
          exact
          path="/process/:id"
          render={() => (
            <Page2>
              <MainProcess />
            </Page2>
          )}
        />
        <Route
          exact
          path="/process-start"
          render={() => (
            <Page3>
              <ProcessStart />
            </Page3>
          )}
        />
        <Route
          exact
          path="/reports"
          render={() => (
            <Page2>
              <Reports />
            </Page2>
          )}
        />
        <Route
          exact
          path="/test"
          render={() => (
            <Page2>
              <Test />
            </Page2>
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Page2>
              <Profile />
            </Page2>
          )}
        />
        <Route
          exact
          path="/test-instruction"
          render={() => (
            <Page4>
              <TestInstructions />
            </Page4>
          )}
        />
        <Route
          exact
          path="/start-form"
          render={() => (
            <Page4>
              <TestForm />
            </Page4>
          )}
        />
        <Route
          exact
          path="/test-done"
          render={() => (
            <Page4>
              <TestDone />
            </Page4>
          )}
        />
        <Route
          exact
          path="/test-timeout"
          render={() => (
            <Page4>
              <TestTimeout />
            </Page4>
          )}
        />
        <Route
          exact
          path="/process-done"
          render={() => (
            <Page4>
              <ProcessDone />
            </Page4>
          )}
        />
        <Route
          exact
          path="/settings"
          render={() => (
            <Page2 title="Settings">
              <Settings />
            </Page2>
          )}
        />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/otp" render={() => <Otp />} />
        <Route exact path="/pagelist" component={PageList} />
        <MobileRouter path='/mobile-version' component={HomeMobile} />
      </Switch>
    </Router>
  );
}

export default App;
