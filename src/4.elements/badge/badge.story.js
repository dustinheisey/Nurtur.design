import { html } from 'lit'
import './badge.css'

export default {
  title: 'Elements/Badge',
}

const Template = (args) => html`
  <span class="badge ${args.class}"> ${args.text} </span>
`

export const Primary = Template.bind({})
Primary.args = { class: 'badge-primary', text: 'Primary Badge' }

export const Secondary = Template.bind({})
Secondary.args = { class: 'badge-secondary', text: 'Secondary Badge' }

export const Tertiary = Template.bind({})
Tertiary.args = { class: 'badge-tertiary', text: 'Tertiary Badge' }

export const LargePrimary = Template.bind({})
LargePrimary.args = {
  class: 'badge-primary badge-l',
  text: 'Large Primary Badge',
}

export const LargeSecondary = Template.bind({})
LargeSecondary.args = {
  class: 'badge-secondary badge-l',
  text: 'Large Secondary Badge',
}

export const LargeTertiary = Template.bind({})
LargeTertiary.args = {
  class: 'badge-tertiary badge-l',
  text: 'Large Tertiary Badge',
}

const StatusTemplate = (args) => html`
  <span class="badge ${args.class}">
    <span class="status"></span>${args.text}
  </span>
`

export const StatusPrimary = StatusTemplate.bind({})
StatusPrimary.args = { class: 'badge-primary', text: 'Primary Status' }

export const StatusSecondary = StatusTemplate.bind({})
StatusSecondary.args = { class: 'badge-secondary', text: 'Secondary Status' }

export const StatusTertiary = StatusTemplate.bind({})
StatusTertiary.args = { class: 'badge-tertiary', text: 'Tertiary Status' }
