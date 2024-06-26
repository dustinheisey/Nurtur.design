import { html } from 'lit'
import './nd-switcher.js'

export default {
  title: 'Patterns/Switcher',
  component: 'nd-switcher',
  argTypes: {
    theme: { control: 'text' },
    align: { control: 'text' },
    class: { control: 'text' },
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    items: { control: 'array' },
  },
}

const Template = ({
  theme,
  align,
  class: className,
  headline,
  overline,
  body,
  items,
}) => html`
  <nd-switcher
    .theme=${theme}
    .align=${align}
    .class=${className}
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .items=${items}
  ></nd-switcher>
`

export const Default = Template.bind({})
Default.args = {
  theme: 'background',
  align: '',
  class: '',
  headline: 'Switcher Headline',
  overline: 'Overline Text',
  body: 'This is the body text of the switcher component.',
  items: [
    '<div class="card">Item 1</div>',
    '<div class="card">Item 2</div>',
    '<div class="card">Item 3</div>',
  ],
}
