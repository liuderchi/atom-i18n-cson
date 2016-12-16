'use strict'

// replace cson file under .atom/packages/*/menus/*.cson

const fs = require('fs')
const path = require('path')
const os = require('os')
const yargs = require('yargs')
const cson = require('cson')

const argv = yargs
  .help('help')
  .usage('Usage: $0 [path-to-dot-atom]')
  .wrap(yargs.terminalWidth())
  .argv

const DOT_ATOM_PATH = argv._[0] || path.join(os.homedir(), '.atom')
// TODO check .atom in different platform
process.chdir(DOT_ATOM_PATH)

let count = 0
const res = []

// NOTE print all .atom/packages/*/menus/*.cson name
const packages = fs.readdirSync('packages')
for(let pkg of packages) {
  const p = path.join(DOT_ATOM_PATH, 'packages', pkg)
  checkExist(p)

  const csons =
    (fs.existsSync(path.join('packages', pkg, 'menus')))?
    fs.readdirSync(path.join('packages', pkg, 'menus')) : []

  for(let cson of csons){
    const p = path.join(DOT_ATOM_PATH, 'packages', pkg, 'menus', cson)
    checkExist(p)


    // TODO backup file

    // TODO read it in CSON or JSON
    // var data = fs.readFileSync('keymap.cson')

    // TODO update file
    //

    res.push(p)
    count++
  }
}

res.sort((a, b) => a.localeCompare(b))

console.log(res)
console.log(count)


function checkExist(path) {
  if (!fs.existsSync(path)){ console.log(`${path} not exist`); }
}
