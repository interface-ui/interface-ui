import jss from 'jss'
import preset from 'jss-preset-default'

export const useJSS = () => {
  if (typeof window !== 'undefined') {
    jss.setup(preset())
    return jss
  }
  return null
}
