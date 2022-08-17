(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function g(){}function ie(t){return t()}function K(){return Object.create(null)}function I(t){t.forEach(ie)}function se(t){return typeof t=="function"}function v(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function R(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ce(t){return Object.keys(t).length===0}function ae(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function H(t,e,n){t.$$.on_destroy.push(ae(e,n))}function m(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function w(){return W(" ")}function fe(){return W("")}function J(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function de(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function he(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Q(t,e,n){t.classList[n?"add":"remove"](e)}let X;function k(t){X=t}const S=[],B=[],M=[],V=[],me=Promise.resolve();let F=!1;function _e(){F||(F=!0,me.then(ue))}function z(t){M.push(t)}const U=new Set;let x=0;function ue(){const t=X;do{for(;x<S.length;){const e=S[x];x++,k(e),ge(e.$$)}for(k(null),S.length=0,x=0;B.length;)B.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];U.has(n)||(U.add(n),n())}M.length=0}while(S.length);for(;V.length;)V.pop()();F=!1,U.clear(),k(t)}function ge(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const j=new Set;let be;function C(t,e){t&&t.i&&(j.delete(t),t.i(e))}function q(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),be.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function P(t){t&&t.c()}function E(t,e,n,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:c}=t.$$;o&&o.m(e,n),r||z(()=>{const l=s.map(ie).filter(se);i?i.push(...l):I(l),t.$$.on_mount=[]}),c.forEach(z)}function D(t,e){const n=t.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(t,e){t.$$.dirty[0]===-1&&(S.push(t),_e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,r,o,s,i,c=[-1]){const l=X;k(t);const u=t.$$={fragment:null,ctx:null,props:s,update:g,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,p,...h)=>{const T=h.length?h[0]:p;return u.ctx&&o(u.ctx[f],u.ctx[f]=T)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](T),a&&ye(t,f)),p}):[],u.update(),a=!0,I(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=de(e.target);u.fragment&&u.fragment.l(f),f.forEach(b)}else u.fragment&&u.fragment.c();e.intro&&C(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),ue()}k(l)}class N{$destroy(){D(this,1),this.$destroy=g}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function we(t,e=g){let n;const r=new Set;function o(c){if(v(t,c)&&(t=c,n)){const l=!$.length;for(const u of r)u[1](),$.push(u,t);if(l){for(let u=0;u<$.length;u+=2)$[u][0]($[u+1]);$.length=0}}}function s(c){o(c(t))}function i(c,l=g){const u=[c,l];return r.add(u),r.size===1&&(n=e(o)||g),c(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}const Y=document.getElementById("static-host").innerText,$e=t=>({upload:{url:"/upload"}})[t],ve=({form:t,data:e})=>{let n;return t?(n=new FormData(t),{body:n}):e?(n=JSON.stringify(e),{body:n,headers:{"Content-Type":"application/json"}}):{}},Se=({dataSet:t,form:e,data:n,method:r="POST"})=>o=>(async()=>{const{url:s}=$e(t);o(u=>({...u,loading:!0}));const i=ve({form:e,data:n}),c=await fetch(s,{method:r,...i}).catch(u=>new Error(u));if(c instanceof Error){o(u=>({...u,loading:!1,error:c}));return}const l=await c.json().catch(u=>new Error(u));o(u=>({...u,loading:!1,...n instanceof Error?{error:l}:{data:l,error:!1}}))})(),ke="upload";class Ce{constructor(e){this.dataSet=e;const{subscribe:n,set:r,update:o}=we({loading:!1,data:null});this.subscribe=n,this.set=r,this.update=o}reset(){this.set({loading:!1,data:null})}async loadData({...e}={}){await Se({dataSet:this.dataSet,...e})(this.update)}getData(){let e;return this.subscribe(n=>e=n)(),e}}class Ee extends Ce{constructor(){super(ke)}extractData(){const{data:e={}}=this.getData(),{counter:n=[],stopwords:r=[]}=e;this.update(o=>({...o,counter:n,stopwords:r}))}checkCounter(){const{counter:e=[],stopwords:n=[]}=this.getData(),r=Math.max(...e.map(s=>s[1])),o=e.map(s=>({active:n.indexOf(s[0])>-1,text:s[0],size:Math.round(s[1]/r*100)/100}));this.update(s=>({...s,counterChecked:o}))}async loadAndCheck({...e}){await this.loadData({...e}),this.extractData(),this.checkCounter()}updateStopwords(e,n){let{stopwords:r=[]}=this.getData();r=n(r,e),this.update(o=>({...o,stopwords:r})),this.checkCounter()}addStopword(e){this.updateStopwords(e,(n,r)=>[...new Set([...n,r])])}removeStopword(e){this.updateStopwords(e,(n,r)=>[...n.filter(o=>o!==r)])}}const O=new Ee;function Z(t,e,n){const r=t.slice();return r[0]=e[n][0],r[5]=e[n][1],r}function ee(t){let e,n=t[5]+"",r;return{c(){e=_("option"),r=W(n),e.__value=t[0],e.value=e.__value},m(o,s){y(o,e,s),m(e,r)},p:g,d(o){o&&b(e)}}}function De(t){let e,n,r,o,s,i=t[2],c=[];for(let l=0;l<i.length;l+=1)c[l]=ee(Z(t,i,l));return{c(){e=_("input"),n=w(),r=_("select");for(let l=0;l<c.length;l+=1)c[l].c();d(e,"name",t[1]),e.value=t[0],e.hidden=!0,d(r,"name",t[1]),d(r,"id","language"),t[0]===void 0&&z(()=>t[3].call(r))},m(l,u){y(l,e,u),y(l,n,u),y(l,r,u);for(let a=0;a<c.length;a+=1)c[a].m(r,null);G(r,t[0]),o||(s=J(r,"change",t[3]),o=!0)},p(l,[u]){if(u&2&&d(e,"name",l[1]),u&5&&e.value!==l[0]&&(e.value=l[0]),u&4){i=l[2];let a;for(a=0;a<i.length;a+=1){const f=Z(l,i,a);c[a]?c[a].p(f,u):(c[a]=ee(f),c[a].c(),c[a].m(r,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=i.length}u&2&&d(r,"name",l[1]),u&5&&G(r,l[0])},i:g,o:g,d(l){l&&b(e),l&&b(n),l&&b(r),le(c,l),o=!1,s()}}}function Oe(t,e,n){const r={lang:[["en","English"],["ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439"]]};let{name:o="lang"}=e;const s=r[o];let{value:i=s[0][0]}=e;function c(){i=he(this),n(0,i),n(2,s)}return t.$$set=l=>{"name"in l&&n(1,o=l.name),"value"in l&&n(0,i=l.value)},t.$$.update=()=>{t.$$.dirty&1&&console.log(i)},[i,o,s,c]}class Le extends N{constructor(e){super(),L(this,e,Oe,De,v,{name:1,value:0})}}function Ne(t){let e,n,r,o,s,i,c,l,u,a,f;return o=new Le({props:{name:"lang"}}),{c(){e=_("form"),n=_("input"),r=w(),P(o.$$.fragment),s=w(),i=_("input"),c=w(),l=_("input"),d(n,"name","text_file"),d(n,"type","file"),d(i,"name","stopwords"),i.value=t[1],d(i,"type","text"),i.hidden=!0,d(l,"type","submit"),d(e,"action",""),d(e,"enctype","multipart/form-data")},m(p,h){y(p,e,h),m(e,n),m(e,r),E(o,e,null),m(e,s),m(e,i),m(e,c),m(e,l),t[4](e),u=!0,a||(f=J(l,"click",t[2]),a=!0)},p(p,[h]){(!u||h&2&&i.value!==p[1])&&(i.value=p[1])},i(p){u||(C(o.$$.fragment,p),u=!0)},o(p){q(o.$$.fragment,p),u=!1},d(p){p&&b(e),D(o),t[4](null),a=!1,f()}}}function Te(t,e,n){let r,o;H(t,O,l=>n(3,o=l));let s;const i=async l=>{l.preventDefault(),await O.loadAndCheck({form:s})};function c(l){B[l?"unshift":"push"](()=>{s=l,n(0,s)})}return t.$$.update=()=>{t.$$.dirty&8&&n(1,r=JSON.stringify(o.stopwords)||"[]")},[s,r,i,o,c]}class Ae extends N{constructor(e){super(),L(this,e,Te,Ne,v,{})}}function te(t,e,n){const r=t.slice();return r[3]=e[n].active,r[4]=e[n].text,r[5]=e[n].size,r}function ne(t){let e,n=t[4]+"",r,o,s;return{c(){e=_("span"),r=W(n),d(e,"class","stop-word svelte-k8wc0b"),d(e,"style","font-size=2em"),Q(e,"active",t[3])},m(i,c){y(i,e,c),m(e,r),o||(s=J(e,"click",function(){se(t[1]({active:t[3],text:t[4]}))&&t[1]({active:t[3],text:t[4]}).apply(this,arguments)}),o=!0)},p(i,c){t=i,c&1&&n!==(n=t[4]+"")&&pe(r,n),c&1&&Q(e,"active",t[3])},d(i){i&&b(e),o=!1,s()}}}function xe(t){let e,n=t[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=ne(te(t,n,o));return{c(){e=_("div");for(let o=0;o<r.length;o+=1)r[o].c();d(e,"class","stop-words svelte-k8wc0b")},m(o,s){y(o,e,s);for(let i=0;i<r.length;i+=1)r[i].m(e,null)},p(o,[s]){if(s&3){n=o[0];let i;for(i=0;i<n.length;i+=1){const c=te(o,n,i);r[i]?r[i].p(c,s):(r[i]=ne(c),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},i:g,o:g,d(o){o&&b(e),le(r,o)}}}function Me(t,e,n){let r,o;H(t,O,i=>n(2,o=i));const s=({active:i,text:c})=>l=>O[i?"removeStopword":"addStopword"](c);return t.$$.update=()=>{t.$$.dirty&4&&n(0,r=o.counterChecked||[])},[r,s,o]}class je extends N{constructor(e){super(),L(this,e,Me,xe,v,{})}}function re(t){let e;return{c(){e=_("p"),e.textContent="Loading..."},m(n,r){y(n,e,r)},d(n){n&&b(e)}}}function oe(t){let e,n;return{c(){e=_("img"),R(e.src,n=Y+"/"+t[0])||d(e,"src",n),d(e,"alt","Word cloud")},m(r,o){y(r,e,o)},p(r,o){o&1&&!R(e.src,n=Y+"/"+r[0])&&d(e,"src",n)},d(r){r&&b(e)}}}function qe(t){let e,n,r=t[1]&&re(),o=t[0]&&oe(t);return{c(){r&&r.c(),e=w(),o&&o.c(),n=fe()},m(s,i){r&&r.m(s,i),y(s,e,i),o&&o.m(s,i),y(s,n,i)},p(s,[i]){s[1]?r||(r=re(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),s[0]?o?o.p(s,i):(o=oe(s),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:g,o:g,d(s){r&&r.d(s),s&&b(e),o&&o.d(s),s&&b(n)}}}function Pe(t,e,n){let r,o,s,i;return H(t,O,c=>n(3,i=c)),t.$$.update=()=>{t.$$.dirty&8&&n(1,r=i.loading),t.$$.dirty&8&&n(2,o=i.data||{}),t.$$.dirty&4&&n(0,s=o.wcloud)},[s,r,o,i]}class ze extends N{constructor(e){super(),L(this,e,Pe,qe,v,{})}}function Ie(t){let e,n,r,o,s,i,c,l,u,a,f,p;return c=new ze({}),u=new Ae({}),f=new je({}),{c(){e=_("main"),n=_("div"),n.innerHTML="<p>Upload text file (TXT or XML, incl. HTML)</p>",r=w(),o=_("h1"),o.textContent="Word Cloud",s=w(),i=_("div"),P(c.$$.fragment),l=w(),P(u.$$.fragment),a=w(),P(f.$$.fragment),d(i,"class","card")},m(h,T){y(h,e,T),m(e,n),m(e,r),m(e,o),m(e,s),m(e,i),E(c,i,null),m(e,l),E(u,e,null),m(e,a),E(f,e,null),p=!0},p:g,i(h){p||(C(c.$$.fragment,h),C(u.$$.fragment,h),C(f.$$.fragment,h),p=!0)},o(h){q(c.$$.fragment,h),q(u.$$.fragment,h),q(f.$$.fragment,h),p=!1},d(h){h&&b(e),D(c),D(u),D(f)}}}class We extends N{constructor(e){super(),L(this,e,null,Ie,v,{})}}new We({target:document.getElementById("app")});
//# sourceMappingURL=index.6ecf8d6a.js.map
