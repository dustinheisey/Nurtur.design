import { html } from 'lit'
import './image.css'

export default {
  title: 'Elements/Image',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="img-container ${args.class}">
    ${args.bg ? html`<div class="img-bg"></div>` : ''}
    <img src="${args.src}" alt="${args.alt}" class="${args.imgClass}" />
  </div>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  src: 'https://via.placeholder.com/300',
  alt: 'Placeholder image',
  imgClass: '',
  bg: false,
}

export const Rounded = Template.bind({})
Rounded.args = {
  class: '',
  src: 'https://via.placeholder.com/300',
  alt: 'Rounded image',
  imgClass: 'rounded',
  bg: false,
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  class: '',
  src: 'https://via.placeholder.com/300',
  alt: 'Image with background',
  imgClass: '',
  bg: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  class: '',
  src: 'https://via.placeholder.com/1200x300',
  alt: 'Full width image',
  imgClass: 'full',
  bg: false,
}

export const Logo = Template.bind({})
Logo.args = {
  class: '',
  src: 'https://via.placeholder.com/100x50',
  alt: 'Logo',
  imgClass: 'logo',
  bg: false,
}

export const LargeLogo = Template.bind({})
LargeLogo.args = {
  class: '',
  src: 'https://via.placeholder.com/200x100',
  alt: 'Large logo',
  imgClass: 'logo-l',
  bg: false,
}
