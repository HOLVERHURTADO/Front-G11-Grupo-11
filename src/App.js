//import logo from './logo.svg';
import './App.css';
import Rutas from './Rutas';
import LoginButton from './componentes/Login';
import LogoutButton from './componentes/Logout';
import Profile from './componentes/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="container">
      {
          isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )
        }

        <Rutas />
      </header>
    </div>
  );
}

export default App;
