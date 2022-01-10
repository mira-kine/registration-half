import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { getUser } from './services/users';
import SignUp from './views/SignUp';

function App() {
  // const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
