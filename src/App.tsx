import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import TaskList from "./pages/TaskList";
import InformationHub from "./pages/InformationHub";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Import the new AboutUs component

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/info" element={<InformationHub />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <footer className="container mx-auto mt-8 text-center text-black">
          © 2024 Nyuuly.com All rights reserved.
        </footer>
    </>
  )
}

export default App