// Underscore.js 1.2.3
// (c) 2009-2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function a(b,c,d){if(b===c)return b!==0||1/b==1/c;if(b==null||c==null)return b===c;b._chain&&(b=b._wrapped),c._chain&&(c=c._wrapped);if(b.isEqual&&w.isFunction(b.isEqual))return b.isEqual(c);if(c.isEqual&&w.isFunction(c.isEqual))return c.isEqual(b);var e=j.call(b);if(e!=j.call(c))return!1;switch(e){case"[object String]":return b==String(c);case"[object Number]":return b!=+b?c!=+c:b==0?1/b==1/c:b==+c;case"[object Date]":case"[object Boolean]":return+b==+c;case"[object RegExp]":return b.source==c.source&&b.global==c.global&&b.multiline==c.multiline&&b.ignoreCase==c.ignoreCase}if(typeof b!="object"||typeof c!="object")return!1;for(var f=d.length;f--;)if(d[f]==b)return!0;d.push(b);var f=0,g=!0;if(e=="[object Array]"){if(f=b.length,g=f==c.length)for(;f--;)if(!(g=f in b==f in c&&a(b[f],c[f],d)))break}else{if("constructor"in b!="constructor"in c||b.constructor!=c.constructor)return!1;for(var h in b)if(k.call(b,h)&&(f++,!(g=k.call(c,h)&&a(b[h],c[h],d))))break;if(g){for(h in c)if(k.call(c,h)&&!(f--))break;g=!f}}return d.pop(),g}var b=this,c=b._,d={},e=Array.prototype,f=Object.prototype,g=e.slice,h=e.concat,i=e.unshift,j=f.toString,k=f.hasOwnProperty,l=e.forEach,m=e.map,n=e.reduce,o=e.reduceRight,p=e.filter,q=e.every,r=e.some,s=e.indexOf,t=e.lastIndexOf,f=Array.isArray,u=Object.keys,v=Function.prototype.bind,w=function(a){return new B(a)};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=w),exports._=w):typeof define=="function"&&define.amd?define("underscore",function(){return w}):b._=w,w.VERSION="1.2.3";var x=w.each=w.forEach=function(a,b,c){if(a!=null)if(l&&a.forEach===l)a.forEach(b,c);else if(a.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call(c,a[e],e,a)===d)break}else for(e in a)if(k.call(a,e)&&b.call(c,a[e],e,a)===d)break};w.map=function(a,b,c){var d=[];return a==null?d:m&&a.map===m?a.map(b,c):(x(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)},w.reduce=w.foldl=w.inject=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]);if(n&&a.reduce===n)return d&&(b=w.bind(b,d)),e?a.reduce(b,c):a.reduce(b);x(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value");return c},w.reduceRight=w.foldr=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]);if(o&&a.reduceRight===o)return d&&(b=w.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=w.toArray(a).reverse();return d&&!e&&(b=w.bind(b,d)),e?w.reduce(f,b,c,d):w.reduce(f,b)},w.find=w.detect=function(a,b,c){var d;return y(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},w.filter=w.select=function(a,b,c){var d=[];return a==null?d:p&&a.filter===p?a.filter(b,c):(x(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},w.reject=function(a,b,c){var d=[];return a==null?d:(x(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},w.every=w.all=function(a,b,c){var e=!0;return a==null?e:q&&a.every===q?a.every(b,c):(x(a,function(a,f,g){if(!(e=e&&b.call(c,a,f,g)))return d}),e)};var y=w.some=w.any=function(a,b,c){b||(b=w.identity);var e=!1;return a==null?e:r&&a.some===r?a.some(b,c):(x(a,function(a,f,g){if(e||(e=b.call(c,a,f,g)))return d}),!!e)};w.include=w.contains=function(a,b){var c=!1;return a==null?c:s&&a.indexOf===s?a.indexOf(b)!=-1:c=y(a,function(a){return a===b})},w.invoke=function(a,b){var c=g.call(arguments,2);return w.map(a,function(a){return(b.call?b||a:a[b]).apply(a,c)})},w.pluck=function(a,b){return w.map(a,function(a){return a[b]})},w.max=function(a,b,c){if(!b&&w.isArray(a))return Math.max.apply(Math,a);if(!b&&w.isEmpty(a))return-Infinity;var d={computed:-Infinity};return x(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e>=d.computed&&(d={value:a,computed:e})}),d.value},w.min=function(a,b,c){if(!b&&w.isArray(a))return Math.min.apply(Math,a);if(!b&&w.isEmpty(a))return Infinity;var d={computed:Infinity};return x(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e<d.computed&&(d={value:a,computed:e})}),d.value},w.shuffle=function(a){var b=[],c;return x(a,function(a,d){d==0?b[0]=a:(c=Math.floor(Math.random()*(d+1)),b[d]=b[c],b[c]=a)}),b},w.sortBy=function(a,b,c){return w.pluck(w.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")},w.groupBy=function(a,b){var c={},d=w.isFunction(b)?b:function(a){return a[b]};return x(a,function(a,b){var e=d(a,b);(c[e]||(c[e]=[])).push(a)}),c},w.sortedIndex=function(a,b,c){c||(c=w.identity);for(var d=0,e=a.length;d<e;){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},w.toArray=function(a){return a?a.toArray?a.toArray():w.isArray(a)?g.call(a):w.isArguments(a)?g.call(a):w.values(a):[]},w.size=function(a){return w.toArray(a).length},w.first=w.head=function(a,b,c){return b!=null&&!c?g.call(a,0,b):a[0]},w.initial=function(a,b,c){return g.call(a,0,a.length-(b==null||c?1:b))},w.last=function(a,b,c){return b!=null&&!c?g.call(a,Math.max(a.length-b,0)):a[a.length-1]},w.rest=w.tail=function(a,b,c){return g.call(a,b==null||c?1:b)},w.compact=function(a){return w.filter(a,function(a){return!!a})},w.flatten=function(a,b){return w.reduce(a,function(a,c){return w.isArray(c)?a.concat(b?c:w.flatten(c)):(a[a.length]=c,a)},[])},w.without=function(a){return w.difference(a,g.call(arguments,1))},w.uniq=w.unique=function(a,b,c){var c=c?w.map(a,c):a,d=[];return w.reduce(c,function(c,e,f){if(0==f||(b===!0?w.last(c)!=e:!w.include(c,e)))c[c.length]=e,d[d.length]=a[f];return c},[]),d},w.union=function(){return w.uniq(w.flatten(arguments,!0))},w.intersection=w.intersect=function(a){var b=g.call(arguments,1);return w.filter(w.uniq(a),function(a){return w.every(b,function(b){return w.indexOf(b,a)>=0})})},w.difference=function(a){var b=w.flatten(g.call(arguments,1));return w.filter(a,function(a){return!w.include(b,a)})},w.zip=function(){for(var a=g.call(arguments),b=w.max(w.pluck(a,"length")),c=Array(b),d=0;d<b;d++)c[d]=w.pluck(a,""+d);return c},w.indexOf=function(a,b,c){if(a==null)return-1;var d;if(c)return c=w.sortedIndex(a,b),a[c]===b?c:-1;if(s&&a.indexOf===s)return a.indexOf(b);for(c=0,d=a.length;c<d;c++)if(c in a&&a[c]===b)return c;return-1},w.lastIndexOf=function(a,b){if(a==null)return-1;if(t&&a.lastIndexOf===t)return a.lastIndexOf(b);for(var c=a.length;c--;)if(c in a&&a[c]===b)return c;return-1},w.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0);for(var c=arguments[2]||1,d=Math.max(Math.ceil((b-a)/c),0),e=0,f=Array(d);e<d;)f[e++]=a,a+=c;return f};var z=function(){};w.bind=function(a,b){var c,d;if(a.bind===v&&v)return v.apply(a,g.call(arguments,1));if(!w.isFunction(a))throw new TypeError;return d=g.call(arguments,2),c=function(){if(this instanceof c){z.prototype=a.prototype;var e=new z,f=a.apply(e,d.concat(g.call(arguments)));return Object(f)===f?f:e}return a.apply(b,d.concat(g.call(arguments)))}},w.bindAll=function(a){var b=g.call(arguments,1);return b.length==0&&(b=w.functions(a)),x(b,function(b){a[b]=w.bind(a[b],a)}),a},w.memoize=function(a,b){var c={};return b||(b=w.identity),function(){var d=b.apply(this,arguments);return k.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},w.delay=function(a,b){var c=g.call(arguments,2);return setTimeout(function(){return a.apply(a,c)},b)},w.defer=function(a){return w.delay.apply(w,[a,1].concat(g.call(arguments,1)))},w.throttle=function(a,b){var c,d,e,f,g,h=w.debounce(function(){g=f=!1},b);return function(){c=this,d=arguments;var i;e||(e=setTimeout(function(){e=null,g&&a.apply(c,d),h()},b)),f?g=!0:a.apply(c,d),h(),f=!0}},w.debounce=function(a,b){var c;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){c=null,a.apply(d,e)},b)}},w.once=function(a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply(this,arguments))}},w.wrap=function(a,b){return function(){var c=h.apply([a],arguments);return b.apply(this,c)}},w.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},w.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}},w.keys=u||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],c;for(c in a)k.call(a,c)&&(b[b.length]=c);return b},w.values=function(a){return w.map(a,w.identity)},w.functions=w.methods=function(a){var b=[],c;for(c in a)w.isFunction(a[c])&&b.push(c);return b.sort()},w.extend=function(a){return x(g.call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&(a[c]=b[c])}),a},w.defaults=function(a){return x(g.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])}),a},w.clone=function(a){return w.isObject(a)?w.isArray(a)?a.slice():w.extend({},a):a},w.tap=function(a,b){return b(a),a},w.isEqual=function(b,c){return a(b,c,[])},w.isEmpty=function(a){if(w.isArray(a)||w.isString(a))return a.length===0;for(var b in a)if(k.call(a,b))return!1;return!0},w.isElement=function(a){return!!a&&a.nodeType==1},w.isArray=f||function(a){return j.call(a)=="[object Array]"},w.isObject=function(a){return a===Object(a)},w.isArguments=function(a){return j.call(a)=="[object Arguments]"},w.isArguments(arguments)||(w.isArguments=function(a){return!!a&&!!k.call(a,"callee")}),w.isFunction=function(a){return j.call(a)=="[object Function]"},w.isString=function(a){return j.call(a)=="[object String]"},w.isNumber=function(a){return j.call(a)=="[object Number]"},w.isNaN=function(a){return a!==a},w.isBoolean=function(a){return a===!0||a===!1||j.call(a)=="[object Boolean]"},w.isDate=function(a){return j.call(a)=="[object Date]"},w.isRegExp=function(a){return j.call(a)=="[object RegExp]"},w.isNull=function(a){return a===null},w.isUndefined=function(a){return a===void 0},w.noConflict=function(){return b._=c,this},w.identity=function(a){return a},w.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},w.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},w.mixin=function(a){x(w.functions(a),function(b){D(b,w[b]=a[b])})};var A=0;w.uniqueId=function(a){var b=A++;return a?a+b:b},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},w.template=function(a,b){var c=w.templateSettings,c="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(c.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(c.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",d=new Function("obj","_",c);return b?d(b,w):function(a){return d.call(this,a,w)}};var B=function(a){this._wrapped=a};w.prototype=B.prototype;var C=function(a,b){return b?w(a).chain():a},D=function(a,b){B.prototype[a]=function(){var a=g.call(arguments);return i.call(a,this._wrapped),C(b.apply(w,a),this._chain)}};w.mixin(w),x("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=e[a];B.prototype[a]=function(){return b.apply(this._wrapped,arguments),C(this._wrapped,this._chain)}}),x(["concat","join","slice"],function(a){var b=e[a];B.prototype[a]=function(){return C(b.apply(this._wrapped,arguments),this._chain)}}),B.prototype.chain=function(){return this._chain=!0,this},B.prototype.value=function(){return this._wrapped}}).call(this);