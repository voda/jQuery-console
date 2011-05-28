(function( $ ){
	$.console = {
		_console: null,
		create: function() {
			this._console = $('<pre></pre>').css({
				margin: '0',
				padding: '.3em',
				overflow: 'auto',
				height: '60em',
				textAlign: 'left'
			});
			var handle = $('<div></div>')
				.css({backgroundColor: 'gray'})
				.text('Console');
			$('<div></div>').css({
				color: 'white',
				backgroundColor: 'black',
				border: '.3em solid gray',
				position: 'fixed',
				width: '40em',
				top: '1em',
				right: '1em',
				borderRadius: '.6em .6em 0 0'
			}).append(handle)
			.append(this._console)
			.appendTo('body')
			.draggable({
				handle: handle
			})
			.resizable({
				handles: 's, w, sw',
				alsoResize: this._console
			});
		},
		log: function(message) {
			if (!this._console) {
				return;
			}
			this._console.append(document.createTextNode(message + "\n"));
			this._console.scrollTop(this._console[0].scrollHeight);
		},
		dump: function(object) {
			var m = typeof(object);
			var type;
			for (property in object) {
				type = typeof(object[property]);
				m += "\n " + property + ' [' + type + ']';
				if (type != 'function') {
					m += ': ' + object[property];
				}
			}
			this.log(m);
		}
	};
})( jQuery );