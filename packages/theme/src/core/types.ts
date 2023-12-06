import type { Schemes, SeveritySchemes } from '../types'

export interface ParsedSchemes {
  schemes: Schemes | SeveritySchemes
  styles: Record<string, string>
}
