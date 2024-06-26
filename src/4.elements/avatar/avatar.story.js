import { html } from 'lit'
import './avatar.css'

export default {
  title: 'Elements/Avatar',
}

const Template = (args) => html`
  <div class="avatar-list">
    <div class="avatar ${args.class}" style="background-color: lightgray;">
      A
    </div>
    <div class="avatar ${args.class}" style="background-color: lightblue;">
      B
    </div>
    <div class="avatar ${args.class}" style="background-color: lightgreen;">
      C
    </div>
    <div class="avatar ${args.class}" style="background-color: lightcoral;">
      D
    </div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Small = Template.bind({})
Small.args = { class: 'avatar-s' }

export const Large = Template.bind({})
Large.args = { class: 'avatar-l' }

const ImageTemplate = (args) => html`
  <div class="avatar-list">
    <img
      src="path-to-your-image.jpg"
      class="avatar-img ${args.class}"
      alt="Avatar Image 1"
    />
    <img
      src="path-to-your-image.jpg"
      class="avatar-img ${args.class}"
      alt="Avatar Image 2"
    />
    <img
      src="path-to-your-image.jpg"
      class="avatar-img ${args.class}"
      alt="Avatar Image 3"
    />
  </div>
`

export const ImageDefault = ImageTemplate.bind({})
ImageDefault.args = { class: '' }

export const ImageLarge = ImageTemplate.bind({})
ImageLarge.args = { class: 'avatar-l' }
