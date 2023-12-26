import { series } from 'gulp'
import { buildModule, buildStyle } from './tasks'

export default series(buildModule, buildStyle)
