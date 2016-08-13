var sniffer = new CapyTracker({
    target: window,
    api: 'http://localhost:3000/api',
    time: true
});
sniffer.start();
