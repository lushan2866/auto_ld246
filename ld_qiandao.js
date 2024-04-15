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
    var checkLogin = document.getElementsByClassName('avatar-small');
    console.log(checkLogin);
    if (checkLogin) {
      isLogin = true;
    }}

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

function issign(){
   var signOutElement = document.getElementById('signOut');

    // 如果该元素存在，则将issignin的值设为true
    if (signOutElement) {
      issignin = true;
    }

    // 输出issignin的值，用于验证结果
    console.log('issignin:', issignin);
}

