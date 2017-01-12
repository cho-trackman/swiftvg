#!/usr/bin/env node

const pathData = process.argv[2]
const parser = require('../index')

if (process.argv.length > 3) {
  console.error('You passed too many arguments to svg-to-swift!')
  console.error('Make sure your SVG path is quoted.')

  process.exit(1)
}

if (process.argv.length < 3) {
  console.info(`Usage: swift-to-svg

  swift-to-svg <path data>`)

  process.exit(0)
}

const code = parser(pathData)

console.log(code.join('\n'))

process.exit(0)
