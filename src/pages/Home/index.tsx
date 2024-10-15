import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import HomeBeforeLogin from "./BeforeLogin";
import HomeAfterLogin from "./AfterLogin";

const Home: React.FC = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("Home component useEffect. isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);


  return (
    <>
      {isLoggedIn ? (
          <HomeAfterLogin />
      ) : (
          <HomeBeforeLogin />
      )}
    </>
  );
};

export default Home;
