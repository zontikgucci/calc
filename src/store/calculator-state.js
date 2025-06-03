let currentNumber = "";
let historyList = [];

export function getCurrentNumber() {
  return currentNumber;
}

export function setCurrentNumber(val) {
  currentNumber = val;
}

export function getHistoryList() {
  return historyList;
}

export function clearState() {
  currentNumber = "";
  historyList = [];
}

export function pushToHistory(item) {
  historyList.push(item);
}

export function replaceLastInHistory(item) {
  if (historyList.length > 0) {
    historyList[historyList.length - 1] = item;
  }
}
