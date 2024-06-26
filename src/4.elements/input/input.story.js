import { html } from 'lit'
import './input.css'

export default {
  title: 'Elements/Input',
}

const Template = (args) => html`
  <div>
    <label for="${args.id}">${args.label}</label>
    <input
      type="${args.type}"
      id="${args.id}"
      class="input ${args.class}"
      placeholder="${args.placeholder}"
      value="${args.value}"
    />
  </div>
`

export const Default = Template.bind({})
Default.args = {
  id: 'default-input',
  label: 'Default Input',
  type: 'text',
  class: '',
  placeholder: 'Enter text...',
  value: '',
}

export const Underline = Template.bind({})
Underline.args = {
  id: 'underline-input',
  label: 'Underline Input',
  type: 'text',
  class: 'input-underline',
  placeholder: 'Enter text...',
  value: '',
}

export const Password = Template.bind({})
Password.args = {
  id: 'password-input',
  label: 'Password Input',
  type: 'password',
  class: '',
  placeholder: 'Enter password...',
  value: '',
}

export const Email = Template.bind({})
Email.args = {
  id: 'email-input',
  label: 'Email Input',
  type: 'email',
  class: '',
  placeholder: 'Enter email...',
  value: '',
}
