import axios from "axios";

export const getEtfInfo = async (code) => {
  try {
    const getEtfInfoUrl = "/api/etf/" + code + "/info";

    const resp = await axios.get(getEtfInfoUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const getEtfChartData = async (code) => {
  try {
    const getEtfChartDataUrl = "/api/etf/" + code + "/chart";

    const resp = await axios.get(getEtfChartDataUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
