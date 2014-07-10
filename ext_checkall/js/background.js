function showPageAction(tabId, changeInfo, tab) {
	if(tab.url.indexOf("localhost:8080/apps/ManageUserRoles.do?method=edit") > -1){
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(showPageAction);