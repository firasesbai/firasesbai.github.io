if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const n=e=>a(e,r),d={module:{uri:r},exports:t,require:n};s[r]=Promise.all(i.map((e=>d[e]||n(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4bca32b0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fe-blog"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/css/404.css",revision:"f4b850fd33ee1c83572d073e9a4562b9"},{url:"assets/css/archive.css",revision:"37b2615ab001e5065385eaed5d928b29"},{url:"assets/css/blog.css",revision:"83d6066658441e451d67b8ddc2198266"},{url:"assets/css/contact.css",revision:"123f307bf1c824f1e354bbb8406416be"},{url:"assets/css/footer.css",revision:"301d5b4e57571a65c4030a4c50bd2420"},{url:"assets/css/home.css",revision:"d867d0e5d1446d02cfb43bb02e7fd898"},{url:"assets/css/post.css",revision:"45f7ea03845094e14b3b3617c7198e75"},{url:"assets/css/search.css",revision:"94e14f6dade0203e78a9fa2dedb39207"},{url:"assets/favicon/android-chrome-192x192.png",revision:"b09c378371581e200f06a24b0ce6a225"},{url:"assets/favicon/android-chrome-384x384.png",revision:"7a3d8b7ba9c7734651fd029d8c566119"},{url:"assets/favicon/android-chrome-512x512.png",revision:"a5149245ba9600ccb780bee1225d3747"},{url:"assets/favicon/apple-touch-icon.png",revision:"1cc5fab42b9ba4b758221f8d1822ec57"},{url:"assets/favicon/browserconfig.xml",revision:"381371a82f9ff275f1695bccc8251063"},{url:"assets/favicon/favicon-16x16.png",revision:"c13b119648e586b9fb4cd255e5005970"},{url:"assets/favicon/favicon-32x32.png",revision:"e16333ef0730f3e085e9b733d39c0569"},{url:"assets/favicon/favicon.ico",revision:"201c9e7507aad4f39470de53a25bfa0e"},{url:"assets/favicon/mstile-150x150.png",revision:"7ffa59eb9fdcd13511fbb9bb277277aa"},{url:"assets/favicon/safari-pinned-tab.svg",revision:"9818ca1142afc8fbcf6bf9f2237ca1d1"},{url:"assets/favicon/site.webmanifest",revision:"68b5ff555f794b792af582644a7d3439"},{url:"assets/images/0_profile.png",revision:"e395c37c9cb400e0d8c0e31e27e7c5d4"},{url:"assets/images/articles/1_apache_kafka.png",revision:"f588c445a2bc5588b002dd11f4c7e103"},{url:"assets/images/articles/1_kafka_monitoring_architecture.png",revision:"6fac59d679d0aed06bb26fb77f736bb8"},{url:"assets/images/articles/10_data_flow.png",revision:"532aa924e261eb6589fd0aaf452b8e9c"},{url:"assets/images/articles/11_data_warehouse_vs_data_lake.png",revision:"1b3173c379de019b880721ff2268fc1d"},{url:"assets/images/articles/12_data_warehouse_vs_data_lake_vs_data_lakehouse.png",revision:"a83c500433f7a0de7d99520cf7940184"},{url:"assets/images/articles/13_reading_recommendations.jpg",revision:"794d9d4f4bdea554cc9090f7c7e5af46"},{url:"assets/images/articles/14_learn_build_measure.png",revision:"31bd41f52084673b98e2f7ceb191768f"},{url:"assets/images/articles/14_the_lean_startup.png",revision:"5000835245102fc8f8f611f9f191c998"},{url:"assets/images/articles/14_the_startup_way.png",revision:"ff7f6116379cb2822a3951ca0b945da3"},{url:"assets/images/articles/15_modern_data_stack_example.png",revision:"90422e5e7790eeba9bec3d09c9edfcc1"},{url:"assets/images/articles/16_kappa_architecture.png",revision:"69a423cc1f600d3690984587e62ac585"},{url:"assets/images/articles/16_lambda_architecture.png",revision:"83a16646b8736864f5aa011bbb449581"},{url:"assets/images/articles/17_learning_how_to_learn.png",revision:"de61f818e6fe4efb699912dde992a8d9"},{url:"assets/images/articles/18_gcp_analytics.png",revision:"1cfac0aca32e9948b308037c096f8d6e"},{url:"assets/images/articles/18_gcp_bigquery_10.png",revision:"fcc0ea0dc61607fa008ec514c0a7a133"},{url:"assets/images/articles/18_gcp_bigquery_11.png",revision:"e02c209810d820290728831b9e9a6fd4"},{url:"assets/images/articles/18_gcp_bigquery_12.png",revision:"81507d1766fd0887ec78a7e2ebf0f919"},{url:"assets/images/articles/18_gcp_bigquery_2.png",revision:"1a3488d659bd6ccfd53add678af37a22"},{url:"assets/images/articles/18_gcp_bigquery_3.png",revision:"594cc90624c5f373fbdcf11d99de8b82"},{url:"assets/images/articles/18_gcp_bigquery_4.png",revision:"81dc82603b8d31ed604aa57d7af19fe9"},{url:"assets/images/articles/18_gcp_bigquery_5.png",revision:"2de08a68e4e6d73c1717b7a681b89220"},{url:"assets/images/articles/18_gcp_bigquery_6.png",revision:"00a74c1211312666f9ceaba09d8f9a66"},{url:"assets/images/articles/18_gcp_bigquery_7.png",revision:"da2f7e47f5beae36b43874e09e4943b1"},{url:"assets/images/articles/18_gcp_bigquery_8.png",revision:"f6d042331fd22cb66a1bfc7c22c28109"},{url:"assets/images/articles/18_gcp_bigquery_9.png",revision:"31662891937f68edd81ef5be11ec2b69"},{url:"assets/images/articles/18_gcp_bigquery.png",revision:"e4f2e56545cd0fccc6fa4d7075c34c80"},{url:"assets/images/articles/18_gcp_bigtable.png",revision:"7a205bf6885283134827c527f84bc435"},{url:"assets/images/articles/18_gcp_cloud_spanner.png",revision:"7a4fdd5c17823b2f89ae11fee9073e4b"},{url:"assets/images/articles/18_gcp_cloud_sql.png",revision:"103debd9dc13210edcb76d4900ad9361"},{url:"assets/images/articles/18_gcp_cloud_storage_2.png",revision:"a6472ba12e5f8e7a99fff38841b12182"},{url:"assets/images/articles/18_gcp_cloud_storage.png",revision:"ea2ac4b435b3dd506b4d97fc15edbdb6"},{url:"assets/images/articles/18_gcp_compute.png",revision:"285eae1f43e032f0720490f07050d957"},{url:"assets/images/articles/18_gcp_data_governance.png",revision:"6e36f94ba0a045521f3452395931c494"},{url:"assets/images/articles/18_gcp_data_pipelines_management.png",revision:"d1df19e2448c81fab993e97c73866962"},{url:"assets/images/articles/18_gcp_data_transfer_services.png",revision:"439b5986e2189654442dd1c5b9370eb3"},{url:"assets/images/articles/18_gcp_dataflow_2.png",revision:"0f3985785b61558c782db6187a37c1ae"},{url:"assets/images/articles/18_gcp_dataflow_3.png",revision:"b30354828f7c90d6ef40f3f858db1cd2"},{url:"assets/images/articles/18_gcp_dataflow.png",revision:"1c3b6362fc8a8112e8a999569f4f4a66"},{url:"assets/images/articles/18_gcp_dataproc_2.png",revision:"275eb84b6f55665ef3a8520dddadd250"},{url:"assets/images/articles/18_gcp_dataproc.png",revision:"68bb7089a7eb2f4273ace750f840b5bc"},{url:"assets/images/articles/18_gcp_datastore.png",revision:"5a58c9da03ec93ef96af635c96f98348"},{url:"assets/images/articles/18_gcp_firestore.png",revision:"02853b2582f091b94e48339b948507fe"},{url:"assets/images/articles/18_gcp_ingestion_and_processing.png",revision:"bf16a2ef4ac363a5b8e9add4de1084e0"},{url:"assets/images/articles/18_gcp_insights.png",revision:"55f1a386b14e7118911ddc15270e6af0"},{url:"assets/images/articles/18_gcp_machine_learning.png",revision:"f310df87395db56414969de15bbc14f5"},{url:"assets/images/articles/18_gcp_memorystore.png",revision:"92eba2f816d063e32cc62c853901dbaf"},{url:"assets/images/articles/18_gcp_pub_sub.png",revision:"5e72d461c72796c12b90da1c31da00e2"},{url:"assets/images/articles/18_gcp_regions.png",revision:"ce92a52fac18022759a580de8b24d373"},{url:"assets/images/articles/18_gcp_resource_manager.png",revision:"c9b74b2e8974bc01ac2c4b34d66b03d6"},{url:"assets/images/articles/18_gcp_security.png",revision:"d8ca9c8011f0a166d82cbc3d9d489018"},{url:"assets/images/articles/18_gcp_storage.png",revision:"43116921fc616f5439be99c7992dee50"},{url:"assets/images/articles/18_gcp_vpc_networks.png",revision:"01858d32c0a3b11aac2e24e1fb549927"},{url:"assets/images/articles/19_data_lakehouse_architecture.png",revision:"6a66ac5270c6e186ab72fc0617e15533"},{url:"assets/images/articles/2_grafana_dashboard.png",revision:"3c7d6cab83d64c0a9bd3c5f5a058e658"},{url:"assets/images/articles/3_why_i_started_this_blog.jpg",revision:"c5e5d202eab01271834b2c1eac84d79c"},{url:"assets/images/articles/4_how_i_started_this_blog.png",revision:"e5585869d4ebb4b4a1525840d553350c"},{url:"assets/images/articles/5_logging_with_elk_stack.PNG",revision:"12b9cb2ebbae3798a19cf244217ab336"},{url:"assets/images/articles/6_how_i_started_this_blog_part_2.jpg",revision:"69538ae1b2f41e027d748c0f904d1425"},{url:"assets/images/articles/6_lighthouse_results.PNG",revision:"259a1705091af9a00115a3887168fe19"},{url:"assets/images/articles/7_how_i_started_this_blog_part_3.png",revision:"260c9d7af31428210eaa74c1cfd066cc"},{url:"assets/images/articles/8_navigation_buttons.png",revision:"7baba0dd97d8d4483b8d36f89a190a70"},{url:"assets/images/articles/8_search_bar.png",revision:"cf9415b59ce823d97a0248dd2078cc2a"},{url:"assets/images/articles/9_custom_prometheus_metric.png",revision:"0a80ff6b2738dd0f3f9b2bf52a80ad6c"},{url:"assets/images/articles/9_fastapi_swagger_ui.png",revision:"d0a5cdb15ef3fc81fbd57be7ac2a6a90"},{url:"assets/images/articles/9_prometheus_interface.png",revision:"23165d04d04d5a40e599f81d80457081"},{url:"assets/main.css",revision:"f4cca59e65866bbe4bbe704c557e47bb"},{url:"assets/minima-social-icons.svg",revision:"3a70b871c930a7ed8af27caa162af123"},{url:"feed.xml",revision:"6367d5f5d055f90b275ea97337bba2f9"},{url:"js/cookie-consent-script.js",revision:"11c4cdbe6df4925952f66c52380aee89"},{url:"js/search-script.js",revision:"c04d014dedde9758ba55e139d66dc1db"},{url:"js/service-worker.js",revision:"b6bfc91b1e5b2dfb47838784a596788b"},{url:"package-lock.json",revision:"a452b739948ed20838ec3655d9a13120"},{url:"package.json",revision:"4a4fbe29de38ab527197dafb5c5afc27"},{url:"robots.txt",revision:"53168578fb92c843748c49d9fb1d6488"},{url:"search.json",revision:"6f8d8f37102af90e77e54b98f567eb4e"},{url:"sitemap.xml",revision:"0a754e46f4b2bb0413ed75dbccd562e3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:css|js|webmanifest)$/,new e.CacheFirst({cacheName:"static-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:html)$/,new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:xml|txt|json)$/,new e.NetworkOnly,"GET")}));
//# sourceMappingURL=sw.js.map
