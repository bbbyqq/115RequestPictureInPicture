// ==UserScript==
// @name         115画中画
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  在115播放界面加入画中画按钮!
// @author       bbbyqq
// @match        *://v.anxia.com/*
// @license      bbbyqq
// ==/UserScript==

(function () {
  'use strict'
  const menu = document.querySelector('.bar-side ul')
  const li = document.createElement('li') // 创建一个按钮
  const a = document.createElement('a') // 创建一个按钮
  a.href = 'javascript:;'
  a.textContent = '画中画'
  a.className = 'btn-cle'
  li.appendChild(a)
  menu.insertBefore(li, menu.childNodes[2])

  const videoElement = document.getElementById('js-video')

  // 绑定按键点击功能
  a.onclick = function () {
    if (
      document.pictureInPictureEnabled &&
      !videoElement.disablePictureInPicture) {
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
