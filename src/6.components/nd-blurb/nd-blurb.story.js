import { html } from 'lit'
import './nd-blurb.js'

export default {
  title: 'Components/Blurb',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <nd-blurb
    headline="${args.headline}"
    body="${args.body}"
    .link="${args.link}"
  ></nd-blurb>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'This is the headline',
  body: 'This is the body text of the blurb. It provides a brief description or summary of the topic.',
  link: { href: '#', label: 'Read more' },
}
