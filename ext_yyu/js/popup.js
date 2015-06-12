function initEvent () {
	initSearchButton();
	initCheckAllButton();
	
	function initSearchButton () {
		var buttonSubmmitJQ = jQuery("#button_submmit");
		buttonSubmmitJQ.click(function () {
			var keyword = jQuery("#input_keyword").val();
			var searchUrl = "https://kfc/Special:Search?search=" + keyword;
			console.log("searchUrl = " + searchUrl);
			chrome.tabs.create({url: searchUrl, active: true});
		});
	}
	
	function initCheckAllButton () {
		var inputJQ = jQuery("#checkall_button");
		inputJQ.click(function() {
			var checkall = inputJQ.data("checkall");
			if (!checkall) {
				inputJQ.val("uncheck all");
				inputJQ.data("checkall", true);
				chrome.tabs.query({active : true, currentWindow : true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {type : "checkall"});
					console.log("message sent, check all");
				});
			} else {
				inputJQ.val("check all");
				inputJQ.data("checkall", false);
				chrome.tabs.query({active : true, currentWindow : true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {type : "uncheckall"});
					console.log("message sent, uncheck all");
				});
			}
		});
	}
}

jQuery(document).ready(function () {
	initEvent();
});
