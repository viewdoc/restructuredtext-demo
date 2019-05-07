const { buildMarkup } = require('@viewdoc/markup-demo')
const path = require('path')

const main = async () => {
  await buildMarkup({
    srcDirPath: path.join(__dirname, 'src'),
    outDirPath: __dirname,
    srcExtensions: ['.rst'],
    generateSrc: (markup) => {
      const markupLines = markup.split('\n').map(line => `\n\t${line}`)
      return [
        '::',
        ...markupLines,
        '',
      ].join('')
    }
  })
}

if (require.main === module) {
  main()
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
