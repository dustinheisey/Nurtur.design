import { html } from 'lit'
import './nd-banner.js'

export default {
  title: 'Components/Banner',
}

const Template = (args) => html`
  <nd-banner message="${args.message}"></nd-banner>
`

export const Default = Template.bind({})
Default.args = {
  message: 'This is a banner message.',
}
