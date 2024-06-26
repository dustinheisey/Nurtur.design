import { html } from 'lit'
import './nd-breadcrumb.js'

export default {
  title: 'Components/Breadcrumb',
}

const Template = (args) => html`
  <nd-breadcrumb .items="${args.items}"></nd-breadcrumb>
`

export const Default = Template.bind({})
Default.args = {
  items: [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Category' },
    { href: '#', label: 'Subcategory' },
    { href: '#', label: 'Current Page' },
  ],
}
