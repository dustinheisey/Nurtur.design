import { html } from 'lit'
import './blockquote.css'

export default {
  title: 'Elements/Blockquote',
}

const Template = (args) => html`
  <figure>
    <blockquote class="${args.class}">${args.text}</blockquote>
    <figcaption>${args.caption}</figcaption>
  </figure>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  text: 'This is a blockquote example.',
  caption: '— Author',
}

export const Accent = Template.bind({})
Accent.args = {
  class: 'blockquote-accent',
  text: 'This is an accented blockquote example.',
  caption: '— Author',
}
