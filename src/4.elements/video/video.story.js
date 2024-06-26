import { html } from 'lit'
import './video.css'

export default {
  title: 'Elements/Video',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <video class="${args.class}" controls>
    <source src="${args.src}" type="${args.type}" />
    Your browser does not support the video tag.
  </video>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  type: 'video/mp4',
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  class: 'custom-video-class',
  src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  type: 'video/mp4',
}
