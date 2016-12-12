'use strict'

// get package cson file by specifying locale

// $ node getPackageCson.js --locale zh-tw

const yargs = require('yargs')
const CSON = require('cson')
const syncRequest = require('sync-request')

const argv = yargs
  .help('help')
  .usage('Usage: $0 --locale=LOCALE')
  .describe('locale', 'Specify locale')
  .demand(['locale'])
  .wrap(yargs.terminalWidth())
  .argv

const LOCALE = argv.locale

const packageDependencies = [
  'autoflow',
  'bookmarks',
  'bracket-matcher',
  'command-palette',
  'dev-live-reload',
  'encoding-selector',
  'find-and-replace',
  'fuzzy-finder',
  'git-diff',
  'go-to-line',
  'grammar-selector',
  'image-view',
  'keybinding-resolver',
  'markdown-preview',
  'open-on-github',
  'package-generator',
  'settings-view',
  'snippets',
  'spell-check',
  'styleguide',
  'symbols-view',
  'tabs',
  'timecop',
  'tree-view',
  'welcome',
  'whitespace'
]
const LocaleSupport = new Set([
  'zh-tw'
  // TODO add support
])

const result = {};

// var fire = function(pkgName) {
//   var url = `https://raw.githubusercontent.com/liuderchi/atom-i18n-cson/master/${LOCALE}/${pkgName}.cson`
//   console.log(`Hit ${url}`);
//   https.get(url,
//     (res) => {
//       res.on('data', (d) => {
//         console.log(`\n${pkgName} ${res.statusCode}`);
//         // data = CSON.parse(d)
//         // console.log(data.menu || '* has no menu');
//         // console.log(data['context-menu'] || '* has no context-menu');
//         // process.stdout.write(d);
//         result[pkgName] += d
//       });
//     }
//   ).on('error',
//     (e) => {
//       console.error(e)
//       process.exit(1)
//     }
//   );
// }

function fireSync(pkgName) {
  const url = `https://raw.githubusercontent.com/liuderchi/atom-i18n-cson/master/${LOCALE}/${pkgName}.cson`
  // https.get(`https://raw.githubusercontent.com/liuderchi/atom-i18n-cson/master/zh-tw/autoflow.cson`,

  console.log(`Hit ${url}`);
  const resp = syncRequest('GET', url)
  if (resp.statusCode === 200) {
    result[pkgName] = CSON.parseCSONString(resp.getBody('utf8'))
  }
}

function main() {

  if (!LocaleSupport.has(LOCALE)) {
    console.error(`locale ${LOCALE} not supported!`)
    process.exit(1)
  }
  for (let pkgName of packageDependencies){
    // fire(pkgName)
    fireSync(pkgName)
  }
  console.log(result)

}


main()
