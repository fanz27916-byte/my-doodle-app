# Kids Toys & Games Store Website

A React-based website for a kids toys and games store, generated from a Figma design.

## Features

- 🎨 **Modern design** based on Figma prototype
- 📱 **Fully responsive** layout
- ⚛️ **React components** with clean separation
- 🎯 **Design tokens** for consistent styling
- 🚀 **Optimized performance** with minimal dependencies

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Global styles and design tokens
├── index.js            # Application entry point
└── index.css           # Base styles
```

## Design Tokens

The design uses CSS custom properties extracted from the Figma design:

```css
:root {
  /* Colors extracted from Figma design */
  --color-primary: #332422;
  --color-secondary: #ff7b4d;
  --color-accent-orange: #ffb54a;
  --color-accent-teal: #60bfb2;
  --color-background-light: #ffe1cc;
  --color-text-dark: #332422;
  
  /* Typography */
  --font-heading: 'Gochi Hand', cursive;
  --font-body: 'Baloo 2', sans-serif;
  --font-ui: 'Raleway', sans-serif;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-xxl: 64px;
}
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Generated From

This project was automatically generated from the Figma design:
[Webpage Template - Kids Toys & Games Store Website](https://www.figma.com/design/DS0PS1MP6l9cYFCqyaryTp/Webpage-Template---Kids-Toys---Games-Store-Website--Community-)

## License

MIT