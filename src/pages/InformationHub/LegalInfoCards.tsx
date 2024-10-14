import React from "react";
import { useTranslation } from "react-i18next";
import cardImage from "../../assets/img/mailbox.png";
import idCardImage from "../../assets/img/idCard.png";
import { FiArrowRight } from "react-icons/fi";
import {
  FaAddressCard,
  FaMobile,
  FaHome,
  FaExclamationTriangle,
} from "react-icons/fa";

const LegalInfoCards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-orange-400 p-2 md:p-4 m rounded-lg mb-4 text-center">
        <div className="text-xl font-bold">
          <FaExclamationTriangle className="inline-block mr-4" />
          Legal information you must know before your move
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className="md:w-1/2 bg-gray-100 p-4 md:p-8 rounded-lg flex flex-col relative justify-end"
          style={{
            background: "linear-gradient(180deg, #A3ECC0 0%, #A8EF75 100%)",
          }}
        >
          <div>
            <FaAddressCard />
            <h3 className="text-2xl font-medium">Residence Card</h3>
            <p className="font-bold py-2">Zairyu Card</p>
            <FiArrowRight className="text-2xl" />
          </div>
          <img
            src={cardImage}
            alt={t("taskListMockup")}
            className="w-1/3 h-auto absolute bottom-0 right-4"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <div
            className="bg-gray-100 p-4 pt-8 rounded-lg flex-1 relative justify-end"
            style={{
              background:
                "linear-gradient(90deg, #F7F09D 0%, #AAC7FF 100%)",
            }}
          >
            <div>
              <FaMobile />
              <h3 className="text-2xl font-medium">My number card</h3>
              <p className="font-bold py-2">to be updated here</p>
              <FiArrowRight className="text-2xl" />
            </div>
            <img
              src={idCardImage}
              alt={t("taskListMockup")}
              className="w-1/4 h-auto absolute bottom-0 right-4"
            />
          </div>
          <div
            className="bg-gray-100 rounded-lg p-4 pt-8 flex-1 flex flex-col relative justify-end"
            style={{
              background:
                "linear-gradient(90deg, #FEEAE6 0%, #F7BD9D 100%)",
            }}
          >
            <div>
              <FaHome />
              <h3 className="text-2xl font-medium">
                Certificate of Residence
              </h3>
              <p className="font-bold py-2">Juminhyo</p>
              <FiArrowRight className="text-2xl" />
            </div>
            <img
              src={idCardImage}
              alt={t("taskListMockup")}
              className="w-1/4 h-auto absolute bottom-0 right-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalInfoCards;
