import { html } from 'lit'
import './nd-accordion.js'

export default {
  title: 'Patterns/Accordion',
  component: 'nd-accordion',
  argTypes: {
    headline: { control: 'text' },
    overline: { control: 'text' },
    items: { control: 'object' },
    class: { control: 'text' },
  },
}

const Template = ({ headline, overline, items, class: className }) => html`
  <nd-accordion
    .headline=${headline}
    .overline=${overline}
    .items=${items}
    .class=${className}
  ></nd-accordion>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Accordion Headline',
  overline: 'Accordion Overline',
  items: [
    html`<div>Item 1 Content</div>`,
    html`<div>Item 2 Content</div>`,
    html`<div>Item 3 Content</div>`,
  ],
  class: 'custom-class',
}
