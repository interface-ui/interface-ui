export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'vitest', '__test__', 'gulpfile', 'dist', 'playground']
  const arr = files.filter(
    path => !excludes.some(exclude => path.includes(exclude)),
  )
  return arr
}
