import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import TaskListBeforeLogin from "./BeforeLogin";
import TaskListAfterLogin from "./AfterLogin";

const Home: React.FC = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("Home component useEffect. isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);


  return (
    <>
      {isLoggedIn ? (
          <TaskListAfterLogin />
      ) : (
          <TaskListBeforeLogin />
      )}
    </>
  );
};

export default Home;
