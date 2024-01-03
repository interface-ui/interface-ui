export type TableTypes = 'props' | 'slots'

export type TableHeader = Omit<TableDataItem, 'options' | 'version'>

export type TableHeaderOptions = { label: string; prop: keyof TableHeader }[]

export type TableLang = 'zh' | 'en'

export interface TableDataItem {
  /**
   * The name of the property
   */
  name: string

  /**
   * The description of the property
   */
  description: string

  /**
   * The type of the property
   */
  type: string

  /**
   * The optional value of the property
   */
  options: string[]

  /**
   * The default value of the property
   */
  default: string

  /**
   * The version of the property be used
   */
  version: string
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type PropDataItem = Optional<
  TableDataItem,
  'options' | 'version' | 'default'
>
export type SlotDataItem = Optional<
  TableDataItem,
  'type' | 'options' | 'default' | 'version'
>

export interface TableProps {
  data: TableProps['type'] extends 'props' ? PropDataItem[] : SlotDataItem[]
  type: TableTypes
  lang: TableLang
}
