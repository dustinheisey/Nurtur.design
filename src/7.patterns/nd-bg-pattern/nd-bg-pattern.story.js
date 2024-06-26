import { html } from 'lit'
import './nd-bg-pattern.js'

export default {
  title: 'Patterns/BgPattern',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-bg-pattern',
  argTypes: {
    pattern: { control: 'text' },
    class: { control: 'text' },
    theme: { control: 'text' },
    align: { control: 'text' },
    overline: { control: 'text' },
    headline: { control: 'text' },
    lead: { control: 'text' },
    body: { control: 'text' },
    btn: { control: 'object' },
    input: { control: 'boolean' },
  },
}

const Template = ({
  pattern,
  class: className,
  theme,
  align,
  overline,
  headline,
  lead,
  body,
  btn,
  input,
}) => html`
  <nd-bg-pattern
    .pattern=${pattern}
    .class=${className}
    .theme=${theme}
    .align=${align}
    .overline=${overline}
    .headline=${headline}
    .lead=${lead}
    .body=${body}
    .btn=${btn}
    .input=${input}
  ></nd-bg-pattern>
`

export const Default = Template.bind({})
Default.args = {
  pattern: 'example-pattern',
  class: 'custom-class',
  theme: 'light',
  align: 'center',
  overline: 'Sample Overline',
  headline: 'Sample Headline',
  lead: 'This is a sample lead text for the bg-pattern component.',
  body: 'This is a sample body text for the bg-pattern component.',
  btn: {
    url: '#',
    label: 'Learn More',
    variant: 'primary',
  },
  input: true,
}
