# Pyxl FrontEndFrame

This repo contains the basic frontend scaffolding intended to assist in quickly setting up the basic tools you need to get started developing a pure front end.

## Getting Started

These instructions will get you a copy of this scaffolding up and running on your local machine for local development and testing purposes.

### Prerequisites
- `yarn` is used to for the installation process

### Installing for Use
 1. Click 'Use this template' 
 2. Name your repo
 3. Clone your new repo down
 4. Complete `yarn install` or `yarn`
 5. `yarn build`
 6. Test with `yarn start`

## Tasks
We will be using `yarn` and `webpack` for task management.

- `yarn build` : build or update dist
- `yarn start` : update dist on each change and has hot module replacement
- `yarn plop` : creates directories and associated files under source using atomic structure (atom, molecule, organism, template, page)
   - you can modify this under `plopfile.js`

## Tooling includes
- Webpack
   - MiniCssExtract plugin
   - Copy-Webpack-Plugin
   - HTML WP Plugin
   - SVG Sprite HTML Webpack Plugin
- PostCSS
   - Autoprefixer
   - TailwindCSS
   - PurgeCss (installed but not config yet)
- CleanCSS

## Authors
- [Pyxl](https://github.com/thinkpyxl/)
   - [Laura Pinell](https://github.com/lapinell)
   - [Michael Mizner](https://github.com/mizner)

## License

## Acknowledgements
- Thanks to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the readme template