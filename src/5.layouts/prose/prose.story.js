import { html } from 'lit'
import './prose.css'

export default {
  title: 'Layouts/Prose',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="prose ${args.class}" style="--color-primary: #007bff;">
    <h1>Heading 1</h1>
    <p>This is a paragraph to demonstrate the prose styles applied.</p>
    <h2>Heading 2</h2>
    <p class="lead">This is a lead paragraph with a specific style.</p>
    <blockquote>This is a blockquote example.</blockquote>
    <pre>This is a preformatted text example.</pre>
    <hr />
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <ol>
      <li>Ordered item 1</li>
      <li>Ordered item 2</li>
      <li>Ordered item 3</li>
    </ol>
    <figure>
      <img src="path-to-your-image.jpg" alt="Example Image" />
      <figcaption>This is a caption for the image.</figcaption>
    </figure>
    <h3>Heading 3</h3>
    <p>Another paragraph to show spacing and styles.</p>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const ProseLarge = Template.bind({})
ProseLarge.args = { class: 'prose-l' }

export const ProseSmall = Template.bind({})
ProseSmall.args = { class: 'prose-s' }
