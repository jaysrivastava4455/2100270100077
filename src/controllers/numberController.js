const fetchNumbers = require("../services/numberService");
const calculateAverage = require("../utils/calculateAverage");

const windowSize = 10;
let numbersWindow = [];

const getNumbers = async (req, res) => {
  const numberId = req.params.numberId;

  const validIds = ["primes", "fibo", "even", "rand"];
  if (!validIds.includes(numberId)) {
    return res.status(400).send({ error: "Invalid number ID" });
  }

  const newNumbers = await fetchNumbers(numberId);

  // Filter out duplicates and store unique numbers
  newNumbers.forEach((number) => {
    if (!numbersWindow.includes(number)) {
      if (numbersWindow.length >= windowSize) {
        numbersWindow.shift(); // Remove the oldest number if window is full
      }
      numbersWindow.push(number);
    }
  });

  const prevState = [...numbersWindow];
  const currState = [...numbersWindow];
  const avg = calculateAverage(currState);

  res.json({
    numbers: newNumbers,
    windowPrevState: prevState,
    windowCurrState: currState,
    avg: avg,
  });
};

module.exports = {
  getNumbers,
};
