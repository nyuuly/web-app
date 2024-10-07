import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./pages/TaskList";
import InformationHub from "./pages/InformationHub";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";

// Lazy load all signup-related components
const SignUpPages = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/info" element={<InformationHub />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup/*" element={<SignUpPages />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App