document.addEventListener('DOMContentLoaded', function () {
  var b = document.getElementById("button_id");
	b.addEventListener('click', function () {
		alert("here");
  	chrome.tabs.create({'url': 'chat_tab.html'})
	});
});