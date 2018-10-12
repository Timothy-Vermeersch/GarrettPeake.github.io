function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

console.log("Test");

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
