const form = document.querySelector("#calculator-form");
const result = document.querySelector("#result");
const error = document.querySelector("#error");

const operations = {
  add: (first, second) => first + second,
  subtract: (first, second) => first - second,
  divide: (first, second) => first / second,
  multiply: (first, second) => first * second,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.textContent = "";

  const formData = new FormData(form);
  const first = Number(formData.get("num1"));
  const second = Number(formData.get("num2"));
  const operator = formData.get("operator");

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    error.textContent = "Please enter two valid numbers.";
    result.textContent = "—";
    return;
  }

  if (operator === "divide" && second === 0) {
    error.textContent = "You cannot divide by zero.";
    result.textContent = "—";
    return;
  }

  result.textContent = operations[operator](first, second).toLocaleString();
});