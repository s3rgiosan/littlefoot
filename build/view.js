!function(){var t={167:function(t,e){!function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n={};Object.defineProperty(n,"__esModule",{value:!0});var r=n.getStyle=void 0;r=n.getStyle=function(t,e){var n,r=((null===(n=t.ownerDocument)||void 0===n?void 0:n.defaultView)||window).getComputedStyle(t);return r.getPropertyValue(e)||r[e]};var o={};Object.defineProperty(o,"__esModule",{value:!0});var i=o.pixels=void 0,a=n,u=96,c=25.4;function l(t){return t?(0,a.getStyle)(t,"fontSize")||l(t.parentElement):(0,a.getStyle)(window.document.documentElement,"fontSize")}function s(t,e){t.classList.add(e)}function f(t,e){t.classList.remove(e)}function d(t){var e;null===(e=t.parentNode)||void 0===e||e.removeChild(t)}i=o.pixels=function t(e,n){var r,o,i=null!==(o=null===(r=null==n?void 0:n.ownerDocument)||void 0===r?void 0:r.defaultView)&&void 0!==o?o:window,a=i.document.documentElement||i.document.body,s=function(t){var e,n=t||"0",r=parseFloat(n),o=n.match(/[\d-.]+(\w+)$/);return[r,(null!==(e=null==o?void 0:o[1])&&void 0!==e?e:"").toLowerCase()]}(e),f=s[0];switch(s[1]){case"rem":return f*t(l(window.document.documentElement));case"em":return f*t(l(n),null==n?void 0:n.parentElement);case"in":return f*u;case"q":return f*u/c/4;case"mm":return f*u/c;case"cm":return f*u*10/c;case"pt":return f*u/72;case"pc":return f*u/6;case"vh":return(f*i.innerHeight||a.clientWidth)/100;case"vw":return(f*i.innerWidth||a.clientHeight)/100;case"vmin":return f*Math.min(i.innerWidth||a.clientWidth,i.innerHeight||a.clientHeight)/100;case"vmax":return f*Math.max(i.innerWidth||a.clientWidth,i.innerHeight||a.clientHeight)/100;default:return f}};var v="littlefoot__tooltip",p="is-";function m(t){var e=t.offsetHeight,n=t.getBoundingClientRect().top+e/2;return{above:n,below:window.innerHeight-n}}function h(t){var e=parseFloat(r(t,"marginLeft")),n=t.offsetWidth-e;return(t.getBoundingClientRect().left+n/2)/window.innerWidth}function g(t,e){var n=2*parseInt(r(t,"marginTop"),10)+t.offsetHeight;return e.below<n&&e.below<e.above?"above":"below"}var y="is-active",b="is-changing",w="is-scrollable",E=function(t){return!!t.parentElement};function x(t){var e=t.id,n=t.button,o=t.content,a=t.host,u=t.popover,c=t.wrapper,l=!1,x=0,H="above";return{id:e,activate:function(t){var e;n.setAttribute("aria-expanded","true"),s(n,b),s(n,y),n.insertAdjacentElement("afterend",u),u.style.maxWidth=document.body.clientWidth+"px",e=o,x=Math.round(i(r(e,"maxHeight"),e)),null==t||t(u,n)},dismiss:function(t){n.setAttribute("aria-expanded","false"),s(n,b),f(n,y),f(u,y),null==t||t(u,n)},isActive:function(){return n.classList.contains(y)},isReady:function(){return!n.classList.contains(b)},isHovered:function(){return l},ready:function(){s(u,y),f(n,b)},remove:function(){d(u),f(n,b)},reposition:function(){E(u)&&(o.style.maxHeight=function(t,e,n){var o=m(e),i=g(t,o),a=parseInt(r(t,"marginTop"),10);return Math.min(n,o[i]-a-15)}(u,n,x)+"px",H=function(t,e,n){var r=g(t,m(e));if(n!==r){f(t,p+n),s(t,p+r);var o=100*h(e)+"%",i="above"===r?"100%":"0";t.style.transformOrigin=o+" "+i}return r}(u,n,H),u.offsetHeight<o.scrollHeight?(s(u,w),o.setAttribute("tabindex","0")):(f(u,w),o.removeAttribute("tabindex")))},resize:function(){E(u)&&(u.style.left=function(t,e){var n=t.offsetWidth;return-h(e)*n+parseInt(r(e,"marginLeft"),10)+e.offsetWidth/2}(o,n)+"px",c.style.maxWidth=o.offsetWidth+"px",function(t,e){var n=t.querySelector("."+v);n&&(n.style.left=100*h(e)+"%")}(u,n))},startHovering:function(){l=!0},stopHovering:function(){l=!1},destroy:function(){return d(a)}}}var H={};Object.defineProperty(H,"__esModule",{value:!0});var S=H.throttle=void 0;S=H.throttle=function(t,e){void 0===e&&(e=0);var n,r=0;return Object.assign((function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var a=Math.max(0,r+e-Date.now());a?(clearTimeout(n),n=setTimeout((function(){r=Date.now(),t.apply(void 0,o)}),a)):(r=Date.now(),t.apply(void 0,o))}),{cancel:function(){r=0,clearTimeout(n)}})};var A=16,D="is-fully-scrolled",_=function(t){return function(e){var n=e.currentTarget,r=-e.deltaY;r>0&&f(t,D),n&&r<=0&&r<n.clientHeight+n.scrollTop-n.scrollHeight&&s(t,D)}},M="littlefoot__content",T="littlefoot__wrapper",O="littlefoot--print",L="littlefoot",W=function(t){return s(t,O)};function C(t,e){return Array.from(t.querySelectorAll(e))}function P(t,e){return t.querySelector("."+e)||t.firstElementChild||t}function j(t){var e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function I(t){return void 0!==t}function R(t){var e=t.parentElement,n=function(t,e){return Array.from(t.children).filter((function(t){return 8!==t.nodeType&&t.matches(e)}))}(e,":not(."+O+")"),r=n.filter((function(t){return"HR"===t.tagName}));n.length===r.length&&(r.concat(e).forEach(W),R(e))}function k(t){var e=t.parentElement;d(t),e.innerHTML.replace("[]","").replace("&nbsp;"," ").trim()||k(e)}function z(t,e){var n=j(t.body.outerHTML);C(n,'[href$="#'+t.referenceId+'"]').forEach(k);var r=n.innerHTML.trim();return{original:t,data:{id:String(e+1),number:e+1,reference:"lf-"+t.referenceId,content:r.startsWith("<")?r:"<p>"+r+"</p>"}}}var q=function(t){var n=0,r=null;return function(o){var i=o.original,a=o.data,u=i.reference.closest(t);return n=r===u?n+1:1,r=u,{original:i,data:e(e({},a),{number:n})}}};function F(t){var e=/<%=?\s*(\w+?)\s*%>/g;return function(n){return t.replace(e,(function(t,e){var r;return String(null!==(r=n[e])&&void 0!==r?r:"")}))}}function B(t){var e=t.allowDuplicates,n=t.anchorParentSelector,r=t.anchorPattern,o=t.buttonTemplate,i=t.contentTemplate,a=t.footnoteSelector,u=t.numberResetSelector,c=t.scope,l=function(t,e,n){return C(t,n+' a[href*="#"]').filter((function(t){return(t.href+t.rel).match(e)}))}(document,r,c).map(function(t,e,n,r){var o=[];return function(i){var a=i.href.split("#")[1],u=C(t,"#"+window.CSS.escape(a)).find((function(t){return e||!o.includes(t)})),c=null==u?void 0:u.closest(r);if(c){o.push(c);var l=i.closest(n)||i;return{reference:l,referenceId:l.id||i.id,body:c}}}}(document,e,n,a)).filter(I).map(z).map(u?q(u):function(t){return t}).map(function(t,e){var n=F(t),r=F(e);return function(t){var e=t.original,o=t.data,i=o.id,a=j('<span class="'.concat(L,'">').concat(n(o),"</span>")),u=a.firstElementChild;u.setAttribute("aria-expanded","false"),u.dataset.footnoteButton="",u.dataset.footnoteId=i;var c=j(r(o));c.dataset.footnotePopover="",c.dataset.footnoteId=i;var l=P(c,T),s=P(c,M);return function(t,e){t.addEventListener("wheel",S(_(e),A))}(s,c),{original:e,data:o,id:i,button:u,host:a,popover:c,content:s,wrapper:l}}}(o,i)).map((function(t){return W(t.original.reference),W(t.original.body),R(t.original.body),t.original.reference.insertAdjacentElement("beforebegin",t.host),t})).map(x);return{footnotes:l,unmount:function(){l.forEach((function(t){return t.destroy()})),C(document,"."+O).forEach((function(t){return f(t,O)}))}}}var N={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,footnoteSelector:"li",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:'<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="'.concat(T,'"><div class="').concat(M,'"><% content %></div></div><div class="').concat(v,'"></div></aside>'),buttonTemplate:'<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'},V="[data-footnote-id]",U=function(t,e){return t.target.closest(e)},Y=function(t){return null==t?void 0:t.dataset.footnoteId},$=function(t){return function(e){e.preventDefault();var n=U(e,V),r=Y(n);r&&t(r)}},J=document.addEventListener,G=window.addEventListener,K=function(t,e,n,r){J(t,(function(t){var r=t.target;(null==r?void 0:r.closest(e))&&n.call(r,t)}),r)};function Q(t){void 0===t&&(t={});var n=e(e({},N),t),r=function(t,e){var n=t.footnotes,r=t.unmount,o=function(t){return function(n){n.isReady()&&(n.dismiss(e.dismissCallback),setTimeout(n.remove,t))}},i=function(t){return function(r){e.allowMultiple||n.filter((function(t){return t.id!==r.id})).forEach(o(e.dismissDelay)),r.isReady()&&(r.activate(e.activateCallback),r.reposition(),r.resize(),setTimeout(r.ready,t))}},a=function(t){return function(e){var r=n.find((function(t){return t.id===e}));r&&t(r)}};return{activate:function(t,e){return a(i(e))(t)},dismiss:function(t,e){return a(o(e))(t)},dismissAll:function(){return n.forEach(o(e.dismissDelay))},repositionAll:function(){return n.forEach((function(t){return t.reposition()}))},resizeAll:function(){return n.forEach((function(t){return t.resize()}))},toggle:a((function(t){return t.isActive()?o(e.dismissDelay)(t):i(e.activateDelay)(t)})),hover:a((function(t){t.startHovering(),e.activateOnHover&&!t.isActive()&&i(e.hoverDelay)(t)})),unhover:a((function(t){t.stopHovering(),e.dismissOnUnhover&&setTimeout((function(){return n.filter((function(t){return!t.isHovered()})).forEach(o(e.dismissDelay))}),e.hoverDelay)})),unmount:r}}(B(n),n),o=function(t){var e=new AbortController,n=e.signal,r=function(t,e){return function(n){var r=U(n,"[data-footnote-button]"),o=Y(r);o?t(o):U(n,"[data-footnote-popover]")||e()}}(t.toggle,t.dismissAll),o=function(t){return function(e){27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||t()}}(t.dismissAll),i=S(t.repositionAll,16),a=S(t.resizeAll,16),u=$(t.hover),c=$(t.unhover);return J("touchend",r,{signal:n}),J("click",r,{signal:n}),J("keyup",o,{signal:n}),J("gestureend",i,{signal:n}),G("scroll",i,{signal:n}),G("resize",a,{signal:n}),K("mouseover",V,u,{signal:n}),K("mouseout",V,c,{signal:n}),function(){e.abort()}}(r);return{activate:function(t,e){void 0===e&&(e=n.activateDelay),r.activate(t,e)},dismiss:function(t,e){void 0===e&&(e=n.dismissDelay),void 0===t?r.dismissAll():r.dismiss(t,e)},unmount:function(){o(),r.unmount()},getSetting:function(t){return n[t]},updateSetting:function(t,e){n[t]=e}}}t.default=Q,t.littlefoot=Q,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(167),e=n.n(t);document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".wp-block-footnotes[data-littlefoot]");if(t){let n={};try{n=JSON.parse(t.dataset.littlefoot)}catch(t){return void console.error(t)}n.isLittlefootEnabled&&e()({scope:"[data-fn]",anchorPattern:/[0-9a-fA-F-]+/gi,...n})}}))}()}();