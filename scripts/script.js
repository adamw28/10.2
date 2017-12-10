$(function(){
	var carouselList = $("#carousel #inside");
	var findLi = $("#controls li");
	var activeItem = $('#controls').find("li.active");
	var findId=findLi.click(function(e) {
		changeSlide();return e.target.id;
	});
	setInterval(changeSlideLeft, 5000);
	function changeSlideLeft(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		active();
	}
	function changeSlideRight(){
		carouselList.animate({'marginRight':-400}, 500, moveLastSlide);
		active();
	}
	function changeSlide(){
		var marginx=-400*findId;
		carouselList.animate({'marginLeft':marginx}, 500, moveSlide);
		active();
	}
	function active(){
		var findItem = $('#controls').find('li');
		$(this).toggleClass();
		activeItem.toggleClass();
		activeItem=$(this);
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginRight:0});
	}
	function moveSlide(){
		var findItem = carouselList.find(this);
		var firstItem = carouselList.find("li:first");
	}
	$('#left').on('click',function(event){
		changeSlideRight();
		console.log('right');
	});
	$('#right').on('click',function(event){
		changeSlideLeft();
		console.log('left');
	});
});