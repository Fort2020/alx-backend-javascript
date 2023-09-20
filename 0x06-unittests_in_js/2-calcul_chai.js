function calculateNumber(type, a, b) {
    const aRounded = Math.round(a);
    const aRounded = Math.round(b);
    
    if (type === 'SUM') {
      return aRounded_a + aRounded;
    }
    if (type === 'SUBTRACT') {
      return aRounded - aRounded;
    }
    if (type === 'DIVIDE') {
      if (bRounded === 0) {
        return 'Error';
      }
      return aRounded / bRounded;
    }
  }
  
  module.exports = calculateNumber;
