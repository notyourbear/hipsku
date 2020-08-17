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
},{"./arrayWithoutHoles":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"../node_modules/pluralize/pluralize.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global define */
(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof require === 'function' && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};
  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */

  function sanitizeRule(rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }
  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */


  function restoreCase(word, token) {
    // Tokens are an exact match.
    if (word === token) return token; // Lower cased words. E.g. "hello".

    if (word === word.toLowerCase()) return token.toLowerCase(); // Upper cased words. E.g. "WHISKY".

    if (word === word.toUpperCase()) return token.toUpperCase(); // Title cased words. E.g. "Title".

    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    } // Lower cased words. E.g. "test".


    return token.toLowerCase();
  }
  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */


  function interpolate(str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }
  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */


  function replace(word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }
  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */


  function sanitizeWord(token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length; // Iterate over the sanitization rules and use the first one to match.

    while (len--) {
      var rule = rules[len];
      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }
  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */


  function replaceWord(replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase(); // Check against the keep object map.

      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      } // Check against the replacement map for a direct word replacement.


      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      } // Run all the rules against the word.


      return sanitizeWord(token, word, rules);
    };
  }
  /**
   * Check if a word is part of the map.
   */


  function checkWord(replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();
      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;
      return sanitizeWord(token, token, rules) === token;
    };
  }
  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */


  function pluralize(word, count, inclusive) {
    var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
    return (inclusive ? count + ' ' : '') + pluralized;
  }
  /**
   * Pluralize a word.
   *
   * @type {Function}
   */


  pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */

  pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
  /**
   * Singularize a word.
   *
   * @type {Function}
   */

  pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */

  pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */

  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };
  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */


  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };
  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */


  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    } // Set singular and plural references for the word.


    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };
  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */


  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();
    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };
  /**
   * Irregular rules.
   */


  [// Pronouns.
  ['I', 'we'], ['me', 'us'], ['he', 'they'], ['she', 'they'], ['them', 'them'], ['myself', 'ourselves'], ['yourself', 'yourselves'], ['itself', 'themselves'], ['herself', 'themselves'], ['himself', 'themselves'], ['themself', 'themselves'], ['is', 'are'], ['was', 'were'], ['has', 'have'], ['this', 'these'], ['that', 'those'], // Words ending in with a consonant and `o`.
  ['echo', 'echoes'], ['dingo', 'dingoes'], ['volcano', 'volcanoes'], ['tornado', 'tornadoes'], ['torpedo', 'torpedoes'], // Ends with `us`.
  ['genus', 'genera'], ['viscus', 'viscera'], // Ends with `ma`.
  ['stigma', 'stigmata'], ['stoma', 'stomata'], ['dogma', 'dogmata'], ['lemma', 'lemmata'], ['schema', 'schemata'], ['anathema', 'anathemata'], // Other irregular rules.
  ['ox', 'oxen'], ['axe', 'axes'], ['die', 'dice'], ['yes', 'yeses'], ['foot', 'feet'], ['eave', 'eaves'], ['goose', 'geese'], ['tooth', 'teeth'], ['quiz', 'quizzes'], ['human', 'humans'], ['proof', 'proofs'], ['carve', 'carves'], ['valve', 'valves'], ['looey', 'looies'], ['thief', 'thieves'], ['groove', 'grooves'], ['pickaxe', 'pickaxes'], ['passerby', 'passersby']].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });
  /**
   * Pluralization rules.
   */

  [[/s?$/i, 's'], [/[^\u0000-\u007F]$/i, '$0'], [/([^aeiou]ese)$/i, '$1'], [/(ax|test)is$/i, '$1es'], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'], [/(e[mn]u)s?$/i, '$1s'], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'], [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'], [/(seraph|cherub)(?:im)?$/i, '$1im'], [/(her|at|gr)o$/i, '$1oes'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'], [/sis$/i, 'ses'], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/([^ch][ieo][ln])ey$/i, '$1ies'], [/(x|ch|ss|sh|zz)$/i, '$1es'], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'], [/(pe)(?:rson|ople)$/i, '$1ople'], [/(child)(?:ren)?$/i, '$1ren'], [/eaux$/i, '$0'], [/m[ae]n$/i, 'men'], ['thou', 'you']].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });
  /**
   * Singularization rules.
   */

  [[/s$/i, ''], [/(ss)$/i, '$1'], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'], [/ies$/i, 'y'], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'], [/\b(mon|smil)ies$/i, '$1ey'], [/\b((?:tit)?m|l)ice$/i, '$1ouse'], [/(seraph|cherub)im$/i, '$1'], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'], [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'], [/(test)(?:is|es)$/i, '$1is'], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'], [/(alumn|alg|vertebr)ae$/i, '$1a'], [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'], [/(matr|append)ices$/i, '$1ix'], [/(pe)(rson|ople)$/i, '$1rson'], [/(child)ren$/i, '$1'], [/(eau)x?$/i, '$1'], [/men$/i, 'man']].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });
  /**
   * Uncountable rules.
   */

  [// Singular words with no plurals.
  'adulthood', 'advice', 'agenda', 'aid', 'aircraft', 'alcohol', 'ammo', 'analytics', 'anime', 'athletics', 'audio', 'bison', 'blood', 'bream', 'buffalo', 'butter', 'carp', 'cash', 'chassis', 'chess', 'clothing', 'cod', 'commerce', 'cooperation', 'corps', 'debris', 'diabetes', 'digestion', 'elk', 'energy', 'equipment', 'excretion', 'expertise', 'firmware', 'flounder', 'fun', 'gallows', 'garbage', 'graffiti', 'hardware', 'headquarters', 'health', 'herpes', 'highjinks', 'homework', 'housework', 'information', 'jeans', 'justice', 'kudos', 'labour', 'literature', 'machinery', 'mackerel', 'mail', 'media', 'mews', 'moose', 'music', 'mud', 'manga', 'news', 'only', 'personnel', 'pike', 'plankton', 'pliers', 'police', 'pollution', 'premises', 'rain', 'research', 'rice', 'salmon', 'scissors', 'series', 'sewage', 'shambles', 'shrimp', 'software', 'species', 'staff', 'swine', 'tennis', 'traffic', 'transportation', 'trout', 'tuna', 'wealth', 'welfare', 'whiting', 'wildebeest', 'wildlife', 'you', /pok[eé]mon$/i, // Regexes.
  /[^aeiou]ese$/i, // "chinese", "japanese"
  /deer$/i, // "deer", "reindeer"
  /fish$/i, // "fish", "blowfish", "angelfish"
  /measles$/i, /o[iu]s$/i, // "carnivorous"
  /pox$/i, // "chickpox", "smallpox"
  /sheep$/i].forEach(pluralize.addUncountableRule);
  return pluralize;
});
},{}],"../node_modules/normalize-strings/charmap.json":[function(require,module,exports) {
module.exports = {"105":"i","192":"A","193":"A","194":"A","195":"A","196":"A","197":"A","199":"C","200":"E","201":"E","202":"E","203":"E","204":"I","205":"I","206":"I","207":"I","209":"N","210":"O","211":"O","212":"O","213":"O","214":"O","216":"O","217":"U","218":"U","219":"U","220":"U","221":"Y","224":"a","225":"a","226":"a","227":"a","228":"a","229":"a","231":"c","232":"e","233":"e","234":"e","235":"e","236":"i","237":"i","238":"i","239":"i","241":"n","242":"o","243":"o","244":"o","245":"o","246":"o","248":"o","249":"u","250":"u","251":"u","252":"u","253":"y","255":"y","256":"A","257":"a","258":"A","259":"a","260":"A","261":"a","262":"C","263":"c","264":"C","265":"c","266":"C","267":"c","268":"C","269":"c","270":"D","271":"d","272":"D","273":"d","274":"E","275":"e","276":"E","277":"e","278":"E","279":"e","280":"E","281":"e","282":"E","283":"e","284":"G","285":"g","286":"G","287":"g","288":"G","289":"g","290":"G","291":"g","292":"H","293":"h","294":"H","295":"h","296":"I","297":"i","298":"I","299":"i","300":"I","301":"i","302":"I","303":"i","304":"I","308":"J","309":"j","310":"K","311":"k","313":"L","314":"l","315":"L","316":"l","317":"L","318":"l","319":"L","320":"l","321":"L","322":"l","323":"N","324":"n","325":"N","326":"n","327":"N","328":"n","332":"O","333":"o","334":"O","335":"o","336":"O","337":"o","338":"O","339":"o","340":"R","341":"r","342":"R","343":"r","344":"R","345":"r","346":"S","347":"s","348":"S","349":"s","350":"S","351":"s","352":"S","353":"s","354":"T","355":"t","356":"T","357":"t","358":"T","359":"t","360":"U","361":"u","362":"U","363":"u","364":"U","365":"u","366":"U","367":"u","368":"U","369":"u","370":"U","371":"u","372":"W","373":"w","374":"Y","375":"y","376":"Y","377":"Z","378":"z","379":"Z","380":"z","381":"Z","382":"z","384":"b","385":"B","386":"B","387":"b","390":"O","391":"C","392":"c","393":"D","394":"D","395":"D","396":"d","398":"E","400":"E","401":"F","402":"f","403":"G","407":"I","408":"K","409":"k","410":"l","412":"M","413":"N","414":"n","415":"O","416":"O","417":"o","420":"P","421":"p","422":"R","427":"t","428":"T","429":"t","430":"T","431":"U","432":"u","434":"V","435":"Y","436":"y","437":"Z","438":"z","461":"A","462":"a","463":"I","464":"i","465":"O","466":"o","467":"U","468":"u","477":"e","484":"G","485":"g","486":"G","487":"g","488":"K","489":"k","490":"O","491":"o","500":"G","501":"g","504":"N","505":"n","512":"A","513":"a","514":"A","515":"a","516":"E","517":"e","518":"E","519":"e","520":"I","521":"i","522":"I","523":"i","524":"O","525":"o","526":"O","527":"o","528":"R","529":"r","530":"R","531":"r","532":"U","533":"u","534":"U","535":"u","536":"S","537":"s","538":"T","539":"t","542":"H","543":"h","544":"N","545":"d","548":"Z","549":"z","550":"A","551":"a","552":"E","553":"e","558":"O","559":"o","562":"Y","563":"y","564":"l","565":"n","566":"t","567":"j","570":"A","571":"C","572":"c","573":"L","574":"T","575":"s","576":"z","579":"B","580":"U","581":"V","582":"E","583":"e","584":"J","585":"j","586":"Q","587":"q","588":"R","589":"r","590":"Y","591":"y","592":"a","593":"a","595":"b","596":"o","597":"c","598":"d","599":"d","600":"e","603":"e","604":"e","605":"e","606":"e","607":"j","608":"g","609":"g","610":"g","613":"h","614":"h","616":"i","618":"i","619":"l","620":"l","621":"l","623":"m","624":"m","625":"m","626":"n","627":"n","628":"n","629":"o","633":"r","634":"r","635":"r","636":"r","637":"r","638":"r","639":"r","640":"r","641":"r","642":"s","647":"t","648":"t","649":"u","651":"v","652":"v","653":"w","654":"y","655":"y","656":"z","657":"z","663":"c","665":"b","666":"e","667":"g","668":"h","669":"j","670":"k","671":"l","672":"q","686":"h","688":"h","690":"j","691":"r","692":"r","694":"r","695":"w","696":"y","737":"l","738":"s","739":"x","780":"v","829":"x","851":"x","867":"a","868":"e","869":"i","870":"o","871":"u","872":"c","873":"d","874":"h","875":"m","876":"r","877":"t","878":"v","879":"x","7424":"a","7427":"b","7428":"c","7429":"d","7431":"e","7432":"e","7433":"i","7434":"j","7435":"k","7436":"l","7437":"m","7438":"n","7439":"o","7440":"o","7441":"o","7442":"o","7443":"o","7446":"o","7447":"o","7448":"p","7449":"r","7450":"r","7451":"t","7452":"u","7453":"u","7454":"u","7455":"m","7456":"v","7457":"w","7458":"z","7522":"i","7523":"r","7524":"u","7525":"v","7680":"A","7681":"a","7682":"B","7683":"b","7684":"B","7685":"b","7686":"B","7687":"b","7690":"D","7691":"d","7692":"D","7693":"d","7694":"D","7695":"d","7696":"D","7697":"d","7698":"D","7699":"d","7704":"E","7705":"e","7706":"E","7707":"e","7710":"F","7711":"f","7712":"G","7713":"g","7714":"H","7715":"h","7716":"H","7717":"h","7718":"H","7719":"h","7720":"H","7721":"h","7722":"H","7723":"h","7724":"I","7725":"i","7728":"K","7729":"k","7730":"K","7731":"k","7732":"K","7733":"k","7734":"L","7735":"l","7738":"L","7739":"l","7740":"L","7741":"l","7742":"M","7743":"m","7744":"M","7745":"m","7746":"M","7747":"m","7748":"N","7749":"n","7750":"N","7751":"n","7752":"N","7753":"n","7754":"N","7755":"n","7764":"P","7765":"p","7766":"P","7767":"p","7768":"R","7769":"r","7770":"R","7771":"r","7774":"R","7775":"r","7776":"S","7777":"s","7778":"S","7779":"s","7786":"T","7787":"t","7788":"T","7789":"t","7790":"T","7791":"t","7792":"T","7793":"t","7794":"U","7795":"u","7796":"U","7797":"u","7798":"U","7799":"u","7804":"V","7805":"v","7806":"V","7807":"v","7808":"W","7809":"w","7810":"W","7811":"w","7812":"W","7813":"w","7814":"W","7815":"w","7816":"W","7817":"w","7818":"X","7819":"x","7820":"X","7821":"x","7822":"Y","7823":"y","7824":"Z","7825":"z","7826":"Z","7827":"z","7828":"Z","7829":"z","7835":"s","7840":"A","7841":"a","7842":"A","7843":"a","7864":"E","7865":"e","7866":"E","7867":"e","7868":"E","7869":"e","7880":"I","7881":"i","7882":"I","7883":"i","7884":"O","7885":"o","7886":"O","7887":"o","7908":"U","7909":"u","7910":"U","7911":"u","7922":"Y","7923":"y","7924":"Y","7925":"y","7926":"Y","7927":"y","7928":"Y","7929":"y","8305":"i","8341":"h","8342":"k","8343":"l","8344":"m","8345":"n","8346":"p","8347":"s","8348":"t","8450":"c","8458":"g","8459":"h","8460":"h","8461":"h","8464":"i","8465":"i","8466":"l","8467":"l","8468":"l","8469":"n","8472":"p","8473":"p","8474":"q","8475":"r","8476":"r","8477":"r","8484":"z","8488":"z","8492":"b","8493":"c","8495":"e","8496":"e","8497":"f","8498":"F","8499":"m","8500":"o","8506":"q","8513":"g","8514":"l","8515":"l","8516":"y","8517":"d","8518":"d","8519":"e","8520":"i","8521":"j","8526":"f","8579":"C","8580":"c","8765":"s","8766":"s","8959":"z","8999":"x","9746":"x","9776":"i","9866":"i","10005":"x","10006":"x","10007":"x","10008":"x","10625":"z","10626":"z","11362":"L","11364":"R","11365":"a","11366":"t","11373":"A","11374":"M","11375":"A","11390":"S","11391":"Z","19904":"i","42893":"H","42922":"H","42923":"E","42924":"G","42925":"L","42928":"K","42929":"T","62937":"x"};
},{}],"../node_modules/normalize-strings/index.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(global, global.document);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(global, global.document);
  } else {
      global.normalize = factory(global, global.document);
  }
} (typeof window !== 'undefined' ? window : this, function (window, document) {
  var charmap = require('./charmap');
  var regex = null;
  var current_charmap;
  var old_charmap;

  function normalize(str, custom_charmap) {
    old_charmap = current_charmap;
    current_charmap = custom_charmap || charmap;

    regex = (regex && old_charmap === current_charmap) ? regex : buildRegExp(current_charmap);

    return str.replace(regex, function(charToReplace) {
      return current_charmap[charToReplace.charCodeAt(0)] || charToReplace;
    });
  }

  function buildRegExp(charmap){
     return new RegExp('[' + Object.keys(charmap).map(function(code) {return String.fromCharCode(code); }).join(' ') + ']', 'g');
   }

  return normalize;
}));

},{"./charmap":"../node_modules/normalize-strings/charmap.json"}],"../node_modules/syllable/problematic.json":[function(require,module,exports) {
module.exports = {
  "abalone": 4,
  "abare": 3,
  "abbruzzese": 4,
  "abed": 2,
  "aborigine": 5,
  "abruzzese": 4,
  "acreage": 3,
  "adame": 3,
  "adieu": 2,
  "adobe": 3,
  "anemone": 4,
  "anyone": 3,
  "apache": 3,
  "aphrodite": 4,
  "apostrophe": 4,
  "ariadne": 4,
  "cafe": 2,
  "calliope": 4,
  "catastrophe": 4,
  "chile": 2,
  "chloe": 2,
  "circe": 2,
  "coyote": 3,
  "daphne": 2,
  "epitome": 4,
  "eurydice": 4,
  "euterpe": 3,
  "every": 2,
  "everywhere": 3,
  "forever": 3,
  "gethsemane": 4,
  "guacamole": 4,
  "hermione": 4,
  "hyperbole": 4,
  "jesse": 2,
  "jukebox": 2,
  "karate": 3,
  "machete": 3,
  "maybe": 2,
  "naive": 2,
  "newlywed": 3,
  "penelope": 4,
  "people": 2,
  "persephone": 4,
  "phoebe": 2,
  "pulse": 1,
  "queue": 1,
  "recipe": 3,
  "riverbed": 3,
  "sesame": 3,
  "shoreline": 2,
  "simile": 3,
  "snuffleupagus": 5,
  "sometimes": 2,
  "syncope": 3,
  "tamale": 3,
  "waterbed": 3,
  "wednesday": 2,
  "yosemite": 4,
  "zoe": 2
}
;
},{}],"../node_modules/syllable/index.js":[function(require,module,exports) {
'use strict'

var pluralize = require('pluralize')
var normalize = require('normalize-strings')
var problematic = require('./problematic.json')

module.exports = syllables

var own = {}.hasOwnProperty

// Two expressions of occurrences which normally would be counted as two
// syllables, but should be counted as one.
var EXPRESSION_MONOSYLLABIC_ONE = new RegExp(
  [
    'awe($|d|so)',
    'cia(?:l|$)',
    'tia',
    'cius',
    'cious',
    '[^aeiou]giu',
    '[aeiouy][^aeiouy]ion',
    'iou',
    'sia$',
    'eous$',
    '[oa]gue$',
    '.[^aeiuoycgltdb]{2,}ed$',
    '.ely$',
    '^jua',
    'uai',
    'eau',
    '^busi$',
    '(?:[aeiouy](?:' +
      [
        '[bcfgklmnprsvwxyz]',
        'ch',
        'dg',
        'g[hn]',
        'lch',
        'l[lv]',
        'mm',
        'nch',
        'n[cgn]',
        'r[bcnsv]',
        'squ',
        's[chkls]',
        'th'
      ].join('|') +
      ')ed$)',
    '(?:[aeiouy](?:' +
      [
        '[bdfklmnprstvy]',
        'ch',
        'g[hn]',
        'lch',
        'l[lv]',
        'mm',
        'nch',
        'nn',
        'r[nsv]',
        'squ',
        's[cklst]',
        'th'
      ].join('|') +
      ')es$)'
  ].join('|'),
  'g'
)

var EXPRESSION_MONOSYLLABIC_TWO = new RegExp(
  '[aeiouy](?:' +
    [
      '[bcdfgklmnprstvyz]',
      'ch',
      'dg',
      'g[hn]',
      'l[lv]',
      'mm',
      'n[cgns]',
      'r[cnsv]',
      'squ',
      's[cklst]',
      'th'
    ].join('|') +
    ')e$',
  'g'
)

// Four expression of occurrences which normally would be counted as one
// syllable, but should be counted as two.
var EXPRESSION_DOUBLE_SYLLABIC_ONE = new RegExp(
  '(?:' +
    [
      '([^aeiouy])\\1l',
      '[^aeiouy]ie(?:r|s?t)',
      '[aeiouym]bl',
      'eo',
      'ism',
      'asm',
      'thm',
      'dnt',
      'snt',
      'uity',
      'dea',
      'gean',
      'oa',
      'ua',
      'react?',
      'orbed', // Cancel `'.[^aeiuoycgltdb]{2,}ed$',`
      'shred', // Cancel `'.[^aeiuoycgltdb]{2,}ed$',`
      'eings?',
      '[aeiouy]sh?e[rs]'
    ].join('|') +
    ')$',
  'g'
)

var EXPRESSION_DOUBLE_SYLLABIC_TWO = new RegExp(
  [
    'creat(?!u)',
    '[^gq]ua[^auieo]',
    '[aeiou]{3}',
    '^(?:ia|mc|coa[dglx].)',
    '^re(app|es|im|us)',
    '(th|d)eist'
  ].join('|'),
  'g'
)

var EXPRESSION_DOUBLE_SYLLABIC_THREE = new RegExp(
  [
    '[^aeiou]y[ae]',
    '[^l]lien',
    'riet',
    'dien',
    'iu',
    'io',
    'ii',
    'uen',
    '[aeilotu]real',
    'real[aeilotu]',
    'iell',
    'eo[^aeiou]',
    '[aeiou]y[aeiou]'
  ].join('|'),
  'g'
)

var EXPRESSION_DOUBLE_SYLLABIC_FOUR = /[^s]ia/

// Expression to match single syllable pre- and suffixes.
var EXPRESSION_SINGLE = new RegExp(
  [
    '^(?:' +
      [
        'un',
        'fore',
        'ware',
        'none?',
        'out',
        'post',
        'sub',
        'pre',
        'pro',
        'dis',
        'side',
        'some'
      ].join('|') +
      ')',
    '(?:' +
      [
        'ly',
        'less',
        'some',
        'ful',
        'ers?',
        'ness',
        'cians?',
        'ments?',
        'ettes?',
        'villes?',
        'ships?',
        'sides?',
        'ports?',
        'shires?',
        '[gnst]ion(?:ed|s)?'
      ].join('|') +
      ')$'
  ].join('|'),
  'g'
)

// Expression to match double syllable pre- and suffixes.
var EXPRESSION_DOUBLE = new RegExp(
  [
    '^' +
      '(?:' +
      [
        'above',
        'anti',
        'ante',
        'counter',
        'hyper',
        'afore',
        'agri',
        'infra',
        'intra',
        'inter',
        'over',
        'semi',
        'ultra',
        'under',
        'extra',
        'dia',
        'micro',
        'mega',
        'kilo',
        'pico',
        'nano',
        'macro',
        'somer'
      ].join('|') +
      ')',
    '(?:fully|berry|woman|women|edly|union|((?:[bcdfghjklmnpqrstvwxz])|[aeiou])ye?ing)$'
  ].join('|'),
  'g'
)

// Expression to match triple syllable suffixes.
var EXPRESSION_TRIPLE = /(creations?|ology|ologist|onomy|onomist)$/g

// Expression to split on word boundaries.
var SPLIT = /\b/g

// Expression to merge elision.
var APOSTROPHE = /['’]/g

// Expression to remove non-alphabetic characters from a given value.
var EXPRESSION_NONALPHABETIC = /[^a-z]/g

// Wrapper to support multiple word-parts (GH-11).
function syllables(value) {
  var values = normalize(String(value))
    .toLowerCase()
    .replace(APOSTROPHE, '')
    .split(SPLIT)
  var length = values.length
  var index = -1
  var total = 0

  while (++index < length) {
    total += syllable(values[index].replace(EXPRESSION_NONALPHABETIC, ''))
  }

  return total
}

// Get syllables in a given value.
function syllable(value) {
  var count = 0
  var index
  var length
  var singular
  var parts
  var addOne
  var subtractOne

  if (value.length === 0) {
    return count
  }

  // Return early when possible.
  if (value.length < 3) {
    return 1
  }

  // If `value` is a hard to count, it might be in `problematic`.
  if (own.call(problematic, value)) {
    return problematic[value]
  }

  // Additionally, the singular word might be in `problematic`.
  singular = pluralize(value, 1)

  if (own.call(problematic, singular)) {
    return problematic[singular]
  }

  addOne = returnFactory(1)
  subtractOne = returnFactory(-1)

  // Count some prefixes and suffixes, and remove their matched ranges.
  value = value
    .replace(EXPRESSION_TRIPLE, countFactory(3))
    .replace(EXPRESSION_DOUBLE, countFactory(2))
    .replace(EXPRESSION_SINGLE, countFactory(1))

  // Count multiple consonants.
  parts = value.split(/[^aeiouy]+/)
  index = -1
  length = parts.length

  while (++index < length) {
    if (parts[index] !== '') {
      count++
    }
  }

  // Subtract one for occurrences which should be counted as one (but are
  // counted as two).
  value
    .replace(EXPRESSION_MONOSYLLABIC_ONE, subtractOne)
    .replace(EXPRESSION_MONOSYLLABIC_TWO, subtractOne)

  // Add one for occurrences which should be counted as two (but are counted as
  // one).
  value
    .replace(EXPRESSION_DOUBLE_SYLLABIC_ONE, addOne)
    .replace(EXPRESSION_DOUBLE_SYLLABIC_TWO, addOne)
    .replace(EXPRESSION_DOUBLE_SYLLABIC_THREE, addOne)
    .replace(EXPRESSION_DOUBLE_SYLLABIC_FOUR, addOne)

  // Make sure at least on is returned.
  return count || 1

  // Define scoped counters, to be used in `String#replace()` calls.
  // The scoped counter removes the matched value from the input.
  function countFactory(addition) {
    return counter
    function counter() {
      count += addition
      return ''
    }
  }

  // Define scoped counters, to be used in `String#replace()` calls.
  // The scoped counter does not remove the matched value from the input.
  function returnFactory(addition) {
    return returner
    function returner($0) {
      count += addition
      return $0
    }
  }
}

},{"pluralize":"../node_modules/pluralize/pluralize.js","normalize-strings":"../node_modules/normalize-strings/index.js","./problematic.json":"../node_modules/syllable/problematic.json"}],"generator/markov.js":[function(require,module,exports) {
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
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js"}],"generator/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sample = exports.randomInt = void 0;

var randomInt = function randomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.randomInt = randomInt;

var sample = function sample() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var min = 0;
  var max = array.length - 1;
  var index = randomInt(min, max);
  return {
    value: array[index],
    index: index
  };
};

exports.sample = sample;
var _default = {
  sample: sample
};
exports.default = _default;
},{}],"api/mockData.js":[function(require,module,exports) {
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
exports.default = exports.fetchData = void 0;

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
  }).catch(function (e) {
    return _mockData.default;
  });
};

