import { resolve } from 'node:path'
import { dest, src } from 'gulp'
import gulpLess from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import { outputFileSync } from 'fs-extra'
import consola from 'consola'
import { pathRoot, pathSrc } from '../path'

interface CssInfo {
  path: string
  name: string
}

const generatedCssInfoList: CssInfo[] = []

export async function buildStyle() {
  return src(resolve(pathSrc, '**/*.less'))
    .pipe(gulpLess())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      rename((path: any) => {
        return {
          basename: path.dirname.replace(/\/?src\/?/g, ''),
          extname: '.css',
          dirname: '',
        }
      }),
    )
    .pipe(
      cleanCSS({}, (details: any) => {
        const cssInfo = {
          path: details.name,
          name: details.name.replace('.css', ''),
        }
        generatedCssInfoList.push(cssInfo)
      }),
    )
    .pipe(dest(resolve(pathRoot, 'styles')))
    .on('end', () => {
      generateIndexCss(generatedCssInfoList)
      consola.success('Build styles success')
    })
}

function generateIndexCss(cssInfoList: CssInfo[]) {
  const indexCssContent = cssInfoList
    .map(cssInfo => `@import '.${cssInfo.name}.css';`)
    .join('\n')

  outputFileSync(resolve(pathRoot, 'styles/index.css'), indexCssContent)
}
