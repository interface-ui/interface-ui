import consola from 'consola'
import chalk from 'chalk'
import convert from './convert'

consola.info(chalk.blue(`Start extract for ${convert.map(item => item.name).join(', ')}`))
Promise.all(convert.map(item => (async () => {
  const { path, dir, resolver } = item

  await resolver?.(path, dir)
})())).then(() => {
  consola.info(chalk.blue(`Complete extraction for ${convert.map(item => item.name).join(', ')}`))
}).catch(err => consola.error(chalk.red(err)))
