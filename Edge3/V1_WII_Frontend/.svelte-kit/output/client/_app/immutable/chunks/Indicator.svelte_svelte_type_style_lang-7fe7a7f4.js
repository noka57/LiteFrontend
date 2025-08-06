import{w as f}from"./index-733060bd.js";const p=f("");var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var a={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var s=arguments[e];s&&(t=o(t,c(s)))}return t}function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var s in t)a.call(t,s)&&t[s]&&(e=o(e,s));return e}function o(t,e){return e?t?t+" "+e:t+e:t}r.exports?(n.default=n,r.exports=n):window.classNames=n})()})(i);const u=i.exports;export{u as c,p as s};
