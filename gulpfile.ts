import { parallel, series } from 'gulp'
import {
  buildBundled,
  buildModule,
  buildStyle,
  buildType,
} from './build/task'

export default parallel(
  buildBundled,
  buildStyle,
  series(buildModule, buildType),
)
