var adProviders = {
		"iframe":["pos.baidu.com"]
};

function getADProvidersByType (type) {
	if (type == "iframe") {
		return adProviders.iframe;
	}
	return [];
}

function isADProvider (type, url) {
	var iframeADProviders = getADProvidersByType(type);
	
	var match = false;
	jQuery.each(iframeADProviders, function (index, provider) {
		if (url.indexOf(provider) > -1) {
			match = true;
			return false; // break each.
		}
	});
	return match;
}

//TODO here we could remove other elements which relate to this iframe
function removeRelatedElement (eleJQ) {
	eleJQ.remove();
}

function removeADInIFrame() {
	jQuery("iframe").each(function (index, iframe) {
		var iframeJQ = jQuery(iframe);
		var src = iframeJQ.attr("src");
		if (src && isADProvider("iframe", src)) {
			removeRelatedElement(iframeJQ);
		}
	});
}

function removeAds () {
	removeADInIFrame();
}

jQuery(document).ready(function () {
	removeAds();
});