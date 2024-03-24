import React, { useEffect, useState } from "react";
import { Card, Tabs } from "flowbite-react";
import ETFDangerFilter from "../../components/ETF/Filter/ETFDangerFilter";
import ETFAssetFilter from "../../components/ETF/Filter/ETFAssetFilter";

import ALLETF from "~/components/ETF/Main/ALLETF";
import HotIssue from "~/components/ETF/Main/HotIssue";

const ETFMain = () => {
  const [selectedDangerDegree, setSelectedDangerDegree] = useState(null);

  // 위험도 선택 시 호출되는 콜백 함수
  const handleDangerDegreeChange = (dangerDegree) => {
    setSelectedDangerDegree(dangerDegree);
  };
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="bg-blue-100">
      <div className="bg-white mt-8  mb-2 text-3xl font-extrabold">
        <p className="ml-1">인기 종목 포함 ETF</p>
      </div>

      <HotIssue />

      <div className="bg-white">
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="전체" className="bg-blue-100">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter onTypeSelect={handleTypeSelect} />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter
                onDangerDegreeChange={handleDangerDegreeChange}
              />
            </div>
            <div className="mb-4">
              <ALLETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="거래량">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter onTypeSelect={handleTypeSelect} />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter
                onDangerDegreeChange={handleDangerDegreeChange}
              />
            </div>
            <div className="mb-4">
              <ALLETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="시가총액">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter onTypeSelect={handleTypeSelect} />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter
                onDangerDegreeChange={handleDangerDegreeChange}
              />
            </div>
            <div className="mb-4">
              <ALLETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="관심">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter onTypeSelect={handleTypeSelect} />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter
                onDangerDegreeChange={handleDangerDegreeChange}
              />
            </div>
            <div className="mb-4">
              <ALLETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="최근">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter onTypeSelect={handleTypeSelect} />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter
                onDangerDegreeChange={handleDangerDegreeChange}
              />
            </div>
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
  );
};

export default ETFMain;
