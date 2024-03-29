import { Partner } from "@/interfaces/Partner";
import https from "https";
import axios from "src/lib/axios";
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
export const getPartner = async (siteurl: string) : Promise<Partner> => {
  const { data } = await axios.get(
    `/Partner/GetPartner?privateSiteLabel=${siteurl}`,
    { httpsAgent }
  );
  return data;
};