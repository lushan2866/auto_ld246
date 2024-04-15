// ==UserScript==
// @name         链滴每日签到
// @namespace    pakeh2866
// @version      0.1
// @description  链滴每日签到
// @author       pakeh2866
// @match        https://ld246.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ld246.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

function qianDao(){
    
}

function issign90{
   var signOutElement = document.getElementById('signOut');

    // 如果该元素存在，则将issignin的值设为true
    if (signOutElement) {
      issignin = true;
    }

    // 输出issignin的值，用于验证结果
    console.log('issignin:', issignin);
}
