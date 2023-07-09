export async function hasGitTag(tag: string) {
  const tags = await execCommand('git', [
    '--no-pager',
    'tag',
    '-l',
    '--sort=creatordate',
  ]).then(r => r.split('\n'))
  return tags.includes(tag)
}

export async function getCurrentGitBranch() {
  const branch = await execCommand('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
  return branch
}

export async function execCommand(cmd: string, args: string[]) {
  const { execa } = await import('execa')
  const res = await execa(cmd, args)
  return res.stdout.trim()
}
