// ==UserScript==
// @name         115画中画
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  在115播放界面加入画中画按钮!
// @author       bbbyqq
// @match        *://v.anxia.com/*
// @grant        GM_addStyle
// @license      bbbyqq
// ==/UserScript==

(function () {
  'use strict'
  const menu = document.querySelector('.bar-side ul')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const i = document.createElement('i')
  const div = document.createElement('div')
  a.href = 'javascript:;'
  a.className = 'btn-opt'
  i.className = 'icon-operate iop-picture'
  const css = `
  .icon-operate.iop-picture {
     background-position-x: -200px;
  }`
  GM_addStyle(css) // GM_addStyle动态添加css
  div.textContent = '画中画'
  div.className = 'tooltip'
  a.appendChild(i)
  a.appendChild(div)
  li.appendChild(a)
  menu.insertBefore(li, menu.childNodes[4])

  const videoElement = document.getElementById('js-video')
  // 绑定按键点击功能
  a.onclick = function () {
    if (document.pictureInPictureEnabled && !videoElement.disablePictureInPicture) {
      try {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture()
        }
        videoElement.requestPictureInPicture()
      } catch (err) {
        console.error(err)
      }
    }
  }
})()
