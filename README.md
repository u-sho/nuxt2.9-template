# nuxt2.9-template

[日本語版](https://github.com/u-sho/nuxt2.9-template/blob/master/README.ja.md)

This is a starter template for nuxt@^2.9 & TypeScript & jest.  
Now, this is working on nuxt@2.11.0

> This is like a fork of [starter-template](https://github.com/nuxt-community/starter-template) provided by nuxt-community.

> **NOTE**: If [`create-nuxt-app-ts`](https://github.com/nuxt/create-nuxt-app/pull/328) is merged, this repository will be archived.

## Starter

A [Nuxt.js](https://github.com/nuxt/nuxt.js) starter project template without the distraction of a complicated development.

- nuxt.config.ts
- tsconfig.json
- .eslintrc.js
- stylelint.config.json
- .prettierrc
- axios *
- ts-jest *
- sass-loader *

You can [customize](#customization) * options

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npx vue init u-sho/nuxt2.9-template/ my-project
$ cd my-project

# install dependencies
$ yarn install # Or npm install
```

> Makesure to use a version of vue-cli >= 2.1 (`vue -V).

### If you need git

``` bash
$ git init
```

> NOTE: If you don't use git, `.gitignore` is important. `.gitignore` is used by ESlint & stylelint.

## Usage

### Development

``` bash
# serve with hot reloading at localhost:3000
$ yarn dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# build for production and launch the server
$ yarn build
$ yarn start
```

### Generate

``` bash
# generate a static project
$ yarn generate
```

### Linting

``` bash
# eslint for javascript, typescript, and vue file
$ yarn lint
$ yarn lint --fix

# stylelint for css and vue file
$ yarn slint
$ yarn slint --fix
```

### Type Check

``` bash
# typecheck of typescript
$ yarn tsc
```

### Test

``` bash
# test vue components by jest or ts-jest
$ yarn test
```


## Customization

- Uninstall Sass: check this [PR #1](https://github.com/u-sho/nuxt2.9-template/pull/1) and edit `package.json`, `stylelint.config.js`. After that, remove `node_modules/` and Re:`yarn install`

- Uninstall jest: check this [PR #3](https://github.com/u-sho/nuxt2.9-template/pull/3) and edit `package.json`. After that, remove `test/` and `node_modules` and Re:`yarn install` 

- Uninstall axios： check this [PR #5](https://github.com/u-sho/nuxt2.9-template/pull/5) and edit `package.json`, `nuxt.config.ts`, `tsconfig.json`. After that, remove `node_modules/` and Re:`yarn install`

- Uninstall TypeScript: Don't use this. Use [nuxt-create-app](https://github.com/nuxt/create-nuxt-app) 

- Install PWA： check [pwa.nuxtjs.org/](https://pwa.nuxtjs.org/) and edit `package.json` and `nuxt.config.ts`
