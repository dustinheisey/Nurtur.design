export function range() {
  const budgetInput = document.getElementById("budget");
  const budgetValue = document.getElementById("budget-value");

  if (budgetInput) {
    budgetInput.addEventListener("input", function () {
      budgetValue.textContent = "$" + budgetInput.value;
    });
  }
}
