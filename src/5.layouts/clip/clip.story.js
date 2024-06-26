import { html } from 'lit'
import './clip.css'

export default {
  title: 'Layouts/Clip',
}

const Template = (args) => html`
  <div
    class="${args.class}"
    style="width: 300px; height: 200px; background-color: lightgray;"
  >
    Clipped Content
  </div>
`

export const Clip = Template.bind({})
Clip.args = { class: 'clip' }

export const ClipTopLeft = Template.bind({})
ClipTopLeft.args = { class: 'clip-top-left' }

export const ClipTopRight = Template.bind({})
ClipTopRight.args = { class: 'clip-top-right' }

export const ClipBottomLeft = Template.bind({})
ClipBottomLeft.args = { class: 'clip-bottom-left' }

export const ClipBottomRight = Template.bind({})
ClipBottomRight.args = { class: 'clip-bottom-right' }
