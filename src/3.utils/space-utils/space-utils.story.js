import { html } from 'lit'
import './space-utils.css'

export default {
  title: 'Utilities/Space',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const spaceClasses = [
  { class: 'inset-0', label: 'Inset 0' },
  { class: 'inset-3xs', label: 'Inset 3XS' },
  { class: 'inset-2xs', label: 'Inset 2XS' },
  { class: 'inset-xs', label: 'Inset XS' },
  { class: 'inset-s', label: 'Inset S' },
  { class: 'inset-m', label: 'Inset M' },
  { class: 'inset-l', label: 'Inset L' },
  { class: 'inset-xl', label: 'Inset XL' },
  { class: 'inset-2xl', label: 'Inset 2XL' },
  { class: 'inset-3xl', label: 'Inset 3XL' },
  { class: 'inset-4xl', label: 'Inset 4XL' },
  { class: 'gap-0', label: 'Gap 0' },
  { class: 'gap-3xs', label: 'Gap 3XS' },
  { class: 'gap-2xs', label: 'Gap 2XS' },
  { class: 'gap-xs', label: 'Gap XS' },
  { class: 'gap-s', label: 'Gap S' },
  { class: 'gap-m', label: 'Gap M' },
  { class: 'gap-l', label: 'Gap L' },
  { class: 'gap-xl', label: 'Gap XL' },
  { class: 'gap-2xl', label: 'Gap 2XL' },
  { class: 'gap-3xl', label: 'Gap 3XL' },
  { class: 'gap-4xl', label: 'Gap 4XL' },
  { class: 'space-3xs', label: 'Space 3XS' },
  { class: 'space-2xs', label: 'Space 2XS' },
  { class: 'space-xs', label: 'Space XS' },
  { class: 'space-s', label: 'Space S' },
  { class: 'space-m', label: 'Space M' },
  { class: 'space-l', label: 'Space L' },
  { class: 'space-xl', label: 'Space XL' },
  { class: 'space-2xl', label: 'Space 2XL' },
  { class: 'space-3xl', label: 'Space 3XL' },
  { class: 'space-4xl', label: 'Space 4XL' },
  { class: 'grow-1', label: 'Grow 1' },
  { class: 'grow-2', label: 'Grow 2' },
  { class: 'grow-3', label: 'Grow 3' },
]

const Template = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    ${spaceClasses.map(
      (space) => html`
        <div
          class="space-example ${space.class}"
          style="border: 1px solid #ccc; padding: 10px;"
        >
          <p>${space.label}</p>
        </div>
      `
    )}
  </div>
`

export const Default = Template.bind({})
