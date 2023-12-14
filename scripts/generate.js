import readline from 'readline'
import { generateTemplateFilesBatch } from 'generate-template-files'

const toLowerCamelCase = str => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

const generateTemplateFiles = async componentName => {
  const component = toLowerCamelCase(componentName)

  await generateTemplateFilesBatch([
    {
      option: 'Create a new component template',
      defaultCase: '(camelCase)',
      entry: {
        folderPath: './scripts/templates/',
      },
      dynamicReplacers: [{ slot: '__component__', slotValue: component }],
      output: {
        path: './packages/components/src/__component__/',
        pathAndFileNameDefaultCase: '(kebabCase)',
      },
      onComplete: res => {
        // eslint-disable-next-line no-console
        console.log(`${componentName} template created to ${res.output.path}`)
      },
    },
  ])
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Type the component name (use Upper Camel Case, e.g. ActionArea): ',
  async componentName => {
    await generateTemplateFiles(componentName)
    rl.close()
  }
)
