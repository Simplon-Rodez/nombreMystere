(function($) {
	$('#nb-game').each(function() {
		var $f = $(this),
			$i = $('[type=number]', $f),
			$count = $('.counter span', $f),
			$msg = $('.message', $f),
			rest,
			nbMystery;

		/* Init variables */
		var setNumbers = function() {
			rest = 10;
			nbMystery = Math.floor(Math.random() *100 + 1);

			$count.html(rest);
		}
		setNumbers();


		$f.on('submit', function() {
			var iVal = parseInt($i.val()),
				setMsg;

			if(iVal) {
				rest --;

				if(iVal == nbMystery) {
					setMsg = msg.success;
					setNumbers();
				} else if(rest == 0) {
					setMsg = msg.loose;
					setNumbers();
				} else if(iVal > nbMystery) {
					setMsg = msg.toohigh;
				} else {
					setMsg = msg.toolow;
				}

				$count.html(rest);
				$msg.text(setMsg);
			}

			/* Stop propagation */
			return false;
		});
	});
})(jQuery);