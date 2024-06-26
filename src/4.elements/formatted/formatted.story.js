import { html } from 'lit'
import './formatted.css'

export default {
  title: 'Elements/Formatted',
}

const Template = (args) => html`
  <div>
    <del>${args.delText}</del>
    <ins>${args.insText}</ins>
    <time>${args.timeText}</time>
    <math>${args.mathText}</math>
    <code>${args.codeText}</code>
    <pre>
      <code>
        ${args.preText}
      </code>
    </pre>
  </div>
`

export const Default = Template.bind({})
Default.args = {
  delText: 'This text is deleted',
  insText: 'This text is inserted',
  timeText: '2024-07-23T18:25:43.511Z',
  mathText: 'E = mc^2',
  codeText: 'const example = "This is a code snippet";',
  preText: `
<pre><code>
<span class="keyword">const</span> <span class="variable">example</span> = <span class="string">"This is a code snippet"</span>;
<span class="comment">// This is a comment</span>
</code></pre>`,
}
