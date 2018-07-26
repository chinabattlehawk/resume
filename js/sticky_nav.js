(() => {
	let view = getElement('#top_nav');
	let controller = {
		view: null,
		bindEvents() {
			window.addEventListener('load', () => {
				this.active()
			});
			window.addEventListener('scroll', () => {
				this.active()
			});
		},
		init(view) {
			this.view = view;
			this.bindEvents();
		},
		active() {
			let method = window.pageYOffset > 0 ? 'add' : 'remove';
			this.view.classList[method]('z-fixed');
		}
	};
	controller.init(view);
})();