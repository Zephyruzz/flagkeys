/* Flagkeys service worker — keeps the scanner usable offline.
   Network-first: online visitors always get the latest files;
   the cache is only used when the network is unavailable. */
const CACHE = "flagkeys-v1";
const CORE = ["./", "./index.html", "./mvp.css", "./vendor/jszip.min.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const corePaths = CORE.map((p) => new URL(p, self.registration.scope).pathname);
  const isPage = req.mode === "navigate";
  if (!isPage && !corePaths.includes(url.pathname)) return;

  const key = isPage ? "./index.html" : req;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(key, copy));
        }
        return res;
      })
      .catch(() => caches.match(key).then((hit) => hit || caches.match("./index.html")))
  );
});
