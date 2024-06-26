import { html } from 'lit'
import './nd-start-heavy.js'

export default {
  title: 'Patterns/Start Heavy',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-start-heavy',
  argTypes: {
    mobile: { control: 'text' },
    class: { control: 'text' },
    align: { control: 'text' },
    start: { control: 'text' },
    end: { control: 'text' },
  },
}

const Template = ({ mobile, class: className, align, start, end }) => html`
  <nd-start-heavy
    .mobile=${mobile}
    .class=${className}
    .align=${align}
    .start=${start}
    .end=${end}
  ></nd-start-heavy>
`

export const Default = Template.bind({})
Default.args = {
  mobile: 'end',
  class: '',
  align: '',
  start: '<div>Start Content</div>',
  end: '<div>End Content</div>',
}
