/*
 * Scripted by J
 * Scale element's font-size when resize event
 * version : 2.0
 */
(function (window, undefined) {
	var fontSizeModule = {};
	window.fontSizeModule = window.fontSizeModule || fontSizeModule;

	fontSizeModule.setData = function () {
		fontSizeModule.target = Array.prototype.slice.call(arguments);
	};
	
	fontSizeModule.convertData = function (target, index) {
		minDeviceSize = 320;
		fontValue = target[index][1];
		return function (callBack) {
			return parseInt( callBack() * this.fontValue / minDeviceSize );
		};
	};
	
	fontSizeModule.getDeivceSize = function() {
		var body = document.body, html = document.documentElement;
		return Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
	};
	
	fontSizeModule.init = function (index) {
		var target = this.target[0];
		var newValue = this.convertData(target, index)(this.getDeivceSize);
		var el = document.getElementsByClassName(target[index][0]);
		for(var i = 0; i < el.length; i++) {
			el[i].style.fontSize = newValue;
		}
	};	
})(window, document);