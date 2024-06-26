import { html } from 'lit'
import './nd-sparkline.js'

export default {
  title: 'Patterns/Sparkline',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-sparkline',
  argTypes: {
    class: { control: 'text' },
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'text' },
    items: { control: 'array' },
  },
}

const Template = ({
  class: className,
  headline,
  overline,
  body,
  variant,
  items,
}) => html`
  <nd-sparkline
    .class=${className}
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .variant=${variant}
    .items=${items}
  ></nd-sparkline>
`

export const Default = Template.bind({})
Default.args = {
  class: 'custom-sparkline-class',
  headline: 'Our Achievements',
  overline: '2023',
  body: 'Here are some of the milestones we have achieved this year.',
  variant: 'inline',
  items: [
    '<div>Item 1</div>',
    '<div>Item 2</div>',
    '<div>Item 3</div>',
    '<div>Item 4</div>',
  ],
}
