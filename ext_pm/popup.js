function initEvent() {
	var inputJQ = jQuery("#input_id");
	inputJQ.keyup(function () {
		inputJQ.val("33");
	});
}

jQuery(document).ready(function () {
	initEvent();
});
