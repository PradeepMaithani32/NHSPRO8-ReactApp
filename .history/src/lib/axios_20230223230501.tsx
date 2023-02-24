import axios from "axios";


const instance = axios.create({
    headers: {
        common: {
          Accept: 'text/plain, */*'
        }
      }
  baseURL: "https://localhost:7149",

});

export default instance;
