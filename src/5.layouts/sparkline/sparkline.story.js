import { html } from 'lit'
import './sparkline.css'

export default {
  title: 'Layouts/Sparkline',
}

const Template = (args) => html`
  <div class="sparkline ${args.class}">
    <div class="line"></div>
    <div style="background-color: lightgray; padding: 10px;">Item 1</div>
    <div style="background-color: lightblue; padding: 10px;">Item 2</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 3</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 4</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Inline = Template.bind({})
Inline.args = { class: 'sparkline-inline' }

export const InlineStaggered = Template.bind({})
InlineStaggered.args = { class: 'sparkline-inline-staggered' }

export const BlockStaggered = Template.bind({})
BlockStaggered.args = { class: 'sparkline-block-staggered' }
