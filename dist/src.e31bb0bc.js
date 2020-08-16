// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],"../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"generator/markov.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markovChain = function markovChain() {
  var sentences = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var cognitionLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var state = {};
  var arrayOfWords = sentences.split(" ");
  arrayOfWords.forEach(function (word, index, array) {
    if (!state[word]) {
      state[word] = [];
    }

    var phrase = array.slice(index, index + cognitionLevel + 1).join(" ");
    var isPhraseRecorded = state[word].includes(phrase);

    if (!isPhraseRecorded) {
      state[word] = [].concat((0, _toConsumableArray2.default)(state[word]), [phrase]);
    }
  });
  return state;
};

var _default = markovChain;
exports.default = _default;
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js"}],"api/mockData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MOCK = "Try-hard beard retro everyday carry butcher, sriracha fixie photo booth ramps af messenger bag tacos tumblr next level. Kickstarter kogi man braid intelligentsia ugh forage. Before they sold out truffaut VHS wayfarers man braid affogato, synth iPhone kogi normcore pitchfork unicorn lumbersexual four loko. Sartorial shaman tumeric, messenger bag lumbersexual keytar kinfolk wolf squid butcher poutine ennui chillwave. Poutine tofu fashion axe ennui palo santo pitchfork celiac health goth viral selfies DIY gochujang gastropub. Actually dreamcatcher stumptown bushwick XOXO thundercats woke ethical slow-carb. Bitters art party pitchfork pabst keffiyeh tote bag ethical shabby chic mixtape fingerstache 8-bit 3 wolf moon church-key intelligentsia cloud bread. Glossier taiyaki schlitz umami shoreditch bicycle rights franzen literally gastropub prism kitsch succulents pabst drinking vinegar. Bicycle rights flannel pok pok polaroid, squid woke truffaut deep v edison bulb swag cornhole taxidermy. Adaptogen meggings yuccie keffiyeh dreamcatcher hexagon. Wayfarers fam seitan street art hoodie paleo meggings air plant la croix tofu blue bottle narwhal mixtape skateboard fashion axe. Coloring book vaporware kombucha lo-fi direct trade lumbersexual fam tote bag readymade thundercats PBR&B helvetica narwhal offal hell of. Waistcoat kombucha selfies, sartorial four dollar toast swag pinterest kitsch normcore neutra messenger bag blue bottle PBR&B yuccie hell of. Sriracha succulents irony typewriter fixie YOLO normcore, pabst wayfarers butcher DIY subway tile poutine jianbing. Master cleanse raw denim wolf brunch forage. Man bun next level fam squid pinterest cliche irony seitan blue bottle shabby chic pop-up iPhone. Four dollar toast lumbersexual photo booth seitan ethical mlkshk. Actually gentrify af, polaroid fashion axe brooklyn ramps copper mug organic raw denim leggings kickstarter hell of whatever. Street art messenger bag cred retro letterpress gentrify, meggings migas try-hard before they sold out poke health goth narwhal. Keffiyeh selfies put a bird on it forage mixtape normcore squid whatever. Drinking vinegar celiac gochujang letterpress tofu franzen put a bird on it. Pitchfork microdosing you probably haven't heard of them, lo-fi food truck tote bag lomo fixie art party adaptogen meh tumblr blog mustache. Master cleanse asymmetrical tumblr gluten-free keytar iceland live-edge waistcoat lo-fi edison bulb. Air plant slow-carb celiac truffaut gentrify, meh cornhole mumblecore iceland chartreuse man braid tumblr portland. Flannel lyft viral, aesthetic celiac VHS edison bulb cornhole kickstarter man braid subway tile hammock mlkshk blue bottle. Synth quinoa kitsch selfies, four dollar toast man braid man bun truffaut crucifix VHS coloring book shabby chic gastropub bushwick kickstarter. Try-hard XOXO +1 subway tile, adaptogen you probably haven't heard of them lomo ennui fixie vape tattooed. Church-key ennui schlitz post-ironic vegan mlkshk hella before they sold out artisan fanny pack. Edison bulb readymade chartreuse retro synth skateboard fanny pack whatever tumblr enamel pin asymmetrical selvage. Wayfarers waistcoat slow-carb affogato four loko cloud bread disrupt taxidermy iceland trust fund dreamcatcher tumblr shoreditch. Woke williamsburg sriracha vaporware copper mug. Master cleanse 8-bit tote bag YOLO cardigan typewriter hashtag four loko chartreuse bitters vegan schlitz squid dreamcatcher. Church-key chicharrones helvetica, marfa flannel man braid green juice iceland vegan meh humblebrag prism seitan microdosing. Blue bottle neutra biodiesel umami, 90's actually edison bulb cray tote bag crucifix. Church-key 3 wolf moon aesthetic, yr art party microdosing yuccie godard +1 celiac organic slow-carb. Beard occupy irony poutine wolf. Shoreditch trust fund ugh woke plaid bicycle rights gastropub prism readymade gentrify vaporware man bun. Vinyl ennui truffaut raclette banjo. Letterpress affogato bushwick photo booth brunch vinyl. Butcher stumptown +1 flexitarian banjo banh mi hammock organic put a bird on it everyday carry. Readymade keytar venmo sustainable lomo, tumeric direct trade austin lyft whatever PBR&B tofu affogato poke etsy. Pickled put a bird on it slow-carb direct trade sustainable keffiyeh health goth listicle salvia sartorial wolf subway tile unicorn. Literally echo park butcher, selfies brooklyn raw denim kombucha af vexillologist mustache drinking vinegar palo santo. Activated charcoal gastropub sartorial disrupt readymade tote bag chartreuse salvia tbh godard. Celiac tbh air plant food truck, freegan pinterest cliche 3 wolf moon keytar. Lumbersexual man bun art party, helvetica etsy paleo unicorn. Raclette hoodie slow-carb four loko etsy, venmo tacos. Meh before they sold out you probably haven't heard of them tbh, occupy pug shabby chic banh mi. Selfies street art salvia, kogi paleo literally fingerstache typewriter listicle activated charcoal pabst copper mug photo booth. Squid wayfarers disrupt shoreditch, chillwave bespoke intelligentsia mustache vinyl pok pok hexagon chicharrones try-hard before they sold out.";
var _default = MOCK;
exports.default = _default;
},{}],"api/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fetchMockData = exports.fetchData = void 0;

var _mockData = _interopRequireDefault(require("./mockData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = "https://hipsum.co/api/?type=hipster-centric&sentences=";

var fetchData = function fetchData() {
  var sentenceNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  return fetch("".concat(URL).concat(sentenceNumber)).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (Array.isArray(data)) {
      // the api _currently_ returns the data as an array with a single entry
      return data[0];
    }

    return data;
  });
};

exports.fetchData = fetchData;

var fetchMockData = function fetchMockData() {
  return Promise.resolve(_mockData.default);
};

exports.fetchMockData = fetchMockData;
var _default = {
  fetchData: fetchData,
  fetchMockData: fetchMockData
};
exports.default = _default;
},{"./mockData":"api/mockData.js"}],"generator/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _markov = _interopRequireDefault(require("./markov"));

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generate = function generate() {
  return _api.default.fetchData(50).then(function (data) {
    var state = (0, _markov.default)(data);
    return state;
  });
};

var _default = generate;
exports.default = _default;
},{"./markov":"generator/markov.js","../api":"api/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _generator = _interopRequireDefault(require("./generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello world");
console.log("generating now:", (0, _generator.default)());
},{"./generator":"generator/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51235" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map