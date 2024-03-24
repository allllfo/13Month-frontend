import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import axios from "axios";

// Import risk icon images
import riskIconImg1 from "~/assets/images/riskIcons/1.png";
import riskIconImg2 from "~/assets/images/riskIcons/2.png";
import riskIconImg3 from "~/assets/images/riskIcons/3.png";
import riskIconImg4 from "~/assets/images/riskIcons/4.png";
import riskIconImg5 from "~/assets/images/riskIcons/5.png";
import riskIconImg6 from "~/assets/images/riskIcons/6.png";

const ALLETF = ({ selectedDangerDegree }) => {
  const [etf, setEtf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/etf/overview"
        );
        const data = response.data;
        const filteredETF = data.filter(
          (item) => item.data.dangerDegree === selectedDangerDegree
        );
        setEtf(filteredETF);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedDangerDegree]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {etf.map((item) => (
        <Card className="m-5" key={item.code}>
          <div className="flex flex-row">
            <div className="h-8 w-24">
              <MyResponsiveLine
                data={[
                  {
                    id: "stock",
                    data: item.chart.chart.map((elem) => ({
                      x: elem.주식영업일자,
                      y: elem.주식종가,
                    })),
                  },
                ]}
              />
            </div>
            <div className="flex flex-col ml-3">
              <div className="w-20 h-6">
                <img
                  src={getRiskIcon(item.data.dangerDegree)}
                  alt={`Risk Icon ${item.data.dangerDegree}`}
                />
              </div>
              <div className="font-bold text-sm">
                {item.chart.HTS한글종목명}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

// Function to get the appropriate risk icon based on the risk degree
const getRiskIcon = (dangerDegree) => {
  switch (dangerDegree) {
    case 1:
      return riskIconImg1;
    case 2:
      return riskIconImg2;
    case 3:
      return riskIconImg3;
    case 4:
      return riskIconImg4;
    case 5:
      return riskIconImg5;
    default:
      return riskIconImg6;
  }
};

export default ALLETF;
