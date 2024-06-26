import { html } from 'lit'
import './nd-stats.js'

export default {
  title: 'Components/Stats',
  component: 'nd-stats',
  argTypes: {
    headline: { control: 'text' },
    overline: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'select', options: ['inline', 'stack', 'grid'] },
    items: { control: 'object' },
    center: { control: 'boolean' },
    class: { control: 'text' },
  },
}

const Template = ({
  headline,
  overline,
  body,
  variant,
  items,
  center,
  class: className,
}) => html`
  <nd-stats
    .headline=${headline}
    .overline=${overline}
    .body=${body}
    .variant=${variant}
    .items=${items}
    .center=${center}
    class=${className}
  >
  </nd-stats>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Our Achievements',
  overline: 'Company Stats',
  body: 'Here are some of our achievements and milestones.',
  variant: 'grid',
  items: [
    { headline: '100+', body: 'Projects Completed' },
    { headline: '50+', body: 'Satisfied Clients' },
    { headline: '20', body: 'Awards Won' },
    { headline: '10+', body: 'Years in Business' },
  ],
  center: false,
  class: '',
}
