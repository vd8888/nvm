!function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);let s=0;class r{constructor(){this.id=s++,this.subs=[]}addSub(e){this.subs.push(e)}depend(){r.target.addDep(this)}removeSub(e){const t=this.subs.indexOf(e);-1!=t&&this.subs.splice(t,1)}notify(){this.subs.forEach(e=>{e.update()})}}r.target=null;var n=r;const o=/([+\-*!><]|[&|]{2}|={2,3})+/,a=/^[a-zA-Z_][0-9.]*/i;var l=e=>{let t,i,s,r,n="if (obj) { let val; ";if(/([\w.]+)\s+\|\s+(\w+)(\((.*)\))?/.test(e)&&(s=RegExp.$1,t=RegExp.$2,i=RegExp.$4),t)n+=`val = obj.filters.${t}(${r=i?`obj.data.${s}, ${i}`:`obj.data.${s||e}`});`;else if(o.test(e))n+="val = ",e.split(o).forEach(e=>{const t=e.trim();a.test(t)&&(n+="obj."),n+=t}),n+=";";else{n+=`val = obj.${e};`;let{ancestor:t,end:i}=(e=>{let t,i;return/^([\w.]+)\.(\w+)$/.test(e)?(t=RegExp.$1,i=RegExp.$2):(t="",i=e),{ancestor:t,end:i}})(s||e);t&&(t="."+t),n+=`if (obj.${s||e} === undefined) { obj.observe(obj${t}, '${i}') };`}return n+="return val; }",new Function("obj",n)};const c=new class{constructor(){this.queue=[],this.reset()}reset(){this.has={},this.queue.length=0,this.waiting=!1}push(e){this.has[e.id]||(this.queue.push(e),this.has[e.id]=1,this.waiting||(this.waiting=!0,setTimeout(()=>this.flush(),1)))}flush(){this.queue.forEach(e=>{e.run()}),this.reset()}};let d=0;var h=class{constructor(e,t,i){this.id=d++,this.cb=i,this.vm=e,this.expOrFn=t,this.depIds={},this.getter="function"==typeof t?t:this.parseGetter(t),this.value=this.get()}update(){c.push(this)}run(){const e=this.get(),t=this.value;e!==t&&(this.value=e,this.cb.call(this.vm,e,t)),Array.isArray(e)&&this.cb.call(this.vm,e,t)}addDep(e){this.depIds.hasOwnProperty(e.id)||(e.addSub(this),this.depIds[e.id]=e)}get(){n.target=this;const e=this.getter.call(this.vm,this.vm);return n.target=null,e}parseGetter(e){return l(e)}};const p=e=>e&&"object"==typeof e,u=(e,t,i)=>{e.hasOwnProperty(i)||Reflect.defineProperty(e,i,{enumerable:!0,configurable:!1,get:()=>t[i],set(e){t[i]=e}})};class f{constructor(e){this.data=e,this.walk(e)}walk(e){Reflect.ownKeys(e).forEach(t=>{const i=e[t];void 0!==i&&(null!==i&&i.__obv__||m(e,t))})}}const m=(e,t)=>{const i=new n,s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&!1===s.configurable)return;let r=e[t];(p(r)||(e=>Array.isArray(e))(r))&&Reflect.defineProperty(r,"__obv__",{value:1,enumerable:!1,configurable:!1}),Array.isArray(r)?(e[t]=r=v(e[t],i),r.forEach(e=>g(e))):g(r),Reflect.defineProperty(e,t,{enumerable:!0,configurable:!1,get:()=>(n.target&&i.depend(),r),set(e){e!==r&&(r=e,Array.isArray(r)?(r=v(r,i)).forEach(e=>g(e)):g(r),i.notify())}})},v=(e,t)=>{const i=[];return["push","pop","shift","unshift","splice","sort","reverse"].forEach(e=>{i[e]=function(...i){const s=Array.prototype[e].apply(this,i);return t.notify(),s}}),Reflect.setPrototypeOf(e,i),e},g=(e,t)=>{if(p(e))return e&&t&&m(e,t),new f(e)};var b=g;let y={},E=0;const N={text(e,t,{exp:i}){let s,r=i;e._uid?(s=y[e._uid]).tokens[r]=t:(e._uid=++E,y[E]=s={tokens:{[r]:t},template:e.textContent});let n,o=s.template;Reflect.ownKeys(s.tokens).forEach(e=>{null==(n=s.tokens[e])&&(n=""),o=o.replace(`{{${e}}}`,n)}),e.textContent=o},html(e,t){e.innerHTML=(e=>void 0!==e?e:"")(t)},class(e,t,i){t?e.classList.add(i):e.classList.remove(i)},model(e,t){("INPUT"===e.tagName&&"text"===e.type||"TEXTAREA"===e.tagName)&&(e.value=t),"INPUT"===e.tagName&&"radio"===e.type&&(e.checked=e.value===t),"INPUT"===e.tagName&&"checkbox"===e.type&&("boolean"==typeof t&&(e.checked=t),Array.isArray(t)&&(e.checked=t.includes(e.value))),"SELECT"===e.tagName&&("string"==typeof t&&e.childNodes.forEach(e=>{e.value===t&&(e.selected=!0)}),Array.isArray(t)&&e.childNodes.forEach(e=>{e.selected=t.includes(e.value)}))},hide(e,t){e.style.display=t?"none":e._originalDisplay},show(e,t){e.style.display=t?e._originalDisplay:"none"}},_=(e,t,{dir:i})=>{e.setAttribute(i,t)};var x=e=>N[e]||_;var w={C_IF:"n-if",C_FOR:"n-for",isDirective:e=>/^(n-|:|@)/.test(e),isString:e=>e&&"string"==typeof e,isEventDirective:e=>/^@/.test(e),isElementNode:e=>e.nodeType===Node.ELEMENT_NODE,isTextNode:e=>e.nodeType===Node.TEXT_NODE,isFragmentNode:e=>e.nodeType===Node.DOCUMENT_FRAGMENT_NODE,isRepeatNode:e=>e.hasAttribute("n-for"),isIfNode:e=>e.hasAttribute("n-if"),isPriorityDirs(e){return this.isRepeatNode(e)||this.isIfNode(e)},nodeToFragment(e){const t=document.createDocumentFragment();let i;for(;i=e.firstChild;)t.appendChild(i);return t},stringToNode:e=>(new DOMParser).parseFromString(e,"text/html").body.firstChild,before(e,t){t.before?t.before(e):t.parentNode.insertBefore(e,t)},after(e,t){t.after?t.after(e):t.parentNode.insertBefore(e,t)},replaceWith(e,t){t.replaceWith?t.replaceWith(e):t.parentNode.replaceChild(e,t)},remove(e){e.remove?e.remove():e.parentNode.removeChild(e)},includes(e,t){if(e.includes)return e.includes(t);{let i=0;for(let s=0;s<e.length;s++)if(e[s]===t){i=1;break}return i}}};var A=class{constructor(e,t){this.template=e.cloneNode(!0),this.vm=t,this.ref=document.createComment("n-if"),this.inserted=!1,w.before(this.ref,e),w.remove(e)}update(e){e?this.inserted||(this.build(this.template,e),w.remove(this.ref),this.inserted=!0):this.inserted&&(this.ref=document.createComment("n-if"),w.before(this.ref,this.template),w.remove(this.template),this.inserted=!1)}build(e){const t={};t.__proto__=this.vm.data;const i=new K({template:e,parent:this.vm,data:t});w.after(i.rendered(),this.ref)}};var T=class{constructor(e,t){this.ref=document.createComment("n-for"),this.template=e.cloneNode(!0),this.vm=t,this.forVM=new Map,this.data=[],w.replaceWith(this.ref,e)}update(e,t){e&&Array.isArray(e)&&this.diff(e,t)}diff(e,t){let i=this.ref;e.forEach((e,s)=>{this.forVM.has(e)?setTimeout(()=>this.forVM.get(e).data[t[1]]=s):this.build(e,s,t,i),(i=i.nextElementSibling)||(i=this.ref)}),this.removeInvalid(e)}build(e,t,i,s){const[r,n]=i,o={[r]:e,[n]:t};o.__proto__=this.vm.data;const a=new K({template:this.template.cloneNode(!0),parent:this.vm,data:o,_cache:e});w.after(a.rendered(),s),this.forVM.set(e,a)}removeInvalid(e){const t=this.data;let i=!0;e&&t&&(this.data=t.filter(t=>{if(!w.includes(e,t)){if(this.forVM.has(t)){const e=this.forVM.get(t);w.remove(e.template),this.forVM.delete(t)}i=!1}return i}),this.data.length=0,e.forEach(e=>this.data.push(e)))}};const O=/\{\{((?:.|\n)+?)\}\}/g,R={text(e,t){const i=e.textContent;let s,r,n,o;for(O.lastIndex=n=0;s=O.exec(i);)(r=s.index)>=n&&(o=s[1].trim()),n=r+s[0].length,j(e,t,o,"text")},n_if(e,t,i){const s=new A(e,t);s.update(C(t,i)),new h(t,i,()=>s.update(C(t,i)))},n_for(e,t,i){const s=new T(e,t),[r,n]=i.split(/ in /).map(e=>e.trim()),o=/\((\w+),\s?(\w+)\)/g.test(r)?[RegExp.$1,RegExp.$2]:[r||"item","index"];s.update(C(t,n),o),new h(t,n,()=>s.update(C(t,n),o))},model(e,t,i){j(e,t,i,"model");const s=e=>{const s=C(t,i),r=e.target.value;s!==r&&P(t,i,r)};("INPUT"===e.tagName&&"text"===e.type||"TEXTAREA"===e.tagName)&&e.addEventListener("input",s),"INPUT"===e.tagName&&"radio"===e.type&&e.addEventListener("change",e=>{e.target.checked&&s(e)}),"INPUT"===e.tagName&&"checkbox"===e.type&&e.addEventListener("change",s=>{const r=C(t,i);"boolean"==typeof r&&P(t,i,e.checked),Array.isArray(r)&&(e.checked?r.push(e.value):r.splice(r.indexOf(e.value),1))}),"SELECT"===e.tagName&&e.addEventListener("change",s=>{const r=C(t,i);"string"==typeof r&&P(t,i,e.value),Array.isArray(r)&&r.splice(0,r.length,...Array.from(e.selectedOptions).map(e=>e.value))})},class(e,t,i){const s=x("class");i.replace(/{|}|'/g,"").split(/,/).forEach(i=>{const[r,n]=i.split(":").map(e=>e.trim());s(e,C(t,n),r),n.split(/[<>&&!||]/).forEach(i=>{const o=i.trim();o&&/[^\d]/.test(o)&&new h(t,o,()=>{s(e,C(t,n),r)})})})}},j=(e,t,i,s)=>{const r=x(s),n=/{{(\w+?)}}/g;if(e.nodeType===Element.ELEMENT_NODE&&(e._originalDisplay=e.style.display),n.test(i)){const o={},a=i.replace(n,(e,i)=>o[i]=C(t,i));let l;for(r(e,a,{exp:i,dir:s});null!=(l=n.exec(i));){const[a,c]=l;new h(t,c,(t,a)=>{o[c]=t;const l=i.replace(n,(e,t)=>o[t]);r(e,l,{exp:c,oldVal:a,dir:s})})}}else{const n=C(t,i);r(e,n,{exp:i,dir:s}),new h(t,i,(t,n)=>r(e,t,{exp:i,oldVal:n,dir:s}))}},C=(e,t)=>l(t)(e),P=(e,t,i)=>(e=>new Function("obj","val",`obj.${e} = val`))(t)(e,i);var $={bind:(e,t,i,s)=>{R[e]?R[e](t,i,s):j(t,i,s,e)},eventBind:(e,t,i,s)=>{let r,n=s;/^(\w+)(\((.*)\))?$/.test(s)&&(n=RegExp.$1,r=RegExp.$3);let o=e,a=i.listener[n];o&&(a||(a=new Function("this."+s)),t.addEventListener(o,e=>{let t=[];r&&(t=r.split(/,/).map(e=>{let t=i.data[e.trim()];return void 0===t&&(t=e.trim()),t})),t.push(e),a.bind(i,...t)()},!1))}};const{C_IF:D,C_FOR:I,isElementNode:M,isString:k,nodeToFragment:F,isDirective:S,isEventDirective:L,isTextNode:V,isRepeatNode:U,isIfNode:q,stringToNode:B}=w;var W=class{constructor(e){this.vm=e,this.fragment=null,e.el?this.init(e.el,e.template):this.localProc(e.template)}init(e,t){let i;k(e)&&(e=document.querySelector(e)),t||(i=t=F(e)),k(t)&&(i=B(t)),M(t)&&(i=F(t)),this.compileElement(i),e.appendChild(i),this.fragment=i}localProc(e){let t=document.createDocumentFragment();k(e)&&(e=B(e)),M(e)&&t.appendChild(e),this.fragment=t,this.compileElement(t)}compileElement(e){const t=e.childNodes;Array.from(t).forEach(e=>{M(e)?U(e)?this.compileRepeat(e):q(e)?this.compileIf(e):(this.compile(e),e.hasChildNodes()&&this.compileElement(e)):V(e)&&$.bind("text",e,this.vm)})}compile(e){const t=e.attributes;Array.from(t).forEach(t=>{const i=t.name;if(S(i)){const s=t.value,r=i.substring(/^(@|:)/.test(i)?1:2);L(i)?$.eventBind(r,e,this.vm,s):$.bind(r,e,this.vm,s),e.removeAttribute(i)}})}compileText(e){$.text(e,this.vm)}compileRepeat(e){const t=e.getAttribute(I);e.removeAttribute(I),$.bind("n_for",e,this.vm,t)}compileIf(e){const t=e.getAttribute(D);e.removeAttribute(D),$.bind("n_if",e,this.vm,t)}},G={strLen(e="",t,i){t*=2;let s="",r=0;for(let n=0;n<e.length;n++){if(e.charCodeAt(n)>255?r+=2:r++,r>=t)return i?s+"...":s;s+=e.charAt(n)}return e}};class X{constructor(e={}){this.options=e;const t=this.data=this.options.data;this.template=e.template||"",this.el=e.el,this.parent=e.parent;const i=this.options.methods||{};i.__proto__=this.parent&&this.parent.listener,this.listener=i,this.filters=Object.assign(e.filters||{},G),this.proxyData(t),this.initComputed(),b(t),this.observe=b,this.compile=new W(this),e.created&&e.created.call(this)}watch(e,t){new h(this,e,t)}proxyData(e){for(const t in e)u(this,e,t)}initComputed(){const e=this.options.computed;"object"==typeof e&&Object.keys(e).forEach(t=>{Object.defineProperty(this,t,{get:"function"==typeof e[t]?e[t]:e[t].get,set(){}})})}rendered(){return this.compile.fragment}}window.NVM=window.nvm=X;var K=t.default=X}]);