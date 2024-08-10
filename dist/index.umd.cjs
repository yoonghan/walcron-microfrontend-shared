(function(R,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],y):(R=typeof globalThis<"u"?globalThis:R||self,y(R["Micro Frontend Shared"]={},R.React))})(this,function(R,y){"use strict";const En=({appName:n,containerName:t,props:a})=>{y.useEffect(()=>{window.dispatchEvent(new CustomEvent(`[${n}] navigated`,{detail:a.pathname}))},[n,a.pathname]),y.useEffect(()=>{function u(o){const f=o.detail;a.pathname!==f&&a.navigate(f)}return window.addEventListener(`[${t}] navigated`,u),()=>{window.removeEventListener(`[${t}] navigated`,u)}},[t,a])};function Tn(n){console.log(n)}function Rn(n){const t=n.value;return n.name==="CLS"?Math.round(t*1e3):Math.round(t)}function jn(n){ga("send","event",{eventCategory:"Web Vitals",eventAction:n.name,eventValue:Rn(n),eventLabel:n.id,nonInteraction:!0})}const wn=n=>{n&&n instanceof Function&&Promise.resolve().then(()=>Kn).then(({onCLS:t,onFID:a,onFCP:u,onLCP:o,onTTFB:f})=>{t(n),a(n),u(n),o(n),f(n)})};function We(n,t){let a;return()=>{/* istanbul ignore if -- @preserve */a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,n()},t)}}var ue={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De;function xn(){if(De)return K;De=1;var n=y,t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function v(l,s,g){var _,S={},T=null,j=null;g!==void 0&&(T=""+g),s.key!==void 0&&(T=""+s.key),s.ref!==void 0&&(j=s.ref);for(_ in s)u.call(s,_)&&!f.hasOwnProperty(_)&&(S[_]=s[_]);if(l&&l.defaultProps)for(_ in s=l.defaultProps,s)S[_]===void 0&&(S[_]=s[_]);return{$$typeof:t,type:l,key:T,ref:j,props:S,_owner:o.current}}return K.Fragment=a,K.jsx=v,K.jsxs=v,K}var G={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function Cn(){return Ne||(Ne=1,process.env.NODE_ENV!=="production"&&function(){var n=y,t=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),F=Symbol.iterator,m="@@iterator";function O(e){if(e===null||typeof e!="object")return null;var r=F&&e[F]||e[m];return typeof r=="function"?r:null}var N=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function x(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];Gn("error",e,i)}}function Gn(e,r,i){{var d=N.ReactDebugCurrentFrame,b=d.getStackAddendum();b!==""&&(r+="%s",i=i.concat([b]));var E=i.map(function(p){return String(p)});E.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,E)}}var Xn=!1,$n=!1,Zn=!1,Qn=!1,qn=!1,$e;$e=Symbol.for("react.module.reference");function et(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===f||qn||e===o||e===g||e===_||Qn||e===j||Xn||$n||Zn||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===S||e.$$typeof===v||e.$$typeof===l||e.$$typeof===s||e.$$typeof===$e||e.getModuleId!==void 0))}function nt(e,r,i){var d=e.displayName;if(d)return d;var b=r.displayName||r.name||"";return b!==""?i+"("+b+")":i}function Ze(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case a:return"Portal";case f:return"Profiler";case o:return"StrictMode";case g:return"Suspense";case _:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var r=e;return Ze(r)+".Consumer";case v:var i=e;return Ze(i._context)+".Provider";case s:return nt(e,e.render,"ForwardRef");case S:var d=e.displayName||null;return d!==null?d:I(e.type)||"Memo";case T:{var b=e,E=b._payload,p=b._init;try{return I(p(E))}catch{return null}}}return null}var B=Object.assign,Z=0,Qe,qe,en,nn,tn,rn,an;function on(){}on.__reactDisabledLog=!0;function tt(){{if(Z===0){Qe=console.log,qe=console.info,en=console.warn,nn=console.error,tn=console.group,rn=console.groupCollapsed,an=console.groupEnd;var e={configurable:!0,enumerable:!0,value:on,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Z++}}function rt(){{if(Z--,Z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},e,{value:Qe}),info:B({},e,{value:qe}),warn:B({},e,{value:en}),error:B({},e,{value:nn}),group:B({},e,{value:tn}),groupCollapsed:B({},e,{value:rn}),groupEnd:B({},e,{value:an})})}Z<0&&x("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var xe=N.ReactCurrentDispatcher,Ce;function oe(e,r,i){{if(Ce===void 0)try{throw Error()}catch(b){var d=b.stack.trim().match(/\n( *(at )?)/);Ce=d&&d[1]||""}return`
`+Ce+e}}var Se=!1,se;{var at=typeof WeakMap=="function"?WeakMap:Map;se=new at}function sn(e,r){if(!e||Se)return"";{var i=se.get(e);if(i!==void 0)return i}var d;Se=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=xe.current,xe.current=null,tt();try{if(r){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(A){d=A}Reflect.construct(e,[],p)}else{try{p.call()}catch(A){d=A}e.call(p.prototype)}}else{try{throw Error()}catch(A){d=A}e()}}catch(A){if(A&&d&&typeof A.stack=="string"){for(var h=A.stack.split(`
`),P=d.stack.split(`
`),w=h.length-1,C=P.length-1;w>=1&&C>=0&&h[w]!==P[C];)C--;for(;w>=1&&C>=0;w--,C--)if(h[w]!==P[C]){if(w!==1||C!==1)do if(w--,C--,C<0||h[w]!==P[C]){var L=`
`+h[w].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&se.set(e,L),L}while(w>=1&&C>=0);break}}}finally{Se=!1,xe.current=E,rt(),Error.prepareStackTrace=b}var J=e?e.displayName||e.name:"",V=J?oe(J):"";return typeof e=="function"&&se.set(e,V),V}function it(e,r,i){return sn(e,!1)}function ot(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ce(e,r,i){if(e==null)return"";if(typeof e=="function")return sn(e,ot(e));if(typeof e=="string")return oe(e);switch(e){case g:return oe("Suspense");case _:return oe("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case s:return it(e.render);case S:return ce(e.type,r,i);case T:{var d=e,b=d._payload,E=d._init;try{return ce(E(b),r,i)}catch{}}}return""}var Q=Object.prototype.hasOwnProperty,cn={},ln=N.ReactDebugCurrentFrame;function le(e){if(e){var r=e._owner,i=ce(e.type,e._source,r?r.type:null);ln.setExtraStackFrame(i)}else ln.setExtraStackFrame(null)}function st(e,r,i,d,b){{var E=Function.call.bind(Q);for(var p in e)if(E(e,p)){var h=void 0;try{if(typeof e[p]!="function"){var P=Error((d||"React class")+": "+i+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}h=e[p](r,p,d,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(w){h=w}h&&!(h instanceof Error)&&(le(b),x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",i,p,typeof h),le(null)),h instanceof Error&&!(h.message in cn)&&(cn[h.message]=!0,le(b),x("Failed %s type: %s",i,h.message),le(null))}}}var ct=Array.isArray;function ke(e){return ct(e)}function lt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function ut(e){try{return un(e),!1}catch{return!0}}function un(e){return""+e}function fn(e){if(ut(e))return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",lt(e)),un(e)}var q=N.ReactCurrentOwner,ft={key:!0,ref:!0,__self:!0,__source:!0},dn,vn,Oe;Oe={};function dt(e){if(Q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function vt(e){if(Q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ht(e,r){if(typeof e.ref=="string"&&q.current&&r&&q.current.stateNode!==r){var i=I(q.current.type);Oe[i]||(x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(q.current.type),e.ref),Oe[i]=!0)}}function pt(e,r){{var i=function(){dn||(dn=!0,x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function mt(e,r){{var i=function(){vn||(vn=!0,x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var gt=function(e,r,i,d,b,E,p){var h={$$typeof:t,type:e,key:r,ref:i,props:p,_owner:E};return h._store={},Object.defineProperty(h._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(h,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(h,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(h.props),Object.freeze(h)),h};function bt(e,r,i,d,b){{var E,p={},h=null,P=null;i!==void 0&&(fn(i),h=""+i),vt(r)&&(fn(r.key),h=""+r.key),dt(r)&&(P=r.ref,ht(r,b));for(E in r)Q.call(r,E)&&!ft.hasOwnProperty(E)&&(p[E]=r[E]);if(e&&e.defaultProps){var w=e.defaultProps;for(E in w)p[E]===void 0&&(p[E]=w[E])}if(h||P){var C=typeof e=="function"?e.displayName||e.name||"Unknown":e;h&&pt(p,C),P&&mt(p,C)}return gt(e,h,P,b,d,q.current,p)}}var Pe=N.ReactCurrentOwner,hn=N.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,i=ce(e.type,e._source,r?r.type:null);hn.setExtraStackFrame(i)}else hn.setExtraStackFrame(null)}var Ae;Ae=!1;function Fe(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function pn(){{if(Pe.current){var e=I(Pe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function _t(e){return""}var mn={};function yt(e){{var r=pn();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function gn(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=yt(r);if(mn[i])return;mn[i]=!0;var d="";e&&e._owner&&e._owner!==Pe.current&&(d=" It was passed a child from "+I(e._owner.type)+"."),z(e),x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,d),z(null)}}function bn(e,r){{if(typeof e!="object")return;if(ke(e))for(var i=0;i<e.length;i++){var d=e[i];Fe(d)&&gn(d,r)}else if(Fe(e))e._store&&(e._store.validated=!0);else if(e){var b=O(e);if(typeof b=="function"&&b!==e.entries)for(var E=b.call(e),p;!(p=E.next()).done;)Fe(p.value)&&gn(p.value,r)}}}function Et(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===s||r.$$typeof===S))i=r.propTypes;else return;if(i){var d=I(r);st(i,e.props,"prop",d,e)}else if(r.PropTypes!==void 0&&!Ae){Ae=!0;var b=I(r);x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Tt(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var d=r[i];if(d!=="children"&&d!=="key"){z(e),x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),z(null);break}}e.ref!==null&&(z(e),x("Invalid attribute `ref` supplied to `React.Fragment`."),z(null))}}var _n={};function yn(e,r,i,d,b,E){{var p=et(e);if(!p){var h="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(h+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P=_t();P?h+=P:h+=pn();var w;e===null?w="null":ke(e)?w="array":e!==void 0&&e.$$typeof===t?(w="<"+(I(e.type)||"Unknown")+" />",h=" Did you accidentally export a JSX literal instead of a component?"):w=typeof e,x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",w,h)}var C=bt(e,r,i,b,E);if(C==null)return C;if(p){var L=r.children;if(L!==void 0)if(d)if(ke(L)){for(var J=0;J<L.length;J++)bn(L[J],e);Object.freeze&&Object.freeze(L)}else x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else bn(L,e)}if(Q.call(r,"key")){var V=I(e),A=Object.keys(r).filter(function(St){return St!=="key"}),Le=A.length>0?"{key: someKey, "+A.join(": ..., ")+": ...}":"{key: someKey}";if(!_n[V+Le]){var Ct=A.length>0?"{"+A.join(": ..., ")+": ...}":"{}";x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Le,V,Ct,V),_n[V+Le]=!0}}return e===u?Tt(C):Et(C),C}}function Rt(e,r,i){return yn(e,r,i,!0)}function jt(e,r,i){return yn(e,r,i,!1)}var wt=jt,xt=Rt;G.Fragment=u,G.jsx=wt,G.jsxs=xt}()),G}process.env.NODE_ENV==="production"?ue.exports=xn():ue.exports=Cn();var c=ue.exports;const fe=`
`,de="[\\.|,]",Sn=new RegExp(`.*\\]${de}?$`),kn=new RegExp(`\\]${de}?$`,"g"),On=new RegExp(`${de}$`);function Pn(n,t){function a(l,s){if(l.match(Sn)&&l.indexOf("|")>-1){const g=l.replace(kn,"]"),S=g.substring(1,g.length-1).split("|"),T=S[0],j=S[1].replaceAll(fe," ");return c.jsxs(y.Fragment,{children:[t(T,j),l.match(On)?`${l.slice(-1)}`:""]},s)}return l}const v=(l=>{const s=l.split("|");return s.length>1?s.map(g=>{const _=g.split("]");return _.length===2?`${_[0].replaceAll(" ",fe)}]${_[1]}`:g}).join("|"):l})(n).split(" ").map((l,s)=>l.length<2?l:l.startsWith("*")?c.jsx("strong",{children:l.substring(1,l.length)},s):l.startsWith("[")?a(l,s):l==="!!"?c.jsx("br",{},s):l.replaceAll(fe," ")).reduce((l,s)=>[...l," ",s],[]);return v.shift(),c.jsx(c.Fragment,{children:v})}const An=()=>{const[n,t]=y.useState({height:window.innerHeight,width:window.innerWidth});return y.useEffect(()=>{const a=We(function(){t({height:window.innerHeight,width:window.innerWidth})},1e3);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),n},Fn=({color:n})=>c.jsxs("div",{children:["Logo ",c.jsx("span",{children:n})]}),Ln={footer:"_footer_ttkno_1"},Wn=({companyName:n="Walcron",establishedYear:t=2014,lastUpdatedYear:a})=>c.jsxs("div",{className:Ln.footer,children:[c.jsx("hr",{}),c.jsxs("div",{children:[n," ",t," - ",a," ©"]})]}),Dn={copyright:"_copyright_1c7c9_1"},Nn=({companyName:n="Walcron",link:t="/",lastUpdatedYear:a})=>c.jsxs("div",{className:Dn.copyright,children:["Copyright © ",c.jsx("a",{color:"inherit",href:t,children:n})," ",a,"."]});function In({statusText:n,message:t}){return c.jsxs("div",{id:"error-page",children:[c.jsx("h1",{children:"Oops!"}),c.jsx("p",{children:"Sorry, an unexpected error has occurred."}),c.jsx("p",{children:c.jsx("i",{children:n||t||"Error message is unknown."})})]})}const ve={accordion:"_accordion_okvze_1",tab:"_tab_okvze_27",tab__content:"_tab__content_okvze_38"};function Mn({model:n,groupName:t,isSingle:a=!0}){const[u,o]=y.useState(""),f=y.useCallback(l=>{const s=l.currentTarget;u===s.value?(s.checked=!1,o("")):o(s.value)},[u]),v=y.useMemo(()=>n.map((l,s)=>c.jsxs("div",{className:ve.tab,children:[c.jsxs("label",{children:[l.label,c.jsx("input",{type:a?"radio":"checkbox",value:s,name:t,onClick:a?f:void 0})]}),c.jsx("div",{className:ve.tab__content,children:c.jsx("p",{children:l.content})})]},l.label)),[n,a,t,f]);return c.jsx("div",{className:ve.accordion,children:v})}const Y={announcement:"_announcement_149a8_1",only_one:"_only_one_149a8_11",close:"_close_149a8_25",button_prev:"_button_prev_149a8_77"};function Bn({ariaAnnouncementTitle:n,announcements:t,classes:a=""}){const[u,o]=y.useState(0),f=()=>o(u-1>=0?u-1:t.length-1),v=()=>o(t.length>u+1?u+1:0),l=t.length===1;return t.length<1?null:c.jsxs("div",{role:"status",title:n,className:`${Y.announcement} ${l?Y.only_one:""} ${a}`,children:[!l&&c.jsx("button",{onClick:f,className:`${Y.button} ${Y.button_prev}`,children:c.jsx("i",{"aria-label":"previous announcement"})}),c.jsx("p",{children:t[u]}),!l&&c.jsx("button",{onClick:v,className:Y.button,children:c.jsx("i",{"aria-label":"next announcement"})}),c.jsxs("label",{className:Y.close,children:[c.jsx("span",{"aria-label":"Close Announcement"}),c.jsx("input",{type:"checkbox"})]})]})}const ee={minimenu:"_minimenu_x978s_1",sticky:"_sticky_x978s_1",underline:"_underline_x978s_26"};function Vn({model:n,onScrollMonitor:t}){const[a,u]=y.useState(0),o=y.useRef([]),f=y.useRef(null),[v,l]=y.useState(0),s=y.useCallback(()=>{t&&t(),f.current&&(window.scrollY>v?f.current.classList.add(ee.sticky):f.current.classList.remove(ee.sticky))},[v,t]),g=y.useCallback(T=>{const j=T[0].target,F=n.findIndex(N=>N.hashId===j.id),m=F<0?0:F,O=o.current[m];O!==null&&T[0].isIntersecting&&(O.scrollIntoViewIfNeeded(!0),u(m))},[n]),_=y.useCallback(()=>{const T=new IntersectionObserver(g,{threshold:[.3]}),j=new IntersectionObserver(g,{threshold:[1]});return n.forEach(F=>{const m=document.getElementById(F.hashId);m!==null&&(m.clientHeight<window.innerHeight?j.observe(m):T.observe(m))}),[T,j]},[g,n]),S=y.useCallback(T=>()=>{u(T)},[]);return y.useEffect(()=>{var j;const T=_();return l(((j=f.current)==null?void 0:j.getBoundingClientRect().top)||0),s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),T.forEach(F=>F.disconnect())}},[s,_]),c.jsx("nav",{className:ee.minimenu,ref:f,children:n.map((T,j)=>c.jsxs(y.Fragment,{children:[j!==0&&c.jsx("div",{role:"separator"}),c.jsx("a",{href:`#${T.hashId}`,ref:F=>{o.current[j]=F},className:j===a?`${ee.underline} italic`:void 0,onClick:S(j),children:T.title})]},T.hashId))})}const k={desktop__nav:"_desktop__nav_1cf8p_1",mobile__nav:"_mobile__nav_1cf8p_1","home-logo":"_home-logo_1cf8p_44",menu:"_menu_1cf8p_49","subnav-content":"_subnav-content_1cf8p_56",subnav:"_subnav_1cf8p_56",grow:"_grow_1cf8p_1","mobile-menu":"_mobile-menu_1cf8p_115",hamb:"_hamb_1cf8p_123","hamb-line":"_hamb-line_1cf8p_128","hamb-hidden":"_hamb-hidden_1cf8p_154","top-menu":"_top-menu_1cf8p_158","side-menu":"_side-menu_1cf8p_159"};function Ie({menuLink:n,homeLink:t,homeLogoLink:a,model:u,mobileHomeText:o,shortcutComponent:f,mobileStyle:v={},desktopStyle:l={}}){const s=y.useRef(null),g=(m,O)=>O===void 0||O===""?m:O.replace(/^#/,`${m}#`),_=()=>{s.current&&(s.current.checked=!1,document.body.style.overflow="auto")},S=m=>{document.body.style.overflow=m.target.checked?"hidden":"auto"},T=(m,O,N)=>m.map(x=>c.jsx("li",{role:"presentation",children:n(x.label,g(O,x.url),"menuitem",N)},x.label)),j=u.map(m=>{const O=m.items;return c.jsx("li",{role:"presentation",className:O?k.subnav:"",children:c.jsxs("div",{children:[n(m.label,m.url,"menuitem"),m.items&&c.jsx("div",{role:"presentation",className:k["subnav-content"],children:c.jsx("ul",{role:"menu",children:T(m.items,m.url,_)})})]})},m.label)}),F=u.map(m=>{const O=m.items;return c.jsx("li",{role:"presentation",className:O?k.subnav:"",children:c.jsxs("div",{children:[O?c.jsxs("label",{role:"menuitem",children:[c.jsx("input",{className:k["top-menu"],type:"radio",name:"top-menu"}),m.label]}):n(m.label,m.url,"menuitem",_),m.items&&c.jsx("div",{role:"presentation",className:k["subnav-content"],children:c.jsx("ul",{role:"menu",children:T(m.items,m.url,_)})})]})},m.label)});return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:k.mobile__nav,style:v,children:[c.jsxs("div",{className:k["mobile-menu"],children:[c.jsxs("label",{className:k.hamb,"aria-label":"Main Menu",children:[c.jsx("input",{className:k["side-menu"],type:"checkbox",ref:s,onChange:S}),c.jsx("span",{className:k["hamb-line"]}),c.jsx("span",{className:k["hamb-hidden"],children:"Hamburger Menu"})]}),t(o,"/",_,-1),f&&f]}),c.jsx("nav",{role:"menubar",className:k.menu,children:c.jsx("ul",{role:"menu","aria-orientation":"horizontal",children:F})})]}),c.jsx("div",{className:k.desktop__nav,style:l,children:c.jsx("nav",{role:"menubar",className:k.menu,children:c.jsxs("ul",{role:"menu","aria-orientation":"horizontal",children:[c.jsx("li",{role:"menuitem",children:a(k["home-logo"])}),j,c.jsx("li",{role:"menuitem",children:f&&f})]})})})]})}const Yn=y.memo(Ie,()=>!0);var M,X,Me,ne,Be=-1,H=function(n){addEventListener("pageshow",function(t){t.persisted&&(Be=t.timeStamp,n(t))},!0)},he=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},te=function(){var n=he();return n&&n.activationStart||0},W=function(n,t){var a=he(),u="navigate";return Be>=0?u="back-forward-cache":a&&(document.prerendering||te()>0?u="prerender":document.wasDiscarded?u="restore":a.type&&(u=a.type.replace(/_/g,"-"))),{name:n,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:u}},re=function(n,t,a){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var u=new PerformanceObserver(function(o){Promise.resolve().then(function(){t(o.getEntries())})});return u.observe(Object.assign({type:n,buffered:!0},a||{})),u}}catch{}},D=function(n,t,a,u){var o,f;return function(v){t.value>=0&&(v||u)&&((f=t.value-(o||0))||o===void 0)&&(o=t.value,t.delta=f,t.rating=function(l,s){return l>s[1]?"poor":l>s[0]?"needs-improvement":"good"}(t.value,a),n(t))}},pe=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},me=function(n){var t=function(a){a.type!=="pagehide"&&document.visibilityState!=="hidden"||n(a)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},ge=function(n){var t=!1;return function(a){t||(n(a),t=!0)}},U=-1,Ve=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ae=function(n){document.visibilityState==="hidden"&&U>-1&&(U=n.type==="visibilitychange"?n.timeStamp:0,Hn())},Ye=function(){addEventListener("visibilitychange",ae,!0),addEventListener("prerenderingchange",ae,!0)},Hn=function(){removeEventListener("visibilitychange",ae,!0),removeEventListener("prerenderingchange",ae,!0)},be=function(){return U<0&&(U=Ve(),Ye(),H(function(){setTimeout(function(){U=Ve(),Ye()},0)})),{get firstHiddenTime(){return U}}},ie=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},_e=[1800,3e3],ye=function(n,t){t=t||{},ie(function(){var a,u=be(),o=W("FCP"),f=re("paint",function(v){v.forEach(function(l){l.name==="first-contentful-paint"&&(f.disconnect(),l.startTime<u.firstHiddenTime&&(o.value=Math.max(l.startTime-te(),0),o.entries.push(l),a(!0)))})});f&&(a=D(n,o,_e,t.reportAllChanges),H(function(v){o=W("FCP"),a=D(n,o,_e,t.reportAllChanges),pe(function(){o.value=performance.now()-v.timeStamp,a(!0)})}))})},Ee=[.1,.25],He=function(n,t){t=t||{},ye(ge(function(){var a,u=W("CLS",0),o=0,f=[],v=function(s){s.forEach(function(g){if(!g.hadRecentInput){var _=f[0],S=f[f.length-1];o&&g.startTime-S.startTime<1e3&&g.startTime-_.startTime<5e3?(o+=g.value,f.push(g)):(o=g.value,f=[g])}}),o>u.value&&(u.value=o,u.entries=f,a())},l=re("layout-shift",v);l&&(a=D(n,u,Ee,t.reportAllChanges),me(function(){v(l.takeRecords()),a(!0)}),H(function(){o=0,u=W("CLS",0),a=D(n,u,Ee,t.reportAllChanges),pe(function(){return a()})}),setTimeout(a,0))}))},$={passive:!0,capture:!0},Un=new Date,Ue=function(n,t){M||(M=t,X=n,Me=new Date,Je(removeEventListener),ze())},ze=function(){if(X>=0&&X<Me-Un){var n={entryType:"first-input",name:M.type,target:M.target,cancelable:M.cancelable,startTime:M.timeStamp,processingStart:M.timeStamp+X};ne.forEach(function(t){t(n)}),ne=[]}},zn=function(n){if(n.cancelable){var t=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;n.type=="pointerdown"?function(a,u){var o=function(){Ue(a,u),v()},f=function(){v()},v=function(){removeEventListener("pointerup",o,$),removeEventListener("pointercancel",f,$)};addEventListener("pointerup",o,$),addEventListener("pointercancel",f,$)}(t,n):Ue(t,n)}},Je=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return n(t,zn,$)})},Te=[100,300],Ke=function(n,t){t=t||{},ie(function(){var a,u=be(),o=W("FID"),f=function(s){s.startTime<u.firstHiddenTime&&(o.value=s.processingStart-s.startTime,o.entries.push(s),a(!0))},v=function(s){s.forEach(f)},l=re("first-input",v);a=D(n,o,Te,t.reportAllChanges),l&&me(ge(function(){v(l.takeRecords()),l.disconnect()})),l&&H(function(){var s;o=W("FID"),a=D(n,o,Te,t.reportAllChanges),ne=[],X=-1,M=null,Je(addEventListener),s=f,ne.push(s),ze()})})},Re=[2500,4e3],je={},Ge=function(n,t){t=t||{},ie(function(){var a,u=be(),o=W("LCP"),f=function(s){var g=s[s.length-1];g&&g.startTime<u.firstHiddenTime&&(o.value=Math.max(g.startTime-te(),0),o.entries=[g],a())},v=re("largest-contentful-paint",f);if(v){a=D(n,o,Re,t.reportAllChanges);var l=ge(function(){je[o.id]||(f(v.takeRecords()),v.disconnect(),je[o.id]=!0,a(!0))});["keydown","click"].forEach(function(s){addEventListener(s,function(){return setTimeout(l,0)},!0)}),me(l),H(function(s){o=W("LCP"),a=D(n,o,Re,t.reportAllChanges),pe(function(){o.value=performance.now()-s.timeStamp,je[o.id]=!0,a(!0)})})}})},we=[800,1800],Jn=function n(t){document.prerendering?ie(function(){return n(t)}):document.readyState!=="complete"?addEventListener("load",function(){return n(t)},!0):setTimeout(t,0)},Xe=function(n,t){t=t||{};var a=W("TTFB"),u=D(n,a,we,t.reportAllChanges);Jn(function(){var o=he();if(o){var f=o.responseStart;if(f<=0||f>performance.now())return;a.value=Math.max(f-te(),0),a.entries=[o],u(!0),H(function(){a=W("TTFB",0),(u=D(n,a,we,t.reportAllChanges))(!0)})}})};const Kn=Object.freeze(Object.defineProperty({__proto__:null,CLSThresholds:Ee,FCPThresholds:_e,FIDThresholds:Te,LCPThresholds:Re,TTFBThresholds:we,getCLS:He,getFCP:ye,getFID:Ke,getLCP:Ge,getTTFB:Xe,onCLS:He,onFCP:ye,onFID:Ke,onLCP:Ge,onTTFB:Xe},Symbol.toStringTag,{value:"Module"}));R.Accordion=Mn,R.Announcement=Bn,R.Copyright=Nn,R.ErrorPage=In,R.Footer=Wn,R.Logo=Fn,R.Menu=Yn,R.MiniMenu=Vn,R.MutableMenu=Ie,R.consoleReportHandler=Tn,R.debounce=We,R.gaReportHandler=jn,R.htmlConvertor=Pn,R.reportWebVitals=wn,R.useNavigationListener=En,R.useWindowListener=An,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
