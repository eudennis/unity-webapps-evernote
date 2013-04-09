// ==UserScript==
// @name Evernote-Unity-Integration
// @include http://www.evernote.com/*
// @include https://www.evernote.com/*
// @version 0.1
// @author Dennis Altermann
// @require utils.js
// ==/UserScript==
 
window.Unity = external.getUnityObject(1.0);
 
Unity.init({ name: "Evernote",
            iconUrl: 'icon://unity-webapps-evernote',
            onInit: null });
