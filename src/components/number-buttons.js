import { getCurrentNumber, setCurrentNumber } from "../store/calculator-state";
import { updateDisplay } from "../utils/helpers";

const numberActions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function renderNumberButtons() {
  const container = document.getElementById("number-buttons");

  numberActions.forEach((n) => {
    const col = document.createElement("div");
    col.className = "col";
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary w-100";
    btn.textContent = n;
    btn.onclick = () => {
      const updated = getCurrentNumber() + n.toString();
      setCurrentNumber(updated);
      updateDisplay();
    };
    col.appendChild(btn);
    container.appendChild(col);
  });
}
