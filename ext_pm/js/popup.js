function initEvent () {
	popupMovieList();
	
	function popupMovieList () {
		var ttmjURL = "http://www.ttmeiju.com/meiju/Movie.html";
		jQuery.get(ttmjURL, function (data) {
			jQuery(data).find("#midder .seedlistdiv tr").each(function (index, tr) {
				if (index == 0 || index == 22 || index == 22) {
					return true;
				}
				
				jQuery(tr).find("td").each(function (index, td) {
					if (index == 4 || index == 5 || index == 6 || index == 7) {
						jQuery(td).remove();
						return true;
					}
					
					var aJQ = jQuery(td).find("a");
					var urlOnA = aJQ.attr("href");
					aJQ.click(function () {
						chrome.tabs.create({url: urlOnA, active: true});
					});
				});
				
				jQuery("#table_movies").append(tr);
			});
		});
	}
}

jQuery(document).ready(function () {
	initEvent();
});
