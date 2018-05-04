(function ($) {
$.fn.typewriter = function (options) {
	/*默认的参数设置*/
	var defaults = {
		typingSpeed: 75 //打字速度（值越大打字速度越慢）
	};
	
	//把传入的参数 options 合并到 defaults 里并赋给 settings；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数
	var settings = $.extend(defaults, options);
	
	this.each(function(index, element) {
		var curEle = $(this), curEleStr = curEle.html(), progress = 0;
		curEle.html('');
		var timer = setInterval(function() {
			var current = curEleStr.substr(progress, 1);
			if (current == '<') {
				progress = curEleStr.indexOf('>', progress) + 1;
			} else {
				progress++;
			}
			//curEle.html(curEleStr.substring(0, progress) + (progress & 1 ? '_' : ''));
			curEle.html(curEleStr.substring(0, progress) + ((progress % 2)==0 ? '_' : ''));
			if (progress >= curEleStr.length) {
				clearInterval(timer);
				if(curEle.html().substr(curEle.html().length-1, 1)=="_"){
					curEle.html(curEle.html().substring(0, curEle.html().length-1));
				}
			}
		}, settings.typingSpeed);
	});
	return this;
};
})(jQuery);