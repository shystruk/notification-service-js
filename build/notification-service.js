!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.createElement("template");o.innerHTML='\n    <style>\n        .web-nc {\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            color: #fff;\n            font-size: 16px;\n            width: 290px;\n            margin: 0 auto;\n            z-index: 999999;\n        }\n        .web-nc-content {\n            position: relative;\n            margin-top: 10px;\n            padding: 15px 20px 17px 15px;\n            line-height: 1.3;\n        }\n        .web-nc-content:hover img {\n            display: block;\n        }\n        .web-nc-content img {\n            height: 10px;\n            cursor: pointer;\n            position: absolute;\n            top: 8px;\n            right: 8px;\n            display: none;\n        }\n        .web-nc-content.success {\n            background: #43A047;\n        }\n        .web-nc-content.warning {\n            background: #FFB300;\n        }\n        .web-nc-content.error {\n            background: #FF5722;\n        }\n        .web-nc-content.fadein {\n            -webkit-animation: fadein 2s;\n            -moz-animation: fadein 2s;\n            -ms-animation: fadein 2s;\n            -o-animation: fadein 2s;\n            animation: fadein 2s;\n        }\n        .web-nc-content.fadeout {\n            -webkit-animation: fadeout 2s;\n            -moz-animation: fadeout 2s;\n            -ms-animation: fadeout 2s;\n            -o-animation: fadeout 2s;\n            animation: fadeout 2s;\n        }\n        @keyframes fadein {\n            from { opacity: 0; }\n            to   { opacity: 1; }\n        }\n        @-moz-keyframes fadein {\n            from { opacity: 0; }\n            to   { opacity: 1; }\n        }\n        @-webkit-keyframes fadein {\n            from { opacity: 0; }\n            to   { opacity: 1; }\n        }\n        @-ms-keyframes fadein {\n            from { opacity: 0; }\n            to   { opacity: 1; }\n        }\n        @-o-keyframes fadein {\n            from { opacity: 1; }\n            to   { opacity: 0; }\n        }\n        @keyframes fadeout {\n            from { opacity: 1; }\n            to   { opacity: 0; }\n        }\n        @-moz-keyframes fadeout {\n            from { opacity: 1; }\n            to   { opacity: 0; }\n        }\n        @-webkit-keyframes fadeout {\n            from { opacity: 1; }\n            to   { opacity: 0; }\n        }\n        @-ms-keyframes fadeout {\n            from { opacity: 1; }\n            to   { opacity: 0; }\n        }\n        @-o-keyframes fadeout {\n            from { opacity: 1; }\n            to   { opacity: 0; }\n        }\n    </style>\n\n    <div class="web-nc"></div>\n',t.default=o},function(e,t){!function(){if("function"==typeof window.CustomEvent)return;function e(e,t){var n=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var n=document,o={};e.exports={on:function(e,t){o[e]=t,n.addEventListener(e,t)},off:function(e){n.removeEventListener(e,o[e]),delete o[e]},dispatch:function(e,t){!function(e,t){var o=new CustomEvent(e,{detail:t});n.dispatchEvent(o)}(e,t||null)}}},,function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=a(n(0)),r=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(i.default.content.cloneNode(!0)),e.rootNode=e.shadowRoot.querySelector(".web-nc"),e.crossImg="",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),o(t,[{key:"connectedCallback",value:function(){var e=this;r.default.ON("WEB_COMP_SHOW_NOTIFICATION",function(t){e.renderNotification(t&&t.detail)})}},{key:"disconnectedCallback",value:function(){r.default.OFF("WEB_COMP_SHOW_NOTIFICATION")}},{key:"attributeChangedCallback",value:function(e,t,n){this.styleSrc&&this.attachLink(),this.crossImgSrc&&(this.crossImg=this.getAttribute("cross-img-src"))}},{key:"renderNotification",value:function(e){var t;if(e){var n=document.createElement("div");if(n.setAttribute("class","web-nc-content fadein "+e.type),n.innerHTML="<span>"+e.message+"</span>",t=this.rootNode.appendChild(n),this.crossImg){var o=document.createElement("img");o.setAttribute("src",this.crossImg),o.setAttribute("alt",""),o.addEventListener("click",function(){return t.parentNode.removeChild(t)}),t.appendChild(o)}setTimeout(function(){t.className+=" fadeout",setTimeout(function(){return t.parentNode&&t.parentNode.removeChild(t)},1200)},e.timer||5e3)}}},{key:"attachLink",value:function(){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",this.getAttribute("style-src")),this.rootNode.parentNode.insertBefore(e,this.rootNode)}},{key:"crossImgSrc",get:function(){return this.hasAttribute("cross-img-src")}},{key:"styleSrc",get:function(){return this.hasAttribute("style-src")}}],[{key:"observedAttributes",get:function(){return["style-src","cross-img-src"]}}]),t}();customElements.define("notification-service",c)}]);