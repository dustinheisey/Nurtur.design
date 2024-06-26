import { html } from 'lit'
import './nd-split.js'

export default {
  title: 'Patterns/Split',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-split',
  argTypes: {
    theme: { control: 'text' },
    start: { control: 'text' },
    end: { control: 'text' },
  },
}

const Template = ({ theme, start, end }) => html`
  <nd-split .theme=${theme} .start=${start} .end=${end}></nd-split>
`

export const Default = Template.bind({})
Default.args = {
  theme: 'default',
  start: '<div>Start Content</div>',
  end: '<div>End Content</div>',
}
