"use strict";importScripts('static/js/sw.js');var precacheConfig=[["index.html","0df5074fdd9ed111fe89bfc39e699184"],["service-worker.js","18a82c527ddde414a1ebc5da57dfacab"],["static/css/app.e46ab1b0e18b8694332135842b734bd6.css","9767bd60d090846df165ceb2785c6496"],["static/img/clubs/ac-ajaccio.svg","346c50dae833855a89ca0aa2f7b9a5b6"],["static/img/clubs/aj-auxerre.svg","f3e3ca07363b03f624879ea98b6d74b0"],["static/img/clubs/amiens-sc.svg","3c2c5fc6c96644e0528bbf88a48c1048"],["static/img/clubs/angers-sco.svg","46336a67cf2fc792878a80de0b2c23af"],["static/img/clubs/as-monaco.svg","9420fd94c5b5b9e3120c5d2b626b09f1"],["static/img/clubs/as-nancy-lorraine.svg","56aa610538cbe6cfa73670139e3b326b"],["static/img/clubs/as-saint-etienne.svg","afa17e1393ff29db31e4f760a2eec47d"],["static/img/clubs/chamois-niortais.svg","493e8af531319d40f6c99d5028373165"],["static/img/clubs/chateauroux.svg","ffe91f214eaf364c434b931e19e07057"],["static/img/clubs/clermont-foot.svg","185943f5af1f85b6adfb9095d8daa529"],["static/img/clubs/dijon-fco.svg","950e4edec919e4dc7ef682b2614005e3"],["static/img/clubs/ea-guingamp.svg","ffe785419450cd864792e05394930b88"],["static/img/clubs/estac-troyes.svg","2457679306183dcaf8bc2f221d5152e3"],["static/img/clubs/fbbp-01.svg","f85188545dc08997944a378a9a580ae8"],["static/img/clubs/fc-lorient.svg","0cebd7e25731c16fcb9c30cdc76791a9"],["static/img/clubs/fc-metz.svg","7680d2cbbd25743686b4ed3f4d06b131"],["static/img/clubs/fc-nantes.svg","63aead1afee21a381c446575ff0b4182"],["static/img/clubs/fc-sochaux-montbeliard.svg","ab29eb24bd8aa7fd3059e18926440c5a"],["static/img/clubs/gazelec-fc-ajaccio.svg","4f241f03a9947b33efb6d6bc8d994ddd"],["static/img/clubs/girondins-de-bordeaux.svg","f39603f827ea0d011127fe4250c4ed41"],["static/img/clubs/havre-ac.svg","57eeb55bd774d03b5d219074cd62a7aa"],["static/img/clubs/losc.svg","4f59f5e3e1df3f181763439cd95ee033"],["static/img/clubs/montpellier-herault-sc.svg","974fe8b7cf84a5b3108861b154dd33c3"],["static/img/clubs/nimes-olympique.svg","572b0cd5f056502e59784e53a01a761b"],["static/img/clubs/ogc-nice.svg","b286c66908d29e68bbb3fc19b6c3871e"],["static/img/clubs/olympique-de-marseille.svg","3aed3a1ae79a56ea9748a316466ee195"],["static/img/clubs/olympique-lyonnais.svg","54cb587d154bb28036f2c8256e99860d"],["static/img/clubs/paris-fc.svg","e0004fd93a726407c9e09ab431c3553b"],["static/img/clubs/paris-saint-germain.svg","f38f839bfc71b2eca3cf70338458ae51"],["static/img/clubs/quevilly-rouen-metropole.svg","ef8afbefac3d824c30ddc3ff33bdbf3e"],["static/img/clubs/rc-lens.svg","82e35b5cda614713a17928b5287cf097"],["static/img/clubs/rc-strasbourg-alsace.svg","7406715d757b08bc717d1bd739bf3022"],["static/img/clubs/sm-caen.svg","24297de071ce34c0d5a82e7a25304906"],["static/img/clubs/stade-brestois-29.svg","c493c97cb0784b4cb7860606284eb49d"],["static/img/clubs/stade-de-reims.svg","9f6bee9e347ff750b9f08dbdba33c415"],["static/img/clubs/stade-rennais-fc.svg","65e1dcc043eb85ee894b331252579612"],["static/img/clubs/toulouse-fc.svg","fe0dbee9f849e5aa87024b4dd0747835"],["static/img/clubs/tours-fc.svg","b779360fa36e5ab69568c23c153699e4"],["static/img/clubs/us-orleans.svg","7868ce7bee3e88913d13d7da56831db5"],["static/img/clubs/valenciennes-fc.svg","2248be12a8d9faba2fea30b631084258"],["static/img/commentairesIcons/ball.png","0b67141e644d6a7d6616b86749fc511a"],["static/img/commentairesIcons/change.png","2f84bf133a5f40d06f17021a8c93fd57"],["static/img/commentairesIcons/corner.png","f4dbe4fcb430079b060471193727958b"],["static/img/commentairesIcons/coup_franc.png","1467ad9c3ce2ceb777aa22bd2c638bb6"],["static/img/commentairesIcons/jaune.png","e741c6e15e666181fb952f7fb1ee646c"],["static/img/commentairesIcons/penalty.png","1edab5af04d78c28dfe959f6ed0215cc"],["static/img/commentairesIcons/rouge.png","08c7dd5afc79eedce1b87b21decceb10"],["static/img/commentairesIcons/sphère.png","20c0ffe21d671f3ca9429fe159634cce"],["static/img/icons/android-chrome-192x192.png","aa041d91d9eecb749159ff7f0287ad51"],["static/img/icons/android-chrome-200x200_LFP.png","3aca83d62db1bb27a61b9d90040ba996"],["static/img/icons/android-chrome-40x40_LFP.png","8b70264670eb17e3472219f14b1c5dab"],["static/img/icons/android-chrome-512x512.png","16c51c5174fb6fdc066260a4a29c155b"],["static/img/icons/apple-touch-icon-120x120.png","518a3a32b7984b48488bf0dafe5f9815"],["static/img/icons/apple-touch-icon-152x152.png","e222185cc2e5098ba3c7783296172abe"],["static/img/icons/apple-touch-icon-180x180.png","07c4b2436565a71da515bee1f20dd6db"],["static/img/icons/apple-touch-icon-60x60.png","9d53bd94f62bbedfa9dff4878160dfc4"],["static/img/icons/apple-touch-icon-76x76.png","a892cd6f4d8e2dcc833c6a3829d54a23"],["static/img/icons/apple-touch-icon.png","07c4b2436565a71da515bee1f20dd6db"],["static/img/icons/apple-touch-iconLFP.png","f47167b12bc32520726c7f32fbf4d716"],["static/img/icons/msapplication-icon-144x144.png","5e95cd1f1de9f9ce293bd1a8f14396eb"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/img/notif/notif_off.png","34b07ebc67328e0d4626201fd74ebd2c"],["static/img/notif/notif_on.png","cc5b309bc779f50a71f6e32488c4dafe"],["static/js/app.cf4790880cad8445c3a5.js","ba091e666bca1b660d608fb47163c6f9"],["static/js/manifest.9f6db6e3c4df8ede198b.js","c2596cae1eb803a760dd6c7586e9aa37"],["static/js/notification.js","8e2f3a710abc445470f512b3abea2c49"],["static/js/sw.js","b807c74e2d863b21632e957c14218f2e"],["static/js/vendor.552e8440647dd8cbf444.js","fc1f823ef190208d1946e71eaeb00dac"],["static/style/vue-material.css","65a6b4b5f98241a910dc233110f5c9f6"],["static/style/vue-material.js","21262d29383f6c5d099ac47b44575951"]],cacheName="sw-precache-v3-lfp-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,n,!1);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function c(s,o){if(!n[s]){if(!t[s]){var i="function"==typeof require&&require;if(!o&&i)return i(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return c(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)c(r[s]);return c}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||o.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||o.cache.name,caches.open(t)}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,o=e("./options"),i=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||o.successResponses;return fetch(e.clone()).then(function(a){return"GET"===e.method&&n.test(a.status)&&c(t).then(function(n){n.put(e,a).then(function(){var c,a=t.cache||o.cache;(a.maxEntries||a.maxAgeSeconds)&&a.name&&(c=function(e,t,n){var c=e.url,a=n.maxAgeSeconds,s=n.maxEntries,o=n.name,u=Date.now();return r("Updating LRU order for "+c+". Max entries is "+s+", max age is "+a),i.getDb(o).then(function(e){return i.setTimestampForUrl(e,c,u)}).then(function(e){return i.expireEntries(e,s,a,u)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}.bind(null,e,n,a),s=s?s.then(c):c())})}),a.clone()})},openCache:c,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return c(t).then(function(t){return t.add(e)})},uncache:function(e,t){return c(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||a(e),o.preCacheItems=o.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",c=1,a="store",s="url",o="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=(t=e,new Promise(function(e,n){var i=indexedDB.open(r+t,c);i.onupgradeneeded=function(){i.result.createObjectStore(a,{keyPath:s}).createIndex(o,o,{unique:!1})},i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}))),i[e];var t},setTimestampForUrl:function(e,t,n){return new Promise(function(r,c){var s=e.transaction(a,"readwrite");s.objectStore(a).put({url:t,timestamp:n}),s.oncomplete=function(){r(e)},s.onabort=function(){c(s.error)}})},expireEntries:function(e,t,n,r){return(c=e,i=n,u=r,i?new Promise(function(e,t){var n=1e3*i,r=[],f=c.transaction(a,"readwrite"),l=f.objectStore(a);l.index(o).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&u-n>t.value[o]){var c=t.value[s];r.push(c),l.delete(c),t.continue()}},f.oncomplete=function(){e(r)},f.onabort=t}):Promise.resolve([])).then(function(n){return(r=e,c=t,c?new Promise(function(e,t){var n=[],i=r.transaction(a,"readwrite"),u=i.objectStore(a),f=u.index(o),l=f.count();f.count().onsuccess=function(){var e=l.result;e>c&&(f.openCursor().onsuccess=function(t){var r=t.target.result;if(r){var a=r.value[s];n.push(a),u.delete(a),e-n.length>c&&r.continue()}})},i.oncomplete=function(){e(n)},i.onabort=t}):Promise.resolve([])).then(function(e){return n.concat(e)});var r,c});var c,i,u}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),a=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){c.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then(function(e){return Promise.all(s.preCacheItems).then(r).then(c.validatePrecacheInput).then(function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,c=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),c=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),c=[];!r.done;){new RegExp(r.value[0]).test(t)&&c.push(r.value[1]),r=n.next()}return c},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,a){var s;a=a||{},t instanceof RegExp?s=RegExp:s=(s=a.origin||self.location.origin)instanceof RegExp?s.source:s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var o=new r(e,t,n,a);this.routes.has(s)||this.routes.set(s,new Map);var i=this.routes.get(s);i.has(e)||i.set(e,new Map);var u=i.get(e),f=o.regexp||o.fullUrlRegExp;u.has(f.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,o)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,c=n.pathname;return this._match(e,a(this.routes,r),c)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var c=t[r],s=c&&c.get(e.toLowerCase());if(s){var o=a(s,n);if(o.length>0)return o[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,s=Date.now();return c.isResponseFresh(t,a.maxAgeSeconds,s)?t:c.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),c=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,s){var o=!1,i=[],u=function(e){i.push(e.toString()),o?s(new Error('Both cache and network failed: "'+i.join('", "')+'"')):o=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),c(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,s=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then(function(t){var o,i,u=[];if(s){var f=new Promise(function(a){o=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,s=Date.now(),o=t.maxAgeSeconds;c.isResponseFresh(e,o,s)&&a(e)})},1e3*s)});u.push(f)}var l=c.fetchAndCache(e,n).then(function(e){if(o&&clearTimeout(o),a.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(l),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),c=e("./router"),a=e("./helpers"),s=e("./strategies"),o=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",o.installListener),self.addEventListener("activate",o.activateListener),self.addEventListener("fetch",o.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:c,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],c=0,a=0,o="",i=t&&t.delimiter||"/";null!=(n=h.exec(e));){var u=n[0],f=n[1],l=n.index;if(o+=e.slice(a,l),a=l+u.length,f)o+=f[1];else{var d=e[a],p=n[2],g=n[3],b=n[4],m=n[5],v=n[6],x=n[7];o&&(r.push(o),o="");var w=null!=p&&null!=d&&d!==p,y="+"===v||"*"===v,E="?"===v||"*"===v,R=n[2]||i,C=b||m;r.push({name:g||c++,prefix:p||"",delimiter:R,optional:E,repeat:y,partial:w,asterisk:!!x,pattern:C?(k=C,k.replace(/([=!:$\/()])/g,"\\$1")):x?".*":"[^"+s(R)+"]+?"})}}var k;return a<e.length&&(o+=e.substr(a)),o&&r.push(o),r}function c(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",s=n||{},o=(r||{}).pretty?c:encodeURIComponent,i=0;i<e.length;i++){var u=e[i];if("string"!=typeof u){var f,h=s[u.name];if(null==h){if(u.optional){u.partial&&(a+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(l(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(f=o(h[d]),!t[i].test(f))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===d?u.prefix:u.delimiter)+f}}else{if(f=u.asterisk?encodeURI(h).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(h),!t[i].test(f))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+f+'"');a+=u.prefix+f}}else a+=u}return a}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function o(e,t){return e.keys=t,e}function i(e){return e.sensitive?"":"i"}function u(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,c=!1!==n.end,a="",u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)a+=s(f);else{var h=s(f.prefix),d="(?:"+f.pattern+")";t.push(f),f.repeat&&(d+="(?:"+h+d+")*"),a+=d=f.optional?f.partial?h+"("+d+")?":"(?:"+h+"("+d+"))?":h+"("+d+")"}}var p=s(n.delimiter||"/"),g=a.slice(-p.length)===p;return r||(a=(g?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=c?"$":r&&g?"":"(?="+p+"|$)",o(new RegExp("^"+a,i(n)),t)}function f(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return o(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],c=0;c<e.length;c++)r.push(f(e[c],t,n).source);return o(new RegExp("(?:"+r.join("|")+")",i(n)),t)}(e,t,n):(c=t,u(r(e,a=n),c,a));var c,a}var l=e("isarray");t.exports=f,t.exports.parse=r,t.exports.compile=function(e,t){return a(r(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=u;var h=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/unpkg\.com\/vuetify\/dist\/vuetify.min.css/,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/www\.gstatic\.com\/firebasejs\/4\.10\.1\/firebase.js/,toolbox.cacheFirst,{});