function calculateNumber(a, b){
    return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;

------------------------------OR ---------------
const calculateNumber = (a, b) => {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  return aRound + bRound;
};

module.exports = calculateNumber;
