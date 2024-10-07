import React from "react";
import mapIcon from "../../assets/icons/map_icon.png";
import ScrollAnimationWrapper from '../../components/misc/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

const Mission: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ScrollAnimationWrapper>
      <div className="container mx-auto px-4 py-8 text-black">
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">{t('aboutUs.mission.title')}</h2>
            <p className="text-lg">
              {t('aboutUs.mission.description')}
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
              <img
                src="https://via.placeholder.com/150x84"
                alt={t('aboutUs.mission.imagePlaceholder')}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl font-bold mb-8 text-center">{t('aboutUs.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-blue-100 p-6 rounded-lg">
                <img
                  src={mapIcon}
                  alt=""
                  className="w-[33px] h-[33px] mb-2"
                />
                <h3 className="text-xl font-semibold mb-2">{t(`aboutUs.values.value${item}.title`)}</h3>
                <p>
                  {t(`aboutUs.values.value${item}.description`)}
                </p>
              </div>
            ))}
          </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default Mission;
