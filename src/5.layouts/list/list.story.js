import { html } from 'lit'
import './list.css'

export default {
  title: 'Layouts/List',
}

const Template = (args) => html`
  <ul class="list ${args.class}" style="--gap: 10px;">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const DiskMarkers = Template.bind({})
DiskMarkers.args = { class: 'list-marker' }

export const DecimalMarkers = Template.bind({})
DecimalMarkers.args = { class: 'list-marker' }

export const TwoColumnLayout = Template.bind({})
TwoColumnLayout.args = { class: 'list' }

export const TwoColumnLayoutDecimal = Template.bind({})
TwoColumnLayoutDecimal.args = { class: 'list list-marker' }
