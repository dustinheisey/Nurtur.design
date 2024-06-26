import { html } from 'lit'
import './nd-end-heavy.js'

export default {
  title: 'Patterns/EndHeavy',
  component: 'nd-end-heavy',
  argTypes: {
    mobile: { control: 'select', options: ['start', 'end'] },
    class: { control: 'text' },
    align: { control: 'select', options: ['start', 'center', 'end'] },
    start: { control: 'object' },
    end: { control: 'object' },
  },
}

const Template = ({ mobile, class: className, align, start, end }) => html`
  <nd-end-heavy
    .mobile=${mobile}
    .class=${className}
    .align=${align}
    .start=${start}
    .end=${end}
  ></nd-end-heavy>
`

export const Default = Template.bind({})
Default.args = {
  mobile: 'end',
  class: 'custom-class',
  align: 'start',
  start: html`<div>Start Content</div>`,
  end: html`<div>End Content</div>`,
}
