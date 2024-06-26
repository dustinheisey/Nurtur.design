import { html } from 'lit'
import './nd-subgallery.js'

export default {
  title: 'Components/Subgallery',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-subgallery',
  argTypes: {
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'select', options: ['masonry', 'stack', 'grid'] },
    items: { control: 'object' },
    col: { control: 'number' },
  },
}

const Template = ({ headline, overline, body, variant, items, col }) => html`
  <nd-subgallery
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .variant=${variant}
    .items=${items}
    .col=${col}
  ></nd-subgallery>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Gallery Headline',
  overline: 'Gallery Overline',
  body: 'This is a description of the gallery.',
  variant: 'grid',
  items: [
    html`<div class="item">Item 1</div>`,
    html`<div class="item">Item 2</div>`,
    html`<div class="item">Item 3</div>`,
    html`<div class="item">Item 4</div>`,
  ],
  col: 2,
}
