$.fn.drizzag = function bestowDrizagging() {
	var dragTargetElement = this.get(0);

	this.on("dragenter", "*", function(event) {
		event.stopPropagation();

		if (!dragTargetElement) dragTargetElement = document.documentElement;

		var toEnter = [];
		var current = this;
		while (!current.contains(dragTargetElement)) {
			toEnter.push(current);
			current = current.parentElement;
		}

		for (var i = toEnter.length - 1; i >= 0; i--) {
			$(toEnter[i]).triggerHandler("enter.drizzag", event.originalEvent);
		};

		dragTargetElement = this;
	}).on("dragleave", "*", function(event) {
		event.stopPropagation();

		var current = this;
		while (!current.contains(dragTargetElement)) {
			$(current).triggerHandler("leave.drizzag", event.originalEvent);
			current = current.parentElement;
		}
	})
}
