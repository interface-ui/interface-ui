/** changelog power by https://github.com/antfu/changelogithub */

import consola from 'consola'
import chalk from 'chalk'
import { execCommand, getCurrentGitBranch, hasGitTag } from './git'

async function main() {
  try {
    const [version, notes] = process.argv.slice(2)
    const currentBranch = await getCurrentGitBranch()
    const hasVersion = await hasGitTag(version)

    if (currentBranch !== 'master')
      return consola.error(`Branch ${currentBranch} can not release!`)

    if (hasVersion)
      return consola.error(`Version ${version} already exists!`)

    await excuteRelease(version, notes)

    consola.success(chalk.green('release success!'))
  }
  catch (error) {
    consola.error(error)
    process.exit(1)
  }
}

async function excuteRelease(version: string, notes: string) {
  await execCommand('git', ['tag', '-a', version, '-m', notes])
  await execCommand('git', ['push', 'origin', version])
}

main()
