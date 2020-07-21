const apiUrl = process.env.VUE_APP_BASE_API;
import axios from "axios";

const signInApp = async (body) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, body);
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

export { signInApp };
