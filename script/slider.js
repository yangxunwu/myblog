function init () {
	var imgList = document.getElementsByTagName("img");
	var imgWidth = imgList[0].offsetWidth;
	for(var i = 1; i < imgList.length; i++){
		imgList[i].style.left = imgWidth + "px";
	}
	imgList[0].style.left = "0px";
}
init();


var cur = 0;

function moveAction(element, fin_x, interval){
	var cur_x = parseInt(element.style.left);

	if(element.moveMent){
		clearTimeout(element.moveMent);
	}
	if(cur_x == fin_x){
		return true;
	}
	var dest = 0;
	if(fin_x < cur_x){
		dest = Math.ceil((cur_x - fin_x) / 10);
		cur_x = cur_x - dest;
	}	
	if(fin_x > cur_x){
		dest = Math.ceil((fin_x - cur_x) / 10);
		cur_x = cur_x + dest;
	}
	element.style.left = cur_x + "px";
	element.moveMent = setTimeout(function(){moveAction(element, fin_x, interval)},  interval);
}

function moveLeft() {
	var imgList = document.getElementsByTagName("img");
	var imgWidth = imgList[0].offsetWidth;
	
	if(cur == 0){
		imgList[imgList.length - 1].style.left = imgWidth + "px";
		moveAction(imgList[cur], -imgWidth, 30);
		moveAction(imgList[cur + 1], 0, 30);
		cur++;
	}else{
		if(cur == imgList.length - 1){
			imgList[cur - 1].style.left = imgWidth + "px";
			moveAction(imgList[cur], -imgWidth, 30);
			moveAction(imgList[0], 0, 30);
			cur = 0;
		}else{
			imgList[cur - 1].style.left = imgWidth + "px";
			moveAction(imgList[cur], -imgWidth, 30);
			moveAction(imgList[cur + 1], 0, 30);
			cur++;
		}
	}
	console.log(cur + " " + (imgList.length - 1));
}

function moveRight() {
	var imgList = document.getElementsByTagName("img");
	var imgWidth = imgList[0].offsetWidth;
	if(cur == 0){
		imgList[imgList.length - 1].style.left = -imgWidth + "px";
		moveAction(imgList[imgList.length - 1], 0, 30);
		moveAction(imgList[0], imgWidth, 30);
		cur = imgList.length - 1;
	}else{
		if(cur == 1){
			imgList[cur - 1].style.left = -imgWidth + "px";
			moveAction(imgList[cur], imgWidth, 30);
			moveAction(imgList[cur - 1], 0, 30);
			cur--;
		}else{
			imgList[cur - 1].style.left = -imgWidth + "px";
			moveAction(imgList[cur], imgWidth, 30);
			moveAction(imgList[cur - 1], 0, 30);
			cur--;
			}
	}
}

var btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", moveLeft, false);
btn[1].addEventListener("click", moveRight, false);