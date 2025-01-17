import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddProject from "./components/AddProject.jsx";
import Footer from "./components/Footer.jsx";
import MenteeRegistration from "./components/MenteeRegistration.jsx";
import MentorRegistration from "./components/MentorRegistration.jsx";
import NavbarDemo from "./components/Navbar.jsx";
import TimelineDemo from "./components/TimelineDemo.jsx";
import LoadingScreen from "./components/ui/Loading.jsx";
import Starvideo from "./components/ui/Starvideo.jsx";
import MentorDashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import StarryNightBackground from "./pages/Projects/Style.jsx";
import RegistrationCards from "./pages/RegistrationCard.jsx";
import Team from "./pages/Team.jsx";
import LeaderBoard from "./pages/leaderBoard/leaderboard.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const svg = new Image();
    svg.src = "jwoc-2024.svg";
    svg.onload = () => {
      const animationTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 4000);
      return () => clearTimeout(animationTimer);
    };

    return () => clearTimeout(timer);
  }, []);

  return (
    <StarryNightBackground>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <NavbarDemo />
          <Routes>
            <Route path="/" element={<Starvideo />} />
            <Route path="/mentor" element={<Home />} />
            <Route path="/dashboard" element={<MentorDashboard />} />
            <Route path="/timeline" element={<TimelineDemo />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/Mentor-registration" element={<MentorRegistration />} />
            <Route path="/mentee-registration" element={<MenteeRegistration />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/registrationcard" element={<RegistrationCards />} />
          </Routes>
          <Footer />
        </div>
      )}
    </StarryNightBackground>
  );
}

export default App;
