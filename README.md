# Phaser 3 TypeScript Template

A straightforward, non-overloaded template for developing web-based games using Phaser 3, TypeScript, and Webpack. Optimized for simple development and deployment, this template serves as an ideal starting point for your Phaser game projects.

## Features

- **Phaser 3:** Utilizes the latest version of Phaser for creating 2D games.
- **TypeScript:** Leverages TypeScript for type safety and better development experience.
- **Webpack:** Configured with separate development and production builds for efficient workflow.
- **Custom Font Integration:** Demonstrates how to include and use custom fonts.
- **Asset Management:** Setup includes Webpack configuration for managing game assets.
- **Development Server:** Configured Webpack Dev Server for live reloading during development.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/phaeton2040-AI/phaser-starter-typescript-project.git
cd phaser-starter-typescript-project
```

Install dependencies:

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

### Development

To start the development server:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

This will open your default browser to `http://localhost:8080/` where you can see your game running.

### Building for Production

To create a production build:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

Your production-ready files will be in the `dist/` directory.

## Project Structure

- `src/`: Source files for your game, including TypeScript and CSS.
- `assets/`: Game assets like images, fonts, and audio.
- `dist/`: The output directory for Webpack builds.
- `webpack.common.js`: Common Webpack configuration.
- `webpack.dev.js`: Webpack configuration for development.
- `webpack.prod.js`: Webpack configuration for production.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `README.md`: This file.

## Customizing

- **Fonts:** To include custom fonts, adjust the Webpack configuration and CSS as demonstrated in the project.
- **Phaser Configuration:** Modify `src/app.ts` to change the initial Phaser game configuration.
- **Assets:** Place new assets in the `assets/` directory and reference them in your game scenes.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to improve the template or add new features.

## License

This project is open source and available under the [MIT License](https://opensource.org/license/mit/).
