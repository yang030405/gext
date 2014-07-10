function initEvent() {
	initCheckAllButton();
	
	function initCheckAllButton () {
		var inputJQ = jQuery("#checkall_button");
		inputJQ.click(function() {
			var checkall = inputJQ.data("checkall");
			if (!checkall) {
				inputJQ.val("uncheck all");
				inputJQ.data("checkall", true);
				chrome.tabs.query({active : true, currentWindow : true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {type : "checkall"});
				});
			} else {
				inputJQ.val("check all");
				inputJQ.data("checkall", false);
				chrome.tabs.query({active : true, currentWindow : true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {type : "uncheckall"});
				});
			}
		});
	}
}

jQuery(document).ready(function() {
	initEvent();
});
