export const appStoreLinks = {
  ios: 'https://apps.apple.com/ng/app/FeyRide-rides/id1234567890',
  android: 'https://play.google.com/store/apps/details?id=com.FeyRiderider.app',
};

export function getStoreLinkByDevice() {
  if (typeof navigator === 'undefined') {
    return appStoreLinks.android;
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);

  if (isIOS) {
    return appStoreLinks.ios;
  }

  if (isAndroid) {
    return appStoreLinks.android;
  }

  return appStoreLinks.android;
}

export function redirectToStoreByDevice() {
  if (typeof window === 'undefined') {
    return;
  }

  window.location.href = getStoreLinkByDevice();
}
