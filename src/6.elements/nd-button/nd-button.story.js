import { html } from 'lit'
import './nd-button.js'

export default {
  title: 'Components/ND Button',
  component: 'nd-button',
}

export const Primary = () => html`<nd-button>Primary Button</nd-button>`

export const Secondary = () =>
  html`<nd-button variant="secondary">Secondary Button</nd-button>`

export const Tertiary = () =>
  html`<nd-button variant="tertiary">Tertiary Button</nd-button>`

export const Large = () => html`<nd-button size="l">Large Button</nd-button>`

export const Small = () => html`<nd-button size="s">Small Button</nd-button>`
