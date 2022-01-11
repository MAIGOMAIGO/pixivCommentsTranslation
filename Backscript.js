chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status === 'complete' && tab.url.indexOf('https://www.pixiv.net/artworks/') !== -1) {
        chrome.tabs.executeScript(null, { file: './script.js' }, () => {});
    }
});