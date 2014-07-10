chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	if (request.type == "checkall") {
		jQuery(":checkbox").each(function (index, cb) {
			var cbJQ = jQuery(cb);
			cbJQ.attr("checked", "checked");
		});
	} else if (request.type == "uncheckall") {
		jQuery(":checkbox").each(function (index, cb) {
			var cbJQ = jQuery(cb);
			cbJQ.removeAttr("checked");
		});
	} else {
		return;
	}
});