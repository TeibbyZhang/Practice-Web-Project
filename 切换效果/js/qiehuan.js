// 切换内容个数
var len = $(".select_box > li").length;
// 单次切换移动距离
var animate_width = $(".select_box > li:first").width();
// 初始化切换索引
var lunbo_index = 0;

// 下一页
function prevPage() {
	if (lunbo_index > 0) {
		lunbo_index--;
		$(".select_box").stop().animate({"left": -(lunbo_index * animate_width) + "px" },600);
	} else {
		lunbo_index = len - 1;
		$(".select_box").stop().animate({"left": -animate_width * (len - 1) + "px"},600);
	}
		
}

// 上一页
function nextPage() {
	if (lunbo_index < len - 1) {
		lunbo_index++;
		$(".select_box").stop().animate({"left": -(lunbo_index * animate_width) + "px" },600);
	} else {
		lunbo_index = 0;
		$(".select_box").stop().animate({"left": 0 },600);
	}
}

$(document).ready(function() {
	// 根据系统数量显示/隐藏上一页下一页
	if($(".select_box > li").length <= 1) {
		$(".prev, .next").hide();
	}
});

var autoChangePages = setInterval(nextPage, 3000);

$(".select_box > li, .next, .prev").mouseover(function() {
	clearInterval(autoChangePages);
});

$(".select_box > li, .next, .prev").mouseout(function() {
	autoChangePages = setInterval(nextPage, 3000);
});