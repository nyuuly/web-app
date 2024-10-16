import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import axiosInstance from '../../../api/axiosConfig';
import { API_ENDPOINTS } from '../../../api/endpoints';
import Features from "./Features";
import DesignedForYou from "./DesignedForYou";
// import AnimatedSignUp from "./SignUp";
import FullwBgWrapper from "../../../components/misc/FullwBgWrapper";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [version, setVersion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await axiosInstance.get(API_ENDPOINTS.VERSION);
        setVersion(response.data);
      } catch (err) {
        setError('Failed to fetch version');
        console.error(err);
      }
    };

    fetchVersion();
  }, []);

  return (
    <main>
      <FullwBgWrapper
        bgClassName="pb-24"
        style={{
          background: 'linear-gradient(180deg, #051C58 0%, #3D4EDD 51%, #FFA555 100%)',
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 text-white px-4">
              <h1 className="text-6xl font-bold mb-6">
                {t("moveWithConfidence")}
              </h1>
              <p className="text-xl font-semibold mb-4">
                {t("embarkOnNewAdventure")}
              </p>
            </div>
          </div>
        </div>
      </FullwBgWrapper>
      <FullwBgWrapper>
        <div className="container mx-auto">
          <div className="flex flex-col w-full" id="features">
            <Features />
          </div>
        </div>
      </FullwBgWrapper>
      <FullwBgWrapper bgClassName="bg-gray-100">
        <div className="container mx-auto px-4">
          <DesignedForYou />
        </div>
      </FullwBgWrapper>
      <FullwBgWrapper>
        <div className="container mx-auto p-8 rounded-lg text-white text-4xl my-12" style={{background: 'linear-gradient(202.89deg, #E3FC3E 20.42%, #161C6D 120.97%)'}}>
        {/* <SignUp className="my-12 rounded-lg" /> */}
        To be updated: Newsletter registration?
        </div>
      </FullwBgWrapper>
      {/* <AnimatedSignUp scrollThreshold={300} /> */}
      {<p>Current API Version: {version}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </main>
  );
};

export default Home;
