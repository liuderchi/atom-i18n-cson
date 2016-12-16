# Atom i18n CSON

Custom Atom Release with i18n support.

Also hosting i18n cson content for the custom build.


## Support version (updated Dec 13 16')

  - v1.13.0 beta8


## Download Custom i18n Release (WIP)

  - please refer to [release page](https://github.com/liuderchi/atom-i18n-cson/releases)


## BUILD and Make Custom Release

  1. prepare your environment based on [Official Atom Build Instruction](https://github.com/atom/atom/blob/master/README.md#building)

  2. you need to clone [my Atom fork with some customization](https://github.com/liuderchi/atom.git)

        git clone https://github.com/liuderchi/atom.git

  3. change into directory and checkout to remote branch in proper name such as `origin/i18n_v1.13.0_MyLocale`:

        cd atom && git checkout origin/i18n_v1.13.0_zhTW

      - **NOTE** the branch is under development with *forced update* so please notice when syncing with it

  4. build Atom and create package for your locale

        ./script/build --create-debian-package --locale=LOCALE

     - `LOCALE` support (WIP):
          - [ ] `zh-tw`

     - **NOTE** if `LOCALE` you specified is not support, welcome to [*CONTRIBUTE*](#contribute).
     - For building ATOM in other ways to check [Official Atom Build Instruction](https://github.com/atom/atom/blob/master/README.md#building)

  5. install ATOM

        dpkg -i ./out/atom-amd64.deb

  6. some files in your repo would be overwritten so restore them with

        git checkout ./


## CONTRIBUTE

  - please refer to [CONTRIBUTING.md](https://github.com/liuderchi/atom-i18n-cson/blob/master/CONTRIBUTING.md) for PR style guide and more info


## Packages/CSON/file Required Translation (total 30. updated Dec 13 16')

list core packages has cson files of menu item by using [script/listPackageWithMenuCson.js](https://github.com/liuderchi/atom-i18n-cson/blob/master/script/listPackageWithMenuCson.js)

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

  ---

  - [ ] `menus/darwin.cson`
  - [ ] `menus/linux.cson`
  - [ ] `menus/win32.cson`

  ---

  - [x] `src/reopen-project-menu-manager.js`


## TODO

  - [x] create custom branch of atom fork

  - [ ] create github repo to accept i18n contribution
      - [x] repo supply JSON content via github API
      - [x] list of core modules require translation
          - list packageDependencies in `package.json` like `./menus/*.cson`
      - [x] list of scripts adding menu/context-menu
      - [x] build flow and description in README.md
      - [x] CONTRIBUTE.md
          - [x] PR guide (one branch + multiple folders)
      - [ ] consider ATOM binary download?
          - [creating release along with binary](https://help.github.com/articles/creating-releases/)
      - [ ] util script translate local `*.cson` under `.atom/packages/*/menus/`
      - [ ] test script that merging all `*.cson` and check size of big menu labels
      - [ ] i18n demo animation with hotkey support

  - [x] refine script/listPackageWithMenuCson.js
      - [x] package.json
  - [x] refine `i18n.js` code
      - [x] collection of core packages
      - [x] argument parsing
      - [x] test translation of *context menus*
  - [ ] survey ATOM API to change menu item content in run time
