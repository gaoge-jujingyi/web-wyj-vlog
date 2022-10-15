/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c85fc4c41ea12c143591bc439c212c03"
  },
  {
    "url": "about/account/index.html",
    "revision": "e13901582fc192d61749871c4de4973e"
  },
  {
    "url": "about/hobby/book/index.html",
    "revision": "0ccc33c1dd086774973c7c29427694ed"
  },
  {
    "url": "about/hobby/cartoon/index.html",
    "revision": "184e65e8b136217dab506d271ed084af"
  },
  {
    "url": "about/hobby/clothing/index.html",
    "revision": "a58ea5a28787809275a5e3f1107ae127"
  },
  {
    "url": "about/hobby/comics/index.html",
    "revision": "96387a3a5365429da9ccc5c5e8cce387"
  },
  {
    "url": "about/hobby/comics/zhJingQiXianSheng.html",
    "revision": "ac764edc2c51e6669b73b8d373f71d25"
  },
  {
    "url": "about/hobby/drama/index.html",
    "revision": "7b9376e9cda1c41abb9b3faab6b0851b"
  },
  {
    "url": "about/hobby/electronic/index.html",
    "revision": "6d6f63c66d53ec5aa2e6b47e0c88d6d1"
  },
  {
    "url": "about/hobby/game/index.html",
    "revision": "dc0f61558b5150eba3e160e8aabffb0d"
  },
  {
    "url": "about/hobby/movie/index.html",
    "revision": "1338070830ad6bfbb27c0915f827f2c3"
  },
  {
    "url": "about/hobby/movie/rangZhiDanFei.html",
    "revision": "8193e3bef234959266baa71bf90b3f07"
  },
  {
    "url": "about/hobby/song/index.html",
    "revision": "3ea2e4abf8bb7b9c179857d275ae10c8"
  },
  {
    "url": "about/hobby/star/index.html",
    "revision": "70218becfb7cc8e6eba1953e04aed05a"
  },
  {
    "url": "about/introduce/index.html",
    "revision": "be54dfeb3c9480ad51f38caa887dd3de"
  },
  {
    "url": "assets/css/0.styles.21864989.css",
    "revision": "64de911cb6f58a2453518f0dd62f8426"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.197582bd.js",
    "revision": "29d599f1b648080c1d3b3cd509478356"
  },
  {
    "url": "assets/js/11.db9c123a.js",
    "revision": "307c55c938a72c9e98a2cd68d4bfda38"
  },
  {
    "url": "assets/js/12.10eae5ac.js",
    "revision": "2ef67d7e8f36be264448bb9db1d33406"
  },
  {
    "url": "assets/js/13.e5ded546.js",
    "revision": "5fdca906199ae6c2c3fe8d0a2f6e5649"
  },
  {
    "url": "assets/js/14.bcd2ac27.js",
    "revision": "d8ed8f4b55ca4ef1cf1ed15a0fbcc4fe"
  },
  {
    "url": "assets/js/15.886a8712.js",
    "revision": "cc4315cb9d6334bc83034044be3414f6"
  },
  {
    "url": "assets/js/16.7da8fba0.js",
    "revision": "176b112b9bb155e10ed775e30a0684a6"
  },
  {
    "url": "assets/js/17.248e8407.js",
    "revision": "1a3d92ee8d974832a244e895e52656e1"
  },
  {
    "url": "assets/js/18.6b1d703c.js",
    "revision": "3c33a2f3644d8189beb9e078c8f63477"
  },
  {
    "url": "assets/js/19.41f1e9e5.js",
    "revision": "9005c2731ff13b25230a6df724e3f1d3"
  },
  {
    "url": "assets/js/2.88e8959c.js",
    "revision": "e29331b011c6907ad587c105729a2ebd"
  },
  {
    "url": "assets/js/20.e2aa494e.js",
    "revision": "4ddbbfdf1619a91b4f42a277802bc394"
  },
  {
    "url": "assets/js/21.d0980602.js",
    "revision": "0199d0e543781789716615151335e4bf"
  },
  {
    "url": "assets/js/22.fda5c844.js",
    "revision": "7eaa88437c038dcae8e4b0b051616251"
  },
  {
    "url": "assets/js/23.36623333.js",
    "revision": "77d60f93902a4243da292e499a574020"
  },
  {
    "url": "assets/js/24.0476fe9a.js",
    "revision": "a44ca6094faf8c20d4f3a89d3c50ac21"
  },
  {
    "url": "assets/js/25.bb1f3ab3.js",
    "revision": "fe6df037df47f0028f6b491d5e6068ad"
  },
  {
    "url": "assets/js/26.cac4456f.js",
    "revision": "5f36f72dc007b4b2bbf5a594511b00b5"
  },
  {
    "url": "assets/js/27.39d5878d.js",
    "revision": "70aa4ffb1d04b2946af7a3a0779e532b"
  },
  {
    "url": "assets/js/28.455002c3.js",
    "revision": "b8b89ef672602ed262a71deb0bf0acff"
  },
  {
    "url": "assets/js/29.13cc1701.js",
    "revision": "5483c607a469a5dc1133390c07dd2ca1"
  },
  {
    "url": "assets/js/3.1d96d567.js",
    "revision": "de1c1947951c3d36cd5a2f02cb125c7c"
  },
  {
    "url": "assets/js/30.11749e7f.js",
    "revision": "f14a8be0823ecc662b39e2322dd8054a"
  },
  {
    "url": "assets/js/31.c808fb3d.js",
    "revision": "3754cabdc7ef93a54a6bfde522b71fb4"
  },
  {
    "url": "assets/js/32.f0ecd685.js",
    "revision": "65a0306f7b817f0cf99582b5b61c2b55"
  },
  {
    "url": "assets/js/33.41117ee9.js",
    "revision": "9637c2a8a4355851a165ca1b5ac8b58e"
  },
  {
    "url": "assets/js/34.aa07986f.js",
    "revision": "a77756ad8a8cb67290a79a3ab37e3e22"
  },
  {
    "url": "assets/js/35.f3b510a8.js",
    "revision": "5c8a69bca6a2a29dc75707ddb2372d03"
  },
  {
    "url": "assets/js/36.f36ca5a8.js",
    "revision": "b321a8bfa6bbc170bf7032d7190e91bb"
  },
  {
    "url": "assets/js/37.e7403947.js",
    "revision": "95dccbfd946bcb548103cf32345a97da"
  },
  {
    "url": "assets/js/38.c827aef7.js",
    "revision": "c537c4de0f436dd6b72900197f4a033a"
  },
  {
    "url": "assets/js/39.ded1be00.js",
    "revision": "678de2343ff3bc2fceb3e5c1086ed91d"
  },
  {
    "url": "assets/js/4.1605d73d.js",
    "revision": "bbdbd33190cbb396088bc1268b6ec41e"
  },
  {
    "url": "assets/js/40.7a7340e2.js",
    "revision": "b8945c6e27a01a05ef150449187d11d9"
  },
  {
    "url": "assets/js/41.c8abfab5.js",
    "revision": "8ccb7eb85a05750e76a63412fb9e7da2"
  },
  {
    "url": "assets/js/42.8b83ca0b.js",
    "revision": "c2f8c4e37cfb552afb0fd1fd3f27ba8c"
  },
  {
    "url": "assets/js/43.be214b61.js",
    "revision": "748f8bdf4090bc8ae655c71d6f35fa63"
  },
  {
    "url": "assets/js/44.386af19a.js",
    "revision": "314a1a6e7f7c92672f5780f5f80490e4"
  },
  {
    "url": "assets/js/45.0bb97d24.js",
    "revision": "f03d62cbc55406594d38c0adfad65fc0"
  },
  {
    "url": "assets/js/46.4fdbeb9f.js",
    "revision": "9e71c415c9f34baa600655e4f2092767"
  },
  {
    "url": "assets/js/47.fd65cb9b.js",
    "revision": "8bb64bf283c1e7f6f4bfc33b98810744"
  },
  {
    "url": "assets/js/48.7782647a.js",
    "revision": "4430b60511620e6526963f8638633bbc"
  },
  {
    "url": "assets/js/49.fe68984f.js",
    "revision": "09bfd90c516bb72ad971b4450efdb79f"
  },
  {
    "url": "assets/js/5.a6959013.js",
    "revision": "58d1a89a1e1071801ef7af78e322fb75"
  },
  {
    "url": "assets/js/50.58fae691.js",
    "revision": "03860863980f2a8952ac1aaf388c19e0"
  },
  {
    "url": "assets/js/51.5c0143b6.js",
    "revision": "d4a933662ac2b462a7e12100e19b4f84"
  },
  {
    "url": "assets/js/52.bbb3fe45.js",
    "revision": "d0688b5d26c697dffb356d464658ebb0"
  },
  {
    "url": "assets/js/53.815c3848.js",
    "revision": "448e788970c9bfaba0113800ac688388"
  },
  {
    "url": "assets/js/54.e018780c.js",
    "revision": "571087a9f3e13edba56859dd022153ec"
  },
  {
    "url": "assets/js/55.1db37807.js",
    "revision": "08a8de9762ecf85de4ef946290dc6ca2"
  },
  {
    "url": "assets/js/56.f6cc0b5c.js",
    "revision": "6f2cfdacd02dccf030dfc81eb2a21466"
  },
  {
    "url": "assets/js/57.47c1effa.js",
    "revision": "0c2794836b972b025661a3c286b08917"
  },
  {
    "url": "assets/js/58.9fc1a4eb.js",
    "revision": "7fecde142f22e7ee3049f62122eda9b2"
  },
  {
    "url": "assets/js/59.1e178b8c.js",
    "revision": "b9bf29520a066b1d7b2f0dd918566ce6"
  },
  {
    "url": "assets/js/6.04525e9b.js",
    "revision": "b4a0989a636dd8ce551134393b282c7b"
  },
  {
    "url": "assets/js/60.019d766e.js",
    "revision": "3d59b7cd48a37b948773ce6240b5dba2"
  },
  {
    "url": "assets/js/61.8013255a.js",
    "revision": "e0534aeb0a57cfc83e4b1b5a1fe54e1e"
  },
  {
    "url": "assets/js/62.9fe1652c.js",
    "revision": "2833bb9e16724d673a88a265b3eab8d6"
  },
  {
    "url": "assets/js/63.1c0bf043.js",
    "revision": "83cc0814ac84be19b4effd831b136b9e"
  },
  {
    "url": "assets/js/64.d6f26b56.js",
    "revision": "9092e3c207f1a3bc2a6640b3a19da6ec"
  },
  {
    "url": "assets/js/65.6e556cc7.js",
    "revision": "39dd93f61f7a0fb44d847e96f7d073d8"
  },
  {
    "url": "assets/js/66.efa339a9.js",
    "revision": "23ffaf59a24ee0820355ab9a60db95f5"
  },
  {
    "url": "assets/js/67.51ffb558.js",
    "revision": "2942e390b99fa9d51bf6ae049199f5b3"
  },
  {
    "url": "assets/js/68.c87639f6.js",
    "revision": "7565c5405e12286304851f95ae03a5df"
  },
  {
    "url": "assets/js/69.cf8650f8.js",
    "revision": "00d94f2aaf848ab25d74c1f282158ddf"
  },
  {
    "url": "assets/js/7.135f87dd.js",
    "revision": "a02edca3e427d9609566f2bbe7a57b79"
  },
  {
    "url": "assets/js/70.606f6982.js",
    "revision": "d36b0b3f5726b6641737be701ecdfcca"
  },
  {
    "url": "assets/js/71.af5cdc04.js",
    "revision": "d4569126a9f43e8554543cad8a8a605e"
  },
  {
    "url": "assets/js/8.e8795399.js",
    "revision": "b6af6f9c714102169eeec8bcaf6718ab"
  },
  {
    "url": "assets/js/9.ebc70916.js",
    "revision": "ec91f4bc142412c26717fba1d12d6fa9"
  },
  {
    "url": "assets/js/app.1ce8f79f.js",
    "revision": "061d7bb356f78ee839d8724c7a7d0db1"
  },
  {
    "url": "audition/prepare/index.html",
    "revision": "5324a76b696abba5e7aaf058691c9449"
  },
  {
    "url": "audition/template/index.html",
    "revision": "9e25fd6dd122d8aa7f78ee647c6c556c"
  },
  {
    "url": "audition/write/index.html",
    "revision": "b35d8c343171987be578825365fdbeae"
  },
  {
    "url": "index.html",
    "revision": "72cabfbd056c584800caf7311989c843"
  },
  {
    "url": "logo.png",
    "revision": "418d5c0f92349e5a29615beaa338f744"
  },
  {
    "url": "node/case/IM/index.html",
    "revision": "040628f6dc19244a1f34dad82eef7e92"
  },
  {
    "url": "node/case/interface/index.html",
    "revision": "d287d1efedde4cfb2abab9a8b57bfe22"
  },
  {
    "url": "node/case/reptile/index.html",
    "revision": "8cd1fef8fa2089aa107d8b43dbcd44f6"
  },
  {
    "url": "node/core/index.html",
    "revision": "c8e023dbf335a58132f47da2552200ec"
  },
  {
    "url": "node/frame/index.html",
    "revision": "b6ed7ee35af042ecdeba96a6da067a42"
  },
  {
    "url": "recreation/article/index.html",
    "revision": "6c50bb25ed60b40dfb1cd1286a5c6725"
  },
  {
    "url": "recreation/gossip/index.html",
    "revision": "3ac759ddba536f8178ae7887244e99fe"
  },
  {
    "url": "recreation/website/index.html",
    "revision": "20aff4b2be362a022657d14f08e444c1"
  },
  {
    "url": "vlog/2009_2003_year/index.html",
    "revision": "24987b5972366079cdd4fcadbdd35426"
  },
  {
    "url": "vlog/2010_year/index.html",
    "revision": "755d711b370b44bb9811d06258a32db8"
  },
  {
    "url": "vlog/2011_year/index.html",
    "revision": "b776cad17ea85dae2f781c43bc601470"
  },
  {
    "url": "vlog/2012_year/index.html",
    "revision": "512ca0cb37ac8d4e7ca960354c4b28e0"
  },
  {
    "url": "vlog/2013_year/index.html",
    "revision": "cef81629be67b43e2c5f1199bfb3fb3d"
  },
  {
    "url": "vlog/2014_year/index.html",
    "revision": "a5ce41aab6e5c92258fcd0c7b537b584"
  },
  {
    "url": "vlog/2015_year/index.html",
    "revision": "e1f159ed9795accb00ff17865b741cc7"
  },
  {
    "url": "vlog/2016_year/index.html",
    "revision": "2a8d2738f9d6af508df92892f0334516"
  },
  {
    "url": "vlog/2017_year/index.html",
    "revision": "268bedff2d2d8f7aab82f9709434783a"
  },
  {
    "url": "vlog/2018_year/index.html",
    "revision": "de8f7c917311a12fee9572a531705af7"
  },
  {
    "url": "vlog/2019_year/index.html",
    "revision": "de322ceddd5d929b7c31aa22cf9c1b9d"
  },
  {
    "url": "vlog/2020_year/index.html",
    "revision": "07e74733c3ee22b7885140d4778a0b32"
  },
  {
    "url": "vlog/2021_year/index.html",
    "revision": "ee0b82002c3381f7abfcfd4f1dee50cf"
  },
  {
    "url": "vlog/2022_year/index.html",
    "revision": "d7a0afd9f57e686ea2d24602d23eb8f2"
  },
  {
    "url": "vue/knowledge/base/binding/index.html",
    "revision": "c18c62e2469a9a215b17607b409eafb9"
  },
  {
    "url": "vue/knowledge/base/computed/index.html",
    "revision": "e6a5e5ac0cf0d0cdbeb746788a01ab30"
  },
  {
    "url": "vue/knowledge/base/filter/index.html",
    "revision": "24f3b3c7842b081f0a41d816dfb85848"
  },
  {
    "url": "vue/knowledge/base/instruction/index.html",
    "revision": "cd737a74f24986d6e0bf41af1c5cb0bb"
  },
  {
    "url": "vue/knowledge/base/mixin/index.html",
    "revision": "3eaaaa0a605b279f194c321d5398f308"
  },
  {
    "url": "vue/knowledge/base/watch/index.html",
    "revision": "86cadf5c45bebb7ba3b000c535d26660"
  },
  {
    "url": "vue/knowledge/componentsIM/index.html",
    "revision": "41e43e5a7ddd09c88ab2951dc4dfa5c3"
  },
  {
    "url": "vue/knowledge/cycle/index.html",
    "revision": "1c2bd595c917e61e6b2149d3e36ee90c"
  },
  {
    "url": "vue/knowledge/routers/index.html",
    "revision": "5ff66092239d8b08bca908df534a596d"
  },
  {
    "url": "vue/knowledge/state/index.html",
    "revision": "270bb82330558f5bd9bf7dc14e7b63c9"
  },
  {
    "url": "vue/knowledge/vue3/index.html",
    "revision": "b92b5fdc07e3bed34ec5080ec5b932bc"
  },
  {
    "url": "vue/nuxt/index.html",
    "revision": "cfaea0a81d9317c9894bd47a1b2463cf"
  },
  {
    "url": "vue/uniApp/index.html",
    "revision": "7365356f2b34c411641d8a85748adfa7"
  },
  {
    "url": "vue/viewUI/index.html",
    "revision": "640c0d6686e984ccaca1f5853dd4ae36"
  },
  {
    "url": "web/css/index.html",
    "revision": "05226eae4d3d36823f26e33dee38d232"
  },
  {
    "url": "web/html/index.html",
    "revision": "0125a34a948e424d113f56ce052a5c6d"
  },
  {
    "url": "web/js/asynchronous/index.html",
    "revision": "8ca7eda68d0f2e5d04a2c65b361bf3a6"
  },
  {
    "url": "web/js/base/index.html",
    "revision": "e75194011807f460b311f4aab28573ae"
  },
  {
    "url": "web/js/es6/index.html",
    "revision": "d77b22ddd012beae807a6d4b2b6072ea"
  },
  {
    "url": "web/js/prototype/index.html",
    "revision": "3085ecd08f76d3dd7f6259de0ad07685"
  },
  {
    "url": "web/js/thisPointsTo/index.html",
    "revision": "09db4e2c6397c39ad6f61f29eab16415"
  },
  {
    "url": "web/js/type/index.html",
    "revision": "e3c5d17856acaaba9b2771ca54eb41b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
