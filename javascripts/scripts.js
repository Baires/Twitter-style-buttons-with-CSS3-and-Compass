function centerBoth() {
	$('.icon-container').each(function() {
		$(this).css('margin-left', ($(this).parent().innerWidth() - $(this).outerWidth()) / 2 + 'px');
		$(this).css('margin-top', ($(this).parent().innerHeight() - $(this).outerHeight()) / 2 + 'px');
	});
};
$(function() {
	centerBoth();
});
$('a').click(function(event) {
	event.preventDefault();
});
