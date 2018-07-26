(() => {
	var view = getElement('#top_menu .item');
	var controller = {
		view: null,
		bindEvents() {
			for (let i = 0; i < this.view.length; i++) {
				let item = this.view[i],
					link = this.view[i].querySelector('.link');

				link.addEventListener('click', ev => {
					this.setAnchor(ev.currentTarget);
					ev.preventDefault();
				});

				item.addEventListener('mouseover', () => {
					this.active(item);
				});

				item.addEventListener('mouseout', () => {
					this.deactive(item);
				});
			}
		},
		init(view) {
			this.view = view;
			this.bindEvents();
		},
		active(view) {
			view.classList.add('active');
		},
		deactive(view) {
			view.classList.remove('active');
		},
		setAnchor(view) {
			var id = view.getAttribute('href');

			if (id.length > 2) {
				var targetTop = getOffsetTop(id) < 200 ? 80 : getOffsetTop(id),
					currentTop = window.pageYOffset,
					step = targetTop - currentTop >= 0 ? 30 : -30,
					timer = setInterval(function () {
						if (Math.abs(currentTop - targetTop) <= Math.abs(step)) {
							clearInterval(timer);
							window.scrollTo(0, targetTop);
						} else {
							window.scrollTo(0, currentTop += step);
						}
					}, 10);
			}
		}
	};

	controller.init(view);
})();