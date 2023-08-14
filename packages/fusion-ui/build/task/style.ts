import { resolve } from 'node:path'
import { dest, src } from 'gulp'
import gulpLess from 'gulp-less'
import gulpImportLess from 'gulp-import-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import { outputFileSync, readFileSync } from 'fs-extra'
import { buildOutput, componentsRoot, stylesRoot } from '../path'
export async function buildStyle() {
  const stylePath = resolve(buildOutput, 'styles')

  return src([
    resolve(stylesRoot, '**/*.less'),
    resolve(componentsRoot, '**/*.less'),
  ])
    .pipe(gulpImportLess())
    .pipe(gulpLess())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        genStyleEntry(details)
      }),
    )
    .pipe(dest(stylePath))
}

interface CssInfo {
  path: string
  name: string
}

function genStyleEntry(cssInfo: CssInfo) {
  if (cssInfo.path.includes(componentsRoot)) {
    const noStyleComps = ['on-click-outside']

    const compName = cssInfo.name.split(/\\|\//)[1]

    const importReg = /import .* from '(.*).vue'/g

    const indexCss = `./${compName}/src/index.css`

    const importCommon = `@import './base.css';\n@import '${indexCss}';\n`

    const importContent = (readFileSync(resolve(componentsRoot, compName, 'src/index.vue'), 'utf-8').match(importReg) || [])
      .filter(path => noStyleComps.every(comp => !path.includes(comp)))
      .reduce((prev, curr) => prev += curr.replace(importReg, 'import \'$1.css\'\n'), importCommon)

    outputFileSync(resolve(buildOutput, 'styles', `${compName}.css`), importContent)
  }
}
