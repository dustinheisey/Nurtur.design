import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Prose',
  argTypes: {
    size: {
      control: 'select',
      options: ['prose', 'prose-l', 'prose-s'],
      description: 'Size of the prose.',
      table: {
        type: {
          summary: 'prose-l | prose-s'
        }
      }
    }
  },
  args: {
    size: 'prose'
  }
};
export default meta;

export const Prose: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="['prose', args.size, 'inset-l']">
        <h1>Understanding Prose Containers</h1>
        <p>
          Prose containers are essential for formatting text in a way that's both
          aesthetically pleasing and easy to read. They provide spacing, typography, and other
          visual styles tailored for long-form content like articles or blog posts.
        </p>
        <h2>The Basics of Prose Layout</h2>
        <p>
          A prose layout typically includes elements such as headings, paragraphs, blockquotes,
          lists, and other common HTML elements. These are styled to ensure readability and
          consistent spacing.
        </p>
        <blockquote>
          "Good design is as little design as possible." — Dieter Rams
        </blockquote>
        <h3>Key Features</h3>
        <ul>
          <li>Consistent typography for headings and body text</li>
          <li>Proper spacing between elements</li>
          <li>Support for lists, blockquotes, and code snippets</li>
        </ul>
        <p>
          Here’s an example of an ordered list to demonstrate the styling:
        </p>
        <ol>
          <li>Identify your content structure.</li>
          <li>Apply a prose container class to wrap your content.</li>
          <li>Enjoy the benefits of structured text presentation.</li>
        </ol>
        <h4>Why Use Prose Containers?</h4>
        <p>
          Prose containers are perfect for long-form content, such as:
        </p>
        <ul>
          <li>Technical documentation</li>
          <li>Blog posts</li>
          <li>Articles</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          With the right styling, prose containers can significantly improve the readability
          of your content, making it more engaging and easier to consume for your audience.
        </p>
        <hr />
        <p class="lead">Ready to take your typography to the next level? Start using prose containers today!</p>
      </div>
    `
  })
};
