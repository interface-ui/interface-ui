import stateCss from '../../styles/state.less'
import type { State } from './state'

const match = stateCss.matchAll(
  /--\b(md|fn)\b-sys-state-([a-z]+)-state-layer-opacity: ([\.0-9]+);/g
)

const state: State = [...match].reduce((pre, cur) => {
  const [_, _source, state, value] = cur
  pre[state] = value
  return pre
}, {} as any)

export default state
