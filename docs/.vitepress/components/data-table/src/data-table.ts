import type { TableHeaderOptions, TableTypes } from './types'

export const tableHeadersEn: Record<TableTypes, TableHeaderOptions> = {
  props: [
    {
      label: 'Name',
      prop: 'name',
    },
    {
      label: 'Description',
      prop: 'description',
    },
    {
      label: 'Type',
      prop: 'type',
    },
    {
      label: 'Default',
      prop: 'default',
    },
  ],
  slots: [
    {
      label: 'Name',
      prop: 'name',
    },
    {
      label: 'Description',
      prop: 'description',
    },
  ],
}

export const tableHeadersZh: Record<TableTypes, TableHeaderOptions> = {
  props: [
    {
      label: '名称',
      prop: 'name',
    },
    {
      label: '描述',
      prop: 'description',
    },
    {
      label: '类型',
      prop: 'type',
    },
    {
      label: '默认值',
      prop: 'default',
    },
  ],
  slots: [
    {
      label: '名称',
      prop: 'name',
    },
    {
      label: '描述',
      prop: 'description',
    },
  ],
}
