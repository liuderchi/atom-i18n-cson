'use trict'

// list packages that has menua/*.cson file required translated

const fs = require('fs')
const path = require('path')
const yargs = require('yargs')

const argv = yargs
  .help('help')
  .usage('Usage: $0 [path-to-atom-repo]')
  .demand(1)
  .wrap(yargs.terminalWidth())
  .argv
const ATOM_REPO_PATH = argv._[0]
const pkgData = fs.readFileSync(path.join(ATOM_REPO_PATH, 'package.json'))
const packageDependencies = JSON.parse(pkgData).packageDependencies

var count = 0

for (var p in packageDependencies) {
  var jsonFilePath = path.join(ATOM_REPO_PATH, 'out/app/node_modules', p, 'menus', `${p}.json`)
  if (fs.existsSync(jsonFilePath)){
    console.log(p);
    // console.log(`  - [ ] ${p}`);  // markdown checkbox

    // var csonPath = path.join(ATOM_REPO_PATH, 'node_modules', p, 'menus', `${p}.cson`)
    // console.log(csonPath);
    count++;
  }
}

console.log(`\ncount: ${count}`);
