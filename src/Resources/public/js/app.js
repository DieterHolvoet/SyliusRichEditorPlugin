!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s="ng4s")}({"8/JR":function(e,t,n){"use strict";var i=n("8T9/"),r=n("Ibf7");e.exports=function(e,t){var n=t||{},o={};return void 0===e&&(e={}),e.on=function(t,n){return o[t]?o[t].push(n):o[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var i=arguments.length;if(1===i)delete o[t];else if(0===i)o={};else{var r=o[t];if(!r)return e;r.splice(r.indexOf(n),1)}return e},e.emit=function(){var t=i(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(o[t]||[]).slice(0);return function(){var o=i(arguments),l=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===o.length?o[0]:o;return a.forEach((function(i){n.async?r(i,o,l):i.apply(l,o),i._once&&e.off(t,i)})),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},"8oxB":function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var u,c=[],s=!1,d=-1;function f(){s&&u&&(s=!1,u.length?c=u.concat(c):d=-1,c.length&&m())}function m(){if(!s){var e=l(f);s=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,s=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||s||l(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},Gjsa:function(e,t,n){(function(t){var n;n="function"==typeof t?function(e){t(e)}:function(e){setTimeout(e,0)},e.exports=n}).call(this,n("URgk").setImmediate)},Ibf7:function(e,t,n){"use strict";var i=n("Gjsa");e.exports=function(e,t,n){e&&i((function(){e.apply(n||null,t||[])}))}},PzH3:function(e,t,n){"use strict";(function(t){var i=n("bBst"),r=n("Ys8N"),o=t.document,a=function(e,t,n,i){return e.addEventListener(t,n,i)},l=function(e,t,n,i){return e.removeEventListener(t,n,i)},u=[];function c(e,t,n){var i=function(e,t,n){var i,r;for(i=0;i<u.length;i++)if((r=u[i]).element===e&&r.type===t&&r.fn===n)return i}(e,t,n);if(i){var r=u[i].wrapper;return u.splice(i,1),r}}t.addEventListener||(a=function(e,n,i){return e.attachEvent("on"+n,function(e,n,i){var r=c(e,n,i)||function(e,n,i){return function(n){var r=n||t.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,i.call(e,r)}}(e,0,i);return u.push({wrapper:r,element:e,type:n,fn:i}),r}(e,n,i))},l=function(e,t,n){var i=c(e,t,n);if(i)return e.detachEvent("on"+t,i)}),e.exports={add:a,remove:l,fabricate:function(e,t,n){var a=-1===r.indexOf(t)?new i(t,{detail:n}):function(){var e;o.createEvent?(e=o.createEvent("Event")).initEvent(t,!0,!0):o.createEventObject&&(e=o.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}}).call(this,n("yLpj"))},URgk:function(e,t,n){(function(e){var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(r.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new o(r.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var i,r,o,a,l,u=1,c={},s=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick((function(){v(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){v(e.data)},i=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,i=function(e){var t=d.createElement("script");t.onreadystatechange=function(){v(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):i=function(e){setTimeout(v,0,e)}:(a="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&v(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),i=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[u]=r,i(u),u++},f.clearImmediate=m}function m(e){delete c[e]}function v(e){if(s)setTimeout(v,0,e);else{var t=c[e];if(t){s=!0;try{!function(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i)}}(t)}finally{m(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},YS7c:function(e,t,n){"use strict";(function(t){var i=n("8/JR"),r=n("PzH3"),o=n("n6yW"),a=document,l=a.documentElement;function u(e,n,i,o){t.navigator.pointerEnabled?r[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[i],o):t.navigator.msPointerEnabled?r[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[i],o):(r[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[i],o),r[n](e,i,o))}function c(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function s(e,n){return void 0!==t[n]?t[n]:l.clientHeight?l[e]:a.body[e]}function d(e,t,n){var i,r=e||{},o=r.className;return r.className+=" gu-hide",i=a.elementFromPoint(t,n),r.className=o,i}function f(){return!1}function m(){return!0}function v(e){return e.width||e.right-e.left}function h(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===a?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(g(t))}(e)}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function b(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),i={pageX:"clientX",pageY:"clientY"};return e in i&&!(e in n)&&i[e]in n&&(e=i[e]),n[e]}e.exports=function(e,t){var n,E,w,T,I,x,S,C,L,O,M;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var k,B=null,U=t||{};void 0===U.moves&&(U.moves=m),void 0===U.accepts&&(U.accepts=m),void 0===U.invalid&&(U.invalid=function(){return!1}),void 0===U.containers&&(U.containers=e||[]),void 0===U.isContainer&&(U.isContainer=f),void 0===U.copy&&(U.copy=!1),void 0===U.copySortSource&&(U.copySortSource=!1),void 0===U.revertOnSpill&&(U.revertOnSpill=!1),void 0===U.removeOnSpill&&(U.removeOnSpill=!1),void 0===U.direction&&(U.direction="vertical"),void 0===U.ignoreInputTextSelection&&(U.ignoreInputTextSelection=!0),void 0===U.mirrorContainer&&(U.mirrorContainer=a.body);var j=i({containers:U.containers,start:function(e){var t=z(e);t&&D(t)},end:F,cancel:$,remove:V,destroy:function(){N(!0),H({})},canMove:function(e){return!!z(e)},dragging:!1});return!0===U.removeOnSpill&&j.on("over",(function(e){o.rm(e,"gu-hide")})).on("out",(function(e){j.dragging&&o.add(e,"gu-hide")})),N(),j;function A(e){return-1!==j.containers.indexOf(e)||U.isContainer(e)}function N(e){var t=e?"remove":"add";u(l,t,"mousedown",Y),u(l,t,"mouseup",H)}function R(e){u(l,e?"remove":"add","mousemove",J)}function _(e){var t=e?"remove":"add";r[t](l,"selectstart",P),r[t](l,"click",P)}function P(e){k&&e.preventDefault()}function Y(e){if(x=e.clientX,S=e.clientY,!(1!==c(e)||e.metaKey||e.ctrlKey)){var t=e.target,n=z(t);n&&(k=n,R(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function J(e){if(k)if(0!==c(e)){if(void 0===e.clientX||e.clientX!==x||void 0===e.clientY||e.clientY!==S){if(U.ignoreInputTextSelection){var t=b("clientX",e),i=b("clientY",e);if(p(a.elementFromPoint(t,i)))return}var r=k;R(!0),_(),F(),D(r);var d,f={left:(d=w.getBoundingClientRect()).left+s("scrollLeft","pageXOffset"),top:d.top+s("scrollTop","pageYOffset")};T=b("pageX",e)-f.left,I=b("pageY",e)-f.top,o.add(O||w,"gu-transit"),function(){if(n)return;var e=w.getBoundingClientRect();(n=w.cloneNode(!0)).style.width=v(e)+"px",n.style.height=h(e)+"px",o.rm(n,"gu-transit"),o.add(n,"gu-mirror"),U.mirrorContainer.appendChild(n),u(l,"add","mousemove",Q),o.add(U.mirrorContainer,"gu-unselectable"),j.emit("cloned",n,w,"mirror")}(),Q(e)}}else H({})}function z(e){if(!(j.dragging&&n||A(e))){for(var t=e;g(e)&&!1===A(g(e));){if(U.invalid(e,t))return;if(!(e=g(e)))return}var i=g(e);if(i)if(!U.invalid(e,t))if(U.moves(e,i,t,y(e)))return{item:e,source:i}}}function D(e){var t,n;t=e.item,n=e.source,("boolean"==typeof U.copy?U.copy:U.copy(t,n))&&(O=e.item.cloneNode(!0),j.emit("cloned",O,e.item,"copy")),E=e.source,w=e.item,C=L=y(e.item),j.dragging=!0,j.emit("drag",w,E)}function F(){if(j.dragging){var e=O||w;q(e,g(e))}}function X(){k=!1,R(!0),_(!0)}function H(e){if(X(),j.dragging){var t=O||w,i=b("clientX",e),r=b("clientY",e),o=W(d(n,i,r),i,r);o&&(O&&U.copySortSource||!O||o!==E)?q(t,o):U.removeOnSpill?V():$()}}function q(e,t){var n=g(e);O&&U.copySortSource&&t===E&&n.removeChild(w),K(t)?j.emit("cancel",e,E,E):j.emit("drop",e,t,E,L),G()}function V(){if(j.dragging){var e=O||w,t=g(e);t&&t.removeChild(e),j.emit(O?"cancel":"remove",e,t,E),G()}}function $(e){if(j.dragging){var t=arguments.length>0?e:U.revertOnSpill,n=O||w,i=g(n),r=K(i);!1===r&&t&&(O?i&&i.removeChild(O):E.insertBefore(n,C)),r||t?j.emit("cancel",n,E,E):j.emit("drop",n,i,E,L),G()}}function G(){var e=O||w;X(),n&&(o.rm(U.mirrorContainer,"gu-unselectable"),u(l,"remove","mousemove",Q),g(n).removeChild(n),n=null),e&&o.rm(e,"gu-transit"),M&&clearTimeout(M),j.dragging=!1,B&&j.emit("out",e,B,E),j.emit("dragend",e),E=w=O=C=L=M=B=null}function K(e,t){var i;return i=void 0!==t?t:n?L:y(O||w),e===E&&i===C}function W(e,t,n){for(var i=e;i&&!r();)i=g(i);return i;function r(){if(!1===A(i))return!1;var r=Z(i,e),o=ee(i,r,t,n);return!!K(i,o)||U.accepts(w,i,E,o)}}function Q(e){if(n){e.preventDefault();var t=b("clientX",e),i=b("clientY",e),r=t-T,o=i-I;n.style.left=r+"px",n.style.top=o+"px";var a=O||w,l=d(n,t,i),u=W(l,t,i),c=null!==u&&u!==B;(c||null===u)&&(B&&v("out"),B=u,c&&v("over"));var s=g(a);if(u!==E||!O||U.copySortSource){var f,m=Z(u,l);if(null!==m)f=ee(u,m,t,i);else{if(!0!==U.revertOnSpill||O)return void(O&&s&&s.removeChild(a));f=C,u=E}(null===f&&c||f!==a&&f!==y(a))&&(L=f,u.insertBefore(a,f),j.emit("shadow",a,u,E))}else s&&s.removeChild(a)}function v(e){j.emit(e,a,B,E)}}function Z(e,t){for(var n=t;n!==e&&g(n)!==e;)n=g(n);return n===l?null:n}function ee(e,t,n,i){var r="horizontal"===U.direction;return t!==e?function(){var e=t.getBoundingClientRect();if(r)return o(n>e.left+v(e)/2);return o(i>e.top+h(e)/2)}():function(){var t,o,a,l=e.children.length;for(t=0;t<l;t++){if(o=e.children[t],a=o.getBoundingClientRect(),r&&a.left+a.width/2>n)return o;if(!r&&a.top+a.height/2>i)return o}return null}();function o(e){return e?y(t):t}}}}).call(this,n("yLpj"))},Ys8N:function(e,t,n){"use strict";(function(t){var n=[],i="",r=/^on/;for(i in t)r.test(i)&&n.push(i.slice(2));e.exports=n}).call(this,n("yLpj"))},bBst:function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n("yLpj"))},n6yW:function(e,t,n){"use strict";var i={},r="(?:^|\\s)",o="(?:\\s|$)";function a(e){var t=i[e];return t?t.lastIndex=0:i[e]=t=new RegExp(r+e+o,"g"),t}e.exports={add:function(e,t){var n=e.className;n.length?a(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(a(t)," ").trim()}}},ng4s:function(e,t,n){"use strict";n.r(t);var i=n("YS7c"),r=n.n(i);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.templateRender=this.config.templateRender,this.debug=this.config.debug,this.targets=document.querySelectorAll(t.querySelector),this.container=document.querySelector(t.containerSelector),this.uiElements=this.config.uiElements,this.translations=this.config.translations,this.debug&&(this.log("Plugin configuration :",this.config),this.log("Matched element(s) :",this.targets.length)),this.id={uiElementContainer:"mbiz-cms-elements-container"},this.classes={uiElementList:"mbiz-cms-component-ui-elements",dropableContainer:"mbiz-cms-dropable-container",draggableContainer:"mbiz-cms-draggable-container",draggableItem:"mbiz-cms-draggable-item",draggableItemHandler:"mbiz-cms-draggable-item-handler",deleteButton:"mbiz-cms-delete-button",toggleButton:"mbiz-cms-toggle-button"},this.events={uiElementsBuilt:new Event("uiElementsBuilt")}}var t,n,i;return t=e,(n=[{key:"init",value:function(){if(this.targets.length){var e=this;this.container.addEventListener("uiElementsBuilt",(function(t){e.log("Ui Elements container is built",t),e.initFields(),e.toggleUiElementsVisibility()})),this.initUiElements(this.container,this.uiElements)}}},{key:"initUiElements",value:function(e,t){this.log("Init UI Elements :",t);var n=document.createElement("div");n.id=this.id.uiElementContainer,n.classList.add(this.classes.dropableContainer,this.classes.uiElementList);var i=!1;for(var r in t){var o=t[r];this.log("Init UI Element :",o);var a=this.renderUiElementMetaData(r,o,this.templateRender);""!==a?n.insertAdjacentHTML("beforeend",a):i=!0}i||(e.appendChild(n),this.container.dispatchEvent(this.events.uiElementsBuilt))}},{key:"initFields",value:function(){var e=!0,t=!1,n=void 0;try{for(var i,r=this.targets[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var o=i.value,a=o.value;this.log("Target's content :",a);var l=void 0;try{l=JSON.parse(a)}catch(e){this.error("Unable to parse the CMS JSON for this content : ",a);continue}this.initField(o,l),this.initActions(o,l)}}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"initField",value:function(e,t){this.log("Init field with parsed content :",t),e.setAttribute("hidden","true");var n=document.createElement("div");n.classList.add(this.classes.draggableContainer,this.classes.uiElementList),"sylius"===this.templateRender&&n.classList.add("ui","segment",this.classes.draggableContainer,this.classes.uiElementList);var i=!1,r=!0,o=!1,a=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var c=l.value;if(this.log("Init UI Element :",c),void 0!==this.uiElements[c.type]){var s=this.uiElements[c.type];this.log("Matched Ui Element with meta data :",s);var d=this.renderUiElementMetaData(c.type,s,this.templateRender);""!==d?(this.log("Rendered Ui Element meta data :",d),n.insertAdjacentHTML("beforeend",d)):i=!0}else i=!0,this.error("Cannot find element of type ",c.type)}}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}if(e.insertAdjacentHTML("beforebegin",this.renderActionsButtons(this.templateRender)),!i){e.parentNode.appendChild(n);var f=this.initReorder(document.getElementById(this.id.uiElementContainer),n);this.initReorderEvent(f,e,t)}}},{key:"toggleUiElementsVisibility",value:function(){var e=this,t=document.querySelectorAll("."+this.classes.toggleButton),n=!0,i=!1,r=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)o.value.addEventListener("click",(function(t){t.preventDefault(),document.querySelector("#"+e.id.uiElementContainer).classList.toggle("is-expanded")}))}catch(e){i=!0,r=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw r}}}},{key:"initActions",value:function(e,t){var n=e.parentElement.querySelectorAll("."+this.classes.deleteButton);this.log("Init delete button(s), found : ",n.length);var i=!0,r=!1,o=void 0;try{for(var a,l=n[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){var u=a.value;this.initDeleteButton(u,t,e)}}catch(e){r=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}}},{key:"initDeleteButton",value:function(e,t,n){var i=this;e.onclick=function(){if(confirm(i.translations.confirm_delete)){var r=e.closest("."+i.classes.draggableItem),o=i.getElementIndex(r);!1!==o&&(i.removeUiElement(o,t,n),r.remove())}}}},{key:"renderUiElementMetaData",value:function(e,t,n){return"sylius"===n?'\n            <div class="ui segment raised '.concat(this.classes.draggableItem,'" data-ui-element-type="').concat(e,'">\n                <button class="ui right floated massive button icon ').concat(this.classes.draggableItemHandler,'" type="button"><i class="icon arrows alternate ').concat(this.classes.draggableItemHandler,'"></i></button>\n                <div class="ui grid">\n                    <div class="four wide column">\n                        <img class="ui small image" src="').concat(t.image,'" alt="" width="150" height="150">\n                    </div>\n                    <div class="twelve wide column">\n                        <h2 class="ui header">').concat(t.title,"</h2>\n                        <p>").concat(t.description,'</p>\n                        <div class="ui buttons">\n                            <button class="ui button" type="button">').concat(this.translations.edit,'</button>\n                            <button class="ui button negative ').concat(this.classes.deleteButton,'" type="button">').concat(this.translations.delete,"</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            "):(this.error("Cannot find render for : ",n),"")}},{key:"renderActionsButtons",value:function(e){return"sylius"===e?'\n            <div class="field">\n                <div class="ui buttons">\n                    <button class="ui primary button '.concat(this.classes.toggleButton,'" type="button">').concat(this.translations.new,"</button>\n                </div>\n            </div>\n            "):(this.error("Cannot find render for : ",e),"")}},{key:"initReorder",value:function(e,t){var n=this;return new r.a([e,t],{copy:function(t,n){return n===e},accepts:function(t,n){return n!==e},moves:function(e,t,i){return i.classList.contains(n.classes.draggableItemHandler)}})}},{key:"initReorderEvent",value:function(e,t,n){var i=this;e.on("drag",(function(e,t){if(t.id!==i.id.uiElementContainer){var n=i.getElementIndex(e);!1!==n&&(i.log("Reorder drag start : ",{index:n,el:e,source:t}),i.currentIndex=n)}t.id===i.id.uiElementContainer&&i.log("Copy drag start : ",{el:e,source:t})})),e.on("drop",(function(e,r,o,a){if(o.id!==i.id.uiElementContainer){var l=i.currentIndex,u=i.getElementIndex(e);!1!==u&&(i.log("Reorder drag stop : ",{oldIndex:l,newIndex:u,el:e,targetElement:r,source:o,sibling:a}),i.moveUiElement(l,u,n,t))}if(o.id===i.id.uiElementContainer&&null!==r&&r.classList.contains(i.classes.uiElementList)){i.log("Copy drag stop : ",{el:e,targetElement:r,source:o,sibling:a});var c=i.getElementIndex(e),s=e.dataset.uiElementType;void 0!==s?i.addUiElement(s,c,n,t):i.error("Cannot find `uiElementType` to add in data set",{dataSet:e.dataset,el:e})}}))}},{key:"getElementIndex",value:function(e){return!!e.parentElement&&[].slice.call(e.parentElement.children).indexOf(e)}},{key:"addUiElement",value:function(e,t,n,i){this.log("Add UI Element : ",{type:e,index:t,target:i,beforeMoveJson:n});var r={type:e,fields:[]};n.splice(t,0,r),i.value=JSON.stringify(n),this.log("Added UI Element : ",{afterMoveJson:n,newTargetValue:i.value}),this.initActions(i,n)}},{key:"moveUiElement",value:function(e,t,n,i){e!==t?(this.log("Move UI Element : ",{oldIndex:e,newIndex:t,target:i,beforeMoveJson:n}),t>=n.length&&this.error("Element moved outside the list",{newIndex:t,sizeList:n.length}),n.splice(t,0,n.splice(e,1)[0]),i.value=JSON.stringify(n),this.log("Moved UI Element : ",{afterMoveJson:n,newTargetValue:i.value})):this.log("Not moved UI Element, same index",{oldIndex:e,newIndex:t,target:i,beforeMoveJson:n})}},{key:"removeUiElement",value:function(e,t,n){this.log("Remove UI Element : ",{removedIndex:e,target:n,beforeMoveJson:t}),t.splice(e,1),n.value=JSON.stringify(t),this.log("Removed UI Element : ",{afterMoveJson:t,newTargetValue:n.value})}},{key:"error",value:function(e,t){var n=!0,i=!1,r=void 0;try{for(var o,a=this.targets[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)o.value.removeAttribute("hidden")}catch(e){i=!0,r=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw r}}var l=!0,u=!1,c=void 0;try{for(var s,d=document.querySelectorAll("."+this.classes.uiElementList)[Symbol.iterator]();!(l=(s=d.next()).done);l=!0)s.value.remove()}catch(e){u=!0,c=e}finally{try{l||null==d.return||d.return()}finally{if(u)throw c}}this.debug&&(console.error(e),console.error(t))}},{key:"log",value:function(e,t){this.debug&&(console.log(e),console.log(t))}}])&&o(t.prototype,n),i&&o(t,i),e}();document.addEventListener("DOMContentLoaded",(function(){new a(monsieurbizCmsPluginConfig).init()}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});