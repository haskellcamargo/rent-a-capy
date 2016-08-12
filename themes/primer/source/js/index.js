
var index = function () {
	var definitelyNotATracker = new CapyTracker(window, 'http://localhost/foo/index.php');
	definitelyNotATracker.start();
	window.tracker = definitelyNotATracker;

    // TODO: Add CapyTracker here
	var handleGeoPattern = function(){
		$(".geopattern").each(function(){
			$(this).geopattern($(this).data('pattern-id'));
		});
	}

	return {
		init:function(){
			handleGeoPattern();
		}
	}
};

$(index().init());
