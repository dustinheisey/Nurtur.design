import { html } from 'lit'
import './nd-card.js'

export default {
  title: 'Components/Card',
}

const Template = (args) => html`
  <nd-card
    url="${args.url}"
    theme="${args.theme}"
    icon="${args.icon}"
    headline="${args.headline}"
    body="${args.body}"
    variant="${args.variant}"
    .items="${args.items}"
    time="${args.time}"
    label="${args.label}"
    span="${args.span}"
    gap="${args.gap}"
  ></nd-card>
`

export const Default = Template.bind({})
Default.args = {
  url: '#',
  theme: 'primary',
  icon: 'https://via.placeholder.com/24',
  headline: 'This is the headline',
  body: 'This is the body text of the card. It provides some content about the topic.',
  variant: 'default',
  items: [],
  time: '',
  label: '',
  span: '',
  gap: '',
}
