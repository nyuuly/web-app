import React from "react";
import { useTranslation } from "react-i18next";
import FullwBgWrapper from "../../../components/misc/FullwBgWrapper";
import LegalInfoCards from "./LegalInfoCards";
import SignUp from "./SignUp";

const InfoHubBeforeLogin: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main>
      <FullwBgWrapper
        bgClassName="pb-12"
        style={{
          background:
            "linear-gradient(180deg, #051C58 0%, #3D4EDD 51%, #FFA555 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white text-center px-8 md:px-24">
            Your resource hub to get answers to any essential, complex questions
            that you may have about living in Japan.
          </h1>
          <LegalInfoCards />
          <div className="p-2 md:p-4 m my-4 ">
            <h2 className="text-2xl text-white text-center font-medium">
              Information for you to settle down in Japan with ease.
            </h2>
            <h2 className="text-2xl text-white text-center font-medium mt-8">
              To be done here
            </h2>
          </div>
          <div className="mt-2 ">
            <SignUp className="mb-8 rounded-xl" />
          </div>
        </div>
      </FullwBgWrapper>
      {/* <FromToForm />
      <LocalInfo /> */}
    </main>
  );
};

export default InfoHubBeforeLogin;
