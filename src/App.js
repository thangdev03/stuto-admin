import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Majors from "./pages/Majors";
import Posts from "./pages/Posts";
import Reports from "./pages/Reports";
import Subjects from "./pages/Subjects";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const { pathname } = useLocation();
  const [state, dispatch] = useAuthContext();
  const { user } = state

  return (
    <div className="App">
      {user && user.role == "admin" && (
        <Navbar currentPath={pathname}/>
      )}
      <Routes>
        <Route path="/login" element={<Login />}/>

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} exact/>
          <Route path="/majors" element={<Majors />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/subjects" element={<Subjects />}/>
          <Route path="/users" element={<Users />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
