parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"XfJI":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function a(a){if(Array.isArray(a))return r(a)}module.exports=a;
},{"./arrayLikeToArray":"NVR6"}],"OMTj":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}module.exports=e;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"wFNi":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"Fhqp":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"XfJI","./iterableToArray":"OMTj","./unsupportedIterableToArray":"UyFj","./nonIterableSpread":"wFNi"}],"Nzy8":[function(require,module,exports) {
var define;
var e;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(i,o){"function"==typeof require&&"object"===("undefined"==typeof exports?"undefined":a(exports))&&"object"===("undefined"==typeof module?"undefined":a(module))?module.exports=o():"function"==typeof e&&e.amd?e(function(){return o()}):i.pluralize=o()}(this,function(){var e=[],a=[],i={},o={},r={};function s(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function t(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(a[0],function(i,o){var r,s,n=(r=a[1],s=arguments,r.replace(/\$(\d{1,2})/g,function(e,a){return s[a]||""}));return t(""===i?e[o-1]:i,n)})}function u(e,a,o){if(!e.length||i.hasOwnProperty(e))return a;for(var r=o.length;r--;){var s=o[r];if(s[0].test(a))return n(a,s)}return a}function l(e,a,i){return function(o){var r=o.toLowerCase();return a.hasOwnProperty(r)?t(o,r):e.hasOwnProperty(r)?t(o,e[r]):u(r,o,i)}}function c(e,a,i,o){return function(o){var r=o.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&u(r,r,i)===r}}function m(e,a,i){return(i?a+" ":"")+(1===a?m.singular(e):m.plural(e))}return m.plural=l(r,o,e),m.isPlural=c(r,o,e),m.singular=l(o,r,a),m.isSingular=c(o,r,a),m.addPluralRule=function(a,i){e.push([s(a),i])},m.addSingularRule=function(e,i){a.push([s(e),i])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):i[e.toLowerCase()]=!0},m.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,o[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(e){return m.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return m.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return m.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m});
},{}],"Hpoh":[function(require,module,exports) {
module.exports={105:"i",192:"A",193:"A",194:"A",195:"A",196:"A",197:"A",199:"C",200:"E",201:"E",202:"E",203:"E",204:"I",205:"I",206:"I",207:"I",209:"N",210:"O",211:"O",212:"O",213:"O",214:"O",216:"O",217:"U",218:"U",219:"U",220:"U",221:"Y",224:"a",225:"a",226:"a",227:"a",228:"a",229:"a",231:"c",232:"e",233:"e",234:"e",235:"e",236:"i",237:"i",238:"i",239:"i",241:"n",242:"o",243:"o",244:"o",245:"o",246:"o",248:"o",249:"u",250:"u",251:"u",252:"u",253:"y",255:"y",256:"A",257:"a",258:"A",259:"a",260:"A",261:"a",262:"C",263:"c",264:"C",265:"c",266:"C",267:"c",268:"C",269:"c",270:"D",271:"d",272:"D",273:"d",274:"E",275:"e",276:"E",277:"e",278:"E",279:"e",280:"E",281:"e",282:"E",283:"e",284:"G",285:"g",286:"G",287:"g",288:"G",289:"g",290:"G",291:"g",292:"H",293:"h",294:"H",295:"h",296:"I",297:"i",298:"I",299:"i",300:"I",301:"i",302:"I",303:"i",304:"I",308:"J",309:"j",310:"K",311:"k",313:"L",314:"l",315:"L",316:"l",317:"L",318:"l",319:"L",320:"l",321:"L",322:"l",323:"N",324:"n",325:"N",326:"n",327:"N",328:"n",332:"O",333:"o",334:"O",335:"o",336:"O",337:"o",338:"O",339:"o",340:"R",341:"r",342:"R",343:"r",344:"R",345:"r",346:"S",347:"s",348:"S",349:"s",350:"S",351:"s",352:"S",353:"s",354:"T",355:"t",356:"T",357:"t",358:"T",359:"t",360:"U",361:"u",362:"U",363:"u",364:"U",365:"u",366:"U",367:"u",368:"U",369:"u",370:"U",371:"u",372:"W",373:"w",374:"Y",375:"y",376:"Y",377:"Z",378:"z",379:"Z",380:"z",381:"Z",382:"z",384:"b",385:"B",386:"B",387:"b",390:"O",391:"C",392:"c",393:"D",394:"D",395:"D",396:"d",398:"E",400:"E",401:"F",402:"f",403:"G",407:"I",408:"K",409:"k",410:"l",412:"M",413:"N",414:"n",415:"O",416:"O",417:"o",420:"P",421:"p",422:"R",427:"t",428:"T",429:"t",430:"T",431:"U",432:"u",434:"V",435:"Y",436:"y",437:"Z",438:"z",461:"A",462:"a",463:"I",464:"i",465:"O",466:"o",467:"U",468:"u",477:"e",484:"G",485:"g",486:"G",487:"g",488:"K",489:"k",490:"O",491:"o",500:"G",501:"g",504:"N",505:"n",512:"A",513:"a",514:"A",515:"a",516:"E",517:"e",518:"E",519:"e",520:"I",521:"i",522:"I",523:"i",524:"O",525:"o",526:"O",527:"o",528:"R",529:"r",530:"R",531:"r",532:"U",533:"u",534:"U",535:"u",536:"S",537:"s",538:"T",539:"t",542:"H",543:"h",544:"N",545:"d",548:"Z",549:"z",550:"A",551:"a",552:"E",553:"e",558:"O",559:"o",562:"Y",563:"y",564:"l",565:"n",566:"t",567:"j",570:"A",571:"C",572:"c",573:"L",574:"T",575:"s",576:"z",579:"B",580:"U",581:"V",582:"E",583:"e",584:"J",585:"j",586:"Q",587:"q",588:"R",589:"r",590:"Y",591:"y",592:"a",593:"a",595:"b",596:"o",597:"c",598:"d",599:"d",600:"e",603:"e",604:"e",605:"e",606:"e",607:"j",608:"g",609:"g",610:"g",613:"h",614:"h",616:"i",618:"i",619:"l",620:"l",621:"l",623:"m",624:"m",625:"m",626:"n",627:"n",628:"n",629:"o",633:"r",634:"r",635:"r",636:"r",637:"r",638:"r",639:"r",640:"r",641:"r",642:"s",647:"t",648:"t",649:"u",651:"v",652:"v",653:"w",654:"y",655:"y",656:"z",657:"z",663:"c",665:"b",666:"e",667:"g",668:"h",669:"j",670:"k",671:"l",672:"q",686:"h",688:"h",690:"j",691:"r",692:"r",694:"r",695:"w",696:"y",737:"l",738:"s",739:"x",780:"v",829:"x",851:"x",867:"a",868:"e",869:"i",870:"o",871:"u",872:"c",873:"d",874:"h",875:"m",876:"r",877:"t",878:"v",879:"x",7424:"a",7427:"b",7428:"c",7429:"d",7431:"e",7432:"e",7433:"i",7434:"j",7435:"k",7436:"l",7437:"m",7438:"n",7439:"o",7440:"o",7441:"o",7442:"o",7443:"o",7446:"o",7447:"o",7448:"p",7449:"r",7450:"r",7451:"t",7452:"u",7453:"u",7454:"u",7455:"m",7456:"v",7457:"w",7458:"z",7522:"i",7523:"r",7524:"u",7525:"v",7680:"A",7681:"a",7682:"B",7683:"b",7684:"B",7685:"b",7686:"B",7687:"b",7690:"D",7691:"d",7692:"D",7693:"d",7694:"D",7695:"d",7696:"D",7697:"d",7698:"D",7699:"d",7704:"E",7705:"e",7706:"E",7707:"e",7710:"F",7711:"f",7712:"G",7713:"g",7714:"H",7715:"h",7716:"H",7717:"h",7718:"H",7719:"h",7720:"H",7721:"h",7722:"H",7723:"h",7724:"I",7725:"i",7728:"K",7729:"k",7730:"K",7731:"k",7732:"K",7733:"k",7734:"L",7735:"l",7738:"L",7739:"l",7740:"L",7741:"l",7742:"M",7743:"m",7744:"M",7745:"m",7746:"M",7747:"m",7748:"N",7749:"n",7750:"N",7751:"n",7752:"N",7753:"n",7754:"N",7755:"n",7764:"P",7765:"p",7766:"P",7767:"p",7768:"R",7769:"r",7770:"R",7771:"r",7774:"R",7775:"r",7776:"S",7777:"s",7778:"S",7779:"s",7786:"T",7787:"t",7788:"T",7789:"t",7790:"T",7791:"t",7792:"T",7793:"t",7794:"U",7795:"u",7796:"U",7797:"u",7798:"U",7799:"u",7804:"V",7805:"v",7806:"V",7807:"v",7808:"W",7809:"w",7810:"W",7811:"w",7812:"W",7813:"w",7814:"W",7815:"w",7816:"W",7817:"w",7818:"X",7819:"x",7820:"X",7821:"x",7822:"Y",7823:"y",7824:"Z",7825:"z",7826:"Z",7827:"z",7828:"Z",7829:"z",7835:"s",7840:"A",7841:"a",7842:"A",7843:"a",7864:"E",7865:"e",7866:"E",7867:"e",7868:"E",7869:"e",7880:"I",7881:"i",7882:"I",7883:"i",7884:"O",7885:"o",7886:"O",7887:"o",7908:"U",7909:"u",7910:"U",7911:"u",7922:"Y",7923:"y",7924:"Y",7925:"y",7926:"Y",7927:"y",7928:"Y",7929:"y",8305:"i",8341:"h",8342:"k",8343:"l",8344:"m",8345:"n",8346:"p",8347:"s",8348:"t",8450:"c",8458:"g",8459:"h",8460:"h",8461:"h",8464:"i",8465:"i",8466:"l",8467:"l",8468:"l",8469:"n",8472:"p",8473:"p",8474:"q",8475:"r",8476:"r",8477:"r",8484:"z",8488:"z",8492:"b",8493:"c",8495:"e",8496:"e",8497:"f",8498:"F",8499:"m",8500:"o",8506:"q",8513:"g",8514:"l",8515:"l",8516:"y",8517:"d",8518:"d",8519:"e",8520:"i",8521:"j",8526:"f",8579:"C",8580:"c",8765:"s",8766:"s",8959:"z",8999:"x",9746:"x",9776:"i",9866:"i",10005:"x",10006:"x",10007:"x",10008:"x",10625:"z",10626:"z",11362:"L",11364:"R",11365:"a",11366:"t",11373:"A",11374:"M",11375:"A",11390:"S",11391:"Z",19904:"i",42893:"H",42922:"H",42923:"E",42924:"G",42925:"L",42928:"K",42929:"T",62937:"x"};
},{}],"Dvr9":[function(require,module,exports) {
var define;
var global = arguments[3];
var n,e=arguments[3];!function(e,t){"function"==typeof n&&n.amd?n(function(){return t(e,e.document)}):"undefined"!=typeof module&&module.exports?module.exports=t(e,e.document):e.normalize=t(e,e.document)}("undefined"!=typeof window?window:this,function(n,e){var t,o,r=require("./charmap"),u=null;return function(n,e){return o=t,t=e||r,u=u&&o===t?u:function(n){return new RegExp("["+Object.keys(n).map(function(n){return String.fromCharCode(n)}).join(" ")+"]","g")}(t),n.replace(u,function(n){return t[n.charCodeAt(0)]||n})}});
},{"./charmap":"Hpoh"}],"HoGx":[function(require,module,exports) {
module.exports={abalone:4,abare:3,abbruzzese:4,abed:2,aborigine:5,abruzzese:4,acreage:3,adame:3,adieu:2,adobe:3,anemone:4,anyone:3,apache:3,aphrodite:4,apostrophe:4,ariadne:4,cafe:2,calliope:4,catastrophe:4,chile:2,chloe:2,circe:2,coyote:3,daphne:2,epitome:4,eurydice:4,euterpe:3,every:2,everywhere:3,forever:3,gethsemane:4,guacamole:4,hermione:4,hyperbole:4,jesse:2,jukebox:2,karate:3,machete:3,maybe:2,naive:2,newlywed:3,penelope:4,people:2,persephone:4,phoebe:2,pulse:1,queue:1,recipe:3,riverbed:3,sesame:3,shoreline:2,simile:3,snuffleupagus:5,sometimes:2,syncope:3,tamale:3,waterbed:3,wednesday:2,yosemite:4,zoe:2};
},{}],"aXHh":[function(require,module,exports) {
"use strict";var e=require("pluralize"),i=require("normalize-strings"),n=require("./problematic.json");module.exports=d;var r={}.hasOwnProperty,o=new RegExp(["awe($|d|so)","cia(?:l|$)","tia","cius","cious","[^aeiou]giu","[aeiouy][^aeiouy]ion","iou","sia$","eous$","[oa]gue$",".[^aeiuoycgltdb]{2,}ed$",".ely$","^jua","uai","eau","^busi$","(?:[aeiouy](?:"+["[bcfgklmnprsvwxyz]","ch","dg","g[hn]","lch","l[lv]","mm","nch","n[cgn]","r[bcnsv]","squ","s[chkls]","th"].join("|")+")ed$)","(?:[aeiouy](?:"+["[bdfklmnprstvy]","ch","g[hn]","lch","l[lv]","mm","nch","nn","r[nsv]","squ","s[cklst]","th"].join("|")+")es$)"].join("|"),"g"),a=new RegExp("[aeiouy](?:"+["[bcdfgklmnprstvyz]","ch","dg","g[hn]","l[lv]","mm","n[cgns]","r[cnsv]","squ","s[cklst]","th"].join("|")+")e$","g"),s=new RegExp("(?:"+["([^aeiouy])\\1l","[^aeiouy]ie(?:r|s?t)","[aeiouym]bl","eo","ism","asm","thm","dnt","snt","uity","dea","gean","oa","ua","react?","orbed","shred","eings?","[aeiouy]sh?e[rs]"].join("|")+")$","g"),u=new RegExp(["creat(?!u)","[^gq]ua[^auieo]","[aeiou]{3}","^(?:ia|mc|coa[dglx].)","^re(app|es|im|us)","(th|d)eist"].join("|"),"g"),t=new RegExp(["[^aeiou]y[ae]","[^l]lien","riet","dien","iu","io","ii","uen","[aeilotu]real","real[aeilotu]","iell","eo[^aeiou]","[aeiou]y[aeiou]"].join("|"),"g"),l=/[^s]ia/,c=new RegExp(["^(?:"+["un","fore","ware","none?","out","post","sub","pre","pro","dis","side","some"].join("|")+")","(?:"+["ly","less","some","ful","ers?","ness","cians?","ments?","ettes?","villes?","ships?","sides?","ports?","shires?","[gnst]ion(?:ed|s)?"].join("|")+")$"].join("|"),"g"),g=new RegExp(["^(?:"+["above","anti","ante","counter","hyper","afore","agri","infra","intra","inter","over","semi","ultra","under","extra","dia","micro","mega","kilo","pico","nano","macro","somer"].join("|")+")","(?:fully|berry|woman|women|edly|union|((?:[bcdfghjklmnpqrstvwxz])|[aeiou])ye?ing)$"].join("|"),"g"),p=/(creations?|ology|ologist|onomy|onomist)$/g,m=/\b/g,h=/['’]/g,y=/[^a-z]/g;function d(e){for(var n=i(String(e)).toLowerCase().replace(h,"").split(m),r=n.length,o=-1,a=0;++o<r;)a+=f(n[o].replace(y,""));return a}function f(i){var m,h,y,d,f,v,j=0;if(0===i.length)return j;if(i.length<3)return 1;if(r.call(n,i))return n[i];if(y=e(i,1),r.call(n,y))return n[y];for(f=$(1),v=$(-1),m=-1,h=(d=(i=i.replace(p,w(3)).replace(g,w(2)).replace(c,w(1))).split(/[^aeiouy]+/)).length;++m<h;)""!==d[m]&&j++;return i.replace(o,v).replace(a,v),i.replace(s,f).replace(u,f).replace(t,f).replace(l,f),j||1;function w(e){return function(){return j+=e,""}}function $(e){return function(i){return j+=e,i}}}
},{"pluralize":"Nzy8","normalize-strings":"Dvr9","./problematic.json":"HoGx"}],"HJf6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@babel/runtime/helpers/toConsumableArray"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o={};return t.split(" ").forEach(function(t,u,n){o[t]||(o[t]=[]);var l=n.slice(u,u+r+1).join(" ");o[t].includes(l)||(o[t]=[].concat((0,e.default)(o[t]),[l]))}),o},o=r;exports.default=o;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp"}],"rbNY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.sample=exports.randomInt=void 0;var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e};exports.randomInt=e;var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.length-1,o=e(0,r);return{value:t[o],index:o}};exports.sample=t;var r={sample:t};exports.default=r;
},{}],"zXyK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e="Try-hard beard retro everyday carry butcher, sriracha fixie photo booth ramps af messenger bag tacos tumblr next level. Kickstarter kogi man braid intelligentsia ugh forage. Before they sold out truffaut VHS wayfarers man braid affogato, synth iPhone kogi normcore pitchfork unicorn lumbersexual four loko. Sartorial shaman tumeric, messenger bag lumbersexual keytar kinfolk wolf squid butcher poutine ennui chillwave. Poutine tofu fashion axe ennui palo santo pitchfork celiac health goth viral selfies DIY gochujang gastropub. Actually dreamcatcher stumptown bushwick XOXO thundercats woke ethical slow-carb. Bitters art party pitchfork pabst keffiyeh tote bag ethical shabby chic mixtape fingerstache 8-bit 3 wolf moon church-key intelligentsia cloud bread. Glossier taiyaki schlitz umami shoreditch bicycle rights franzen literally gastropub prism kitsch succulents pabst drinking vinegar. Bicycle rights flannel pok pok polaroid, squid woke truffaut deep v edison bulb swag cornhole taxidermy. Adaptogen meggings yuccie keffiyeh dreamcatcher hexagon. Wayfarers fam seitan street art hoodie paleo meggings air plant la croix tofu blue bottle narwhal mixtape skateboard fashion axe. Coloring book vaporware kombucha lo-fi direct trade lumbersexual fam tote bag readymade thundercats PBR&B helvetica narwhal offal hell of. Waistcoat kombucha selfies, sartorial four dollar toast swag pinterest kitsch normcore neutra messenger bag blue bottle PBR&B yuccie hell of. Sriracha succulents irony typewriter fixie YOLO normcore, pabst wayfarers butcher DIY subway tile poutine jianbing. Master cleanse raw denim wolf brunch forage. Man bun next level fam squid pinterest cliche irony seitan blue bottle shabby chic pop-up iPhone. Four dollar toast lumbersexual photo booth seitan ethical mlkshk. Actually gentrify af, polaroid fashion axe brooklyn ramps copper mug organic raw denim leggings kickstarter hell of whatever. Street art messenger bag cred retro letterpress gentrify, meggings migas try-hard before they sold out poke health goth narwhal. Keffiyeh selfies put a bird on it forage mixtape normcore squid whatever. Drinking vinegar celiac gochujang letterpress tofu franzen put a bird on it. Pitchfork microdosing you probably haven't heard of them, lo-fi food truck tote bag lomo fixie art party adaptogen meh tumblr blog mustache. Master cleanse asymmetrical tumblr gluten-free keytar iceland live-edge waistcoat lo-fi edison bulb. Air plant slow-carb celiac truffaut gentrify, meh cornhole mumblecore iceland chartreuse man braid tumblr portland. Flannel lyft viral, aesthetic celiac VHS edison bulb cornhole kickstarter man braid subway tile hammock mlkshk blue bottle. Synth quinoa kitsch selfies, four dollar toast man braid man bun truffaut crucifix VHS coloring book shabby chic gastropub bushwick kickstarter. Try-hard XOXO +1 subway tile, adaptogen you probably haven't heard of them lomo ennui fixie vape tattooed. Church-key ennui schlitz post-ironic vegan mlkshk hella before they sold out artisan fanny pack. Edison bulb readymade chartreuse retro synth skateboard fanny pack whatever tumblr enamel pin asymmetrical selvage. Wayfarers waistcoat slow-carb affogato four loko cloud bread disrupt taxidermy iceland trust fund dreamcatcher tumblr shoreditch. Woke williamsburg sriracha vaporware copper mug. Master cleanse 8-bit tote bag YOLO cardigan typewriter hashtag four loko chartreuse bitters vegan schlitz squid dreamcatcher. Church-key chicharrones helvetica, marfa flannel man braid green juice iceland vegan meh humblebrag prism seitan microdosing. Blue bottle neutra biodiesel umami, 90's actually edison bulb cray tote bag crucifix. Church-key 3 wolf moon aesthetic, yr art party microdosing yuccie godard +1 celiac organic slow-carb. Beard occupy irony poutine wolf. Shoreditch trust fund ugh woke plaid bicycle rights gastropub prism readymade gentrify vaporware man bun. Vinyl ennui truffaut raclette banjo. Letterpress affogato bushwick photo booth brunch vinyl. Butcher stumptown +1 flexitarian banjo banh mi hammock organic put a bird on it everyday carry. Readymade keytar venmo sustainable lomo, tumeric direct trade austin lyft whatever PBR&B tofu affogato poke etsy. Pickled put a bird on it slow-carb direct trade sustainable keffiyeh health goth listicle salvia sartorial wolf subway tile unicorn. Literally echo park butcher, selfies brooklyn raw denim kombucha af vexillologist mustache drinking vinegar palo santo. Activated charcoal gastropub sartorial disrupt readymade tote bag chartreuse salvia tbh godard. Celiac tbh air plant food truck, freegan pinterest cliche 3 wolf moon keytar. Lumbersexual man bun art party, helvetica etsy paleo unicorn. Raclette hoodie slow-carb four loko etsy, venmo tacos. Meh before they sold out you probably haven't heard of them tbh, occupy pug shabby chic banh mi. Selfies street art salvia, kogi paleo literally fingerstache typewriter listicle activated charcoal pabst copper mug photo booth. Squid wayfarers disrupt shoreditch, chillwave bespoke intelligentsia mustache vinyl pok pok hexagon chicharrones try-hard before they sold out.",a=e;exports.default=a;
},{}],"VO5s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.fetchData=void 0;var t=e(require("./mockData"));function e(t){return t&&t.__esModule?t:{default:t}}var r="https://hipsum.co/api/?type=hipster-centric&sentences=",n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return fetch("".concat(r).concat(e)).then(function(t){return t.json()}).then(function(t){return Array.isArray(t)?t[0]:t}).catch(function(e){return t.default})};exports.fetchData=n;var a=n;exports.default=a;
},{"./mockData":"zXyK"}],"LgJk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.generateLine=exports.pickWord=void 0;var e=n(require("@babel/runtime/helpers/toConsumableArray")),r=n(require("syllable")),t=n(require("./markov")),a=require("./utils"),u=n(require("../api"));function n(e){return e&&e.__esModule?e:{default:e}}var o=[3,5,3],l=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object.keys(t),o=n[0];(0,r.default)(o)!==u;){var l=(0,a.sample)(n),i=l.index,c=l.value;n=[].concat((0,e.default)(n.slice(0,i)),(0,e.default)(n.slice(i+1))),o=c}return o};exports.pickWord=l;var i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,u=Object.values(e),n=0,o="";n<t;){var i=(0,a.sample)(u),c=(0,a.sample)(i.value).value,d=(0,r.default)(c);if(n+d<=t&&(n+=d,o="".concat(c," ").concat(o)),t-n==1){var s=l(e);n+=1,o="".concat(o).concat(s)}}return o.trim()};exports.generateLine=i;var c=function(){return(0,u.default)(50).then(function(r){var a=(0,t.default)(r,1);return o.reduce(function(r,t){return[].concat((0,e.default)(r),[i(a,t)])},[])})},d=c;exports.default=d;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","syllable":"aXHh","./markov":"HJf6","./utils":"rbNY","../api":"VO5s"}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./generator"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var n=[".line-1",".line-2",".line-3"];(0,e.default)().then(function(e){n.forEach(function(r,t){return document.querySelector(r).innerHTML=e[t]})});
},{"./generator":"LgJk"}]},{},["Focm"], null)
//# sourceMappingURL=/src.315df2eb.js.map