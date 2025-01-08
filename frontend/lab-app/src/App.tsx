import { NavBar } from "./components/NavBar";
import { PrivateRoute } from "./components/PrivateRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AppPage } from "./pages/AppPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { isAuthenticated } from "./services/apiService";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuthenticated() ? "/app" : "/login"} />}
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <AppPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
