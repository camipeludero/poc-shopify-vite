# POC Shopify Vite

This is a proof of concept (POC) Shopify theme built with Vite as the build tool. The purpose of this project is to demonstrate how Vite can be used to improve the development experience for Shopify themes by integrating technologies like TailwindCSS, SCSS and Vue 3.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Base Theme](#theme)
- [Tech Stack](#techstack)
- [Project Structure](#structure)

## Install

To install this project on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/camipeludero/poc-shopify-vite.git
```

2. Navigate to the project directory:

```bash
cd poc-shopify-vite
```

3. Install the dependencies:

```bash
npm install
```

4. Complete the name of your store inside `package.json`:

```bash
 "login": "shopify2 login --store [STORE_URL]",
```

5. Login on your Shopify store:

```bash
npm run login
```

6. Start the development server:

```bash
npm start
```

7. Navigate to `http://127.0.0.1:9292/` in your web browser to view the development version of the theme.

## Usage

To use this project as a starting point for building a Shopify theme, you can modify the code in the `src` directory and add your own functionality.

To deploy the theme to your Shopify store, follow these steps:

- Deploy a new theme:

```bash
npm run deploy:new
```

- Deploy and update an existing theme

```bash
npm run deploy
```

### Theme

> This theme uses [Sense]({https://themes.shopify.com/themes/sense/styles/default}) as its base theme.

To add another theme:

1. Replace the files inside `/shopify` with the new Shopify theme.

2. Import `main.js` and `main.css` files on `/shopify/layout/theme.liquid`

```bash
{{ 'main.css' | asset_url | stylesheet_tag }}
```

```bash
 <script
    type='text/javascript'
    id='mainScript'
    src='{{ 'main.js' | asset_url }}'
    async
  ></script>
```

3. Run `npm start` to preview the theme on local

### Tech Stack

- [Liquid](https://shopify.dev/api/liquid) / HTML
- [Tailwind](https://tailwindcss.com/docs) + [SCSS](https://sass-lang.com/documentation)
- [Vue (3.x)](https://vuejs.org/guide/introduction.html) & [Vuex](https://vuex.vuejs.org/)
- [Vite](https://vitejs.dev/config/)
- [Shopify CLI 2.0](https://shopify.dev/docs/themes/tools/cli)
- [NPM](https://www.npmjs.com/)

### Project Structure

**./**

- [.gitignore](./.gitignore): Config file for [gitignore](https://git-scm.com/docs/gitignore)
- [package.json](./package.json): Project metadata & scripts and NPM package dependencies ([ref](https://docs.npmjs.com/cli/v7/configuring-npm/package-json))
- [package-lock.json](./package-lock.json): Lockfile for NPM package dependencies ([ref](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json))
- [vite.config.js](./webpack.common.js): Config for [Vite](https://vitejs.dev/config/)
