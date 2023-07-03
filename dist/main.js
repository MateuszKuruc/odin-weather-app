(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var d=c.length-1;d>-1&&!t;)t=c[d--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"04be58c17b3d5e974442.svg",n=e.p+"2d681a98e81ee030bfa5.svg",c=e.p+"2e53ea9bc3ebc391becf.svg",d=e.p+"a9e9c499b4d87c419007.svg",o=e.p+"339346fc953ed6c516e7.svg",s=e.p+"a5b664708c3838792d62.svg",a=e.p+"5607fccf6935dac564d0.svg",i=e.p+"3879dad2decd63d182d6.svg",r=e.p+"b761e3a7c7afe1f7baf1.svg",l=e.p+"0ed2931a74bd5a5ee42d.svg";let u;function p(){const{body:e}=document;e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("h1");return t.textContent="Weather App",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("topContainer");const p=document.createElement("div");p.classList.add("searchBar");const m=document.createElement("input");m.type="text",m.classList.add("userInput"),m.placeholder="Enter city name...",m.addEventListener("keypress",(function(e){"Enter"===e.key&&async function(){if(u=m.value,m.value.length<2)return;const e=await async function(){try{const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=96c79cc416274630a78142949232906&q=${u}`,{mode:"cors"}),t=await e.json(),n=t.location.country,c=t.location.name,d=t.current.condition.text,o=t.current.temp_c;return{countryName:n,cityName:c,condition:d,tempC:o,tempF:t.current.temp_f,windKph:t.current.wind_kph,windMph:t.current.wind_mph}}catch(e){throw document.querySelector(".errorMessage").classList.remove("hidden"),e}}();v.querySelectorAll(".conditionImage").forEach((e=>{e.remove()})),async function(e){document.querySelector(".display").classList.remove("hidden"),document.querySelector(".cityName").textContent=e.cityName,document.querySelector(".countryName").textContent=e.countryName;const t=document.querySelector(".conditionContainer"),r=document.querySelector(".condition");r.textContent=e.condition;const l=document.createElement("img");l.classList.add("conditionImage"),r.textContent.includes("sunny")||r.textContent.includes("Sunny")||r.textContent.includes("Clear")?l.src=n:r.textContent.includes("rain")||r.textContent.includes("Rain")||r.textContent.includes("drizzle")?l.src=s:r.textContent.includes("partly")?l.src=o:r.textContent.includes("snow")||r.textContent.includes("Snow")||r.textContent.includes("sleet")||r.textContent.includes("freez")||r.textContent.includes("Blizzard")?l.src=a:r.textContent.includes("mist")||r.textContent.includes("Mist")||r.textContent.includes("Fog")||r.textContent.includes("fog")?l.src=d:r.textContent.includes("cloud")||r.textContent.includes("Cloud")||r.textContent.includes("Overcast")?l.src=c:(r.textContent.includes("thunder")||r.textContent.includes("Thunder"))&&(l.src=i),t.appendChild(l),document.querySelector(".tempC").textContent=`${e.tempC} °C`,document.querySelector(".tempF").textContent=`${e.tempF} °F`,document.querySelector(".windKph").textContent=`${e.windKph} km/h`,document.querySelector(".windMph").textContent=`${e.windMph} mph`}(e),m.value="",C.classList.add("hidden")}()}));const h=document.createElement("button");h.classList.add("searchButton"),h.textContent="Search";const C=document.createElement("h4");C.classList.add("errorMessage"),C.textContent="Please enter valid location details!",C.classList.add("hidden"),e.appendChild(C),p.appendChild(m),p.appendChild(h);const g=document.createElement("div");g.classList.add("toggleContainer");const y=document.createElement("input");y.classList.add("toggleSwitch"),y.type="checkbox",y.checked="true",y.id="toggle";const E=document.createElement("lable");E.htmlFor="toggle",E.textContent="°C/kmh",y.addEventListener("click",(function(){k.classList.toggle("hidden"),q.classList.toggle("hidden"),$.classList.toggle("hidden"),F.classList.toggle("hidden")})),g.appendChild(y),g.appendChild(E),t.appendChild(p),t.appendChild(g);const v=document.createElement("div");v.classList.add("display"),v.classList.add("hidden");const x=document.createElement("h1");x.classList.add("cityName");const f=document.createElement("h5");f.classList.add("countryName");const L=document.createElement("div");L.classList.add("conditionContainer");const w=document.createElement("h2");w.classList.add("condition"),L.appendChild(w);const b=document.createElement("div");b.classList.add("tempContainer");const S=document.createElement("img");S.src=r;const q=document.createElement("h2");q.classList.add("tempC");const k=document.createElement("h2");k.classList.add("tempF"),k.classList.add("hidden"),b.appendChild(S),b.appendChild(q),b.appendChild(k);const M=document.createElement("div");M.classList.add("windContainer");const N=document.createElement("img");N.src=l;const F=document.createElement("h2");F.classList.add("windKph");const $=document.createElement("h2");return $.classList.add("windMph"),$.classList.add("hidden"),M.appendChild(N),M.appendChild(F),M.appendChild($),[x,f,L,b,M].forEach((e=>{v.appendChild(e)})),e.appendChild(t),e.appendChild(v),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("h4");n.textContent="Mateusz Kuruc 2023";const c=document.createElement("img");c.src=t;const d=document.createElement("a");return d.href="https://github.com/MateuszKuruc?tab=repositories",d.target="blank",d.appendChild(c),e.appendChild(n),e.appendChild(d),e}())}window.onload=()=>{p()}})();