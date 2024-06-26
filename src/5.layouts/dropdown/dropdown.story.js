import { html } from 'lit'
import './dropdown.css'

export default {
  title: 'Layouts/Dropdown',
}

const Template = (args) => html`
  <drop-down class="${args.class}">
    <a
      href="#"
      style="padding: 10px; background-color: var(--color-primary); color: white;"
      >Dropdown</a
    >
    <ul>
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
      <li><a href="#">Option 3</a></li>
    </ul>
  </drop-down>
`

export const Default = Template.bind({})
Default.args = { class: '' }
