// 效果：头部悬浮
// window.onload = function(){
//     var include = document.getElementsByClassName('include')[0];
//     window.onscroll = function(){
//         var st = document.documentElement.scrollTop||document.body.scrollTop;
//         if (st>180) {
//             include.style.position = 'fixed'
//         }else{
//             include.style.position='static'
//         }
//     }
// }
// 放大镜
var sp0 = document.getElementById('sp0');
var sp1 = document.getElementById('sp1');
var zuo = document.getElementById('zuo');
var you = document.getElementById('you');
sp0.onclick = function(){
    sp0.style.border = '2px solid #ff9003';
    sp1.style.border = '2px solid #fff';
    ha0.setAttribute("src",'img/pp0.jpeg');
    Bimg.setAttribute('src','img/pp0.jpeg');
}
sp1.onclick = function(){
    sp0.style.border = '2px solid #fff';
    sp1.style.border = '2px solid #ff9003';
    ha0.setAttribute("src",'img/pp1.jpeg');
    Bimg.setAttribute('src','img/pp1.jpeg');
}
zuo.onclick = function(){
    sp0.style.border = '2px solid #ff9003';
    sp1.style.border = '2px solid #fff';
    ha0.setAttribute("src",'img/pp0.jpeg');
    Bimg.setAttribute('src','img/pp0.jpeg');
}
you.onclick = function(){
    sp0.style.border = '2px solid #fff';
    sp1.style.border = '2px solid #ff9003';
    ha0.setAttribute("src",'img/pp1.jpeg');
    Bimg.setAttribute('src','img/pp1.jpeg');
}
var pic0 = document.getElementById("pic0");
var big = document.getElementById("big");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var fang = document.getElementById('fang');
pic0.onmouseover = function () {
    slider.style.display = 'block';
    big.style.display = 'block';
}
pic0.onmouseout = function () {
    slider.style.display = 'none';
    big.style.display = 'none';     
}

pic0.onmousemove = function (ev) {
    var ev = ev || window.event;

    var oL = ev.clientX - fang.offsetLeft - slider.offsetWidth / 2;
    var oT = ev.clientY - fang.offsetTop - slider.offsetHeight / 2;

    var oMaxw = pic0.offsetWidth - slider.offsetWidth;
    var oMaxh = pic0.offsetHeight - slider.offsetHeight;

    oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
    oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

    slider.style.left = oL + 'px';
    slider.style.top = oT + 'px';

    var scale = big.offsetWidth / slider.offsetWidth;
    Bimg.style.left = -scale * oL + 'px'
    Bimg.style.top = -scale * oT + 'px'
}

// 化妆品净含量变化
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var ao = document.getElementById('ao');
var bo = document.getElementById('bo');
var arr = document.getElementById('arr');
c1.onclick = function(){
    c1.style.border = '1px solid #ff0853';
    c2.style.border = '';
    c1.style.width = '62px';
    c2.style.width = '30px';
    ao.setAttribute('src','img/duigou.png');
    bo.removeAttribute('src');
    arr.innerHTML ='"150ml"';
    c1.style.cursor = 'pointer';
}
c2.onclick = function(){
    c1.style.border = '1px solid #fff';
    c2.style.border = '1px solid #ff0853';
    c2.style.width = '62px';
    c1.style.width = '30px';
    bo.setAttribute('src','img/duigou.png');
    ao.removeAttribute('src');
    arr.innerHTML ='"200ml"';
    c2.style.cursor = 'pointer';
}
// 库存数量按钮
var cp = document.getElementById('cp');
var cp1 = document.getElementById('cp1');
var cp0 = document.getElementById('cp0');
var value = cp0.value; 
console.log(value);
cp.onclick = function(){
    if (value<2) {
        cp.style.cursor = 'not-allowed';
    }else{
        cp.style.cursor = "pointer";
        cp0.setAttribute('value',--value);       
    } 
} 
cp.onmouseover = function(){  
    if (value<2) {
        cp.style.cursor = 'not-allowed';
    }else{
        cp.style.cursor = "pointer";    
    } 
} 
cp1.onclick = function(){
    if (value>4) {
        cp1.style.cursor = 'not-allowed';
    }else{
        cp.style.cursor = "pointer";
        cp0.setAttribute('value',++value);
    } 
} 
cp1.onmouseover = function(){  
    if (value>4) {
        cp1.style.cursor = 'not-allowed';
    }else{
        cp1.style.cursor = "pointer";
    } 
} 


// 加入购物车
var cross3 = document.getElementById('cross3');
var cha = document.getElementById('cha');
var pay = document.getElementById('pay');
var con = document.getElementById('con');
cross3.onclick = function(){
    div0.style.display ='block';
}
cha.onclick = function(){
    div0.style.display = 'none';
}
pay.onclick = function(){
    div0.style.display = 'none';
}
con.onclick = function(){
    div0.style.display = 'none';
}