if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./pwabuilder-sw.js",["./workbox-8a0bbd41"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"styles/global.css",revision:"b92711ea0498e7ed25dd7094aae2c055"},{url:"assets/material-icon.svg",revision:"5c6d379e4165b9f31ef75b5b82b0f3dc"},{url:"app-about-1d35f1a7.js",revision:"fda1fe719ee32c3e4edcb353dfdd2b78"},{url:"app-index-d0e16766.js",revision:"46a9e72a7224cd8f5004be23bfaac55a"},{url:"app-index.js",revision:"7da82cd4a4f5f74f0b8f5f81d01e2502"},{url:"index.html",revision:"0377d4cee39c8ba86b93a7918042fe58"},{url:"assets/icon_192.png",revision:"a80ffffb8d3a555b25a0f19a0a9878f1"},{url:"assets/icon_24.png",revision:"04fa5b0f5827d885b678f0d131406aab"},{url:"assets/icon_48.png",revision:"3dbd388868265c8498acfe676ef27811"},{url:"assets/icon_512.png",revision:"414aacb61ad294e75f267554db7e9368"},{url:"assets/icons/icon_192.png",revision:"a80ffffb8d3a555b25a0f19a0a9878f1"},{url:"assets/icons/icon_24.png",revision:"04fa5b0f5827d885b678f0d131406aab"},{url:"assets/icons/icon_48.png",revision:"3dbd388868265c8498acfe676ef27811"},{url:"assets/icons/icon_512.png",revision:"414aacb61ad294e75f267554db7e9368"},{url:"assets/screen.png",revision:"808ac8889e4c17f3f83fd9235f1aa28d"},{url:"assets/screenshots/screen.png",revision:"808ac8889e4c17f3f83fd9235f1aa28d"},{url:"manifest.json",revision:"85fce46d69f09007b29104f8fc47f6eb"}],{})}));
//# sourceMappingURL=pwabuilder-sw.js.map
