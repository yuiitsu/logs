
$(function(){

	// 设置html字体大小，做为基数
	var sizeHtml = function(){
		
		var run = function(){
			var floSize = $(window).width()/16;
			floSize = floSize > 45 ? 45 : floSize;
			$('html').css('font-size', floSize + 'px');
		}();
		
		// 屏幕重置
		$(window).resize(function(){
			run();
		});
	}();
})
