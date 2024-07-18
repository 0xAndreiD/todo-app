self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch("/static/isUnderMaintenance.json")
      .then((response) => {
        if (response.ok) {
          return new Response(
            "<html><body><h1>Site under maintenance</h1></body></html>",
            { headers: { "Content-Type": "text/html" } }
          );
        }
        return fetch(event.request);
      })
      .catch(() => fetch(event.request))
  );
});
