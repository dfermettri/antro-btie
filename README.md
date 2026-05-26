# БТИЗ front-end

Static project prepared for Figma-to-HTML/CSS layout work.

## Figma source

- File: [Макеты для Жени](https://www.figma.com/design/k1DYg7LKtayljE3JZ52NnO/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%96%D0%B5%D0%BD%D0%B8?node-id=1-1730&t=x8QXdgntXxf9n1lK-4)
- File key: `k1DYg7LKtayljE3JZ52NnO`
- Target desktop node: `1:1730`
- Target desktop width: `1780px`
- Public reference preview: `assets/images/figma-reference.webp`
- Local extracted preview: `assets/images/figma/thumbnail.png`

The Figma REST API currently returns `403 Invalid token`, so exact layer data,
measurements, text styles, and exportable assets still need Dev Mode/API access
or manual exports. The local `.fig` file contains binary `fig-kiwi` canvas data,
plus extracted PNG assets in `assets/images/figma`.

## Structure

- `index.html` - semantic page scaffold with marked Figma sections.
- `css/styles.css` - reset, design tokens, layout primitives, components, and responsive rules.
- `script.js` - small interaction layer for mobile navigation.
- `assets/images` - exported raster assets from Figma.
- `assets/icons` - exported SVG icons from Figma.
- `assets/fonts` - local fonts, if the design uses custom font files.

## Figma handoff workflow

1. Put exported images into `assets/images` and icons into `assets/icons`.
2. Copy colors, typography, spacing, radius, and shadow values into `:root` in `css/styles.css`.
3. Replace placeholder sections in `index.html` one Figma frame at a time.
4. Keep reusable pieces as components in the CSS `components` layer.
5. Check desktop and mobile widths after each completed section.

## Local preview

Open `index.html` directly in a browser, or run a small static server from this folder.
