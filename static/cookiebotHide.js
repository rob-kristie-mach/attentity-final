window.addEventListener("CookiebotOnDialogInit", function() {
if (Cookiebot.getDomainUrlParam("CookiebotScan") === "true") {
Cookiebot.setOutOfRegion();
}
});