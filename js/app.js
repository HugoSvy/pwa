if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://hugosvy.github.io/pwa/serviceWorker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}
