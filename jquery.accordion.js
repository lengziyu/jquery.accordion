/*
* jquery.accordion 0.0.1
* Copyright (c) 2015 lengziyu http://lengziyu.com/
* Date: 2015-10-10
*/
;(function($){
	$.fn.accordion = function(opts){
		//默认值
		var defaults = {
				max: "620px",
				min: "140px",
				speed: "1000",
				lazyload:true
		}

		var opts = $.extend(defaults, opts);

		//懒加载
		this.each(function(){
			var t = $(this),
					m = t.children(),
					c = m.children();

			//触发事件
			m.find(".active a").hide();
			m.on("mouseenter","li",function(){

				//如果开启懒加载并且data-src属性存在
				if(opts.lazyload == true && typeof($(this).attr("data-src")) !== "undefined"){
				  var src = $(this).attr("data-src");
				  $(this).css("background-image","url(" + src +")").removeAttr("data-src");
				}

				$(this).addClass('active')
							.animate({width:opts.max},opts.speed)
							.children().fadeOut(opts.speed)
							.parent().siblings().removeClass('active')
							.animate({width:opts.min},opts.speed)
							.children().show(opts.speed);

			})
		})
	}

})(jQuery);
