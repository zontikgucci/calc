import { isEmpty } from "lodash";
import { updateDisplay } from "../utils/helpers";
import {
  clearState,
  getCurrentNumber,
  getHistoryList,
  pushToHistory,
  replaceLastInHistory,
  setCurrentNumber,
} from "../store/calculator-state";

const mathActions = ["+", "-", "*", "/", "%"];

function handleAction(action) {
  const current = getCurrentNumber();
  const history = getHistoryList();

  if (current) {
    pushToHistory(current);
    pushToHistory(action);
    setCurrentNumber("");
  } else if (!isEmpty(history)) {
    replaceLastInHistory(action);
  }

  updateDisplay();
}

export function renderMathButtons() {
  const container = document.getElementById("math-buttons");

  mathActions.forEach((action) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-danger w-100 mb-2";
    btn.textContent = action;
    btn.onclick = () => handleAction(action);
    container.appendChild(btn);
  });

  const clearBtn = document.createElement("button");
  clearBtn.className = "btn btn-warning w-100 mb-2";
  clearBtn.textContent = "C";
  clearBtn.onclick = () => {
    clearState();
    updateDisplay();
  };
  container.appendChild(clearBtn);
}
