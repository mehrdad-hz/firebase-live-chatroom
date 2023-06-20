(self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(7045),y=n(7976),v=n(9518),w=n(7674),b=n(5112),_=n(9711),I=n(9909),E=I.enforce,T=I.get,S=c.Int8Array,k=S&&S.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,x=S&&v(S),R=k&&v(k),N=Object.prototype,D=c.TypeError,O=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},B=function(e){var t=v(e);if(l(t)){var n=T(t);return n&&h(n,L)?n[L]:B(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},z=function(e){if(q(e))return e;throw D("Target is not a typed array")},$=function(e){if(u(e)&&(!w||y(x,e)))return e;throw D(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}R[e]&&!n||m(R,e,n?t:M&&k[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(x[e]&&!n)return;try{return m(x,e,n?t:M&&x[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?E(s)[L]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(E(s)[L]=i);if((!M||!u(x)||x===Function.prototype)&&(x=function(){throw D("Incorrect invocation")},M))for(r in V)c[r]&&w(c[r],x);if((!M||!R||R===N)&&(R=x.prototype,M))for(r in V)c[r]&&w(c[r].prototype,R);if(M&&v(A)!==R&&w(A,R),a&&!h(R,O))for(r in F=!0,g(R,O,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:z,aTypedArrayConstructor:$,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:j,isTypedArray:q,TypedArray:x,TypedArrayPrototype:R}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9671:function(e,t,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=s(n),d=i(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},5392:function(e,t,n){var r=n(8880),i=n(1060),s=n(2914),o=Error.captureStackTrace;e.exports=function(e,t,n,a){s&&(o?o(e,t):r(e,"stack",i(n,a)))}},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(e,t,n){var r=n(1470),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1470:function(e,t,n){var r=n(4326),i=n(1702);e.exports=function(e){if("Function"===r(e))return i(e)}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293),s=n(7854),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},2452:function(e,t,n){var r=n(3002),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(5392),p=n(9781),m=n(1913);e.exports=function(e,t,n,g){var y="stackTraceLimit",v=g?2:1,w=e.split("."),b=w[w.length-1],_=r.apply(null,w);if(_){var I=_.prototype;if(!m&&i(I,"cause")&&delete I.cause,!n)return _;var E=r("Error"),T=t((function(e,t){var n=h(g?t:e,void 0),r=g?new _(e):new _;return void 0!==n&&s(r,"message",n),f(r,T,r.stack,2),this&&o(I,this)&&l(r,this,T),arguments.length>v&&d(r,arguments[v]),r}));if(T.prototype=I,"Error"!==b?a?a(T,E):c(T,E,{name:!0}):p&&y in _&&(u(T,_,y),u(T,_,"prepareStackTrace")),c(T,_),!m)try{I.name!==b&&s(I,"name",b),I.constructor=T}catch(S){}return T}}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1703:function(e,t,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},8675:function(e,t,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},4590:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(2452),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),y=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(g)return i(f,this,n,t);var r=this.length,s=o(n),u=0;if(s+t>r)throw l("Wrong length");while(u<s)this[t+u]=n[u++]}),!g||y)},1439:function(e,t,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in y(g),I="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),S=_&&!T&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var k=s(g),C=k.prototype;if(C.constructor!==k)for(var A in m||a(C,"constructor",o(1,k)),d)if(c(d,A)){var x=d[A],R=x.s;c(k,R)||a(k,R,o(6,x.c))}},2062:function(e,t,n){"use strict";var r=n(9781),i=n(1702),s=n(7045),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return w},G6:function(){return A},L:function(){return c},LL:function(){return O},Pz:function(){return v},Sg:function(){return b},UG:function(){return E},ZB:function(){return l},ZR:function(){return D},aH:function(){return y},b$:function(){return k},eu:function(){return R},hl:function(){return x},jU:function(){return T},m9:function(){return H},ne:function(){return z},pd:function(){return q},r3:function(){return M},ru:function(){return S},tV:function(){return u},uI:function(){return I},vZ:function(){return V},w1:function(){return C},xO:function(){return j},xb:function(){return F},z$:function(){return _},zd:function(){return B}});n(1703),n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function E(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){return"object"===typeof self&&self.self===self}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function P(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(U(n)&&U(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return Ge},IU:function(){return Re},Jd:function(){return T},PG:function(){return ke},SU:function(){return Be},Um:function(){return Ee},WL:function(){return ze},X$:function(){return A},X3:function(){return xe},XI:function(){return Ve},Xl:function(){return Ne},dq:function(){return Me},iH:function(){return Fe},j:function(){return k},lk:function(){return S},nZ:function(){return a},qj:function(){return Ie},qq:function(){return b},yT:function(){return Ae}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=y,t=I;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,I=!0,m=1<<++p,p<=g?h(this):_(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,y=this.parent,I=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function T(){E.push(I),I=!1}function S(){const e=E.pop();I=void 0===e||e}function k(e,t,n){if(I&&y){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;C(r,i)}}function C(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(v));break}if(1===u.length)u[0]&&x(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);x(c(e))}}function x(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=U(),P=U(!1,!0),L=U(!0),M=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Re(this)[t].apply(this,e);return S(),n}})),e}function V(e){const t=Re(this);return k(t,"has",e),t.hasOwnProperty(e)}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?we:ve:t?ye:ge).get(n))return n;const o=(0,r.kJ)(n);if(!e){if(o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);if("hasOwnProperty"===i)return V}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?D.has(i):N(i))?a:(e||k(n,"get",i),t?a:Me(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Te(a):Ie(a):a)}}const j=q(),B=q(!0);function q(e=!1){return function(t,n,i,s){let o=t[n];if(Ce(o)&&Me(o)&&!Me(i))return!1;if(!e&&(Ae(i)||Ce(i)||(o=Re(o),i=Re(i)),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Re(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),c}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function $(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||k(e,"has",t),n}function G(e){return k(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const K={get:O,set:j,deleteProperty:z,has:$,ownKeys:G},H={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,r.l7)({},K,{get:P,set:B}),Q=e=>e,J=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),s=Re(t);n||(t!==s&&k(i,"get",t),k(i,"get",s));const{has:o}=J(i),a=r?Q:n?Oe:De;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&k(Re(e),"iterate",v),Reflect.get(e,"size",e)}function ee(e){e=Re(e);const t=Re(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function te(e,t){t=Re(t);const n=Re(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=Re(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ne(e){const t=Re(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function re(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Re(s),a=t?Q:e?Oe:De;return!e&&k(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=Re(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?Q:t?Oe:De;return!t&&k(o,"iterate",u?w:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Y(this,e)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ce,ue,le,he]=ae();function de(e,t){const n=t?e?he:le:e?ue:ce;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},me={get:de(!0,!1)};const ge=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be((0,r.W7)(e))}function Ie(e){return Ce(e)?e:Se(e,!1,K,fe,ge)}function Ee(e){return Se(e,!1,W,pe,ye)}function Te(e){return Se(e,!0,H,me,ve)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=_e(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ke(e){return Ce(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function xe(e){return ke(e)||Ce(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const De=e=>(0,r.Kn)(e)?Ie(e):e,Oe=e=>(0,r.Kn)(e)?Te(e):e;function Pe(e){I&&y&&(e=Re(e),C(e.dep||(e.dep=c())))}function Le(e,t){e=Re(e);const n=e.dep;n&&x(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Ue(e,!1)}function Ve(e){return Ue(e,!0)}function Ue(e,t){return Me(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:De(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||Ae(e)||Ce(e);e=t?e:Re(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:De(e),Le(this,e))}}function Be(e){return Me(e)?e.value:e}const qe={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return ke(e)?e:new Proxy(e,qe)}class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Re(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new $e(i,s,o||!s,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},FN:function(){return fn},Fl:function(){return Dn},HY:function(){return Ot},JJ:function(){return ot},P$:function(){return ne},Q6:function(){return ce},U2:function(){return ie},Uk:function(){return nn},Us:function(){return Ct},Wm:function(){return Xt},Y3:function(){return v},Y8:function(){return X},YP:function(){return G},_:function(){return Yt},aZ:function(){return ue},f3:function(){return at},h:function(){return On},iD:function(){return $t},ic:function(){return Te},j4:function(){return Gt},nJ:function(){return ee},nK:function(){return ae},up:function(){return De},wg:function(){return Ut},wy:function(){return J}});n(7658),n(1703);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=k(h[r]);i<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){u||l||(l=!0,y=g.then(A))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&A(e)}}function x(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function R(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,O=null;function P(e){const t=D;return D=e,O=e&&e.type.__scopeId||null,t}function L(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&qt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&qt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=P(e);try{if(4&n.shapeFlag){const e=s||r;v=rn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=rn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:F(l)}}catch(I){Ft.length=0,a(I,e,1),v=Xt(Lt)}let _=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(w=V(w,c)),_=tn(_,w))}return n.dirs&&(_=tn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,P(b),v}const F=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},V=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function U(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||j(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?j(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function j(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!N(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const q=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const $={};function G(e,t,n){return K(e,t,n)}function K(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=dn)?void 0:h.scope)?dn:null;let f,p,m=!1,g=!1;if((0,r.dq)(e)?(f=()=>e.value,m=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,m=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?s(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[v])}:i.dG,t&&a){const e=f;f=()=>Q(e())}let y,v=e=>{p=E.onStop=()=>{s(e,d,4)}};if(In){if(v=i.dG,t?n&&o(t,d,3,[f(),g?[]:void 0,v]):f(),"sync"!==c)return i.dG;{const e=Ln();y=e.__watcherHandles||(e.__watcherHandles=[])}}let w=g?new Array(e.length).fill($):$;const _=()=>{if(E.active)if(t){const e=E.run();(a||m||(g?e.some(((e,t)=>(0,i.aU)(e,w[t]))):(0,i.aU)(e,w)))&&(p&&p(),o(t,d,3,[e,w===$?void 0:g&&w[0]===$?[]:w,v]),w=e)}else E.run()};let I;_.allowRecurse=!!t,"sync"===c?I=_:"post"===c?I=()=>kt(_,d&&d.suspense):(_.pre=!0,d&&(_.id=d.uid),I=()=>b(_));const E=new r.qq(f,I);t?n?_():w=E.run():"post"===c?kt(E.run.bind(E),d&&d.suspense):E.run();const T=()=>{E.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,E)};return y&&y.push(T),T}function H(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?W(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=dn;yn(this);const c=K(s,o.bind(r),n);return a?yn(a):vn(),c}function W(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function J(e,t){const n=D;if(null===n)return e;const r=xn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Y(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function X(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ie((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const Z=[Function,Array],ee={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},te={name:"BaseTransition",props:ee,setup(e,{slots:t}){const n=fn(),i=X();let s;return()=>{const o=t.default&&ce(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Lt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return se(a);const l=oe(a);if(!l)return se(a);const h=ie(l,c,i,n);ae(l,h);const d=n.subTree,f=d&&oe(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Lt&&(!Ht(l,f)||p)){const e=ie(f,c,i,n);if(ae(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},se(a);"in-out"===u&&l.type!==Lt&&(e.delayLeave=(e,t,n)=>{const r=re(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ne=te;function re(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ie(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),I=re(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&Ht(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),E(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,o]):o()},clone(e){return ie(e,t,n,r)}};return S}function se(e){if(he(e))return e=tn(e),e.children=null,e}function oe(e){return he(e)?e.children?e.children[0]:void 0:e}function ae(e,t){6&e.shapeFlag&&e.component?ae(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ce(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ot?(128&o.patchFlag&&i++,r=r.concat(ce(o.children,t,a))):(t||o.type!==Lt)&&r.push(null!=a?tn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ue(e,t){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},t,{setup:e}))():e}const le=e=>!!e.type.__asyncLoader;const he=e=>e.type.__isKeepAlive;RegExp,RegExp;function de(e,t){return(0,i.kJ)(e)?e.some((e=>de(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function fe(e,t){me(e,"a",t)}function pe(e,t){me(e,"da",t)}function me(e,t,n=dn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(we(t,r,n),n){let e=n.parent;while(e&&e.parent)he(e.parent.vnode)&&ge(r,t,n,e),e=e.parent}}function ge(e,t,n,r){const s=we(t,e,r,!0);ke((()=>{(0,i.Od)(r[t],s)}),n)}function ye(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ve(e){return 128&e.shapeFlag?e.ssContent:e}function we(e,t,n=dn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),yn(n);const s=o(t,n,e,i);return vn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const be=e=>(t,n=dn)=>(!In||"sp"===e)&&we(e,((...e)=>t(...e)),n),_e=be("bm"),Ie=be("m"),Ee=be("bu"),Te=be("u"),Se=be("bum"),ke=be("um"),Ce=be("sp"),Ae=be("rtg"),xe=be("rtc");function Re(e,t=dn){we("ec",e,t)}const Ne="components";function De(e,t){return Pe(Ne,e,!0,t)||e}const Oe=Symbol.for("v-ndc");function Pe(e,t,n=!0,r=!1){const s=D||dn;if(s){const n=s.type;if(e===Ne){const e=Rn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Le(s[e]||n[e],t)||Le(s.appContext[e],t);return!o&&r?n:o}}function Le(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Me=e=>e?wn(e)?xn(e)||e.proxy:Me(e.parent):null,Fe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Me(e.parent),$root:e=>Me(e.root),$emit:e=>e.emit,$options:e=>Ke(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>H.bind(e)}),Ve=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Ue={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ve(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Be&&(c[t]=0)}}const d=Fe[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Ve(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Ve(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Fe,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function je(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Be=!0;function qe(e){const t=Ke(e),n=e.proxy,s=e.ctx;Be=!1,t.beforeCreate&&$e(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:x,components:R,directives:N,filters:D}=t,O=null;if(h&&ze(h,s,O),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Be=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Dn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ge(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ot(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&$e(d,e,"c"),P(_e,f),P(Ie,p),P(Ee,m),P(Te,g),P(fe,y),P(pe,v),P(Re,k),P(xe,T),P(Ae,S),P(Se,b),P(ke,I),P(Ce,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=x&&(e.inheritAttrs=x),R&&(e.components=R),N&&(e.directives=N)}function ze(e,t,n=i.dG){(0,i.kJ)(e)&&(e=Ye(e));for(const s in e){const n=e[s];let o;o=(0,i.Kn)(n)?"default"in n?at(n.from||s,n.default,!0):at(n.from||s):at(n),(0,r.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function $e(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const s=r.includes(".")?W(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&G(s,n)}else if((0,i.mf)(e))G(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&G(s,r,e)}else 0}function Ke(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>He(u,e,a,!0))),He(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function He(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&He(e,s,n,!0),i&&i.forEach((t=>He(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=We[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const We={data:Qe,props:et,emits:et,methods:Ze,computed:Ze,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Ze,directives:Ze,watch:tt,provide:Qe,inject:Je};function Qe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Je(e,t){return Ze(Ye(e),Ye(t))}function Ye(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function et(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),je(e),je(null!=t?t:{})):t}function tt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Xe(e[r],t[r]);return n}function nt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rt=0;function it(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=nt();const o=new Set;let a=!1;const c=s.app={_uid:rt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Mn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=Xt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,xn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){st=c;try{return e()}finally{st=null}}};return c}}let st=null;function ot(e,t){if(dn){let n=dn.provides;const r=dn.parent&&dn.parent.provides;r===n&&(n=dn.provides=Object.create(r)),n[e]=t}else 0}function at(e,t,n=!1){const r=dn||D;if(r||st){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:st._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function ct(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Wt,1),e.propsDefaults=Object.create(null),lt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ut(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;lt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ht(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=ht(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function lt(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ht(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function ht(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(yn(s),r=i[n]=e.call(null,t),vn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function dt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=dt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ft(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ft(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=gt(Boolean,r.type),n=gt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function ft(e){return"$"!==e[0]}function pt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function mt(e,t){return pt(e)===pt(t)}function gt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>mt(t,e))):(0,i.mf)(t)&&mt(t,e)?0:-1}const yt=e=>"_"===e[0]||"$stable"===e,vt=e=>(0,i.kJ)(e)?e.map(rn):[rn(e)],wt=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>vt(t(...e))),n);return r._c=!1,r},bt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(yt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=wt(s,n,r);else if(null!=n){0;const e=vt(n);t[s]=()=>e}}},_t=(e,t)=>{const n=vt(t);e.slots.default=()=>n},It=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):bt(t,e.slots={})}else e.slots={},t&&_t(e,t);(0,i.Nj)(e.slots,Wt,1)},Et=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,bt(t,s)),a=t}else t&&(_t(e,t),a={default:1});if(o)for(const i in s)yt(i)||i in a||delete s[i]};function Tt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Tt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(le(o)&&!a)return;const c=4&o.shapeFlag?xn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,kt(r,n)):r()}else 0}}function St(){}const kt=z;function Ct(e){return At(e)}function At(e,t){St();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ht(e,t)&&(r=Z(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Pt:v(e,t,n,r);break;case Lt:w(e,t,n,r);break;case Mt:null==e&&_(t,n,r,o);break;case Ot:P(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&Tt(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&R(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&Y(e,null,r,"created"),x(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,X);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&cn(p,r,e)}w&&Y(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||w)&&kt((()=>{p&&cn(p,r,e),b&&v.enter(f),w&&Y(e,null,r,"mounted")}),o)},x=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?sn(e[u]):rn(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&xt(n,!1),(g=m.onVnodeBeforeUpdate)&&cn(g,n,t,e),f&&Y(t,e,n,"beforeUpdate"),n&&xt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,u,n,r,y,o):c||z(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||O(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&kt((()=>{g&&cn(g,n,t,e),f&&Y(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Ot||!Ht(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},O=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Rt(e,t,!0)):z(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):V(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=hn(e,r,i);if(he(e)&&(a.ctx.renderer=te),En(a),a.asyncDep){if(i&&i.registerDep(a,j),!e.el){const e=a.subTree=Xt(Lt);w(null,e,t,n)}}else j(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(U(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,xt(e,!1),n?(n.el=l.el,q(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&cn(t,u,n,l),xt(e,!0);const d=M(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&kt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&kt((()=>cn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=le(t);if(xt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&cn(r,d,t),xt(e,!0),c&&re){const n=()=>{e.subTree=M(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&kt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;kt((()=>cn(r,d,e)),o)}(256&t.shapeFlag||d&&le(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&kt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,xt(e,!0),h()},q=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ut(e,t.props,i,n),Et(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},z=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&R(h,n,r,i,s,o,a,c))},$=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?sn(t[f]):rn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):R(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?sn(t[l]):rn(t[l]);if(!Ht(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?sn(t[f]):rn(t[f]);if(!Ht(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?sn(t[l]):rn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?sn(t[l]):rn(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const b=f-m+1;let _=!1,I=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Ht(r,t[v])){i=v;break}void 0===i?H(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:_=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const T=_?Nt(E):i.Z6;for(v=T.length-1,l=b-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==T[v]?K(i,n,d,2):v--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Ot){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Mt)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),kt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Tt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!le(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&cn(m,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Y(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Ot||h>0&&64&h)?X(u,t,n,!1,!0):(s===Ot&&384&h||!i&&16&l)&&X(c,t,n),r&&W(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&kt((()=>{m&&cn(m,t,e),f&&Y(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ot)return void Q(n,r);if(t===Mt)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&kt(c,t),kt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),T(),S(),t._vnode=e},te={p:y,um:H,m:K,r:W,mt:F,mc:R,pc:z,pbc:D,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:it(ee,ne)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=sn(s[i]),t.el=e.el),n||Rt(e,t)),t.type===Pt&&(t.el=e.el)}}function Nt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Dt=e=>e.__isTeleport;const Ot=Symbol.for("v-fgt"),Pt=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Mt=Symbol.for("v-stc"),Ft=[];let Vt=null;function Ut(e=!1){Ft.push(Vt=e?null:[])}function jt(){Ft.pop(),Vt=Ft[Ft.length-1]||null}let Bt=1;function qt(e){Bt+=e}function zt(e){return e.dynamicChildren=Bt>0?Vt||i.Z6:null,jt(),Bt>0&&Vt&&Vt.push(e),e}function $t(e,t,n,r,i,s){return zt(Yt(e,t,n,r,i,s,!0))}function Gt(e,t,n,r,i){return zt(Xt(e,t,n,r,i,!0))}function Kt(e){return!!e&&!0===e.__v_isVNode}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Wt="__vInternal",Qt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function Yt(e,t=null,n=null,r=0,s=null,o=(e===Ot?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qt(t),ref:t&&Jt(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(on(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Bt>0&&!a&&Vt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Vt.push(u),u}const Xt=Zt;function Zt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Oe||(e=Lt),Kt(e)){const r=tn(e,t,!0);return n&&on(r,n),Bt>0&&!a&&Vt&&(6&r.shapeFlag?Vt[Vt.indexOf(e)]=r:Vt.push(r)),r.patchFlag|=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=en(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:q(e)?128:Dt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Yt(e,t,n,s,o,c,a,!0)}function en(e){return e?(0,r.X3)(e)||Wt in e?(0,i.l7)({},e):e:null}function tn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?an(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Qt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Jt(t)):[s,Jt(t)]:Jt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ot?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tn(e.ssContent),ssFallback:e.ssFallback&&tn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function nn(e=" ",t=0){return Xt(Pt,null,e,t)}function rn(e){return null==e||"boolean"===typeof e?Xt(Lt):(0,i.kJ)(e)?Xt(Ot,null,e.slice()):"object"===typeof e?sn(e):Xt(Pt,null,String(e))}function sn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:tn(e)}function on(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),on(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Wt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function an(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function cn(e,t,n,r=null){o(e,t,7,[n,r])}const un=nt();let ln=0;function hn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||un,a={uid:ln++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dt(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=x.bind(null,a),e.ce&&e.ce(a),a}let dn=null;const fn=()=>dn||D;let pn,mn,gn="__VUE_INSTANCE_SETTERS__";(mn=(0,i.E9)()[gn])||(mn=(0,i.E9)()[gn]=[]),mn.push((e=>dn=e)),pn=e=>{mn.length>1?mn.forEach((t=>t(e))):mn[0](e)};const yn=e=>{pn(e),e.scope.on()},vn=()=>{dn&&dn.scope.off(),pn(null)};function wn(e){return 4&e.vnode.shapeFlag}let bn,_n,In=!1;function En(e,t=!1){In=t;const{props:n,children:r}=e.vnode,i=wn(e);ct(e,n,i,t),It(e,r);const s=i?Tn(e,t):void 0;return In=!1,s}function Tn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ue));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?An(e):null;yn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),vn(),(0,i.tI)(c)){if(c.then(vn,vn),t)return c.then((n=>{Sn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Sn(e,c,t)}else kn(e,t)}function Sn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),kn(e,n)}function kn(e,t,n){const s=e.type;if(!e.render){if(!t&&bn&&!s.render){const t=s.template||Ke(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=bn(t,c)}}e.render=s.render||i.dG,_n&&_n(e)}yn(e),(0,r.Jd)(),qe(e),(0,r.lk)(),vn()}function Cn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function An(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Cn(e)},slots:e.slots,emit:e.emit,expose:t}}function xn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Fe?Fe[n](e):void 0},has(e,t){return t in e||t in Fe}}))}function Rn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,In);function On(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Kt(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Kt(n)&&(n=[n]),Xt(e,t,n))}const Pn=Symbol.for("v-scx"),Ln=()=>{{const e=at(Pn);return e}};const Mn="3.3.4"},9242:function(e,t,n){"use strict";n.d(t,{iM:function(){return he},nr:function(){return ce},ri:function(){return me}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const y="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(y,t.slice(6,t.length)):e.setAttributeNS(y,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=T(t);if(r){const o=s[t]=A(r,i);b(e,n,o,a)}else o&&(_(e,n,o,a),s[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const k=Promise.resolve(),C=()=>S||(k.then((()=>S=0)),S=Date.now());function A(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,N=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",P="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=L.props=(0,r.l7)({},i.nJ,M),V=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=v,onAppear:T=w,onAppearCancelled:S=b}=t,k=(e,t,n)=>{$(e,t?h:c),$(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,$(e,d),$(e,p),$(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:w,s=()=>k(t,e,n);V(r,[t,s]),G((()=>{$(t,e?u:o),z(t,e?h:c),U(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){V(v,[e]),z(e,o),z(e,a)},onBeforeAppear(e){V(E,[e]),z(e,u),z(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);z(e,d),Y(),z(e,f),G((()=>{e._isLeaving&&($(e,d),z(e,p),U(_)||H(e,i,y,n))})),V(_,[e,n])},onEnterCancelled(e){k(e,!1),V(b,[e])},onAppearCancelled(e){k(e,!0),V(S,[e])},onLeaveCancelled(e){C(e),V(I,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let K=0;function H(e,t,n,r){const i=e._endId=++K,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function W(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${O}Delay`),s=r(`${O}Duration`),o=Q(i,s),a=r(`${P}Delay`),c=r(`${P}Duration`),u=Q(a,c);let l=null,h=0,d=0;t===O?o>0&&(l=O,h=o,d=s.length):t===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?O:P:null,d=l?l===O?s.length:c.length:0);const f=l===O&&/\b(transform|all)(,|$)/.test(r(`${O}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const r=o.filter(re);Y(),r.forEach((e=>{const n=e.el,r=n.style;z(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,$(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=j(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),X.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function re(e){const t=X.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=W(r);return i.removeChild(r),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=se(s);const o=i||s.props&&"number"===s.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",oe),b(e,"compositionend",ae),b(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ue=["ctrl","shift","alt","meta"],le={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ue.some((n=>e[`${n}Key`]&&!t.includes(n)))},he=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=le[t[e]];if(r&&r(n,t))return}return e(n,...r)};const de=(0,r.l7)({patchProp:N},u);let fe;function pe(){return fe||(fe=(0,i.Us)(de))}const me=(...e)=>{const t=pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ge(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ge(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return X},DM:function(){return y},E9:function(){return $},F7:function(){return u},Gg:function(){return R},HD:function(){return _},He:function(){return q},Kj:function(){return w},Kn:function(){return E},NO:function(){return a},Nj:function(){return j},Od:function(){return d},PO:function(){return A},Pq:function(){return ee},RI:function(){return p},S0:function(){return x},W7:function(){return C},WV:function(){return re},Z6:function(){return s},_A:function(){return O},_N:function(){return g},aU:function(){return V},dG:function(){return o},e1:function(){return K},fY:function(){return r},h5:function(){return B},hR:function(){return F},hq:function(){return ie},ir:function(){return U},j5:function(){return H},kC:function(){return M},kJ:function(){return m},kT:function(){return i},l7:function(){return h},mf:function(){return b},rs:function(){return L},tI:function(){return T},tR:function(){return l},yA:function(){return te},yk:function(){return I},zw:function(){return se}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=e=>c.test(e),l=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),m=Array.isArray,g=e=>"[object Map]"===k(e),y=e=>"[object Set]"===k(e),v=e=>"[object Date]"===k(e),w=e=>"[object RegExp]"===k(e),b=e=>"function"===typeof e,_=e=>"string"===typeof e,I=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>E(e)&&b(e.then)&&b(e.catch),S=Object.prototype.toString,k=e=>S.call(e),C=e=>k(e).slice(8,-1),A=e=>"[object Object]"===k(e),x=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},D=/-(\w)/g,O=N((e=>e.replace(D,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,L=N((e=>e.replace(P,"-$1").toLowerCase())),M=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=N((e=>e?`on${M(e)}`:"")),V=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let z;const $=()=>z||(z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const G="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(G);function H(e){if(m(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?Y(r):H(r);if(i)for(const e in i)t[e]=i[e]}return t}return _(e)||E(e)?e:void 0}const W=/;(?![^(]*\))/g,Q=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(J,"").split(W).forEach((e=>{if(e){const n=e.split(Q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(_(e))t=e;else if(m(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Z);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=I(e),r=I(t),n||r)return e===t;if(n=m(e),r=m(t),n||r)return!(!n||!r)&&ne(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}const se=e=>_(e)?e:null==e?"":m(e)||E(e)&&(e.toString===S||!b(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:y(t)?{[`Set(${t.size})`]:[...t.values()]}:!E(t)||m(t)||A(t)?t:String(t)},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(223),i=n(7142),s=n(1804),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},1804:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return be},getApps:function(){return _e},initializeApp:function(){return we},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return Se}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.12",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",z="@firebase/functions",$="@firebase/functions-compat",G="@firebase/installations",K="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.22.2",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[z]:"fire-fn",[$]:"fire-fn-compat",[G]:"fire-iid",[K]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ye(n,i,c);return ae.set(o,u),u}function be(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ce=1,Ae="firebase-heartbeat-store";let xe=null;function Re(){return xe||(xe=T(ke,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),xe}async function Ne(e){try{const t=await Re(),n=await t.transaction(Ae).objectStore(Ae).get(Oe(e));return n}catch(t){if(t instanceof s.ZR)O.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function De(e,t){try{const n=await Re(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);await i.put(t,Oe(e)),await r.done}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r.wA("platform-logger",(e=>new x(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ee(N,D,e),Ee(N,D,"esm2017"),Ee("fire-js","")}Be("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(1703),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},1509:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="9.22.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},5816:function(e,t,n){"use strict";n(7658);var r=n(2661),i=(n(8675),n(3408),n(4590),n(3462),n(1439),n(7585),n(5315),n(1703),n(2062),n(223)),s=n(1804);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(5168),c=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function y(e,...t){g.logLevel<=a["in"].WARN&&g.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}function v(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,...t){throw E(e,...t)}function b(e,...t){return E(e,...t)}function _(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function I(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&w(e,"argument-error"),_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw E(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},M=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return U(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),t);try{const t=new q(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw z(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _(e,a,o);w(e,a)}}catch(s){if(s instanceof i.ZR)throw s;w(e,"network-request-failed",{message:String(s)})}}async function j(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&w(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),M.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return V(e,"POST","/v1/accounts:update",t)}async function K(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=J(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:H(Q(s.auth_time)),issuedAtTime:H(Q(s.iat)),expirationTime:H(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function J(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Y(e){const t=J(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,K(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?se(s.providerUserInfo):[],a=ie(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new te(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function re(e){const t=(0,i.m9)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function se(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await U(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=B(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ae;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return re(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;T(v&&I,e,"internal-error");const E=ae.fromJSON(this.name,I);T("string"===typeof v,e,"internal-error"),ce(l,e.name),ce(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof b,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(m,e.name),ce(g,e.name),ce(y,e.name);const S=new ue({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ne(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){k(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ue._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,i.z$)()){return/firefox\//i.test(e)}function ve(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function be(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ee(e=(0,i.z$)()){return/webos/i.test(e)}function Te(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return(0,i.w1)()&&10===document.documentMode}function Ae(e=(0,i.z$)()){return Te(e)||_e(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||be(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function De(e,t){return V(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){return void 0!==e&&void 0!==e.getResponse}function Pe(e){return void 0!==e&&void 0!==e.enterprise}class Le{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Fe(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Me().appendChild(r)}))}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ue="https://www.google.com/recaptcha/enterprise.js?render=",je="recaptcha-enterprise",Be="NO_RECAPTCHA";class qe{constructor(e){this.type=je,this.auth=Ke(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{De(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Le(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Pe(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Be)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Pe(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Fe(Ue+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ze(e,t,n,r=!1){const i=new qe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new He(this),this.idTokenSubscription=new He(this),this.beforeStateQueue=new $e(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}async initializeRecaptchaConfig(){const e=await De(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Le(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new qe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&y(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ke(e){return(0,i.m9)(e)}class He{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Ke(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Je(t),{host:o,port:a}=Ye(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Xe(t)}}}function Xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function nt(e,t){return V(e,"POST","/v1/accounts:update",t)}async function rt(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function st(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ot(e,t){return st(e,t)}async function at(e,t){return st(e,t)}async function ct(e,t){return st(e,t)}async function ut(e,t){return st(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function ht(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await ze(e,n,"signInWithPassword");return it(e,t)}return it(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await ze(e,n,"signInWithPassword");return it(e,t)}return Promise.reject(t)}));case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:w(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ht(e,{idToken:t,email:this._email,oobCode:this._password});default:w(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="http://localhost";class mt extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):w("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:pt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function yt(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function vt(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const wt={["USER_NOT_FOUND"]:"user-not-found"};async function bt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),wt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _t({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _t({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new _t({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Et(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class Tt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=It(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Et(e);try{return new Tt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Tt.parseLink(t);return T(n,"argument-error"),dt._fromEmailAndCode(e,n.code,n.tenantId)}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends kt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class At extends Ct{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),mt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),mt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return At.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return At.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new At(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ct{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(t){return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends Ct{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rt.credential(t,n)}catch(r){return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com",Rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends Ct{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch(t){return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com",Nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt="http://localhost";class Ot extends et{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Ot(n,i):null}static _create(e,t){return new Ot(e,t)}buildRequest(){return{requestUri:Dt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="saml.";class Lt extends kt{constructor(e){T(e.startsWith(Pt),"argument-error"),super(e)}static credentialFromResult(e){return Lt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Lt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ot.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ot._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ct{constructor(){super("twitter.com")}static credential(e,t){return mt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t){return j(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.TWITTER_SIGN_IN_METHOD="twitter.com",Mt.PROVIDER_ID="twitter.com";class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=Ut(n),o=new Vt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ut(n);return new Vt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e){var t;const n=Ke(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ft(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Bt(e,t,n,r)}}function qt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t){const n=(0,i.m9)(e);await Kt(!0,n,t);const{providerUserInfo:r}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=zt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Gt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vt._forOperation(e,"link",r)}async function Kt(e,t,n){await ne(t);const r=zt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await X(e,qt(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=J(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Vt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&w(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,n=!1){const r="signIn",i=await qt(e,r,t),s=await Vt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Qt(e,t){return Wt(Ke(e),t)}async function Jt(e,t){const n=(0,i.m9)(e);return await Kt(!1,n,t.providerId),Gt(n,t)}async function Yt(e,t){return Ht((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=Ke(e),r=await Xt(n,{token:t,returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tn._fromServerResponse(e,t):"totpInfo"in t?nn._fromServerResponse(e,t):w(e,"internal-error")}}class tn extends en{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tn(t)}}class nn extends en{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new nn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n){var r;const i=Ke(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ze(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}else n&&rn(i,s,n),await at(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await ze(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}}))}async function on(e,t,n){await tt((0,i.m9)(e),{oobCode:t,newPassword:n})}async function an(e,t){await rt((0,i.m9)(e),{oobCode:t})}async function cn(e,t){const n=(0,i.m9)(e),r=await tt(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=en._fromServerResponse(Ke(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function un(e,t){const{data:n}=await cn((0,i.m9)(e),t);return n.email}async function ln(e,t,n){var r;const i=Ke(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ze(i,s,"signUpPassword");o=Ft(i,e)}else o=Ft(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await ze(i,s,"signUpPassword");return Ft(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await Vt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function hn(e,t,n){return Qt((0,i.m9)(e),St.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n){var r;const i=Ke(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){T(t.handleCodeInApp,i,"argument-error"),t&&rn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ze(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}else o(s,n),await ct(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await ze(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}}))}function fn(e,t){const n=Tt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function pn(e,t,n){const r=(0,i.m9)(e),s=St.credentialWithLink(t,n||C());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){const n=A()?C():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await mn((0,i.m9)(e),r);return s||[]}async function yn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&rn(n.auth,s,t);const{email:o}=await ot(n.auth,s);o!==e.email&&await e.reload()}async function vn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&rn(r.auth,o,n);const{email:a}=await ut(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(r,wn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function _n(e,t){return En((0,i.m9)(e),t,null)}function In(e,t){return En((0,i.m9)(e),null,t)}async function En(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await X(e,nt(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Sn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new Cn(s,i);case"github.com":return new An(s,i);case"google.com":return new xn(s,i);case"twitter.com":return new Rn(s,i,e.screenName||null);case"custom":case"anonymous":return new Sn(s,null);default:return new Sn(s,r,i)}}class Sn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class kn extends Sn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Cn extends Sn{constructor(e,t){super(e,"facebook.com",t)}}class An extends kn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class xn extends Sn{constructor(e,t){super(e,"google.com",t)}}class Rn extends kn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Nn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Tn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Dn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Dn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Dn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Dn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ke(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>en._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=Dn._fromMfaPendingCredential(r.mfaPendingCredential);return new On(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Vt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Vt._forOperation(t.user,t.operationType,o);default:w(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Pn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),On._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Mn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Fn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Vn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Un(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class jn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>en._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new jn(e)}async getSession(){return Dn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await X(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await X(this.user,Un(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Bn=new WeakMap;function qn(e){const t=(0,i.m9)(e);return Bn.has(t)||Bn.set(t,jn._fromUser(t)),Bn.get(t)}const zn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zn,"1"),this.storage.removeItem(zn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){const e=(0,i.z$)();return ve(e)||Te(e)}const Kn=1e3,Hn=10;class Wn extends $n{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gn()&&xe(),this.fallbackToPolling=Ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ce()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Qn=Wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends $n{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jn.type="SESSION";const Yn=Jn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Zn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Xn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=er("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function rr(e){nr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return"undefined"!==typeof nr()["WorkerGlobalScope"]&&"function"===typeof nr()["importScripts"]}async function sr(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function or(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ar(){return ir()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="firebaseLocalStorageDb",ur=1,lr="firebaseLocalStorage",hr="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function fr(e,t){return e.transaction([lr],t?"readwrite":"readonly").objectStore(lr)}function pr(){const e=indexedDB.deleteDatabase(cr);return new dr(e).toPromise()}function mr(){const e=indexedDB.open(cr,ur);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(lr,{keyPath:hr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(lr)?t(n):(n.close(),await pr(),t(await mr()))}))}))}async function gr(e,t,n){const r=fr(e,!0).put({[hr]:t,value:n});return new dr(r).toPromise()}async function yr(e,t){const n=fr(e,!1).get(t),r=await new dr(n).toPromise();return void 0===r?null:r.value}function vr(e,t){const n=fr(e,!0).delete(t);return new dr(n).toPromise()}const wr=800,br=3;class _r{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await mr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>br)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zn._getInstance(ar()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await sr(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&or()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mr();return await gr(e,zn,"1"),await vr(e,zn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>yr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=fr(e,!1).getAll();return new dr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),wr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}_r.type="LOCAL";const Ir=_r;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function Tr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function Sr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=500,Cr=6e4,Ar=1e12;class xr{constructor(e){this.auth=e,this.counter=Ar,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Rr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Ar;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Ar;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Ar;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Rr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Nr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Cr)}),kr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Nr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Ve("rcb"),Or=new D(3e4,6e4),Pr="https://www.google.com/recaptcha/api.js?";class Lr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=nr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(Mr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Oe(nr().grecaptcha)?Promise.resolve(nr().grecaptcha):new Promise(((n,r)=>{const s=nr().setTimeout((()=>{r(b(e,"network-request-failed"))}),Or.get());nr()[Dr]=()=>{nr().clearTimeout(s),delete nr()[Dr];const i=nr().grecaptcha;if(!i||!Oe(i))return void r(b(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${Pr}?${(0,i.xO)({onload:Dr,render:"explicit",hl:t})}`;Fe(o).catch((()=>{clearTimeout(s),r(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=nr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Fr{async load(e){return new xr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="recaptcha",Ur={theme:"light",type:"image"};class jr{constructor(e,t=Object.assign({},Ur),n){this.parameters=t,this.type=Vr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ke(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fr:new Lr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=nr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(A()&&!ir(),this.auth,"internal-error"),await Br(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ne(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Br(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=_t._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function zr(e,t,n){const r=Ke(e),s=await Kr(r,t,(0,i.m9)(n));return new qr(s,(e=>Qt(r,e)))}async function $r(e,t,n){const r=(0,i.m9)(e);await Kt(!1,r,"phone");const s=await Kr(r.auth,t,(0,i.m9)(n));return new qr(s,(e=>Jt(r,e)))}async function Gr(e,t,n){const r=(0,i.m9)(e),s=await Kr(r.auth,t,(0,i.m9)(n));return new qr(s,(e=>Yt(r,e)))}async function Kr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Vr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await Ln(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await Er(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await gt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Hr(e,t){await Gt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.providerId=Wr.PROVIDER_ID,this.auth=Ke(e)}verifyPhoneNumber(e,t){return Kr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return _t._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Wr.credentialFromTaggedObject(t)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_t._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){return t?he(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wr.PROVIDER_ID="phone",Wr.PHONE_SIGN_IN_METHOD="phone";class Jr extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yr(e){return Wt(e.auth,new Jr(e),e.bypassAuthState)}function Xr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Ht(n,new Jr(e),e.bypassAuthState)}async function Zr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Gt(n,new Jr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yr;case"linkViaPopup":case"linkViaRedirect":return Zr;case"reauthViaPopup":case"reauthViaRedirect":return Xr;default:w(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new D(2e3,1e4);async function ni(e,t,n){const r=Ke(e);I(e,t,kt);const i=Qr(r,n),s=new si(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ri(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt);const s=Qr(r.auth,n),o=new si(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function ii(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt);const s=Qr(r.auth,n),o=new si(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class si extends ei{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ti.get())};e()}}si.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi="pendingRedirect",ai=new Map;class ci extends ei{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const t=await ui(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ui(e,t){const n=pi(t),r=fi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function li(e,t){return fi(e)._set(pi(t),"true")}function hi(){ai.clear()}function di(e,t){ai.set(e._key(),t)}function fi(e){return he(e._redirectPersistence)}function pi(e){return pe(oi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t,n){return gi(e,t,n)}async function gi(e,t,n){const r=Ke(e);I(e,t,kt),await r._initializationPromise;const i=Qr(r,n);return await li(i,r),i._openRedirect(r,t,"signInViaRedirect")}function yi(e,t,n){return vi(e,t,n)}async function vi(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt),await r.auth._initializationPromise;const s=Qr(r.auth,n);await li(s,r.auth);const o=await Ei(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function wi(e,t,n){return bi(e,t,n)}async function bi(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt),await r.auth._initializationPromise;const s=Qr(r.auth,n);await Kt(!1,r,t.providerId),await li(s,r.auth);const o=await Ei(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function _i(e,t){return await Ke(e)._initializationPromise,Ii(e,t,!1)}async function Ii(e,t,n=!1){const r=Ke(e),i=Qr(r,t),s=new ci(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Ei(e){const t=er(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=6e5;class Si{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ai(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ci(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ti&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ai(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ci(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;async function Di(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xi(e);for(const r of t)try{if(Oi(r))return}catch(n){}w(e,"unauthorized-domain")}function Oi(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ni.test(n))return!1;if(Ri.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new D(3e4,6e4);function Li(){const e=nr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Mi(e){return new Promise(((t,n)=>{var r,i,s;function o(){Li(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Li(),n(b(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(i=null===(r=nr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=nr().gapi)||void 0===s?void 0:s.load)){const t=Ve("iframefcb");return nr()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},Fe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Fi=null,e}))}let Fi=null;function Vi(e){return Fi=Fi||Mi(e),Fi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new D(5e3,15e3),ji="__/auth/iframe",Bi="emulator/auth/iframe",qi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $i(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Bi):`https://${e.config.authDomain}/${ji}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=zi.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Gi(e){const t=await Vi(e),n=nr().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:$i(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),s=nr().setTimeout((()=>{r(i)}),Ui.get());function o(){nr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hi=500,Wi=600,Qi="_blank",Ji="http://localhost";class Yi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xi(e,t,n,r=Hi,s=Wi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ki),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=we(l)?Qi:n),ye(l)&&(t=t||Ji,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return Zi(t||"",c),new Yi(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Yi(d)}function Zi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="__/auth/handler",ts="emulator/auth/handler",ns=encodeURIComponent("fac");async function rs(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof kt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ct){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),h=l?`#${ns}=${encodeURIComponent(l)}`:"";return`${is(e)}?${(0,i.xO)(u).slice(1)}${h}`}function is({config:e}){return e.emulator?O(e,ts):`https://${e.authDomain}/${es}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="webStorageSupport";class os{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await rs(e,t,n,C(),r);return Xi(e,s,er())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await rs(e,t,n,C(),r);return rr(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Gi(e),n=new Si(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ss,{type:ss},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ss];void 0!==i&&t(!!i),w(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Di(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ae()||ve()||Te()}}const as=os;class cs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class us extends cs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new us(e)}_finalizeEnroll(e,t,n){return Mn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Tr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ls{constructor(){}static assertion(e){return us._fromCredential(e)}}ls.FACTOR_ID="phone";class hs{static assertionForEnrollment(e,t){return ds._fromSecret(e,t)}static assertionForSignIn(e,t){return ds._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;T("undefined"!==typeof t.auth,"internal-error");const n=await Fn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return fs._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}hs.FACTOR_ID="totp";class ds extends cs{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ds(t,void 0,e)}static _fromEnrollmentId(e,t){return new ds(t,e)}async _finalizeEnroll(e,t,n){return T("undefined"!==typeof this.secret,e,"argument-error"),Vn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){T(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Sr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class fs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new fs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(ps(e)||ps(t))&&(r=!0),r&&(ps(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ps(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ps(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ms="@firebase/auth",gs="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ws(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},u=new Ge(r,i,s,c);return We(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Ke(e.getProvider("auth").getImmediate());return(e=>new ys(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(ms,gs,vs(e)),(0,s.registerVersion)(ms,gs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ws("Browser");const Is=2e3;async function Es(e,t,n){var r;const{BuildInfo:i}=_s();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await As(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:w(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,rs(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Ts(e){const{BuildInfo:t}=_s(),n={};Te()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:w(e,"operation-not-supported-in-this-environment"),await xi(e,n)}function Ss(e){const{cordova:t}=_s();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function ks(e,t,n){const{cordova:r}=_s();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(b(e,"redirect-cancelled-by-user"))}),Is))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function Cs(e){var t,n,r,i,s,o,a,c,u,l;const h=_s();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function As(e){const t=xs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function xs(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=20;class Ns extends Si{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ds(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Ms(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function Os(e,t){return Fs()._set(Vs(e),t)}async function Ps(e){const t=await Fs()._get(Vs(e));return t&&await Fs()._remove(Vs(e)),t}function Ls(e,t){var n,r;const i=js(t);if(i.includes("/__/auth/callback")){const t=Bs(i),s=t["firebaseError"]?Us(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Ms(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Rs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Fs(){return he(Qn)}function Vs(e){return pe("authEvent",e.config.apiKey,e.name)}function Us(e){try{return JSON.parse(e)}catch(t){return null}}function js(e){const t=Bs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Bs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Bs(i)["link"];return s||i||r||n||e}function Bs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=500;class zs{constructor(){this._redirectPersistence=Yn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Ns(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){w(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){Cs(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),hi(),await this._originValidation(e);const s=Ds(e,n,r);await Os(e,s);const o=await Es(e,s,t),a=await Ss(o);return ks(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=_s(),s=setTimeout((async()=>{await Ps(e),t.onEvent(Gs())}),qs),o=async n=>{clearTimeout(s);const r=await Ps(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Ls(r,n["url"])),t.onEvent(i||Gs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;_s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const $s=zs;function Gs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e,t){Ke(e)._logFramework(t)}var Hs="@firebase/auth-compat",Ws="0.4.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs=1e3;function Js(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Ys(){return"http:"===Js()||"https:"===Js()}function Xs(e=(0,i.z$)()){return!("file:"!==Js()&&"ionic:"!==Js()&&"capacitor:"!==Js()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Zs(){return(0,i.b$)()||(0,i.UG)()}function eo(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function to(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function no(e=(0,i.z$)()){return eo()||to(e)}function ro(){try{const e=self.localStorage,t=er();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!no()||(0,i.hl)()}catch(e){return io()&&(0,i.hl)()}return!1}function io(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function so(){return(Ys()||(0,i.ru)()||Xs())&&!Zs()&&ro()&&!io()}function oo(){return Xs()&&"undefined"!==typeof document}async function ao(){return!!oo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Qs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function co(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={LOCAL:"local",NONE:"none",SESSION:"session"},lo=T,ho="persistence";function fo(e,t){lo(Object.values(uo).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?lo(t!==uo.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?lo(t===uo.NONE,e,"unsupported-persistence-type"):io()?lo(t===uo.NONE||t===uo.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):lo(t===uo.NONE||ro(),e,"unsupported-persistence-type")}async function po(e){await e._initializationPromise;const t=go(),n=pe(ho,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function mo(e,t){const n=go();if(!n)return[];const r=pe(ho,e,t),i=n.getItem(r);switch(i){case uo.NONE:return[fe];case uo.LOCAL:return[Ir,Yn];case uo.SESSION:return[Yn];default:return[]}}function go(){var e;try{return(null===(e=co())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=T;class vo{constructor(){this.browserResolver=he(as),this.cordovaResolver=he($s),this.underlyingResolver=null,this._redirectPersistence=Yn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return oo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yo(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ao();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return e.unwrap()}function bo(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){return Eo(e)}function Io(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new ko(e,Pn(e,t))}else if(r){const e=Eo(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function Eo(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Wr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=Rt;break;case u.FACEBOOK:r=xt;break;case u.GITHUB:r=Nt;break;case u.TWITTER:r=Mt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Ot._create(n,o):mt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new At(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function To(e,t){return t.catch((t=>{throw t instanceof i.ZR&&Io(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:_o(e),additionalUserInfo:Nn(e),user:Co.getOrCreate(n)}}))}async function So(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>To(e,n.confirm(t))}}class ko{constructor(e,t){this.resolver=t,this.auth=bo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return To(wo(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._delegate=e,this.multiFactor=qn(e)}static getOrCreate(e){return Co.USER_MAP.has(e)||Co.USER_MAP.set(e,new Co(e)),Co.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return To(this.auth,Jt(this._delegate,e))}async linkWithPhoneNumber(e,t){return So(this.auth,$r(this._delegate,e,t))}async linkWithPopup(e){return To(this.auth,ii(this._delegate,e,vo))}async linkWithRedirect(e){return await po(Ke(this.auth)),wi(this._delegate,e,vo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return To(this.auth,Yt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return So(this.auth,Gr(this._delegate,e,t))}reauthenticateWithPopup(e){return To(this.auth,ri(this._delegate,e,vo))}async reauthenticateWithRedirect(e){return await po(Ke(this.auth)),yi(this._delegate,e,vo)}sendEmailVerification(e){return yn(this._delegate,e)}async unlink(e){return await $t(this._delegate,e),this}updateEmail(e){return _n(this._delegate,e)}updatePassword(e){return In(this._delegate,e)}updatePhoneNumber(e){return Hr(this._delegate,e)}updateProfile(e){return bn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return vn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Co.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao=T;class xo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Ao(n,"invalid-api-key",{appName:e.name}),Ao(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?vo:void 0;this._delegate=t.initialize({options:{persistence:No(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Co.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Qe(this._delegate,e,t)}applyActionCode(e){return an(this._delegate,e)}checkActionCode(e){return cn(this._delegate,e)}confirmPasswordReset(e,t){return on(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return To(this._delegate,ln(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return gn(this._delegate,e)}isSignInWithEmailLink(e){return fn(this._delegate,e)}async getRedirectResult(){Ao(so(),this._delegate,"operation-not-supported-in-this-environment");const e=await _i(this._delegate,vo);return e?To(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ks(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=Ro(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=Ro(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return dn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return sn(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(fo(this._delegate,e),e){case uo.SESSION:t=Yn;break;case uo.LOCAL:const e=await he(Ir)._isAvailable();t=e?Ir:Qn;break;case uo.NONE:t=fe;break;default:return w("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return To(this._delegate,jt(this._delegate))}signInWithCredential(e){return To(this._delegate,Qt(this._delegate,e))}signInWithCustomToken(e){return To(this._delegate,Zt(this._delegate,e))}signInWithEmailAndPassword(e,t){return To(this._delegate,hn(this._delegate,e,t))}signInWithEmailLink(e,t){return To(this._delegate,pn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return So(this._delegate,zr(this._delegate,e,t))}async signInWithPopup(e){return Ao(so(),this._delegate,"operation-not-supported-in-this-environment"),To(this._delegate,ni(this._delegate,e,vo))}async signInWithRedirect(e){return Ao(so(),this._delegate,"operation-not-supported-in-this-environment"),await po(this._delegate),mi(this._delegate,e,vo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return un(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Ro(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&Co.getOrCreate(e));return{next:s,error:t,complete:n}}function No(e,t){const n=mo(e,t);if("undefined"===typeof self||n.includes(Ir)||n.push(Ir),"undefined"!==typeof window)for(const r of[Qn,Yn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.Persistence=uo;class Do{constructor(){this.providerId="phone",this._delegate=new Wr(wo(r.Z.auth()))}static credential(e,t){return Wr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Do.PHONE_SIGN_IN_METHOD=Wr.PHONE_SIGN_IN_METHOD,Do.PROVIDER_ID=Wr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=T;class Po{constructor(e,t,n=r.Z.app()){var i;Oo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new jr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="auth-compat";function Mo(e){e.INTERNAL.registerComponent(new c.wA(Lo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new xo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:St,FacebookAuthProvider:xt,GithubAuthProvider:Nt,GoogleAuthProvider:Rt,OAuthProvider:At,SAMLAuthProvider:Lt,PhoneAuthProvider:Do,PhoneMultiFactorGenerator:ls,RecaptchaVerifier:Po,TwitterAuthProvider:Mt,Auth:xo,AuthCredential:et,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Hs,Ws)}Mo(r.Z)},476:function(e,t,n){"use strict";n(8675),n(3408),n(4590),n(3462),n(1439),n(7585),n(5315);var r,i=n(2661),s=(n(1703),n(7658),n(2801),n(1804)),o=n(7142),a=n(5168),c=n(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||m(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",(()=>{}),t),d.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=N().indexOf(e)}function O(e){return O[" "](e),e}function P(e,t){var n=_r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}O[" "]=function(){};var L,M,F=D("Opera"),V=D("Trident")||D("MSIE"),U=D("Edge"),j=U||V,B=D("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),q=-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge");function z(){var e=d.document;return e?e.documentMode:void 0}e:{var $="",G=function(){var e=N();return B?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&($=G?G[1]:""),V){var K=z();if(null!=K&&K>parseFloat($)){L=String(K);break e}}L=$}if(d.document&&V){var H=z();M=H||(parseInt(L,10)||void 0)}else M=void 0;var W=M;function Q(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{O(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:J[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.$.h.call(this)}}I(Q,A);var J={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),X=0;function Z(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function ee(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function te(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ne(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function re(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ee(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ce(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Z(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,n,r,i){if(r&&r.once)return pe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,r,i);return null}return n=_e(n),e&&e[Y]?e.O(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!1,r,i)}function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=we(e);if(a||(e[ue]=a=new oe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fe(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ye(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function pe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[Y]?e.P(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!0,r,i)}function me(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=_e(n),e&&e[Y]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ce(s,n,r,i),-1<n&&(ee(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=we(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ce(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Y])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ye(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=we(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):ee(e)}}}function ye(e){return e in le?le[e]:le[e]="on"+e}function ve(e,t){if(e.fa)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function we(e){return e=e[ue],e instanceof oe?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Ie(){E.call(this),this.i=new oe(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),se(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ae(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Ie,E),Ie.prototype[Y]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ee(n[r]);delete t.g[e],t.h--}}this.J=null},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=d.JSON.stringify;class ke{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ce(){var e=Le;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=xe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe=new ke((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ne(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function De(e){d.setTimeout((()=>{throw e}),0)}let Oe,Pe=!1,Le=new Ae,Me=()=>{const e=d.Promise.resolve(void 0);Oe=()=>{e.then(Fe)}};var Fe=()=>{for(var e;e=Ce();){try{e.h.call(e.g)}catch(n){De(n)}var t=xe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pe=!1};function Ve(e,t){Ie.call(this),this.h=e||1,this.g=t||d,this.j=b(this.qb,this),this.l=Date.now()}function Ue(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function je(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Be(e){e.g=je((()=>{e.g=null,e.i&&(e.i=!1,Be(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ve,Ie),r=Ve.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ue(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ve.$.N.call(this),Ue(this),delete this.g};class qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){E.call(this),this.h=e,this.g={}}I(ze,E);var $e=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&($e[0]=n.toString()),n=$e);for(var i=0;i<n.length;i++){var s=he(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ke(e){te(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function He(){this.g=!0}function We(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Xe(e,n)+(r?" "+r:"")}))}function Ye(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Xe(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(a){return t}}ze.prototype.N=function(){ze.$.N.call(this),Ke(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},He.prototype.Ea=function(){this.g=!1},He.prototype.info=function(){};var Ze={},et=null;function tt(){return et=et||new Ie}function nt(e){A.call(this,Ze.Ta,e)}function rt(e){const t=tt();Ee(t,new nt(t))}function it(e,t){A.call(this,Ze.STAT_EVENT,e),this.stat=t}function st(e){const t=tt();Ee(t,new it(t,e))}function ot(e,t){A.call(this,Ze.Ua,e),this.size=t}function at(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}Ze.Ta="serverreachability",I(nt,A),Ze.STAT_EVENT="statevent",I(it,A),Ze.Ua="timingevent",I(ot,A);var ct={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ht(e){return e.h||(e.h=e.i())}function dt(){}lt.prototype.h=null;var ft,pt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mt(){A.call(this,"d")}function gt(){A.call(this,"c")}function yt(){}function vt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ze(this),this.P=bt,e=j?125:void 0,this.V=new Ve(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}I(mt,A),I(gt,A),I(yt,lt),yt.prototype.g=function(){return new XMLHttpRequest},yt.prototype.i=function(){return{}},ft=new yt;var bt=45e3,_t={},It={};function Et(e,t,n){e.L=1,e.v=Gt(jt(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),At(e),e.A=jt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new wt,e.g=lr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new qe(b(e.Pa,e,e.g),e.O)),Ge(e.U,e.g,"readystatechange",e.nb),t=e.I?re(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),rt(),We(e.j,e.u,e.A,e.m,e.W,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function kt(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Ct(e,n),r==It){4==t&&(e.o=4,st(14),i=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(r==_t){e.o=4,st(15),Je(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Je(e.j,e.m,r,null),Ot(e,r)}St(e)&&r!=It&&r!=_t&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(t),t.M=!0,st(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Nt(e))}function Ct(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?_t:(r+=1,r+n>t.length?It:(t=t.slice(r,r+n),e.C=r+n,t)))}function At(e){e.Y=Date.now()+e.P,xt(e,e.P)}function xt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(b(e.lb,e),t)}function Rt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.H||e.J||sr(e.l,e)}function Dt(e){Rt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ue(e.V),Ke(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ot(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||fn(n.i,e)))if(!e.K&&fn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ir(n),Hn(n)}tr(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(b(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ar(n,11)}else if((e.K||n.g==e)&&ir(n),!R(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(pn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,$t(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){mn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Rt(a),At(a)),r.g=o}else er(r);0<n.j.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||ar(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ar(n,7):Kn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}rt(4)}catch(u){}}function Pt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Lt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Lt(e),r=Pt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=vt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Un(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Un(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=l||7==t||rt(8==t||0>=h?3:2),Rt(this);var n=this.g.da();this.ca=n;t:if(St(this)){var r=jn(this.g);e="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Nt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,st(12),Dt(this),Nt(this);break e}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,n)}this.S?(kt(this,l,o),j&&this.i&&3==l&&(Ge(this.U,this.V,"tick",this.mb),this.V.start())):(Je(this.j,this.m,o,null),Ot(this,o)),4==l&&Dt(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,At(this)))}else Bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Dt(this),Nt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Un(this.g),t=this.g.ja();this.C<t.length&&(Rt(this),kt(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.J=!0,Dt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ye(this.j,this.A),2!=this.L&&(rt(),st(17)),Dt(this),this.o=2,Nt(this)):xt(this,this.Y-e)};var Ft=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,Bt(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l;var t=e.i,n=new en;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zt(this,n),this.o=e.o}else e&&(t=String(e).match(Ft))?(this.h=!1,Bt(this,t[1]||"",!0),this.s=Kt(t[2]||""),this.g=Kt(t[3]||"",!0),qt(this,t[4]),this.l=Kt(t[5]||"",!0),zt(this,t[6]||"",!0),this.o=Kt(t[7]||"")):(this.h=!1,this.i=new en(null,this.h))}function jt(e){return new Ut(e)}function Bt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zt(e,t,n){t instanceof en?(e.i=t,an(e.i,e.h)):(n||(t=Ht(t,Xt)),e.i=new en(t,e.h))}function $t(e,t,n){e.i.set(t,n)}function Gt(e){return $t(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ht(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ht(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ht(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ht(n,"/"==n.charAt(0)?Yt:Jt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ht(n,Zt)),e.join("")};var Qt=/[#\/\?@]/g,Jt=/[#\?:]/g,Yt=/[#\?]/g,Xt=/[#\?@]/g,Zt=/#/g;function en(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function nn(e,t){tn(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rn(e,t){return tn(e),t=on(e,t),e.g.has(t)}function sn(e,t,n){nn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),k(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function an(e,t){t&&!e.j&&(tn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(nn(this,t),sn(this,n,e))}),e)),e.j=t}r=en.prototype,r.add=function(e,t){tn(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){tn(this);let t=[];if("string"===typeof e)rn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return tn(this),this.i=null,e=on(this,e),rn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.g=e,this.map=t}};function un(e){this.l=e||ln,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function hn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dn(e){return e.h?1:e.g?e.g.size:0}function fn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pn(e,t){e.g?e.g.add(t):e.h=t}function mn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return k(e.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var yn=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function vn(){this.g=new yn}function wn(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;p(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function bn(e,t){const n=new He;if(d.Image){const r=new Image;r.onload=_(_n,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(_n,n,r,"TestLoadImage: error",!1,t),r.onabort=_(_n,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(_n,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function _n(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function In(e){this.l=e.fc||null,this.j=e.ob||!1}function En(e,t){Ie.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(In,lt),In.prototype.g=function(){return new En(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),I(En,Ie);var Tn=0;function Sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kn(this):Cn(this),3==this.readyState&&Sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,kn(this))},r.Ya=function(e){this.g&&(this.response=e,kn(this))},r.ka=function(){this.g&&kn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=d.JSON.parse;function xn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}I(xn,Ie);var Rn="",Nn=/^https?$/i,Dn=["POST","PUT"];function On(e){return V&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ln(e),Fn(e)}function Ln(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Un(e)||2!=e.da()))if(e.v&&4==Un(e))je(e.La,0,e);else if(Ee(e,"readystatechange"),4==Un(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Ft)[1]||null;!i&&d.self&&d.self.location&&(i=d.self.location.protocol.slice(0,-1)),r=!Nn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Un(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Ln(e)}}finally{Fn(e)}}}function Fn(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Un(e){return e.g?e.g.readyState:0}function jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Qr){return null}}function Bn(e){const t={};e=(e.g&&2<=Un(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(R(e[r]))continue;var n=Ne(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ne(t,(function(e){return e.join(", ")}))}function qn(e){let t="";return te(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):$t(e,t,n))}function $n(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gn(e){this.Ga=0,this.j=[],this.l=new He,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,e),this.hb=$n("retryDelaySeedMs",1e4,e),this.eb=$n("forwardChannelMaxRetries",2,e),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new un(e&&e.concurrentRequestLimit),this.Ja=new vn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(e){if(Wn(e),3==e.H){var t=e.W++,n=jt(e.I);if($t(n,"SID",e.K),$t(n,"RID",t),$t(n,"TYPE","terminate"),Xn(e,n),t=new vt(e,e.l,t),t.L=2,t.v=Gt(jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=lr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),At(t)}cr(e)}function Hn(e){e.g&&(nr(e),e.g.cancel(),e.g=null)}function Wn(e){Hn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ir(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Qn(e){if(!hn(e.i)&&!e.m){e.m=!0;var t=e.Na;Oe||Me(),Pe||(Oe(),Pe=!0),Le.add(t,e),e.C=0}}function Jn(e,t){return!(dn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=at(b(e.Na,e,t),or(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.W++;const r=jt(e.I);$t(r,"SID",e.K),$t(r,"RID",n),$t(r,"AID",e.V),Xn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new vt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Zn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),pn(e.i,n),Et(n,r,t)}function Xn(e,t){e.na&&te(e.na,(function(e,n){$t(t,n,e)})),e.h&&Mt({},(function(e,n){$t(t,n,e)}))}function Zn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?b(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{wn(a,e,"req"+n+"_")}catch(ci){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function er(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oe||Me(),Pe||(Oe(),Pe=!0),Le.add(t,e),e.A=0}}function tr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(b(e.Ma,e),or(e,e.A)),e.A++,!0)}function nr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function rr(e){e.g=new vt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=jt(e.wa);$t(t,"RID","rpc"),$t(t,"SID",e.K),$t(t,"AID",e.V),$t(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&$t(t,"TO",e.qa),$t(t,"TYPE","xmlhttp"),Xn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Gt(jt(t)),n.s=null,n.S=!0,Tt(n,e)}function ir(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){ir(e),nr(e),e.g=null;var r=2}else{if(!fn(e.i,t))return;n=t.F,mn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=tt(),Ee(r,new ot(r,n)),Qn(e)}else er(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Jn(e,t)||2==r&&tr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ar(e,5);break;case 4:ar(e,10);break;case 3:ar(e,6);break;default:ar(e,2)}}function or(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ar(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=b(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Bt(n,"https"),Gt(n)),bn(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),cr(e),Wn(e)}function cr(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(C(e.ma,t),C(e.ma,e.j),e.i.i.length=0,k(e.j),e.j.length=0),e.h.ya()}}function ur(e,t,n){var r=n instanceof Ut?jt(n):new Ut(n);if(""!=r.g)t&&(r.g=t+"."+r.g),qt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ut(null);r&&Bt(s,r),t&&(s.g=t),i&&qt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&$t(r,n,t),$t(r,"VER",e.ra),Xn(e,r),r}function lr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xn(new In({ob:!0})):new xn(e.va),t.Oa(e.J),t}function hr(){}function dr(){if(V&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function fr(e,t){Ie.call(this),this.g=new Gn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function pr(e){mt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){gt.call(this),this.status=1}function gr(e){this.g=e}function yr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function wr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function br(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=xn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ht(this.u):ht(ft),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Pn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=S(Dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vn(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=je(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),xn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=re(s),se(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zn(this,i,t),n=jt(this.I),$t(n,"RID",e),$t(n,"CVER",22),this.F&&$t(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(qn(s)))+"&"+t:this.o&&zn(n,this.o,s)),pn(this.i,i),this.bb&&$t(n,"TYPE","init"),this.P?($t(n,"$req",t),$t(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Yn(this,e):0==this.j.length||hn(this.i)||Yn(this))},r.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Hn(this),rr(this))},r.ib=function(){null!=this.v&&(this.v=null,Hn(this),tr(this),st(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=hr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},dr.prototype.g=function(e,t){return new fr(e,t)},I(fr,Ie),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ur(e,null,e.Y),Qn(e)},fr.prototype.close=function(){Kn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Se(e),e=n);t.j.push(new cn(t.fb++,e)),3==t.H&&Qn(t)},fr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,fr.$.N.call(this)},I(pr,mt),I(mr,gt),I(gr,hr),gr.prototype.Ba=function(){Ee(this.g,"a")},gr.prototype.Aa=function(e){Ee(this.g,new pr(e))},gr.prototype.za=function(e){Ee(this.g,new mr)},gr.prototype.ya=function(){Ee(this.g,"b")},I(vr,yr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)wr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){wr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){wr(this,r),i=0;break}}this.h=i,this.i+=t},vr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var _r={};function Ir(e){return-128<=e&&128>e?P(e,(function(e){return new br([0|e],0>e?-1:0)})):new br([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return kr;if(0>e)return Nr(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new br(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Nr(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=kr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Sr=4294967296,kr=Ir(0),Cr=Ir(1),Ar=Ir(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Rr(e){return-1==e.h}function Nr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new br(n,~e.h).add(Cr)}function Dr(e,t){return e.add(Nr(t))}function Or(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Pr(e,t){this.g=e,this.h=t}function Lr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Pr(kr,kr);if(Rr(e))return t=Lr(Nr(e),t),new Pr(Nr(t.g),Nr(t.h));if(Rr(t))return t=Lr(e,Nr(t)),new Pr(Nr(t.g),t.h);if(30<e.g.length){if(Rr(e)||Rr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=Mr(n),r=Mr(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return t=Dr(e,i.R(t)),new Pr(i,t)}for(i=kr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Rr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);xr(s)&&(s=Cr),i=i.add(s),e=Dr(e,o)}return new Pr(i,e)}function Mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new br(n,e.h)}function Fr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new br(i,e.h)}r=br.prototype,r.ea=function(){if(Rr(this))return-Nr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(Rr(this))return"-"+Nr(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Lr(n,t).g;n=Dr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Dr(this,e),Rr(e)?-1:xr(e)?0:1},r.abs=function(){return Rr(this)?Nr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return kr;if(Rr(this))return Rr(e)?Nr(this).R(Nr(e)):Nr(Nr(this).R(e));if(Rr(e))return Nr(this.R(Nr(e)));if(0>this.X(Ar)&&0>e.X(Ar))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Or(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Or(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Or(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Or(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new br(n,0)},r.gb=function(e){return Lr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new br(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new br(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new br(n,this.h^e.h)},dr.prototype.createWebChannel=dr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ut.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Er,br.fromString=Tr;var Vr=l.createWebChannelTransport=function(){return new dr},Ur=l.getStatEventTarget=function(){return tt()},jr=l.ErrorCode=ct,Br=l.EventType=ut,qr=l.Event=Ze,zr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$r=l.FetchXmlHttpFactory=In,Gr=l.WebChannel=dt,Kr=l.XhrIo=xn,Hr=l.Md5=vr,Wr=l.Integer=br;const Qr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jr.UNAUTHENTICATED=new Jr(null),Jr.GOOGLE_CREDENTIALS=new Jr("google-credentials-uid"),Jr.FIRST_PARTY=new Jr("first-party-uid"),Jr.MOCK_USER=new Jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yr="9.22.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new a.Yd("@firebase/firestore");function Zr(){return Xr.logLevel}function ei(e){Xr.setLogLevel(e)}function ti(e,...t){if(Xr.logLevel<=a["in"].DEBUG){const n=t.map(ii);Xr.debug(`Firestore (${Yr}): ${e}`,...n)}}function ni(e,...t){if(Xr.logLevel<=a["in"].ERROR){const n=t.map(ii);Xr.error(`Firestore (${Yr}): ${e}`,...n)}}function ri(e,...t){if(Xr.logLevel<=a["in"].WARN){const n=t.map(ii);Xr.warn(`Firestore (${Yr}): ${e}`,...n)}}function ii(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e="Unexpected state"){const t=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+e;throw ni(t),new Error(t)}function oi(e,t){e||si()}function ai(e,t){e||si()}function ci(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class li extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jr.UNAUTHENTICATED)))}shutdown(){}}class pi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class mi{constructor(e){this.t=e,this.currentUser=Jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hi,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ti("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ti("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ti("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oi("string"==typeof t.accessToken),new di(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oi(null===e||"string"==typeof e),new Jr(e)}}class gi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Jr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new gi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ti("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ti("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ti("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ti("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(oi("string"==typeof e.token),this.T=e.token,new vi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=bi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ii(e,t){return e<t?-1:e>t?1:0}function Ei(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Ti(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Si.fromMillis(Date.now())}static fromDate(e){return Si.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Si(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ii(this.nanoseconds,e.nanoseconds):Ii(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ki(e)}static min(){return new ki(new Si(0,0))}static max(){return new ki(new Si(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,n){void 0===t?t=0:t>e.length&&si(),void 0===n?n=e.length-t:n>e.length-t&&si(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ci.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ai extends Ci{construct(e,t,n){return new Ai(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ai(t)}static emptyPath(){return new Ai([])}}const xi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ri extends Ci{construct(e,t,n){return new Ri(e,t,n)}static isValidIdentifier(e){return xi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ri.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ri(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new li(ui.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new li(ui.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new li(ui.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new li(ui.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ri(t)}static emptyPath(){return new Ri([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.path=e}static fromPath(e){return new Ni(Ai.fromString(e))}static fromName(e){return new Ni(Ai.fromString(e).popFirst(5))}static empty(){return new Ni(Ai.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ai.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ai.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ni(new Ai(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Oi(e){return e.fields.find((e=>2===e.kind))}function Pi(e){return e.fields.filter((e=>2!==e.kind))}Di.UNKNOWN_ID=-1;class Li{constructor(e,t){this.fieldPath=e,this.kind=t}}class Mi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Mi(0,Ui.min())}}function Fi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ki.fromTimestamp(1e9===r?new Si(n+1,0):new Si(n,r));return new Ui(i,Ni.empty(),t)}function Vi(e){return new Ui(e.readTime,e.key,-1)}class Ui{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ui(ki.min(),Ni.empty(),-1)}static max(){return new Ui(ki.max(),Ni.empty(),-1)}}function ji(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ni.comparator(e.documentKey,t.documentKey),0!==n?n:Ii(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(e){if(e.code!==ui.FAILED_PRECONDITION||e.message!==Bi)throw e;ti("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $i(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $i?t:$i.resolve(t)}catch(e){return $i.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$i.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$i.reject(t)}static resolve(e){return new $i(((t,n)=>{t(e)}))}static reject(e){return new $i(((t,n)=>{n(e)}))}static waitFor(e){return new $i(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=$i.resolve(!1);for(const n of e)t=t.next((e=>e?$i.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new $i(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new $i(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new hi,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Wi(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=Zi(t.target.error);this.v.reject(new Wi(e,n))}}static open(e,t,n,r){try{return new Gi(t,e.transaction(r,n))}catch(e){throw new Wi(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(ti("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ji(t)}}class Ki{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Ki.S((0,c.z$)())&&ni("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ti("SimpleDb","Removing database:",e),Yi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(Ki.C())return!0;const e=(0,c.z$)(),t=Ki.S(e),n=0<t&&t<10,r=Ki.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(ti("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Wi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new li(ui.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new li(ui.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Wi(e,r))},r.onupgradeneeded=e=>{ti("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next((()=>{ti("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=Gi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),$i.reject(e)))).toPromise();return s.catch((()=>{})),await t.R,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ti("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Hi{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Yi(this.L.delete())}}class Wi extends li{constructor(e,t){super(ui.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qi(e){return"IndexedDbTransactionError"===e.name}class Ji{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ti("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ti("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Yi(n)}add(e){return ti("SimpleDb","ADD",this.store.name,e,e),Yi(this.store.add(e))}get(e){return Yi(this.store.get(e)).next((t=>(void 0===t&&(t=null),ti("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ti("SimpleDb","DELETE",this.store.name,e),Yi(this.store.delete(e))}count(){return ti("SimpleDb","COUNT",this.store.name),Yi(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new $i(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new $i(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ti("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new $i(((n,r)=>{t.onerror=e=>{const t=Zi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new $i(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Hi(i),o=t(i.primaryKey,i.value,s);if(o instanceof $i){const e=o.catch((e=>(s.done(),$i.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>$i.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Yi(e){return new $i(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Zi(e.target.error);n(t)}}))}let Xi=!1;function Zi(e){const t=Ki.S((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new li("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xi||(Xi=!0,setTimeout((()=>{throw e}),0)),e}}return e}class es{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){ti("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ti("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Qi(e)?ti("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await zi(e)}await this.et(6e4)}))}}class ts{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return $i.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ti("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(ti("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Vi(t);ji(r,n)>0&&(n=r)})),new Ui(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function rs(e){return null==e}function is(e){return 0===e&&1/e==-1/0}function ss(e){return"number"==typeof e&&Number.isInteger(e)&&!is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=cs(t)),t=as(e.get(n),t);return cs(t)}function as(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function cs(e){return e+""}function us(e){const t=e.length;if(oi(t>=2),2===t)return oi(""===e.charAt(0)&&""===e.charAt(1)),Ai.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&si(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:si()}s=t+2}return new Ai(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns.ct=-1;const ls=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t){return[e,os(t)]}function ds(e,t,n){return[e,os(t),n]}const fs={},ps=["prefixPath","collectionGroup","readTime","documentId"],ms=["prefixPath","collectionGroup","documentId"],gs=["collectionGroup","readTime","prefixPath","documentId"],ys=["canonicalId","targetId"],vs=["targetId","path"],ws=["path","targetId"],bs=["collectionId","parent"],_s=["indexId","uid"],Is=["uid","sequenceNumber"],Es=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ts=["indexId","uid","orderedDocumentKey"],Ss=["userId","collectionPath","documentId"],ks=["userId","collectionPath","largestBatchId"],Cs=["userId","collectionGroup","largestBatchId"],As=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xs=[...As,"documentOverlays"],Rs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ns=Rs,Ds=[...Ns,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends qi{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function Ps(e,t){const n=ci(e);return Ki.M(n.ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ms(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.comparator=e,this.root=t||js.EMPTY}insert(e,t){return new Vs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,js.BLACK,null,null))}remove(e){return new Vs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,js.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class js{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:js.RED,this.left=null!=r?r:js.EMPTY,this.right=null!=i?i:js.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new js(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return js.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return js.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,js.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,js.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const e=this.left.check();if(e!==this.right.check())throw si();return e+(this.isRed()?0:1)}}js.EMPTY=null,js.RED=!0,js.BLACK=!1,js.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(e,t,n,r,i){return this}insert(e,t,n){return new js(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(e){this.comparator=e,this.data=new Vs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qs(this.data.getIterator())}getIteratorFrom(e){return new qs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Bs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bs(this.comparator);return t.data=e,t}}class qs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function zs(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.fields=e,e.sort(Ri.comparator)}static empty(){return new $s([])}unionWith(e){let t=new Bs(Ri.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new $s(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Gs("Invalid base64 string: "+e):e}}(e);return new Hs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ii(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hs.EMPTY_BYTE_STRING=new Hs("");const Ws=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qs(e){if(oi(!!e),"string"==typeof e){let t=0;const n=Ws.exec(e);if(oi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Js(e.seconds),nanos:Js(e.nanos)}}function Js(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ys(e){return"string"==typeof e?Hs.fromBase64String(e):Hs.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zs(e){const t=e.mapValue.fields.__previous_value__;return Xs(t)?Zs(t):t}function eo(e){const t=Qs(e.mapValue.fields.__local_write_time__.timestampValue);return new Si(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class no{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},io={nullValue:"NULL_VALUE"};function so(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xs(e)?4:bo(e)?9007199254740991:10:si()}function oo(e,t){if(e===t)return!0;const n=so(e);if(n!==so(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eo(e).isEqual(eo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qs(e.timestampValue),r=Qs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ys(e.bytesValue).isEqual(Ys(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Js(e.geoPointValue.latitude)===Js(t.geoPointValue.latitude)&&Js(e.geoPointValue.longitude)===Js(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Js(e.integerValue)===Js(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Js(e.doubleValue),r=Js(t.doubleValue);return n===r?is(n)===is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ei(e.arrayValue.values||[],t.arrayValue.values||[],oo);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ls(n)!==Ls(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!oo(n[i],r[i])))return!1;return!0}(e,t);default:return si()}}function ao(e,t){return void 0!==(e.values||[]).find((e=>oo(e,t)))}function co(e,t){if(e===t)return 0;const n=so(e),r=so(t);if(n!==r)return Ii(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ii(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Js(e.integerValue||e.doubleValue),r=Js(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return uo(e.timestampValue,t.timestampValue);case 4:return uo(eo(e),eo(t));case 5:return Ii(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ys(e),r=Ys(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ii(n[i],r[i]);if(0!==e)return e}return Ii(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ii(Js(e.latitude),Js(t.latitude));return 0!==n?n:Ii(Js(e.longitude),Js(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=co(n[i],r[i]);if(e)return e}return Ii(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ro.mapValue&&t===ro.mapValue)return 0;if(e===ro.mapValue)return 1;if(t===ro.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ii(r[o],s[o]);if(0!==e)return e;const t=co(n[r[o]],i[s[o]]);if(0!==t)return t}return Ii(r.length,s.length)}(e.mapValue,t.mapValue);default:throw si()}}function uo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ii(e,t);const n=Qs(e),r=Qs(t),i=Ii(n.seconds,r.seconds);return 0!==i?i:Ii(n.nanos,r.nanos)}function lo(e){return ho(e)}function ho(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ys(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ni.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ho(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ho(e.fields[i])}`;return n+"}"}(e.mapValue):si();var t,n}function fo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function po(e){return!!e&&"integerValue"in e}function mo(e){return!!e&&"arrayValue"in e}function go(e){return!!e&&"nullValue"in e}function yo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vo(e){return!!e&&"mapValue"in e}function wo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ms(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=wo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=wo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function bo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function _o(e){return"nullValue"in e?io:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?fo(no.empty(),Ni.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:si()}function Io(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?fo(no.empty(),Ni.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ro:si()}function Eo(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function To(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.value=e}static empty(){return new So({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(t)}setAll(e){let t=Ri.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=wo(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());vo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ms(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new So(wo(this.value))}}function ko(e){const t=[];return Ms(e.fields,((e,n)=>{const r=new Ri([e]);if(vo(n)){const e=ko(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new $s(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Co{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Co(e,0,ki.min(),ki.min(),ki.min(),So.empty(),0)}static newFoundDocument(e,t,n,r){return new Co(e,1,t,ki.min(),n,r,0)}static newNoDocument(e,t){return new Co(e,2,t,ki.min(),ki.min(),So.empty(),0)}static newUnknownDocument(e,t){return new Co(e,3,t,ki.min(),ki.min(),So.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ki.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=So.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=So.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ki.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Co&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Co(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.position=e,this.inclusive=t}}function xo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ni.comparator(Ni.fromName(o.referenceValue),n.key):co(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ro(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function Do(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{}class Po extends Oo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new $o(e,t,n):"array-contains"===t?new Wo(e,n):"in"===t?new Qo(e,n):"not-in"===t?new Jo(e,n):"array-contains-any"===t?new Yo(e,n):new Po(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Go(e,n):new Ko(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(co(t,this.value)):null!==t&&so(this.value)===so(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lo extends Oo{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Lo(e,t)}matches(e){return Mo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Mo(e){return"and"===e.op}function Fo(e){return"or"===e.op}function Vo(e){return Uo(e)&&Mo(e)}function Uo(e){for(const t of e.filters)if(t instanceof Lo)return!1;return!0}function jo(e){if(e instanceof Po)return e.field.canonicalString()+e.op.toString()+lo(e.value);if(Vo(e))return e.filters.map((e=>jo(e))).join(",");{const t=e.filters.map((e=>jo(e))).join(",");return`${e.op}(${t})`}}function Bo(e,t){return e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.field.isEqual(t.field)&&oo(e.value,t.value)}(e,t):e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Bo(n,t.filters[r])),!0)}(e,t):void si()}function qo(e,t){const n=e.filters.concat(t);return Lo.create(n,e.op)}function zo(e){return e instanceof Po?function(e){return`${e.field.canonicalString()} ${e.op} ${lo(e.value)}`}(e):e instanceof Lo?function(e){return e.op.toString()+" {"+e.getFilters().map(zo).join(" ,")+"}"}(e):"Filter"}class $o extends Po{constructor(e,t,n){super(e,t,n),this.key=Ni.fromName(n.referenceValue)}matches(e){const t=Ni.comparator(e.key,this.key);return this.matchesComparison(t)}}class Go extends Po{constructor(e,t){super(e,"in",t),this.keys=Ho("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ko extends Po{constructor(e,t){super(e,"not-in",t),this.keys=Ho("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ho(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ni.fromName(e.referenceValue)))}class Wo extends Po{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mo(t)&&ao(t.arrayValue,this.value)}}class Qo extends Po{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ao(this.value.arrayValue,t)}}class Jo extends Po{constructor(e,t){super(e,"not-in",t)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ao(this.value.arrayValue,t)}}class Yo extends Po{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ao(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Zo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Xo(e,t,n,r,i,s,o)}function ea(e){const t=ci(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>jo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>lo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>lo(e))).join(",")),t.dt=e}return t.dt}function ta(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Do(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ro(e.startAt,t.startAt)&&Ro(e.endAt,t.endAt)}function na(e){return Ni.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ra(e,t){return e.filters.filter((e=>e instanceof Po&&e.field.isEqual(t)))}function ia(e,t,n){let r=io,i=!0;for(const s of ra(e,t)){let e=io,t=!0;switch(s.op){case"<":case"<=":e=_o(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=io}Eo({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function sa(e,t,n){let r=ro,i=!0;for(const s of ra(e,t)){let e=ro,t=!0;switch(s.op){case">=":case">":e=Io(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=ro}To({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];To({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function aa(e,t,n,r,i,s,o,a){return new oa(e,t,n,r,i,s,o,a)}function ca(e){return new oa(e)}function ua(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function la(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ha(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function da(e){return null!==e.collectionGroup}function fa(e){const t=ci(e);if(null===t.wt){t.wt=[];const e=ha(t),n=la(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new No(e)),t.wt.push(new No(Ri.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new No(Ri.keyField(),e))}}}return t.wt}function pa(e){const t=ci(e);if(!t._t)if("F"===t.limitType)t._t=Zo(t.path,t.collectionGroup,fa(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of fa(t)){const t="desc"===i.dir?"asc":"desc";e.push(new No(i.field,t))}const n=t.endAt?new Ao(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ao(t.startAt.position,t.startAt.inclusive):null;t._t=Zo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ma(e,t){t.getFirstInequalityField(),ha(e);const n=e.filters.concat([t]);return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ga(e,t,n){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ya(e,t){return ta(pa(e),pa(t))&&e.limitType===t.limitType}function va(e){return`${ea(pa(e))}|lt:${e.limitType}`}function wa(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>zo(e))).join(", ")}]`),rs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>lo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>lo(e))).join(",")),`Target(${t})`}(pa(e))}; limitType=${e.limitType})`}function ba(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ni.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of fa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,fa(e),t))&&!(e.endAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,fa(e),t))}(e,t)}function _a(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ia(e){return(t,n)=>{let r=!1;for(const i of fa(e)){const e=Ea(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ea(e,t,n){const r=e.field.isKeyField()?Ni.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?co(r,i):si()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Fs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Vs(Ni.comparator);function ka(){return Sa}const Ca=new Vs(Ni.comparator);function Aa(...e){let t=Ca;for(const n of e)t=t.insert(n.key,n);return t}function xa(e){let t=Ca;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ra(){return Da()}function Na(){return Da()}function Da(){return new Ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Oa=new Vs(Ni.comparator),Pa=new Bs(Ni.comparator);function La(...e){let t=Pa;for(const n of e)t=t.add(n);return t}const Ma=new Bs(Ii);function Fa(){return Ma}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(t)?"-0":t}}function Ua(e){return{integerValue:""+e}}function ja(e,t){return ss(t)?Ua(t):Va(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function qa(e,t,n){return e instanceof Ga?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Xs(t)&&(t=Zs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ka?Ha(e,t):e instanceof Wa?Qa(e,t):function(e,t){const n=$a(e,t),r=Ya(n)+Ya(e.gt);return po(n)&&po(e.gt)?Ua(r):Va(e.serializer,r)}(e,t)}function za(e,t,n){return e instanceof Ka?Ha(e,t):e instanceof Wa?Qa(e,t):n}function $a(e,t){return e instanceof Ja?po(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ga extends Ba{}class Ka extends Ba{constructor(e){super(),this.elements=e}}function Ha(e,t){const n=Xa(t);for(const r of e.elements)n.some((e=>oo(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Wa extends Ba{constructor(e){super(),this.elements=e}}function Qa(e,t){let n=Xa(t);for(const r of e.elements)n=n.filter((e=>!oo(e,r)));return{arrayValue:{values:n}}}class Ja extends Ba{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Ya(e){return Js(e.integerValue||e.doubleValue)}function Xa(e){return mo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.field=e,this.transform=t}}function ec(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ka&&t instanceof Ka||e instanceof Wa&&t instanceof Wa?Ei(e.elements,t.elements,oo):e instanceof Ja&&t instanceof Ja?oo(e.gt,t.gt):e instanceof Ga&&t instanceof Ga}(e.transform,t.transform)}class tc{constructor(e,t){this.version=e,this.transformResults=t}}class nc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nc}static exists(e){return new nc(void 0,e)}static updateTime(e){return new nc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ic{}function sc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new mc(e.key,nc.none()):new lc(e.key,e.data,nc.none());{const n=e.data,r=So.empty();let i=new Bs(Ri.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new hc(e.key,r,new $s(i.toArray()),nc.none())}}function oc(e,t,n){e instanceof lc?function(e,t,n){const r=e.value.clone(),i=fc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof hc?function(e,t,n){if(!rc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=fc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(dc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ac(e,t,n,r){return e instanceof lc?function(e,t,n,r){if(!rc(e.precondition,t))return n;const i=e.value.clone(),s=pc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof hc?function(e,t,n,r){if(!rc(e.precondition,t))return n;const i=pc(e.fieldTransforms,r,t),s=t.data;return s.setAll(dc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return rc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function cc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=$a(r.transform,e||null);null!=i&&(null===n&&(n=So.empty()),n.set(r.field,i))}return n||null}function uc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ei(e,t,((e,t)=>ec(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class lc extends ic{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hc extends ic{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function fc(e,t,n){const r=new Map;oi(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,za(o,a,n[i]))}return r}function pc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,qa(e,s,t))}return r}class mc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&oc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ac(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ac(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Na();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=sc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ki.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),La())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,((e,t)=>uc(e,t)))&&Ei(this.baseMutations,e.baseMutations,((e,t)=>uc(e,t)))}}class vc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oi(e.mutations.length===n.length);let r=Oa;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new vc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c,Ic;function Ec(e){switch(e){default:return si();case ui.CANCELLED:case ui.UNKNOWN:case ui.DEADLINE_EXCEEDED:case ui.RESOURCE_EXHAUSTED:case ui.INTERNAL:case ui.UNAVAILABLE:case ui.UNAUTHENTICATED:return!1;case ui.INVALID_ARGUMENT:case ui.NOT_FOUND:case ui.ALREADY_EXISTS:case ui.PERMISSION_DENIED:case ui.FAILED_PRECONDITION:case ui.ABORTED:case ui.OUT_OF_RANGE:case ui.UNIMPLEMENTED:case ui.DATA_LOSS:return!0}}function Tc(e){if(void 0===e)return ni("GRPC error has no .code"),ui.UNKNOWN;switch(e){case _c.OK:return ui.OK;case _c.CANCELLED:return ui.CANCELLED;case _c.UNKNOWN:return ui.UNKNOWN;case _c.DEADLINE_EXCEEDED:return ui.DEADLINE_EXCEEDED;case _c.RESOURCE_EXHAUSTED:return ui.RESOURCE_EXHAUSTED;case _c.INTERNAL:return ui.INTERNAL;case _c.UNAVAILABLE:return ui.UNAVAILABLE;case _c.UNAUTHENTICATED:return ui.UNAUTHENTICATED;case _c.INVALID_ARGUMENT:return ui.INVALID_ARGUMENT;case _c.NOT_FOUND:return ui.NOT_FOUND;case _c.ALREADY_EXISTS:return ui.ALREADY_EXISTS;case _c.PERMISSION_DENIED:return ui.PERMISSION_DENIED;case _c.FAILED_PRECONDITION:return ui.FAILED_PRECONDITION;case _c.ABORTED:return ui.ABORTED;case _c.OUT_OF_RANGE:return ui.OUT_OF_RANGE;case _c.UNIMPLEMENTED:return ui.UNIMPLEMENTED;case _c.DATA_LOSS:return ui.DATA_LOSS;default:return si()}}(Ic=_c||(_c={}))[Ic.OK=0]="OK",Ic[Ic.CANCELLED=1]="CANCELLED",Ic[Ic.UNKNOWN=2]="UNKNOWN",Ic[Ic.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ic[Ic.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ic[Ic.NOT_FOUND=5]="NOT_FOUND",Ic[Ic.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ic[Ic.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ic[Ic.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ic[Ic.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ic[Ic.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ic[Ic.ABORTED=10]="ABORTED",Ic[Ic.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ic[Ic.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ic[Ic.INTERNAL=13]="INTERNAL",Ic[Ic.UNAVAILABLE=14]="UNAVAILABLE",Ic[Ic.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return kc}static getOrCreateInstance(){return null===kc&&(kc=new Sc),kc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let kc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Wr([4294967295,4294967295],0);function xc(e){const t=Cc().encode(e),n=new Hr;return n.update(t),new Uint8Array(n.digest())}function Rc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class Nc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Dc(`Invalid padding: ${t}`);if(n<0)throw new Dc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Dc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Dc(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Wr.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Wr.fromNumber(n)));return 1===r.compare(Ac)&&(r=new Wr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=xc(e),[n,r]=Rc(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Nc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=xc(e),[n,r]=Rc(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Dc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Pc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Oc(ki.min(),r,new Vs(Ii),ka(),La())}}class Pc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Pc(n,t,La(),La(),La())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Mc{constructor(e,t){this.targetId=e,this.Vt=t}}class Fc{constructor(e,t,n=Hs.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Vc{constructor(){this.St=0,this.Dt=Bc(),this.Ct=Hs.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=La(),t=La(),n=La();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:si()}})),new Pc(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Bc()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Uc{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ka(),this.zt=jc(),this.Wt=new Vs(Ii)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:si()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(na(s))if(0===r){const e=new Ni(s.path);this.Yt(n,e,Co.newNoDocument(e,ki.min()))}else oi(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Sc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Ys(i).toUint8Array()}catch(e){if(e instanceof Gs)return ri("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Nc(a,s,o)}catch(e){return ri(e instanceof Dc?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&na(i.target)){const t=new Ni(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Co.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=La();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Oc(e,t,this.Wt,this.jt,n);return this.jt=ka(),this.zt=jc(),this.Wt=new Vs(Ii),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Vc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Bs(Ii),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||ti("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Vc),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function jc(){return new Vs(Ni.comparator)}function Bc(){return new Vs(Ni.comparator)}const qc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),zc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),$c=(()=>{const e={and:"AND",or:"OR"};return e})();class Gc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kc(e,t){return e.useProto3Json||rs(t)?t:{value:t}}function Hc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Qc(e,t){return Hc(e,t.toTimestamp())}function Jc(e){return oi(!!e),ki.fromTimestamp(function(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}(e))}function Yc(e,t){return function(e){return new Ai(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Xc(e){const t=Ai.fromString(e);return oi(Tu(t)),t}function Zc(e,t){return Yc(e.databaseId,t.path)}function eu(e,t){const n=Xc(t);if(n.get(1)!==e.databaseId.projectId)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ni(iu(n))}function tu(e,t){return Yc(e.databaseId,t)}function nu(e){const t=Xc(e);return 4===t.length?Ai.emptyPath():iu(t)}function ru(e){return new Ai(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iu(e){return oi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function su(e,t,n){return{name:Zc(e,t),fields:n.value.mapValue.fields}}function ou(e,t,n){const r=eu(e,t.name),i=Jc(t.updateTime),s=t.createTime?Jc(t.createTime):ki.min(),o=new So({mapValue:{fields:t.fields}}),a=Co.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function au(e,t){return"found"in t?function(e,t){oi(!!t.found),t.found.name,t.found.updateTime;const n=eu(e,t.found.name),r=Jc(t.found.updateTime),i=t.found.createTime?Jc(t.found.createTime):ki.min(),s=new So({mapValue:{fields:t.found.fields}});return Co.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){oi(!!t.missing),oi(!!t.readTime);const n=eu(e,t.missing),r=Jc(t.readTime);return Co.newNoDocument(n,r)}(e,t):si()}function cu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:si()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(oi(void 0===t||"string"==typeof t),Hs.fromBase64String(t||"")):(oi(void 0===t||t instanceof Uint8Array),Hs.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ui.UNKNOWN:Tc(e.code);return new li(t,e.message||"")}(o);n=new Fc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=eu(e,r.document.name),s=Jc(r.document.updateTime),o=r.document.createTime?Jc(r.document.createTime):ki.min(),a=new So({mapValue:{fields:r.document.fields}}),c=Co.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Lc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=eu(e,r.document),s=r.readTime?Jc(r.readTime):ki.min(),o=Co.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=eu(e,r.document),s=r.removedTargetIds||[];n=new Lc([],s,i,null)}else{if(!("filter"in t))return si();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new bc(r,i),o=e.targetId;n=new Mc(o,s)}}return n}function uu(e,t){let n;if(t instanceof lc)n={update:su(e,t.key,t.value)};else if(t instanceof mc)n={delete:Zc(e,t.key)};else if(t instanceof hc)n={update:su(e,t.key,t.data),updateMask:Eu(t.fieldMask)};else{if(!(t instanceof gc))return si();n={verify:Zc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ka)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wa)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ja)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw si()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Qc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:si()}(e,t.precondition)),n}function lu(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?nc.updateTime(Jc(e.updateTime)):void 0!==e.exists?nc.exists(e.exists):nc.none()}(t.currentDocument):nc.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)oi("REQUEST_TIME"===t.setToServerValue),n=new Ga;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ka(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Wa(e)}else"increment"in t?n=new Ja(e,t.increment):si();const r=Ri.fromServerFormat(t.fieldPath);return new Za(r,n)}(e,t))):[];if(t.update){t.update.name;const i=eu(e,t.update.name),s=new So({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new $s(t.map((e=>Ri.fromServerFormat(e))))}(t.updateMask);return new hc(i,s,e,n,r)}return new lc(i,s,n,r)}if(t.delete){const r=eu(e,t.delete);return new mc(r,n)}if(t.verify){const r=eu(e,t.verify);return new gc(r,n)}return si()}function hu(e,t){return e&&e.length>0?(oi(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Jc(e.updateTime):Jc(t);return n.isEqual(ki.min())&&(n=Jc(t)),new tc(n,e.transformResults||[])}(e,t)))):[]}function du(e,t){return{documents:[tu(e,t.path)]}}function fu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=tu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Iu(Lo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:bu(e.field),direction:yu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Kc(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function pu(e){let t=nu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=gu(e);return t instanceof Lo&&Vo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new No(_u(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ao(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ao(n,t)}(n.endAt)),aa(t,i,o,s,a,"F",c,u)}function mu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function gu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_u(e.unaryFilter.field);return Po.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=_u(e.unaryFilter.field);return Po.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_u(e.unaryFilter.field);return Po.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_u(e.unaryFilter.field);return Po.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(e):void 0!==e.fieldFilter?function(e){return Po.create(_u(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Lo.create(e.compositeFilter.filters.map((e=>gu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return si()}}(e.compositeFilter.op))}(e):si()}function yu(e){return qc[e]}function vu(e){return zc[e]}function wu(e){return $c[e]}function bu(e){return{fieldPath:e.canonicalString()}}function _u(e){return Ri.fromServerFormat(e.fieldPath)}function Iu(e){return e instanceof Po?function(e){if("=="===e.op){if(yo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NAN"}};if(go(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(yo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NOT_NAN"}};if(go(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bu(e.field),op:vu(e.op),value:e.value}}}(e):e instanceof Lo?function(e){const t=e.getFilters().map((e=>Iu(e)));return 1===t.length?t[0]:{compositeFilter:{op:wu(e.op),filters:t}}}(e):si()}function Eu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Tu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,n,r,i=ki.min(),s=ki.min(),o=Hs.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Su(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.fe=e}}function Cu(e,t){let n;if(t.document)n=ou(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Ni.fromSegments(t.noDocument.path),r=Nu(t.noDocument.readTime);n=Co.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return si();{const e=Ni.fromSegments(t.unknownDocument.path),r=Nu(t.unknownDocument.version);n=Co.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Si(e[0],e[1]);return ki.fromTimestamp(t)}(t.readTime)),n}function Au(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:xu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Zc(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Hc(e,t.version.toTimestamp()),createTime:Hc(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ru(t.version)};else{if(!t.isUnknownDocument())return si();r.unknownDocument={path:n.path.toArray(),version:Ru(t.version)}}return r}function xu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ru(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Nu(e){const t=new Si(e.seconds,e.nanoseconds);return ki.fromTimestamp(t)}function Du(e,t){const n=(t.baseMutations||[]).map((t=>lu(e.fe,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>lu(e.fe,t))),i=Si.fromMillis(t.localWriteTimeMs);return new yc(t.batchId,i,n,r)}function Ou(e){const t=Nu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Nu(e.lastLimboFreeSnapshotVersion):ki.min();let r;var i;return void 0!==e.query.documents?(oi(1===(i=e.query).documents.length),r=pa(ca(nu(i.documents[0])))):r=function(e){return pa(pu(e))}(e.query),new Su(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Hs.fromBase64String(e.resumeToken))}function Pu(e,t){const n=Ru(t.snapshotVersion),r=Ru(t.lastLimboFreeSnapshotVersion);let i;i=na(t.target)?du(e.fe,t.target):fu(e.fe,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ea(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Lu(e){const t=pu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ga(t,t.limit,"L"):t}function Mu(e,t){return new wc(t.largestBatchId,lu(e.fe,t.overlayMutation))}function Fu(e,t){const n=t.path.lastSegment();return[e,os(t.path.popLast()),n]}function Vu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ru(r.readTime),documentKey:os(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{getBundleMetadata(e,t){return ju(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Nu(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return ju(e).put({bundleId:(n=t).id,createTime:Ru(Jc(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Bu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Lu(t.bundledQuery),readTime:Nu(t.readTime)};var t}))}saveNamedQuery(e,t){return Bu(e).put(function(e){return{name:e.name,readTime:Ru(Jc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ju(e){return Ps(e,"bundles")}function Bu(e){return Ps(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new qu(e,n)}getOverlay(e,t){return zu(e).get(Fu(this.userId,t)).next((e=>e?Mu(this.serializer,e):null))}getOverlays(e,t){const n=Ra();return $i.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new wc(t,i);r.push(this.we(e,s))})),$i.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(os(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(zu(e).J("collectionPathOverlayIndex",r))})),$i.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Ra(),i=os(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return zu(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Mu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Ra();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return zu(e).X({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Mu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}we(e,t){return zu(e).put(function(e,t,n){const[r,i,s]=Fu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:uu(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function zu(e){return Ps(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Js(e.integerValue));else if("doubleValue"in e){const n=Js(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),is(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ys(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?bo(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):si()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),Ni.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function Gu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Ku(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Gu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}$u.Ve=new $u;class Hu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=Ku(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Le(e){const t=this.Fe(e),n=Ku(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Wu{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Qu{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Ju{constructor(){this.je=new Hu,this.ze=new Wu(this.je),this.We=new Qu(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Yu(this.indexId,this.documentKey,this.arrayValue,n)}}function Xu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Zu(e.arrayValue,t.arrayValue),0!==n?n:(n=Zu(e.directionalValue,t.directionalValue),0!==n?n:Ni.comparator(e.documentKey,t.documentKey)))}function Zu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){oi(e.collectionGroup===this.collectionId);const t=Oi(e);if(void 0!==t&&!this.en(t))return!1;const n=Pi(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.en(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Ze){if(!r.has(this.Ze.field.canonicalString())){const e=n[i];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[s++],e))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(e){var t,n;if(oi(e instanceof Po||e instanceof Lo),e instanceof Po){if(e instanceof Qo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Po.create(e.field,"==",t))))||[];return Lo.create(r,"or")}return e}const r=e.filters.map((e=>tl(e)));return Lo.create(r,e.op)}function nl(e){if(0===e.getFilters().length)return[];const t=ol(tl(e));return oi(sl(t)),rl(t)||il(t)?[t]:t.getFilters()}function rl(e){return e instanceof Po}function il(e){return e instanceof Lo&&Vo(e)}function sl(e){return rl(e)||il(e)||function(e){if(e instanceof Lo&&Fo(e)){for(const t of e.getFilters())if(!rl(t)&&!il(t))return!1;return!0}return!1}(e)}function ol(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;if(1===e.filters.length)return ol(e.filters[0]);const t=e.filters.map((e=>ol(e)));let n=Lo.create(t,e.op);return n=ul(n),sl(n)?n:(oi(n instanceof Lo),oi(Mo(n)),oi(n.filters.length>1),n.filters.reduce(((e,t)=>al(e,t))))}function al(e,t){let n;return oi(e instanceof Po||e instanceof Lo),oi(t instanceof Po||t instanceof Lo),n=e instanceof Po?t instanceof Po?function(e,t){return Lo.create([e,t],"and")}(e,t):cl(e,t):t instanceof Po?cl(t,e):function(e,t){if(oi(e.filters.length>0&&t.filters.length>0),Mo(e)&&Mo(t))return qo(e,t.getFilters());const n=Fo(e)?e:t,r=Fo(e)?t:e,i=n.filters.map((e=>al(e,r)));return Lo.create(i,"or")}(e,t),ul(n)}function cl(e,t){if(Mo(t))return qo(t,e.getFilters());{const n=t.filters.map((t=>al(e,t)));return Lo.create(n,"or")}}function ul(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;const t=e.getFilters();if(1===t.length)return ul(t[0]);if(Uo(e))return e;const n=t.map((e=>ul(e))),r=[];return n.forEach((t=>{t instanceof Po?r.push(t):t instanceof Lo&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Lo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ll{constructor(){this.rn=new hl}addToCollectionParentIndex(e,t){return this.rn.add(t),$i.resolve()}getCollectionParents(e,t){return $i.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return $i.resolve()}deleteFieldIndex(e,t){return $i.resolve()}getDocumentsMatchingTarget(e,t){return $i.resolve(null)}getIndexType(e,t){return $i.resolve(0)}getFieldIndexes(e,t){return $i.resolve([])}getNextCollectionGroupToUpdate(e){return $i.resolve(null)}getMinOffset(e,t){return $i.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,t){return $i.resolve(Ui.min())}updateCollectionGroup(e,t,n){return $i.resolve()}updateIndexEntries(e,t){return $i.resolve()}}class hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Bs(Ai.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Bs(Ai.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Uint8Array(0);class fl{constructor(e,t){this.user=e,this.databaseId=t,this.on=new hl,this.un=new Ta((e=>ea(e)),((e,t)=>ta(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.on.add(t)}));const i={collectionId:n,parent:os(r)};return pl(e).put(i)}return $i.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Ti(t),""],!1,!0);return pl(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(us(r.parent))}return n}))}addFieldIndex(e,t){const n=gl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=yl(e);return i.next((e=>{n.put(Vu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=gl(e),r=yl(e),i=ml(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=ml(e);let r=!0;const i=new Map;return $i.forEach(this.cn(t),(t=>this.an(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=La();const r=[];return $i.forEach(i,((i,s)=>{var o;ti("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${ea(t)}`);const a=function(e,t){const n=Oi(t);if(void 0===n)return null;for(const r of ra(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Pi(t))for(const t of ra(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?ia(e,i.fieldPath,e.startAt):sa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ao(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?sa(e,i.fieldPath,e.endAt):ia(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ao(n,r)}(s,i),h=this.hn(i,s,u),d=this.hn(i,s,l),f=this.ln(i,s,c),p=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return $i.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Ni.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return $i.resolve(null)}))}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:nl(Lo.create(e.filters,"and")).map((t=>Zo(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.un.set(e,t),t)}fn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):dl,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map((t=>this.wn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new Yu(e,Ni.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new Yu(e,Ni.empty(),t,n);return r?i.Je():i}an(e,t){const n=new el(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.cn(t);return $i.forEach(r,(t=>this.an(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Bs(Ri.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}mn(e,t){const n=new Ju;for(const r of Pi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);$u.Ve._e(e,i)}return n.Qe()}dn(e){const t=new Ju;return $u.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new Ju;return $u.Ve._e(fo(this.databaseId,t),n.He(function(e){const t=Pi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new Ju);let i=0;for(const s of Pi(e)){const e=n[i++];for(const n of r)if(this.yn(t,s.fieldPath)&&mo(e))r=this.pn(r,s,e);else{const t=n.He(s.kind);$u.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Ju;n.seed(e.Qe()),$u.Ve._e(s,n.He(t.kind)),i.push(n)}return i}yn(e,t){return!!e.filters.find((e=>e instanceof Po&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=gl(e),r=yl(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return $i.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Mi(t.sequenceNumber,new Ui(Nu(t.readTime),new Ni(us(t.documentKey)),t.largestBatchId)):Mi.empty(),r=e.fields.map((([e,t])=>new Li(Ri.fromServerFormat(e),t)));return new Di(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ii(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=gl(e),i=yl(e);return this.Tn(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>$i.forEach(t,(t=>i.put(Vu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return $i.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?$i.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),$i.forEach(i,(n=>this.En(e,t,n).next((t=>{const i=this.An(r,n);return t.isEqual(i)?$i.resolve():this.vn(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return ml(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return ml(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=ml(e);let i=new Bs(Xu);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},((e,r)=>{i=i.add(new Yu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}An(e,t){let n=new Bs(Xu);const r=this.mn(t,e);if(null==r)return n;const i=Oi(t);if(null!=i){const s=e.data.field(i.fieldPath);if(mo(s))for(const i of s.arrayValue.values||[])n=n.add(new Yu(t.indexId,e.key,this.dn(i),r))}else n=n.add(new Yu(t.indexId,e.key,dl,r));return n}vn(e,t,n,r,i){ti("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=zs(s),c=zs(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=zs(o)):t?(i(a),a=zs(s)):(a=zs(s),c=zs(o))}}(r,i,Xu,(r=>{s.push(this.Rn(e,t,n,r))}),(r=>{s.push(this.Pn(e,t,n,r))})),$i.waitFor(s)}Tn(e){let t=1;return yl(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Xu(e,t))).filter(((e,t,n)=>!t||0!==Xu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Xu(s,e),i=Xu(s,t);if(0===n)r[0]=e.Je();else if(n>0&&i<0)r.push(s),r.push(s.Je());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.bn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,dl,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,dl,[]];i.push(IDBKeyRange.bound(e,t))}return i}bn(e,t){return Xu(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(vl)}getMinOffset(e,t){return $i.mapArray(this.cn(t),(t=>this.an(e,t).next((e=>e||si())))).next(vl)}}function pl(e){return Ps(e,"collectionParents")}function ml(e){return Ps(e,"indexEntries")}function gl(e){return Ps(e,"indexConfiguration")}function yl(e){return Ps(e,"indexState")}function vl(e){oi(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;ji(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ui(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new bl(e,bl.DEFAULT_COLLECTION_PERCENTILE,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{oi(1===a)})));const u=[];for(const l of n.mutations){const e=ds(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return $i.waitFor(s).next((()=>u))}function Il(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw si();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bl.DEFAULT_COLLECTION_PERCENTILE=10,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bl.DEFAULT=new bl(41943040,bl.DEFAULT_COLLECTION_PERCENTILE,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bl.DISABLED=new bl(-1,0,0);class El{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){oi(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new El(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sl(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=kl(e),s=Sl(e);return s.add({}).next((o=>{oi("number"==typeof o);const a=new yc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>uu(e.fe,t))),i=n.mutations.map((t=>uu(e.fe,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new Bs(((e,t)=>Ii(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ds(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,fs))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Vn[o]=a.keys()})),$i.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Sl(e).get(t).next((e=>e?(oi(e.userId===this.userId),Du(this.serializer,e)):null))}Sn(e,t){return this.Vn[t]?$i.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Sl(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(oi(t.batchId>=n),i=Du(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Sl(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sl(e).j("userMutationsIndex",t).next((e=>e.map((e=>Du(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=hs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return kl(e).X({range:r},((n,r,s)=>{const[o,a,c]=n,u=us(a);if(o===this.userId&&t.path.isEqual(u))return Sl(e).get(c).next((e=>{if(!e)throw si();oi(e.userId===this.userId),i.push(Du(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Bs(Ii);const r=[];return t.forEach((t=>{const i=hs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=kl(e).X({range:s},((e,r,i)=>{const[s,o,a]=e,c=us(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),$i.waitFor(r).next((()=>this.Dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=hs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Bs(Ii);return kl(e).X({range:s},((e,t,i)=>{const[s,a,c]=e,u=us(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Dn(e,o)))}Dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Sl(e).get(t).next((e=>{if(null===e)throw si();oi(e.userId===this.userId),n.push(Du(this.serializer,e))})))})),$i.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return _l(e.ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Cn(t.batchId)})),$i.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return $i.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return kl(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=us(e[1]);r.push(t)}else n.done()})).next((()=>{oi(0===r.length)}))}))}containsKey(e,t){return Tl(e,this.userId,t)}xn(e){return Cl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Tl(e,t,n){const r=hs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return kl(e).X({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Sl(e){return Ps(e,"mutations")}function kl(e){return Ps(e,"documentMutations")}function Cl(e){return Ps(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Al(0)}static Mn(){return new Al(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next((t=>{const n=new Al(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.$n(e).next((e=>ki.fromTimestamp(new Si(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.$n(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.$n(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.Fn(e,t).next((()=>this.$n(e).next((n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Rl(e).delete(t.targetId))).next((()=>this.$n(e))).next((t=>(oi(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Rl(e).X(((s,o)=>{const a=Ou(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>$i.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Rl(e).X(((e,n)=>{const r=Ou(n);t(r)}))}$n(e){return Nl(e).get("targetGlobalKey").next((e=>(oi(null!==e),e)))}On(e,t){return Nl(e).put("targetGlobalKey",t)}Fn(e,t){return Rl(e).put(Pu(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ea(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Rl(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Ou(n);ta(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Dl(e);return t.forEach((t=>{const s=os(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),$i.waitFor(r)}removeMatchingKeys(e,t,n){const r=Dl(e);return $i.forEach(t,(t=>{const i=os(t.path);return $i.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Dl(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Dl(e);let i=La();return r.X({range:n,Y:!0},((e,t,n)=>{const r=us(e[1]),s=new Ni(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=os(t.path),r=IDBKeyRange.bound([n],[Ti(n)],!1,!0);let i=0;return Dl(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}le(e,t){return Rl(e).get(t).next((e=>e?Ou(e):null))}}function Rl(e){return Ps(e,"targets")}function Nl(e){return Ps(e,"targetGlobal")}function Dl(e){return Ps(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol([e,t],[n,r]){const i=Ii(e,n);return 0===i?Ii(t,r):i}class Pl{constructor(e){this.Ln=e,this.buffer=new Bs(Ol),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ol(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ll{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){ti("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Qi(e)?ti("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await zi(e)}await this.Qn(3e5)}))}}class Ml{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return $i.resolve(ns.ct);const n=new Pl(t);return this.jn.forEachTarget(e,(e=>n.Kn(e.sequenceNumber))).next((()=>this.jn.Wn(e,(e=>n.Kn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector","Garbage collection skipped; disabled"),$i.resolve(wl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wl):this.Hn(e,t)))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ti("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Zr()<=a["in"].DEBUG&&ti("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),$i.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Fl(e,t){return new Ml(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.db=e,this.garbageCollector=Fl(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Jn(e){let t=0;return this.Wn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,((e,n)=>t(n)))}addReference(e,t,n){return Ul(e,n)}removeReference(e,t,n){return Ul(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ul(e,t)}Xn(e,t){return function(e,t){let n=!1;return Cl(e).Z((r=>Tl(e,r,t).next((e=>(e&&(n=!0),$i.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,((s,o)=>{if(o<=t){const t=this.Xn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,ki.min()),Dl(e).delete([0,os(s.path)]))))}));r.push(t)}})).next((()=>$i.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ul(e,t)}Yn(e,t){const n=Dl(e);let r,i=ns.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ns.ct&&t(new Ni(us(r)),i),i=o,r=s):i=ns.ct})).next((()=>{i!==ns.ct&&t(new Ni(us(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ul(e,t){return Dl(e).put(function(e,t){return{targetId:0,path:os(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.changes=new Ta((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Co.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?$i.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Gl(e).put(n)}removeEntry(e,t,n){return Gl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],xu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Zn(e,n))))}getEntry(e,t){let n=Co.newInvalidDocument(t);return Gl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Kl(t))},((e,r)=>{n=this.ts(t,r)})).next((()=>n))}es(e,t){let n={size:0,document:Co.newInvalidDocument(t)};return Gl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Kl(t))},((e,r)=>{n={document:this.ts(t,r),size:Il(r)}})).next((()=>n))}getEntries(e,t){let n=ka();return this.ns(e,t,((e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)})).next((()=>n))}ss(e,t){let n=ka(),r=new Vs(Ni.comparator);return this.ns(e,t,((e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,Il(t))})).next((()=>({documents:n,rs:r})))}ns(e,t,n){if(t.isEmpty())return $i.resolve();let r=new Bs(Wl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Kl(r.first()),Kl(r.last())),s=r.getIterator();let o=s.getNext();return Gl(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Ni.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Wl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Kl(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),xu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gl(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=ka();for(const i of e){const e=this.ts(Ni.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(ba(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=ka();const s=Hl(t,n),o=Hl(t,Ui.max());return Gl(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.ts(Ni.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new zl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return $l(e).get("remoteDocumentGlobalKey").next((e=>(oi(!!e),e)))}Zn(e,t){return $l(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=Cu(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(ki.min()))return e}return Co.newInvalidDocument(e)}}function ql(e){return new Bl(e)}class zl extends jl{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Bs(((e,t)=>Ii(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.us.get(i);if(t.push(this.os.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Au(this.os.serializer,s);r=r.add(i.path.popLast());const c=Il(a);n+=c-o.size,t.push(this.os.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Au(this.os.serializer,s.convertToNoDocument(ki.min()));t.push(this.os.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.os.updateMetadata(e,n)),$i.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next((e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.os.ss(e,t).next((({documents:e,rs:t})=>(t.forEach(((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function $l(e){return Ps(e,"remoteDocumentGlobal")}function Gl(e){return Ps(e,"remoteDocumentsV14")}function Kl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Hl(e,t){const n=t.documentKey.path.toArray();return[e,xu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Wl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ii(n[s],r[s]),i)return i;return i=Ii(n.length,r.length),i||(i=Ii(n[n.length-2],r[r.length-2]),i||Ii(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ql{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ac(n.mutation,e,$s.empty(),Si.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,La()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=La()){const r=Ra();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Aa();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ra();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,La())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ka();const s=Da(),o=Da();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof hc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ac(o.mutation,t,o.mutation.getFieldMask(),Si.now())):s.set(t.key,$s.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ql(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Da();let r=new Vs(((e,t)=>e-t)),i=La();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||$s.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||La()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Na();c.forEach((e=>{if(!i.has(e)){const r=sc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return $i.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ni.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):da(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):$i.resolve(Ra());let o=-1,a=i;return s.next((t=>$i.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?$i.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,La()))).next((e=>({batchId:o,changes:xa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ni(t)).next((e=>{let t=Aa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Aa();return this.indexManager.getCollectionParents(e,r).next((s=>$i.forEach(s,(s=>{const o=function(e,t){return new oa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Co.newInvalidDocument(r)))}));let n=Aa();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&ac(s.mutation,i,$s.empty(),Si.now()),ba(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return $i.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Jc(n.createTime)}),$i.resolve()}getNamedQuery(e,t){return $i.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Lu(e.bundledQuery),readTime:Jc(e.readTime)}}(t)),$i.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.overlays=new Vs(Ni.comparator),this.ls=new Map}getOverlay(e,t){return $i.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ra();return $i.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),$i.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),$i.resolve()}getOverlaysForCollection(e,t,n){const r=Ra(),i=t.length+1,s=new Ni(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return $i.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Vs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ra(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ra(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return $i.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new wc(t,n));let i=this.ls.get(t);void 0===i&&(i=La(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.fs=new Bs(eh.ds),this.ws=new Bs(eh._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new eh(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new eh(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Ni(new Ai([])),n=new eh(t,e),r=new eh(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ni(new Ai([])),n=new eh(t,e),r=new eh(t,e+1);let i=La();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new eh(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class eh{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ni.comparator(e.key,t.key)||Ii(e.As,t.As)}static _s(e,t){return Ii(e.As,t.As)||Ni.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Bs(eh.ds)}checkEmpty(e){return $i.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new yc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new eh(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return $i.resolve(s)}lookupMutationBatch(e,t){return $i.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return $i.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $i.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return $i.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new eh(t,0),r=new eh(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),$i.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Bs(Ii);return t.forEach((e=>{const t=new eh(e,0),r=new eh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),$i.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ni.isDocumentKey(i)||(i=i.child(""));const s=new eh(new Ni(i),0);let o=new Bs(Ii);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),$i.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){oi(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return $i.forEach(t.mutations,(r=>{const i=new eh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new eh(t,0),r=this.Rs.firstAfterOrEqual(n);return $i.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$i.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.Ds=e,this.docs=new Vs(Ni.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return $i.resolve(n?n.document.mutableCopy():Co.newInvalidDocument(t))}getEntries(e,t){let n=ka();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Co.newInvalidDocument(e))})),$i.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ka();const s=t.path,o=new Ni(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ji(Vi(o),n)<=0||(r.has(o.key)||ba(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return $i.resolve(i)}getAllFromCollectionGroup(e,t,n,r){si()}Cs(e,t){return $i.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rh(this)}getSize(e){return $i.resolve(this.size)}}class rh extends jl{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),$i.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.persistence=e,this.xs=new Ta((e=>ea(e)),ta),this.lastRemoteSnapshotVersion=ki.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Zl,this.targetCount=0,this.Ms=Al.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),$i.resolve()}getLastRemoteSnapshotVersion(e){return $i.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $i.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),$i.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),$i.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Al(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,$i.resolve()}updateTargetData(e,t){return this.Fn(t),$i.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,$i.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),$i.waitFor(i).next((()=>r))}getTargetCount(e){return $i.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return $i.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),$i.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),$i.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),$i.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return $i.resolve(n)}containsKey(e,t){return $i.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.$s={},this.overlays={},this.Os=new ns(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new ih(this),this.indexManager=new ll,this.remoteDocumentCache=function(e){return new nh(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new ku(t),this.qs=new Yl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new th(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){ti("MemoryPersistence","Starting transaction:",e);const r=new oh(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return $i.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class oh extends qi{constructor(e){super(),this.currentSequenceNumber=e}}class ah{constructor(e){this.persistence=e,this.Qs=new Zl,this.js=null}static zs(e){return new ah(e)}get Ws(){if(this.js)return this.js;throw si()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),$i.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),$i.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),$i.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $i.forEach(this.Ws,(n=>{const r=Ni.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,ki.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return $i.or([()=>$i.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.serializer=e}O(e,t,n,r){const i=new Gi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0}),e.createObjectStore("documentMutations")}(e),uh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=$i.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),uh(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ki.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return $i.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ys(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i))))),n<7&&r>=7&&(s=s.next((()=>this.Zs(i)))),n<8&&r>=8&&(s=s.next((()=>this.ti(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ei(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Ss});t.createIndex("collectionPathOverlayIndex",ks,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Cs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ps});t.createIndex("documentKeyIndex",ms),t.createIndex("collectionGroupIndex",gs)}(e))).next((()=>this.ni(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.si(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:_s}).createIndex("sequenceNumberIndex",Is,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Es}).createIndex("documentKeyIndex",Ts,{unique:!1})}(e)))),s}Xs(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=Il(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>$i.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>$i.forEach(n,(n=>{oi(n.userId===t.userId);const r=Du(this.serializer,n);return _l(e,t.userId,r).next((()=>{}))}))))}))))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const s=new Ai(n),o=function(e){return[0,os(e)]}(s);r.push(t.get(o).next((n=>n?$i.resolve():(n=>t.put({targetId:0,path:os(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>$i.waitFor(r)))}))}ti(e,t){e.createObjectStore("collectionParents",{keyPath:bs});const n=t.store("collectionParents"),r=new hl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:os(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new Ai(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const s=us(t);return i(s.popLast())}))))}ei(e){const t=e.store("targets");return t.X(((e,n)=>{const r=Ou(n),i=Pu(this.serializer,r);return t.put(i)}))}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Ni(Ai.fromString(o.document.name).popFirst(5)):o.noDocument?Ni.fromSegments(o.noDocument.path):o.unknownDocument?Ni.fromSegments(o.unknownDocument.path):si()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>$i.waitFor(r)))}si(e,t){const n=t.store("mutations"),r=ql(this.serializer),i=new sh(ah.zs,this.serializer.fe);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:La();Du(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),$i.forEach(n,((e,n)=>{const s=new Jr(n),o=qu.de(this.serializer,s),a=i.getIndexManager(s),c=El.de(s,this.serializer,a,i.referenceDelegate);return new Jl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Os(t,ns.ct),e).next()}))}))}}function uh(e){e.createObjectStore("targetDocuments",{keyPath:vs}).createIndex("documentTargetsIndex",ws,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ys,{unique:!0}),e.createObjectStore("targetGlobal")}const lh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!hh.D())throw new li(ui.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vl(this,r),this.di=t+"main",this.serializer=new ku(a),this.wi=new Ki(this.di,this.ui,new ch(this.serializer)),this.Bs=new xl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ql(this.serializer),this.qs=new Uu,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&ni("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,lh);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Bs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new ns(e,this.ri)})).then((()=>{this.Fs=!0})).catch((e=>(this.wi&&this.wi.close(),Promise.reject(e))))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>fh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ti(e).next((e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Ei(e))).next((t=>this.isPrimary&&!t?this.Ai(e).next((()=>!1)):!!t&&this.vi(e).next((()=>!0)))))).catch((e=>{if(Qi(e))return ti("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ti("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ii.enqueueRetryable((()=>this.fi(e))),this.isPrimary=e}))}Ti(e){return dh(e).get("owner").next((e=>$i.resolve(this.Ri(e))))}Pi(e){return fh(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ps(e,"clientMetadata");return t.j().next((e=>{const n=this.Si(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return $i.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.bi())).then((()=>this.pi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?$i.resolve(!0):dh(e).get("owner").next((t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,lh);return!1}}return!(!this.networkEnabled||!this.inForeground)||fh(e).j().next((e=>void 0===this.Si(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ti("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Os(e,ns.ct);return this.Ai(t).next((()=>this.Pi(t)))})),this.wi.close(),this.Mi()}Si(e,t){return e.filter((e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId)))}$i(){return this.runTransaction("getActiveClients","readonly",(e=>fh(e).j().next((e=>this.Si(e,18e5).map((e=>e.clientId))))))}get started(){return this.Fs}getMutationQueue(e,t){return El.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fl(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return qu.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){ti("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.ui)?Ds:14===s?Ns:13===s?Rs:12===s?xs:11===s?As:void si();var s;let o;return this.wi.runTransaction(e,r,i,(r=>(o=new Os(r,this.Os?this.Os.next():ns.ct),"readwrite-primary"===t?this.Ti(o).next((e=>!!e||this.Ei(o))).next((t=>{if(!t)throw ni(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))),new li(ui.FAILED_PRECONDITION,Bi);return n(o)})).next((e=>this.vi(o).next((()=>e)))):this.Oi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Oi(e){return dh(e).get("owner").next((e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new li(ui.FAILED_PRECONDITION,lh)}))}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return dh(e).put("owner",t)}static D(){return Ki.D()}Ai(e){const t=dh(e);return t.get("owner").next((e=>this.Ri(e)?(ti("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):$i.resolve()))}Vi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ni(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.mi())))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return ti("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ni("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){ni("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function dh(e){return Ps(e,"owner")}function fh(e){return Ps(e,"clientMetadata")}function ph(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=La(),r=La();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(ua(t))return $i.resolve(null);let n=pa(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ga(t,null,"F"),n=pa(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=La(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,ga(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return ua(t)||r.isEqual(ki.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(Zr()<=a["in"].DEBUG&&ti("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wa(t)),this.Wi(e,s,t,Fi(r,-1)))}))}ji(e,t){let n=new Bs(Ia(e));return t.forEach(((t,r)=>{ba(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Zr()<=a["in"].DEBUG&&ti("QueryEngine","Using full collection scan to execute query:",wa(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ui.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Vs(Ii),this.Yi=new Ta((e=>ea(e)),ta),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jl(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function vh(e,t,n,r){return new yh(e,t,n,r)}async function wh(e,t){const n=ci(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=La();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function bh(e,t){const n=ci(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=$i.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);oi(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=La();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function _h(e){const t=ci(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Ih(e,t){const n=ci(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Hs.EMPTY_BYTE_STRING,ki.min()).withLastLimboFreeSnapshotVersion(ki.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))}));let a=ka(),c=La();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Eh(e,s,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(ki.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return $i.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Eh(e,t,n){let r=La(),i=La();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ka();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ki.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ti("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function Th(e,t){const n=ci(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Sh(e,t){const n=ci(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,$i.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new Su(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function kh(e,t,n){const r=ci(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Qi(e))throw e;ti("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Ch(e,t,n){const r=ci(e);let i=ki.min(),s=La();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=ci(e),i=r.Yi.get(n);return void 0!==i?$i.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,pa(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:ki.min(),n?s:La()))).next((e=>(Rh(r,_a(t),e),{documents:e,ir:s})))))}function Ah(e,t){const n=ci(e),r=ci(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.le(e,t).next((e=>e?e.target:null))))}function xh(e,t){const n=ci(e),r=n.Xi.get(t)||ki.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Zi.getAllFromCollectionGroup(e,t,Fi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Rh(n,t,e),e)))}function Rh(e,t,n){let r=e.Xi.get(t)||ki.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}async function Nh(e,t,n,r){const i=ci(e);let s=La(),o=ka();for(const u of n){const e=t.rr(u.metadata.name);u.document&&(s=s.add(e));const n=t.ur(u);n.setReadTime(t.cr(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Sh(i,function(e){return pa(ca(Ai.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Eh(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Bs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr))).next((()=>t.nr))))))}async function Dh(e,t,n=La()){const r=await Sh(e,pa(Lu(t.bundledQuery))),i=ci(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Jc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.qs.saveNamedQuery(e,t);const o=r.withResumeToken(Hs.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.Bs.updateTargetData(e,o).next((()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Bs.addMatchingKeys(e,n,r.targetId))).next((()=>i.qs.saveNamedQuery(e,t)))}))}function Oh(e,t){return`firestore_clients_${e}_${t}`}function Ph(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Lh(e,t){return`firestore_targets_${e}_${t}`}class Mh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new li(r.error.code,r.error.message))),s?new Mh(e,t,r.state,i):(ni("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new li(n.error.code,n.error.message))),i?new Fh(e,n.state,r):(ni("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Fa();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ss(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Vh(e,i):(ni("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Uh{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Uh(t.clientId,t.onlineState):(ni("SharedClientState",`Failed to parse online state: ${e}`),null)}}class jh{constructor(){this.activeTargetIds=Fa()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bh{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Vs(Ii),this.started=!1,this.yr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Oh(this.persistenceKey,this.wr),this.Ir=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gr=this.gr.insert(this.wr,new jh),this.Tr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const n of e){if(n===this.wr)continue;const e=this.getItem(Oh(this.persistenceKey,n));if(e){const t=Vh.ar(n,e);t&&(this.gr=this.gr.insert(t.clientId,t))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const n of this.yr)this.mr(n);this.yr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Lh(this.persistenceKey,e));if(n){const r=Fh.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lh(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Cr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ti("SharedClientState","READ",e,t),t}setItem(e,t){ti("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ti("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(ti("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void ni("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=ns.ct;if(null!=e)try{const n=JSON.parse(e);oi("number"==typeof n),t=n}catch(e){ni("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ns.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Qr(e))))}}else this.yr.push(t)}))}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new Mh(this.currentUser,e,t,n),i=Ph(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Ph(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=Lh(this.persistenceKey,e),i=new Fh(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return Vh.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Mh.ar(new Jr(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return Fh.ar(r,t)}br(e){return Uh.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);ti("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Wr(s,o).then((()=>{this.gr=n}))}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Fa();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class qh{constructor(){this.Hr=new jh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new jh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ti("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){ti("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh=null;function Kh(){return null===Gh?Gh=268435456+Math.round(2147483648*Math.random()):Gh++,"0x"+Gh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Hh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="WebChannelConnection";class Jh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=Kh(),o=this.To(e,t);ti("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(ti("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ri("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=Hh[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Kh();return new Promise(((s,o)=>{const a=new Kr;a.setWithCredentials(!0),a.listenOnce(Br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case jr.NO_ERROR:const t=a.getResponseJson();ti(Qh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case jr.TIMEOUT:ti(Qh,`RPC '${e}' ${i} timed out`),o(new li(ui.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=a.getStatus();if(ti(Qh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ui).indexOf(t)>=0?t:ui.UNKNOWN}(t.status);o(new li(e,t.message))}else o(new li(ui.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new li(ui.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ti(Qh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ti(Qh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Kh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Vr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new $r({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ti(Qh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Wh({ro:t=>{d?ti(Qh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ti(Qh,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ti(Qh,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Gr.EventType.OPEN,(()=>{d||ti(Qh,`RPC '${e}' stream ${r} transport opened.`)})),p(l,Gr.EventType.CLOSE,(()=>{d||(d=!0,ti(Qh,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(l,Gr.EventType.ERROR,(t=>{d||(d=!0,ri(Qh,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new li(ui.UNAVAILABLE,"The operation could not be completed")))})),p(l,Gr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ti(Qh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=_c[e];if(void 0!==t)return Tc(t)}(t),i=o.message;void 0===n&&(n=ui.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new li(n,i)),l.close()}else ti(Qh,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,qr.STAT_EVENT,(t=>{t.stat===zr.PROXY?ti(Qh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===zr.NOPROXY&&ti(Qh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){return"undefined"!=typeof window?window:null}function Xh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e){return new Gc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&ti("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ed(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===ui.RESOURCE_EXHAUSTED?(ni(t.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===ui.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new li(ui.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return ti("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(ti("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nd extends td{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=cu(this.serializer,e),n=function(e){if(!("targetChange"in e))return ki.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ki.min():t.readTime?Jc(t.readTime):ki.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=ru(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=na(r)?{documents:du(e,r)}:{query:fu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Wc(e,t.resumeToken);const r=Kc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ki.min())>0){n.readTime=Hc(e,t.snapshotVersion.toTimestamp());const r=Kc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=mu(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=ru(this.serializer),t.removeTarget=e,this.Wo(t)}}class rd extends td{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(oi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=hu(e.writeResults,e.commitTime),n=Jc(e.commitTime);return this.listener.cu(n,t)}return oi(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ru(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>uu(this.serializer,e)))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class sd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ni(t),this.mu=!1):ti("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{md(this)&&(ti("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ci(e);t.vu.add(4),await cd(t),t.bu.set("Unknown"),t.vu.delete(4),await ad(t)}(this))}))})),this.bu=new sd(n,r)}}async function ad(e){if(md(e))for(const t of e.Ru)await t(!0)}async function cd(e){for(const t of e.Ru)await t(!1)}function ud(e,t){const n=ci(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),pd(n)?fd(n):Od(n).Ko()&&hd(n,t))}function ld(e,t){const n=ci(e),r=Od(n);n.Au.delete(t),r.Ko()&&dd(n,t),0===n.Au.size&&(r.Ko()?r.jo():md(n)&&n.bu.set("Unknown"))}function hd(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ki.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Od(e).su(t)}function dd(e,t){e.Vu.qt(t),Od(e).iu(t)}function fd(e){e.Vu=new Uc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Od(e).start(),e.bu.gu()}function pd(e){return md(e)&&!Od(e).Uo()&&e.Au.size>0}function md(e){return 0===ci(e).vu.size}function gd(e){e.Vu=void 0}async function yd(e){e.Au.forEach(((t,n)=>{hd(e,t)}))}async function vd(e,t){gd(e),pd(e)?(e.bu.Iu(t),fd(e)):e.bu.set("Unknown")}async function wd(e,t,n){if(e.bu.set("Online"),t instanceof Fc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){ti("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bd(e,n)}else if(t instanceof Lc?e.Vu.Ht(t):t instanceof Mc?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(ki.min()))try{const t=await _h(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(Hs.EMPTY_BYTE_STRING,r.snapshotVersion)),dd(e,t);const i=new Su(r.target,t,n,r.sequenceNumber);hd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ti("RemoteStore","Failed to raise snapshot:",t),await bd(e,t)}}async function bd(e,t,n){if(!Qi(t))throw t;e.vu.add(1),await cd(e),e.bu.set("Offline"),n||(n=()=>_h(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ti("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ad(e)}))}function _d(e,t){return t().catch((n=>bd(e,n,t)))}async function Id(e){const t=ci(e),n=Pd(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Ed(t);)try{const e=await Th(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Td(t,e)}catch(e){await bd(t,e)}Sd(t)&&kd(t)}function Ed(e){return md(e)&&e.Eu.length<10}function Td(e,t){e.Eu.push(t);const n=Pd(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Sd(e){return md(e)&&!Pd(e).Uo()&&e.Eu.length>0}function kd(e){Pd(e).start()}async function Cd(e){Pd(e).hu()}async function Ad(e){const t=Pd(e);for(const n of e.Eu)t.uu(n.mutations)}async function xd(e,t,n){const r=e.Eu.shift(),i=vc.from(r,t,n);await _d(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Id(e)}async function Rd(e,t){t&&Pd(e).ou&&await async function(e,t){if(n=t.code,Ec(n)&&n!==ui.ABORTED){const n=e.Eu.shift();Pd(e).Qo(),await _d(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Id(e)}var n}(e,t),Sd(e)&&kd(e)}async function Nd(e,t){const n=ci(e);n.asyncQueue.verifyOperationInProgress(),ti("RemoteStore","RemoteStore received new credentials");const r=md(n);n.vu.add(3),await cd(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ad(n)}async function Dd(e,t){const n=ci(e);t?(n.vu.delete(2),await ad(n)):t||(n.vu.add(2),await cd(n),n.bu.set("Unknown"))}function Od(e){return e.Su||(e.Su=function(e,t,n){const r=ci(e);return r.fu(),new nd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{uo:yd.bind(null,e),ao:vd.bind(null,e),nu:wd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),pd(e)?fd(e):e.bu.set("Unknown")):(await e.Su.stop(),gd(e))}))),e.Su}function Pd(e){return e.Du||(e.Du=function(e,t,n){const r=ci(e);return r.fu(),new rd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Cd.bind(null,e),ao:Rd.bind(null,e),au:Ad.bind(null,e),cu:xd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Id(e)):(await e.Du.stop(),e.Eu.length>0&&(ti("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ld{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ld(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new li(ui.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(e,t){if(ni("AsyncQueue",`${t}: ${e}`),Qi(e))return new li(ui.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ni.comparator(t.key,n.key):(e,t)=>Ni.comparator(e.key,t.key),this.keyedMap=Aa(),this.sortedSet=new Vs(this.comparator)}static emptySet(e){return new Fd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.Cu=new Vs(Ni.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):si():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ud{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ud(e,t,Fd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Nu=void 0,this.listeners=[]}}class Bd{constructor(){this.queries=new Ta((e=>va(e)),ya),this.onlineState="Unknown",this.ku=new Set}}async function qd(e,t){const n=ci(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jd),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Md(e,`Initialization of query '${wa(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&Kd(n)}async function zd(e,t){const n=ci(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $d(e,t){const n=ci(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&Kd(n)}function Gd(e,t,n){const r=ci(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Kd(e){e.ku.forEach((e=>{e.next()}))}class Hd{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ud(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Ud.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.serializer=e}rr(e){return eu(this.serializer,e)}ur(e){return e.metadata.exists?ou(this.serializer,e.document,!1):Co.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Jc(e)}}class Jd{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Yd(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=Ai.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new Qd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||La()).add(e);t.set(n,r)}}return t}async complete(){const e=await Nh(this.localStore,new Qd(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const n of this.queries)await Dh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Yd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.key=e}}class Zd{constructor(e){this.key=e}}class ef{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=La(),this.mutatedKeys=La(),this.tc=Ia(e),this.ec=new Fd(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Vd,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=ba(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Ud(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Vd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=La(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new Zd(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Xd(n))})),t}hc(e){this.Yu=e.ir,this.Zu=La();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Ud.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class tf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nf{constructor(e){this.key=e,this.fc=!1}}class rf{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Ta((e=>va(e)),ya),this._c=new Map,this.mc=new Set,this.gc=new Vs(Ni.comparator),this.yc=new Map,this.Ic=new Zl,this.Tc={},this.Ec=new Map,this.Ac=Al.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function sf(e,t){const n=Pf(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Sh(n.localStore,pa(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await of(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&ud(n.remoteStore,e)}return i}async function of(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Ch(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return wf(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Ch(e.localStore,t,!0),o=new ef(t,s.ir),a=o.sc(s.documents),c=Pc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);wf(e,n,u.cc);const l=new tf(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function af(e,t){const n=ci(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!ya(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ld(n.remoteStore,r.targetId),yf(n,r.targetId)})).catch(zi)):(yf(n,r.targetId),await kh(n.localStore,r.targetId,!0))}async function cf(e,t,n){const r=Lf(e);try{const e=await function(e,t){const n=ci(e),r=Si.now(),i=t.reduce(((e,t)=>e.add(t.key)),La());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ka(),c=La();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=cc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new hc(e.key,t,ko(t.value.mapValue),nc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Vs(Ii)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await If(r,e.changes),await Id(r.remoteStore)}catch(e){const t=Md(e,"Failed to persist write");n.reject(t)}}async function uf(e,t){const n=ci(e);try{const e=await Ih(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(oi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?oi(r.fc):e.removedDocuments.size>0&&(oi(r.fc),r.fc=!1))})),await If(n,e,t)}catch(e){await zi(e)}}function lf(e,t,n){const r=ci(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ci(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)})),r&&Kd(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hf(e,t,n){const r=ci(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Vs(Ni.comparator);e=e.insert(s,Co.newNoDocument(s,ki.min()));const n=La().add(s),i=new Oc(ki.min(),new Map,new Vs(Ii),e,n);await uf(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),_f(r)}else await kh(r.localStore,t,!1).then((()=>yf(r,t,n))).catch(zi)}async function df(e,t){const n=ci(e),r=t.batch.batchId;try{const e=await bh(n.localStore,t);gf(n,r,null),mf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await If(n,e)}catch(e){await zi(e)}}async function ff(e,t,n){const r=ci(e);try{const e=await function(e,t){const n=ci(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(oi(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);gf(r,t,n),mf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await If(r,e)}catch(n){await zi(n)}}async function pf(e,t){const n=ci(e);md(n.remoteStore)||ti("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ci(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=Md(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function mf(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function gf(e,t,n){const r=ci(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function yf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||vf(e,t)}))}function vf(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(ld(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),_f(e))}function wf(e,t,n){for(const r of n)r instanceof Xd?(e.Ic.addReference(r.key,t),bf(e,r)):r instanceof Zd?(ti("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||vf(e,r.key)):si()}function bf(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(ti("SyncEngine","New document in limbo: "+n),e.mc.add(r),_f(e))}function _f(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ni(Ai.fromString(t)),r=e.Ac.next();e.yc.set(r,new nf(n)),e.gc=e.gc.insert(n,r),ud(e.remoteStore,new Su(pa(ca(n.path)),r,"TargetPurposeLimboResolution",ns.ct))}}async function If(e,t,n){const r=ci(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=mh.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=ci(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>$i.forEach(t,(t=>$i.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>$i.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Qi(e))throw e;ti("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Ef(e,t){const n=ci(e);if(!n.currentUser.isEqual(t)){ti("SyncEngine","User change. New user:",t.toKey());const e=await wh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new li(ui.CANCELLED,t))}))})),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await If(n,e.er)}}function Tf(e,t){const n=ci(e),r=n.yc.get(t);if(r&&r.fc)return La().add(r.key);{let e=La();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function Sf(e,t){const n=ci(e),r=await Ch(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&wf(n,t.targetId,i.cc),i}async function kf(e,t){const n=ci(e);return xh(n.localStore,t).then((e=>If(n,e)))}async function Cf(e,t,n,r){const i=ci(e),s=await function(e,t){const n=ci(e),r=ci(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Sn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):$i.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Id(i.remoteStore):"acknowledged"===n||"rejected"===n?(gf(i,t,r||null),mf(i,t),function(e,t){ci(ci(e).mutationQueue).Cn(t)}(i.localStore,t)):si(),await If(i,s)):ti("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Af(e,t){const n=ci(e);if(Pf(n),Lf(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await xf(n,e.toArray());n.vc=!0,await Dd(n.remoteStore,!0);for(const r of t)ud(n.remoteStore,r)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(yf(n,i),kh(n.localStore,i,!0)))),ld(n.remoteStore,i)})),await t,await xf(n,e),function(e){const t=ci(e);t.yc.forEach(((e,n)=>{ld(t.remoteStore,n)})),t.Ic.Ts(),t.yc=new Map,t.gc=new Vs(Ni.comparator)}(n),n.vc=!1,await Dd(n.remoteStore,!1)}}async function xf(e,t,n){const r=ci(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await Sh(r.localStore,pa(t[0]));for(const e of t){const t=r.wc.get(e),n=await Sf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ah(r.localStore,o);e=await Sh(r.localStore,t),await of(r,Rf(t),o,!1,e.resumeToken)}i.push(e)}return r.dc.nu(s),i}function Rf(e){return aa(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Nf(e){const t=ci(e);return ci(ci(t.localStore).persistence).$i()}async function Df(e,t,n,r){const i=ci(e);if(i.vc)return void ti("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await xh(i.localStore,_a(s[0])),r=Oc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Hs.EMPTY_BYTE_STRING);await If(i,e,r);break}case"rejected":await kh(i.localStore,t,!0),yf(i,t,r);break;default:si()}}async function Of(e,t,n){const r=Pf(e);if(r.vc){for(const e of t){if(r._c.has(e)){ti("SyncEngine","Adding an already active target "+e);continue}const t=await Ah(r.localStore,e),n=await Sh(r.localStore,t);await of(r,Rf(t),n.targetId,!1,n.resumeToken),ud(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await kh(r.localStore,e,!1).then((()=>{ld(r.remoteStore,e),yf(r,e)})).catch(zi)}}function Pf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hf.bind(null,t),t.dc.nu=$d.bind(null,t.eventManager),t.dc.Pc=Gd.bind(null,t.eventManager),t}function Lf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=df.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ff.bind(null,t),t}function Mf(e,t,n){const r=ci(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=ci(e),r=Jc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.qs.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Yd(r));const i=new Jd(r,e.localStore,t.serializer);let s=await t.bc();for(;s;){const e=await i.zu(s);e&&n._updateProgress(e),s=await t.bc()}const o=await i.complete();return await If(e,o.Ju,void 0),await function(e,t){const n=ci(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.qs.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return ri("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Ff{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return vh(this.persistence,new gh,e.initialUser,this.serializer)}createPersistence(e){return new sh(ah.zs,this.serializer)}createSharedClientState(e){return new qh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vf extends Ff{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Lf(this.Vc.syncEngine),await Id(this.Vc.remoteStore),await this.persistence.Ii((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return vh(this.persistence,new gh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ll(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ts(t,this.persistence);return new es(e.asyncQueue,n)}createPersistence(e){const t=ph(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?bl.withCacheSize(this.cacheSizeBytes):bl.DEFAULT;return new hh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Yh(),Xh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new qh}}class Uf extends Vf{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Bh&&(this.sharedClientState.syncEngine={jr:Cf.bind(null,t),zr:Df.bind(null,t),Wr:Of.bind(null,t),$i:Nf.bind(null,t),Qr:kf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii((async e=>{await Af(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Yh();if(!Bh.D(t))throw new li(ui.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ph(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Bh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ef.bind(null,this.syncEngine),await Dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bd}createDatastore(e){const t=Zh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Jh(r));var r;return function(e,t,n,r){return new id(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>lf(this.syncEngine,e,0),s=$h.D()?new $h:new zh,new od(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new rf(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ci(e);ti("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await cd(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ni("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new hi,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then((e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Gu)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new Wd(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async kc(){for(;this.Oc()<0;)if(await this.Fc())break;if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new li(ui.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=ci(e),r=ru(n.serializer)+"/documents",i={documents:t.map((e=>Zc(n.serializer,e)))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=au(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());oi(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new mc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Ni.fromPath(t);this.mutations.push(new gc(n,this.precondition(n)))})),await async function(e,t){const n=ci(e),r=ru(n.serializer)+"/documents",i={writes:t.map((e=>uu(n.serializer,e)))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw si();t=ki.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new li(ui.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ki.min())?nc.exists(!1):nc.updateTime(t):nc.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ki.min()))throw new li(ui.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nc.updateTime(t)}return nc.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new ed(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No((async()=>{const e=new $f(this.datastore),t=this.qc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Uc(e)}))))})).catch((e=>{this.Uc(e)}))}))}qc(e){try{const t=this.updateFunction(e);return!rs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Lc(),Promise.resolve())))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ec(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Jr.UNAUTHENTICATED,this.clientId=_i.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ti("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ti("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Md(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Hf(e,t){e.asyncQueue.verifyOperationInProgress(),ti("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await wh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jf(e);ti("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Nd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Nd(t.remoteStore,n))),e._onlineComponents=t}function Qf(e){return"FirebaseError"===e.name?e.code===ui.FAILED_PRECONDITION||e.code===ui.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Jf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ti("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Qf(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Hf(e,new Ff)}}else ti("FirestoreClient","Using default OfflineComponentProvider"),await Hf(e,new Ff);return e._offlineComponents}async function Yf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ti("FirestoreClient","Using user provided OnlineComponentProvider"),await Wf(e,e._uninitializedComponentsProvider._online)):(ti("FirestoreClient","Using default OnlineComponentProvider"),await Wf(e,new jf))),e._onlineComponents}function Xf(e){return Jf(e).then((e=>e.persistence))}function Zf(e){return Jf(e).then((e=>e.localStore))}function ep(e){return Yf(e).then((e=>e.remoteStore))}function tp(e){return Yf(e).then((e=>e.syncEngine))}function np(e){return Yf(e).then((e=>e.datastore))}async function rp(e){const t=await Yf(e),n=t.eventManager;return n.onListen=sf.bind(null,t.syncEngine),n.onUnlisten=af.bind(null,t.syncEngine),n}function ip(e){return e.asyncQueue.enqueue((async()=>{const t=await Xf(e),n=await ep(e);return t.setNetworkEnabled(!0),function(e){const t=ci(e);return t.vu.delete(0),ad(t)}(n)}))}function sp(e){return e.asyncQueue.enqueue((async()=>{const t=await Xf(e),n=await ep(e);return t.setNetworkEnabled(!1),async function(e){const t=ci(e);t.vu.add(0),await cd(t),t.bu.set("Offline")}(n)}))}function op(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=ci(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new li(ui.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Md(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Zf(e),t,n))),n.promise}function ap(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qf({next:s=>{t.enqueueAndForget((()=>zd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new li(ui.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Hd(ca(n.path),s,{includeMetadataChanges:!0,Ku:!0});return qd(e,o)}(await rp(e),e.asyncQueue,t,n,r))),r.promise}function cp(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Ch(e,t,!0),i=new ef(t,r.ir),s=i.sc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Md(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Zf(e),t,n))),n.promise}function up(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qf({next:n=>{t.enqueueAndForget((()=>zd(e,o))),n.fromCache&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Hd(n,s,{includeMetadataChanges:!0,Ku:!0});return qd(e,o)}(await rp(e),e.asyncQueue,t,n,r))),r.promise}function lp(e,t){const n=new qf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){ci(e).ku.add(t),t.next()}(await rp(e),n))),()=>{n.Dc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){ci(e).ku.delete(t)}(await rp(e),n)))}}function hp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Cc().encode(e):e,function(e,t){return new zf(e,t)}(function(e,t){if(e instanceof Uint8Array)return Bf(e,t);if(e instanceof ArrayBuffer)return Bf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Zh(t));e.asyncQueue.enqueueAndForget((async()=>{Mf(await tp(e),i,r)}))}function dp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=ci(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.qs.getNamedQuery(e,t)))}(await Zf(e),t)))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(e,t,n){if(!n)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gp(e,t,n,r){if(!0===t&&!0===r)throw new li(ui.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yp(e){if(!Ni.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vp(e){if(Ni.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":si()}function bp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new li(ui.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wp(e);throw new li(ui.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function _p(e,t){if(t<=0)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new li(ui.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new li(ui.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Ep{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new li(ui.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new fi;switch(e.type){case"firstParty":return new yi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new li(ui.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pp.get(e);t&&(ti("ComponentProvider","Removing Datastore"),pp.delete(e),t.terminate())}(this),Promise.resolve()}}function Tp(e,t,n,r={}){var i;const s=(e=bp(e,Ep))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Jr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new li(ui.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Jr(s)}e._authCredentials=new pi(new di(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sp(this.firestore,e,this._key)}}class kp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new kp(this.firestore,e,this._query)}}class Cp extends kp{constructor(e,t,n){super(e,t,ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sp(this.firestore,null,new Ni(e))}withConverter(e){return new Cp(this.firestore,e,this._path)}}function Ap(e,t,...n){if(e=(0,c.m9)(e),mp("collection","path",t),e instanceof Ep){const r=Ai.fromString(t,...n);return vp(r),new Cp(e,null,r)}{if(!(e instanceof Sp||e instanceof Cp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ai.fromString(t,...n));return vp(r),new Cp(e.firestore,null,r)}}function xp(e,t){if(e=bp(e,Ep),mp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kp(e,null,function(e){return new oa(Ai.emptyPath(),e)}(t))}function Rp(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=_i.A()),mp("doc","path",t),e instanceof Ep){const r=Ai.fromString(t,...n);return yp(r),new Sp(e,null,new Ni(r))}{if(!(e instanceof Sp||e instanceof Cp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ai.fromString(t,...n));return yp(r),new Sp(e.firestore,e instanceof Cp?e.converter:null,new Ni(r))}}function Np(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Sp||e instanceof Cp)&&(t instanceof Sp||t instanceof Cp)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Dp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof kp&&t instanceof kp&&e.firestore===t.firestore&&ya(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Op{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ed(this,"async_queue_retry"),this.Xc=()=>{const e=Xh();e&&ti("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Xh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Xh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new hi;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Qi(e))throw e;ti("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ni("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Ld.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&si()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Pp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Lp{constructor(){this._progressObserver={},this._taskCompletionResolver=new hi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=-1;class Fp extends Ep{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Op,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Up(this),this._firestoreClient.terminate()}}function Vp(e){return e._firestoreClient||Up(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Up(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new to(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,fp(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Kf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function jp(e,t){Qp(e=bp(e,Fp));const n=Vp(e);if(n._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new jf;return qp(n,i,new Vf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Bp(e){Qp(e=bp(e,Fp));const t=Vp(e);if(t._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new jf;return qp(t,r,new Uf(r,n.cacheSizeBytes))}function qp(e,t,n){const r=new hi;return e.asyncQueue.enqueue((async()=>{try{await Hf(e,n),await Wf(e,t),r.resolve()}catch(e){const n=e;if(!Qf(n))throw n;ri("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function zp(e){if(e._initialized&&!e._terminated)throw new li(ui.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new hi;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Ki.D())return Promise.resolve();const t=e+"main";await Ki.delete(t)}(ph(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function $p(e){return function(e){const t=new hi;return e.asyncQueue.enqueueAndForget((async()=>pf(await tp(e),t))),t.promise}(Vp(e=bp(e,Fp)))}function Gp(e){return ip(Vp(e=bp(e,Fp)))}function Kp(e){return sp(Vp(e=bp(e,Fp)))}function Hp(e,t){const n=Vp(e=bp(e,Fp)),r=new Lp;return hp(n,e._databaseId,t,r),r}function Wp(e,t){return dp(Vp(e=bp(e,Fp)),t).then((t=>t?new kp(e,null,t.query):null))}function Qp(e){if(e._initialized||e._terminated)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jp(Hs.fromBase64String(e))}catch(e){throw new li(ui.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Jp(Hs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new li(ui.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ri(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new li(ui.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new li(ui.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ii(this._lat,e._lat)||Ii(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=/^__.*__$/;class tm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new hc(e,this.data,this.fieldMask,t,this.fieldTransforms):new lc(e,this.data,t,this.fieldTransforms)}}class nm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new hc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class im{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Tm(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(rm(this.ca)&&em.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class sm{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Zh(e)}ya(e,t,n,r=!1){return new im({ca:e,methodName:t,ga:n,path:Ri.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function om(e){const t=e._freezeSettings(),n=Zh(e._databaseId);return new sm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function am(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);bm("Data must be an object, but it was:",o,r);const a=vm(r,o);let c,u;if(s.merge)c=new $s(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=_m(t,r,n);if(!o.contains(i))throw new li(ui.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Sm(e,i)||e.push(i)}c=new $s(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new tm(new So(a),c,u)}class cm extends Xp{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cm}}function um(e,t,n){return new im({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lm extends Xp{_toFieldTransform(e){return new Za(e.path,new Ga)}isEqual(e){return e instanceof lm}}class hm extends Xp{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=um(this,e,!0),n=this.pa.map((e=>ym(e,t))),r=new Ka(n);return new Za(e.path,r)}isEqual(e){return this===e}}class dm extends Xp{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=um(this,e,!0),n=this.pa.map((e=>ym(e,t))),r=new Wa(n);return new Za(e.path,r)}isEqual(e){return this===e}}class fm extends Xp{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Ja(e.serializer,ja(e.serializer,this.Ia));return new Za(e.path,t)}isEqual(e){return this===e}}function pm(e,t,n,r){const i=e.ya(1,t,n);bm("Data must be an object, but it was:",i,r);const s=[],o=So.empty();Ms(r,((e,r)=>{const a=Em(t,e,n);r=(0,c.m9)(r);const u=i.da(a);if(r instanceof cm)s.push(a);else{const e=ym(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new $s(s);return new nm(o,a,i.fieldTransforms)}function mm(e,t,n,r,i,s){const o=e.ya(1,t,n),a=[_m(t,r,n)],u=[i];if(s.length%2!=0)throw new li(ui.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(_m(t,s[c])),u.push(s[c+1]);const l=[],h=So.empty();for(let f=a.length-1;f>=0;--f)if(!Sm(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.da(e);if(t instanceof cm)l.push(e);else{const r=ym(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new $s(l);return new nm(h,d,o.fieldTransforms)}function gm(e,t,n,r=!1){return ym(n,e.ya(r?4:3,t))}function ym(e,t){if(wm(e=(0,c.m9)(e)))return bm("Unsupported field value:",t,e),vm(e,t);if(e instanceof Xp)return function(e,t){if(!rm(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ym(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ja(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Si.fromDate(e);return{timestampValue:Hc(t.serializer,n)}}if(e instanceof Si){const n=new Si(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Hc(t.serializer,n)}}if(e instanceof Zp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jp)return{bytesValue:Wc(t.serializer,e._byteString)};if(e instanceof Sp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${wp(e)}`)}(e,t)}function vm(e,t){const n={};return Fs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ms(e,((e,r)=>{const i=ym(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function wm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Si||e instanceof Zp||e instanceof Jp||e instanceof Sp||e instanceof Xp)}function bm(e,t,n){if(!wm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wp(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function _m(e,t,n){if((t=(0,c.m9)(t))instanceof Yp)return t._internalPath;if("string"==typeof t)return Em(e,t);throw Tm("Field path arguments must be of type string or ",e,!1,void 0,n)}const Im=new RegExp("[~\\*/\\[\\]]");function Em(e,t,n){if(t.search(Im)>=0)throw Tm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yp(...t.split("."))._internalPath}catch(r){throw Tm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Tm(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new li(ui.INVALID_ARGUMENT,a+e+c)}function Sm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Am("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Cm extends km{data(){return super.data()}}function Am(e,t){return"string"==typeof t?Em(e,t):t instanceof Yp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new li(ui.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rm{}class Nm extends Rm{}function Dm(e,t,...n){let r=[];t instanceof Rm&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Lm)).length,n=e.filter((e=>e instanceof Om)).length;if(t>1||t>0&&n>0)throw new li(ui.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Om extends Nm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Om(e,t,n)}_apply(e){const t=this._parse(e);return Jm(e._query,t),new kp(e.firestore,e.converter,ma(e._query,t))}_parse(e){const t=om(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Qm(o,s);const t=[];for(const n of o)t.push(Wm(r,e,n));a={arrayValue:{values:t}}}else a=Wm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Qm(o,s),a=gm(n,t,o,"in"===s||"not-in"===s);return Po.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Pm(e,t,n){const r=t,i=Am("where",e);return Om._create(i,r,n)}class Lm extends Rm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Lo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Jm(n,i),n=ma(n,i)}(e._query,t),new kp(e.firestore,e.converter,ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Mm extends Nm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new No(t,n);return function(e,t){if(null===la(e)){const n=ha(e);null!==n&&Ym(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new kp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new oa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Fm(e,t="asc"){const n=t,r=Am("orderBy",e);return Mm._create(r,n)}class Vm extends Nm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Vm(e,t,n)}_apply(e){return new kp(e.firestore,e.converter,ga(e._query,this._limit,this._limitType))}}function Um(e){return _p("limit",e),Vm._create("limit",e,"F")}function jm(e){return _p("limitToLast",e),Vm._create("limitToLast",e,"L")}class Bm extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Bm(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new kp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function qm(...e){return Bm._create("startAt",e,!0)}function zm(...e){return Bm._create("startAfter",e,!1)}class $m extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new $m(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new kp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Gm(...e){return $m._create("endBefore",e,!1)}function Km(...e){return $m._create("endAt",e,!0)}function Hm(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof km)return function(e,t,n,r,i){if(!r)throw new li(ui.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of fa(e))if(o.field.isKeyField())s.push(fo(t,r.key));else{const e=r.data.field(o.field);if(Xs(e))throw new li(ui.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new li(ui.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ao(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=om(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new li(ui.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new li(ui.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!da(e)&&-1!==s.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ai.fromString(s));if(!Ni.isDocumentKey(n))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Ni(n);a.push(fo(t,i))}else{const e=gm(n,r,s);a.push(e)}}return new Ao(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wm(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new li(ui.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!da(t)&&-1!==n.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ai.fromString(n));if(!Ni.isDocumentKey(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fo(e,new Ni(r))}if(n instanceof Sp)return fo(e,n._key);throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wp(n)}.`)}function Qm(e,t){if(!Array.isArray(e)||0===e.length)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Jm(e,t){if(t.isInequality()){const n=ha(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=la(e);null!==i&&Ym(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Ym(e,t,n){if(!n.isEqual(t))throw new li(ui.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Xm{convertValue(e,t="none"){switch(so(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Js(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw si()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ms(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Zp(Js(e.latitude),Js(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ai.fromString(e);oi(Tu(n));const r=new no(n.get(1),n.get(3)),i=new Ni(n.popFirst(5));return r.isEqual(t)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class eg extends Xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ng extends km{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Am("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rg extends ng{data(e={}){return super.data(e)}}class ig{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rg(this._firestore,this._userDataWriter,n.key,n,new tg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new li(ui.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new rg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new tg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:sg(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}function og(e,t){return e instanceof ng&&t instanceof ng?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ig&&t instanceof ig&&e._firestore===t._firestore&&Dp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e){e=bp(e,Sp);const t=bp(e.firestore,Fp);return ap(Vp(t),e._key).then((n=>_g(t,e,n)))}class cg extends Xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}function ug(e){e=bp(e,Sp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return op(n,e._key).then((n=>new ng(t,r,e._key,n,new tg(null!==n&&n.hasLocalMutations,!0),e.converter)))}function lg(e){e=bp(e,Sp);const t=bp(e.firestore,Fp);return ap(Vp(t),e._key,{source:"server"}).then((n=>_g(t,e,n)))}function hg(e){e=bp(e,kp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return xm(e._query),up(n,e._query).then((n=>new ig(t,r,e,n)))}function dg(e){e=bp(e,kp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return cp(n,e._query).then((n=>new ig(t,r,e,n)))}function fg(e){e=bp(e,kp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return up(n,e._query,{source:"server"}).then((n=>new ig(t,r,e,n)))}function pg(e,t,n){e=bp(e,Sp);const r=bp(e.firestore,Fp),i=Zm(e.converter,t,n);return bg(r,[am(om(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nc.none())])}function mg(e,t,n,...r){e=bp(e,Sp);const i=bp(e.firestore,Fp),s=om(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?mm(s,"updateDoc",e._key,t,n,r):pm(s,"updateDoc",e._key,t),bg(i,[o.toMutation(e._key,nc.exists(!0))])}function gg(e){return bg(bp(e.firestore,Fp),[new mc(e._key,nc.none())])}function yg(e,t){const n=bp(e.firestore,Fp),r=Rp(e),i=Zm(e.converter,t);return bg(n,[am(om(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nc.exists(!1))]).then((()=>r))}function vg(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Pp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Pp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Sp)l=bp(e.firestore,Fp),h=ca(e._key.path),u={next:n=>{t[o]&&t[o](_g(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=bp(e,kp);l=bp(n.firestore,Fp),h=n._query;const r=new cg(l);u={next:e=>{t[o]&&t[o](new ig(l,r,n,e))},error:t[o+1],complete:t[o+2]},xm(e._query)}return function(e,t,n,r){const i=new qf(r),s=new Hd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>qd(await rp(e),s))),()=>{i.Dc(),e.asyncQueue.enqueueAndForget((async()=>zd(await rp(e),s)))}}(Vp(l),h,a,u)}function wg(e,t){return lp(Vp(e=bp(e,Fp)),Pp(t)?t:{next:t})}function bg(e,t){return function(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>cf(await tp(e),t,n))),n.promise}(Vp(e),t)}function _g(e,t,n){const r=n.docs.get(t._key),i=new cg(e);return new ng(e,i,t._key,r,new tg(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ig={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=om(e)}set(e,t,n){this._verifyNotCommitted();const r=Tg(e,this._firestore),i=Zm(r.converter,t,n),s=am(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nc.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Tg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?mm(this._dataReader,"WriteBatch.update",i._key,t,n,r):pm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,nc.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tg(e,this._firestore);return this._mutations=this._mutations.concat(new mc(t._key,nc.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new li(ui.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tg(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new li(ui.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=om(e)}get(e){const t=Tg(e,this._firestore),n=new eg(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return si();const r=e[0];if(r.isFoundDocument())return new km(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new km(this._firestore,n,t._key,null,t.converter);throw si()}))}set(e,t,n){const r=Tg(e,this._firestore),i=Zm(r.converter,t,n),s=am(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Tg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?mm(this._dataReader,"Transaction.update",i._key,t,n,r):pm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Tg(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Tg(e,this._firestore),n=new cg(this._firestore);return super.get(e).then((e=>new ng(this._firestore,n,t._key,e._document,new tg(!1,!1),t.converter)))}}function kg(e,t,n){e=bp(e,Fp);const r=Object.assign(Object.assign({},Ig),n);return function(e){if(e.maxAttempts<1)throw new li(ui.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>{const i=await np(e);new Gf(e.asyncQueue,i,n,t,r).run()})),r.promise}(Vp(e),(n=>t(new Sg(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(){return new cm("deleteField")}function Ag(){return new lm("serverTimestamp")}function xg(...e){return new hm("arrayUnion",e)}function Rg(...e){return new dm("arrayRemove",e)}function Ng(e){return new fm("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Yr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Fp(new mi(e.getProvider("auth-internal")),new wi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new li(ui.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Qr,"3.12.2",e),(0,s.registerVersion)(Qr,"3.12.2","esm2017")}();const Dg="@firebase/firestore-compat",Og="0.3.11";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pg(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new li("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){if("undefined"===typeof Uint8Array)throw new li("unimplemented","Uint8Arrays are not available in this environment.")}function Mg(){if(!Ks())throw new li("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Fg{constructor(e){this._delegate=e}static fromBase64String(e){return Mg(),new Fg(Jp.fromBase64String(e))}static fromUint8Array(e){return Lg(),new Fg(Jp.fromUint8Array(e))}toBase64(){return Mg(),this._delegate.toBase64()}toUint8Array(){return Lg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(e){return Ug(e,["next","error","complete"])}function Ug(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{enableIndexedDbPersistence(e,t){return jp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Bp(e._delegate)}clearIndexedDbPersistence(e){return zp(e._delegate)}}class Bg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof no||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||ri("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Tp(this._delegate,e,t,n)}enableNetwork(){return Gp(this._delegate)}disableNetwork(){return Kp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,gp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return $p(this._delegate)}onSnapshotsInSync(e){return wg(this._delegate,e)}get app(){if(!this._appCompat)throw new li("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ny(this,Ap(this._delegate,e))}catch(t){throw Wg(t,"collection()","Firestore.collection()")}}doc(e){try{return new Hg(this,Rp(this._delegate,e))}catch(t){throw Wg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Zg(this,xp(this._delegate,e))}catch(t){throw Wg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return kg(this._delegate,(t=>e(new $g(this,t))))}batch(){return Vp(this._delegate),new Gg(new Eg(this._delegate,(e=>bg(this._delegate,e))))}loadBundle(e){return Hp(this._delegate,e)}namedQuery(e){return Wp(this._delegate,e).then((e=>e?new Zg(this,e):null))}}class qg extends Xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fg(new Jp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Hg.forKey(t,this.firestore,null)}}function zg(e){ei(e)}class $g{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new qg(e)}get(e){const t=ry(e);return this._delegate.get(t).then((e=>new Yg(this._firestore,new ng(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=ry(e);return n?(Pg("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ry(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ry(e);return this._delegate.delete(t),this}}class Gg{constructor(e){this._delegate=e}set(e,t,n){const r=ry(e);return n?(Pg("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ry(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ry(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Kg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new rg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Xg(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Kg.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Kg(e,new qg(e),t),r.set(t,i)),i}}Kg.INSTANCES=new WeakMap;class Hg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new li("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Hg(t,new Sp(t._delegate,n,new Ni(e)))}static forKey(e,t,n){return new Hg(t,new Sp(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ny(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ny(this.firestore,Ap(this._delegate,e))}catch(t){throw Wg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Sp&&Np(this._delegate,e)}set(e,t){t=Pg("DocumentReference.set",t);try{return t?pg(this._delegate,e,t):pg(this._delegate,e)}catch(n){throw Wg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?mg(this._delegate,e):mg(this._delegate,e,t,...n)}catch(r){throw Wg(r,"updateDoc()","DocumentReference.update()")}}delete(){return gg(this._delegate)}onSnapshot(...e){const t=Qg(e),n=Jg(e,(e=>new Yg(this.firestore,new ng(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return vg(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?ug(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?lg(this._delegate):ag(this._delegate),t.then((e=>new Yg(this.firestore,new ng(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Hg(this.firestore,e?this._delegate.withConverter(Kg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Wg(e,t,n){return e.message=e.message.replace(t,n),e}function Qg(e){for(const t of e)if("object"===typeof t&&!Vg(t))return t;return{}}function Jg(e,t){var n,r;let i;return i=Vg(e[0])?e[0]:Vg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Yg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Hg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return og(this._delegate,e._delegate)}}class Xg extends Yg{data(e){const t=this._delegate.data(e);return ai(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Zg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qg(e)}where(e,t,n){try{return new Zg(this.firestore,Dm(this._delegate,Pm(e,t,n)))}catch(r){throw Wg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Zg(this.firestore,Dm(this._delegate,Fm(e,t)))}catch(n){throw Wg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Zg(this.firestore,Dm(this._delegate,Um(e)))}catch(t){throw Wg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Zg(this.firestore,Dm(this._delegate,jm(e)))}catch(t){throw Wg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Zg(this.firestore,Dm(this._delegate,qm(...e)))}catch(t){throw Wg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Zg(this.firestore,Dm(this._delegate,zm(...e)))}catch(t){throw Wg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Zg(this.firestore,Dm(this._delegate,Gm(...e)))}catch(t){throw Wg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Zg(this.firestore,Dm(this._delegate,Km(...e)))}catch(t){throw Wg(t,"endAt()","Query.endAt()")}}isEqual(e){return Dp(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?dg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?fg(this._delegate):hg(this._delegate),t.then((e=>new ty(this.firestore,new ig(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Qg(e),n=Jg(e,(e=>new ty(this.firestore,new ig(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return vg(this._delegate,t,n)}withConverter(e){return new Zg(this.firestore,e?this._delegate.withConverter(Kg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ey{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Xg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ty{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Zg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Xg(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new ey(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Xg(this._firestore,n))}))}isEqual(e){return og(this._delegate,e._delegate)}}class ny extends Zg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Hg(this.firestore,e):null}doc(e){try{return new Hg(this.firestore,void 0===e?Rp(this._delegate):Rp(this._delegate,e))}catch(t){throw Wg(t,"doc()","CollectionReference.doc()")}}add(e){return yg(this._delegate,e).then((e=>new Hg(this.firestore,e)))}isEqual(e){return Np(this._delegate,e._delegate)}withConverter(e){return new ny(this.firestore,e?this._delegate.withConverter(Kg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ry(e){return bp(e,Sp)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(...e){this._delegate=new Yp(...e)}static documentId(){return new iy(Ri.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Yp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ag();return e._methodName="FieldValue.serverTimestamp",new sy(e)}static delete(){const e=Cg();return e._methodName="FieldValue.delete",new sy(e)}static arrayUnion(...e){const t=xg(...e);return t._methodName="FieldValue.arrayUnion",new sy(t)}static arrayRemove(...e){const t=Rg(...e);return t._methodName="FieldValue.arrayRemove",new sy(t)}static increment(e){const t=Ng(e);return t._methodName="FieldValue.increment",new sy(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={Firestore:Bg,GeoPoint:Zp,Timestamp:Si,Blob:Fg,Transaction:$g,WriteBatch:Gg,DocumentReference:Hg,DocumentSnapshot:Yg,Query:Zg,QueryDocumentSnapshot:Xg,QuerySnapshot:ty,CollectionReference:ny,FieldPath:iy,FieldValue:sy,setLogLevel:zg,CACHE_SIZE_UNLIMITED:Mp};function ay(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},oy)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(e){ay(e,((e,t)=>new Bg(e,t,new jg))),e.registerVersion(Dg,Og)}cy(i.Z)},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return U},p7:function(){return tt},tv:function(){return rt}});n(7658),n(1703);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function k(e,t){return e.replace(S,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function D(e,t){N.set(e,t)}function O(e){const t=N.get(e);return N.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function V(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function U(e){e=T(e);const t=V(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var $;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})($||($={}));function G(e,t){return a(new Error,{type:e,[z]:!0},t)}function K(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const H="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=a({},W,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||H;if(l!==H){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function re(e,t,n){const r=J(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=oe(e);c.aliasOf=r&&r.record;const h=le(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw G(1,{location:e});0,o=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw G(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,ve=/%5B/g,we=/%5D/g,be=/%5E/g,_e=/%60/g,Ie=/%7B/g,Ee=/%7C/g,Te=/%7D/g,Se=/%20/g;function ke(e){return encodeURI(""+e).replace(Ee,"|").replace(ve,"[").replace(we,"]")}function Ce(e){return ke(e).replace(Ie,"{").replace(Te,"}").replace(be,"^")}function Ae(e){return ke(e).replace(ye,"%2B").replace(Se,"+").replace(de,"%23").replace(fe,"%26").replace(_e,"`").replace(Ie,"{").replace(Te,"}").replace(be,"^")}function xe(e){return Ae(e).replace(me,"%3D")}function Re(e){return ke(e).replace(de,"%23").replace(ge,"%3F")}function Ne(e){return null==e?"":Re(e).replace(pe,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Oe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=xe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),Ue=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(G(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(G(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if($e(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function $e(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(Ue),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ke=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=Ke;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Fe,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Fe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)(je,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||Oe,o=e.stringifyQuery||Pe,h=e.history;const d=Be(),m=Be(),y=Be(),v=(0,i.XI)(q);let w=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),_=c.bind(null,Ne),E=c.bind(null,De);function T(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:E(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(t)}),r.params=_(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=b(E(s.params));const u=p(o,a({},e,{hash:Ce(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(w!==e)return G(8,{from:t,to:e})}function M(e){return U(e)}function F(e){return M(a(P(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=w=N(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=V(n);if(u)return U(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=G(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):$(l,r)).catch((e=>K(e)?K(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(K(e,2))return U(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=W(l,r,!0,c,i);return H(l,r,e),e}))}function j(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let n;const[r,i,s]=nt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),ue(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ue(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),ue(n)))).then((()=>{n=[];for(const r of m.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).catch((e=>K(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of y.list())z((()=>r(e,t,n)))}function W(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,re(e,t,n,c),ne()}let Q;function J(){Q||(Q=h.listen(((e,t,n)=>{if(!ce.listening)return;const r=N(e),i=V(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(R(o.fullPath,n.delta),A()),$(r,o).catch((e=>K(e,12)?e:K(e,2)?(U(e.to,r).then((e=>{K(e,20)&&!n.delta&&n.type===I.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,r,o)))).then((e=>{e=e||W(r,o,!1),e&&(n.delta&&!K(e,8)?h.go(-n.delta,!1):n.type===I.pop&&K(e,20)&&h.go(-1,!1)),H(r,o,e)})).catch(u)})))}let Y,X=Be(),Z=Be();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return Y&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return Y||(Y=!e,J(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&O(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&x(e))).catch((e=>ee(e,t,n)))}const se=e=>h.go(e);let oe;const ae=new Set,ce={currentRoute:v,listening:!0,addRoute:T,removeRoute:S,hasRoute:C,getRoutes:k,resolve:N,options:e,push:M,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!oe&&v.value===q&&(oe=!0,M(h.location).catch((e=>{0})));const n={};for(const i in q)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(Ve,t),e.provide(Ue,(0,i.qj)(n)),e.provide(je,v);const o=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(w=q,Q&&Q(),Q=null,v.value=q,oe=!1,Y=!1),o()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>z(t)))),Promise.resolve())}return ce}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}function rt(){return(0,r.f3)(Ve)}}}]);
//# sourceMappingURL=chunk-vendors.3af6ba32.js.map