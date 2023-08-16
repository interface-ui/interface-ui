import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'percentage',
    remark: 'Progress percentage',
    type: 'Number',
    default: '0',
  },
  {
    name: 'status',
    remark: 'Progress bar status representation',
    type: 'Enum',
    optional: ['success', 'danger', 'warning'],
    default: '---',
  },
  {
    name: 'text-inside',
    remark: 'Percentage within progress bar',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'height',
    remark: 'Linear progress bar height',
    type: 'String',
    default: '6px',
  },
  {
    name: 'background',
    remark: 'Control the color of the progress bar/the color of the inactive background of the circular progress bar',
    type: 'String',
    default: '---',
  },
  {
    name: 'bar-color',
    remark: 'Color of percentage identification within the progress bar',
    type: 'String',
    default: '#4987f8',
  },
  {
    name: 'type',
    remark: 'Progress Bar Type',
    type: 'Enum',
    optional: ['line', 'circle'],
    default: 'line',
  },
  {
    name: 'width',
    remark: 'Circular progress bar size',
    type: 'Enum',
    optional: ['String', 'Number'],
    default: '120px',
  },
  {
    name: 'stroke-width',
    remark: 'The width of the circular progress bar',
    type: 'String',
    default: '6px',
  },
  {
    name: 'color',
    remark: 'The color of the active background for the circular progress bar',
    type: 'String',
    default: '#4e7aef',
  },
  {
    name: 'intermediate',
    remark: 'Uncertain progress of the circular progress bar',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'duration',
    remark: 'Animation execution time',
    type: 'Number',
    default: '2s',
  },
  {
    name: 'striped',
    remark: 'stripe over the progress bar\'s color',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'striped-flow',
    remark: 'get the stripes to flow',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
