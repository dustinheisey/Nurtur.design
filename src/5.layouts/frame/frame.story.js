import { html } from 'lit'
import './frame.css'

export default {
  title: 'Layouts/Frame',
}

const Template = (args) => html`
  <div class="frame ${args.class}" style="width: 300px; height: 300px;">
    <img src="path-to-your-image.jpg" alt="Framed Content" />
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Square = Template.bind({})
Square.args = { class: 'square' }

export const VerticalS = Template.bind({})
VerticalS.args = { class: 'vertical-s' }

export const Vertical = Template.bind({})
Vertical.args = { class: 'vertical' }

export const Photo = Template.bind({})
Photo.args = { class: 'photo' }

export const Video = Template.bind({})
Video.args = { class: 'video' }

export const Full = Template.bind({})
Full.args = { class: 'full' }

export const Rounded = Template.bind({})
Rounded.args = { class: 'rounded' }
