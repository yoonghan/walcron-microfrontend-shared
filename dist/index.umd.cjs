(function(k,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],p):(k=typeof globalThis<"u"?globalThis:k||self,p(k["Micro Frontend Shared"]={},k.React))})(this,function(k,p){"use strict";const wn=({appName:r,containerName:n,props:a})=>{p.useEffect(()=>{window.dispatchEvent(new CustomEvent(`[${r}] navigated`,{detail:a.pathname}))},[r,a.pathname]),p.useEffect(()=>{function o(i){const d=i.detail;a.pathname!==d&&a.navigate(d)}return window.addEventListener(`[${n}] navigated`,o),()=>{window.removeEventListener(`[${n}] navigated`,o)}},[n,a])};function kn(r){console.log(r)}const Sn=r=>n=>{r({...n,delta:n.delta*1e3})},On=r=>{r&&r instanceof Function&&Promise.resolve().then(()=>Qn).then(({onCLS:n,onINP:a,onLCP:o})=>{n(Sn(r)),a(r),o(r)})};function De(r,n){let a;return()=>{/* istanbul ignore if -- @preserve */a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,r()},n)}}var ue={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function Pn(){if(Ie)return G;Ie=1;var r=p,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function _(c,u,f){var v,x={},g=null,R=null;f!==void 0&&(g=""+f),u.key!==void 0&&(g=""+u.key),u.ref!==void 0&&(R=u.ref);for(v in u)o.call(u,v)&&!d.hasOwnProperty(v)&&(x[v]=u[v]);if(c&&c.defaultProps)for(v in u=c.defaultProps,u)x[v]===void 0&&(x[v]=u[v]);return{$$typeof:n,type:c,key:g,ref:R,props:x,_owner:i.current}}return G.Fragment=a,G.jsx=_,G.jsxs=_,G}var X={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function An(){return Me||(Me=1,process.env.NODE_ENV!=="production"&&function(){var r=p,n=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),A=Symbol.iterator,F="@@iterator";function B(e){if(e===null||typeof e!="object")return null;var t=A&&e[A]||e[F];return typeof t=="function"?t:null}var W=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(e){{for(var t=arguments.length,s=new Array(t>1?t-1:0),h=1;h<t;h++)s[h-1]=arguments[h];je("error",e,s)}}function je(e,t,s){{var h=W.ReactDebugCurrentFrame,y=h.getStackAddendum();y!==""&&(t+="%s",s=s.concat([y]));var E=s.map(function(m){return String(m)});E.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,E)}}var we=!1,S=!1,z=!1,ke=!1,$=!1,tn;tn=Symbol.for("react.module.reference");function Zn(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===d||$||e===i||e===f||e===v||ke||e===R||we||S||z||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===x||e.$$typeof===_||e.$$typeof===c||e.$$typeof===u||e.$$typeof===tn||e.getModuleId!==void 0))}function $n(e,t,s){var h=e.displayName;if(h)return h;var y=t.displayName||t.name||"";return y!==""?s+"("+y+")":s}function rn(e){return e.displayName||"Context"}function D(e){if(e==null)return null;if(typeof e.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case a:return"Portal";case d:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case c:var t=e;return rn(t)+".Consumer";case _:var s=e;return rn(s._context)+".Provider";case u:return $n(e,e.render,"ForwardRef");case x:var h=e.displayName||null;return h!==null?h:D(e.type)||"Memo";case g:{var y=e,E=y._payload,m=y._init;try{return D(m(E))}catch{return null}}}return null}var Y=Object.assign,q=0,an,on,sn,cn,ln,un,fn;function dn(){}dn.__reactDisabledLog=!0;function qn(){{if(q===0){an=console.log,on=console.info,sn=console.warn,cn=console.error,ln=console.group,un=console.groupCollapsed,fn=console.groupEnd;var e={configurable:!0,enumerable:!0,value:dn,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function et(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Y({},e,{value:an}),info:Y({},e,{value:on}),warn:Y({},e,{value:sn}),error:Y({},e,{value:cn}),group:Y({},e,{value:ln}),groupCollapsed:Y({},e,{value:un}),groupEnd:Y({},e,{value:fn})})}q<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Se=W.ReactCurrentDispatcher,Oe;function oe(e,t,s){{if(Oe===void 0)try{throw Error()}catch(y){var h=y.stack.trim().match(/\n( *(at )?)/);Oe=h&&h[1]||""}return`
`+Oe+e}}var Pe=!1,se;{var nt=typeof WeakMap=="function"?WeakMap:Map;se=new nt}function vn(e,t){if(!e||Pe)return"";{var s=se.get(e);if(s!==void 0)return s}var h;Pe=!0;var y=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=Se.current,Se.current=null,qn();try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(P){h=P}Reflect.construct(e,[],m)}else{try{m.call()}catch(P){h=P}e.call(m.prototype)}}else{try{throw Error()}catch(P){h=P}e()}}catch(P){if(P&&h&&typeof P.stack=="string"){for(var b=P.stack.split(`
`),O=h.stack.split(`
`),T=b.length-1,j=O.length-1;T>=1&&j>=0&&b[T]!==O[j];)j--;for(;T>=1&&j>=0;T--,j--)if(b[T]!==O[j]){if(T!==1||j!==1)do if(T--,j--,j<0||b[T]!==O[j]){var N=`
`+b[T].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),typeof e=="function"&&se.set(e,N),N}while(T>=1&&j>=0);break}}}finally{Pe=!1,Se.current=E,et(),Error.prepareStackTrace=y}var K=e?e.displayName||e.name:"",U=K?oe(K):"";return typeof e=="function"&&se.set(e,U),U}function tt(e,t,s){return vn(e,!1)}function rt(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ce(e,t,s){if(e==null)return"";if(typeof e=="function")return vn(e,rt(e));if(typeof e=="string")return oe(e);switch(e){case f:return oe("Suspense");case v:return oe("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case u:return tt(e.render);case x:return ce(e.type,t,s);case g:{var h=e,y=h._payload,E=h._init;try{return ce(E(y),t,s)}catch{}}}return""}var ee=Object.prototype.hasOwnProperty,hn={},pn=W.ReactDebugCurrentFrame;function le(e){if(e){var t=e._owner,s=ce(e.type,e._source,t?t.type:null);pn.setExtraStackFrame(s)}else pn.setExtraStackFrame(null)}function at(e,t,s,h,y){{var E=Function.call.bind(ee);for(var m in e)if(E(e,m)){var b=void 0;try{if(typeof e[m]!="function"){var O=Error((h||"React class")+": "+s+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}b=e[m](t,m,h,s,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){b=T}b&&!(b instanceof Error)&&(le(y),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",h||"React class",s,m,typeof b),le(null)),b instanceof Error&&!(b.message in hn)&&(hn[b.message]=!0,le(y),w("Failed %s type: %s",s,b.message),le(null))}}}var it=Array.isArray;function Ae(e){return it(e)}function ot(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,s=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s}}function st(e){try{return _n(e),!1}catch{return!0}}function _n(e){return""+e}function bn(e){if(st(e))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ot(e)),_n(e)}var ne=W.ReactCurrentOwner,ct={key:!0,ref:!0,__self:!0,__source:!0},mn,gn,Ne;Ne={};function lt(e){if(ee.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function ut(e){if(ee.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function ft(e,t){if(typeof e.ref=="string"&&ne.current&&t&&ne.current.stateNode!==t){var s=D(ne.current.type);Ne[s]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(ne.current.type),e.ref),Ne[s]=!0)}}function dt(e,t){{var s=function(){mn||(mn=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}}function vt(e,t){{var s=function(){gn||(gn=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};s.isReactWarning=!0,Object.defineProperty(e,"ref",{get:s,configurable:!0})}}var ht=function(e,t,s,h,y,E,m){var b={$$typeof:n,type:e,key:t,ref:s,props:m,_owner:E};return b._store={},Object.defineProperty(b._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(b,"_self",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.defineProperty(b,"_source",{configurable:!1,enumerable:!1,writable:!1,value:y}),Object.freeze&&(Object.freeze(b.props),Object.freeze(b)),b};function pt(e,t,s,h,y){{var E,m={},b=null,O=null;s!==void 0&&(bn(s),b=""+s),ut(t)&&(bn(t.key),b=""+t.key),lt(t)&&(O=t.ref,ft(t,y));for(E in t)ee.call(t,E)&&!ct.hasOwnProperty(E)&&(m[E]=t[E]);if(e&&e.defaultProps){var T=e.defaultProps;for(E in T)m[E]===void 0&&(m[E]=T[E])}if(b||O){var j=typeof e=="function"?e.displayName||e.name||"Unknown":e;b&&dt(m,j),O&&vt(m,j)}return ht(e,b,O,y,h,ne.current,m)}}var Fe=W.ReactCurrentOwner,yn=W.ReactDebugCurrentFrame;function J(e){if(e){var t=e._owner,s=ce(e.type,e._source,t?t.type:null);yn.setExtraStackFrame(s)}else yn.setExtraStackFrame(null)}var Le;Le=!1;function We(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function En(){{if(Fe.current){var e=D(Fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function _t(e){return""}var xn={};function bt(e){{var t=En();if(!t){var s=typeof e=="string"?e:e.displayName||e.name;s&&(t=`

Check the top-level render call using <`+s+">.")}return t}}function Rn(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var s=bt(t);if(xn[s])return;xn[s]=!0;var h="";e&&e._owner&&e._owner!==Fe.current&&(h=" It was passed a child from "+D(e._owner.type)+"."),J(e),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',s,h),J(null)}}function Tn(e,t){{if(typeof e!="object")return;if(Ae(e))for(var s=0;s<e.length;s++){var h=e[s];We(h)&&Rn(h,t)}else if(We(e))e._store&&(e._store.validated=!0);else if(e){var y=B(e);if(typeof y=="function"&&y!==e.entries)for(var E=y.call(e),m;!(m=E.next()).done;)We(m.value)&&Rn(m.value,t)}}}function mt(e){{var t=e.type;if(t==null||typeof t=="string")return;var s;if(typeof t=="function")s=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===u||t.$$typeof===x))s=t.propTypes;else return;if(s){var h=D(t);at(s,e.props,"prop",h,e)}else if(t.PropTypes!==void 0&&!Le){Le=!0;var y=D(t);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",y||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gt(e){{for(var t=Object.keys(e.props),s=0;s<t.length;s++){var h=t[s];if(h!=="children"&&h!=="key"){J(e),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",h),J(null);break}}e.ref!==null&&(J(e),w("Invalid attribute `ref` supplied to `React.Fragment`."),J(null))}}var Cn={};function jn(e,t,s,h,y,E){{var m=Zn(e);if(!m){var b="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(b+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=_t();O?b+=O:b+=En();var T;e===null?T="null":Ae(e)?T="array":e!==void 0&&e.$$typeof===n?(T="<"+(D(e.type)||"Unknown")+" />",b=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,b)}var j=pt(e,t,s,y,E);if(j==null)return j;if(m){var N=t.children;if(N!==void 0)if(h)if(Ae(N)){for(var K=0;K<N.length;K++)Tn(N[K],e);Object.freeze&&Object.freeze(N)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Tn(N,e)}if(ee.call(t,"key")){var U=D(e),P=Object.keys(t).filter(function(Ct){return Ct!=="key"}),ze=P.length>0?"{key: someKey, "+P.join(": ..., ")+": ...}":"{key: someKey}";if(!Cn[U+ze]){var Tt=P.length>0?"{"+P.join(": ..., ")+": ...}":"{}";w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ze,U,Tt,U),Cn[U+ze]=!0}}return e===o?gt(j):mt(j),j}}function yt(e,t,s){return jn(e,t,s,!0)}function Et(e,t,s){return jn(e,t,s,!1)}var xt=Et,Rt=yt;X.Fragment=o,X.jsx=xt,X.jsxs=Rt}()),X}process.env.NODE_ENV==="production"?ue.exports=Pn():ue.exports=An();var l=ue.exports;const fe=`
`,de="[\\.|,]",Nn=new RegExp(`.*\\]${de}?$`),Fn=new RegExp(`\\]${de}?$`,"g"),Ln=new RegExp(`${de}$`);function Wn(r,n){function a(c,u){if(c.match(Nn)&&c.indexOf("|")>-1){const f=c.replace(Fn,"]"),x=f.substring(1,f.length-1).split("|"),g=x[0],R=x[1].replaceAll(fe," ");return l.jsxs(p.Fragment,{children:[n(g,R),c.match(Ln)?`${c.slice(-1)}`:""]},u)}return c}const _=(c=>{const u=c.split("|");return u.length>1?u.map(f=>{const v=f.split("]");return v.length===2?`${v[0].replaceAll(" ",fe)}]${v[1]}`:f}).join("|"):c})(r).split(" ").map((c,u)=>c.length<2?c:c.startsWith("*")?l.jsx("strong",{children:c.substring(1,c.length)},u):c.startsWith("[")?a(c,u):c==="!!"?l.jsx("br",{},u):c.replaceAll(fe," ")).reduce((c,u)=>[...c," ",u],[]);return _.shift(),l.jsx(l.Fragment,{children:_})}const zn=()=>{const[r,n]=p.useState({height:window.innerHeight,width:window.innerWidth});return p.useEffect(()=>{const a=De(function(){n({height:window.innerHeight,width:window.innerWidth})},1e3);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),r},te={accordion:"_accordion_11xxy_1",tab:"_tab_11xxy_24",selectable:"_selectable_11xxy_29",tab__content:"_tab__content_11xxy_42"};function Dn({model:r,groupName:n,isSingle:a=!0}){const[o,i]=p.useState(""),d=p.useCallback(c=>{const u=c.currentTarget;o===u.value?(u.checked=!1,i("")):i(u.value)},[o]),_=p.useMemo(()=>r.map((c,u)=>l.jsx(In,{label:c.label,isSingle:a,value:u,groupName:n,onInputClick:d,content:c.content},c.label)),[r,a,n,d]);return l.jsx("div",{className:te.accordion,children:_})}function In({label:r,isSingle:n,value:a,groupName:o,onInputClick:i,content:d}){const[_,c]=p.useState(!1),u=p.useCallback(f=>{if(f.key===" "||f.key==="Enter"){const v=f.currentTarget.firstElementChild;v!==null&&v.click()}},[]);return p.useEffect(()=>{c(!0)},[]),l.jsxs("div",{className:`${te.tab} ${_?te.selectable:""}`,tabIndex:_?0:void 0,onKeyUp:u,children:[l.jsxs("label",{children:[r,l.jsx("input",{type:n?"radio":"checkbox",value:a,name:o,onClick:n?i:void 0})]}),l.jsx("div",{className:te.tab__content,children:l.jsx("div",{children:d})})]})}const V={announcement:"_announcement_149a8_1",only_one:"_only_one_149a8_11",close:"_close_149a8_25",button_prev:"_button_prev_149a8_77"};function Mn({ariaAnnouncementTitle:r,announcements:n,classes:a=""}){const[o,i]=p.useState(0),d=()=>i(o-1>=0?o-1:n.length-1),_=()=>i(n.length>o+1?o+1:0),c=n.length===1;return n.length<1?null:l.jsxs("div",{role:"status",title:r,className:`${V.announcement} ${c?V.only_one:""} ${a}`,children:[!c&&l.jsx("button",{onClick:d,className:`${V.button} ${V.button_prev}`,children:l.jsx("i",{"aria-label":"previous announcement"})}),l.jsx("p",{children:n[o]}),!c&&l.jsx("button",{onClick:_,className:V.button,children:l.jsx("i",{"aria-label":"next announcement"})}),l.jsx("label",{className:V.close,"aria-label":"Close Announcement",children:l.jsx("input",{type:"checkbox"})})]})}const re={minimenu:"_minimenu_1c4fs_1",sticky:"_sticky_1c4fs_1",underline:"_underline_1c4fs_27"};function Bn({model:r,onScrollMonitor:n}){const[a,o]=p.useState(0),i=p.useRef([]),d=p.useRef(null),[_,c]=p.useState(0),u=p.useCallback(()=>{n&&n(),d.current&&(window.scrollY>_?d.current.classList.add(re.sticky):d.current.classList.remove(re.sticky))},[_,n]),f=p.useCallback(g=>{const R=g[0].target,A=r.findIndex(W=>W.hashId===R.id),F=A<0?0:A,B=i.current[F];B!==null&&g[0].isIntersecting&&(B.scrollIntoViewIfNeeded(!0),o(F))},[r]),v=p.useCallback(()=>{const g=new IntersectionObserver(f,{threshold:[.3]}),R=new IntersectionObserver(f,{threshold:[1]});return r.forEach(A=>{const F=document.getElementById(A.hashId);F!==null&&(F.clientHeight<window.innerHeight?R.observe(F):g.observe(F))}),[g,R]},[f,r]),x=p.useCallback(g=>()=>{o(g)},[]);return p.useEffect(()=>{var R;const g=v();return c(((R=d.current)==null?void 0:R.getBoundingClientRect().top)||0),u(),window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u),g.forEach(A=>A.disconnect())}},[u,v]),l.jsx("nav",{className:re.minimenu,ref:d,children:r.map((g,R)=>l.jsxs(p.Fragment,{children:[R!==0&&l.jsx("div",{role:"separator"}),l.jsx("a",{href:`#${g.hashId}`,ref:A=>{i.current[R]=A},className:R===a?`${re.underline} italic`:void 0,onClick:x(R),children:l.jsx("span",{children:g.title})})]},g.hashId))})}const C={desktop__nav:"_desktop__nav_1xz1z_1",mobile__nav:"_mobile__nav_1xz1z_1",top_menu_container:"_top_menu_container_1xz1z_6",expand:"_expand_1xz1z_12",expand_dummy:"_expand_dummy_1xz1z_13",home_logo:"_home_logo_1xz1z_67",subnav_content:"_subnav_content_1xz1z_78",subnav:"_subnav_1xz1z_78",open:"_open_1xz1z_88",grow:"_grow_1xz1z_1",menu:"_menu_1xz1z_129","mobile-menu":"_mobile-menu_1xz1z_149",hamb:"_hamb_1xz1z_156",hamb_line:"_hamb_line_1xz1z_163",menu_hamburger:"_menu_hamburger_1xz1z_189",side__menu:"_side__menu_1xz1z_197",top__menu:"_top__menu_1xz1z_214"};function Yn({menuLink:r,topMenuItem:n,subMenu:a}){const[o,i]=p.useState(!1),d=p.useRef(null),_=p.useCallback(()=>{i(!o)},[o]),c=p.useCallback(f=>{(f.key==="Escape"||f.key==="ArrowUp")&&i(!1),f.key==="ArrowDown"&&i(!0)},[]),u=p.useCallback(f=>{var x;let v=(x=f.relatedTarget)==null?void 0:x.parentNode;for(let g=0;g<8;g++)if(v=v==null?void 0:v.parentNode,v===d.current)return;i(!1)},[]);return n.items!==void 0?l.jsxs("li",{className:`${C.subnav} ${o?C.open:""}`,onBlur:u,ref:d,children:[l.jsxs("div",{className:C.top_menu_container,children:[r(n.label,n.url,void 0),l.jsx("button",{onClick:_,onKeyUp:c,"aria-label":`${n.label}`,"aria-expanded":o,className:C.expand})]}),l.jsx("div",{className:C.subnav_content,children:l.jsx("ul",{children:a(n.items,n.url)})})]}):l.jsx("li",{children:l.jsxs("div",{className:C.top_menu_container,children:[r(n.label,n.url),l.jsx("div",{className:C.expand_dummy})]})},n.label)}function Un({menuLink:r,topMenuItem:n,subMenu:a,unCheckSideMenu:o}){const[i,d]=p.useState(!1),_=p.useRef(null),[c,u]=p.useState(!1);p.useEffect(()=>{u(!0)},[]);const f=p.useCallback(()=>{d(!i)},[i]);return n.items!==void 0?l.jsxs("li",{className:C.subnav,role:"menu",children:[l.jsx("button",{"aria-expanded":i,"aria-haspopup":!0,"aria-label":`Expandable ${n.label}`,onClick:()=>{var v;(v=_.current)==null||v.click()},className:`${C.top__menu} ${c?"show-inline":"hide"}`}),l.jsxs("label",{className:`${C.top__menu} ${c?"hide":"show-inline"}`,children:[l.jsx("input",{type:"checkbox",name:"top_menu",ref:_,value:n.label,onClick:f,role:"menuitemcheckbox"}),`Expandable ${n.label}`]}),r(n.label,n.url,o),l.jsx("div",{className:C.subnav_content,children:l.jsx("ul",{children:a(n.items,n.url,o)})})]},n.label):l.jsx("li",{children:r(n.label,n.url,o)},n.label)}function Be({menuLink:r,homeLink:n,homeLogoLink:a,model:o,shortcutComponent:i,mobileStyle:d={},desktopStyle:_={},desktopClassName:c="",mobileClassName:u="",menuName:f=void 0}){const v=p.useRef(null),[x,g]=p.useState(!1),[R,A]=p.useState(!1);p.useEffect(()=>{A(!0)},[]);const F=(S,z)=>z===void 0||z===""?S:z.replace(/^#/,`${S}#`),B=()=>{v.current&&(v.current.checked=!1,document.body.style.overflow="auto")},W=S=>{const z=S.target.checked;g(z),document.body.style.overflow=z?"hidden":"auto"},w=(S,z,ke)=>S.map($=>l.jsx("li",{children:r($.label,F(z,$.url),ke)},$.label)),je=o.map(S=>l.jsx(Yn,{menuLink:r,topMenuItem:S,subMenu:w},S.label)),we=o.map(S=>l.jsx(Un,{menuLink:r,topMenuItem:S,subMenu:w,unCheckSideMenu:B},S.label));return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${C.mobile__nav} ${u}`,style:d,children:[l.jsxs("div",{className:C["mobile-menu"],children:[l.jsxs("div",{className:C.menu_hamburger,children:[l.jsx("button",{"aria-expanded":x===!0,"aria-haspopup":!0,className:`${C.hamb} ${R?"show":"hide"}`,"aria-label":f||"Hamburger Menu",onClick:()=>{var S;(S=v.current)==null||S.click()},children:l.jsx("div",{className:C.hamb_line})}),l.jsx("label",{className:R?"hide":"show","aria-label":f||"Hamburger Menu",children:l.jsx("input",{className:C.side__menu,type:"checkbox",ref:v,onChange:W})})]}),n("/",B,-1),i&&i]}),l.jsxs("nav",{className:C.menu,children:[l.jsx("ul",{role:"none",children:we})," "]})]}),l.jsx("nav",{className:`${C.desktop__nav} ${c}`,style:_,"aria-label":f,children:l.jsxs("ul",{children:[l.jsx("li",{children:a(C.home_logo)}),je,l.jsx("li",{children:i&&i})]})})]})}const Vn=p.memo(Be,()=>!0),Hn={container:"_container_1dzxe_1"};function Jn({model:r,className:n}){return l.jsx("ul",{className:`${Hn.container} ${n}`,children:r.map(({content:a},o)=>l.jsx("li",{children:a},`sc-${o}`))})}var ve,Ye=-1,Q=function(r){addEventListener("pageshow",function(n){n.persisted&&(Ye=n.timeStamp,r(n))},!0)},Ue=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},he=function(){var r=Ue();return r&&r.activationStart||0},I=function(r,n){var a=Ue(),o="navigate";return Ye>=0?o="back-forward-cache":a&&(document.prerendering||he()>0?o="prerender":document.wasDiscarded?o="restore":a.type&&(o=a.type.replace(/_/g,"-"))),{name:r,value:n===void 0?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:o}},Z=function(r,n,a){try{if(PerformanceObserver.supportedEntryTypes.includes(r)){var o=new PerformanceObserver(function(i){Promise.resolve().then(function(){n(i.getEntries())})});return o.observe(Object.assign({type:r,buffered:!0},a||{})),o}}catch{}},M=function(r,n,a,o){var i,d;return function(_){n.value>=0&&(_||o)&&((d=n.value-(i||0))||i===void 0)&&(i=n.value,n.delta=d,n.rating=function(c,u){return c>u[1]?"poor":c>u[0]?"needs-improvement":"good"}(n.value,a),r(n))}},pe=function(r){requestAnimationFrame(function(){return requestAnimationFrame(function(){return r()})})},_e=function(r){var n=function(a){a.type!=="pagehide"&&document.visibilityState!=="hidden"||r(a)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Ve=function(r){var n=!1;return function(a){n||(r(a),n=!0)}},H=-1,He=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ae=function(r){document.visibilityState==="hidden"&&H>-1&&(H=r.type==="visibilitychange"?r.timeStamp:0,Kn())},Je=function(){addEventListener("visibilitychange",ae,!0),addEventListener("prerenderingchange",ae,!0)},Kn=function(){removeEventListener("visibilitychange",ae,!0),removeEventListener("prerenderingchange",ae,!0)},Ke=function(){return H<0&&(H=He(),Je(),Q(function(){setTimeout(function(){H=He(),Je()},0)})),{get firstHiddenTime(){return H}}},be=function(r){document.prerendering?addEventListener("prerenderingchange",function(){return r()},!0):r()},me=[1800,3e3],ge=function(r,n){n=n||{},be(function(){var a,o=Ke(),i=I("FCP"),d=Z("paint",function(_){_.forEach(function(c){c.name==="first-contentful-paint"&&(d.disconnect(),c.startTime<o.firstHiddenTime&&(i.value=Math.max(c.startTime-he(),0),i.entries.push(c),a(!0)))})});d&&(a=M(r,i,me,n.reportAllChanges),Q(function(_){i=I("FCP"),a=M(r,i,me,n.reportAllChanges),pe(function(){i.value=performance.now()-_.timeStamp,a(!0)})}))})},ye=[.1,.25],Ge=function(r,n){n=n||{},ge(Ve(function(){var a,o=I("CLS",0),i=0,d=[],_=function(u){u.forEach(function(f){if(!f.hadRecentInput){var v=d[0],x=d[d.length-1];i&&f.startTime-x.startTime<1e3&&f.startTime-v.startTime<5e3?(i+=f.value,d.push(f)):(i=f.value,d=[f])}}),i>o.value&&(o.value=i,o.entries=d,a())},c=Z("layout-shift",_);c&&(a=M(r,o,ye,n.reportAllChanges),_e(function(){_(c.takeRecords()),a(!0)}),Q(function(){i=0,o=I("CLS",0),a=M(r,o,ye,n.reportAllChanges),pe(function(){return a()})}),setTimeout(a,0))}))},Xe=0,Ee=1/0,ie=0,Gn=function(r){r.forEach(function(n){n.interactionId&&(Ee=Math.min(Ee,n.interactionId),ie=Math.max(ie,n.interactionId),Xe=ie?(ie-Ee)/7+1:0)})},Qe=function(){return ve?Xe:performance.interactionCount||0},Xn=function(){"interactionCount"in performance||ve||(ve=Z("event",Gn,{type:"event",buffered:!0,durationThreshold:0}))},xe=[200,500],Ze=0,$e=function(){return Qe()-Ze},L=[],Re={},qe=function(r){var n=L[L.length-1],a=Re[r.interactionId];if(a||L.length<10||r.duration>n.latency){if(a)a.entries.push(r),a.latency=Math.max(a.latency,r.duration);else{var o={id:r.interactionId,latency:r.duration,entries:[r]};Re[o.id]=o,L.push(o)}L.sort(function(i,d){return d.latency-i.latency}),L.splice(10).forEach(function(i){delete Re[i.id]})}},en=function(r,n){n=n||{},be(function(){var a;Xn();var o,i=I("INP"),d=function(c){c.forEach(function(v){v.interactionId&&qe(v),v.entryType==="first-input"&&!L.some(function(x){return x.entries.some(function(g){return v.duration===g.duration&&v.startTime===g.startTime})})&&qe(v)});var u,f=(u=Math.min(L.length-1,Math.floor($e()/50)),L[u]);f&&f.latency!==i.value&&(i.value=f.latency,i.entries=f.entries,o())},_=Z("event",d,{durationThreshold:(a=n.durationThreshold)!==null&&a!==void 0?a:40});o=M(r,i,xe,n.reportAllChanges),_&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&_.observe({type:"first-input",buffered:!0}),_e(function(){d(_.takeRecords()),i.value<0&&$e()>0&&(i.value=0,i.entries=[]),o(!0)}),Q(function(){L=[],Ze=Qe(),i=I("INP"),o=M(r,i,xe,n.reportAllChanges)}))})},Te=[2500,4e3],Ce={},nn=function(r,n){n=n||{},be(function(){var a,o=Ke(),i=I("LCP"),d=function(u){var f=u[u.length-1];f&&f.startTime<o.firstHiddenTime&&(i.value=Math.max(f.startTime-he(),0),i.entries=[f],a())},_=Z("largest-contentful-paint",d);if(_){a=M(r,i,Te,n.reportAllChanges);var c=Ve(function(){Ce[i.id]||(d(_.takeRecords()),_.disconnect(),Ce[i.id]=!0,a(!0))});["keydown","click"].forEach(function(u){addEventListener(u,function(){return setTimeout(c,0)},!0)}),_e(c),Q(function(u){i=I("LCP"),a=M(r,i,Te,n.reportAllChanges),pe(function(){i.value=performance.now()-u.timeStamp,Ce[i.id]=!0,a(!0)})})}})};const Qn=Object.freeze(Object.defineProperty({__proto__:null,CLSThresholds:ye,FCPThresholds:me,INPThresholds:xe,LCPThresholds:Te,getCLS:Ge,getFCP:ge,getINP:en,getLCP:nn,onCLS:Ge,onFCP:ge,onINP:en,onLCP:nn},Symbol.toStringTag,{value:"Module"}));k.Accordion=Dn,k.Announcement=Mn,k.Menu=Vn,k.MiniMenu=Bn,k.MutableMenu=Be,k.ScrollableCard=Jn,k.consoleReportHandler=kn,k.debounce=De,k.htmlConvertor=Wn,k.reportWebVitals=On,k.useNavigationListener=wn,k.useWindowListener=zn,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
