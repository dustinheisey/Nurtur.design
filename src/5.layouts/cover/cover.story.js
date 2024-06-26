import { html } from 'lit'
import './cover.css'

export default {
  title: 'Layouts/Cover',
}

const Template = (args) => html`
  <div class="cover ${args.class}" style="--gap-region: 20px; --inset: 20px;">
    <div class="principle" style="background-color: lightgray; padding: 20px;">
      Principle Content
    </div>
    <div class="sidebar" style="background-color: lightblue; padding: 20px;">
      Sidebar Content
    </div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Sidebar = Template.bind({})
Sidebar.args = { class: 'sidebar' }

export const CoverNav = Template.bind({})
CoverNav.args = { class: 'cover-nav' }

export const Principle = Template.bind({})
Principle.args = { class: 'principle' }

export const CoverSmall = Template.bind({})
CoverSmall.args = { class: 'cover-s' }
