import React from "react";
import infoBannerImage from "../../assets/img/banner_2-min.png";
import FromToForm from "./FromToForm";
import LocalInfo from "./LocalInfo";

const InformationHub: React.FC = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${infoBannerImage})`,
          aspectRatio: "1440 / 293",
        }}
      >
        <FromToForm />
      </div>
      <LocalInfo />
    </>
  );
};

export default InformationHub;
