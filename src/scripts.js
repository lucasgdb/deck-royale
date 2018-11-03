// ClipboardJS
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});
// SmallTalk
let smalltalk=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=8)}([function(t,n,e){var r=e(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){var r=e(/*! ../node_modules/css-loader/lib/url/escape.js */2);(t.exports=e(/*! ../node_modules/css-loader/lib/css-base.js */3)(!1)).push([t.i,".smalltalk{display:flex;align-items:center;flex-direction:column;justify-content:center;transition:.2s opacity;bottom:0;left:0;overflow:auto;padding:20px;position:fixed;right:0;top:0;z-index:100}.smalltalk+.smalltalk{transition:ease 1s;display:none}.smalltalk .page{border-radius:3px;background:#fff;box-shadow:0 4px 23px 5px rgba(0,0,0,.2),0 2px 6px rgba(0,0,0,.15);color:#333;min-width:400px;padding:0;position:relative;z-index:0}@media only screen and (max-width:500px){.smalltalk .page{min-width:0}}.smalltalk .page>.close-button{background-image:url("+r(e(4))+");background-position:center;background-repeat:no-repeat;height:14px;position:absolute;right:7px;top:7px;width:14px;z-index:1}.smalltalk .page>.close-button:hover{background-image:url("+r(e(/*! ../img/IDR_CLOSE_DIALOG_H.png */5))+")}.smalltalk .page header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:500px;user-select:none;color:#333;font-size:120%;font-weight:700;margin:0;padding:14px 17px;text-shadow:#fff 0 1px 2px}.smalltalk .page .content-area{overflow:hidden;text-overflow:ellipsis;padding:6px 17px;position:relative}.smalltalk .page .action-area{padding:14px 17px}button{font-family:Ubuntu,Arial,sans-serif}.smalltalk .smalltalk,.smalltalk button{min-height:2em;min-width:4em}.smalltalk button{appearance:none;user-select:none;background-image:linear-gradient(#ededed,#ededed 38%,#dedede);border:1px solid rgba(0,0,0,.25);border-radius:2px;box-shadow:0 1px 0 rgba(0,0,0,.08),inset 0 1px 2px rgba(255,255,255,.75);color:#444;font:inherit;margin:0 1px 0 0;text-shadow:0 1px 0 #f0f0f0}.smalltalk button::-moz-focus-inner{border:0}.smalltalk button:enabled:active{background-image:linear-gradient(#e7e7e7,#e7e7e7 38%,#d7d7d7);box-shadow:none;text-shadow:none}.smalltalk .page .button-strip{display:flex;flex-direction:row;justify-content:flex-end}.smalltalk .page .button-strip>button{margin-left:10px}.smalltalk input{width:100%;border:1px solid #bfbfbf;border-radius:2px;box-sizing:border-box;color:#444;font:inherit;margin:0;min-height:2em;padding:3px;outline:0}.smalltalk button:enabled:focus,.smalltalk input:enabled:focus{transition:border-color .2s;border-color:#4d90fe;outline:0}",""])},function(t,n){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAUklEQVR4XqXPYQrAIAhAYW/gXd8NJxTopVqsGEhtf+L9/ERU2k/HSMFQpKcYJeNFI9Be0LCMij8cYyjj5EHIivGBkwLfrbX3IF8PqumVmnDpEG+eDsKibPG2JwAAAABJRU5ErkJggg=="},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAnUlEQVR4XoWQQQ6CQAxFewjkJkMCyXgJPMk7AiYczyBeZEAX6AKctGIaN+bt+trk9wtGQc/IkhnoKGxqqiWxOSZalapWFZ6VrIUDExsN0a5JRBq9LoVOR0eEQMoEhKizXhhsn0p1sCWVo7CwOf1RytPL8CPvwuBUoHL6ugeK30CVD1TqK7V/hdpe+VNChhOzV8xWny/+xosHF8578W/Hmc1OOC3wmwAAAABJRU5ErkJggg=="},function(t,n,e){var r={},o=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),a=null,u=0,c=[],l=e(/*! ./urls */7);function s(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],n))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(m(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:u}}}}function f(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):e.push(r[a]={id:a,parts:[u]})}return e}function p(t,n){var e=i(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),c.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,e);e.insertBefore(n,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=c.indexOf(t);n>=0&&c.splice(n,1)}function v(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return e.nc}();r&&(t.attrs.nonce=r)}return h(n,t.attrs),p(t,n),n}function h(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function m(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var c=u++;e=a||(a=v(n)),r=g.bind(null,e,c,!1),o=g.bind(null,e,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(n,t.attrs),p(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,e,n),o=function(){d(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){d(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=f(t,n);return s(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var a=e[i];(u=r[a.id]).refs--,o.push(u)}t&&s(f(t,n),n);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete r[u.id]}}}};var b=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function g(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){"use strict";e(0);var r=e(9),o=e(11),i=e(13),a=r(function(t,n,e,r){var o={ENTER:13,ESC:27,TAB:9,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=r.keyCode,a=r.target,c=b(t,["ok","cancel","input"]).map(d);switch(i){case o.ENTER:m(a,t,n,e),r.preventDefault();break;case o.ESC:u(),e();break;case o.TAB:r.shiftKey&&h(t,c),h(t,c),r.preventDefault();break;default:["left","right","up","down"].filter(function(t){return i===o[t.toUpperCase()]}).forEach(function(){!function(t,n){var e=d(document.activeElement),r=/ok|cancel/.test(e),o=n.length-1;if("input"===e||!o||!r)return;var i=function(t){return"cancel"===t?"ok":"cancel"}(e);b(t,[i]).forEach(function(t){t.focus()})}(t,c)})}r.stopPropagation()}),u=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return function(){return t.apply(void 0,e)}}(function(t){var n=document.querySelector(t);n.parentElement.removeChild(n)},".smalltalk"),c={ok:"OK"},l={ok:"OK",cancel:"Cancel"};function s(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).buttons;return t||null}function f(t,n,e,o){var i=n.replace(/\n/g,"<br>");return'<div class="page">\n        <div data-name="js-close" class="close-button"></div>\n        <header>'.concat(t,'</header>\n        <div class="content-area">').concat(i).concat(e,'</div>\n        <div class="action-area">\n            <div class="button-strip">\n                ').concat(function(t){var n=Object.keys(t),e=r(function(t,n,e){return"<button\n            tabindex=".concat(e,'\n            data-name="js-').concat(n.toLowerCase(),'">\n            ').concat(t[n],"\n        </button>")});return n.map(e(t)).join("")}(o),"\n            </div>\n        </div>\n    </div>")}function p(t,n,e,r,u){var c=o(),l=o(),s=new Promise(function(t,n){var e=u&&!1===u.cancel;c(t),l(e?function(){}:n)}),p=f(t,n,e,r),d=i("div",{innerHTML:p,className:"smalltalk"});return b(d,["ok","input"]).forEach(function(t){return t.focus()}),b(d,["input"]).forEach(function(t){t.setSelectionRange(0,e.length)}),function(t,n,e,r){b(n,e).forEach(function(n){return n.addEventListener(t,r)})}("click",d,["cancel","close","ok"],function(t){m(t.target,d,c(),l())}),["click","contextmenu"].forEach(function(t){return d.addEventListener(t,function(){return b(d,["ok","input"]).forEach(function(t){return t.focus()})})}),d.addEventListener("keydown",a(d,c(),l())),s}function d(t){return t.getAttribute("data-name").replace("js-","")}n.alert=function(t,n,e){return p(t,n,"",s(e)||c,e)},n.prompt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0,o=function(){return"password"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type?"password":"text"}(r),i=String(e).replace(/"/g,"&quot;");return p(t,n,'<input type="'.concat(o,'" value="').concat(i,'" data-name="js-input">'),s(r)||l,r)},n.confirm=function(t,n,e){return p(t,n,"",s(e)||l,e)};var v=function(t,n){return n===t?0:n+1};function h(t,n){var e=d(document.activeElement),r=n.length-1,o=n.indexOf(e);b(t,[n[v(r,o)]]).forEach(function(t){return t.focus()})}function m(t,n,e,r){var o=t.getAttribute("data-name").replace("js-","");if(/close|cancel/.test(o))return r(),void u();e(b(n,["input"]).reduce(function(t,n){return n.value},null)),u()}function b(t,n){return n.map(function(n){return t.querySelector('[data-name="js-'.concat(n,'"]'))}).filter(function(t){return t})}},function(t,n,e){t.exports=e(10)},function(t,n,e){"use strict";t.exports=function t(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];if(function(t){if("function"!=typeof t)throw Error("fn should be function!")}(n),r.length>=n.length)return n.apply(void 0,r);var i=function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return t.apply(void 0,[n].concat(r.concat(o)))},a=n.length-r.length-1;return function(t){return[function(n){return t.apply(void 0,arguments)},function(n,e){return t.apply(void 0,arguments)},function(n,e,r){return t.apply(void 0,arguments)},function(n,e,r,o){return t.apply(void 0,arguments)},function(n,e,r,o,i){return t.apply(void 0,arguments)}]}(i)[a]||i}},function(t,n,e){t.exports=e(12)},function(t,n,e){"use strict";t.exports=function(t){var n={value:t};return function(t){return arguments.length?(n.value=t,t):n.value}}},function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var o=e(/*! currify/legacy */14),i=function(t){return document.querySelector('[data-name="'.concat(t,'"]'))},a=o(function(t,n,e){return t.setAttribute(e,n[e])}),u=o(function(t,n,e){return t[e]=n[e]}),c=o(function(t,n){return!t(n)}),l=function(t){return t!=t.toLowerCase()};function s(t){if(t)return i(t)}t.exports=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.dataName,o=n.notAppend,i=n.parent,f=void 0===i?document.body:i,p=n.uniq,d=void 0===p||p,v=r(n,["dataName","notAppend","parent","uniq"]),h=s(e);if(d&&h)return h;var m=document.createElement(t);return e&&(m.dataset.name=e),Object.keys(v).filter(l).map(u(m,n)),Object.keys(v).filter(c(l)).map(a(m,n)),o||f.appendChild(m),m},t.exports.isElementPresent=s},function(t,n,e){t.exports=e(15)},function(t,n,e){"use strict";t.exports=function t(n){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];if(function(t){if("function"!=typeof t)throw Error("fn should be function!")}(n),r.length>=n.length)return n.apply(void 0,r);var i=function(){return t.apply(void 0,[n].concat(r,Array.prototype.slice.call(arguments)))},a=n.length-r.length-1;return function(t){return[function(n){return t.apply(void 0,arguments)},function(n,e){return t.apply(void 0,arguments)},function(n,e,r){return t.apply(void 0,arguments)},function(n,e,r,o){return t.apply(void 0,arguments)},function(n,e,r,o,i){return t.apply(void 0,arguments)}]}(i)[a]||i}}]);

let currentDeck = [0, 0, 0, 0, 0, 0, 0, 0],
  contentToCopy,
  selectedContainer = 0;

const cardsName = [
  'new-card',
  'witch', 'skeleton-army', 'baby-dragon', 'prince', 'giant', 'musketeer', 'mini-pekka', 'fireball', 'knight', 'archers', 'minions', 'arrows',
  'hunter', 'goblin-barrel', 'hog-rider', 'goblin-hut', 'goblins', 'spear-goblins',
  'balloon', 'giant-skeleton', 'valkyrie', 'tombstone', 'skeletons', 'bomber',
  'golem', 'barbarian-barrel', 'battle-ram', 'barbarian-hut', 'barbarians', 'cannon',
  'lava-hound', 'miner', 'pekka', 'lightning', 'mega-minion', 'inferno-tower', 'minion-horde', 'zap',
  'night-witch', 'graveyard', 'freeze', 'poison', 'wizard', 'furnace', 'fire-spirits', 'bats',
  'inferno-dragon', 'the-log', 'cannon-cart', 'x-bow', 'flying-machine', 'rocket', 'skeleton-barrel', 'mortar',
  'princess', 'royal-ghost', 'guards', 'dark-prince', 'three-musketeers', 'heal', 'royal-giant', 'royal-recruits',
  'ice-wizard', 'lumberjack', 'bowler', 'tornado', 'ice-golem', 'elixir-collector', 'ice-spirit', 'giant-snowball',
  'bandit', 'executioner', 'goblin-giant', 'dart-goblin', 'goblin-gang', 'rascals',
  'mega-knight', 'magic-archer', 'rage', 'royal-hogs', 'bomb-tower', 'elite-barbarians',
  'sparky', 'electro-wizard', 'electro-dragon', 'mirror', 'clone', 'zappies', 'tesla'
],
  cardsInformation = [
    'Nenhuma Carta selecionada',
    '<ins>Bruxa</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de geração: 5seg<br />Velocidade de impacto: 1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 5',
    '<ins>Exército de Esqueletos</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Contagem de Esqueleto: x15<br />Tempo de mobilização: 1seg',
    '<ins>Bebê Dragão</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Alvos: Aéreo/Terrestre<br />Velocidade de impacto: 1.5seg<br />Velocidade: Rápida<br />Alcance: 3.5<br />Tempo de mobilização: 1seg',
    '<ins>Príncipe</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.4seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Gigante</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.5seg<br />Alvos: Construções<br />Velocidade: Lenta<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Mosqueteira</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 6<br />Tempo de mobilização: 1seg',
    '<ins>Mini P.E.K.K.A</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.8seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Bola de Fogo</ins><br />Raridade: Rara<br />Tipo: Feitiço<br />Raio: 2.5',
    '<ins>Cavaleiro</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.2seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Arqueiras</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.2seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 5<br />Tempo de mobilização: 1seg<br />Contagem: x2',
    '<ins>Servos</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Rápida<br />Alcance: 2<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Flechas</ins><br />Raridade: Comum<br />Tipo: Feitiço<br />Raio: 4',
    '<ins>Caçador</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 2.2seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 4<br />Alcance da bala: 6.5<br />Tempo de mobilização: 1seg',
    '<ins>Barril de Goblins</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Contagem de Goblin: x3',
    '<ins>Corredor</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.6seg<br />Alvos: Construções<br />Velocidade: Muito rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Cabana de Goblins</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de geração: 4.7seg<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 1min 0seg',
    '<ins>Goblins</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.1seg<br />Alvos: Terrestre<br />Velocidade: Muito rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Goblins Lanceiros</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Muito rápida<br />Alcance: 5<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Balão</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 3seg<br />Alvos: Construções<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Esqueleto Gigante</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.5seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Valquíria</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.6seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Lápide</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de geração: 2.9seg<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 40seg',
    '<ins>Esqueletos</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Bombardeiro</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.9seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: 5<br />Tempo de mobilização: 1seg',
    '<ins>Golem</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 2.5seg<br />Alvos: Construções<br />Velocidade: Lenta<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 3seg',
    '<ins>Barril de Bárbaro</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Alvos: Terrestre<br />Largura: 3.9<br />Alcance: 5',
    '<ins>Ariete de Batalha</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Alvos: Construções<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Cabana de Bárbaros</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de geração: 14seg<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 1min 0seg',
    '<ins>Bárbaros</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.5seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x4',
    '<ins>Canhão</ins><br />Raridade: Comum<br />Tipo: Construção<br />Velocidade de impacto: 0.8seg<br />Alvos: Terrestre<br />Alcance: 5.5<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 30seg',
    '<ins>Lava Hound</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 1.3seg<br />Alvos: Construções<br />Velocidade: Lenta<br />Alcance: 2<br />Tempo de mobilização: 1seg',
    '<ins>Mineiro</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 1.2seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>P.E.K.K.A</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.8seg<br />Alvos: Terrestre<br />Velocidade: Lenta<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Relâmpago</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Contagem: x3<br />Duração de Paralisia: 0.5seg<br />Raio: 3',
    '<ins>Megasservo</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.6seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 2<br />Tempo de mobilização: 1seg',
    '<ins>Torre Inferno</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de impacto: 0.4seg<br />Alvos: Aéreo/Terrestre<br />Alcance: 6<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 40seg',
    '<ins>Horda de Servos</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Rápida<br />Alcance: 2<br />Tempo de mobilização: 1seg<br />Contagem: x6',
    '<ins>Zap</ins><br />Raridade: Comum<br />Tipo: Feitiço<br />Duração de Paralisia: 0.5seg<br />Raio: 2.5',
    '<ins>Bruxa Sombria</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de geração: 7seg<br />Velocidade de impacto: 1.5seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Cemitério</ins><br />Raridade: Lendária<br />Tipo: Feitiço<br />Velocidade de geração: 0.5seg<br />Duração: 10seg<br />Raio: 4',
    '<ins>Gelo</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Duração: 4.9seg<br />Raio: 3',
    '<ins>Veneno</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Duração: 8seg<br />Raio: 3.5',
    '<ins>Mago</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.4seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 5.5<br />Tempo de mobilização: 1seg',
    '<ins>Fornalha</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de geração: 10seg<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 50seg',
    '<ins>Espíritos de Fogo</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Alvos: Aéreo/Terrestre<br />Velocidade: Muito rápida<br />Alcance: 2<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Morcegos</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Muito rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x5',
    '<ins>Dragão Infernal</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 0.4seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 3.5<br />Tempo de mobilização: 1seg',
    '<ins>Tronco</ins><br />Raridade: Lendária<br />Tipo: Feitiço<br />Alvos: Terrestre<br />Largura: 3.9<br />Alcance: 11.1',
    '<ins>Carrinho de Canhão</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.2seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: 5<br />Tempo de mobilização: 1seg',
    '<ins>X-Besta</ins><br />Raridade: Épica<br />Tipo: Construção<br />Velocidade de impacto: 0.25seg<br />Alvos: Terrestre<br />Alcance: 11.5<br />Tempo de mobilização: 3.5seg<br />Tempo de efeito: 40seg',
    '<ins>Máquina Voadora</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Rápida<br />Alcance: 6<br />Tempo de mobilização: 1seg',
    '<ins>Foguete</ins><br />Raridade: Rara<br />Tipo: Feitiço<br />Raio: 2',
    '<ins>Barril de Esqueletos</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Alvos: Construções<br />Velocidade: Média<br />Tempo de mobilização: 1seg<br />Contagem de Esqueleto: x6',
    '<ins>Morteiro</ins><br />Raridade: Comum<br />Tipo: Construção<br />Velocidade de impacto: 5seg<br />Alvos: Terrestre<br />Alcance: 11.5<br />Alcance mínimo: 3.5<br />Tempo de mobilização: 3.5seg<br />Tempo de efeito: 30seg',
    '<ins>Princesa</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 3seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 9<br />Tempo de mobilização: 1seg',
    '<ins>Fantasma Real</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 1.8seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: Corpo a corpo<br />Atraso da Invisibilidade: 1.2seg<br />Tempo de mobilização: 1seg',
    '<ins>Guardas</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.1seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Príncipe das Trevas</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.3seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Três Mosqueteiras</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 6<br />Tempo de mobilização: 1seg<br />Contagem: x3',
    '<ins>Cura</ins><br />Raridade: Rara<br />Tipo: Feitiço<br />Duração: 2.5seg<br />Raio: 4',
    '<ins>Gigante Real</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.7seg<br />Alvos: Construções<br />Velocidade: Lenta<br />Alcance: 5<br />Tempo de mobilização: 1seg',
    '<ins>Recrutas Reais</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.2sec<br />Alvos: Terrestre<br />Velocidade: Médio<br />Alcance: Corpo a corpo<br />Contagem: x6',
    '<ins>Mago de Gelo</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 1.7seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 5.5<br />Tempo de mobilização: 1seg',
    '<ins>Lenhador</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 0.7seg<br />Alvos: Terrestre<br />Velocidade: Muito rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Lançador</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 2.5seg<br />Alvos: Terrestre<br />Velocidade: Lenta<br />Alcance: 5<br />Tempo de mobilização: 1seg',
    '<ins>Tornado</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Alvos: Tropas<br />Duração: 2.5seg<br />Raio: 5.5',
    '<ins>Golem de Gelo</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 2.5seg<br />Alvos: Construções<br />Velocidade: Lenta<br />Alcance: Corpo a corpo<br />Duração do efeito de morte: 1seg<br />Tempo de mobilização: 1seg',
    '<ins>Coletor de Elixir</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de produção: 8.5seg<br />Tempo de mobilização: 1seg<br />tempo de efeito: 1min 10seg',
    '<ins>Espírito de Gelo</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Duração de gelo: 1.5seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Muito rápida<br />Alcance: 2.5<br />Tempo de mobilização: 1seg',
    '<ins>Bola de Neve</ins><br />Raridade: Comum<br />Tipo: Feitiço<br />Duração de Desaceleração: 2.5seg<br />Raio: 3',
    '<ins>Bandida</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Alcance por colisão: 3.5 - 6<br />Velocidade de impacto: 1seg<br />Alvos: Terrestre<br />Velocidade: Rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg',
    '<ins>Executor</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 2.4seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 4.5<br />Alcance da bala: 6.5<br />Tempo de mobilização: 1seg',
    '<ins>Goblin Gigante</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 1.7seg<br />Alvos: Construções<br />Velocidade: Média<br />Alcance: Corpo a corpo',
    '<ins>Goblin com Dardo</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 0.6seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Muito rápida<br />Alcance: 6.5<br />Tempo de mobilização: 1seg',
    '<ins>Gangue de Goblins</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Contagem de Goblin: x3<br />Contagem de Goblin Lanceiro: x2<br />Tempo de mobilização: 1seg',
    '<ins>Patifes</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Contagem de Patifa: x2<br />Contagem de Patife: x1<br />Tempo de mobilização: 1seg',
    '<ins>Megacavaleiro</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 1.8seg<br />Alvos: Terrestre<br />Velocidade: Média<br />Alcance: Corpo a corpo<br />Alcance por colisão: 3.5 - 5<br />Tempo de mobilização: 1seg',
    '<ins>Arqueiro Mágico</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 7<br />Alcance da bala: 11<br />Tempo de mobilização: 1seg',
    '<ins>Fúria</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Duração: 7.5seg<br />Melhorar: +35%<br />Raio: 5',
    '<ins>Porcos Reais</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.2seg<br />Alvos: Construções<br />Velocidade: Muito rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x4',
    '<ins>Torre de Bombas</ins><br />Raridade: Rara<br />Tipo: Construção<br />Velocidade de impacto: 1.6seg<br />Alvos: Terrestre<br />Alcance: 6<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 35seg',
    '<ins>Bárbaros de Elite</ins><br />Raridade: Comum<br />Tipo: Tropa<br />Velocidade de impacto: 1.5seg<br />Alvos: Terrestre<br />Velocidade: Muito rápida<br />Alcance: Corpo a corpo<br />Tempo de mobilização: 1seg<br />Contagem: x2',
    '<ins>Sparky</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Velocidade de impacto: 4seg<br />Alvos: Terrestre<br />Velocidade: Lenta<br />Alcance: 4.5<br />Tempo de mobilização: 1seg',
    '<ins>Mago Elétrico</ins><br />Raridade: Lendária<br />Tipo: Tropa<br />Duração de Paralisia: 0.5seg<br />Velocidade de impacto: 1.8seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Rápida<br />Alcance: 5<br />Tempo de mobilização: 1seg',
    '<ins>Dragão Elétrico</ins><br />Raridade: Épica<br />Tipo: Tropa<br />Velocidade de impacto: 2.1seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 3.5',
    '<ins>Espelho</ins><br />Raridade: Épica<br />Tipo: Feitiço',
    '<ins>Clone</ins><br />Raridade: Épica<br />Tipo: Feitiço<br />Raio: 4',
    '<ins>Eletrocutadores</ins><br />Raridade: Rara<br />Tipo: Tropa<br />Velocidade de impacto: 1.6seg<br />Alvos: Aéreo/Terrestre<br />Velocidade: Média<br />Alcance: 4.5<br />Duração de Paralisar: 0.5seg<br />Contagem: x3<br />Tempo de mobilização: 1seg',
    '<ins>Tesla</ins><br />Raridade: Comum<br />Tipo: Construção<br />Velocidade de impacto: 1.1seg<br />Alvos: Aéreo/Terrestre<br />Alcance: 5.5<br />Tempo de mobilização: 1seg<br />Tempo de efeito: 35seg'
  ],
  cardsElixir = [
    0,
    5, 3, 4, 5, 5, 4, 4, 4, 3, 3, 3, 3,
    4, 3, 4, 5, 2, 2,
    5, 6, 4, 3, 1, 3,
    8, 2, 4, 7, 5, 3,
    7, 3, 7, 6, 3, 5, 5, 2,
    4, 5, 4, 4, 5, 4, 2, 2,
    4, 2, 5, 6, 4, 6, 3, 4,
    3, 3, 3, 4, 9, 3, 6, 8,
    3, 4, 5, 3, 2, 6, 1, 2,
    3, 5, 6, 3, 3, 5,
    7, 4, 2, 5, 4, 6,
    6, 4, 5, 1.6, 3, 4, 4
  ],
  cardsCode = [
    '0',
    '26000007', '26000012', '26000015', '26000016', '26000003', '26000014', '26000018', '28000000', '26000000', '26000001', '26000005', '28000001',
    '26000044', '28000004', '26000021', '27000001', '26000002', '26000019',
    '26000006', '26000020', '26000011', '27000009', '26000010', '26000013',
    '26000009', '28000015', '26000036', '27000005', '26000008', '27000000',
    '26000029', '26000032', '26000004', '28000007', '26000039', '27000003', '26000022', '28000008',
    '26000048', '28000010', '28000005', '28000009', '26000017', '27000010', '26000031', '26000049',
    '26000037', '28000011', '26000054', '27000008', '26000057', '28000003', '26000056', '27000002',
    '26000026', '26000050', '26000025', '26000027', '26000028', '28000016', '26000024', '26000047',
    '26000023', '26000035', '26000034', '28000012', '26000038', '27000007', '26000030', '28000017',
    '26000046', '26000045', '26000060', '26000040', '26000041', '26000053',
    '26000055', '26000062', '28000002', '26000059', '27000004', '26000043',
    '26000033', '26000042', '26000063', '28000006', '28000013', '26000052', '27000006'
  ],
  defesa = ['Gigante', 'Golem', 'Gigante Real', 'Goblin Gigante'],
  towerAttack = ['Corredor', 'Ariete de Batalha', 'Gigante Real', 'Porcos Reais'],
  mainAttack = ['Bárbaros de Elite', 'Gigante Real', 'P.E.K.K.A'],
  C = ['Lápide', 'Canhão'],
  CV3 = ['Cabana de Bárbaros', 'Cabana de Goblins', 'Fornalha'],
  CA = ['Sparky', 'Esqueleto Gigante', 'Megacavaleiro'],
  Si = ['Morteiro', 'X-Besta'],
  F = ['Flechas', 'Bola de Fogo', 'Veneno', 'Bola de Neve'],
  FV2 = ['Relâmpago', 'Foguete'],
  FV3 = ['Zap', 'Tronco'],
  FV4 = ['Fúria', 'Tornado'],
  Surp = ['Mineiro', 'Barril de Goblins'],
  Ciclar = ['Esqueletos', 'Goblins', 'Goblins Lanceiros', 'Espírito de Gelo', 'Espíritos de Fogo', 'Morcegos', 'Golem de Gelo'],
  Sup = ['Bruxa', 'Príncipe', 'Megacavaleiro', 'Mosqueteira', 'Três Mosqueteiras', 'Bruxa Sombria', 'Lançador', 'Caçador', 'Executor', 'Carrinho de Canhão', 'Patifes'],
  SV2 = ['Bebê Dragão', 'Mini P.E.K.K.A', 'Valquíria', 'Dragão Infernal', 'Mago Elétrico', 'Príncipe das Trevas', 'Lenhador', 'Eletrocutadores', 'Máquina Voadora'],
  SV3 = ['Fantasma Real', 'Arqueiro Mágico', 'Bandida', 'Princesa', 'Mago de Gelo', 'Barril de Esqueletos', 'Exército de Esqueletos', 'Cavaleiro', 'Gangue de Goblins', 'Guardas', 'Arqueiras'],
  M = ['Servos', 'Horda de Servos', 'Megasservo'],
  tipos = [
    'Três Mosqueteiras|Patifes|Mineiro|SV3|SV3|Ciclar|FV3|Coletor de Elixir',
    'Patifes|P.E.K.K.A|Mineiro|Veneno|Ciclar|FV3|SV3|SV3',
    'Patifes|Cabana de Goblins|Cemitério|Veneno|Ciclar|M|FV3|SV3',
    'Patifes|Príncipe|Barril de Goblins|SV3|SV3|F|FV3|Ciclar',
    'Patifes|Lava Hound|Balão|M|F|FV3|M|C',
    'Patifes|Mineiro|Barril de Goblins|M|SV3|FV3|SV2|SV3',
    'Três Mosqueteiras|Corredor|Fantasma Real|Ciclar|SV2|M|FV3|C',
    'Golem|Príncipe|Arqueiro Mágico|M|SV3|Ciclar|F|FV3',
    'Gigante|Arqueiro Mágico|Príncipe|M|SV3|F|SV3|FV3',
    'Arqueiro Mágico|Mineiro|Balão|Ciclar|Ciclar|FV4|FV3|SV3',
    'Megacavaleiro|Barril de Esqueletos|Ciclar|SV3|SV2|Surp|F|FV3',
    'Megacavaleiro|Balão|Mineiro|Ciclar|Ciclar|M|M|FV3',
    'Megacavaleiro|Máquina Voadora|Cemitério|Veneno|Ciclar|Ciclar|FV3|SV2',
    'Megacavaleiro|Gigante|F|M|SV3|SV2|FV3|Coletor de Elixir',
    'Mineiro|Caçador|Príncipe|Príncipe das Trevas|Ciclar|Ciclar|F|FV3',
    'Mineiro|Caçador|Ciclar|Ciclar|Ciclar|FV3|SV3|F',
    'Si|Caçador|Ciclar|SV3|FV3|Ciclar|M|F',
    'Golem|Caçador|Bruxa Sombria|Ciclar|FV4|F|FV3|SV3',
    'Golem|Eletrocutadores|Bruxa Sombria|FV3|F|FV3|M|Ciclar',
    'Mineiro|F|Caçador|Eletrocutadores|SV3|FV3|Surp|SV2',
    'Gangue de Goblins|Eletrocutadores|SV3|SV3|FV3|FV2|FV4|SV3',
    'Três Mosqueteiras|Eletrocutadores|Mago de Gelo|Ciclar|FV4|SV2|FV3|Coletor de Elixir',
    'D|S|SV2|SV3|Ciclar|Ciclar|FV3|F',
    'Si|Ciclar|Ciclar|SV3|SV2|FV2|FV3|M',
    'Ciclar|AP|FV3|F|S|SV3|FV3|Surp',
    'Ariete de Batalha|Golem de Gelo|SV2|SV3|F|FV3|Ciclar|Surp',
    'Corredor|Megacavaleiro|Golem de Gelo|SV2|Ciclar|Ciclar|FV3|F',
    'Torre Inferno|SV3|SV3|Ciclar|SV3|FV2|Surp|FV3',
    'Megacavaleiro|Ciclar|Surp|SV3|SV2|Ciclar|SV3|FV3',
    'D|Servos|S|SV2|Ciclar|FV3|F|FV3',
    'P.E.K.K.A|Príncipe|Príncipe das Trevas|Tornado|Ciclar|FV3|F|SV3',
    'Sparky|D|SV2|SV3|Ciclar|F|FV3|Surp',
    'Lava Hound|Balão|M|M|SV3|Lápide|F|FV3',
    'SV3|SV3|Ciclar|Corredor|Ciclar|C|F|FV3',
    'SV3|SV3|Ciclar|Ciclar|Si|Flechas|FV2|FV3',
    'SV3|SV2|Ciclar|SV3|Megacavaleiro|SV3|Cabana de Goblins|FV3',
    'AT|S|SV3|Ciclar|F|FV3|Ciclar|M',
    'D|Coletor de Elixir|SV2|SV2|SV3|S|FV3|Tornado',
    'Corredor|Gelo|S|SV2|SV3|Ciclar|F|FV3',
    'Balão|FV4|Surp|SV2|SV2|FV3|Ciclar|Ciclar',
    'FV3|D|M|F|SV2|S|Ciclar|SV3',
    'C|SV2|SV3|Surp|Ciclar|F|FV3|AP',
    'D|Sparky|Tornado|SV2|SV3|FV3|Ciclar|FV3',
    'Golem de Gelo|Cemitério|F|FV3|M|Lápide|SV3|FV3',
    'Megacavaleiro|Mineiro|SV2|Ciclar|SV3|Ciclar|SV3|FV3',
    'Fantasma Real|Megacavaleiro|SV3|SV2|SV3|Surp|SV3|FV3',
    'Três Mosqueteiras|Coletor de Elixir|SV3|Ciclar|S|FV3|Surp|SV2',
    'Três Mosqueteiras|Coletor de Elixir|SV3|Ciclar|S|FV3|Surp|P.E.K.K.A',
    'CA|Surp|FV3|FV3|FV2|Ciclar|S|SV3',
    'Corredor|Dragão Infernal|FV2|FV3|FV4|Ciclar|SV2|Ciclar',
    'Gigante|F|SV2|Ciclar|S|FV3|C|Ciclar',
    'Ariete de Batalha|F|FV3|Ciclar|SV2|SV3|SV3|SV2',
    'Balão|Mineiro|FV3|SV2|F|Ciclar|M|Lápide',
    'Si|Ciclar|Ciclar|FV3|FV3|M|SV3|Corredor',
    'Mineiro|Horda de Servos|FV3|F|SV3|SV3|Surp|Torre Inferno',
    'Cabana de Goblins|Surp|SV3|F|SV2|M|FV3|Cemitério',
    'Si|FV3|M|Surp|Ciclar|Ciclar|SV3|SV3'
  ],
  allowedCards = [],
  prevDeck = [],
  cards = document.querySelectorAll('.cardsContainer img'),
  info = document.querySelector('.infoContainer h2'),
  dbSection = document.querySelector('.builderSection'),
  aboutSection = document.querySelector('.aboutSection'),
  savedSection = document.querySelector('.savedSection'),
  savedDecks = document.querySelector('.savedSection section'),
  selectSection = document.querySelector('.selectSection'),
  configSection = document.querySelector('.configSection'),
  mediaComponent = document.querySelector('#elixirMedio'),
  ddArena = document.querySelector('#ddArena'),
  ddRarity = document.querySelector('#ddRarity'),
  ddType = document.querySelector('#ddType'),
  btnCopy = document.querySelector('#copy'),
  changeContainers = document.querySelectorAll('.navSection button'),
  navSection = document.querySelector('.navSection'),
  cbConfigs = document.querySelectorAll('.configSection input'),
  cbDeckInteligente = document.querySelector('#smartDeck'),
    btnVoltar = document.querySelector('.btnVoltar'),
  root = document.querySelector(':root');

function changeDeck() {
  const selectedArena = [90, 90, 83, 77, 71, 63, 55, 47, 39, 31, 25, 19][ddArena.selectedIndex];

  allowedCards.splice(0, allowedCards.length);
  for (let i = 1; i < selectedArena; i++) {
    if (ddRarity.selectedIndex === 0)
      allowedCards.push(i);
    else if (ddRarity.selectedIndex === 1 && cardsInformation[i].split('<br />')[1] === 'Raridade: Comum')
      allowedCards.push(i);
    else if (ddRarity.selectedIndex === 2 && cardsInformation[i].split('<br />')[1] === 'Raridade: Rara')
      allowedCards.push(i);
    else if (ddRarity.selectedIndex === 3 && cardsInformation[i].split('<br />')[1] === 'Raridade: Épica')
      allowedCards.push(i);
    else if (ddRarity.selectedIndex === 4 && cardsInformation[i].split('<br />')[1] === 'Raridade: Lendária')
      allowedCards.push(i)
  }

  for (let i = 0; i < allowedCards.length; i++) {
    if (ddType.selectedIndex === 1 && cardsInformation[allowedCards[i]].split('<br />')[2] !== 'Tipo: Tropa')
      allowedCards[i] = 0;
    else if (ddType.selectedIndex === 2 && cardsInformation[allowedCards[i]].split('<br />')[2] !== 'Tipo: Construção')
      allowedCards[i] = 0;
    else if (ddType.selectedIndex === 3 && cardsInformation[allowedCards[i]].split('<br />')[2] !== 'Tipo: Feitiço')
      allowedCards[i] = 0;
  }

  for (let i = 0; i < allowedCards.length; i++)
    if (allowedCards[i] !== 0 && localStorage.getItem(cardsName[allowedCards[i]]) !== 'e')
      allowedCards[i] = 0;

  while (allowedCards.indexOf(0) !== -1)
    for (let i = 0; i < allowedCards.length; i++)
      if (allowedCards[i] === 0)
        allowedCards.splice(i, 1);
}

ddArena.addEventListener('change', changeDeck);
ddRarity.addEventListener('change', changeDeck);
ddType.addEventListener('change', changeDeck);

cbDeckInteligente.addEventListener('change', () => {
  if (cbDeckInteligente.checked === true) {
    ddArena.style.display = 'none';
    ddRarity.style.display = 'none';
    ddType.style.display = 'none';
    changeContainers[1].style.display = 'none';
  } else {
    ddArena.style.display = 'block';
    ddRarity.style.display = 'block';
    ddType.style.display = 'block';
    changeContainers[1].style.display = 'block';
  }
});

function allowDrag(event) {
  event.preventDefault();
}

let id = -1;
function getId(event) {
  event.stopPropagation();
  id = parseInt(event.target.id);
}

function pasteCard(event) {
  event.preventDefault();
  if (id !== -1) {
    let temp = currentDeck[id];
    currentDeck[id] = currentDeck[parseInt(event.target.id)];
    currentDeck[parseInt(event.target.id)] = temp;
    setDeck(currentDeck);
    id = -1;
  }
}

function setDeck(deck = Array) {
  let media = 0.0;
  contentToCopy = 'deck=';
  for (let i = 0; i < deck.length; i++) {
    contentToCopy += cardsCode[deck[i]] + (i === deck.length - 1 ? '' : ';');
    cards[i].src = `./images/${cardsName[deck[i]]}_opt-min.png`;
    cards[i].alt = cardsName[deck[i]];
    cards[i].title = cardsInformation[deck[i]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '');
    media += cardsElixir[deck[i]] / 8;
  }
  mediaComponent.textContent = `Elixir médio: ${media.toFixed(1)}`;

  for (let i = deck.length; i < 8; i++) {
    currentDeck.push(0);
    cards[i].src = './images/new-card_opt-min.png';
    cards[i].alt = 'Nenuma Carta selecionada';
    cards[i].title = 'Nenhuma Carta selecionada';
  }
}

function buildDeck() {
  currentDeck.splice(0, currentDeck.length);

  if (cbDeckInteligente.checked) {
    const typeSelected = tipos[parseInt(Math.random() * tipos.length, 10)],
      group = [defesa, Sup, mainAttack, FV3, Si, F, FV2, C, SV2, SV3, M, towerAttack, Surp, Ciclar, CV3, FV4, CA],
      troop = ['D', 'S', 'AP', 'FV3', 'Si', 'F', 'FV2', 'C', 'SV2', 'SV3', 'M', 'AT', 'Surp', 'Ciclar', 'CV3', 'FV4', 'CA'];

    for (let i = 0; i < typeSelected.split('|').length; i++) {
      for (let j = 0; j < troop.length; j++)
        if (typeSelected.split('|')[i] === troop[j]) {
          let newTroop = group[j][parseInt(Math.random() * group[j].length, 10)];
          while (currentDeck.indexOf(newTroop) !== -1)
            newTroop = group[j][parseInt(Math.random() * group[j].length, 10)];

          currentDeck.push(newTroop);
          break;
        } else if (j === troop.length - 1)
          currentDeck.push(typeSelected.split('|')[i]);
    }

    for (let i = 0; i < currentDeck.length; i++)
      for (let j = 1; j < cardsInformation.length; j++)
        if (currentDeck[i] === cardsInformation[j].split('<br />')[0].replace(/<ins>|<\/ins>/g, ''))
          currentDeck[i] = j;

    randomizeDeck();

    prevDeck.push(new Array());
    for (let i = 0; i < currentDeck.length; i++)
      prevDeck[prevDeck.length - 1].push(currentDeck[i]);

    if (prevDeck.length > 100)
      prevDeck.shift();
    else if (prevDeck.length > 1)
      btnVoltar.hidden = false;

  } else {
    if (prevDeck.length === 1) prevDeck.pop();
    let random = allowedCards[parseInt(Math.random() * allowedCards.length, 10)];

    for (let i = 0; i < (allowedCards.length < 8 ? allowedCards.length : cards.length); i++) {
      while (currentDeck.indexOf(random) !== -1)
        random = allowedCards[parseInt(Math.random() * allowedCards.length, 10)];

      currentDeck.push(random);
    }
  }

  setDeck(currentDeck);
}

function switchContainer(container = dbSection) {
  const containers = [dbSection, selectSection, savedSection, configSection, aboutSection];

  for (let i = 0; i < containers.length; i++) {
    if (containers[i] === container) {
      changeContainers[i].setAttribute('id', 'selectedButton');
      changeContainers[i].style.color = 'var(--corDeLetra)';
      containers[i].style.display = 'block';
      selectedContainer = i;
    } else {
      changeContainers[i].removeAttribute('id');
      changeContainers[i].style.color = 'var(--corDeLetraBotao)';
      containers[i].style.display = 'none';
    }
  }
}

function combination() {
  const i = allowedCards.length,
    b = allowedCards.length < 8 ? allowedCards : 8;
  let result = 0,
    iFactorial = 1,
    bFactorial = 1;

  for (let f = i; f > (i - b); f--)
    iFactorial *= f;

  for (let k = b; k > 0; k--)
    bFactorial *= k;

  result = iFactorial / bFactorial;

  const formatter = Intl.NumberFormat('pt-br');
  return allowedCards.length === 0 ? 0 : formatter.format(result);
}

function infoCards() {
  smalltalk.alert('Informações',
    (window.screen.width < 1024 ? 'Para trocar alguma Carta, basta pressionar e segurar a Carta.\nPara copiar o link do Deck sem abrir no Clash Royale, basta pressionar e segurar o botão Copiar Deck.\nPara remover o Deck atual, basta pressionar e segurar o botão Colar Deck.\nPara embaralhar o Deck atal, basta pressionar e segurar o botão Gerar Deck.\nA função Voltar Deck só é válida para Decks Inteligentes.' : 'Para trocar alguma Carta, clique com o botão direito na Carta.\nPara remover o Deck atual, clique com o botão direito do mouse no botão Colar Deck.\nPara Embaralhar o Deck atual, clique com o botão direito do mouse em Gerar Deck.') +
    (cbDeckInteligente.checked ? '\nA Seleção de Cartas e os DropDowns de Arenas, Raridades e Tipos só funcionam no modo Deck Inteligente desligado.' : '\nQuantidade de Cartas a serem geradas: ' + allowedCards.length + '\nCombinações de Decks possíveis: ' + combination())
  );
}

function copyDeck() {
  if (prevDeck.length > 0)
    prevDeck.pop();
  if (screen.width < 1024 && confirm('Deseja abrir o Deck no Clash Royale?'))
    window.open('clashroyale://copyDeck?' + contentToCopy, '_self');
  else
    btnCopy.setAttribute('data-clipboard-text', 'https://link.clashroyale.com/deck/pt?' + contentToCopy);
}

function copyDeckSec() {
  if (screen.width < 1024) {
    btnCopy.setAttribute('data-clipboard-text', 'https://link.clashroyale.com/deck/pt?' + contentToCopy);
    smalltalk.alert('Link copiado', 'Link do Deck copiado para a área de transferência.');
  }
}

function paste(linkDeck) {
  if (linkDeck !== null && linkDeck.trim().indexOf(' ') === -1 &&
    (linkDeck.trim().startsWith('https://link.clashroyale.com/deck/') ||
      linkDeck.trim().startsWith('link.clashroyale.com/deck/'))) {
    if (linkDeck.match(/\?deck=/)) {
      linkDeck = linkDeck.split('?deck=');
      linkDeck.shift();
      linkDeck = linkDeck.join().split(';');
    } else linkDeck = linkDeck.split(';');

    for (let i = 0; i < linkDeck.length; i++)
      for (let j = 1; j < cardsCode.length; j++)
        if (linkDeck[i] === cardsCode[j])
          linkDeck[i] = j;

    for (let i = linkDeck; i < 8; i++)
      linkDeck.push(0);

    currentDeck = linkDeck;
    setDeck(linkDeck);
  }
}

function pasteDeck(content = null) {
  if (content === null) {
    if (screen.width >= 1024)
      smalltalk.prompt('Colar Deck', 'Cole o link do Deck abaixo')
        .then(linkDeck => {
          paste(linkDeck);
        }).catch(() => { });
    else {
      let linkDeck = prompt('Cole o link do Deck abaixo');
      paste(linkDeck);
    }
  } else paste(content);
}

function formatText(text) {
  const alpha = 'aaaaeeeeiiiioooouuuu',
    accentuation = 'áâàãéêèẽíìîĩóôòõúûùũ';

  text = text.replace(/[!@#$%&*()-=_+'"[\]{},.<>;:/?^~]/g, '');

  for (let i = 0; i < text.length; i++)
    while (text.indexOf(accentuation[i]) !== -1)
      text = text.replace(accentuation[i], alpha[i]);

  return text.trim().toLowerCase();
}

function previousDeck() {
  for (let i = 0; i < currentDeck.length; i++)
    currentDeck[i] = prevDeck[prevDeck.length - 2][i];

  prevDeck.pop();

  setDeck(currentDeck);
  if (prevDeck.length <= 1)
    btnVoltar.hidden = true;
}

function randomizeDeck() {
  if (currentDeck.indexOf(0) === -1) {
    const newDeck = [];
    let num = currentDeck[parseInt(Math.random() * currentDeck.length, 10)];
    for (let i = 0; i < currentDeck.length; i++) {
      while (newDeck.indexOf(num) !== -1)
        num = currentDeck[parseInt(Math.random() * currentDeck.length, 10)];

      newDeck.push(num);
    }

    for (let i = 0; i < newDeck.length; i++)
      currentDeck[i] = newDeck[i];

    setDeck(currentDeck);
  } else smalltalk.alert('Embaralhar Deck', 'Não é permitido Embaralhar o Deck com Cartas faltando.');
}

const x = matchMedia('(min-width: 768px)');

function matche(xvar) {
  if (xvar.matches) {
    if (navSection.style.width === '100%') {
      if (selectedContainer === 0)
        dbSection.style.display = 'block';
      else if (selectedContainer === 1)
        selectSection.style.display = 'block';
      else if (selectedContainer === 2)
        aboutSection.style.display = 'block';
    }
    navSection.style.width = '175px';
    navSection.style.transition = 'all 0s';
    navSection.style.height = '100%';
    navSection.style.overflow = 'initial';
    navSection.style.borderRight = '1px solid var(--corDeBorda)';
  }
}

matche(x);

x.addListener(matche);

const y = matchMedia('(max-width: 767px)');

function matche2(yvar) {
  if (yvar.matches) {
    navSection.style.width = '40px';
    navSection.style.height = '35px';
    navSection.style.overflow = 'hidden';
    navSection.style.transition = 'all .2s';
    navSection.style.borderRight = 'none';
  }
}

matche2(y);
y.addListener(matche2);

function showSections() {
  if (navSection.style.width !== '100%') {
    navSection.style.width = '100%';
    navSection.style.height = '100%';
    if (selectedContainer === 0)
      dbSection.style.display = 'none';
    else if (selectedContainer === 1)
      selectSection.style.display = 'none';
    else if (selectedContainer === 2)
      aboutSection.style.display = 'none';
  } else {
    navSection.style.width = '40px';
    navSection.style.height = '35px';
    if (selectedContainer === 0)
      dbSection.style.display = 'block';
    else if (selectedContainer === 1)
      selectSection.style.display = 'block';
    else if (selectedContainer === 2)
      aboutSection.style.display = 'block';
  }
}

function closeNav() {
  if (navSection.style.width === '100%') {
    navSection.style.width = '40px';
    navSection.style.height = '35px';
  }
}

function darkTheme() {
  root.style.setProperty('--corDeFundo', 'rgb(42, 44, 51)');
  root.style.setProperty('--corPrimaria', 'rgb(35, 35, 35)');
  root.style.setProperty('--corSecundaria', 'rgb(25, 25, 25)');
  root.style.setProperty('--corTercearia', 'rgb(20, 20, 20)');
  root.style.setProperty('--corDeLetraBotao', 'rgb(237, 237, 237)');
  root.style.setProperty('--corDeBorda', 'var(--corDeLetraBotao)');
  root.style.setProperty('--corDeLetra', 'rgb(237, 237, 237)');
  localStorage.removeItem('theme');
}

function lightTheme() {
  root.style.setProperty('--corDeFundo', 'rgb(237, 237, 237)');
  root.style.setProperty('--corPrimaria', 'rgb(7, 42, 70)');
  root.style.setProperty('--corSecundaria', 'rgb(2, 28, 49)');
  root.style.setProperty('--corTercearia', 'rgb(0, 20, 36)');
  root.style.setProperty('--corDeLetraBotao', 'var(--corDeFundo)');
  root.style.setProperty('--corDeBorda', 'var(--corPrimaria)');
  root.style.setProperty('--corDeLetra', 'var(--corPrimaria)');
  localStorage.setItem('theme', 'light');
}

(function updateCards() {
  let content = '',
    btn, img;

  for (let i = 1; i < cardsInformation.length; i++)
    if (localStorage.getItem(cardsName[i]) === null)
      localStorage.setItem(cardsName[i], 'e');

  for (let i = 1; i < cardsInformation.length; i++) {
    content += `
			<section>
				<img class="${localStorage.getItem(cardsName[i]) === 'e' ? '' : 'notAllowed'}" src="./images/${cardsName[i]}_opt-min.png" alt="${cardsName[i]}" title="${cardsInformation[i].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}" />				
			</section>
		`;
  }
  selectSection.innerHTML += content;

  btn = document.querySelectorAll('.selectSection div button');
  img = document.querySelectorAll('.selectSection img');

  btn[0].addEventListener('click', () => {
    for (let i = 1; i < cardsName.length; i++)
      if (localStorage.getItem(cardsName[i]) === 'd') {
        localStorage.setItem(cardsName[i], 'e');
        img[i - 1].removeAttribute('class');
      }
    changeDeck();
  });

  btn[1].addEventListener('click', () => {
    for (let i = 1; i < cardsName.length; i++)
      if (localStorage.getItem(cardsName[i]) === 'e') {
        localStorage.setItem(cardsName[i], 'd');
        img[i - 1].setAttribute('class', 'notAllowed');
      }
    changeDeck();
  });

  for (let i = 0; i < img.length; i++)
    img[i].addEventListener('click', function () {
      if (img[i].className === 'notAllowed') {
        img[i].removeAttribute('class');
        localStorage.setItem(cardsName[i + 1], 'e');
      } else {
        img[i].setAttribute('class', 'notAllowed');
        localStorage.setItem(cardsName[i + 1], 'd');
      }
      changeDeck();
    });
})();

function saveDeck() {
  let exists = false, empty = currentDeck.indexOf(0) === -1 ? false : true,
    max = (localStorage.getItem('decks') !== null && JSON.parse(localStorage.getItem('decks')).deckList.length > 99) ? true : false;

  for (let i = 0; i < (localStorage.getItem('decks') === null || empty || max ? 0 : JSON.parse(localStorage.getItem('decks')).deckList.length); i++) {
    let qtd = 0;
    for (let j = 0; j < currentDeck.length; j++)
      for (let k = 0; k < currentDeck.length; k++)
        if (currentDeck[j] === JSON.parse(localStorage.getItem('decks')).deckList[i][k])
          qtd++;

    if (qtd === 8) {
      exists = true;
      break;
    }
  }
  if (!exists && !empty && !max) {
    localStorage.setItem('decks', `{"deckList": [${localStorage.getItem('decks') !== null ? `[${JSON.parse(localStorage.getItem('decks')).deckList.join('],[')}],[${currentDeck.join(',')}]` : `[${currentDeck.join(',')}]`}]}`);
    render();
  } else if (exists) alert('O Deck atual já está salvo.');
  else if (empty) alert('Não é permitido salvar Decks com Cartas faltando.');
  else alert('Não é permitido salvar mais de 100 Decks.');
}

function compareArrays(array1, array2) {
  let qtd = 0;
  if (array1.length === array2.length)
    for (let i = 0; i < array1.length; i++)
      if (array1[i] === array2[i])
        qtd++;

  return array1.length === qtd;
}

function deleteDeck(deck = Array) {
  let newDeck = (() => {
    const decksCurrent = JSON.parse(localStorage.getItem('decks')).deckList;
    let newDecksCurrent = '[';
    for (let i = 0; i < decksCurrent.length; i++)
      if (compareArrays(decksCurrent[i], deck)) {
        if (i === decksCurrent.length - 1)
          newDecksCurrent = `${newDecksCurrent.substring(0, newDecksCurrent.length - 1)}${decksCurrent.length === 1 ? 'empty' : ']'}`;
      }
      else newDecksCurrent += `[${decksCurrent[i]}]${i === decksCurrent.length - 1 ? ']' : ','}`;

    return newDecksCurrent;
  })();

  if (newDeck === 'empty')
    localStorage.removeItem('decks');
  else localStorage.setItem('decks', `{"deckList": ${newDeck}}`);
  render();
}

function deleteAll() {
  smalltalk
    .confirm('Remover Decks', 'Deseja remover todos os Decks salvos?')
    .then(() => {
      localStorage.removeItem('decks');
      render();
    })
    .catch(() => {});
}

let createDecks = new Worker('./render.js');
function render() {
  if (localStorage.getItem('decks') !== null && JSON.parse(localStorage.getItem('decks')).deckList.length > 0) {
    createDecks.postMessage({ 'decks': JSON.parse(localStorage.getItem('decks')).deckList, 'cardsName': cardsName, 'cardsInformation': cardsInformation, 'cardsElixir': cardsElixir, 'cardsCode': cardsCode });
  }
  else savedDecks.innerHTML = '<h1>Nenhum Deck salvo.</h1>';
}

createDecks.onmessage = e => {
  savedDecks.innerHTML = e.data;
  document.querySelector('.savedSection h1').innerText = `Quantidade de Decks salvos: ${JSON.parse(localStorage.getItem('decks')).deckList.length}`;
}

if (localStorage.getItem('theme') === 'light')
  lightTheme();
else {
  darkTheme();
  cbConfigs[0].checked = true;
}

function change(name, ind) {
  if (name !== null && name.trim() !== '') {
    name = formatText(name);
    for (let j = 1; j < cardsInformation.length; j++)
      if (currentDeck.indexOf(j) === -1 && name === formatText(cardsInformation[j].split('<br />')[0].replace(/<ins>|<\/ins>/g, ''))) {
        currentDeck[ind] = j;
        setDeck(currentDeck);
        break;
      }
  }
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('contextmenu', () => {
    if (screen.width >= 1024)
      smalltalk.prompt('Mudar Carta', 'Digite o nome da Carta abaixo').then(name => {
        change(name, i);
      }).catch(() => { });
    else {
      let name = prompt('Digite o nome da Carta abaixo');
      change(name, i);
    }
  });
  cards[i].addEventListener('click', () => {
    info.innerHTML = cardsInformation[currentDeck[i]] + (currentDeck[i] === 0 ? '' : '<br />Elixir: ' + cardsElixir[currentDeck[i]]);
  });
}

window.addEventListener('contextmenu', event => {
  event.preventDefault();
});

cbConfigs[0].addEventListener('change', () => {
  if (cbConfigs[0].checked)
    darkTheme();
  else lightTheme();
});

document.onkeydown = e => {
  if (e.which === 71)
    buildDeck();
  else if (e.which === 83)
    saveDeck();
}

window.onload = function () {
  document.querySelector('.lds-ring').style.display = 'none';
  navSection.style.display = 'block';
  dbSection.style.display = 'block';
}

render();
changeDeck();
setDeck(currentDeck);
new ClipboardJS(btnCopy);
new ClipboardJS('.btnCopiarS');