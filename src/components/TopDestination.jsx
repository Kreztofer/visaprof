import React from 'react';
import { TopDest } from '../constants';
import TopDestinationCard from './TopDestinationCard';

const TopDestination = () => {
  return (
    <section className="mt-[170px]">
      <h1 className="text-center font-bold text-[34px]">
        Top <span className="text-[#D19439]">Destinations</span>
      </h1>
      <div className="flex justify-between w-[100%] m-auto">
        <TopDestinationCard details={TopDest} />
      </div>
    </section>
  );
};

export default TopDestination;
