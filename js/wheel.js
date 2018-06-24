function getElement(str, elem) {
	elem = elem || document;

	var type = str.charAt(0),
		select = str.substr(1);

	if (type === '#' && document.getElementById) {
		return elem.getElementById(select);
	} else if (type === '.') {
		document.getElementsByClassName = document.getElementsByClassName || function (className) {
			var children = elem.getElementsByTagName('*'),
				elements = [];

			for (var i = 0; i < children.length; i++) {
				var child = children[i],
					classNames = child.className.split(' ');

				for (var j = 0; j < classNames.length; j++) {
					if (classNames[j] === className) {
						elements.push(child);
						break;
					}
				}
			}

			return elements;
		};

		return elem.getElementsByClassName(select);
	} else {
		return elem.getElementsByTagName(str);
	}
}

function creElement(tagName) {
	return document.createElement(tagName);
}

function cancelBubble(ev) {
	ev = ev || window.event;

	if (ev.stopPropagation) {
		ev.stopPropagation()
	} else {
		ev.cancelBubble = true;
	}
}