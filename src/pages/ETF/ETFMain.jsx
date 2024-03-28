import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import ETFFilter from "../../components/ETF/Filter/ETFFilter";

import ALLETF from "~/components/ETF/Main/ALLETF";
import HotIssue from "~/components/ETF/Main/HotIssue";
import VolumeETF from "~/components/ETF/Main/VolumeETF";
import CapitalizationETF from "~/components/ETF/Main/CapitalizationETF";
import LikedEtf from "~/components/ETF/Main/LikedETF";
import TopBackBar from "~/components/TopBackBar/TopBackBar";

const ETFMain = () => {
  const [selectedDangerDegree, setSelectedDangerDegree] = useState(null);

  const handleDangerDegreeChange = (dangerDegree) => {
    setSelectedDangerDegree(dangerDegree);
    console.log(dangerDegree);
  };
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    console.log(type);
    setSelectedType(type);
  };

  return (
    <div>
      <TopBackBar />

      <div className="bg-blue-100">
        <div className="bg-white mt-2  mb-2 text-3xl font-extrabold">
          <p className="ml-1">인기 종목 포함 ETF</p>
        </div>

        <HotIssue />

        <div className="bg-white">
          <Tabs aria-label="Default tabs" style="default">
            <Tabs.Item active title="전체" className="bg-blue-100">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
              <div className="mb-4">
                <ALLETF
                  selectedDangerDegree={selectedDangerDegree}
                  selectedType={selectedType}
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="거래량">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
              <div className="mb-4">
                <VolumeETF
                  selectedDangerDegree={selectedDangerDegree}
                  selectedType={selectedType}
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="시가총액">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
              <div className="mb-4">
                <CapitalizationETF
                  selectedDangerDegree={selectedDangerDegree}
                  selectedType={selectedType}
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="관심">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
              <div className="mb-4">
                <LikedEtf
                  selectedDangerDegree={selectedDangerDegree}
                  selectedType={selectedType}
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="최근">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
              <div className="mb-4">
                <ALLETF
                  selectedDangerDegree={selectedDangerDegree}
                  selectedType={selectedType}
                />
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ETFMain;
