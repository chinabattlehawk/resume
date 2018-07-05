window.addEventListener('load', function () {
	var topMenus = document.querySelectorAll('#top_menu .item'),
		mainSections = document.querySelectorAll('section.g-wrap[id]');

	setNavFixed();
	switchGallery();
	menuInit(topMenus);
	menuControl(topMenus, mainSections);
	setTimeout(loading, 1000);
	setTimeout(sectionUp, 1000);
	document.addEventListener('scroll', function () {
		setNavFixed();
		menuControl(topMenus, mainSections);
	});
});

function getOffsetTop(selector) {
	var elem = typeof selector === 'object' ? selector : document.querySelector(selector),
		parent = elem.offsetParent,
		top = elem.offsetTop;

	while (parent.tagName !== 'BODY') {
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}

	return top;
}

function loading() {
	var mask = getElement('#loading');

	mask.classList.add("complete");
}

function setNavFixed() {
	var navBar = getElement('#top_nav'),
		method = window.pageYOffset > 0 ? 'add' : 'remove';

	navBar.classList[method]('z-fixed');
}

function setAnchor(a) {
	var id = a.getAttribute('href');

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

function menuInit(menus) {
	for (var i = 0; i < menus.length; i++) {
		var link = menus[i].querySelector('.link');

		link.addEventListener('click', function (ev) {
			ev.preventDefault();
			setAnchor(this);
		});

		menus[i].addEventListener('mouseover', function () {
			this.classList.add('active');
		});

		menus[i].addEventListener('mouseout', function () {
			this.classList.remove('active');
		});
	}
}

function menuControl(menus, sections) {
	var now = window.pageYOffset,
		m = 0;

	for (var i = 1; i < sections.length; i++) {
		var top = sections[i].offsetTop,
			min = sections[m].offsetTop;

		if (Math.abs(top - now) < Math.abs(min - now)) {
			m = i;
		}
	}
	for (var j = 0; j < menus.length; j++) {
		menus[j].querySelector('.link').classList.remove('hover');
	}

	document.querySelector('#top_menu .link[href="#' + sections[m].id + '"]').classList.add('hover');

	if (sections[m].id === 'skills') {
		var values = sections[m].querySelectorAll('.u-value');
		for (var k = 0; k < values.length; k++) {
			values[k].classList.remove('u-skill');
		}
	}

	if (m > 0) {
		for (var n = 0; n <= m; n++) {
			sectionUp(sections[n]);
		}
	}
}

function sectionUp(section) {
	section = section || document.querySelector('section.g-wrap[id]');
	section.classList.remove('z-down');
}

function switchGallery() {
	var buttons = getElement('#sel_btn').children,
		statusBar = getElement('#status_bar');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i]['data-index'] = i;
		buttons[i].addEventListener('click', function () {
			statusBar.className = 'u-value z-sel-' + (this['data-index'] + 1);
		})
	}
}

/*function setAnchor(a) {
	var id = a.getAttribute('href');

	if (id.length > 2) {
		var currentTop = window.pageYOffset,
			targetTop = getOffsetTop(id) < 200 ? 80 : getOffsetTop(id),
			n = 25,
			x = 0,
			t = 200 / n,
			step = (targetTop - currentTop) / n,
			timer = setInterval(function () {
				if (x === n) {
					clearInterval(timer);
					return;
				}
				x++;
				window.scrollTo(0, currentTop + step * x)
			}, t);
	}
}*/