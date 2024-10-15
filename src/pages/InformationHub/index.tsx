import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import InfoHubBeforeLogin from "./BeforeLogin";
import InfoHubAfterLogin from "./AfterLogin";

const Home: React.FC = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("Home component useEffect. isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);


  return (
    <>
      {isLoggedIn ? (
          <InfoHubAfterLogin />
      ) : (
          <InfoHubBeforeLogin />
      )}
    </>
  );
};

export default Home;
