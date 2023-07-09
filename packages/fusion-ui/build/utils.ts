export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'tests', 'gulpfile', 'dist']
  return files.filter(
    path => !excludes.some(exclude => path.includes(exclude)),
  )
}
