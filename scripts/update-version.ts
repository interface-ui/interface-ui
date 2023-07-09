import { writeFile } from 'fs/promises'
import { resolve } from 'node:path'
import consola from 'consola'
import chalk from 'chalk'
import pkg from '../packages/fusion-ui/package.json'

const pkgPath = resolve(process.cwd(), 'packages/fusion-ui/package.json')

export async function updatePkgVersion(version: string) {
  consola.info(`${chalk.cyan('Updating version...')}`)

  consola.info(
    `${chalk.green(pkg.name)} version from ${chalk.green(
      pkg.version,
    )} to ${chalk.green(version)}`,
  )

  pkg.version = version.slice(1)

  await writeFile(pkgPath, JSON.stringify(pkg, undefined, 2), 'utf-8')

  consola.success(`${pkg.name} version updated!`)
}
