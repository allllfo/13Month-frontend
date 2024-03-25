import axios from "axios";

export const getAllFund = async () => {
  try {
    const url = "/api/fund/";

    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
