if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const n=e=>a(e,r),o={module:{uri:r},exports:t,require:n};s[r]=Promise.all(i.map((e=>o[e]||n(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4bca32b0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fe-blog"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon/android-chrome-192x192.png",revision:"b09c378371581e200f06a24b0ce6a225"},{url:"assets/favicon/android-chrome-384x384.png",revision:"7a3d8b7ba9c7734651fd029d8c566119"},{url:"assets/favicon/android-chrome-512x512.png",revision:"a5149245ba9600ccb780bee1225d3747"},{url:"assets/favicon/apple-touch-icon.png",revision:"1cc5fab42b9ba4b758221f8d1822ec57"},{url:"assets/favicon/browserconfig.xml",revision:"381371a82f9ff275f1695bccc8251063"},{url:"assets/favicon/favicon-16x16.png",revision:"c13b119648e586b9fb4cd255e5005970"},{url:"assets/favicon/favicon-32x32.png",revision:"e16333ef0730f3e085e9b733d39c0569"},{url:"assets/favicon/favicon.ico",revision:"201c9e7507aad4f39470de53a25bfa0e"},{url:"assets/favicon/mstile-150x150.png",revision:"7ffa59eb9fdcd13511fbb9bb277277aa"},{url:"assets/favicon/safari-pinned-tab.svg",revision:"9818ca1142afc8fbcf6bf9f2237ca1d1"},{url:"assets/favicon/site.webmanifest",revision:"68b5ff555f794b792af582644a7d3439"},{url:"assets/images/0_profile.png",revision:"e395c37c9cb400e0d8c0e31e27e7c5d4"},{url:"assets/images/articles/1_apache_kafka.png",revision:"f588c445a2bc5588b002dd11f4c7e103"},{url:"assets/images/articles/1_kafka_monitoring_architecture.png",revision:"6fac59d679d0aed06bb26fb77f736bb8"},{url:"assets/images/articles/10_data_flow.png",revision:"532aa924e261eb6589fd0aaf452b8e9c"},{url:"assets/images/articles/11_data_warehouse_vs_data_lake.png",revision:"1b3173c379de019b880721ff2268fc1d"},{url:"assets/images/articles/12_data_warehouse_vs_data_lake_vs_data_lakehouse.png",revision:"a83c500433f7a0de7d99520cf7940184"},{url:"assets/images/articles/13_reading_recommendations.jpg",revision:"794d9d4f4bdea554cc9090f7c7e5af46"},{url:"assets/images/articles/14_learn_build_measure.png",revision:"31bd41f52084673b98e2f7ceb191768f"},{url:"assets/images/articles/14_the_lean_startup.png",revision:"5000835245102fc8f8f611f9f191c998"},{url:"assets/images/articles/14_the_startup_way.png",revision:"ff7f6116379cb2822a3951ca0b945da3"},{url:"assets/images/articles/15_modern_data_stack_example.png",revision:"90422e5e7790eeba9bec3d09c9edfcc1"},{url:"assets/images/articles/16_kappa_architecture.png",revision:"69a423cc1f600d3690984587e62ac585"},{url:"assets/images/articles/16_lambda_architecture.png",revision:"83a16646b8736864f5aa011bbb449581"},{url:"assets/images/articles/2_grafana_dashboard.png",revision:"3c7d6cab83d64c0a9bd3c5f5a058e658"},{url:"assets/images/articles/3_why_i_started_this_blog.jpg",revision:"c5e5d202eab01271834b2c1eac84d79c"},{url:"assets/images/articles/4_how_i_started_this_blog.png",revision:"e5585869d4ebb4b4a1525840d553350c"},{url:"assets/images/articles/5_logging_with_elk_stack.PNG",revision:"12b9cb2ebbae3798a19cf244217ab336"},{url:"assets/images/articles/6_how_i_started_this_blog_part_2.jpg",revision:"69538ae1b2f41e027d748c0f904d1425"},{url:"assets/images/articles/6_lighthouse_results.PNG",revision:"259a1705091af9a00115a3887168fe19"},{url:"assets/images/articles/7_how_i_started_this_blog_part_3.png",revision:"260c9d7af31428210eaa74c1cfd066cc"},{url:"assets/images/articles/8_navigation_buttons.png",revision:"7baba0dd97d8d4483b8d36f89a190a70"},{url:"assets/images/articles/8_search_bar.png",revision:"cf9415b59ce823d97a0248dd2078cc2a"},{url:"assets/images/articles/9_custom_prometheus_metric.png",revision:"0a80ff6b2738dd0f3f9b2bf52a80ad6c"},{url:"assets/images/articles/9_fastapi_swagger_ui.png",revision:"d0a5cdb15ef3fc81fbd57be7ac2a6a90"},{url:"assets/images/articles/9_prometheus_interface.png",revision:"23165d04d04d5a40e599f81d80457081"},{url:"assets/images/search-icon.png",revision:"35ded6842e23a2d6a5155927da216d1a"},{url:"assets/main.css",revision:"f4cca59e65866bbe4bbe704c557e47bb"},{url:"assets/minima-social-icons.svg",revision:"3a70b871c930a7ed8af27caa162af123"},{url:"feed.xml",revision:"0386715f437f0edc2b7a4218f7f3fb4a"},{url:"js/cookie-consent-script.js",revision:"11c4cdbe6df4925952f66c52380aee89"},{url:"js/search-script.js",revision:"c04d014dedde9758ba55e139d66dc1db"},{url:"js/service-worker.js",revision:"b6bfc91b1e5b2dfb47838784a596788b"},{url:"package-lock.json",revision:"5a6d3947a41f980b39c955efe64208c9"},{url:"package.json",revision:"4a4fbe29de38ab527197dafb5c5afc27"},{url:"robots.txt",revision:"53168578fb92c843748c49d9fb1d6488"},{url:"search.json",revision:"e96bfaa5c0dfd9d5b2c87c5ddcad2ab3"},{url:"sitemap.xml",revision:"dd6b963940459e613ca58846686b8763"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:css|js|webmanifest)$/,new e.CacheFirst({cacheName:"static-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:html)$/,new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:xml|txt|json)$/,new e.NetworkOnly,"GET")}));
//# sourceMappingURL=sw.js.map
