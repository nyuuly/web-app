import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TaskList from "./pages/TaskList";
import InformationHub from "./pages/InformationHub";
import Home from "./pages/Home";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/info" element={<InformationHub />} />
        </Routes>
        <footer className="container mx-auto mt-8 text-center text-gray-600">
          © 2023 Your Company Name. All rights reserved.
        </footer>
    </>
  )
}

export default App