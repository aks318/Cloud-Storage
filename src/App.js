import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from './Components/Onboarding.js';
import Home from './Components/Home.js';
import LocalStorage from './Components/LocalStorage.js';
import Notifications from './Components/Notifications.js';
import Profile from './Components/Profile.js';
import StorageManagement from './Components/StorageManagement.js';

function App() {
  return (
    <>

      <Router>
        <Switch>

          <Route path="/StorageManagement">
            <StorageManagement />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/Notifications">
            <Notifications />
          </Route>

          <Route path="/LocalStorage">
            <LocalStorage />
          </Route>

          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/">
            <Onboarding />
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;
