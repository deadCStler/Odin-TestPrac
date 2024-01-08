const analyzeArray = function (arr) {
  const min = () => {
    let minValue = arr[0];
    arr.forEach((element) => {
      minValue = element > minValue ? minValue : element;
    });
    return minValue;
  };

  const max = () => {
    let maxValue = arr[0];
    arr.forEach((element) => {
      maxValue = element < maxValue ? maxValue : element;
    });
    return maxValue;
  };

  const length = () => arr.length;

  const average = () => {
    return (
      arr.reduce((sum, item) => {
        return sum + item;
      }, 0) / arr.length
    );
  };

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = analyzeArray;
