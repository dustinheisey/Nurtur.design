import { html } from 'lit'
import './sidebar.css'

export default {
  title: 'Layouts/Sidebar',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="sidebar ${args.class}" style="--gap: 20px;">
    <div class="fixed" style="background-color: lightgray; padding: 20px;">
      Fixed Content
    </div>
    <div style="background-color: lightblue; padding: 20px;">
      Flexible Content 1
    </div>
    <div style="background-color: lightgreen; padding: 20px;">
      Flexible Content 2
    </div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const SidebarSplitSmall = Template.bind({})
SidebarSplitSmall.args = { class: 'sidebar-split-s' }

export const SidebarSplit = Template.bind({})
SidebarSplit.args = { class: 'sidebar-split' }

export const SidebarEqual = Template.bind({})
SidebarEqual.args = { class: 'sidebar-equal' }
