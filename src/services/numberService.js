const axios = require("axios");
const testServerBaseUrl = "http://20.244.56.144/test";

const fetchNumbers = async (numberId) => {
  try {
    const response = await axios.get(`${testServerBaseUrl}/${numberId}`, {
      timeout: 500,
    });
    return response.data.numbers;
  } catch (error) {
    console.error(`Error fetching numbers: ${error.message}`);
    return [];
  }
};

module.exports = fetchNumbers;
