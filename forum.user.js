// ==UserScript==
// @name         Forum
// @namespace    https://github.com/ScratchAT/CustomForum/
// @version      0.1
// @description  try to take over the world!
// @author       herohamp
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.pathname == "/discuss/-1/"){
        window.location = "/discuss/31/?atprivatesupercoolsohaha";
    }
})();