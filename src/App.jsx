import { Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Home from "./pages/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Register from "./pages/Register";
import "./styles/app.sass";
import Login from "./pages/Login";
import Page from "./components/Page";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/"
            element={
              <Page title="Customers">
                <Home />
              </Page>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
