import { html } from 'lit'
import './figure.css'

export default {
  title: 'Elements/Figure',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <figure>
    <img
      src="${args.imgSrc}"
      alt="${args.imgAlt}"
      style="width: 100%; max-width: 300px;"
    />
    <figcaption>${args.caption}</figcaption>
  </figure>
`

export const Default = Template.bind({})
Default.args = {
  imgSrc: 'https://via.placeholder.com/300',
  imgAlt: 'Placeholder image',
  caption: 'This is a caption for the figure.',
}

export const CustomCaption = Template.bind({})
CustomCaption.args = {
  imgSrc: 'https://via.placeholder.com/300',
  imgAlt: 'Placeholder image',
  caption: 'A custom caption for the figure.',
}
