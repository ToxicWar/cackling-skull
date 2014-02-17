jQuery ($) ->
	removeAnimationClass = (elem) ->
		$(elem).attr 'class', ''

	$('#skull-full').on 'click', ->
		$(this).attr 'class', 'pressure'
		# setTimeout(removeAnimationClass(this), 1000)
