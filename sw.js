if(!self.define){let e,o={};const d=(d,s)=>(d=new URL(d+".js",s).href,o[d]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=o,document.head.appendChild(e)}else e=d,importScripts(d),o()})).then((()=>{let e=o[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let c={};const n=e=>d(e,i),r={module:{uri:i},exports:c,require:n};o[i]=Promise.all(s.map((e=>r[e]||n(e)))).then((e=>(a(...e),c)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"doodlecricket"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"ads.txt",revision:"ab7a4522b8bad548c7952fb0dce6c724"},{url:"assets/ErrorNotFound-D7mFNrJg.js",revision:"0277d398ba497c33c89369424002ea26"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index-BGn-wZ8K.css",revision:"a6785020e3824447328e7a8443cbc155"},{url:"assets/index-CdqE5Efe.js",revision:"0c2a02946bb6555de1ccfb878a4db8e8"},{url:"assets/IndexPage-DP8HqsFB.js",revision:"47134d7ff4b4dcc12968a7853b6206f1"},{url:"assets/IndexPage-DZtkVFsT.css",revision:"ab321ee25a4ab36f9ff694b6b72665a6"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-C5u4Lasg.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--j0ba7u44.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CDXAfhRl.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--7z0HfM8a.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Yv75Cvt_.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-CEBEUyyq.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout-D7tBoOOx.js",revision:"256fa3310f36a9dcaa00a5c8f31cc04d"},{url:"assets/PrivacyPage-BgwLZO0o.js",revision:"16e42fd98746b1df9c0c976ee88aed1f"},{url:"assets/utils-BPw6-y0_.js",revision:"125d2d7996ec36cc7d7f652c83539510"},{url:"banner.png",revision:"d3a4a0e545075511b560bae537119c63"},{url:"doodle-jump.html",revision:"f24cc3dc49a28a6154ea2d03af783d88"},{url:"doodle-jump.jpeg",revision:"937f98b10bbe67dd6a7432401a28984d"},{url:"doodle-jump/assets/audio/beake_platfrom.mp3",revision:"79414574370478ba0bbcc073222f60c6"},{url:"doodle-jump/assets/audio/black_hole.mp3",revision:"a101a0959539a84d8ef604942e9c5531"},{url:"doodle-jump/assets/audio/falling.mp3",revision:"e2607eedfa49dede9924ff8cddbfa6d5"},{url:"doodle-jump/assets/audio/jetpack.mp3",revision:"a74f5df3c0b33d124fee272c62de69b0"},{url:"doodle-jump/assets/audio/jump.mp3",revision:"7717256fc72069c209c4d8502a5a9abf"},{url:"doodle-jump/assets/audio/jumponmonster.mp3",revision:"fcc358d18fdbadd99fc0d3b33341f7fd"},{url:"doodle-jump/assets/audio/monster_hit.mp3",revision:"b83c1f0dce21413f8686b36bbb87f9e2"},{url:"doodle-jump/assets/audio/monster_kill.mp3",revision:"35096eae0b6a1e83f448ee1f4e441d47"},{url:"doodle-jump/assets/audio/monster_warning.mp3",revision:"6414d1966b98e49266ecde47708deb8f"},{url:"doodle-jump/assets/audio/propeller.mp3",revision:"1a62f124393899db41df906076fe6afe"},{url:"doodle-jump/assets/audio/shoot.mp3",revision:"32546f8dcc43f8f65967c078cad3c031"},{url:"doodle-jump/assets/audio/shoot2.mp3",revision:"1c18d45e2c18ee4b1a2a5e4231b74225"},{url:"doodle-jump/assets/audio/spring.mp3",revision:"fc80798a9bd7e591b5eca9387d018292"},{url:"doodle-jump/assets/audio/ufo_abduct.mp3",revision:"cffe67d9a266341a410cb9ce38e18d93"},{url:"doodle-jump/assets/audio/ufo_kill.mp3",revision:"042f246af16401686a7a37bd1e48630d"},{url:"doodle-jump/assets/audio/ufo_warning.mp3",revision:"1d746d79ded569f51bc61a62c17d8c8c"},{url:"doodle-jump/assets/audio/white.mp3",revision:"fd052f3e1a1783556e5c3f3e1d777020"},{url:"doodle-jump/assets/data/skin0Scenes.json",revision:"dee403f9a2d7a5c83e6c07966cbd9c25"},{url:"doodle-jump/assets/data/statachieve.json",revision:"e31d64c48013b69c4a8c66d60aa15bba"},{url:"doodle-jump/assets/fonts/bitmapFont_0.webp",revision:"cb97917d20e8c318f39565d09dc480d0"},{url:"doodle-jump/assets/fonts/bitmapFont.fnt",revision:"a28f8a8b894f7197dde1ac68ad39cb27"},{url:"doodle-jump/assets/fonts/bitmapFont2_0.webp",revision:"5f77f11fc7d1db1976c12886c755143c"},{url:"doodle-jump/assets/fonts/bitmapFont2.fnt",revision:"d50210f0c9e1924044d12d4ab41bff57"},{url:"doodle-jump/assets/images/appstore.webp",revision:"cda661faf5e60e281e5f56067e7909db"},{url:"doodle-jump/assets/images/atlas.json",revision:"e21806b60f26d2a755fc51592bbfc0ef"},{url:"doodle-jump/assets/images/atlas.webp",revision:"7379a0cbb4ba09a2acbcb8d606eb61e2"},{url:"doodle-jump/assets/images/atlas2.json",revision:"74e4727fcb88fbb93ab7d0e725a58b98"},{url:"doodle-jump/assets/images/atlas2.webp",revision:"dea192be7d6d7477767e95c8365ad73b"},{url:"doodle-jump/assets/images/atlas3.json",revision:"1ad5d565b78601ebdcf376135fc14256"},{url:"doodle-jump/assets/images/atlas3.webp",revision:"e51aa6aa6795609c873bba261d1b591b"},{url:"doodle-jump/assets/images/gameicon.webp",revision:"794898b18e733a40d23cefdeb43b16c7"},{url:"doodle-jump/assets/images/googleplay.webp",revision:"cda661faf5e60e281e5f56067e7909db"},{url:"doodle-jump/assets/images/logo.png",revision:"9fda0578bfd106b71ed0328c50bf2aab"},{url:"doodle-jump/assets/images/playerSheet.webp",revision:"56f62a5b78ea5e1a359400cd0b1b84b8"},{url:"doodle-jump/assets/images/popupAtlas.json",revision:"d8aa3d4a4d288abb4be954ba667046be"},{url:"doodle-jump/assets/images/popupAtlas.webp",revision:"bc5e1262cd7a6ec24387b360951f4108"},{url:"doodle-jump/assets/images/splash.webp",revision:"1a5dd61eb49d7edf7a7ee9f162f0e6d2"},{url:"doodle-jump/css/styles.css",revision:"9079e904a52b7bcbbbd16f1d0214fb11"},{url:"doodle-jump/icons/android-icon-144x144.png",revision:"7a62bdb22767cdb160acbccca6a97154"},{url:"doodle-jump/icons/android-icon-192x192.png",revision:"afe897b0e0e4b6cd0a5f58dc1c988486"},{url:"doodle-jump/icons/android-icon-36x36.png",revision:"418be30c1070dc1e4d29fd9ef2b38ff9"},{url:"doodle-jump/icons/android-icon-48x48.png",revision:"6fb0c11c99b61d7318b2185909ebe034"},{url:"doodle-jump/icons/android-icon-72x72.png",revision:"89326117c32375267c45802197b1bc59"},{url:"doodle-jump/icons/android-icon-96x96.png",revision:"cb9d75cdda60e4a9d24b091794b2f727"},{url:"doodle-jump/icons/apple-icon-114x114.png",revision:"8980e2cf723f60ff5226fb9b0125b35f"},{url:"doodle-jump/icons/apple-icon-120x120.png",revision:"e875bfb9c5418ad245a1f1a6f9d71ef1"},{url:"doodle-jump/icons/apple-icon-144x144.png",revision:"7a62bdb22767cdb160acbccca6a97154"},{url:"doodle-jump/icons/apple-icon-152x152.png",revision:"c38e7e240535d06a6299c010c06744c2"},{url:"doodle-jump/icons/apple-icon-180x180.png",revision:"aa6c42b41bb1d0ab7a8df7ee6e7ff721"},{url:"doodle-jump/icons/apple-icon-57x57.png",revision:"976277d913cdabf6c5d9d8cbb12c2dee"},{url:"doodle-jump/icons/apple-icon-60x60.png",revision:"b5eca5a695d047cc32a91fff848627a4"},{url:"doodle-jump/icons/apple-icon-72x72.png",revision:"89326117c32375267c45802197b1bc59"},{url:"doodle-jump/icons/apple-icon-76x76.png",revision:"1f63a9248aeed5a294dafb53ac2c70d8"},{url:"doodle-jump/icons/apple-icon-precomposed.png",revision:"f2db7e519a572ca6df4b9c81e883df0b"},{url:"doodle-jump/icons/apple-icon.png",revision:"f2db7e519a572ca6df4b9c81e883df0b"},{url:"doodle-jump/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"doodle-jump/icons/favicon-16x16.png",revision:"cb3e2b80efca0bc7f7dd89195256db8d"},{url:"doodle-jump/icons/favicon-32x32.png",revision:"beef2b5e4dafcc7d373e4dc8eb496064"},{url:"doodle-jump/icons/favicon-96x96.png",revision:"cb9d75cdda60e4a9d24b091794b2f727"},{url:"doodle-jump/icons/favicon.ico",revision:"e74a5c4073bb0ad61731103bfab2c301"},{url:"doodle-jump/icons/ms-icon-144x144.png",revision:"7a62bdb22767cdb160acbccca6a97154"},{url:"doodle-jump/icons/ms-icon-150x150.png",revision:"19ee8255c00e094e3ebdab8d87cb7075"},{url:"doodle-jump/icons/ms-icon-310x310.png",revision:"6590d5f67688ffa49cc296842b302418"},{url:"doodle-jump/icons/ms-icon-70x70.png",revision:"504aae10e30e986f12b06aab25ed075e"},{url:"doodle-jump/js/fulltilt.min.js",revision:"f3815a3628a71de46e47cada27034371"},{url:"doodle-jump/js/game.js",revision:"ddecd3048d843e0f19341b66008eb400"},{url:"doodle-jump/js/main.js",revision:"ebe40734e3793fce54419ed75327156b"},{url:"doodle-jump/js/phaser.min.js",revision:"5df6d1b39810cc2a67dd1962dc0f3c7d"},{url:"doodle-jump/js/screenfull.min.js",revision:"38940118f628790ade08baa25d67222a"},{url:"doodle-jump/js/scripts.js",revision:"aa216e1246ee1054ead86bfa38f82162"},{url:"doodle-jump/manifest.json",revision:"5892ea697cab46a4bdd87b8ddd297014"},{url:"doodle-jump/package.json",revision:"3e971184d5d8dcc9be65c23d5eb8c04f"},{url:"doodle-jump/pnpm-lock.yaml",revision:"c66b4224e001374cf0b7bb720a86e121"},{url:"google-doodle-games.html",revision:"95cb6dd430205501582294aae5f832ab"},{url:"icons/apple-icon-152x152.png",revision:"35e205faa221c16a19fcb5d0fb16869b"},{url:"icons/apple-icon-180x180.png",revision:"7c0325a8e1c4b41c0f0a7cdfc4a6c579"},{url:"icons/favicon-16x16.png",revision:"32385a4565bd2a219d8077c5c4cb62ed"},{url:"icons/favicon-32x32.png",revision:"785f5224835fc0ac368c65c347981d7a"},{url:"icons/favicon-96x96.png",revision:"faf5307c241e794f6f5391c1d6d1dea1"},{url:"icons/favicon.ico",revision:"b6b0420620f8623022ea763aa8524cee"},{url:"icons/icon-192x192.png",revision:"cc0e6f58b369b8c37e2284e23d56ed4c"},{url:"icons/icon-512x512.png",revision:"984f905f470c93f1aa0b65ff2f5c25ed"},{url:"icons/ms-icon-144x144.png",revision:"d4ae8e49aaf5ee7d8e3a43f5610bb30e"},{url:"icons/safari-pinned-tab.svg",revision:"1c31d1ea60f0c2648426e2cdac4bf4a9"},{url:"index.html",revision:"86865bc846aee8e82438ac8a2032dcc4"},{url:"manifest.json",revision:"146d37b32acaba6f9aaad98ec4476f0b"},{url:"pac-man.jpeg",revision:"6488b3eb16a396397bb23f22a6f78346"},{url:"pacman-doodle.html",revision:"512f9528de9142fdd388f4c13cb25fe1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));