// 效果：头部悬浮
window.onload = function(){
	var include = document.getElementsByClassName('include')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop||document.body.scrollTop;
		if (st>180) {
			include.style.position = 'fixed'
		}else{
			include.style.position='static'
		}
	}
}
// 效果：无缝轮播
//ul动起来
var ul = document.getElementById("notice0");
// console.log(ul.getBoundingClientRect());
// console.log(ul.offsetHeight)
// console.log(ul.offsetWidth)
// console.log(ul.offsetLeft)
// console.log(ul.offsetTop)

function show() {
	var top = ul.offsetTop - 1; //获取top值
	ul.style.top = top + "px"; //设置top值
//走完再返回
	if (-1 * ul.offsetTop >= ul.offsetHeight) {
		ul.style.top = 0;
    }
}
    var t = setInterval(show, 10);
    //li添加鼠标移入移出事件
    var li = document.getElementsByTagName("li");
   	for (var i = 0; i < li.length; i++) {
    //移出事件
    	li[i].onmouseout = function () {
    	//不能加 var
        	t = setInterval(show, 10);
        };
            //移入事件
        li[i].onmouseover = function () {
        	clearInterval(t);
        };
    }

//效果：下拉框显现（value值）

var money = document.getElementsByClassName("money");
console.log(money[0].value);
money[0].onchange=function(){
    var dol = document.getElementById("dol");   
    var val = money[0].value;
    dol.innerHTML="￥"+val;
}

//轮播图
var middle = document.getElementById('middle');
var slider = document.getElementById('slider');
var lef = document.getElementById('lef');
var rig = document.getElementById('rig');
var oNavlist = document.getElementById('nav').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
middle.onmouseover = function () {
    animate(lef, {
        opacity: 0.6
    })
    animate(rig, {
        opacity: 0.6
    })
    clearInterval(timer); //图片停止滚动
}
middle.onmouseout = function () {
    animate(lef, {
        opacity: 0
    })
    animate(rig, {
        opacity: 0
    })
    timer = setInterval(next, 3000); //图片开始接着滚动
}
rig.onclick = next;
lef.onclick = prev;

function next() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(slider, {
        left: -798 * index
    }, function () {
        if (index == 7) {
            slider.style.left = '-798px';
            index = 1;
        }
        isMoving = false;
    });
}
function prev() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index--;
    navmove();
    animate(slider, {
        left: -798 * index
    }, function () {
        if (index == 0) {
            slider.style.left = '-4788px';
            index = 6;
        }
        isMoving = false;
    });
}
//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
    oNavlist[i].index = i;
    oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(slider, {
            left: -798 * index
        });
    }
}
//图片切换时按钮样式跟着切换
function navmove() {
    for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
    }
    if (index > 6) {
        oNavlist[0].className = "active";
    } else if (index <= 0) {
        oNavlist[5].className = "active";
    } else {
        oNavlist[index - 1].className = "active";
    }
}
//页面打开时自动滚动切换
timer = setInterval(next, 2000);

function getStyle(obj, attr) { //返回值带有单位px
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            (function (attr) {
                if (attr == "opacity") {
                    var now = parseInt(getStyle(obj, attr) * 100);
                    var dest = json[attr] * 100;
                } else {
                    var now = parseInt(getStyle(obj, attr));
                    var dest = json[attr];
                }
                var speed = (dest - now) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (now != dest) {
                    flag = false;
                    if (attr == "opacity") {
                        obj.style[attr] = (now + speed) / 100;
                    } else {
                        obj.style[attr] = now + speed + "px";
                    }
                }
            })(attr);
        }
        if (flag) {
            clearInterval(obj.timer);
            callback && callback(); //如果回调函数存在，就调用回调函数
        }
    }, 30);
}    
// 侧栏

var yi = document.getElementById('yi');
var er = document.getElementById('er');
var san = document.getElementById('san');
var si = document.getElementById('si')
var img14 = document.getElementById('img14');
yi.onmouseover=function(e){
    yi.style.left = 1150 +'px';
}
yi.onmouseout=function(e){
    yi.style.left = 1235+'px';
}
er.onmouseover=function(e){
    er.style.left = 1150 +'px';
}
er.onmouseout=function(e){
    er.style.left = 1235+'px';
}
san.onmouseover=function(e){
    san.style.left = 1150 +'px';
    img14.setAttribute('src','img/erwei.png');
}
san.onmouseout=function(e){
    san.style.left = 1235+'px';
    img14.setAttribute('src','img/serwei.png');
}
si.onmouseover=function(e){
    si.style.left = 1150 +'px';
}
si.onmouseout=function(e){
    si.style.left = 1235+'px';
}


