import { html } from 'lit'
import './caption.css'

export default {
  title: 'Elements/Caption',
}

const Template = (args) => html`
  <div class="caption ${args.class}">
    <p>${args.text}</p>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '', text: 'This is a default caption.' }

export const SmallText = Template.bind({})
SmallText.args = { class: '', text: 'This is a small caption.' }

const CopywriteTemplate = (args) => html`
  <div class="caption">
    <p class="copywrite ${args.class}">${args.text}</p>
  </div>
`

export const Copywrite = CopywriteTemplate.bind({})
Copywrite.args = { class: '', text: '© 2024 Your Company' }

const WcbTemplate = (args) => html`
  <div class="caption">
    <div id="wcb" class="${args.class}">
      <span id="wcb_g">Green Badge</span>
      <span id="wcb_2">Blue Badge</span>
    </div>
  </div>
`

export const Wcb = WcbTemplate.bind({})
Wcb.args = { class: '', text: 'WCB Badge Example' }
