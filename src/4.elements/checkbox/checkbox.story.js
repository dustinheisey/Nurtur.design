import { html } from 'lit'
import './checkbox.css'

export default {
  title: 'Elements/Checkbox',
}

const Template = (args) => html`
  <label>
    <input
      type="checkbox"
      class="checkbox ${args.class}"
      ?checked="${args.checked}"
    />
    ${args.label}
  </label>
`

export const Default = Template.bind({})
Default.args = { class: '', label: 'Default Checkbox', checked: false }

export const Checked = Template.bind({})
Checked.args = { class: '', label: 'Checked Checkbox', checked: true }

const CardTemplate = (args) => html`
  <label class="input-card">
    <input type="checkbox" ?checked="${args.checked}" />
    <span>${args.label}</span>
  </label>
`

export const Card = CardTemplate.bind({})
Card.args = { class: '', label: 'Checkbox Card', checked: false }

export const CardChecked = CardTemplate.bind({})
CardChecked.args = { class: '', label: 'Checked Checkbox Card', checked: true }
