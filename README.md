# Atom i18n

Atom i18n try to make custom release with i18n support


## Support version (updated Dec 10 16')

  - v1.13 beta
  - v1.12


## BUILD (WIP)

  - release page
  - custom build


## CONTRIBUTE (WIP)

  - please refer to CONTRIBUTION.md for style guide and more info


## Currently Packages Require Translation (total 26. updated Dec 10 16')

  - [ ] autoflow
  - [ ] bookmarks
  - [ ] bracket-matcher
  - [ ] command-palette
  - [ ] dev-live-reload
  - [ ] encoding-selector
  - [ ] find-and-replace
  - [ ] fuzzy-finder
  - [ ] git-diff
  - [ ] go-to-line
  - [ ] grammar-selector
  - [ ] image-view
  - [ ] keybinding-resolver
  - [ ] markdown-preview
  - [ ] open-on-github
  - [ ] package-generator
  - [ ] settings-view
  - [ ] snippets
  - [ ] spell-check
  - [ ] styleguide
  - [ ] symbols-view
  - [ ] tabs
  - [ ] timecop
  - [ ] tree-view
  - [ ] welcome
  - [ ] whitespace


## TODO

  - [x] create custom branch of atom fork

  - [ ] create another github repo to accept i18n contribution
      - [x] list of core modules require translation
          - list package.json.packageDependencies has `./menus/*.cson`
      - repo supports JSON downloading via github API
      - [ ] build flow and description in README.md
      - [ ] CONTRIBUTE.md
          - [ ] PR guide (one branch + multiple folders)
      - [ ] consider ATOM binary download?
          - [creating release along with binary](https://help.github.com/articles/creating-releases/)

  - [ ] refine script/listPackageWithMenuCson.js
      - [ ] package.json
  - [ ] refine `i18n.js` code
      - [x] collection of core packages
      - [ ] argument parsing
