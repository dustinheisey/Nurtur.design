import { html } from 'lit'
import './icon.css'

export default {
  title: 'Elements/Icon',
}

const Template = (args) => html`
  <svg class="icon ${args.class}" aria-hidden="true">
    <use href="#icon-${args.icon}"></use>
  </svg>
`

export const Default = Template.bind({})
Default.args = { class: '', icon: 'default' }

export const Primary = Template.bind({})
Primary.args = { class: 'icon-primary', icon: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { class: 'icon-secondary', icon: 'secondary' }

export const Tertiary = Template.bind({})
Tertiary.args = { class: 'icon-tertiary', icon: 'tertiary' }

export const Small = Template.bind({})
Small.args = { class: 'icon-s', icon: 'small' }

export const Large = Template.bind({})
Large.args = { class: 'icon-l', icon: 'large' }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { class: 'icon-xl', icon: 'extralarge' }

export const Rotate90 = Template.bind({})
Rotate90.args = { class: 'icon-rotate-90', icon: 'rotate90' }

export const Rotate180 = Template.bind({})
Rotate180.args = { class: 'icon-rotate-180', icon: 'rotate180' }

export const Rotate270 = Template.bind({})
Rotate270.args = { class: 'icon-rotate-270', icon: 'rotate270' }

export const FlipX = Template.bind({})
FlipX.args = { class: 'icon-flip-x', icon: 'flipx' }

export const FlipY = Template.bind({})
FlipY.args = { class: 'icon-flip-y', icon: 'flipy' }

export const Spinning = Template.bind({})
Spinning.args = { class: 'icon-is-spinning', icon: 'spinning' }
