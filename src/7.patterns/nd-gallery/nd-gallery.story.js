import { html } from 'lit'
import './nd-gallery.js'

export default {
  title: 'Patterns/Gallery',
  component: 'nd-gallery',
  argTypes: {
    theme: { control: 'text' },
    class: { control: 'text' },
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'text' },
    col: { control: 'number' },
    items: { control: 'array' },
  },
}

const Template = ({
  theme,
  class: className,
  headline,
  overline,
  body,
  variant,
  col,
  items,
}) => html`
  <nd-gallery
    .theme=${theme}
    .class=${className}
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .variant=${variant}
    .col=${col}
    .items=${items}
  ></nd-gallery>
`

export const Default = Template.bind({})
Default.args = {
  theme: 'background',
  class: 'custom-class',
  headline: 'Gallery Headline',
  overline: 'Gallery Overline',
  body: 'This is the body text for the gallery.',
  variant: 'grid',
  col: 3,
  items: [
    { content: '<div>Item 1</div>' },
    { content: '<div>Item 2</div>' },
    { content: '<div>Item 3</div>' },
  ],
}
