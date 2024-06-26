import { html } from 'lit'
import './nd-list.js'

export default {
  title: 'Components/List',
  argTypes: {
    theme: { control: 'text' },
    full: { control: 'boolean' },
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'text' },
    items: { control: 'object' },
    icon: { control: 'text' },
  },
}

const Template = ({
  theme,
  full,
  headline,
  overline,
  body,
  variant,
  items,
  icon,
}) => html`
  <nd-list
    .theme=${theme}
    .full=${full}
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .variant=${variant}
    .items=${items}
    .icon=${icon}
  ></nd-list>
`

export const Default = Template.bind({})
Default.args = {
  theme: 'background',
  full: false,
  headline: 'Sample Headline',
  overline: 'Sample Overline',
  body: 'This is a sample body text.',
  variant: 'grid',
  items: [
    { icon: '🔥', text: 'Item 1' },
    { icon: '⭐', text: 'Item 2' },
    { icon: '⚡', text: 'Item 3' },
  ],
  icon: '🔷',
}
