// ==UserScript==
// @name         115画中画
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在115播放界面加入画中画按钮!
// @author       bbbyqq
// @match        *://v.anxia.com/*
// @grant        none
// @license      bbbyqq
// ==/UserScript==

(function () {
  'use strict'
  const headline = document.querySelector('.vt-headline')
  const btn = document.createElement('a') // 创建一个按钮
  btn.textContent = '画中画'
  btn.className = 'btn-opendir'
  btn.href = 'javascript:;'
  headline.appendChild(btn)

  // 绑定按键点击功能
  let flag = false
  btn.onclick = function () {
    flag = !flag
    if (flag) {
      document.getElementById('js-video').requestPictureInPicture()
    } else {
      document.exitPictureInPicture()
    }
  }
})()
