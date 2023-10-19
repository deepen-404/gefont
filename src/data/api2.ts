import axios from "axios";

const api =
  "https://gnews.io/api/v4/search?q=nepal&apikey=734ac0054c888cb0211b7f098cf9013e";
const gNewsData = async () => {
  try {
    const response = await axios.get(api);
    console.log(response.data);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default gNewsData;
