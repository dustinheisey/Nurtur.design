import { html } from 'lit'
import './switcher.css'

export default {
  title: 'Layouts/Switcher',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="switcher ${args.class}" style="--gap: 20px;">
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightblue; padding: 20px;">Item 2</div>
    <div style="background-color: lightgreen; padding: 20px;">Item 3</div>
    <div style="background-color: lightcoral; padding: 20px;">Item 4</div>
    <div style="background-color: lightgoldenrodyellow; padding: 20px;">
      Item 5
    </div>
    <div style="background-color: lightpink; padding: 20px;">Item 6</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const SwitchPhone = Template.bind({})
SwitchPhone.args = { class: 'switch-phone' }

export const SwitchTablet = Template.bind({})
SwitchTablet.args = { class: 'switch-tablet' }

export const SwitchDesktop = Template.bind({})
SwitchDesktop.args = { class: 'switch-desktop' }
