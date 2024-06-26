import { html } from 'lit'
import './text-utils.css'

export default {
  title: 'Utilities/Text',
}

const textClasses = [
  { class: 'text-start', label: 'Text Start' },
  { class: 'text-center', label: 'Text Center' },
  { class: 'text-end', label: 'Text End' },
  { class: 'nowrap', label: 'No Wrap' },
]

const Template = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    ${textClasses.map(
      (text) => html`
        <div
          class="text-example ${text.class}"
          style="border: 1px solid #ccc; padding: 10px;"
        >
          <p>${text.label}</p>
        </div>
      `
    )}
  </div>
`

export const Default = Template.bind({})
