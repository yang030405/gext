function initEvent () {
	initButtonSubmmit();
	
	function initButtonSubmmit () {
		var buttonSubmmitJQ = jQuery("#button_submmit");
		buttonSubmmitJQ.click(function () {
			var keyword = jQuery("#input_keyword").val();
			var searchUrl = "https://knowledgecenter.zuora.com/Special:Search?search=" + keyword;
			console.log("searchUrl = " + searchUrl);
			chrome.tabs.create({url: searchUrl, active: true});
		});
	}
}

jQuery(document).ready(function () {
	initEvent();
});
