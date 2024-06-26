import { html } from 'lit'
import './mosaic.css'

export default {
  title: 'Layouts/Mosaic',
}

const Template = (args) => html`
  <div class="mosaic" style="display: grid; gap: 10px;">
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightblue; padding: 20px;">Item 2</div>
    <div style="background-color: lightgreen; padding: 20px;">Item 3</div>
    <div style="background-color: lightcoral; padding: 20px;">Item 4</div>
    <div style="background-color: lightgoldenrodyellow; padding: 20px;">
      Item 5
    </div>
    <div style="background-color: lightpink; padding: 20px;">Item 6</div>
    <div style="background-color: lightseagreen; padding: 20px;">Item 7</div>
    <div style="background-color: lightsalmon; padding: 20px;">Item 8</div>
    <div style="background-color: lightcyan; padding: 20px;">Item 9</div>
    <div style="background-color: lightsteelblue; padding: 20px;">Item 10</div>
    <div style="background-color: lightyellow; padding: 20px;">Item 11</div>
    <div style="background-color: lightgrey; padding: 20px;">Item 12</div>
  </div>
`

export const Default = Template.bind({})
Default.args = {}
