import axios from "axios";

const baseURL = "https://projectwebapi20210613165153.azurewebsites.net";

export default axios.create({
  baseURL
});
