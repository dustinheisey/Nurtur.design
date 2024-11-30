export const layoutArgs: object = {
  align: {
    control: 'select',
    options: ['align-start', 'align-center', 'align-end', 'align-baseline', 'align-stretch'],
    description: 'Vertical Alignment of the cluster items.'
  },
  justify: {
    control: 'select',
    options: ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around'],
    description: 'Horizontal Justification of the cluster items.'
  },
  gap: {
    control: 'select',
    options: ['gap-0', 'gap-2xs', 'gap-xs', 'gap-s', 'gap-m', 'gap-l', 'gap-xl', 'gap-2xl'],
    description: 'Spacing between items.'
  },
  inset: {
    control: 'select',
    options: ['inset-0', 'inset-2xs', 'inset-xs', 'inset-s', 'inset-m', 'inset-l', 'inset-xl', 'inset-2xl'],
    description: 'padding of the container.'
  },
  space: {
    control: 'select',
    options: ['space-0', 'space-2xs', 'space-xs', 'space-s', 'space-m', 'space-l', 'space-xl', 'space-2xl'],
    description: 'Override parent container gap.'
  }
};
