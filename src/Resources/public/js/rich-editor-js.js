!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/",i(i.s="ng4s")}({"2mad":function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},mf8f:function(e,t,i){"use strict";var s={documentSelector:".js-document",documentDisabledClass:"is-disabled",openingTriggerActiveClass:"is-active",delay:200},n=['[href]:not([tabindex^="-"])','input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])','input[type="radio"]:checked','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])','[contenteditable="true"]:not([tabindex^="-"])'],o="Escape",r="Tab",l="F6";function c(e,t){let i=e;for(;i!==t&&i;)i=i.parentNode;return!!i}const a=Symbol("onClick"),h=Symbol("onKeydown"),u=Symbol("addEventDelegation"),d=Symbol("addEventListeners"),g=Symbol("removeEventListeners"),f=Symbol("addAttributes"),b=Symbol("removeAttributes"),m=Symbol("setAttributes"),p=Symbol("setFocusableElements"),y=Symbol("setFocus"),v=Symbol("restoreFocus"),E=Symbol("switchFocus"),S=Symbol("maintainFocus"),A=Symbol("addObserver"),T=Symbol("removeObserver");let k=s;t.a=class{constructor(e,{onOpen:t=(()=>{}),onClose:i=(()=>{}),openingSelector:s,closingSelector:n,backdropSelector:o,helperSelector:r,labelledby:l,describedby:c,isModal:d=!0,isTooltip:g=!1,isOpen:f=!1,isCreated:b=!0,disableScroll:m=!0,enableAutoFocus:y=!0,openingTriggerActiveClass:v=k.openingTriggerActiveClass,delay:S=k.delay}={}){document.querySelector(e)?(this.config={dialogSelector:e,onOpen:t,onClose:i,openingSelector:s,closingSelector:n,backdropSelector:o,helperSelector:r,labelledby:l,describedby:c,isModal:d,isTooltip:g,isCreated:b,isOpen:f,disableScroll:m,enableAutoFocus:y,documentSelector:k.documentSelector,documentDisabledClass:k.documentDisabledClass,openingTriggerActiveClass:v,delay:S},this.dialog=document.querySelector(e),this.dialogArea=`${e}, ${s}`,this.openingTriggers=document.querySelectorAll(s),this.backdropTrigger=document.querySelector(o),this.helpers=document.querySelectorAll(r),this.document=document.querySelector(this.config.documentSelector)||document.querySelector("html"),this.documentIsAlreadyDisabled=!1,this.focusableElements=[],this.firstFocusableElement=null,this.lastFocusableElement=null,this.openingTrigger=null,this.closingTrigger=null,this.isCreated=!1,this.isOpen=!1,this.close=this.close.bind(this),this.toggle=this.toggle.bind(this),this[a]=this[a].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this),this[E]=this[E].bind(this),this.observer=new MutationObserver(e=>e.forEach(()=>this[p]())),this.isInitialized=!0,b&&this.create()):this.isInitialized=!1}[a](e){this.config.isTooltip&&!e.target.closest(this.dialogArea)&&this.close(e),e.target===this.backdropTrigger&&this.close(e)}[h](e){switch(e.key){case o:e.stopPropagation(),this.close(e);break;case l:this.config.isModal||(this.config.isTooltip?this.close(e):this[v]());break;case r:this[S](e)}}[u](e){document.querySelectorAll(this.config.openingSelector).forEach(t=>{c(e.target,t)&&(this.openingTrigger=t,this.toggle(e))}),document.querySelectorAll(this.config.closingSelector).forEach(t=>{c(e.target,t)&&(this.closingTrigger=t,this.close())})}[d](){document.addEventListener("click",this[a],{capture:!0}),this.dialog.addEventListener("keydown",this[h])}[g](){document.removeEventListener("click",this[a],{capture:!0}),this.dialog.removeEventListener("keydown",this[h]),this.openingTrigger&&this.openingTrigger.removeEventListener("keydown",this[E])}[f](){this.dialog.setAttribute("role","dialog"),this.dialog.setAttribute("tabindex",-1),this.dialog.setAttribute("aria-hidden",!0),this.config.labelledby&&this.dialog.setAttribute("aria-labelledby",this.config.labelledby),this.config.describedby&&this.dialog.setAttribute("aria-describedby",this.config.describedby),this.config.isModal&&this.dialog.setAttribute("aria-modal",!0),this.openingTriggers.forEach(e=>e.setAttribute("aria-haspopup","dialog"))}[b](){this.dialog.removeAttribute("role"),this.dialog.removeAttribute("tabindex"),this.dialog.removeAttribute("aria-hidden"),this.dialog.removeAttribute("aria-labelledby"),this.dialog.removeAttribute("aria-describedby"),this.dialog.removeAttribute("aria-modal"),this.config.disableScroll&&this.isOpen&&!this.documentIsAlreadyDisabled&&this.document.classList.remove(this.config.documentDisabledClass),this.openingTriggers.forEach(e=>e.removeAttribute("aria-haspopup")),this.openingTrigger&&this.openingTrigger.classList.remove(this.config.openingTriggerActiveClass),this.helpers.forEach(e=>e.classList.remove(this.config.openingTriggerActiveClass))}[m](){this.dialog.setAttribute("aria-hidden",!this.isOpen),this.config.disableScroll&&!this.documentIsAlreadyDisabled&&(this.isOpen?this.document.classList.add(this.config.documentDisabledClass):this.document.classList.remove(this.config.documentDisabledClass)),this.openingTrigger&&(this.isOpen?this.openingTrigger.classList.add(this.config.openingTriggerActiveClass):this.openingTrigger.classList.remove(this.config.openingTriggerActiveClass)),this.helpers.forEach(e=>{this.isOpen?e.classList.add(this.config.openingTriggerActiveClass):e.classList.remove(this.config.openingTriggerActiveClass)})}[p](){const e=function(e){const t=[];return e.forEach(e=>{const i=e.getBoundingClientRect();(i.width>0||i.height>0)&&t.push(e)}),t}(this.dialog.querySelectorAll(n)),t=function(e,t,i){const s=e.querySelectorAll(t),n=[];let o=!1;return 0===s.length?i:(i.forEach(e=>{s.forEach(t=>{t.contains(e)&&(o=!0)}),o||n.push(e),o=!1}),n)}(this.dialog,'[role="dialog"]',e);this.focusableElements=t.length>0?t:[this.dialog],[this.firstFocusableElement]=this.focusableElements,this.lastFocusableElement=this.focusableElements[this.focusableElements.length-1]}[y](){this.config.enableAutoFocus&&window.setTimeout(()=>this.firstFocusableElement.focus(),this.config.delay)}[v](){this.config.enableAutoFocus&&window.setTimeout(()=>this.openingTrigger.focus(),this.config.delay),this.isOpen&&this.openingTrigger.addEventListener("keydown",this[E])}[E](e){e.key===l&&(this.openingTrigger.removeEventListener("keydown",this[E]),this[y]())}[S](e){e.shiftKey&&e.target===this.firstFocusableElement&&(e.preventDefault(),this.lastFocusableElement.focus()),e.shiftKey||e.target!==this.lastFocusableElement||(e.preventDefault(),this.firstFocusableElement.focus())}[A](){this.observer.observe(this.dialog,{childList:!0,attributes:!0,subtree:!0})}[T](){this.observer.disconnect()}open(){this.isInitialized&&this.isCreated&&!this.isOpen&&(this.isOpen=!0,this.documentIsAlreadyDisabled=this.document.classList.contains(this.config.documentDisabledClass),this[m](),this[d](),this[y](),this.config.onOpen(this.dialog,this.openingTrigger))}close(e){this.isInitialized&&this.isCreated&&this.isOpen&&(this.isOpen=!1,e&&e.preventDefault(),this[m](),this[g](),this.openingTrigger&&(!this.config.isTooltip||this.config.isTooltip&&e&&"click"!==e.type)&&this[v](),this.config.onClose(this.dialog,this.closingTrigger))}toggle(e){this.isInitialized&&this.isCreated&&(e&&e.preventDefault(),this.isOpen?this.close():this.open())}create(){this.isInitialized&&!this.isCreated&&(this.isCreated=!0,this[f](),this[p](),this[A](),this.config.isOpen&&this.open(),document.addEventListener("click",this[u],{capture:!0}))}destroy(){this.isInitialized&&this.isCreated&&(this.close(),this.isCreated=!1,this[b](),this[g](),this[T](),document.removeEventListener("click",this[u],{capture:!0}))}}},ng4s:function(e,t,i){"use strict";i.r(t),function(e){var t=i("mf8f");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function o(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}e.Dialog=t.a,e.MonsieurBizRichEditorConfig=function(){function e(t,i){s(this,e),this.input=t,this.uielements=i}return o(e,[{key:"findUiElementByCode",value:function(e){return void 0===this.uielements[e]?null:this.uielements[e]}}]),e}(),e.MonsieurBizRichEditorUiElement=function(){function e(t,i,n){s(this,e),this.config=t,this.code=i,this.data=n}return o(e,[{key:"toJSON",value:function(){return{code:this.code,data:this.data}}},{key:"up",value:function(){this.manager.moveUp(this)}},{key:"down",value:function(){this.manager.moveDown(this)}},{key:"uielement",get:function(){return this.config.findUiElementByCode(this.code)}},{key:"title",get:function(){return this.uielement.title}},{key:"description",get:function(){return this.uielement.description}},{key:"icon",get:function(){return this.uielement.icon}},{key:"manager",get:function(){return this.config.input.manager}}]),e}(),e.MonsieurBizRichEditorManager=function(){function e(t){s(this,e),this.config=t;try{this.initUiElements(JSON.parse(this.input.value))}catch(e){this.uiElements=[]}this.write()}return o(e,[{key:"initUiElements",value:function(e){for(var t in this.uiElements=[],e)null!==this.config.findUiElementByCode(t.code)&&this.uiElements.put(new MonsieurBizRichEditorUiElement(this.config,t.code,t.data))}},{key:"write",value:function(){this.input.value=JSON.stringify(this.uiElements)}},{key:"create",value:function(e,t){var i=new MonsieurBizRichEditorUiElement(this.config,t,{});return this.uiElements.splice(e,0,i),this.write(),i}},{key:"moveUp",value:function(e){var t=this.uiElements.indexOf(e);0!==t&&(this.uiElements.splice(t,1),this.uiElements.splice(t-1,0,e),this.write())}},{key:"moveDown",value:function(e){var t=this.uiElements.indexOf(e);t!==this.uiElements.length-1&&(this.uiElements.splice(t,1),this.uiElements.splice(t+1,0,e),this.write())}},{key:"delete",value:function(e){var t=this.uiElements.indexOf(e);this.uiElements.splice(t,1),this.write()}},{key:"input",get:function(){return this.config.input}}]),e}()}.call(this,i("2mad"))}});