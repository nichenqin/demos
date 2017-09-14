self.addEventListener("install", e => {
  console.log("[service worker] Installing Service Worker...", e);
});

self.addEventListener("activate", e => {
  console.log("[service worker] Activating Service Worker...", e);
});
