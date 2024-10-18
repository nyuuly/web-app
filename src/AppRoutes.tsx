import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeBeforeLogin from './pages/Home/BeforeLogin';
import HomeAfterLogin from './pages/Home/AfterLogin';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import InfoHubBeforeLogin from './pages/InformationHub/BeforeLogin';
import InfoHubAfterLogin from './pages/InformationHub/AfterLogin';
import TaskListBeforeLogin from './pages/TaskList/BeforeLogin';
import TaskListAfterLogin from './pages/TaskList/AfterLogin';
import About from './pages/AboutUs'; 
import UserProfile from './pages/UserProfile';

interface AppRoutesProps {
  isLoggedIn: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isLoggedIn }) => {
  const Home = () => {
    return isLoggedIn ? <HomeAfterLogin /> : <HomeBeforeLogin />;
  };

  const Info = () => {
    return isLoggedIn ? <InfoHubAfterLogin /> : <InfoHubBeforeLogin />;
  };

  const Tasks = () => {
    return isLoggedIn ? <TaskListAfterLogin /> : <TaskListBeforeLogin />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={isLoggedIn ? <Navigate to="/" replace /> : <SignIn />} />
      <Route path="/signup/*" element={isLoggedIn ? <Navigate to="/" replace /> : <SignUp />} />
      <Route path="/info" element={<Info />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/*" element={!isLoggedIn ? <Navigate to="/" replace /> : <UserProfile />} />
    </Routes>
  );
};

export default AppRoutes;
