(function() {
	var dd = $('dd');
	dd.filter(':nth-child(n+4)').addClass('hide');

	$('dl').on('mouseenter','dt', (function(event) {
		$(this)
		.next()
			.slideDown(200)
				.siblings('dd')
					.slideUp(200);

	}));

})();