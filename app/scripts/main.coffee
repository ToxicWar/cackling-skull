jQuery ($) ->
	delay = (ms, func) -> setTimeout func, ms

	$('#skull-full').on 'click', ->
		that = this
		this.style.animation = 'press 500ms 2 alternate'
		this.style.webkitAnimation = 'press 500ms 2 alternate'
		delay 1000, ->
			that.style.animation = ''
			that.style.webkitAnimation = ''
