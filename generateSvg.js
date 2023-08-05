const fs = require('fs')

const svgFilesDirectory = 'src/icons' // Replace this with the path to your SVG files directory

fs.readdir(svgFilesDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }

  const svgFiles = files.filter(file => file.endsWith('.svg'))
  const exportStatements = svgFiles.map(file => {
    let componentName = file.replace('.svg', '')
    let arrName = []
    if (componentName.includes('-')) {
      arrName = componentName.split('-')
    }
    if (componentName.includes('_')) {
      arrName = componentName.split('_')
    }
    if (componentName.includes(' ')) {
      arrName = componentName.split(' ')
    }
    if (arrName.length > 0) {
      for (var i = 0; i < arrName.length; i++) {
        arrName[i] = arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1)
      }
      componentName = arrName.join('')
    } else {
      componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
    }
    return `export { default as Icon${componentName} } from './${file}';`
  })

  const indexContent = exportStatements.join('\n')

  fs.writeFile(`${svgFilesDirectory}/index.ts`, indexContent, err => {
    if (err) {
      console.error('Error writing index.ts:', err)
      return
    }
    console.log('index.ts generated successfully!')
  })
})
