export const gap: object = {
  control: 'select',
  options: ['gap-0', 'gap-2xs', 'gap-xs', 'gap-s', 'gap-m', 'gap-l', 'gap-xl', 'gap-2xl'],
  description: 'Spacing between items.'
};

export const inset: object = {
  control: 'select',
  options: ['inset-0', 'inset-2xs', 'inset-xs', 'inset-s', 'inset-m', 'inset-l', 'inset-xl', 'inset-2xl'],
  description: 'padding of the container.'
};

export const space: object = {
  control: 'select',
  options: ['space-0', 'space-2xs', 'space-xs', 'space-s', 'space-m', 'space-l', 'space-xl', 'space-2xl'],
  description: 'Override parent container gap.'
};

export const align: object = {
  control: 'select',
  options: ['align-start', 'align-center', 'align-end', 'align-baseline', 'align-stretch'],
  description: 'Vertical Alignment of the cluster items.'
};

export const justify: object = {
  control: 'select',
  options: ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around'],
  description: 'Horizontal Justification of the cluster items.'
};

export const layoutArgs: object[] = [gap, inset, space, align, justify];
