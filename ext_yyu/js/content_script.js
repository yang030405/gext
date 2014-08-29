function checkOrUncheckAll (type) {
	console.log("going to invoke 'check / uncheck all' operation");
	if (type == "checkall") {
		jQuery(":checkbox").each(function (index, cb) {
			var cbJQ = jQuery(cb);
			cbJQ.attr("checked", "checked");
		});
	} else if (type == "uncheckall") {
		jQuery(":checkbox").each(function (index, cb) {
			var cbJQ = jQuery(cb);
			cbJQ.removeAttr("checked");
		});
	} else {
		return;
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	checkOrUncheckAll(request.type);
});