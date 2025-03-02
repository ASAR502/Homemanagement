import { RoomFeaturesList, RoomFeaturesList2 } from '@/constants/data/feature';
import React from 'react';
const Roomfeatures = ({
  features,
  handleFeatureSelection,
}) => {
  return (
    <div className="w-full bg-[#fff] border p-6 px-2 rounded-[10px]">
      <div className="w-[95%] md:w-[90%] mx-auto flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-xl font-semibold">
            Room Attributes & Features
            <span className="font-normal family1 text-sm block">
              Share what makes your place special.
            </span>
          </h4>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="flex gap-4 flex-col w-full">
           
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
              {RoomFeaturesList?.map((x, index) => {
                const active = features.includes(x);
                return (
                  <div
                    onClick={() => handleFeatureSelection(x)}
                    className={`${
                      active
                        ? "border-[rgba(0,0,0,.7)] bg-[#fafafa] border-2"
                        : "border-[rgba(0,0,0,.08)] border"
                    } flex w-full cursor-pointer hover:bg-[#fafafa] p-4 rounded-lg flex-col gap-2`}
                  >
                    {x?.icon}
                    <span className="text-sm family1">
                      {x?.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
{/* 
          <div className="flex gap-4 flex-col w-full">
            <span className="font-semibold family1 text-base block">
              Room Amenities
            </span>
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
              {RoomFeaturesList2?.map((x, index) => {
                const active = amenities.includes(x);
                return (
                  <div
                    onClick={() => handleRoomAmenitiesSelection(x)}
                    className={`${
                      active
                        ? "border-[rgba(0,0,0,.7)] bg-[#fafafa] border-2"
                        : "border-[rgba(0,0,0,.08)] border"
                    } flex w-full cursor-pointer hover:bg-[#fafafa] p-4 rounded-lg flex-col gap-2`}
                  >
                    {x?.icon}
                    <span className="text-sm family1 font-semibold">
                      {x?.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};


export default Roomfeatures;