exports.fetchData = fetchData;
var _default = fetchData;
exports.default = _default;
},{"./mockData":"api/mockData.js"}],"generator/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.generateLine = exports.pickWord = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _syllable = _interopRequireDefault(require("syllable"));

var _markov = _interopRequireDefault(require("./markov"));

var _utils = require("./utils");

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINECOUNT = [3, 5, 3]; // selects a single word with a specific syllable count
// used in generateLine to add additional syllables, if necessary

var pickWord = function pickWord() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var syllableCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var words = Object.keys(state);
  var word = words[0];

  while ((0, _syllable.default)(word) !== syllableCount) {
    var _sample = (0, _utils.sample)(words),
        index = _sample.index,
        value = _sample.value;

    words = [].concat((0, _toConsumableArray2.default)(words.slice(0, index)), (0, _toConsumableArray2.default)(words.slice(index + 1)));
    word = value;
  }

  return word;
}; // creates a haiku line from the passed in markov chain


exports.pickWord = pickWord;

var generateLine = function generateLine() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var syllableCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var stateValues = Object.values(state);
  var count = 0;
  var phrase = "";

  while (count < syllableCount) {
    var lineOptions = (0, _utils.sample)(stateValues);

    var _sample2 = (0, _utils.sample)(lineOptions.value),
        value = _sample2.value;

    var addedSyllables = (0, _syllable.default)(value);

    if (count + addedSyllables <= syllableCount) {
      count += addedSyllables;
      phrase = "".concat(value, " ").concat(phrase);
    }

    if (syllableCount - count === 1) {
      var word = pickWord(state);
      count += 1;
      phrase = "".concat(phrase).concat(word);
    }
  }

  return phrase.trim();
}; // returns a haiku form an api call


exports.generateLine = generateLine;

var generateHaiku = function generateHaiku() {
  return (0, _api.default)(50).then(function (data) {
    var state = (0, _markov.default)(data, 1);
    var poem = LINECOUNT.reduce(function (acc, count) {
      return [].concat((0, _toConsumableArray2.default)(acc), [generateLine(state, count)]);
    }, []);
    return poem;
  });
};

var _default = generateHaiku;
exports.default = _default;
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js","syllable":"../node_modules/syllable/index.js","./markov":"generator/markov.js","./utils":"generator/utils.js","../api":"api/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _generator = _interopRequireWildcard(require("./generator"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var querySelectors = [".line-1", ".line-2", ".line-3"];
(0, _generator.default)().then(function (hipsku) {
  querySelectors.forEach(function (selector, index) {
    return document.querySelector(selector).innerHTML = hipsku[index];
  });
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53371" + '/');

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