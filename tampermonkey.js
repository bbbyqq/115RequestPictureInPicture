// ==UserScript==
// @name         115实现画中画
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在115播放界面加入画中画按钮!
// @author       bbbyqq
// @match        *://v.anxia.com/*
// @grant        none
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
  btn.onclick = function () {
    document.getElementById('js-video').requestPictureInPicture()
  }
})()
