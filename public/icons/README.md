# PWA Icons

This directory contains icons for the Progressive Web App.

## Required Icons

The following icon sizes are required for full PWA support:
- 72x72.png
- 96x96.png
- 128x128.png
- 144x144.png
- 152x152.png
- 192x192.png
- 384x384.png
- 512x512.png

## Generating Icons

You can use the provided `icon.svg` as a base and convert it to PNG files of the required sizes.

### Using ImageMagick (if installed):
```bash
for size in 72 96 128 144 152 192 384 512; do
  convert -background none -resize ${size}x${size} icon.svg icon-${size}x${size}.png
done
```

### Using Online Tools:
- Upload `icon.svg` to a tool like https://realfavicongenerator.net/
- Or use https://www.pwabuilder.com/imageGenerator

### Using Node.js:
You can use packages like `sharp` or `jimp` to programmatically generate icons from the SVG.

## Apple Touch Icon

Also create `apple-touch-icon.png` (180x180) in the `public` directory root for iOS devices.

