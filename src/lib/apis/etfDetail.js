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
