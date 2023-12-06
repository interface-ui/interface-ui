import { resolve } from 'node:path'
import { dest, src } from 'gulp'
import gulpLess from 'gulp-less'
import gulpImportLess from 'gulp-import-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import consola from 'consola'
import { buildOutput, componentsComponents } from '../path'

const generatedCssInfoList: CssInfo[] = []

export async function buildStyle() {
  const stylePath = resolve(buildOutput, 'styles')

  return src([resolve(componentsComponents, '**/*.less')])
    .pipe(gulpImportLess())
    .pipe(gulpLess())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      rename(path => {
        return {
          basename: path.dirname.replace(/\/?src\/?/g, ''),
          extname: '.css',
          dirname: '',
        }
      })
    )
    .pipe(
      cleanCSS({}, (details: any) => {
        const cssInfo = {
          path: details.name,
          name: details.name.replace('.css', ''),
        }
        generatedCssInfoList.push(cssInfo)
        // genStyleEntry(details)
      })
    )
    .pipe(dest(stylePath))
    .on('end', () => {
      consola.info('🚀🚀🚀🚀----------', 'index.css')
      generateIndexCss(generatedCssInfoList)
    })
}

interface CssInfo {
  path: string
  name: string
}

function generateIndexCss(cssInfoList: CssInfo[]) {
  const indexCssContent = cssInfoList
    .map(cssInfo => `@import '.${cssInfo.name}.css';`)
    .join('\n')

  outputFileSync(resolve(buildOutput, 'styles', 'index.css'), indexCssContent)
}

function genStyleEntry(cssInfo: CssInfo) {
  if (cssInfo.path.includes(componentsComponents)) {
    const noStyleComps = ['on-click-outside']

    generatedCssInfoList.push(cssInfo)

    const compName = cssInfo.name.split(/\\|\//)[1]

    const isExist = existsSync(
      resolve(componentsComponents, compName, 'src/index.vue')
    )

    const importReg = /import .* from '(.*).vue'/g

    const indexCss = `./${compName}/src/index.css`

    const importCommon = `@import './base.css';\n@import '${indexCss}';\n`

    const importContent = (
      readFileSync(
        resolve(
          componentsComponents,
          compName,
          `src/index.${isExist ? 'vue' : 'tsx'}`
        ),
        'utf-8'
      ).match(importReg) || []
    )
      .filter(path => noStyleComps.every(comp => !path.includes(comp)))
      .reduce(
        // eslint-disable-next-line @typescript-eslint/quotes
        (prev, curr) => (prev += curr.replace(importReg, "import '$1.css'\n")),
        importCommon
      )
    outputFileSync(
      resolve(buildOutput, 'styles', `${compName}.css`),
      importContent
    )
  }
}
