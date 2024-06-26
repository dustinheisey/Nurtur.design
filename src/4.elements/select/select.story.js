import { html } from 'lit'
import './select.css'

export default {
  title: 'Elements/Select',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div>
    <label for="${args.id}">${args.label}</label>
    <div class="select ${args.class}">
      <select id="${args.id}" name="${args.name}">
        ${args.options.map(
          (option) =>
            html`<option value="${option.value}">${option.label}</option>`
        )}
      </select>
      <div class="focus"></div>
    </div>
  </div>
`

export const Default = Template.bind({})
Default.args = {
  id: 'default-select',
  name: 'default',
  label: 'Default Select',
  class: '',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
}

export const Underline = Template.bind({})
Underline.args = {
  id: 'underline-select',
  name: 'underline',
  label: 'Underline Select',
  class: 'select-underline',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
}
