import { html } from 'lit'
import './textarea.css'

export default {
  title: 'Elements/Textarea',
}

const Template = (args) => html`
  <div>
    <label for="${args.id}">${args.label}</label>
    <textarea
      id="${args.id}"
      name="${args.name}"
      class="${args.class}"
      placeholder="${args.placeholder}"
    ></textarea>
  </div>
`

export const Default = Template.bind({})
Default.args = {
  id: 'default-textarea',
  name: 'default',
  label: 'Default Textarea',
  class: '',
  placeholder: 'Enter text...',
}

export const Underline = Template.bind({})
Underline.args = {
  id: 'underline-textarea',
  name: 'underline',
  label: 'Underline Textarea',
  class: 'textarea-underline',
  placeholder: 'Enter text...',
}
