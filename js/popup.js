!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(t.jQuery,t)}(this,function(t,e){"use strict";function n(t,e){return this instanceof n?(this.opts=f({},f(c,e)),this.el=t,void this.init()):new n(t,e)}var i=window,o=document,s=o.documentElement,c={width:500,height:400,offsetX:0,offsetY:0,zIndex:999,closeBtnClass:"popup-close"},f=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},u=function(){return i.innerWidth||s.clientWidth},r=function(){return i.innerHeight||s.clientHeight},h=function(){return i.pageXOffset||s.scrollLeft},l=function(){return i.pageYOffset||s.scrollTop},a=function(t,e){if(e=e||o,e.getElementsByClassName)return e.getElementsByClassName(t);for(var n=[],i=new RegExp("^|\\s+"+t+"\\s+|$"),s=e.getElementsByTagName("*"),c=0,f=s.length;f>c;c++)i.test(s[c].className)&&n.push(s[c]);return n},p=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)};return f(n.prototype,{init:function(){var t=this.opts;f(this.el.style,{position:"absolute",width:t.width+"px",height:t.height+"px",zIndex:t.zIndex}),this.bindEvent()},bindEvent:function(){var t=a(this.opts.closeBtnClass)[0],e=this;p(t,"click",function(){e.close()}),p(o,"keydown",function(t){t=t||window.event;var n=t.which||t.keyCode;27===n&&e.close()}),p(i,"resize",function(){e.setPosition()})},open:function(){this.el.style.display="block",this.setPosition()},close:function(){this.el.style.display="none"},setPosition:function(){var t=this.opts,e=l()+Math.max(0,(r()-t.height)/2),n=h()+Math.max(0,(u()-t.width)/2);f(this.el.style,{top:e+t.offsetY+"px",left:n+t.offsetX+"px"})}}),t&&t.fn?t.fn.popup=function(e){var i=[];return this.each(function(t,o){i.push(new n(o,e))}),{open:function(){t.each(i,function(t,e){e.open()})},close:function(){t.each(i,function(t,e){e.close()})}}}:e&&(e.Popup=n),n});