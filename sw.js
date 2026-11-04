// SERVICE WORKER CHO PWA - TOÁN QUỐC TẾ THẦY NGUYỄN ĐÌNH CHINH
// Version 3: Network-First cho HTML để không bao giờ bị dính cache cũ

const CACHE_NAME = 'thaychinh-cache-v3';

self.addEventListener('install', event => {
  // Kích hoạt ngay lập tức worker mới
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // Xóa toàn bộ cache cũ để cập nhật giao diện mới nhất
    caches.keys().then(keys => Promise.all(
      keys.map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

// Chiến lược: Luôn ưu tiên tải từ Mạng (Network-First) cho trang HTML
self.addEventListener('fetch', event => {
  const req = event.request;
  const isHtml = req.mode === 'navigate' || 
                 (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) ||
                 req.url.endsWith('index.html') ||
                 req.url.endsWith('/');

  if (isHtml) {
    // Luôn fetch trực tiếp từ server trước để lấy phiên bản mới nhất
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Với các file tĩnh (ảnh, icon), dùng Stale-While-Revalidate
  event.respondWith(
    caches.match(req).then(cached => {
      const networked = fetch(req).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || networked;
    })
  );
});
