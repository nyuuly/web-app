import React from 'react';
import { useTranslation } from 'react-i18next';
import mapIcon from '../../assets/icons/map_icon.png';

const LocalInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-yellow-200 rounded-lg">
      <div className="p-4">
        <img src={mapIcon} alt={t('mapIconAlt')} className="w-[33px] h-[33px] mb-2" />
        <h3 className="text-xl font-semibold mb-4">{t('capitalOfGunma')}</h3>
        <p>{t('maebashi')}</p>
        <p>{t('citiesInGunma')}</p>
      </div>
      <div className="p-4">
        <img src={mapIcon} alt={t('mapIconAlt')} className="w-[33px] h-[33px] mb-2" />
        <h3 className="text-xl font-semibold mb-4">{t('gunmaWeather')}</h3>
        <p>{t('temperature')} <br/>{t('season')}</p>
      </div>
      <div className="p-4">
        <img src={mapIcon} alt={t('mapIconAlt')} className="w-[33px] h-[33px] mb-2" />
        <h3 className="text-xl font-semibold mb-4">{t('gunmaPopulation')}</h3>
        <p>{t('populationNumber')}</p>
        <p>{t('dataAsOf')}</p>
      </div>
    </div>
  );
};

export default LocalInfo;
