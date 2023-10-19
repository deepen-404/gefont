import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-09-18&sortBy=publishedAt&apiKey=85f4815387e44747b6fcec17a3f19c88"
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchData;
