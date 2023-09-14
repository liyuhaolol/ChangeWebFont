// ==UserScript==
// @name         修改网页字体
// @namespace    https://github.com/liyuhaolol/ChangeWebFont
// @version      1.0
// @description  覆盖网页的body默认字体样式
// @author       菜狗子
// @updateURL    https://fastly.jsdelivr.net/gh/liyuhaolol/ChangeWebFont/font.js
// @downloadURL  https://fastly.jsdelivr.net/gh/liyuhaolol/ChangeWebFont/font.js
// @match        *://*.taobao.com/*
// @match        *://p-bandai.jp/*
// @match        *://search.p-bandai.jp/*
// @match        *://tamashiiweb.com/*
// @icon         http://www.zku.net/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    * {
        font-family: 'MiSans', 'PingFang SC', 'Microsoft Yahei', Arial, sans-serif;
    }
`);