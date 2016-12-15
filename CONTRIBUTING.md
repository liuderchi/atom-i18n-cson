# CONTRIBUTING


## Which Languages can I Contribute?

  - Any language is welcomed. Anyone is welcomed to contribute.
  - Currently the author do not check grammar of i18n content.


## Steps to Contribute by Sending Pull Request

  - fork this repo
  - clone the repo you just forked to your disk

      `git clone https://github.com/liuderchi/atom-i18n-cson.git`

  - change into directory then *create a branch* named as the locale you want to contribute.

      `cd atom-i18n-cson && git checkout -b fr`

  - open the cson file you wanna contribute
      - if your locale is missing, please copy `template_cson` folder and rename it as your locale

      `cp -r template_cson MY_LOCALE`

  - **NOTICE #1** you can **ONLY** translate **value under the key: `label`**
      - for example, let's translate `autoflow.cson`:

```coffee
'menu': [
  {
    'label': 'Edit'
    'submenu': [
      {
        'label': 'Reflow Selection'
        'command': 'autoflow:reflow-selection'
      }
    ]
  }
]
```

and only content `'Edit'` or `'Reflow Selection'` is *valid*

  - **NOTICE #2** for the label containing **hotkey hint** "`&`", it's good to preserve it with braces wrapping at the end.

      - for example let's translate `menus/win32.cson` into Traditional Chinese:

```coffee
'menu': [
  {
    label: '&File'
    submenu: [
      { label: 'New &Window', command: 'application:new-window' }
      # more ...
    ]
  }
]
```

the values `'&File'` ,`'New &Window'` can be translated into `'檔案(&F)'`, `'開新視窗(&W)'`

  - commit the changes and push the branch you created to your remote

      ```
      git add ./
      git commit -m "translate something"
      git push -u origin MY_BRANCH
      ```

  - [create a pull request](https://help.github.com/articles/creating-a-pull-request/)
