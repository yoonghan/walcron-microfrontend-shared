(function(R,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],y):(R=typeof globalThis<"u"?globalThis:R||self,y(R["Micro Frontend Shared"]={},R.React))})(this,function(R,y){"use strict";const yn=({appName:n,containerName:t,props:a})=>{y.useEffect(()=>{window.dispatchEvent(new CustomEvent(`[${n}] navigated`,{detail:a.pathname}))},[n,a.pathname]),y.useEffect(()=>{function u(o){const l=o.detail;a.pathname!==l&&a.navigate(l)}return window.addEventListener(`[${t}] navigated`,u),()=>{window.removeEventListener(`[${t}] navigated`,u)}},[t,a])};function _n(n){console.log(n)}function En(n){const t=n.value;return n.name==="CLS"?Math.round(t*1e3):Math.round(t)}function Tn(n){ga("send","event",{eventCategory:"Web Vitals",eventAction:n.name,eventValue:En(n),eventLabel:n.id,nonInteraction:!0})}const Rn=n=>{n&&n instanceof Function&&Promise.resolve().then(()=>Un).then(({onCLS:t,onFID:a,onFCP:u,onLCP:o,onTTFB:l})=>{t(n),a(n),u(n),o(n),l(n)})};function Fe(n,t){let a;return()=>{/* istanbul ignore if -- @preserve */a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,n()},t)}}var ue={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We;function wn(){if(We)return z;We=1;var n=y,t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(s,c,m){var _,S={},E=null,C=null;m!==void 0&&(E=""+m),c.key!==void 0&&(E=""+c.key),c.ref!==void 0&&(C=c.ref);for(_ in c)u.call(c,_)&&!l.hasOwnProperty(_)&&(S[_]=c[_]);if(s&&s.defaultProps)for(_ in c=s.defaultProps,c)S[_]===void 0&&(S[_]=c[_]);return{$$typeof:t,type:s,key:E,ref:C,props:S,_owner:o.current}}return z.Fragment=a,z.jsx=p,z.jsxs=p,z}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De;function Cn(){return De||(De=1,process.env.NODE_ENV!=="production"&&function(){var n=y,t=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),P=Symbol.iterator,W="@@iterator";function ae(e){if(e===null||typeof e!="object")return null;var r=P&&e[P]||e[W];return typeof r=="function"?r:null}var I=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function j(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),f=1;f<r;f++)i[f-1]=arguments[f];zn("error",e,i)}}function zn(e,r,i){{var f=I.ReactDebugCurrentFrame,g=f.getStackAddendum();g!==""&&(r+="%s",i=i.concat([g]));var b=i.map(function(h){return String(h)});b.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,b)}}var Jn=!1,Kn=!1,$n=!1,Gn=!1,Xn=!1,$e;$e=Symbol.for("react.module.reference");function Zn(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===l||Xn||e===o||e===m||e===_||Gn||e===C||Jn||Kn||$n||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===S||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===$e||e.getModuleId!==void 0))}function Qn(e,r,i){var f=e.displayName;if(f)return f;var g=r.displayName||r.name||"";return g!==""?i+"("+g+")":i}function Ge(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case a:return"Portal";case l:return"Profiler";case o:return"StrictMode";case m:return"Suspense";case _:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s:var r=e;return Ge(r)+".Consumer";case p:var i=e;return Ge(i._context)+".Provider";case c:return Qn(e,e.render,"ForwardRef");case S:var f=e.displayName||null;return f!==null?f:F(e.type)||"Memo";case E:{var g=e,b=g._payload,h=g._init;try{return F(h(b))}catch{return null}}}return null}var M=Object.assign,G=0,Xe,Ze,Qe,qe,en,nn,tn;function rn(){}rn.__reactDisabledLog=!0;function qn(){{if(G===0){Xe=console.log,Ze=console.info,Qe=console.warn,qe=console.error,en=console.group,nn=console.groupCollapsed,tn=console.groupEnd;var e={configurable:!0,enumerable:!0,value:rn,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}G++}}function et(){{if(G--,G===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Xe}),info:M({},e,{value:Ze}),warn:M({},e,{value:Qe}),error:M({},e,{value:qe}),group:M({},e,{value:en}),groupCollapsed:M({},e,{value:nn}),groupEnd:M({},e,{value:tn})})}G<0&&j("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Ce=I.ReactCurrentDispatcher,Se;function ie(e,r,i){{if(Se===void 0)try{throw Error()}catch(g){var f=g.stack.trim().match(/\n( *(at )?)/);Se=f&&f[1]||""}return`
`+Se+e}}var je=!1,oe;{var nt=typeof WeakMap=="function"?WeakMap:Map;oe=new nt}function an(e,r){if(!e||je)return"";{var i=oe.get(e);if(i!==void 0)return i}var f;je=!0;var g=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var b;b=Ce.current,Ce.current=null,qn();try{if(r){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(k){f=k}Reflect.construct(e,[],h)}else{try{h.call()}catch(k){f=k}e.call(h.prototype)}}else{try{throw Error()}catch(k){f=k}e()}}catch(k){if(k&&f&&typeof k.stack=="string"){for(var v=k.stack.split(`
`),x=f.stack.split(`
`),T=v.length-1,w=x.length-1;T>=1&&w>=0&&v[T]!==x[w];)w--;for(;T>=1&&w>=0;T--,w--)if(v[T]!==x[w]){if(T!==1||w!==1)do if(T--,w--,w<0||v[T]!==x[w]){var O=`
`+v[T].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&oe.set(e,O),O}while(T>=1&&w>=0);break}}}finally{je=!1,Ce.current=b,et(),Error.prepareStackTrace=g}var U=e?e.displayName||e.name:"",N=U?ie(U):"";return typeof e=="function"&&oe.set(e,N),N}function tt(e,r,i){return an(e,!1)}function rt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function se(e,r,i){if(e==null)return"";if(typeof e=="function")return an(e,rt(e));if(typeof e=="string")return ie(e);switch(e){case m:return ie("Suspense");case _:return ie("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return tt(e.render);case S:return se(e.type,r,i);case E:{var f=e,g=f._payload,b=f._init;try{return se(b(g),r,i)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,on={},sn=I.ReactDebugCurrentFrame;function ce(e){if(e){var r=e._owner,i=se(e.type,e._source,r?r.type:null);sn.setExtraStackFrame(i)}else sn.setExtraStackFrame(null)}function at(e,r,i,f,g){{var b=Function.call.bind(X);for(var h in e)if(b(e,h)){var v=void 0;try{if(typeof e[h]!="function"){var x=Error((f||"React class")+": "+i+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw x.name="Invariant Violation",x}v=e[h](r,h,f,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){v=T}v&&!(v instanceof Error)&&(ce(g),j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",f||"React class",i,h,typeof v),ce(null)),v instanceof Error&&!(v.message in on)&&(on[v.message]=!0,ce(g),j("Failed %s type: %s",i,v.message),ce(null))}}}var it=Array.isArray;function xe(e){return it(e)}function ot(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function st(e){try{return cn(e),!1}catch{return!0}}function cn(e){return""+e}function un(e){if(st(e))return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ot(e)),cn(e)}var Z=I.ReactCurrentOwner,ct={key:!0,ref:!0,__self:!0,__source:!0},ln,fn,ke;ke={};function ut(e){if(X.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function lt(e){if(X.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ft(e,r){if(typeof e.ref=="string"&&Z.current&&r&&Z.current.stateNode!==r){var i=F(Z.current.type);ke[i]||(j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(Z.current.type),e.ref),ke[i]=!0)}}function dt(e,r){{var i=function(){ln||(ln=!0,j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function vt(e,r){{var i=function(){fn||(fn=!0,j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var pt=function(e,r,i,f,g,b,h){var v={$$typeof:t,type:e,key:r,ref:i,props:h,_owner:b};return v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(v,"_self",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.defineProperty(v,"_source",{configurable:!1,enumerable:!1,writable:!1,value:g}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),v};function ht(e,r,i,f,g){{var b,h={},v=null,x=null;i!==void 0&&(un(i),v=""+i),lt(r)&&(un(r.key),v=""+r.key),ut(r)&&(x=r.ref,ft(r,g));for(b in r)X.call(r,b)&&!ct.hasOwnProperty(b)&&(h[b]=r[b]);if(e&&e.defaultProps){var T=e.defaultProps;for(b in T)h[b]===void 0&&(h[b]=T[b])}if(v||x){var w=typeof e=="function"?e.displayName||e.name||"Unknown":e;v&&dt(h,w),x&&vt(h,w)}return pt(e,v,x,g,f,Z.current,h)}}var Oe=I.ReactCurrentOwner,dn=I.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,i=se(e.type,e._source,r?r.type:null);dn.setExtraStackFrame(i)}else dn.setExtraStackFrame(null)}var Pe;Pe=!1;function Ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function vn(){{if(Oe.current){var e=F(Oe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function gt(e){return""}var pn={};function mt(e){{var r=vn();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function hn(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=mt(r);if(pn[i])return;pn[i]=!0;var f="";e&&e._owner&&e._owner!==Oe.current&&(f=" It was passed a child from "+F(e._owner.type)+"."),H(e),j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,f),H(null)}}function gn(e,r){{if(typeof e!="object")return;if(xe(e))for(var i=0;i<e.length;i++){var f=e[i];Ae(f)&&hn(f,r)}else if(Ae(e))e._store&&(e._store.validated=!0);else if(e){var g=ae(e);if(typeof g=="function"&&g!==e.entries)for(var b=g.call(e),h;!(h=b.next()).done;)Ae(h.value)&&hn(h.value,r)}}}function bt(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===S))i=r.propTypes;else return;if(i){var f=F(r);at(i,e.props,"prop",f,e)}else if(r.PropTypes!==void 0&&!Pe){Pe=!0;var g=F(r);j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",g||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function yt(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var f=r[i];if(f!=="children"&&f!=="key"){H(e),j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",f),H(null);break}}e.ref!==null&&(H(e),j("Invalid attribute `ref` supplied to `React.Fragment`."),H(null))}}var mn={};function bn(e,r,i,f,g,b){{var h=Zn(e);if(!h){var v="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(v+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var x=gt();x?v+=x:v+=vn();var T;e===null?T="null":xe(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(F(e.type)||"Unknown")+" />",v=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,v)}var w=ht(e,r,i,g,b);if(w==null)return w;if(h){var O=r.children;if(O!==void 0)if(f)if(xe(O)){for(var U=0;U<O.length;U++)gn(O[U],e);Object.freeze&&Object.freeze(O)}else j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else gn(O,e)}if(X.call(r,"key")){var N=F(e),k=Object.keys(r).filter(function(Ct){return Ct!=="key"}),Le=k.length>0?"{key: someKey, "+k.join(": ..., ")+": ...}":"{key: someKey}";if(!mn[N+Le]){var wt=k.length>0?"{"+k.join(": ..., ")+": ...}":"{}";j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Le,N,wt,N),mn[N+Le]=!0}}return e===u?yt(w):bt(w),w}}function _t(e,r,i){return bn(e,r,i,!0)}function Et(e,r,i){return bn(e,r,i,!1)}var Tt=Et,Rt=_t;J.Fragment=u,J.jsx=Tt,J.jsxs=Rt}()),J}process.env.NODE_ENV==="production"?ue.exports=wn():ue.exports=Cn();var d=ue.exports;const le=`
`,fe="[\\.|,]",Sn=new RegExp(`.*\\]${fe}?$`),jn=new RegExp(`\\]${fe}?$`,"g"),xn=new RegExp(`${fe}$`);function kn(n,t){function a(s,c){if(s.match(Sn)&&s.indexOf("|")>-1){const m=s.replace(jn,"]"),S=m.substring(1,m.length-1).split("|"),E=S[0],C=S[1].replaceAll(le," ");return d.jsxs(y.Fragment,{children:[t(E,C),s.match(xn)?`${s.slice(-1)}`:""]},c)}return s}const p=(s=>{const c=s.split("|");return c.length>1?c.map(m=>{const _=m.split("]");return _.length===2?`${_[0].replaceAll(" ",le)}]${_[1]}`:m}).join("|"):s})(n).split(" ").map((s,c)=>s.length<2?s:s.startsWith("*")?d.jsx("strong",{children:s.substring(1,s.length)},c):s.startsWith("[")?a(s,c):s==="!!"?d.jsx("br",{},c):s.replaceAll(le," ")).reduce((s,c)=>[...s," ",c],[]);return p.shift(),d.jsx(d.Fragment,{children:p})}const On=()=>{const[n,t]=y.useState({height:window.innerHeight,width:window.innerWidth});return y.useEffect(()=>{const a=Fe(function(){t({height:window.innerHeight,width:window.innerWidth})},1e3);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),n},Pn=({color:n})=>d.jsxs("div",{children:["Logo ",d.jsx("span",{children:n})]}),An={footer:"_footer_ttkno_1"},Ln=({companyName:n="Walcron",establishedYear:t=2014,lastUpdatedYear:a})=>d.jsxs("div",{className:An.footer,children:[d.jsx("hr",{}),d.jsxs("div",{children:[n," ",t," - ",a," ©"]})]}),Fn={copyright:"_copyright_1c7c9_1"},Wn=({companyName:n="Walcron",link:t="/",lastUpdatedYear:a})=>d.jsxs("div",{className:Fn.copyright,children:["Copyright © ",d.jsx("a",{color:"inherit",href:t,children:n})," ",a,"."]});function Dn({statusText:n,message:t}){return d.jsxs("div",{id:"error-page",children:[d.jsx("h1",{children:"Oops!"}),d.jsx("p",{children:"Sorry, an unexpected error has occurred."}),d.jsx("p",{children:d.jsx("i",{children:n||t||"Error message is unknown."})})]})}const de={accordion:"_accordion_1gi8s_1",tab:"_tab_1gi8s_27",tab__content:"_tab__content_1gi8s_38"};function In({model:n,groupName:t,isSingle:a=!0}){const[u,o]=y.useState(""),l=y.useCallback(s=>{const c=s.currentTarget;u===c.value?(c.checked=!1,o("")):o(c.value)},[u]),p=y.useMemo(()=>n.map((s,c)=>d.jsxs("div",{className:de.tab,children:[d.jsxs("label",{children:[s.label,d.jsx("input",{type:a?"radio":"checkbox",value:c,name:t,onClick:a?l:void 0})]}),d.jsx("div",{className:de.tab__content,children:d.jsx("p",{children:s.content})})]},s.label)),[n,a,t,l]);return d.jsx("div",{className:de.accordion,children:p})}const V={announcement:"_announcement_14tja_1",only_one:"_only_one_14tja_11",close:"_close_14tja_25",button_prev:"_button_prev_14tja_77"};function Mn({ariaAnnouncementTitle:n,announcements:t,classes:a=""}){const[u,o]=y.useState(0),l=()=>o(u-1>=0?u-1:t.length-1),p=()=>o(t.length>u+1?u+1:0),s=t.length===1;return t.length<1?null:d.jsxs("div",{role:"status",title:n,className:`${V.announcement} ${s?V.only_one:""} ${a}`,children:[!s&&d.jsx("button",{onClick:l,className:`${V.button} ${V.button_prev}`,children:d.jsx("i",{"aria-label":"previous announcement"})}),d.jsx("p",{children:t[u]}),!s&&d.jsx("button",{onClick:p,className:V.button,children:d.jsx("i",{"aria-label":"next announcement"})}),d.jsxs("label",{className:V.close,children:[d.jsx("span",{"aria-label":"Close Announcement"}),d.jsx("input",{type:"checkbox"})]})]})}const Q={mini_menu:"_mini_menu_1xr6p_1",sticky:"_sticky_1xr6p_1",underline:"_underline_1xr6p_27"};function Nn({model:n,onScrollMonitor:t}){const[a,u]=y.useState(0),o=y.useRef([]),l=y.useRef(null),[p,s]=y.useState(0),c=y.useCallback(()=>{t&&t(),l.current&&(window.scrollY>p?l.current.classList.add(Q.sticky):l.current.classList.remove(Q.sticky))},[p,t]),m=y.useCallback(E=>{const C=E[0].target,P=n.findIndex(I=>I.hashId===C.id),W=P<0?0:P,ae=o.current[W];ae!==null&&E[0].isIntersecting&&(ae.scrollIntoViewIfNeeded(!0),u(W))},[n]),_=y.useCallback(()=>{const E=new IntersectionObserver(m,{threshold:[.3]}),C=new IntersectionObserver(m,{threshold:[1]});return n.forEach(P=>{const W=document.getElementById(P.hashId);W!==null&&(W.clientHeight<window.innerHeight?C.observe(W):E.observe(W))}),[E,C]},[m,n]),S=y.useCallback(E=>()=>{u(E)},[]);return y.useEffect(()=>{var C;const E=_();return s(((C=l.current)==null?void 0:C.offsetHeight)||0),c(),window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c),E.forEach(P=>P.disconnect())}},[c,_]),d.jsx("nav",{className:Q.mini_menu,ref:l,children:n.map((E,C)=>d.jsxs(y.Fragment,{children:[C!==0&&d.jsx("div",{role:"separator"}),d.jsx("a",{href:`#${E.hashId}`,ref:P=>{o.current[C]=P},className:C===a?`${Q.underline} italic`:void 0,onClick:S(C),children:E.title})]},E.hashId))})}var D,K,Ie,q,Me=-1,Y=function(n){addEventListener("pageshow",function(t){t.persisted&&(Me=t.timeStamp,n(t))},!0)},ve=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},ee=function(){var n=ve();return n&&n.activationStart||0},A=function(n,t){var a=ve(),u="navigate";return Me>=0?u="back-forward-cache":a&&(document.prerendering||ee()>0?u="prerender":document.wasDiscarded?u="restore":a.type&&(u=a.type.replace(/_/g,"-"))),{name:n,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:u}},ne=function(n,t,a){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var u=new PerformanceObserver(function(o){Promise.resolve().then(function(){t(o.getEntries())})});return u.observe(Object.assign({type:n,buffered:!0},a||{})),u}}catch{}},L=function(n,t,a,u){var o,l;return function(p){t.value>=0&&(p||u)&&((l=t.value-(o||0))||o===void 0)&&(o=t.value,t.delta=l,t.rating=function(s,c){return s>c[1]?"poor":s>c[0]?"needs-improvement":"good"}(t.value,a),n(t))}},pe=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},he=function(n){var t=function(a){a.type!=="pagehide"&&document.visibilityState!=="hidden"||n(a)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},ge=function(n){var t=!1;return function(a){t||(n(a),t=!0)}},B=-1,Ne=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},te=function(n){document.visibilityState==="hidden"&&B>-1&&(B=n.type==="visibilitychange"?n.timeStamp:0,Vn())},Ve=function(){addEventListener("visibilitychange",te,!0),addEventListener("prerenderingchange",te,!0)},Vn=function(){removeEventListener("visibilitychange",te,!0),removeEventListener("prerenderingchange",te,!0)},me=function(){return B<0&&(B=Ne(),Ve(),Y(function(){setTimeout(function(){B=Ne(),Ve()},0)})),{get firstHiddenTime(){return B}}},re=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},be=[1800,3e3],ye=function(n,t){t=t||{},re(function(){var a,u=me(),o=A("FCP"),l=ne("paint",function(p){p.forEach(function(s){s.name==="first-contentful-paint"&&(l.disconnect(),s.startTime<u.firstHiddenTime&&(o.value=Math.max(s.startTime-ee(),0),o.entries.push(s),a(!0)))})});l&&(a=L(n,o,be,t.reportAllChanges),Y(function(p){o=A("FCP"),a=L(n,o,be,t.reportAllChanges),pe(function(){o.value=performance.now()-p.timeStamp,a(!0)})}))})},_e=[.1,.25],Ye=function(n,t){t=t||{},ye(ge(function(){var a,u=A("CLS",0),o=0,l=[],p=function(c){c.forEach(function(m){if(!m.hadRecentInput){var _=l[0],S=l[l.length-1];o&&m.startTime-S.startTime<1e3&&m.startTime-_.startTime<5e3?(o+=m.value,l.push(m)):(o=m.value,l=[m])}}),o>u.value&&(u.value=o,u.entries=l,a())},s=ne("layout-shift",p);s&&(a=L(n,u,_e,t.reportAllChanges),he(function(){p(s.takeRecords()),a(!0)}),Y(function(){o=0,u=A("CLS",0),a=L(n,u,_e,t.reportAllChanges),pe(function(){return a()})}),setTimeout(a,0))}))},$={passive:!0,capture:!0},Yn=new Date,Be=function(n,t){D||(D=t,K=n,Ie=new Date,Ue(removeEventListener),He())},He=function(){if(K>=0&&K<Ie-Yn){var n={entryType:"first-input",name:D.type,target:D.target,cancelable:D.cancelable,startTime:D.timeStamp,processingStart:D.timeStamp+K};q.forEach(function(t){t(n)}),q=[]}},Bn=function(n){if(n.cancelable){var t=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;n.type=="pointerdown"?function(a,u){var o=function(){Be(a,u),p()},l=function(){p()},p=function(){removeEventListener("pointerup",o,$),removeEventListener("pointercancel",l,$)};addEventListener("pointerup",o,$),addEventListener("pointercancel",l,$)}(t,n):Be(t,n)}},Ue=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return n(t,Bn,$)})},Ee=[100,300],ze=function(n,t){t=t||{},re(function(){var a,u=me(),o=A("FID"),l=function(c){c.startTime<u.firstHiddenTime&&(o.value=c.processingStart-c.startTime,o.entries.push(c),a(!0))},p=function(c){c.forEach(l)},s=ne("first-input",p);a=L(n,o,Ee,t.reportAllChanges),s&&he(ge(function(){p(s.takeRecords()),s.disconnect()})),s&&Y(function(){var c;o=A("FID"),a=L(n,o,Ee,t.reportAllChanges),q=[],K=-1,D=null,Ue(addEventListener),c=l,q.push(c),He()})})},Te=[2500,4e3],Re={},Je=function(n,t){t=t||{},re(function(){var a,u=me(),o=A("LCP"),l=function(c){var m=c[c.length-1];m&&m.startTime<u.firstHiddenTime&&(o.value=Math.max(m.startTime-ee(),0),o.entries=[m],a())},p=ne("largest-contentful-paint",l);if(p){a=L(n,o,Te,t.reportAllChanges);var s=ge(function(){Re[o.id]||(l(p.takeRecords()),p.disconnect(),Re[o.id]=!0,a(!0))});["keydown","click"].forEach(function(c){addEventListener(c,function(){return setTimeout(s,0)},!0)}),he(s),Y(function(c){o=A("LCP"),a=L(n,o,Te,t.reportAllChanges),pe(function(){o.value=performance.now()-c.timeStamp,Re[o.id]=!0,a(!0)})})}})},we=[800,1800],Hn=function n(t){document.prerendering?re(function(){return n(t)}):document.readyState!=="complete"?addEventListener("load",function(){return n(t)},!0):setTimeout(t,0)},Ke=function(n,t){t=t||{};var a=A("TTFB"),u=L(n,a,we,t.reportAllChanges);Hn(function(){var o=ve();if(o){var l=o.responseStart;if(l<=0||l>performance.now())return;a.value=Math.max(l-ee(),0),a.entries=[o],u(!0),Y(function(){a=A("TTFB",0),(u=L(n,a,we,t.reportAllChanges))(!0)})}})};const Un=Object.freeze(Object.defineProperty({__proto__:null,CLSThresholds:_e,FCPThresholds:be,FIDThresholds:Ee,LCPThresholds:Te,TTFBThresholds:we,getCLS:Ye,getFCP:ye,getFID:ze,getLCP:Je,getTTFB:Ke,onCLS:Ye,onFCP:ye,onFID:ze,onLCP:Je,onTTFB:Ke},Symbol.toStringTag,{value:"Module"}));R.Accordion=In,R.Announcement=Mn,R.Copyright=Wn,R.ErrorPage=Dn,R.Footer=Ln,R.Logo=Pn,R.MiniMenu=Nn,R.consoleReportHandler=_n,R.debounce=Fe,R.gaReportHandler=Tn,R.htmlConvertor=kn,R.reportWebVitals=Rn,R.useNavigationListener=yn,R.useWindowListener=On,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
