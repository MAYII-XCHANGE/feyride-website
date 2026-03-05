import { useEffect } from 'react';

const assetImageModules = import.meta.glob(
  '/src/assets/**/*.{png,jpg,jpeg,webp,gif,svg,avif}',
  { eager: true, import: 'default' }
);

const srcAssetImages = Object.values(assetImageModules).filter(Boolean);
const publicImages = [
  `${import.meta.env.BASE_URL}favicon.svg`,
  `${import.meta.env.BASE_URL}vite.svg`,
];

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

export default function usePreloadImages() {
  useEffect(() => {
    const urls = [...new Set([...srcAssetImages, ...publicImages])];
    urls.forEach((url) => {
      preloadImage(url);
    });
  }, []);
}
