import { html } from 'lit'
import './range.css'

export default {
  title: 'Elements/Range',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div>
    <label for="${args.id}">${args.label}</label>
    <input
      type="range"
      id="${args.id}"
      name="${args.name}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      value="${args.value}"
    />
    <output id="${args.outputId}">${args.outputPrefix}${args.value}</output>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const budgetInput = document.getElementById('${args.id}')
      const budgetValue = document.getElementById('${args.outputId}')

      if (budgetInput) {
        budgetInput.addEventListener('input', function () {
          budgetValue.textContent = '${args.outputPrefix}' + budgetInput.value
        })
      }
    })
  </script>
`

export const Default = Template.bind({})
Default.args = {
  id: 'budget',
  name: 'budget',
  label: 'Budget',
  min: '0',
  max: '100',
  step: '1',
  value: '50',
  outputId: 'budget-value',
  outputPrefix: '$',
}
