(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{300:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var r=n(1862);let o=["light","dark"],s="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,r.createContext)(void 0),a={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:a},d=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:a="theme",themes:c=u,defaultTheme:d=n?"system":"light",attribute:m="data-theme",value:y,children:p,nonce:b})=>{let[g,_]=(0,r.useState)(()=>h(a,d)),[k,$]=(0,r.useState)(()=>h(a)),S=y?Object.values(y):c,x=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=w());let s=y?y[r]:r,l=t?v():null,a=document.documentElement;if("class"===m?(a.classList.remove(...S),s&&a.classList.add(s)):s?a.setAttribute(m,s):a.removeAttribute(m),i){let e=o.includes(d)?d:null,t=o.includes(r)?r:e;a.style.colorScheme=t}null==l||l()},[]),E=(0,r.useCallback)(e=>{_(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),C=(0,r.useCallback)(t=>{let r=w(t);$(r),"system"===g&&n&&!e&&x("system")},[g,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,r.useEffect)(()=>{let e=e=>{e.key===a&&E(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{x(null!=e?e:g)},[e,g]);let T=(0,r.useMemo)(()=>({theme:g,setTheme:E,forcedTheme:e,resolvedTheme:"system"===g?k:g,themes:n?[...c,"system"]:c,systemTheme:n?k:void 0}),[g,E,e,k,n,c]);return r.createElement(l.Provider,{value:T},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:a,themes:c,defaultTheme:d,attribute:m,value:y,children:p,attrs:S,nonce:b}),p)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:a,value:c,attrs:d,nonce:u})=>{let m="system"===a,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?o.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let s=c?c[e]:e,i=t?e+"|| ''":`'${s}'`,a="";return l&&r&&!t&&o.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===n?a+=t||s?`c.add(${i})`:"null":s&&(a+=`d[s](n,${i})`),a},w=e?`!function(){${f}${v(e)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${m?"":"else{"+v(a,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(a,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:w}})},()=>!0),h=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},w=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},147:function(e,t,n){Promise.resolve().then(n.t.bind(n,576,23)),Promise.resolve().then(n.t.bind(n,6593,23)),Promise.resolve().then(n.bind(n,1587)),Promise.resolve().then(n.bind(n,9107)),Promise.resolve().then(n.bind(n,4530)),Promise.resolve().then(n.t.bind(n,6581,23))},4530:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return a}});var r=n(9622),o=n(1862),s=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function i(){return"development"===(window.vam||"production")}function l({beforeSend:e,debug:t=!0,mode:n="auto"}){return(0,o.useEffect)(()=>{!function(e={debug:!0}){var t;if(!("undefined"!=typeof window))return;(function(e="auto"){if("auto"===e){window.vam="production";return}window.vam=e})(e.mode),s(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let n=i()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${n}"]`))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.setAttribute("data-sdkn","@vercel/analytics"),r.setAttribute("data-sdkv","1.0.1"),i()&&!1===e.debug&&r.setAttribute("data-debug","false"),document.head.appendChild(r)}({beforeSend:e,debug:t,mode:n})},[e,t,n]),null}function a(){return(0,r.jsx)(l,{})}},1587:function(e,t,n){"use strict";n.r(t),n.d(t,{ModeToggle:function(){return s}});var r=n(9622),o=n(300);function s(){let{setTheme:e,theme:t}=(0,o.F)();return(0,r.jsxs)("button",{onClick:()=>e("light"===t?"dark":"light"),className:"border rounded-md w-6 h-6 flex items-center justify-center",children:[(0,r.jsx)("span",{className:"sr-only",children:"Toggle mode"}),"dark"!==t?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})]})}},9107:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return s}});var r=n(9622);n(1862);var o=n(300);function s(e){let{children:t,...n}=e;return(0,r.jsx)(o.f,{...n,children:t})}},6593:function(){},6581:function(e){e.exports={style:{fontFamily:"'__Inter_d9825c', '__Inter_Fallback_d9825c'",fontStyle:"normal"},className:"__className_d9825c"}},2512:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1862),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:i.current}}t.jsx=a,t.jsxs=a},9622:function(e,t,n){"use strict";e.exports=n(2512)}},function(e){e.O(0,[576,827,759,744],function(){return e(e.s=147)}),_N_E=e.O()}]);