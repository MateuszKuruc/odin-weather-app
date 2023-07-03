(()=>{"use strict";var e={811:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nimg {\n  height: 3.5rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-width: 100vw;\n  margin: 0;\n  background-image: linear-gradient(86.3deg, rgb(0, 119, 182) 3.6%, rgb(8, 24, 68) 87.6%);\n}\n\n.header {\n  max-height: 10vh;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  background: rgb(111, 195, 247);\n  background: linear-gradient(121deg, rgb(111, 195, 247) 35%, rgb(194, 253, 255) 100%);\n}\n\n.footer {\n  display: flex;\n  height: 10vh;\n  margin-top: auto;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgb(111, 195, 247);\n  background: linear-gradient(121deg, rgb(111, 195, 247) 35%, rgb(194, 253, 255) 100%);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.topContainer {\n  display: flex;\n  justify-content: space-around;\n  padding: 2rem;\n  align-items: center;\n}\n\n.tempContainer,\n.windContainer,\n.conditionContainer {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 1rem;\n}\n\n.display {\n  margin-top: 5rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  width: min(50%, 500px);\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  gap: 1rem;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 1rem;\n  background: rgb(111, 195, 247);\n  background: linear-gradient(121deg, rgb(111, 195, 247) 35%, rgb(194, 253, 255) 100%);\n}\n\n.hidden {\n  display: none;\n}\n\n.errorMessage {\n  color: red;\n  align-self: center;\n  margin-top: 1rem;\n  background-color: white;\n  border: 7px double red;\n  padding: 0.25rem;\n}\n\n.toggleContainer {\n  color: white;\n  display: flex;\n  gap: 0.5rem;\n}\n\n.searchBar {\n  display: flex;\n  gap: 0.5rem;\n}\n.searchBar input {\n  font-weight: 900;\n  padding: 1rem;\n  height: 3rem;\n  border-radius: 0.5rem;\n  border: 3px solid black;\n}\n\nbutton {\n  font-weight: 900;\n  padding: 1rem;\n  height: 3rem;\n  background: rgb(111, 195, 247);\n  background: linear-gradient(121deg, rgb(111, 195, 247) 35%, rgb(194, 253, 255) 100%);\n  color: black;\n  border: 3px solid black;\n  border-radius: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 18px;\n}",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var d=r(e,o),s=0;s<c.length;s++){var l=t(c[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=d}}},777:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"04be58c17b3d5e974442.svg",n=t.p+"2d681a98e81ee030bfa5.svg",r=t.p+"2e53ea9bc3ebc391becf.svg",o=t.p+"a9e9c499b4d87c419007.svg",c=t.p+"339346fc953ed6c516e7.svg",a=t.p+"a5b664708c3838792d62.svg",i=t.p+"5607fccf6935dac564d0.svg",d=t.p+"3879dad2decd63d182d6.svg",s=t.p+"b761e3a7c7afe1f7baf1.svg",l=t.p+"0ed2931a74bd5a5ee42d.svg";let u;function p(){const{body:t}=document;t.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.textContent="Weather App",e.appendChild(n),e}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("topContainer");const p=document.createElement("div");p.classList.add("searchBar");const m=document.createElement("input");m.type="text",m.classList.add("userInput"),m.placeholder="Enter city name...",m.addEventListener("keypress",(function(e){"Enter"===e.key&&async function(){if(u=m.value,m.value.length<2)return;const e=await async function(){try{const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=96c79cc416274630a78142949232906&q=${u}`,{mode:"cors"}),n=await e.json(),t=n.location.country,r=n.location.name,o=n.current.condition.text,c=n.current.temp_c;return{countryName:t,cityName:r,condition:o,tempC:c,tempF:n.current.temp_f,windKph:n.current.wind_kph,windMph:n.current.wind_mph}}catch(e){throw document.querySelector(".errorMessage").classList.remove("hidden"),e}}();C.querySelectorAll(".conditionImage").forEach((e=>{e.remove()})),async function(e){document.querySelector(".display").classList.remove("hidden"),document.querySelector(".cityName").textContent=e.cityName,document.querySelector(".countryName").textContent=e.countryName;const t=document.querySelector(".conditionContainer"),s=document.querySelector(".condition");s.textContent=e.condition;const l=document.createElement("img");l.classList.add("conditionImage"),s.textContent.includes("sunny")||s.textContent.includes("Sunny")||s.textContent.includes("Clear")?l.src=n:s.textContent.includes("rain")||s.textContent.includes("Rain")||s.textContent.includes("drizzle")?l.src=a:s.textContent.includes("partly")?l.src=c:s.textContent.includes("snow")||s.textContent.includes("Snow")||s.textContent.includes("sleet")||s.textContent.includes("freez")||s.textContent.includes("Blizzard")?l.src=i:s.textContent.includes("mist")||s.textContent.includes("Mist")||s.textContent.includes("Fog")||s.textContent.includes("fog")?l.src=o:s.textContent.includes("cloud")||s.textContent.includes("Cloud")||s.textContent.includes("Overcast")?l.src=r:(s.textContent.includes("thunder")||s.textContent.includes("Thunder"))&&(l.src=d),t.appendChild(l),document.querySelector(".tempC").textContent=`${e.tempC} °C`,document.querySelector(".tempF").textContent=`${e.tempF} °F`,document.querySelector(".windKph").textContent=`${e.windKph} km/h`,document.querySelector(".windMph").textContent=`${e.windMph} mph`}(e),m.value="",g.classList.add("hidden")}()}));const h=document.createElement("button");h.classList.add("searchButton"),h.textContent="Search";const g=document.createElement("h4");g.classList.add("errorMessage"),g.textContent="Please enter valid location details!",g.classList.add("hidden"),e.appendChild(g),p.appendChild(m),p.appendChild(h);const f=document.createElement("div");f.classList.add("toggleContainer");const v=document.createElement("input");v.classList.add("toggleSwitch"),v.type="checkbox",v.checked="true",v.id="toggle";const y=document.createElement("lable");y.htmlFor="toggle",y.textContent="°C/kmh",v.addEventListener("click",(function(){M.classList.toggle("hidden"),S.classList.toggle("hidden"),N.classList.toggle("hidden"),q.classList.toggle("hidden")})),f.appendChild(v),f.appendChild(y),t.appendChild(p),t.appendChild(f);const C=document.createElement("div");C.classList.add("display"),C.classList.add("hidden");const b=document.createElement("h1");b.classList.add("cityName");const x=document.createElement("h5");x.classList.add("countryName");const w=document.createElement("div");w.classList.add("conditionContainer");const E=document.createElement("h2");E.classList.add("condition"),w.appendChild(E);const L=document.createElement("div");L.classList.add("tempContainer");const k=document.createElement("img");k.src=s;const S=document.createElement("h2");S.classList.add("tempC");const M=document.createElement("h2");M.classList.add("tempF"),M.classList.add("hidden"),L.appendChild(k),L.appendChild(S),L.appendChild(M);const j=document.createElement("div");j.classList.add("windContainer");const T=document.createElement("img");T.src=l;const q=document.createElement("h2");q.classList.add("windKph");const N=document.createElement("h2");return N.classList.add("windMph"),N.classList.add("hidden"),j.appendChild(T),j.appendChild(q),j.appendChild(N),[b,x,w,L,j].forEach((e=>{C.appendChild(e)})),e.appendChild(t),e.appendChild(C),e}()),t.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const t=document.createElement("h4");t.textContent="Mateusz Kuruc 2023";const r=document.createElement("img");r.src=e;const o=document.createElement("a");return o.href="https://github.com/MateuszKuruc?tab=repositories",o.target="blank",o.appendChild(r),n.appendChild(t),n.appendChild(o),n}())}var m=t(379),h=t.n(m),g=t(795),f=t.n(g),v=t(777),y=t.n(v),C=t(565),b=t.n(C),x=t(216),w=t.n(x),E=t(589),L=t.n(E),k=t(811),S={};S.styleTagTransform=L(),S.setAttributes=b(),S.insert=y().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=w(),h()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals,window.onload=()=>{p()}})()})();