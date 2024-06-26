import { html } from 'lit'
import './stack.css'

export default {
  title: 'Layouts/Stack',
}

const Template = (args) => html`
  <div class="stack ${args.class}" style="--gap: 20px;">
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightblue; padding: 20px;">Item 2</div>
    <div style="background-color: lightgreen; padding: 20px;">Item 3</div>
    <div style="background-color: lightcoral; padding: 20px;">Item 4</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const WithBackground = Template.bind({})
WithBackground.args = { class: 'stack-bg' }

export const SplitItem = Template.bind({})
SplitItem.args = {
  class: '',
  children: html`
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightblue; padding: 20px;" class="split">
      Item 2 (Split)
    </div>
    <div style="background-color: lightgreen; padding: 20px;">Item 3</div>
  `,
}

export const AutoMargin = Template.bind({})
AutoMargin.args = {
  class: '',
  children: html`
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightblue; padding: 20px;" class="auto">
      Item 2 (Auto Margin)
    </div>
    <div style="background-color: lightgreen; padding: 20px;">Item 3</div>
  `,
}
