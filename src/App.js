import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logOut = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>Hello! Welcome to your page</h1>
                <button onClick={logOut}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
