import { getCurrentNumber, getHistoryList } from "../store/calculator-state";
import { calculate } from "./calculate";

export function updateDisplay() {
  const currentNumber = getCurrentNumber();
  const historyList = getHistoryList();

  document.getElementById("input").value = currentNumber;
  document.getElementById("history").textContent = historyList.join(" ") || "0";
  document.getElementById("result").textContent = `= ${calculate(
    currentNumber,
    historyList
  )}`;
}
