if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(s(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.ico",revision:"b01830a43a05d0ab963f31aa67b485fe"},{url:"icon-192x192.png",revision:"19063fd8a46e8a708dd12806260196bb"},{url:"index.css",revision:"bde3334162b38ea519f32d21d139ad20"},{url:"index.html",revision:"42fdaa1a59db85b7ba44462c7da79b44"},{url:"index.js",revision:"aaccd46638def53681bf2b97e1691673"},{url:"manifest.json",revision:"33895164fd511885ec26629c946bbb23"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"c3f2da4353ecaa1a081463ce43267cf7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map