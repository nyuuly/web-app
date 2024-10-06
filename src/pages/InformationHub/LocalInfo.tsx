import React from 'react';
import mapIcon from '../../assets/icons/map_icon.png';

const LocalInfo: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-yellow-200 text-black rounded-lg -mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4">
          <img src={mapIcon} alt="Map Icon" className="w-[33px] h-[33px] mb-2" />
          <h3 className="text-xl font-semibold mb-4">Capital of Gunma</h3>
          <p>Maebashi</p>
          <p>12 cities are located in Gunma Prefecture</p>
        </div>
        <div className="p-4">
          <img src={mapIcon} alt="Map Icon" className="w-[33px] h-[33px] mb-2" />
          <h3 className="text-xl font-semibold mb-4">Gunma weather</h3>
          <p>18 °C <br/>Autumn season</p>
        </div>
        <div className="p-4">
          <img src={mapIcon} alt="Map Icon" className="w-[33px] h-[33px] mb-2" />
          <h3 className="text-xl font-semibold mb-4">Gunma population</h3>
          <p>1,894,824</p>
          <p>Data as of 2022</p>
        </div>
      </div>
    </div>
  );
};

export default LocalInfo;
