import { html } from 'lit'
import './nd-stack.js'

export default {
  title: 'Patterns/Stack',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-stack',
  argTypes: {
    class: { control: 'text' },
    text: { control: 'text' },
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    items: { control: 'array' },
  },
}

const Template = ({
  class: className,
  text,
  headline,
  overline,
  body,
  items,
}) => html`
  <nd-stack
    .class=${className}
    .text=${text}
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .items=${items}
  ></nd-stack>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  text: 'center',
  headline: 'Stack Headline',
  overline: 'Overline Text',
  body: 'This is a body text for the stack component.',
  items: [
    '<div>Item 1 Content</div>',
    '<div>Item 2 Content</div>',
    '<div>Item 3 Content</div>',
  ],
}
