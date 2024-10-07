import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the new Footer component
import TaskList from "./pages/TaskList";
import InformationHub from "./pages/InformationHub";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Import the new AboutUs component
import SignUp from "./pages/SignUp";
import EmailInput from "./pages/SignUp/EmailInput";
import VerificationCode from "./pages/SignUp/VerificationCode";
import Questions from "./pages/SignUp/Questions";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/info" element={<InformationHub />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />}>
            <Route index element={<EmailInput />} />
            <Route path="verification" element={<VerificationCode />} />
            <Route path="questions" element={<Questions />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer /> {/* Replace the old footer with the new Footer component */}
    </>
  )
}

export default App