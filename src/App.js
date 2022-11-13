import './styles/app.css';
import "./styles/navbar.css";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";
import {useState} from "react";

function App() {
    const [isUserAuth, setIsUserAuth] = useState(false);

    return (
          <AuthContext.Provider value={{
              isUserAuth,
              setIsUserAuth,
          }}>
              <Router>
                  <Navbar/>
                  <AppRouter/>
              </Router>
          </AuthContext.Provider>
    );
}

export default App;