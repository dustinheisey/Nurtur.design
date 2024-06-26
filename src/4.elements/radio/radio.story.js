import { html } from 'lit'
import './radio.css'

export default {
  title: 'Elements/Radio',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div>
    ${args.options.map(
      (option) => html`
        <label class="radio-label">
          <input
            type="radio"
            name="${args.name}"
            value="${option.value}"
            class="${args.class}"
            ?checked="${option.checked}"
          />
          <span>${option.label}</span>
        </label>
      `
    )}
  </div>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  name: 'default-radio',
  options: [
    { value: 'option1', label: 'Option 1', checked: false },
    { value: 'option2', label: 'Option 2', checked: false },
    { value: 'option3', label: 'Option 3', checked: false },
  ],
}

const CardTemplate = (args) => html`
  <div class="input-card">
    ${args.options.map(
      (option) => html`
        <label>
          <input
            type="radio"
            name="${args.name}"
            value="${option.value}"
            class="${args.class}"
            ?checked="${option.checked}"
          />
          <span>
            ${option.icon
              ? html`<svg><use href="#icon-${option.icon}"></use></svg>`
              : ''}
            ${option.label}
          </span>
        </label>
      `
    )}
  </div>
`

export const Card = CardTemplate.bind({})
Card.args = {
  class: '',
  name: 'card-radio',
  options: [
    { value: 'option1', label: 'Option 1', checked: false, icon: 'star' },
    { value: 'option2', label: 'Option 2', checked: false, icon: 'heart' },
    { value: 'option3', label: 'Option 3', checked: false, icon: 'check' },
  ],
}
