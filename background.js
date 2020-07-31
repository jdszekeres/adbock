chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.doubleclick.net/*"] },
  ["blocking"]
);
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.taboola.com/*"] },
  ["blocking"]
);
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.buysellads.com/*"] },
  ["blocking"]
);

