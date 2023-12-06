type GenerateCustomSchemesKeys<T extends string> =
  | T
  | `on${Capitalize<T>}`
  | `${T}Container`
  | `on${Capitalize<T>}Container`

export type GenerateCustomSchemes<T extends string> = Record<
  GenerateCustomSchemesKeys<T>,
  string
>
