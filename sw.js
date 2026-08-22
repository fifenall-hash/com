// 빈 서비스 워커 (설치 조건 충족용)
self.addEventListener('install', (e) => {
    self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
    // 오프라인 캐싱은 하지 않고 네트워크 요청 통과
});