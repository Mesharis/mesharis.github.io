'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2e6c12ff86a3c42526561c79da52f4b1",
"index.html": "0867ef25fadba7f33034e4112da6c8ef",
"/": "0867ef25fadba7f33034e4112da6c8ef",
"main.dart.js": "ad89b416a72f0c1c61f40ca183c1674a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3bb0cb5cdd1b07f303aeed017175ff3b",
"assets/AssetManifest.json": "863708f80880ff823780535062cc5fb6",
"assets/NOTICES": "f2b07c5fcb1f485dc1a985cb2e374c24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/test/wenzi0028.png": "72413e749f54915632a38aabe94028e3",
"assets/assets/test/wenzi0000.png": "9140a4e48a5384c3b488ada9709047f2",
"assets/assets/test/wenzi0014.png": "3b1a2fdc7c268cdadfd2910e2d369726",
"assets/assets/test/wenzi0015.png": "96581ab3806ba199879c951784ac085f",
"assets/assets/test/wenzi0001.png": "0d6b2f8aaeda6f33a29183ef8c6c5950",
"assets/assets/test/wenzi0029.png": "cb0cda45a9bd4ff1283e22e606e75c87",
"assets/assets/test/wenzi0017.png": "0a9905c7fd8b52157612932aeea783e9",
"assets/assets/test/wenzi0003.png": "cd1be0f871c340a114746894aa2c1475",
"assets/assets/test/wenzi0002.png": "2f586a8705101733c9072c2c472746c5",
"assets/assets/test/wenzi0016.png": "b7ebc4b6fa7498fa32ede3edd6ce370e",
"assets/assets/test/wenzi0012.png": "0ed9585cc23ec1555db30066453e46da",
"assets/assets/test/wenzi0006.png": "4c8e48482e5fec0b8f723ccb8637e512",
"assets/assets/test/wenzi0007.png": "9def8d6d0e3c65ffebe930b8893ac658",
"assets/assets/test/wenzi0013.png": "9abd3dd1adadd45597fb9b5ea908d588",
"assets/assets/test/wenzi0005.png": "fb232a973f3501feea393583a01fbcbf",
"assets/assets/test/wenzi0011.png": "b2219120f4bd6c91fdeec7852ea957b0",
"assets/assets/test/wenzi0039.png": "6f71b55e5c808e070656656f975522d3",
"assets/assets/test/wenzi0038.png": "a1efb0b170c2689f4f067d50c11f0f40",
"assets/assets/test/wenzi0010.png": "c0295bac075de73e197f8b154d180fec",
"assets/assets/test/wenzi0004.png": "db749e809f46d991dfeabb335b006f7e",
"assets/assets/test/wenzi0048.png": "5698ac69c144e99fdb61d04a24eaea92",
"assets/assets/test/wenzi0049.png": "4a3ceae5ab1f009773d687685cd5aee1",
"assets/assets/test/wenzi0042.png": "5238c4f37a13fd02e60fd91d58b699fa",
"assets/assets/test/wenzi0043.png": "39f4db20caefe8609089d169defbf957",
"assets/assets/test/wenzi0041.png": "2b68a62d463d9a06e89455f53bc3d877",
"assets/assets/test/wenzi0040.png": "a68a0130a396d8e1ce05f1708e61aab7",
"assets/assets/test/wenzi0050.png": "6bb94d958fb98398c9aa5ecca63737b5",
"assets/assets/test/wenzi0044.png": "f560987e54125ec3e54f2aa04077261e",
"assets/assets/test/wenzi0045.png": "a48ff4ab05a00e8609efb4f8507d47b0",
"assets/assets/test/wenzi0051.png": "0059da28de0b8b35698a2cef6bddcb05",
"assets/assets/test/wenzi0047.png": "6f02f26fbc67df9afd477a75b075e945",
"assets/assets/test/wenzi0046.png": "db7d36288fc4b7d7cc889a0336976cc8",
"assets/assets/test/wenzi0009.png": "69894eadf0e95d65c2d37ed224f86782",
"assets/assets/test/wenzi0021.png": "448a82cf2795a42decd3757da2186555",
"assets/assets/test/wenzi0035.png": "7c394590cea05bc84972dc1d236ec151",
"assets/assets/test/wenzi0034.png": "2f1129807635ffec04b81d196aa411e8",
"assets/assets/test/wenzi0020.png": "92b637c2ba0c12b9e65cf4b203407b3f",
"assets/assets/test/wenzi0008.png": "7d7a472a344788f037d2d0cb75745935",
"assets/assets/test/wenzi0036.png": "694e65b50755681b4c6e0ba35b5a3d56",
"assets/assets/test/wenzi0022.png": "e46e039415ec389312e638d5e5e57180",
"assets/assets/test/wenzi0023.png": "5311472baf9f06ae7c050c78cc9221f1",
"assets/assets/test/wenzi0037.png": "c4acb8a52d91a5e66e375faffe70c55d",
"assets/assets/test/wenzi0033.png": "600b42fa86ff962a1b6ec0f2142f07d7",
"assets/assets/test/wenzi0027.png": "5b7c0e7c40f3dca767063d4e85360943",
"assets/assets/test/wenzi0026.png": "98161fb2f27a753f5a3a752ab66051f8",
"assets/assets/test/wenzi0032.png": "d28c47c621b5c81985dbc907abddf8c0",
"assets/assets/test/wenzi0024.png": "2291b9cc49faf444248ec3195931e1f7",
"assets/assets/test/wenzi0030.png": "1428e5398fc751cc819d18f307780c04",
"assets/assets/test/wenzi0018.png": "70908e17976d130b398c3fec3df83609",
"assets/assets/test/wenzi0019.png": "8eb7564dec28b8a5e1401b54a5649be4",
"assets/assets/test/wenzi0031.png": "7a4cca431eb6a0b872bac3ea45933374",
"assets/assets/test/wenzi0025.png": "2291b9cc49faf444248ec3195931e1f7",
"assets/assets/images/king.png": "bfa9da41f0482be18155e89be10c171a",
"assets/assets/images/Hamburger.png": "55b334164125f1fb5f136dd332f1288b",
"assets/assets/images/background_slot.png": "a64cd11d81a005252eaec1c37fdace8f",
"assets/assets/images/bonus.png": "10fb8230856943aefd7f0b4e4dddfbd1",
"assets/assets/images/cherry.png": "b33c7c1ca5e80a573266be776bec54b0",
"assets/assets/images/BIGWINNER.png": "fe6d335eb57edb95351ebb51f074e546",
"assets/assets/images/DIAMONDS.png": "c181388a0abf8be8f425fb76441400f8",
"assets/assets/images/cloud.jpg": "f7b5b073bcd9c4063f95e42422ca896d",
"assets/assets/images/cloud.png": "dfb83f669d49cdf53e2b2d0ab0bca116",
"assets/assets/images/wild.png": "83998517582c80cd39d54a3a4bf93fe9",
"assets/assets/images/3DIAMONDS.png": "ff876179542d17ac946d311747ef9868",
"assets/assets/images/Lemon.png": "97f43374b86eaee1b93b2c9c56cec85d",
"assets/assets/images/banana.png": "98739da7174eafe79020e048298e9b1f",
"assets/assets/images/pizza.png": "e7357082f8b757e13f31e6fc014cea67",
"assets/assets/images/Strawberry.png": "bb65146f0fe9e8130cd1ad9c0b0a50c6",
"assets/assets/images/potatoes.png": "20bc747e3b5e2d95592f7a06567416d9",
"assets/assets/images/bg_chief.png": "0c781bef0acb3e91ab6258d4cdd16ecb",
"assets/assets/images/weed.png": "dfe9845fef7e695066168b9fc43c9673",
"assets/assets/lottie/coins_lottie.json": "52dc61a62d255dffe43d848f01555380",
"assets/assets/lottie/golden_confetti_lottie.json": "78d7c63ab6261afdccb29509851ec52f",
"assets/assets/lottie/confetti_lottie.json": "0c12e0f66e32d418089dba282989dd12",
"assets/assets/lottie/bonusLottie.json": "7e29aa3bdd3dc1fa70ea26e9ecb47721",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
