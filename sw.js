const CACHE_NAME = 'chess-quiz-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // 앱 설치 조건(Fetch 핸들러) 통과를 위한 코드
    e.respondWith(
        fetch(e.request).catch(() => new Response("오프라인 상태입니다."))
    );
});
