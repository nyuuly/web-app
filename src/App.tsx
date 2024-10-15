import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./pages/TaskList";
import InformationHub from "./pages/InformationHub";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import { AuthProvider } from './contexts/AuthContext';

// Lazy load all signup-related components
const SignUpPages = lazy(() => import("./pages/SignUp"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/info" element={<InformationHub />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/signup/*" element={<SignUpPages />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </AuthProvider>
  )
}

export default App;
