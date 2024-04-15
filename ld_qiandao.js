// ==UserScript==
// @name         链滴每日签到
// @namespace    pakeh2866
// @version      0.1
// @description  链滴每日签到
// @author       pakeh2866
// @match        https://ld246.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ld246.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = onloadStart()
    // Your code here...
})();

//判断是否登录
function checkLogin() {
    var checkLogin = document.getElementById('signOut');
    console.log(checkLogin);
    if (checkLogin) {
      isLogin = true;
    }
    console.log('isLogin:', isLogin);
}

// 执行绿色签到click
function qd_button(){
   var button_click = document.getElementsByClassName("btn green");
   console.log(button_click[0])
   button_click[0].click();
}

function onloadStart(){
    checkLogin()
    //qd_button()
}


