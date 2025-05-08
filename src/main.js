import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function createCalculator() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <b>Калькулятор</b>
        <span class="badge bg-success" id="result">= 0</span>
      </div>
      <div class="card-body">
        <div id="history" class="mb-2 text-muted">0</div>
        <input id="input" type="text" class="form-control mb-3" readonly />
        <div class="row g-2">
          <div class="col-9">
            <div id="number-buttons" class="row row-cols-3 g-2"></div>
          </div>
          <div class="col-3" id="math-buttons"></div>
        </div>
      </div>
    </div>
  `;
}

createCalculator();
