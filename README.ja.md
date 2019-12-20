# nuxt2.9-template

[English version](https://github.com/u-sho/nuxt2.9-template/blob/master/README.md)

これは nuxt@^2.9 + TypeScript + jest のスターターテンプレートです。  
現在は nuxt@2.11.0 まで対応確認済です。

> これは nuxt-community から出ていた [starter-template](https://github.com/nuxt-community/starter-template) の fork みたいなものです。

## Starter

これがあれば複雑な [Nuxt.ts](https://github.com/nuxt/nuxt.js) の設定をすっ飛ばして開発を始められます。

## インストール

これは [vue-cli](https://github.com/vuejs/vue-cli) 上で動作します。

``` bash
$ npx vue init u-sho/nuxt2.9-template/ my-project
$ cd my-project

# install dependencies
$ yarn install # Or npm install
```

> vue-cli のバージョンが 2.1 以上であることを確認してください (`vue -V`)

### git を導入する

``` bash
$ git init
```

> 注意: もしもあなたが git を使わないとしても，`.gitignore` は大切なファイルです。ESlint と stylelint で使われています。

## 使い方

### Development

``` bash
# localhost:3000 でホットリロードしながらローカルサーバが立ちます
$ yarn dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# production モードでビルドしてサーバーを立ち上げます
$ yarn build
$ yarn start
```

### Generate

``` bash
# 静的なプロジェクトファイルを製成します
$ yarn generate
```

### Lint

``` bash
# JavaScript, TypeScript, Vue ファイルに対して ESlint を実行します
$ yarn lint
# 警告を quick fix します。
$ yarn lint --fix

# CSS, SCSS, Vue ファイルに対して stylelint を実行します 
$ yarn slint
# 警告を quick fix します。
$ yarn slint --fix
```

### 型チェック

``` bash
# TypeScript の型チェックをします。
$ yarn tsc
```

### テスト

``` bash
# Vue コンポーネントを jest を使ってテストします
$ yarn test
```

## カスタム

- Sass が不要： このPR([#1](https://github.com/u-sho/nuxt2.9-template/pull/1)) を参考にpackage.json と stylelint.config.js から scss 関連の記述を取り除いたあと，node_modules/ 一旦消して yarn install し直すと良いと思います。

- jest が不要： このPR([#3](https://github.com/u-sho/nuxt2.9-template/pull/3)) を参考に package.json から jest 関連の記述を取り除いたあと，node_modules/ と test/ を消して yarn install し直すと良いと思います。

- axios が不要： このPR([#5](https://github.com/u-sho/nuxt2.9-template/pull/5)) を参考に package.json と nuxt.config.ts と tsconfig.json から axios 関連の記述を取り除いたあと，node_modules/ を一旦消して yarn install し直すと良いと思います。

- TypeScript が不要： このレポジトリを使わずに [nuxt-create-app](https://github.com/nuxt/create-nuxt-app) を使えば良いんじゃないかな。

- PWA が必要： こちらをどうぞ [pwa.nuxtjs.org/](https://pwa.nuxtjs.org/)
