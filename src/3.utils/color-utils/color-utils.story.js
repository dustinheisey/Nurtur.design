import { html } from 'lit'
import './color-utils.css'

export default {
  title: 'Utilities/Color',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const colors = [
  { class: 'color-primary', label: 'Primary' },
  { class: 'color-on-primary', label: 'On Primary' },
  { class: 'color-secondary', label: 'Secondary' },
  { class: 'color-on-secondary', label: 'On Secondary' },
  { class: 'color-tertiary', label: 'Tertiary' },
  { class: 'color-on-tertiary', label: 'On Tertiary' },
  { class: 'color-error', label: 'Error' },
  { class: 'color-on-error', label: 'On Error' },
  { class: 'color-background', label: 'Background' },
  { class: 'color-on-background', label: 'On Background' },
  { class: 'color-surface', label: 'Surface' },
  { class: 'color-on-surface', label: 'On Surface' },
]

const Template = () => html`
  <div>
    ${colors.map(
      (color) => html`
        <p
          class="${color.class}"
          style="margin: 10px 0; padding: 10px; background: var(--color-surface);"
        >
          This text is ${color.label}
        </p>
      `
    )}
  </div>
`

export const Default = Template.bind({})
