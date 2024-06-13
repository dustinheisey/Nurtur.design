function range() {
  const budgetInput = document.getElementById('budget')
  const budgetValue = document.getElementById('budget-value')

  if (budgetInput) {
    budgetInput.addEventListener('input', function () {
      budgetValue.textContent = '$' + budgetInput.value
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const rangeEl = document.getElementById('budget')
  if (rangeEl) range()
})
