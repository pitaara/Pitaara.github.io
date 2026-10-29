// Chhota service worker: sirf "Add to Home screen" ke liye. Koi caching nahi, to purana content nahi atakta.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
