# CONTRIBUTING


## Which Languages can I Contribute?

  - Any language is welcomed. Anyone is welcomed to contribute.
  - Currently the author do not check grammar of i18n content.


## Steps to Contribute by Sending Pull Request

  - fork this repo
  - clone the repo you just forked to your disk
  - change into directory then *create a branch* named as the locale you wanna support
  - open the cson file you wanna contribute
      - if your locale is missing, please copy `template_cson` folder and rename it as your locale

      `cp -r template_cson MY_LOCALE`

  - **NOTICE** you can **ONLY** translate **value under the key: `label`**
      - for example, translate `autoflow.cson`:

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

  - commit the changes and push the branch you created to your remote
  - [create a pull request](https://help.github.com/articles/creating-a-pull-request/)
