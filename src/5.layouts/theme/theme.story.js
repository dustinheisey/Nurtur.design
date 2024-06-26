import { html } from 'lit'
import './theme.css'

export default {
  title: 'Layouts/Theme',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="theme ${args.class}" style="padding: 20px; border-radius: 8px;">
    <h1>Title</h1>
    <p>This is a sample paragraph demonstrating the theme styles.</p>
    <button
      style="padding: 10px; background-color: var(--color-primary); color: var(--color-on-primary); border: none; border-radius: 4px;"
    >
      Button
    </button>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: 'theme-background' }

export const DarkTheme = Template.bind({})
DarkTheme.args = { class: 'theme-dark' }

export const SurfaceTheme = Template.bind({})
SurfaceTheme.args = { class: 'theme-surface' }

export const SurfaceInverseTheme = Template.bind({})
SurfaceInverseTheme.args = { class: 'theme-surface-inverse' }

export const PrimaryTheme = Template.bind({})
PrimaryTheme.args = { class: 'theme-primary' }

export const PrimaryContainerTheme = Template.bind({})
PrimaryContainerTheme.args = { class: 'theme-primary-container' }

export const SecondaryTheme = Template.bind({})
SecondaryTheme.args = { class: 'theme-secondary' }

export const SecondaryContainerTheme = Template.bind({})
SecondaryContainerTheme.args = { class: 'theme-secondary-container' }

export const TertiaryTheme = Template.bind({})
TertiaryTheme.args = { class: 'theme-tertiary' }

export const TertiaryContainerTheme = Template.bind({})
TertiaryContainerTheme.args = { class: 'theme-tertiary-container' }

export const ErrorTheme = Template.bind({})
ErrorTheme.args = { class: 'theme-error' }

export const ErrorContainerTheme = Template.bind({})
ErrorContainerTheme.args = { class: 'theme-error-container' }
