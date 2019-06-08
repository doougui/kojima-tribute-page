$(document).ready(function() {
	const divHeight = $('#introduction').height();

	$('.learnMore').bind('click', function() {
		$('html, body').animate({
			scrollTop: divHeight
		}, 500);

		return false;
	});
});