import { html } from 'lit'
import './tooltip.css'

export default {
  title: 'Layouts/Tooltip',
}

const Template = (args) => html`
  <div style="margin: 50px;">
    <button>
      Hover over me
      <tool-tip tip-position="${args.position}"> This is a tooltip </tool-tip>
    </button>
  </div>
`

export const Top = Template.bind({})
Top.args = { position: 'top' }

export const Right = Template.bind({})
Right.args = { position: 'right' }

export const Bottom = Template.bind({})
Bottom.args = { position: 'bottom' }

export const Left = Template.bind({})
Left.args = { position: 'left' }
