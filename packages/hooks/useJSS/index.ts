import jss from 'jss'
import preset from 'jss-preset-default'

export const useJSS = () => {
  jss.setup(preset())
  return jss
}
