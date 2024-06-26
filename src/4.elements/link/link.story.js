import { html } from 'lit'
import './link.css'

export default {
  title: 'Elements/Link',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <a href="${args.href}" class="link ${args.class}"> ${args.text} </a>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  text: 'Default Link',
  href: '#',
}

export const Navigation = Template.bind({})
Navigation.args = {
  class: 'link-navigation',
  text: 'Navigation Link',
  href: '#',
}

export const SmallNavigation = Template.bind({})
SmallNavigation.args = {
  class: 'link-navigation link-s',
  text: 'Small Navigation Link',
  href: '#',
}

export const HoverEffect = Template.bind({})
HoverEffect.args = {
  class: '',
  text: 'Hover over me',
  href: '#',
}

export const ActiveEffect = Template.bind({})
ActiveEffect.args = {
  class: '',
  text: 'Active link',
  href: '#',
}
