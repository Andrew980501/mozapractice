if(!self.define){let e,r={};const i=(i,o)=>(i=new URL(i+".js",o).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let n={};const t=e=>i(e,c),a={module:{uri:c},exports:n,require:t};r[c]=Promise.all(o.map((e=>a[e]||t(e)))).then((e=>(s(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"moza"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mozapractice/css/app.3ca61a09.css",revision:null},{url:"/mozapractice/css/chunk-vendors.0f2f1ea6.css",revision:null},{url:"/mozapractice/fonts/OLDENGL.6e377040.TTF",revision:null},{url:"/mozapractice/img/formoza.7dd7e4aa.png",revision:null},{url:"/mozapractice/index.html",revision:"801591d93da62d7d5db46bd94bdb5251"},{url:"/mozapractice/js/about.ae7072c0.js",revision:null},{url:"/mozapractice/js/app.37bf3c0d.js",revision:null},{url:"/mozapractice/js/chunk-vendors.12e8af76.js",revision:null},{url:"/mozapractice/manifest.json",revision:"619480225238937490db22c35061eeb3"},{url:"/mozapractice/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
