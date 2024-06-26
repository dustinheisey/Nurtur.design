import { html } from 'lit'
import './nd-bg-center.js'

export default {
  title: 'Patterns/BgCenter',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-bg-center',
  argTypes: {
    imgSrc: { control: 'text' },
    classes: { control: 'text' },
    badge: { control: 'text' },
    headline: { control: 'text' },
    body: { control: 'text' },
    btn: { control: 'object' },
  },
}

const Template = ({ imgSrc, classes, badge, headline, body, btn }) => html`
  <nd-bg-center
    .imgSrc=${imgSrc}
    .classes=${classes}
    .badge=${badge}
    .headline=${headline}
    .body=${body}
    .btn=${btn}
  ></nd-bg-center>
`

export const Default = Template.bind({})
Default.args = {
  imgSrc: 'sample-image',
  classes: 'custom-class',
  badge: 'Sample Badge',
  headline: 'Sample Headline',
  body: 'This is a sample body text for the bg-center component.',
  btn: {
    href: '#',
    label: 'Learn More',
    variant: 'btn-secondary',
  },
}
