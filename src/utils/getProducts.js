import axios from "axios";

export async function getProducts() {
  const url = process.env.REACT_APP_API_URL;
  const response = await axios.get(url);

  return response.data;
}
