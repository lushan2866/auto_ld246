// ==UserScript==
// @name         链滴每日签到
// @namespace    pakeh2866
// @version      0.1
// @description  链滴每日签到
// @author       pakeh2866
// @match        https://ld246.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ld246.com
// @grant        GM_openInTab
// @grant        GM_Info
// ==/UserScript==

(function() {
    'use strict';
    window.onload = onloadStart()
    // Your code here...
})();

var isLogin = false;
var isqd = false;
//判断是否登录
function checkLogin() {
    var checkLogin = document.getElementById('signOut');
    console.log(checkLogin);
    if (checkLogin) {
      isLogin = true;
    }
    console.log('isLogin:', isLogin);
}

//判断网页URL是否为"https://ld246.com/activity/checkin"
function checkURL() {
    var checkURL = GM_Info.script.url;
    console.log(checkURL);

}

//判断是否未签到
function checkqd() {
    var checkqd = document.getElementsByClassName('item item--current');
    console.log(checkqd);
    if (checkqd) {
      isqd = true;
    }
    console.log('isqd:', isqd);
}

// 执行绿色签到click
function qd_button(){
   var button_click = document.getElementsByClassName("btn green");
   console.log(button_click[0])
   //button_click[0].click();
}
/*
function qiandao_page(){
    let iframe =document.createElement("iframe");
    document.lastElementChild.appendChild(iframe);
    iframe.style.display = "none";
    iframe.src ="https://ld246.com/activity/checkin";
}*/

function onloadStart(){
    checkLogin()
    checkqd()
    if(isLogin&&isqd){
        console.log('已登录、未签到')
        //GM_openInTab("https://ld246.com/activity/checkin");
        //qd_button()
        checkURL()
    }
}


