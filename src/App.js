import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import Home from "./pages/seeker/Home";
import Interview from "./pages/Interview";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Applicants from "./pages/employer/Applicants";
import Seekers from "./pages/admin/Seekers";
import Employers from "./pages/admin/Employers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/interviews" element={<Interview />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/seekers" element={<Seekers />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
