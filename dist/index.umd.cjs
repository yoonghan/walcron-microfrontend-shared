(function(k,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],_):(k=typeof globalThis<"u"?globalThis:k||self,_(k["Micro Frontend Shared"]={},k.React))})(this,function(k,_){"use strict";const xn=({appName:r,containerName:n,props:a})=>{_.useEffect(()=>{window.dispatchEvent(new CustomEvent(`[${r}] navigated`,{detail:a.pathname}))},[r,a.pathname]),_.useEffect(()=>{function s(i){const f=i.detail;a.pathname!==f&&a.navigate(f)}return window.addEventListener(`[${n}] navigated`,s),()=>{window.removeEventListener(`[${n}] navigated`,s)}},[n,a])};function Rn(r){console.log(r)}const Tn=r=>n=>{r({...n,delta:n.delta*1e3})},jn=r=>{r&&r instanceof Function&&Promise.resolve().then(()=>Vn).then(({onCLS:n,onINP:a,onLCP:s})=>{n(Tn(r)),a(r),s(r)})};function Ne(r,n){let a;return()=>{/* istanbul ignore if -- @preserve */a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,r()},n)}}var se={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe;function wn(){if(Fe)return K;Fe=1;var r=_,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(c,l,v){var h,E={},g=null,R=null;v!==void 0&&(g=""+v),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(R=l.ref);for(h in l)s.call(l,h)&&!f.hasOwnProperty(h)&&(E[h]=l[h]);if(c&&c.defaultProps)for(h in l=c.defaultProps,l)E[h]===void 0&&(E[h]=l[h]);return{$$typeof:n,type:c,key:g,ref:R,props:E,_owner:i.current}}return K.Fragment=a,K.jsx=p,K.jsxs=p,K}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function Cn(){return Le||(Le=1,process.env.NODE_ENV!=="production"&&function(){var r=_,n=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),N=Symbol.iterator,L="@@iterator";function S(e){if(e===null||typeof e!="object")return null;var t=N&&e[N]||e[L];return typeof t=="function"?t:null}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function C(e){{for(var t=arguments.length,o=new Array(t>1?t-1:0),d=1;d<t;d++)o[d-1]=arguments[d];Q("error",e,o)}}function Q(e,t,o){{var d=P.ReactDebugCurrentFrame,y=d.getStackAddendum();y!==""&&(t+="%s",o=o.concat([y]));var x=o.map(function(b){return String(b)});x.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,x)}}var Un=!1,Hn=!1,zn=!1,Kn=!1,Jn=!1,Ze;Ze=Symbol.for("react.module.reference");function Gn(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===f||Jn||e===i||e===v||e===h||Kn||e===R||Un||Hn||zn||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===E||e.$$typeof===p||e.$$typeof===c||e.$$typeof===l||e.$$typeof===Ze||e.getModuleId!==void 0))}function Xn(e,t,o){var d=e.displayName;if(d)return d;var y=t.displayName||t.name||"";return y!==""?o+"("+y+")":o}function $e(e){return e.displayName||"Context"}function D(e){if(e==null)return null;if(typeof e.tag=="number"&&C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case a:return"Portal";case f:return"Profiler";case i:return"StrictMode";case v:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case c:var t=e;return $e(t)+".Consumer";case p:var o=e;return $e(o._context)+".Provider";case l:return Xn(e,e.render,"ForwardRef");case E:var d=e.displayName||null;return d!==null?d:D(e.type)||"Memo";case g:{var y=e,x=y._payload,b=y._init;try{return D(b(x))}catch{return null}}}return null}var B=Object.assign,Z=0,qe,en,nn,tn,rn,an,on;function sn(){}sn.__reactDisabledLog=!0;function Qn(){{if(Z===0){qe=console.log,en=console.info,nn=console.warn,tn=console.error,rn=console.group,an=console.groupCollapsed,on=console.groupEnd;var e={configurable:!0,enumerable:!0,value:sn,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Z++}}function Zn(){{if(Z--,Z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},e,{value:qe}),info:B({},e,{value:en}),warn:B({},e,{value:nn}),error:B({},e,{value:tn}),group:B({},e,{value:rn}),groupCollapsed:B({},e,{value:an}),groupEnd:B({},e,{value:on})})}Z<0&&C("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Te=P.ReactCurrentDispatcher,je;function re(e,t,o){{if(je===void 0)try{throw Error()}catch(y){var d=y.stack.trim().match(/\n( *(at )?)/);je=d&&d[1]||""}return`
`+je+e}}var we=!1,ae;{var $n=typeof WeakMap=="function"?WeakMap:Map;ae=new $n}function cn(e,t){if(!e||we)return"";{var o=ae.get(e);if(o!==void 0)return o}var d;we=!0;var y=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=Te.current,Te.current=null,Qn();try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(A){d=A}Reflect.construct(e,[],b)}else{try{b.call()}catch(A){d=A}e.call(b.prototype)}}else{try{throw Error()}catch(A){d=A}e()}}catch(A){if(A&&d&&typeof A.stack=="string"){for(var m=A.stack.split(`
`),O=d.stack.split(`
`),T=m.length-1,w=O.length-1;T>=1&&w>=0&&m[T]!==O[w];)w--;for(;T>=1&&w>=0;T--,w--)if(m[T]!==O[w]){if(T!==1||w!==1)do if(T--,w--,w<0||m[T]!==O[w]){var F=`
`+m[T].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,F),F}while(T>=1&&w>=0);break}}}finally{we=!1,Te.current=x,Zn(),Error.prepareStackTrace=y}var z=e?e.displayName||e.name:"",Y=z?re(z):"";return typeof e=="function"&&ae.set(e,Y),Y}function qn(e,t,o){return cn(e,!1)}function et(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ie(e,t,o){if(e==null)return"";if(typeof e=="function")return cn(e,et(e));if(typeof e=="string")return re(e);switch(e){case v:return re("Suspense");case h:return re("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return qn(e.render);case E:return ie(e.type,t,o);case g:{var d=e,y=d._payload,x=d._init;try{return ie(x(y),t,o)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,ln={},un=P.ReactDebugCurrentFrame;function oe(e){if(e){var t=e._owner,o=ie(e.type,e._source,t?t.type:null);un.setExtraStackFrame(o)}else un.setExtraStackFrame(null)}function nt(e,t,o,d,y){{var x=Function.call.bind($);for(var b in e)if(x(e,b)){var m=void 0;try{if(typeof e[b]!="function"){var O=Error((d||"React class")+": "+o+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}m=e[b](t,b,d,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){m=T}m&&!(m instanceof Error)&&(oe(y),C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",o,b,typeof m),oe(null)),m instanceof Error&&!(m.message in ln)&&(ln[m.message]=!0,oe(y),C("Failed %s type: %s",o,m.message),oe(null))}}}var tt=Array.isArray;function Ce(e){return tt(e)}function rt(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,o=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function at(e){try{return fn(e),!1}catch{return!0}}function fn(e){return""+e}function dn(e){if(at(e))return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rt(e)),fn(e)}var q=P.ReactCurrentOwner,it={key:!0,ref:!0,__self:!0,__source:!0},vn,hn,ke;ke={};function ot(e){if($.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function st(e){if($.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function ct(e,t){if(typeof e.ref=="string"&&q.current&&t&&q.current.stateNode!==t){var o=D(q.current.type);ke[o]||(C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(q.current.type),e.ref),ke[o]=!0)}}function lt(e,t){{var o=function(){vn||(vn=!0,C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function ut(e,t){{var o=function(){hn||(hn=!0,C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var ft=function(e,t,o,d,y,x,b){var m={$$typeof:n,type:e,key:t,ref:o,props:b,_owner:x};return m._store={},Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:y}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m};function dt(e,t,o,d,y){{var x,b={},m=null,O=null;o!==void 0&&(dn(o),m=""+o),st(t)&&(dn(t.key),m=""+t.key),ot(t)&&(O=t.ref,ct(t,y));for(x in t)$.call(t,x)&&!it.hasOwnProperty(x)&&(b[x]=t[x]);if(e&&e.defaultProps){var T=e.defaultProps;for(x in T)b[x]===void 0&&(b[x]=T[x])}if(m||O){var w=typeof e=="function"?e.displayName||e.name||"Unknown":e;m&&lt(b,w),O&&ut(b,w)}return ft(e,m,O,y,d,q.current,b)}}var Se=P.ReactCurrentOwner,pn=P.ReactDebugCurrentFrame;function H(e){if(e){var t=e._owner,o=ie(e.type,e._source,t?t.type:null);pn.setExtraStackFrame(o)}else pn.setExtraStackFrame(null)}var Oe;Oe=!1;function Pe(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function mn(){{if(Se.current){var e=D(Se.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vt(e){return""}var _n={};function ht(e){{var t=mn();if(!t){var o=typeof e=="string"?e:e.displayName||e.name;o&&(t=`

Check the top-level render call using <`+o+">.")}return t}}function bn(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=ht(t);if(_n[o])return;_n[o]=!0;var d="";e&&e._owner&&e._owner!==Se.current&&(d=" It was passed a child from "+D(e._owner.type)+"."),H(e),C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,d),H(null)}}function gn(e,t){{if(typeof e!="object")return;if(Ce(e))for(var o=0;o<e.length;o++){var d=e[o];Pe(d)&&bn(d,t)}else if(Pe(e))e._store&&(e._store.validated=!0);else if(e){var y=S(e);if(typeof y=="function"&&y!==e.entries)for(var x=y.call(e),b;!(b=x.next()).done;)Pe(b.value)&&bn(b.value,t)}}}function pt(e){{var t=e.type;if(t==null||typeof t=="string")return;var o;if(typeof t=="function")o=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===l||t.$$typeof===E))o=t.propTypes;else return;if(o){var d=D(t);nt(o,e.props,"prop",d,e)}else if(t.PropTypes!==void 0&&!Oe){Oe=!0;var y=D(t);C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",y||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function mt(e){{for(var t=Object.keys(e.props),o=0;o<t.length;o++){var d=t[o];if(d!=="children"&&d!=="key"){H(e),C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),H(null);break}}e.ref!==null&&(H(e),C("Invalid attribute `ref` supplied to `React.Fragment`."),H(null))}}var yn={};function En(e,t,o,d,y,x){{var b=Gn(e);if(!b){var m="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(m+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=vt();O?m+=O:m+=mn();var T;e===null?T="null":Ce(e)?T="array":e!==void 0&&e.$$typeof===n?(T="<"+(D(e.type)||"Unknown")+" />",m=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,m)}var w=dt(e,t,o,y,x);if(w==null)return w;if(b){var F=t.children;if(F!==void 0)if(d)if(Ce(F)){for(var z=0;z<F.length;z++)gn(F[z],e);Object.freeze&&Object.freeze(F)}else C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else gn(F,e)}if($.call(t,"key")){var Y=D(e),A=Object.keys(t).filter(function(xt){return xt!=="key"}),Ae=A.length>0?"{key: someKey, "+A.join(": ..., ")+": ...}":"{key: someKey}";if(!yn[Y+Ae]){var Et=A.length>0?"{"+A.join(": ..., ")+": ...}":"{}";C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ae,Y,Et,Y),yn[Y+Ae]=!0}}return e===s?mt(w):pt(w),w}}function _t(e,t,o){return En(e,t,o,!0)}function bt(e,t,o){return En(e,t,o,!1)}var gt=bt,yt=_t;J.Fragment=s,J.jsx=gt,J.jsxs=yt}()),J}process.env.NODE_ENV==="production"?se.exports=wn():se.exports=Cn();var u=se.exports;const ce=`
`,le="[\\.|,]",kn=new RegExp(`.*\\]${le}?$`),Sn=new RegExp(`\\]${le}?$`,"g"),On=new RegExp(`${le}$`);function Pn(r,n){function a(c,l){if(c.match(kn)&&c.indexOf("|")>-1){const v=c.replace(Sn,"]"),E=v.substring(1,v.length-1).split("|"),g=E[0],R=E[1].replaceAll(ce," ");return u.jsxs(_.Fragment,{children:[n(g,R),c.match(On)?`${c.slice(-1)}`:""]},l)}return c}const p=(c=>{const l=c.split("|");return l.length>1?l.map(v=>{const h=v.split("]");return h.length===2?`${h[0].replaceAll(" ",ce)}]${h[1]}`:v}).join("|"):c})(r).split(" ").map((c,l)=>c.length<2?c:c.startsWith("*")?u.jsx("strong",{children:c.substring(1,c.length)},l):c.startsWith("[")?a(c,l):c==="!!"?u.jsx("br",{},l):c.replaceAll(ce," ")).reduce((c,l)=>[...c," ",l],[]);return p.shift(),u.jsx(u.Fragment,{children:p})}const An=()=>{const[r,n]=_.useState({height:window.innerHeight,width:window.innerWidth});return _.useEffect(()=>{const a=Ne(function(){n({height:window.innerHeight,width:window.innerWidth})},1e3);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),r},ue={accordion:"_accordion_okvze_1",tab:"_tab_okvze_27",tab__content:"_tab__content_okvze_38"};function Nn({model:r,groupName:n,isSingle:a=!0}){const[s,i]=_.useState(""),f=_.useCallback(c=>{const l=c.currentTarget;s===l.value?(l.checked=!1,i("")):i(l.value)},[s]),p=_.useMemo(()=>r.map((c,l)=>u.jsxs("div",{className:ue.tab,children:[u.jsxs("label",{children:[c.label,u.jsx("input",{type:a?"radio":"checkbox",value:l,name:n,onClick:a?f:void 0})]}),u.jsx("div",{className:ue.tab__content,children:u.jsx("p",{children:c.content})})]},c.label)),[r,a,n,f]);return u.jsx("div",{className:ue.accordion,children:p})}const V={announcement:"_announcement_149a8_1",only_one:"_only_one_149a8_11",close:"_close_149a8_25",button_prev:"_button_prev_149a8_77"};function Fn({ariaAnnouncementTitle:r,announcements:n,classes:a=""}){const[s,i]=_.useState(0),f=()=>i(s-1>=0?s-1:n.length-1),p=()=>i(n.length>s+1?s+1:0),c=n.length===1;return n.length<1?null:u.jsxs("div",{role:"status",title:r,className:`${V.announcement} ${c?V.only_one:""} ${a}`,children:[!c&&u.jsx("button",{onClick:f,className:`${V.button} ${V.button_prev}`,children:u.jsx("i",{"aria-label":"previous announcement"})}),u.jsx("p",{children:n[s]}),!c&&u.jsx("button",{onClick:p,className:V.button,children:u.jsx("i",{"aria-label":"next announcement"})}),u.jsxs("label",{className:V.close,children:[u.jsx("span",{"aria-label":"Close Announcement"}),u.jsx("input",{type:"checkbox"})]})]})}const ee={minimenu:"_minimenu_1c4fs_1",sticky:"_sticky_1c4fs_1",underline:"_underline_1c4fs_27"};function Ln({model:r,onScrollMonitor:n}){const[a,s]=_.useState(0),i=_.useRef([]),f=_.useRef(null),[p,c]=_.useState(0),l=_.useCallback(()=>{n&&n(),f.current&&(window.scrollY>p?f.current.classList.add(ee.sticky):f.current.classList.remove(ee.sticky))},[p,n]),v=_.useCallback(g=>{const R=g[0].target,N=r.findIndex(P=>P.hashId===R.id),L=N<0?0:N,S=i.current[L];S!==null&&g[0].isIntersecting&&(S.scrollIntoViewIfNeeded(!0),s(L))},[r]),h=_.useCallback(()=>{const g=new IntersectionObserver(v,{threshold:[.3]}),R=new IntersectionObserver(v,{threshold:[1]});return r.forEach(N=>{const L=document.getElementById(N.hashId);L!==null&&(L.clientHeight<window.innerHeight?R.observe(L):g.observe(L))}),[g,R]},[v,r]),E=_.useCallback(g=>()=>{s(g)},[]);return _.useEffect(()=>{var R;const g=h();return c(((R=f.current)==null?void 0:R.getBoundingClientRect().top)||0),l(),window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),g.forEach(N=>N.disconnect())}},[l,h]),u.jsx("nav",{className:ee.minimenu,ref:f,children:r.map((g,R)=>u.jsxs(_.Fragment,{children:[R!==0&&u.jsx("div",{role:"separator"}),u.jsx("a",{href:`#${g.hashId}`,ref:N=>{i.current[R]=N},className:R===a?`${ee.underline} italic`:void 0,onClick:E(R),children:u.jsx("span",{children:g.title})})]},g.hashId))})}const j={desktop__nav:"_desktop__nav_1ingh_1",mobile__nav:"_mobile__nav_1ingh_1",top_menu_container:"_top_menu_container_1ingh_6",expand:"_expand_1ingh_12",expand_dummy:"_expand_dummy_1ingh_13","home-logo":"_home-logo_1ingh_67",menu:"_menu_1ingh_72",subnav_content:"_subnav_content_1ingh_79",subnav:"_subnav_1ingh_79",open:"_open_1ingh_89",grow:"_grow_1ingh_1","mobile-menu":"_mobile-menu_1ingh_137",hamb:"_hamb_1ingh_144","hamb-line":"_hamb-line_1ingh_149","hamb-hidden":"_hamb-hidden_1ingh_175",top__menu:"_top__menu_1ingh_179",side__menu:"_side__menu_1ingh_180"};function Wn({menuLink:r,topMenuItem:n,subMenu:a,unCheckSideMenu:s}){const[i,f]=_.useState(!1),p=_.useRef(null),c=_.useCallback(()=>{f(!i)},[i]),l=_.useCallback(h=>{(h.key==="Escape"||h.key==="ArrowUp")&&f(!1),h.key==="ArrowDown"&&f(!0)},[]),v=_.useCallback(h=>{var g;let E=(g=h.relatedTarget)==null?void 0:g.parentNode;for(let R=0;R<8;R++)if(E=E==null?void 0:E.parentNode,E===p.current)return;f(!1)},[]);return n.items!==void 0?u.jsxs("li",{role:"menuitem",className:`${j.subnav} ${i?j.open:""}`,onBlur:v,ref:p,"aria-expanded":i,children:[u.jsxs("div",{className:j.top_menu_container,children:[r(n.label,n.url),u.jsx("button",{onClick:c,onKeyUp:l,"aria-label":`Expand ${n.label}`,"aria-expanded":i,className:j.expand})]}),u.jsx("div",{className:j.subnav_content,children:u.jsx("ul",{role:"menu",onFocus:h=>h.stopPropagation(),children:a(n.items,n.url,s)})})]}):u.jsx("li",{role:"menuitem",children:u.jsxs("div",{className:j.top_menu_container,children:[r(n.label,n.url),u.jsx("div",{className:j.expand_dummy})]})},n.label)}function Dn({menuLink:r,topMenuItem:n,subMenu:a,unCheckSideMenu:s}){const[i,f]=_.useState(!1),p=_.useCallback(()=>{f(!i)},[i]),c=_.useCallback(l=>{(l.key==="Space"||l.key===" "||l.key==="Enter")&&l.currentTarget.firstElementChild.click()},[]);return n.items!==void 0?u.jsxs("li",{role:"menuitem",className:j.subnav,"aria-expanded":i,children:[u.jsx("label",{className:j.top__menu,tabIndex:0,onClick:p,onKeyUp:c,"aria-label":`Expand ${n.label}`,children:u.jsx("input",{type:"radio",name:"top_menu",value:n.label})}),r(n.label,n.url,s),u.jsx("div",{className:j.subnav_content,children:u.jsx("ul",{role:"menu",children:a(n.items,n.url,s)})})]},n.label):u.jsx("li",{role:"menuitem",children:r(n.label,n.url,s)},n.label)}function We({menuLink:r,homeLink:n,homeLogoLink:a,model:s,shortcutComponent:i,mobileStyle:f={},desktopStyle:p={},desktopClassName:c="",mobileClassName:l=""}){const v=_.useRef(null),h=(S,P)=>P===void 0||P===""?S:P.replace(/^#/,`${S}#`),E=()=>{v.current&&(v.current.checked=!1,document.body.style.overflow="auto")},g=S=>{document.body.style.overflow=S.target.checked?"hidden":"auto"},R=(S,P,C)=>S.map(Q=>u.jsx("li",{role:"menuitem",children:r(Q.label,h(P,Q.url),C)},Q.label)),N=s.map(S=>u.jsx(Wn,{menuLink:r,topMenuItem:S,subMenu:R,unCheckSideMenu:E},S.label)),L=s.map(S=>u.jsx(Dn,{menuLink:r,topMenuItem:S,subMenu:R,unCheckSideMenu:E},S.label));return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`${j.mobile__nav} ${l}`,style:f,children:[u.jsxs("div",{className:j["mobile-menu"],children:[u.jsxs("label",{className:j.hamb,"aria-label":"Main Menu",children:[u.jsx("input",{className:j.side__menu,type:"checkbox",ref:v,onChange:g}),u.jsx("span",{className:j["hamb-line"]}),u.jsx("span",{className:j["hamb-hidden"],children:"Hamburger Menu"})]}),n("/",E,-1),i&&i]}),u.jsx("nav",{role:"menubar",className:j.menu,children:u.jsx("ul",{role:"menu","aria-orientation":"horizontal",children:L})})]}),u.jsx("div",{className:`${j.desktop__nav} ${c}`,style:p,children:u.jsx("nav",{role:"menubar",className:j.menu,children:u.jsxs("ul",{role:"menu","aria-orientation":"horizontal",children:[u.jsx("li",{role:"menuitem",children:a(j["home-logo"])}),N,u.jsx("li",{role:"menuitem",children:i&&i})]})})})]})}const In=_.memo(We,()=>!0);var fe,De=-1,G=function(r){addEventListener("pageshow",function(n){n.persisted&&(De=n.timeStamp,r(n))},!0)},Ie=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},de=function(){var r=Ie();return r&&r.activationStart||0},I=function(r,n){var a=Ie(),s="navigate";return De>=0?s="back-forward-cache":a&&(document.prerendering||de()>0?s="prerender":document.wasDiscarded?s="restore":a.type&&(s=a.type.replace(/_/g,"-"))),{name:r,value:n===void 0?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:s}},X=function(r,n,a){try{if(PerformanceObserver.supportedEntryTypes.includes(r)){var s=new PerformanceObserver(function(i){Promise.resolve().then(function(){n(i.getEntries())})});return s.observe(Object.assign({type:r,buffered:!0},a||{})),s}}catch{}},M=function(r,n,a,s){var i,f;return function(p){n.value>=0&&(p||s)&&((f=n.value-(i||0))||i===void 0)&&(i=n.value,n.delta=f,n.rating=function(c,l){return c>l[1]?"poor":c>l[0]?"needs-improvement":"good"}(n.value,a),r(n))}},ve=function(r){requestAnimationFrame(function(){return requestAnimationFrame(function(){return r()})})},he=function(r){var n=function(a){a.type!=="pagehide"&&document.visibilityState!=="hidden"||r(a)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Me=function(r){var n=!1;return function(a){n||(r(a),n=!0)}},U=-1,Be=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ne=function(r){document.visibilityState==="hidden"&&U>-1&&(U=r.type==="visibilitychange"?r.timeStamp:0,Mn())},Ye=function(){addEventListener("visibilitychange",ne,!0),addEventListener("prerenderingchange",ne,!0)},Mn=function(){removeEventListener("visibilitychange",ne,!0),removeEventListener("prerenderingchange",ne,!0)},Ve=function(){return U<0&&(U=Be(),Ye(),G(function(){setTimeout(function(){U=Be(),Ye()},0)})),{get firstHiddenTime(){return U}}},pe=function(r){document.prerendering?addEventListener("prerenderingchange",function(){return r()},!0):r()},me=[1800,3e3],_e=function(r,n){n=n||{},pe(function(){var a,s=Ve(),i=I("FCP"),f=X("paint",function(p){p.forEach(function(c){c.name==="first-contentful-paint"&&(f.disconnect(),c.startTime<s.firstHiddenTime&&(i.value=Math.max(c.startTime-de(),0),i.entries.push(c),a(!0)))})});f&&(a=M(r,i,me,n.reportAllChanges),G(function(p){i=I("FCP"),a=M(r,i,me,n.reportAllChanges),ve(function(){i.value=performance.now()-p.timeStamp,a(!0)})}))})},be=[.1,.25],Ue=function(r,n){n=n||{},_e(Me(function(){var a,s=I("CLS",0),i=0,f=[],p=function(l){l.forEach(function(v){if(!v.hadRecentInput){var h=f[0],E=f[f.length-1];i&&v.startTime-E.startTime<1e3&&v.startTime-h.startTime<5e3?(i+=v.value,f.push(v)):(i=v.value,f=[v])}}),i>s.value&&(s.value=i,s.entries=f,a())},c=X("layout-shift",p);c&&(a=M(r,s,be,n.reportAllChanges),he(function(){p(c.takeRecords()),a(!0)}),G(function(){i=0,s=I("CLS",0),a=M(r,s,be,n.reportAllChanges),ve(function(){return a()})}),setTimeout(a,0))}))},He=0,ge=1/0,te=0,Bn=function(r){r.forEach(function(n){n.interactionId&&(ge=Math.min(ge,n.interactionId),te=Math.max(te,n.interactionId),He=te?(te-ge)/7+1:0)})},ze=function(){return fe?He:performance.interactionCount||0},Yn=function(){"interactionCount"in performance||fe||(fe=X("event",Bn,{type:"event",buffered:!0,durationThreshold:0}))},ye=[200,500],Ke=0,Je=function(){return ze()-Ke},W=[],Ee={},Ge=function(r){var n=W[W.length-1],a=Ee[r.interactionId];if(a||W.length<10||r.duration>n.latency){if(a)a.entries.push(r),a.latency=Math.max(a.latency,r.duration);else{var s={id:r.interactionId,latency:r.duration,entries:[r]};Ee[s.id]=s,W.push(s)}W.sort(function(i,f){return f.latency-i.latency}),W.splice(10).forEach(function(i){delete Ee[i.id]})}},Xe=function(r,n){n=n||{},pe(function(){var a;Yn();var s,i=I("INP"),f=function(c){c.forEach(function(h){h.interactionId&&Ge(h),h.entryType==="first-input"&&!W.some(function(E){return E.entries.some(function(g){return h.duration===g.duration&&h.startTime===g.startTime})})&&Ge(h)});var l,v=(l=Math.min(W.length-1,Math.floor(Je()/50)),W[l]);v&&v.latency!==i.value&&(i.value=v.latency,i.entries=v.entries,s())},p=X("event",f,{durationThreshold:(a=n.durationThreshold)!==null&&a!==void 0?a:40});s=M(r,i,ye,n.reportAllChanges),p&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&p.observe({type:"first-input",buffered:!0}),he(function(){f(p.takeRecords()),i.value<0&&Je()>0&&(i.value=0,i.entries=[]),s(!0)}),G(function(){W=[],Ke=ze(),i=I("INP"),s=M(r,i,ye,n.reportAllChanges)}))})},xe=[2500,4e3],Re={},Qe=function(r,n){n=n||{},pe(function(){var a,s=Ve(),i=I("LCP"),f=function(l){var v=l[l.length-1];v&&v.startTime<s.firstHiddenTime&&(i.value=Math.max(v.startTime-de(),0),i.entries=[v],a())},p=X("largest-contentful-paint",f);if(p){a=M(r,i,xe,n.reportAllChanges);var c=Me(function(){Re[i.id]||(f(p.takeRecords()),p.disconnect(),Re[i.id]=!0,a(!0))});["keydown","click"].forEach(function(l){addEventListener(l,function(){return setTimeout(c,0)},!0)}),he(c),G(function(l){i=I("LCP"),a=M(r,i,xe,n.reportAllChanges),ve(function(){i.value=performance.now()-l.timeStamp,Re[i.id]=!0,a(!0)})})}})};const Vn=Object.freeze(Object.defineProperty({__proto__:null,CLSThresholds:be,FCPThresholds:me,INPThresholds:ye,LCPThresholds:xe,getCLS:Ue,getFCP:_e,getINP:Xe,getLCP:Qe,onCLS:Ue,onFCP:_e,onINP:Xe,onLCP:Qe},Symbol.toStringTag,{value:"Module"}));k.Accordion=Nn,k.Announcement=Fn,k.Menu=In,k.MiniMenu=Ln,k.MutableMenu=We,k.consoleReportHandler=Rn,k.debounce=Ne,k.htmlConvertor=Pn,k.reportWebVitals=jn,k.useNavigationListener=xn,k.useWindowListener=An,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
