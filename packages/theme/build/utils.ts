import { spawn } from 'child_process'
import { pathRoot } from './path'

export const run = async (command: string) => {
  const [cmd, ...args] = command.split(' ')
  return new Promise(resolve => {
    const app = spawn(cmd, args, {
      cwd: pathRoot,
      stdio: 'inherit',
      shell: true,
    })
    app.on('close', resolve)
  })
}
