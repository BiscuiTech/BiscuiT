if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-4d0bff02"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/_buildManifest.js",revision:"829e891564826dbf8cfceb687b25ea1b"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D.js",revision:"c4d4c7fb6370407bac35e2d27b8ee064"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D.js.map",revision:"ea6e41153342884944b24584bd9a3155"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/a-propos.js",revision:"7df0d2b410a4eb4128cdf5deae34345f"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/a-propos.js.map",revision:"4b134c8e4cc68f1cd346c4c9d500ff3f"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/about.js",revision:"8d2127246817d1c54e2aaa0335ee03d2"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/about.js.map",revision:"ac862cde2818e778bff45712dab07c9a"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/archives.js",revision:"0be693f8a8c9d13a4d2dc85b22997afa"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/archives.js.map",revision:"d441c32b01c1dc3b14796ee93ed34f4a"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/blog.js",revision:"6b7295c7e8dcfaa52118d49c48bcb541"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/blog.js.map",revision:"faa0929342b72affcf178128773f0ff6"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/blog/%5Bpid%5D.js",revision:"c1508029b0c03ee6345edc261a75d4c4"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/blog/%5Bpid%5D.js.map",revision:"4de3422638aa0a6ae5b821e2ccad62d9"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/contact.js",revision:"a5866b8e72a87b21ae34b48dceb6c810"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/contact.js.map",revision:"f08bd0c814495ab38aeb304acf792d16"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/projects.js",revision:"f70a0ade019dcb262235184319d4a0e6"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/projects.js.map",revision:"31b099ee40c70a3509966fec475e0970"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/uses.js",revision:"7b30daf86184ef6ebe492c3f1374800b"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/%5Blang%5D/uses.js.map",revision:"d92033bdf7856fcb24667195c5e34105"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/_app.js",revision:"e7997d1b9b287d8dc4564aa06d168a03"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/_app.js.map",revision:"3802a32911a72e02659902d93baaef26"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/_error.js",revision:"32569374d1aa365e2fb9c8d4646d7baa"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/_error.js.map",revision:"39e19f77f4e472140d1d6765a07c3d58"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/about.js",revision:"8dd72a73526cb0fcc8e026f4b0bd9b1d"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/about.js.map",revision:"8cec19769ba791f8f7490f8b47b25a97"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/archives.js",revision:"d19ce11416999467518086b34fa56f1c"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/archives.js.map",revision:"abfdcce503b70702280d0ac10669dd65"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/contact.js",revision:"eb8cdfb558e120bed88ff2dcd7b3f980"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/contact.js.map",revision:"2edf198d6a37edb109878b06f861227d"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/index.js",revision:"35270f4b98875953cde192a3631cf53c"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/index.js.map",revision:"a3104d9b1c615a2ec7b97cab1d95dfd1"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/projects.js",revision:"cf4a73efbcf6d84512f8bada56dfb205"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/projects.js.map",revision:"2e5947310715e5b11d81b133383d5faa"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/uses.js",revision:"de3757157d03fa6d43e391e4d6f11dc9"},{url:"/_next/static/M8ulPByTY2gVQ6vcxXMbV/pages/uses.js.map",revision:"a7c3f8b5e027f376c5799d1d887c28e8"},{url:"/_next/static/chunks/05d954cf.d054eb40866d7fd61004.js",revision:"28cd6d8f28fa5163a97bce5827858b8f"},{url:"/_next/static/chunks/05d954cf.d054eb40866d7fd61004.js.map",revision:"1f579b05888a275f2f911128bf218c63"},{url:"/_next/static/chunks/45f9665b1451b8bc544432403d3a0519b32c9dae.db673f777d9b341d0075.js",revision:"4f20205622009cbb1c492482fc35947d"},{url:"/_next/static/chunks/45f9665b1451b8bc544432403d3a0519b32c9dae.db673f777d9b341d0075.js.map",revision:"22692b5ea0b9a4d91bc5913be87b4a5a"},{url:"/_next/static/chunks/4e4222b3d6ccbc7eae6bbce623059ab5a4040409.458d24b2f9855d62c296.js",revision:"f7742f8a2c09891355548eec84935059"},{url:"/_next/static/chunks/4e4222b3d6ccbc7eae6bbce623059ab5a4040409.458d24b2f9855d62c296.js.map",revision:"5ced924d31bb60bd916cd7d45161eabf"},{url:"/_next/static/chunks/93736946c440958dbbf2380dcb95fc93344509d8.07bcaac08658275bb255.js",revision:"63c1a1866c232e9835381dc4cecfcb1a"},{url:"/_next/static/chunks/93736946c440958dbbf2380dcb95fc93344509d8.07bcaac08658275bb255.js.map",revision:"d5582edbae33982aa0abf35b09da2acb"},{url:"/_next/static/chunks/9f96d65d.1337245caf768c94bbd9.js",revision:"281cbd8494ff1e0058cd9d314db2c929"},{url:"/_next/static/chunks/9f96d65d.1337245caf768c94bbd9.js.map",revision:"c286dfc8e841e6859b0e1819ce53e855"},{url:"/_next/static/chunks/commons.ba1fb3fcefcd25784d7f.js",revision:"8e82d875ed58f156cafbbb03222af8a7"},{url:"/_next/static/chunks/commons.ba1fb3fcefcd25784d7f.js.map",revision:"e5a59a54c6228756fb1d99fca7fe5313"},{url:"/_next/static/chunks/db13a8b3a2a983a1fe1d631e18b9f1d7d2f44f5e.5b57acd7bb843605fb21.js",revision:"bebfce4f132ffb5fc14e3a2c15baac42"},{url:"/_next/static/chunks/db13a8b3a2a983a1fe1d631e18b9f1d7d2f44f5e.5b57acd7bb843605fb21.js.map",revision:"ed5f98f83af8772e19c867b49e5a40b3"},{url:"/_next/static/chunks/feba1d6d4c583a4d08963fb8a80abc7fb28c405c.2c070e4a48f1b5b3b39d.js",revision:"309fdf986dab4955838883258a4bfc0c"},{url:"/_next/static/chunks/feba1d6d4c583a4d08963fb8a80abc7fb28c405c.2c070e4a48f1b5b3b39d.js.map",revision:"01586ee8711440cac31d661934b16929"},{url:"/_next/static/chunks/framework.68eab182384616101314.js",revision:"c3b5a9c9338ecb26108d2741ce5902d0"},{url:"/_next/static/chunks/framework.68eab182384616101314.js.map",revision:"3da56826d03dacdf232d1596049e6872"},{url:"/_next/static/css/adc7a5726ef065549db2.css",revision:"ad156cf88869d0c26bd941c1101e308c"},{url:"/_next/static/css/adc7a5726ef065549db2.css.map",revision:"948a3ae14238545951eb3c0a7f520104"},{url:"/_next/static/runtime/main-ce593326b00d0d7fa2d9.js",revision:"4a80e9664effa525965c2190bb3f296e"},{url:"/_next/static/runtime/main-ce593326b00d0d7fa2d9.js.map",revision:"08505ecac42a5a1c81d9bdfaf5758a1a"},{url:"/_next/static/runtime/polyfills-deade0c050917f19c98e.js",revision:"a18f42e41c67e29fa06e07f07ebc33a8"},{url:"/_next/static/runtime/polyfills-deade0c050917f19c98e.js.map",revision:"32fafda9867aad4cad435b019fdd2bf3"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"cd00a63b218fd15ffccf530cd57d5a5e"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js.map",revision:"f278a2865cb8ef6642c784cbf2e6289b"},{url:"/android-icon-144x144.png",revision:"bb6581b8f7db2a91836a31a6f0bd9ffc"},{url:"/android-icon-192x192.png",revision:"12e92f065b2000de4c50d4f5f7867ab3"},{url:"/android-icon-36x36.png",revision:"af5985c899504371f8a4f7ecc8cdca7a"},{url:"/android-icon-48x48.png",revision:"4526cd322d18c0f2227e773977210afa"},{url:"/android-icon-72x72.png",revision:"e852d9eb12cd79cea7163f11fa510c9c"},{url:"/android-icon-96x96.png",revision:"a255173f8a5953f79f4c0f231b4fd31e"},{url:"/apple-icon-114x114.png",revision:"8a8051fff2008c24087825229bad6c38"},{url:"/apple-icon-120x120.png",revision:"434740acaa99c2d22bdcdb1512627051"},{url:"/apple-icon-144x144.png",revision:"bb6581b8f7db2a91836a31a6f0bd9ffc"},{url:"/apple-icon-152x152.png",revision:"39656f4996416003fd71a3eb19e19561"},{url:"/apple-icon-180x180.png",revision:"997c113572ecb71fee9bc07248b0c14f"},{url:"/apple-icon-57x57.png",revision:"5660a83ec4e5fcc814d20f6ac57c59b5"},{url:"/apple-icon-60x60.png",revision:"d8da3d2dd26c0a373f45704709932cfe"},{url:"/apple-icon-72x72.png",revision:"e852d9eb12cd79cea7163f11fa510c9c"},{url:"/apple-icon-76x76.png",revision:"ab6e7d57b6f05f2ac9e0b08b62b5b2fa"},{url:"/apple-icon-precomposed.png",revision:"58ca99181b4efbf1a7169e165fed39ec"},{url:"/apple-icon.png",revision:"58ca99181b4efbf1a7169e165fed39ec"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/content/blog/images/2020-05-04-17-25-39-image.png",revision:"7bca9dd859e8115cc0e713ab518e2468"},{url:"/favicon-16x16.png",revision:"7505a1c7d1b9fda3dcc387536f361503"},{url:"/favicon-32x32.png",revision:"584bd9a4739e0aac9a18eb40ef5bc8fd"},{url:"/favicon-96x96.png",revision:"a255173f8a5953f79f4c0f231b4fd31e"},{url:"/favicon.ico",revision:"a6c3eb218ce76b6ad72c53afa9733608"},{url:"/favicon.svg",revision:"aaac61dc70a9806318210cd13b91f6bd"},{url:"/images/Biscui.png",revision:"7051032466ac002bb838c2fbdd9501de"},{url:"/images/BiscuiTech Logo (2019) (Small).png",revision:"913d4f5839a41adfc527415726895836"},{url:"/images/biscuitech-profile.png",revision:"3ae8fb970c967f35a6289660e0640964"},{url:"/images/brilliant.png",revision:"2d8584e19c4f34c793273a72a305a89f"},{url:"/images/circle.svg",revision:"965fdf17858a1269f846279cc7c25223"},{url:"/images/icons/icon-128x128.png",revision:"128cc13f442f67a0416903f77989c69c"},{url:"/images/icons/icon-144x144.png",revision:"38f9b066e972373419040bb964bbe2a7"},{url:"/images/icons/icon-152x152.png",revision:"0bc711836333658bc9d89c0ad6020306"},{url:"/images/icons/icon-192x192.png",revision:"6bfd144a3c8d94045e00f28deeaf0aaa"},{url:"/images/icons/icon-384x384.png",revision:"ab8c7629114b307e03127095ab5bd478"},{url:"/images/icons/icon-512x512.png",revision:"bb2826dbc5291b9cf3c89f394f896d56"},{url:"/images/icons/icon-72x72.png",revision:"4992734dada60dabaab19675fa2819f3"},{url:"/images/icons/icon-96x96.png",revision:"483e04651a8d784c313f7f827e256e7e"},{url:"/images/ocean.jpg",revision:"1c382cff6a0a1b9b7eabfd27a23ed99d"},{url:"/images/profile/biscuitech-profile_en4wcw_c_scale,w_1011.png",revision:"92dafec4c6521a18c9cc8c71535f2875"},{url:"/images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png",revision:"672a404c96eae1cd40b98399d16ef4e5"},{url:"/images/profile/biscuitech-profile_en4wcw_c_scale,w_371.png",revision:"e97b39cce18a8244a071fde97054de7f"},{url:"/images/profile/biscuitech-profile_en4wcw_c_scale,w_602.png",revision:"c14e71c6d2293e0875e94f3f58b01c1e"},{url:"/images/profile/biscuitech-profile_en4wcw_c_scale,w_831.png",revision:"ce150a2b7cc81bf88a17743b4bce9a98"},{url:"/images/stack/apollographql.svg",revision:"19c73c4aa39dec4884cfdbbcfc142605"},{url:"/images/stack/expressjs.svg",revision:"9de32921fe1e3899c721d066d10da3ef"},{url:"/images/stack/graphql.svg",revision:"0125c677dddd2de8d1395d93c478fe45"},{url:"/images/stack/icons/icon-cheveron-right-circle.svg",revision:"998ecd240364cae3393449eee303d0d4"},{url:"/images/stack/node-dot-js.svg",revision:"106c427a1b9eb04638d97562d9276bf3"},{url:"/images/stack/postgresql.svg",revision:"d50aed68b99cff3f4b759c20c6f43a63"},{url:"/images/stack/react.svg",revision:"d08917c3d75d5f946d6900c7d0fc56e4"},{url:"/images/topography.svg",revision:"73692553d07680289748f766b0bcde93"},{url:"/manifest.json",revision:"06a02a6cda916e543138148dd663ad74"},{url:"/ms-icon-144x144.png",revision:"bb6581b8f7db2a91836a31a6f0bd9ffc"},{url:"/ms-icon-150x150.png",revision:"050aa89acf1a0ce15cfc9a391371038f"},{url:"/ms-icon-310x310.png",revision:"ef5ab6d6a1e7ce6361aef4a5775465bb"},{url:"/ms-icon-70x70.png",revision:"4438f09b4a0e225bd11e30535ce319e4"},{url:"/robots.txt",revision:"22b5031be425cb95873de49c5d15955a"},{url:"/static/inter.css",revision:"902f6dcb58fca36b3a1cb747cbacd817"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
