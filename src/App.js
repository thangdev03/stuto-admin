import { Routes, Route, useLocation } from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Majors from "./pages/Majors";
import Posts from "./pages/Posts";
import Reports from "./pages/Reports";
import Subjects from "./pages/Subjects";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar currentPath={pathname}/>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/majors" element={<Majors />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/reports" element={<Reports />}/>
        <Route path="/subjects" element={<Subjects />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </div>
  );
}

export default App;
