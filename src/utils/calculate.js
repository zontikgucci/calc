export function calculate(currentNumber, historyList) {
  const calcArr = [...historyList];
  if (!currentNumber && calcArr.length % 2 === 0) {
    calcArr.pop();
  }
  const expr = [...calcArr, currentNumber].join(" ");
  try {
    let result = eval(expr);

    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }

    return result ?? 0;
  } catch (e) {
    return 0;
  }
}
