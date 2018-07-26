/*function getElement(str, elem) {
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
}*/

function getElement(selector, target) {
	target = target || document;
	let dom = target.querySelectorAll(selector);
	return dom.length === 1 ? dom[0] : dom;
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

function addZero(num) {
	return num > 9 ? num : '0' + num;
}

function getTime(content) {
	let time = content === undefined ? new Date() : new Date(content),
		year = time.getFullYear(),
		month = addZero(time.getMonth() + 1),
		date = addZero(time.getDate()),
		hour = addZero(time.getHours()),
		minute = addZero(time.getMinutes()),
		second = addZero(time.getSeconds());

	return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
}