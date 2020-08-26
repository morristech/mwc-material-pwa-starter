/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${o}`);class r{constructor(e,t){this.parts=[],this.element=t;const o=[],r=[],d=document.createTreeWalker(t.content,133,null,!1);let l=0,m=-1,p=0;const{strings:h,values:{length:u}}=e;for(;p<u;){const e=d.nextNode();if(null!==e){if(m++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)a(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=h[p],i=s.exec(t)[2],o=i.toLowerCase()+"$lit$",r=e.getAttribute(o);e.removeAttribute(o);const a=r.split(n);this.parts.push({type:"attribute",index:m,name:i,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),d.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,r=t.split(n),d=r.length-1;for(let t=0;t<d;t++){let o,n=r[t];if(""===n)o=c();else{const e=s.exec(n);null!==e&&a(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(n)}i.insertBefore(o,e),this.parts.push({type:"node",index:++m})}""===r[d]?(i.insertBefore(c(),e),o.push(e)):e.data=r[d],p+=d}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&m!==l||(m++,t.insertBefore(c(),e)),l=m,this.parts.push({type:"node",index:m}),null===e.nextSibling?e.data="":(o.push(e),m--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else d.currentNode=r.pop()}for(const e of o)e.parentNode.removeChild(e)}}const a=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,c=()=>document.createComment(""),s=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(e,t){const{element:{content:i},parts:o}=e,n=document.createTreeWalker(i,133,null,!1);let r=p(o),a=o[r],d=-1,c=0;const s=[];let l=null;for(;n.nextNode();){d++;const e=n.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(s.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==a&&a.index===d;)a.index=null!==l?-1:a.index-c,r=p(o,r),a=o[r]}s.forEach(e=>e.parentNode.removeChild(e))}const m=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=new WeakMap,u=e=>(...t)=>{const i=e(...t);return h.set(i,!0),i},f=e=>"function"==typeof e&&h.has(e),g={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],o=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,a=0,c=0,s=n.nextNode();for(;a<o.length;)if(r=o[a],d(r)){for(;c<r.index;)c++,"TEMPLATE"===s.nodeName&&(i.push(s),n.currentNode=s.content),null===(s=n.nextNode())&&(n.currentNode=i.pop(),s=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${i} `;class v{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],a=e.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===e.indexOf("--\x3e",a+1);const d=s.exec(e);t+=null===d?e+(n?x:o):e.substr(0,d.index)+d[1]+d[2]+"$lit$"+d[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=e=>null===e||!("object"==typeof e||"function"==typeof e),w=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let o=0;o<t;o++){i+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(y(e)||!w(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||y(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const i=new _(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const n of e)i=t[o],void 0===i&&(i=new C(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(n),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class S extends k{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends E{}let I=!1;(()=>{try{const e={get capture(){return I=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class R{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(I?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function L(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(i);return o=t.keyString.get(n),void 0===o&&(o=new r(e,e.getTemplateElement()),t.keyString.set(n,o)),t.stringsArray.set(e.strings,o),o}const N=new Map,F=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,o){const n=t[0];if("."===n){return new S(e,t.slice(1),i).parts}return"@"===n?[new R(e,t.slice(1),o.eventContext)]:"?"===n?[new A(e,t.slice(1),i)]:new k(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const P=(e,...t)=>new v(e,t,"html",z)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,D=(e,t)=>`${e}--${t}`;let M=!0;void 0===window.ShadyCSS?M=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),M=!1);const B=e=>t=>{const o=D(t.type,e);let n=N.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},N.set(o,n));let a=n.stringsArray.get(t.strings);if(void 0!==a)return a;const d=t.strings.join(i);if(a=n.keyString.get(d),void 0===a){const i=t.getTemplateElement();M&&window.ShadyCSS.prepareTemplateDom(i,e),a=new r(t,i),n.keyString.set(d,a)}return n.stringsArray.set(t.strings,a),a},H=["html","svg"],$=new Set,V=(e,t,i)=>{$.add(e);const o=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{H.forEach(t=>{const i=N.get(D(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),l(e,i)})})})(e);const d=o.content;i?function(e,t,i=null){const{element:{content:o},parts:n}=e;if(null==i)return void o.appendChild(t);const r=document.createTreeWalker(o,133,null,!1);let a=p(n),d=0,c=-1;for(;r.nextNode();){for(c++,r.currentNode===i&&(d=m(t),i.parentNode.insertBefore(t,i));-1!==a&&n[a].index===c;){if(d>0){for(;-1!==a;)n[a].index+=d,a=p(n,a);return}a=p(n,a)}}}(i,a,d.firstChild):d.insertBefore(a,d.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const c=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){d.insertBefore(a,d.firstChild);const e=new Set;e.add(a),l(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const U={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},j=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:j};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this._requestUpdate(e,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||X}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=j){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||U,n="function"==typeof o?o:o.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||U.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=X){const o=this.constructor,n=o._attributeNameForProperty(e,i);if(void 0!==n){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const o=this.constructor,n=o.getPropertyOptions(e);o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function q(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):G(e,t)}function K(e){return q({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function Q(e){return(t,i)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?Z(o,t,i):ee(o,t)}}function J(e){return(t,i)=>{const o={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?Z(o,t,i):ee(o,t)}}const Z=(e,t,i)=>{Object.defineProperty(t,i,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return(t,i)=>void 0!==i?((e,t,i)=>{Object.assign(t[i],e)})(e,t,i):((e,t)=>Object.assign(Object.assign({},t),{finisher(i){Object.assign(i.prototype[t.key],e)}}))(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ie="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol();class ne{constructor(e,t){if(t!==oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ie?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const i=t.reduce((t,i,o)=>t+(e=>{if(e instanceof ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new ne(i,oe)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const ae={};class de extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ie?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ae&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ae}}de.finalized=!0,de.render=(e,i,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,r=F.has(i),a=M&&11===i.nodeType&&!!i.host,d=a&&!$.has(n),c=d?document.createDocumentFragment():i;if(((e,i,o)=>{let n=F.get(i);void 0===n&&(t(i,i.firstChild),F.set(i,n=new C(Object.assign({templateFactory:L},o))),n.appendInto(i)),n.setValue(e),n.commit()})(e,c,Object.assign({templateFactory:B(n)},o)),d){const e=F.get(c);F.delete(c);const o=e.value instanceof _?e.value.template:void 0;V(n,c,o),t(i,i.firstChild),i.appendChild(c),F.set(i,e)}!r&&a&&window.ShadyCSS.styleElement(i.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ce="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,se=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},le=`{{lit-${String(Math.random()).slice(2)}}}`,me=`\x3c!--${le}--\x3e`,pe=new RegExp(`${le}|${me}`);class he{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],n=document.createTreeWalker(t.content,133,null,!1);let r=0,a=-1,d=0;const{strings:c,values:{length:s}}=e;for(;d<s;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)ue(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=c[d],i=be.exec(t)[2],o=i.toLowerCase()+"$lit$",n=e.getAttribute(o);e.removeAttribute(o);const r=n.split(pe);this.parts.push({type:"attribute",index:a,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(le)>=0){const o=e.parentNode,n=t.split(pe),r=n.length-1;for(let t=0;t<r;t++){let i,r=n[t];if(""===r)i=ge();else{const e=be.exec(r);null!==e&&ue(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}o.insertBefore(i,e),this.parts.push({type:"node",index:++a})}""===n[r]?(o.insertBefore(ge(),e),i.push(e)):e.data=n[r],d+=r}}else if(8===e.nodeType)if(e.data===le){const t=e.parentNode;null!==e.previousSibling&&a!==r||(a++,t.insertBefore(ge(),e)),r=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(i.push(e),a--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(le,t+1));)this.parts.push({type:"node",index:-1}),d++}}else n.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const ue=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},fe=e=>-1!==e.index,ge=()=>document.createComment(""),be=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _e(e,t){const{element:{content:i},parts:o}=e,n=document.createTreeWalker(i,133,null,!1);let r=ve(o),a=o[r],d=-1,c=0;const s=[];let l=null;for(;n.nextNode();){d++;const e=n.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(s.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==a&&a.index===d;)a.index=null!==l?-1:a.index-c,r=ve(o,r),a=o[r]}s.forEach(e=>e.parentNode.removeChild(e))}const xe=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},ve=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(fe(t))return i}return-1},ye=new WeakMap,we=e=>"function"==typeof e&&ye.has(e),ke={},Ee={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ce{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=ce?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,r=0,a=0,d=o.nextNode();for(;r<i.length;)if(n=i[r],fe(n)){for(;a<n.index;)a++,"TEMPLATE"===d.nodeName&&(t.push(d),o.currentNode=d.content),null===(d=o.nextNode())&&(o.currentNode=t.pop(),d=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return ce&&(document.adoptNode(e),customElements.upgrade(e)),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Ae=` ${le} `;class Se{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const r=be.exec(e);t+=null===r?e+(i?Ae:me):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+le}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Te=e=>null===e||!("object"==typeof e||"function"==typeof e),Ie=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Re{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Oe(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let o=0;o<t;o++){i+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(Te(e)||!Ie(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Oe{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ke||Te(e)&&e===this.value||(this.value=e,we(e)||(this.committer.dirty=!0))}commit(){for(;we(this.value);){const e=this.value;this.value=ke,e(this)}this.value!==ke&&this.committer.commit()}}class Le{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ge()),this.endNode=e.appendChild(ge())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ge()),e.__insert(this.endNode=ge())}insertAfterPart(e){e.__insert(this.startNode=ge()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;we(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ke,e(this)}const e=this.__pendingValue;e!==ke&&(Te(e)?e!==this.value&&this.__commitText(e):e instanceof Se?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ie(e)?this.__commitIterable(e):e===Ee?(this.value=Ee,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ce&&this.value.template===t)this.value.update(e.values);else{const i=new Ce(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const n of e)i=t[o],void 0===i&&(i=new Le(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(n),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){se(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ne{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;we(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ke,e(this)}if(this.__pendingValue===ke)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=ke}}class Fe extends Re{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new ze(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ze extends Oe{}let Pe=!1;(()=>{try{const e={get capture(){return Pe=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class De{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;we(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ke,e(this)}if(this.__pendingValue===ke)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=Me(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=ke}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Me=e=>e&&(Pe?{capture:e.capture,passive:e.passive,once:e.once}:e.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function Be(e){let t=He.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},He.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(le);return i=t.keyString.get(o),void 0===i&&(i=new he(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const He=new Map,$e=new WeakMap,Ve=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,o){const n=t[0];return"."===n?new Fe(e,t.slice(1),i).parts:"@"===n?[new De(e,t.slice(1),o.eventContext)]:"?"===n?[new Ne(e,t.slice(1),i)]:new Re(e,t,i).parts}handleTextExpression(e){return new Le(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Ue=(e,...t)=>new Se(e,t,"html",Ve)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,je=(e,t)=>`${e}--${t}`;let Xe=!0;void 0===window.ShadyCSS?Xe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Xe=!1);const We=e=>t=>{const i=je(t.type,e);let o=He.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},He.set(i,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(le);if(n=o.keyString.get(r),void 0===n){const i=t.getTemplateElement();Xe&&window.ShadyCSS.prepareTemplateDom(i,e),n=new he(t,i),o.keyString.set(r,n)}return o.stringsArray.set(t.strings,n),n},Ye=["html","svg"],Ge=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const qe={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Ke=(e,t)=>t!==e&&(t==t||e==e),Qe={attribute:!0,type:String,converter:qe,reflect:!1,hasChanged:Ke};class Je extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Qe){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this._requestUpdate(e,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Qe}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Ke){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||qe,n="function"==typeof o?o:o.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||qe.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Qe){const o=this.constructor,n=o._attributeNameForProperty(e,i);if(void 0!==n){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const o=this.constructor,n=o.getPropertyOptions(e);o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Je.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ze=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function et(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Ze(e,t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const tt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol();class ot{constructor(e,t){if(t!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const nt=(e,...t)=>{const i=t.reduce((t,i,o)=>t+(e=>{if(e instanceof ot)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new ot(i,it)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const rt={};class at extends Je{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==rt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return rt}}at.finalized=!0,at.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,n=$e.has(t),r=Xe&&11===t.nodeType&&!!t.host,a=r&&!Ge.has(o),d=a?document.createDocumentFragment():t;if(((e,t,i)=>{let o=$e.get(t);void 0===o&&(se(t,t.firstChild),$e.set(t,o=new Le(Object.assign({templateFactory:Be},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,d,Object.assign({templateFactory:We(o)},i)),a){const e=$e.get(d);$e.delete(d),((e,t,i)=>{Ge.add(e);const o=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{Ye.forEach(t=>{const i=He.get(je(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),_e(e,i)})})})(e);const d=o.content;i?function(e,t,i=null){const{element:{content:o},parts:n}=e;if(null==i)return void o.appendChild(t);const r=document.createTreeWalker(o,133,null,!1);let a=ve(n),d=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===i&&(d=xe(t),i.parentNode.insertBefore(t,i));-1!==a&&n[a].index===c;){if(d>0){for(;-1!==a;)n[a].index+=d,a=ve(n,a);return}a=ve(n,a)}}(i,a,d.firstChild):d.insertBefore(a,d.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const c=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){d.insertBefore(a,d.firstChild);const e=new Set;e.add(a),_e(i,e)}})(o,d,e.value instanceof Ce?e.value.template:void 0),se(t,t.firstChild),t.appendChild(d),$e.set(t,e)}!n&&r&&window.ShadyCSS.styleElement(t.host)};var dt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ct=class extends at{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{"Escape"===e.key&&this.cancel()})}static get styles(){return nt`:host{--install-focus-color:#919c9c;--install-button-color:#1FC2C8;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index)}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media(max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media(max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media(max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(e){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch(e){return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!0}{await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let i=new CustomEvent("hide");this.dispatchEvent(i),e()})}render(){return Ue`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?Ue`<button part=openButton id=openButton @click=${()=>this.openPrompt()}><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?Ue`<div id=installModalWrapper>${this.openmodal?Ue`<div id=background @click=${()=>this.cancel()}></div>`:null}<div id=installModal part=installModal><div id=headerContainer><div id=logoContainer><img src=${this.iconpath?this.iconpath:this.manifestdata.icons[0].src} alt="App Logo"><div id=installTitle><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id=desc>${this.explainer}</p></div></div><button id=closeButton @click=${()=>this.cancel()}><svg width=23 height=22 viewBox="0 0 23 22" fill=none xmlns=http://www.w3.org/2000/svg><path opacity=0.33 fill-rule=evenodd clip-rule=evenodd d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill=#60656D /></svg></button></div><div id=contentContainer><div id=featuresScreenDiv>${this.manifestdata.features?Ue`<div id=keyFeatures><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>Ue`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?Ue`<div id=screenshotsContainer><button @click=${()=>this.scrollToLeft()}><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id=screenshots>${this.manifestdata.screenshots.map(e=>Ue`<div><img alt="App Screenshot" src=${e.src}></div>`)}</section><button @click=${()=>this.scrollToRight()}><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id=descriptionWrapper><h3>${this.descriptionheader}</h3><p id=manifest-description>${this.manifestdata.description}</p></div></div>${this.isIOS?Ue`<p id=iosText>${this.iosinstallinfotext}</p>`:Ue`<div id=buttonsContainer>${this.deferredprompt?Ue`<button id=installButton @click=${()=>this.install()}>${this.installbuttontext} ${this.manifestdata.short_name}</button>`:Ue`<button @click=${()=>this.cancel()} id=installCancelButton>${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};dt([et({type:String})],ct.prototype,"manifestpath",void 0),dt([et({type:String})],ct.prototype,"iconpath",void 0),dt([et({type:Object})],ct.prototype,"manifestdata",void 0),dt([et({type:Boolean})],ct.prototype,"openmodal",void 0),dt([et({type:Boolean})],ct.prototype,"showopen",void 0),dt([et({type:Boolean})],ct.prototype,"isSupportingBrowser",void 0),dt([et({type:Boolean})],ct.prototype,"isIOS",void 0),dt([et({type:Boolean})],ct.prototype,"installed",void 0),dt([et({type:Boolean})],ct.prototype,"hasprompt",void 0),dt([et({type:Boolean})],ct.prototype,"usecustom",void 0),dt([et({type:Array})],ct.prototype,"relatedApps",void 0),dt([et({type:String})],ct.prototype,"explainer",void 0),dt([et({type:String})],ct.prototype,"featuresheader",void 0),dt([et({type:String})],ct.prototype,"descriptionheader",void 0),dt([et({type:String})],ct.prototype,"installbuttontext",void 0),dt([et({type:String})],ct.prototype,"cancelbuttontext",void 0),dt([et({type:String})],ct.prototype,"iosinstallinfotext",void 0),dt([et()],ct.prototype,"deferredprompt",void 0),ct=dt([("pwa-install",e=>"function"==typeof e?((e,t)=>(window.customElements.define("pwa-install",t),t))(0,e):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(e){window.customElements.define("pwa-install",e)}}})(0,e))],ct);var st=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let lt=class extends de{constructor(){super(),this.message="Welcome!"}static get styles(){return re`
      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media (spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `}firstUpdated(){}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return P`
      <div>
        <div id="welcomeBlock">
          <img src="assets/icons/icon_512.png" alt="app icon" />
          <h2>${this.message}</h2>

          <p>
            Welcome to the
            <a href="https://pwabuilder.com">PWABuilder</a> pwa-starter! Be sure
            to head back to <a href="https://pwabuilder.com">PWABuilder</a> when
            you are ready to ship this PWA to the Microsoft, Google Play and
            Samsung Galaxy stores!
          </p>

          ${"share"in navigator?P`<button @click="${this.share}">Share this Starter!</button>`:null}
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `}};function mt(e){return e=e||[],Array.isArray(e)?e:[e]}function pt(e){return`[Vaadin.Router] ${e}`}st([q()],lt.prototype,"message",void 0),lt=st([Y("app-home")],lt);const ht=["module","nomodule"];function ut(e){if(!e.match(/.+\.[m]?js$/))throw new Error(pt(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function ft(e){if(!e||!yt(e.path))throw new Error(pt('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,i=["component","redirect","bundle"];if(!(vt(e.action)||Array.isArray(e.children)||vt(e.children)||xt(t)||i.some(t=>yt(e[t]))))throw new Error(pt(`Expected route config "${e.path}" to include either "${i.join('", "')}" `+'or "action" function but none found.'));if(t)if(yt(t))ut(t);else{if(!ht.some(e=>e in t))throw new Error(pt('Expected route bundle to include either "nomodule" or "module" keys, or both'));ht.forEach(e=>e in t&&ut(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(pt(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function gt(e){mt(e).forEach(e=>ft(e))}function bt(e,t){let i=document.head.querySelector('script[src="'+e+'"][async]');return i||(i=document.createElement("script"),i.setAttribute("src",e),"module"===t?i.setAttribute("type","module"):"nomodule"===t&&i.setAttribute("nomodule",""),i.async=!0),new Promise((e,t)=>{i.onreadystatechange=i.onload=t=>{i.__dynamicImportLoaded=!0,e(t)},i.onerror=e=>{i.parentNode&&i.parentNode.removeChild(i),t(e)},null===i.parentNode?document.head.appendChild(i):i.__dynamicImportLoaded&&e()})}function _t(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function xt(e){return"object"==typeof e&&!!e}function vt(e){return"function"==typeof e}function yt(e){return"string"==typeof e}function wt(e){const t=new Error(pt(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const kt=new class{};function Et(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const i=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<i.length;e++){const o=i[e];if(o.nodeName&&"a"===o.nodeName.toLowerCase()){t=o;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,i=e.protocol;return`${i}//${"http:"===i&&"80"===t||"https:"===i&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:o,search:n,hash:r}=t;_t("go",{pathname:o,search:n,hash:r})&&e.preventDefault()}const Ct={activate(){window.document.addEventListener("click",Et)},inactivate(){window.document.removeEventListener("click",Et)}};function At(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:i,hash:o}=window.location;_t("go",{pathname:t,search:i,hash:o})}/Trident/.test(navigator.userAgent)&&!vt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var i=document.createEvent("Event");return i.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),i.state=t.state||null,i},window.PopStateEvent.prototype=window.Event.prototype);const St={activate(){window.addEventListener("popstate",At)},inactivate(){window.removeEventListener("popstate",At)}};var Tt=Ht,It=Ft,Rt=function(e,t){return zt(Ft(e,t))},Ot=zt,Lt=Bt,Nt=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ft(e,t){for(var i,o=[],n=0,r=0,a="",d=t&&t.delimiter||"/",c=t&&t.delimiters||"./",s=!1;null!==(i=Nt.exec(e));){var l=i[0],m=i[1],p=i.index;if(a+=e.slice(r,p),r=p+l.length,m)a+=m[1],s=!0;else{var h="",u=e[r],f=i[2],g=i[3],b=i[4],_=i[5];if(!s&&a.length){var x=a.length-1;c.indexOf(a[x])>-1&&(h=a[x],a=a.slice(0,x))}a&&(o.push(a),a="",s=!1);var v=""!==h&&void 0!==u&&u!==h,y="+"===_||"*"===_,w="?"===_||"*"===_,k=h||d,E=g||b;o.push({name:f||n++,prefix:h,delimiter:k,optional:w,repeat:y,partial:v,pattern:E?Dt(E):"[^"+Pt(k)+"]+?"})}}return(a||r<e.length)&&o.push(a+e.substr(r)),o}function zt(e){for(var t=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(i,o){for(var n="",r=o&&o.encode||encodeURIComponent,a=0;a<e.length;a++){var d=e[a];if("string"!=typeof d){var c,s=i?i[d.name]:void 0;if(Array.isArray(s)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(0===s.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var l=0;l<s.length;l++){if(c=r(s[l],d),!t[a].test(c))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');n+=(0===l?d.prefix:d.delimiter)+c}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!d.optional)throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"));d.partial&&(n+=d.prefix)}else{if(c=r(String(s),d),!t[a].test(c))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+c+'"');n+=d.prefix+c}}else n+=d}return n}}function Pt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Dt(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Mt(e){return e&&e.sensitive?"":"i"}function Bt(e,t,i){for(var o=(i=i||{}).strict,n=!1!==i.start,r=!1!==i.end,a=Pt(i.delimiter||"/"),d=i.delimiters||"./",c=[].concat(i.endsWith||[]).map(Pt).concat("$").join("|"),s=n?"^":"",l=0===e.length,m=0;m<e.length;m++){var p=e[m];if("string"==typeof p)s+=Pt(p),l=m===e.length-1&&d.indexOf(p[p.length-1])>-1;else{var h=p.repeat?"(?:"+p.pattern+")(?:"+Pt(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?s+=Pt(p.prefix)+"("+h+")?":s+="(?:"+Pt(p.prefix)+"("+h+"))?":s+=Pt(p.prefix)+"("+h+")"}}return r?(o||(s+="(?:"+a+")?"),s+="$"===c?"$":"(?="+c+")"):(o||(s+="(?:"+a+"(?="+c+"))?"),l||(s+="(?="+a+"|"+c+")")),new RegExp(s,Mt(i))}function Ht(e,t,i){return e instanceof RegExp?function(e,t){if(!t)return e;var i=e.source.match(/\((?!\?)/g);if(i)for(var o=0;o<i.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,i){for(var o=[],n=0;n<e.length;n++)o.push(Ht(e[n],t,i).source);return new RegExp("(?:"+o.join("|")+")",Mt(i))}(e,t,i):function(e,t,i){return Bt(Ft(e,i),t,i)}(e,t,i)}Tt.parse=It,Tt.compile=Rt,Tt.tokensToFunction=Ot,Tt.tokensToRegExp=Lt;const{hasOwnProperty:$t}=Object.prototype,Vt=new Map;function Ut(e){try{return decodeURIComponent(e)}catch(t){return e}}function jt(e,t,i,o,n){let r,a,d=0,c=e.path||"";return"/"===c.charAt(0)&&(i&&(c=c.substr(1)),i=!0),{next(s){if(e===s)return{done:!0};const l=e.__children=e.__children||e.children;if(!r&&(r=function(e,t,i,o,n){const r=`${e}|${i=!!i}`;let a=Vt.get(r);if(!a){const t=[];a={keys:t,pattern:Tt(e,t,{end:i,strict:""===e})},Vt.set(r,a)}const d=a.pattern.exec(t);if(!d)return null;const c=Object.assign({},n);for(let e=1;e<d.length;e++){const t=a.keys[e-1],i=t.name,o=d[e];void 0===o&&$t.call(c,i)||(t.repeat?c[i]=o?o.split(t.delimiter).map(Ut):[]:c[i]=o?Ut(o):o)}return{path:d[0],keys:(o||[]).concat(a.keys),params:c}}(c,t,!l,o,n),r))return{done:!1,value:{route:e,keys:r.keys,params:r.params,path:r.path}};if(r&&l)for(;d<l.length;){if(!a){const o=l[d];o.parent=e;let n=r.path.length;n>0&&"/"===t.charAt(n)&&(n+=1),a=jt(o,t.substr(n),i,r.keys,r.params)}const o=a.next(s);if(!o.done)return{done:!1,value:o.value};a=null,d++}return{done:!0}}}}function Xt(e){if(vt(e.route.action))return e.route.action(e)}Vt.set("|false",{keys:[],pattern:/(?:)/});class Wt{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Xt,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){gt(e);const t=[...mt(e)];this.root.__children=t}addRoutes(e){return gt(e),this.root.__children.push(...mt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,yt(e)?{pathname:e}:e),i=jt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),o=this.resolveRoute;let n=null,r=null,a=t;function d(e,c=n.value.route,s){const l=null===s&&n.value.route;return n=r||i.next(l),r=null,e||!n.done&&function(e,t){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(c,n.value.route)?n.done?Promise.reject(wt(t)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,n.value),function(e,t){const{route:i,path:o}=t;if(i&&!i.__synthetic){const t={path:o,route:i};if(e.chain){if(i.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==i.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(a,n.value),Promise.resolve(o(a)).then(t=>null!=t&&t!==kt?(a.result=t.result||t,a):d(e,c,t))):(r=n,Promise.resolve(kt))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const i=(e.route||{}).path;return i&&(t+=` Resolution had failed on route: '${i}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;return i.slice(0,t.length)===t?i.slice(t.length):void 0}}Wt.pathToRegexp=Tt;const{pathToRegexp:Yt}=Wt,Gt=new Map;function qt(e,t){const i=e.get(t);if(i&&i.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return i&&i[0]}function Kt(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function Qt(e,t={}){if(!(e instanceof Wt))throw new TypeError("An instance of Resolver is expected");const i=new Map;return(o,n)=>{let r=qt(i,o);if(!r&&(i.clear(),function e(t,i,o){const n=i.name||i.component;if(n&&(t.has(n)?t.get(n).push(i):t.set(n,[i])),Array.isArray(o))for(let n=0;n<o.length;n++){const r=o[n];r.parent=i,e(t,r,r.__children||r.children)}}(i,e.root,e.root.__children),r=qt(i,o),!r))throw new Error(`Route "${o}" not found`);let a=Gt.get(r.fullPath);if(!a){let e=Kt(r),t=r.parent;for(;t;){const i=Kt(t);i&&(e=i.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const i=Yt.parse(e),o=Yt.tokensToFunction(i),n=Object.create(null);for(let e=0;e<i.length;e++)yt(i[e])||(n[i[e].name]=!0);a={toPath:o,keys:n},Gt.set(e,a),r.fullPath=e}let d=a.toPath(n,t)||"/";if(t.stringifyQueryParams&&n){const e={},i=Object.keys(n);for(let t=0;t<i.length;t++){const o=i[t];a.keys[o]||(e[o]=n[o])}const o=t.stringifyQueryParams(e);o&&(d+="?"===o.charAt(0)?o:`?${o}`)}return d}}let Jt=[];function Zt(e){Jt.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),Jt=e}function ei(e,t){return e.classList.add(t),new Promise(i=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const o=e.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${n}`),((e,t)=>{const i=()=>{e.removeEventListener("animationend",i),t()};e.addEventListener("animationend",i)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),i()})}else e.classList.remove(t),i()})}function ti(e){return null!=e}function ii({pathname:e="",search:t="",hash:i="",chain:o=[],params:n={},redirectFrom:r,resolver:a},d){const c=o.map(e=>e.route);return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:i,routes:c,route:d||c.length&&c[c.length-1]||null,params:n,redirectFrom:r,getUrl:(e={})=>di(si.pathToRegexp.compile(ci(c))(Object.assign({},n,e)),a)}}function oi(e,t){const i=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:i}}}function ni(e,t,i){if(vt(e))return e.apply(i,t)}function ri(e,t,i){return o=>o&&(o.cancel||o.redirect)?o:i?ni(i[e],t,i):void 0}function ai(e){if(e&&e.length){const t=e[0].parentNode;for(let i=0;i<e.length;i++)t.removeChild(e[i])}}function di(e,t){const i=t.__effectiveBaseUrl;return i?t.constructor.__createUrl(e.replace(/^\//,""),i).pathname:e}function ci(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class si extends Wt{constructor(e,t){const i=document.head.querySelector("base"),o=i&&i.getAttribute("href");super([],Object.assign({baseUrl:o&&Wt.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const n=si.NavigationTrigger;si.setTriggers.apply(si,Object.keys(n).map(e=>n[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=ii({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();vt(t.children)&&(i=i.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{ti(e)||vt(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!xt(e))throw new Error(pt(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const i=mt(e);for(let e=0;e<i.length;e++)ft(i[e]),t.__children.push(i[e])}(e,t)}));const o={redirect:t=>oi(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return i.then(()=>{if(this.__isLatestRender(e))return ni(t.action,[e,o],t)}).then(e=>{return ti(e)&&(e instanceof HTMLElement||e.redirect||e===kt)?e:yt(t.redirect)?o.redirect(t.redirect):t.bundle?(i=t.bundle,yt(i)?bt(i):Promise.race(ht.filter(e=>e in i).map(e=>bt(i[e],e)))).then(()=>{},()=>{throw new Error(pt(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var i}).then(e=>ti(e)?e:yt(t.component)?o.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},yt(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(o).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const o=this.__previousContext;if(e===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=ii(e),t&&this.__updateBrowserHistory(e,1===i),_t("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,o),this.__previousContext=e,this.location;this.__addAppearingContent(e,o);const n=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,o),n.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(o),ai(this.__outlet&&this.__outlet.children),this.location=ii(Object.assign(o,{resolver:this})),_t("error",Object.assign({router:this,error:e},o)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const o=i!==t?i:e,n=di(ci(i.chain),i.resolver)===i.pathname,r=(e,t=e.route,i)=>e.next(void 0,t,i).then(i=>null===i||i===kt?n?e:null!==t.parent?r(e,t.parent,i):i:i);return r(i).then(e=>{if(null===e||e===kt)throw wt(o);return e&&e!==kt&&e!==i?this.__fullyResolveChain(o,e):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=ii(e);const i=e.chain.map(e=>e.route).indexOf(e.route);e.chain[i].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(pt(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],o=e.chain;let n=Promise.resolve();const r=()=>({cancel:!0}),a=t=>oi(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let t=0;t<Math.min(i.length,o.length)&&(i[t].route===o[t].route&&(i[t].path===o[t].path||i[t].element===o[t].element)&&this.__isReusableElement(i[t].element,o[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=o.length===i.length&&e.__divergedChainIndex==o.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=o.length-1;a>=0;a--)i[a].path===o[a].path&&e.search===t.search||(n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:r},i[a]));for(let d=0;d<o.length;d++)i[d].path===o[d].path&&e.search===t.search||(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:r,redirect:a},o[d])),i[d].element.location=ii(e,i[d].route)}else for(let t=i.length-1;t>=e.__divergedChainIndex;t--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:r},i[t])}if(!e.__skipAttach)for(let t=0;t<o.length;t++)t<e.__divergedChainIndex?t<i.length&&i[t].element&&(i[t].element.location=ii(e,i[t].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:r,redirect:a},o[t]),o[t].element&&(o[t].element.location=ii(e,o[t].route)));return n.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,o){const n=ii(t);return e.then(e=>{if(this.__isLatestRender(t)){return ri("onBeforeLeave",[n,i,this],o.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,i,o){const n=ii(t,o.route);return e.then(e=>{if(this.__isLatestRender(t)){return ri("onBeforeEnter",[n,i,this],o.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>256)throw new Error(pt(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(pt(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},o){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=o?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const n=t&&t.chain[o].element;if(n){if(n.parentNode!==i)break;e.chain[o].element=n,i=n}}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let o=i;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const n=e.chain[t].element;n&&(o.appendChild(n),this.__addedByRouter.set(n,!0),o===i&&this.__appearingContent.push(n),o=n)}}__removeDisappearingContent(){this.__disappearingContent&&ai(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ai(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const o=t.chain[i].element;if(o)try{const i=ii(e);ni(o.onAfterLeave,[i,{},t.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&ai(o.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},o=ii(e,e.chain[t].route);ni(i.onAfterEnter,[o,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],o=[],n=e.chain;let r;for(let e=n.length;e>0;e--)if(n[e-1].route.animate){r=n[e-1].route.animate;break}if(t&&i&&r){const e=xt(r)&&r.leave||"leaving",n=xt(r)&&r.enter||"entering";o.push(ei(t,e)),o.push(ei(i,n))}return Promise.all(o).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:o}=e?e.detail:window.location;yt(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:o},!0))}static setTriggers(...e){Zt(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Qt(this)),di(this.__urlForName(e,t),this)}urlForPath(e,t){return di(si.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:o}=yt(e)?this.__createUrl(e,"http://a"):e;return _t("go",{pathname:t,search:i,hash:o})}}const li=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,mi=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function pi(e,t){if("function"!=typeof e)return;const i=li.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){}return e(t)}window.Vaadin=window.Vaadin||{};const hi=function(e,t){if(window.Vaadin.developmentMode)return pi(e,t)};function ui(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(mi?!function(){if(mi){if(Object.keys(mi).map(e=>mi[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!pi((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.1"}),hi(ui),si.NavigationTrigger={POPSTATE:St,CLICK:Ct};var fi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let gi=class extends de{constructor(){super(),this.title="PWA Starter"}static get styles(){return re`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 24px;
        font-weight: normal;
      }

      nav {
        width: 7em;
        display: flex;
        justify-content: space-between;
      }

      nav a {
        color: white;
        font-size: 18px;
        font-weight: bold;
      }
    `}render(){return P`
      <header>
        <h1>${this.title}</h1>

        <nav>
          <a href="./">Home</a>
          <a href="./about">About</a>
        </nav>
      </header>
    `}};fi([q({type:String})],gi.prototype,"title",void 0),gi=fi([Y("app-header")],gi);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var bi=function(e,t){return(bi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function _i(e,t){function i(){this.constructor=e}bi(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var xi=function(){return(xi=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function vi(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const yi=re`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var wi={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},ki={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Ei={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Ci=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),Ai=function(e){function t(i){return e.call(this,xi(xi({},t.defaultAdapter),i))||this}return _i(t,e),Object.defineProperty(t,"strings",{get:function(){return Ei},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return wi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ki},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Ci),Si=function(e){function t(t){var i=e.call(this,t)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter.getViewportScrollY(),i.topAppBarHeight_=i.adapter.getTopAppBarHeight(),i}return _i(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),t=e-this.lastScrollPosition_;this.lastScrollPosition_=e,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=t,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){e.resizeThrottleId_=0,e.throttledResizeHandler_()}),ki.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){e.handleTargetScroll(),e.isCurrentlyBeingResized_=!1,e.resizeDebounceId_=0}),ki.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate_=function(){var e=-this.topAppBarHeight_,t=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>e,o=t&&i;if(o)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return o},t.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var e=this.currentAppBarOffsetTop_;Math.abs(e)>=this.topAppBarHeight_&&(e=-ki.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler_=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==e&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-e,this.topAppBarHeight_=e),this.handleTargetScroll()},t}(Ai);function Ti(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const Ii=e=>e.nodeType===Node.ELEMENT_NODE;function Ri(e,t){for(const i of e.assignedNodes({flatten:!0}))if(Ii(i)){const e=i;if(Ti(e,t))return e}return null}function Oi(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}let Li=!1;const Ni=()=>{},Fi={get passive(){return Li=!0,!1}};document.addEventListener("x",Ni,Fi),document.removeEventListener("x",Ni);const zi=Li,Pi=(e=window.document)=>{let t=e.activeElement;const i=[];if(!t)return i;for(;t&&(i.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return i},Di=e=>{const t=Pi();if(!t.length)return!1;const i=t[t.length-1],o=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const r=e=>{n=e.composedPath()};return document.body.addEventListener("check-if-focused",r),i.dispatchEvent(o),document.body.removeEventListener("check-if-focused",r),-1!==n.indexOf(e)};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Mi extends de{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Bi{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const Hi=new WeakMap,$i=u(e=>t=>{if(!(t instanceof E)||t instanceof T||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:o}=i;let n=Hi.get(t);void 0===n&&(o.setAttribute("class",i.strings.join(" ")),Hi.set(t,n=new Set));const r=o.classList||new Bi(o);n.forEach(t=>{t in e||(r.remove(t),n.delete(t))});for(const t in e){const i=e[t];i!=n.has(t)&&(i?(r.add(t),n.add(t)):(r.remove(t),n.delete(t)))}"function"==typeof r.commit&&r.commit()}),Vi=zi?{passive:!0}:void 0;class Ui extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Ai,this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){this.unregisterScrollListener();const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=P`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=P`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),P`
      <header class="mdc-top-app-bar ${$i(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:e}
        </section>
        ${this.centerTitle?e:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${$i(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(Ei.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Vi)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}vi([Q(".mdc-top-app-bar")],Ui.prototype,"mdcRoot",void 0),vi([Q('slot[name="actionItems"]')],Ui.prototype,"_actionItemsSlot",void 0),vi([q({type:Boolean})],Ui.prototype,"centerTitle",void 0),vi([q()],Ui.prototype,"scrollTarget",null);class ji extends Ui{constructor(){super(...arguments),this.mdcFoundationClass=Si,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,Vi)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}vi([q({type:Boolean,reflect:!0})],ji.prototype,"prominent",void 0),vi([q({type:Boolean,reflect:!0})],ji.prototype,"dense",void 0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wasScrolled_=!1,t}return _i(t,e),t.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter.removeClass(wi.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter.addClass(wi.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},t}(Si);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class Wi extends ji{constructor(){super(...arguments),this.mdcFoundationClass=Xi}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Vi)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let Yi=class extends Wi{};Yi.styles=yi,Yi=vi([Y("mwc-top-app-bar-fixed")],Yi);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Gi=re`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let qi=class extends de{render(){return P`<slot></slot>`}};qi.styles=Gi,qi=vi([Y("mwc-icon")],qi);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ki,Qi={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ji={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Zi={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var eo=["touchstart","pointerdown","mousedown","keydown"],to=["touchend","pointerup","mouseup","contextmenu"],io=[],oo=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.activationAnimationHasEnded_=!1,o.activationTimer_=0,o.fgDeactivationRemovalTimer_=0,o.fgScale_="0",o.frame_={width:0,height:0},o.initialSize_=0,o.layoutFrame_=0,o.maxRadius_=0,o.unboundedCoords_={left:0,top:0},o.activationState_=o.defaultActivationState_(),o.activationTimerCallback_=function(){o.activationAnimationHasEnded_=!0,o.runDeactivationUXLogicIfReady_()},o.activateHandler_=function(e){return o.activate_(e)},o.deactivateHandler_=function(){return o.deactivate_()},o.focusHandler_=function(){return o.handleFocus()},o.blurHandler_=function(){return o.handleBlur()},o.resizeHandler_=function(){return o.layout()},o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Qi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ji},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Zi},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var o=t.cssClasses,n=o.ROOT,r=o.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(r),e.layoutInternal_())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var i=t.cssClasses,o=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(o),e.adapter.removeClass(n),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.setUnbounded=function(e){var i=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(eo.forEach((function(e){t.adapter.registerInteractionHandler(e,t.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):to.forEach((function(e){t.adapter.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},t.prototype.deregisterRootHandlers_=function(){var e=this;eo.forEach((function(t){e.adapter.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),to.forEach((function(t){e.adapter.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},t.prototype.removeCssVars_=function(){var e=this,i=t.strings;Object.keys(i).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(i[t],null)}))},t.prototype.activate_=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var o=this.previousActivationEvent_;if(!(o&&void 0!==e&&o.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&io.length>0&&io.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(io.push(e.target),this.registerDeactivationHandlers_(e)),i.wasElementMadeActive=this.checkElementMadeActive_(e),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){io=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive_(e),i.wasElementMadeActive&&t.animateActivation_()),i.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,i=t.strings,o=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,r=t.cssClasses,a=r.FG_DEACTIVATION,d=r.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var s="",l="";if(!this.adapter.isUnbounded()){var m=this.getFgTranslationCoordinates_(),p=m.startPoint,h=m.endPoint;s=p.x+"px, "+p.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(o,s),this.adapter.updateCssVariable(n,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),c)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,i=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var o,n,r=t.x,a=t.y,d=r+i.left,c=a+i.top;if("touchstart"===e.type){var s=e;o=s.changedTouches[0].pageX-d,n=s.changedTouches[0].pageY-c}else{var l=e;o=l.pageX-d,n=l.pageY-c}return{x:o,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,i=t.cssClasses.FG_DEACTIVATION,o=this.activationState_,n=o.hasDeactivationUXRun,r=o.isActivated;(n||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter.removeClass(i)}),Zi.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var i=xi({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(i),e.resetActivationState_()})))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING;var o=Math.floor(i*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!=0?this.initialSize_=o-1:this.initialSize_=o,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,i=e.VAR_FG_SIZE,o=e.VAR_LEFT,n=e.VAR_TOP,r=e.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize_+"px"),this.adapter.updateCssVariable(r,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(o,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords_.top+"px"))},t}(Ci);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const no=new WeakMap,ro=u(e=>t=>{if(!(t instanceof E)||t instanceof T||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:o}=i.element;let n=no.get(t);void 0===n&&(o.cssText=i.strings.join(" "),no.set(t,n=new Set)),n.forEach(t=>{t in e||(n.delete(t),-1===t.indexOf("-")?o[t]=null:o.removeProperty(t))});for(const t in e)n.add(t),-1===t.indexOf("-")?o[t]=e[t]:o.setProperty(t,e[t])});class ao extends Mi{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=oo}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}render(){const e={"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,hover:this.hovering,primary:this.primary,accent:this.accent,disabled:this.disabled,activated:this.activated,selected:this.selected};return P`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${$i(e)}"
          style="${ro({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}vi([Q(".mdc-ripple-surface")],ao.prototype,"mdcRoot",void 0),vi([q({type:Boolean})],ao.prototype,"primary",void 0),vi([q({type:Boolean})],ao.prototype,"accent",void 0),vi([q({type:Boolean})],ao.prototype,"unbounded",void 0),vi([q({type:Boolean})],ao.prototype,"disabled",void 0),vi([q({type:Boolean})],ao.prototype,"activated",void 0),vi([q({type:Boolean})],ao.prototype,"selected",void 0),vi([K()],ao.prototype,"hovering",void 0),vi([K()],ao.prototype,"bgFocused",void 0),vi([K()],ao.prototype,"fgActivation",void 0),vi([K()],ao.prototype,"fgDeactivation",void 0),vi([K()],ao.prototype,"fgScale",void 0),vi([K()],ao.prototype,"fgSize",void 0),vi([K()],ao.prototype,"translateStart",void 0),vi([K()],ao.prototype,"translateEnd",void 0),vi([K()],ao.prototype,"leftPos",void 0),vi([K()],ao.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const co=re`:host{display:block;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host .primary{--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host .accent{--mdc-ripple-color: var( --mdc-theme-secondary, #018786 )}:host .mdc-ripple-surface{top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden;--mdc-ripple-fg-opacity: var( --mdc-ripple-press-opacity, 0.12 )}:host .mdc-ripple-surface::before,:host .mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:host .mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host .mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:host .mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:host .mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host .mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:host .mdc-ripple-surface::before,:host .mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:host .mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded{overflow:visible}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before,:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host .mdc-ripple-surface.hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}:host .mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}:host .mdc-ripple-surface::before,:host .mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:host .mdc-ripple-surface.activated{--mdc-ripple-press-opacity: calc( var(--mdc-ripple-press-opacity, 0.12) + 0.12 )}:host .mdc-ripple-surface.activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}:host .mdc-ripple-surface.activated.hover::before{opacity:.16;opacity:calc( var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-activated-opacity, 0.12) )}:host .mdc-ripple-surface.activated.mdc-ripple-upgraded--background-focused::before{opacity:.24;opacity:calc( var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-activated-opacity, 0.12) )}:host .mdc-ripple-surface.selected{--mdc-ripple-press-opacity: calc( var(--mdc-ripple-press-opacity, 0.12) + 0.08 )}:host .mdc-ripple-surface.selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}:host .mdc-ripple-surface.selected.hover::before{opacity:.12;opacity:calc( var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-selected-opacity, 0.08) )}:host .mdc-ripple-surface.selected.mdc-ripple-upgraded--background-focused::before{opacity:.2;opacity:calc( var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-selected-opacity, 0.08) )}:host .mdc-ripple-surface.disabled{--mdc-ripple-color: transparent}:host .mdc-ripple-surface::before{z-index:1;z-index:var(--m-ripple-z-index, 1)}:host .mdc-ripple-surface::after{z-index:0;z-index:var(--m-ripple-z-index, 0)}`;let so=class extends ao{};so.styles=co,so=vi([Y("mwc-ripple")],so);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class lo{constructor(e){this.startPress=t=>{e().then(e=>{e&&e.startPress(t)})},this.endPress=()=>{e().then(e=>{e&&e.endPress()})},this.startFocus=()=>{e().then(e=>{e&&e.startFocus()})},this.endFocus=()=>{e().then(e=>{e&&e.endFocus()})},this.startHover=()=>{e().then(e=>{e&&e.startHover()})},this.endHover=()=>{e().then(e=>{e&&e.endHover()})}}}class mo extends de{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){const e=this.raised||this.unelevated;return P`${this.shouldRenderRipple?P`<mwc-ripple .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}`}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return P`
      <button
          id="button"
          class="mdc-button ${$i(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <slot></slot>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return P`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}vi([q({type:Boolean})],mo.prototype,"raised",void 0),vi([q({type:Boolean})],mo.prototype,"unelevated",void 0),vi([q({type:Boolean})],mo.prototype,"outlined",void 0),vi([q({type:Boolean})],mo.prototype,"dense",void 0),vi([q({type:Boolean,reflect:!0})],mo.prototype,"disabled",void 0),vi([q({type:Boolean,attribute:"trailingicon"})],mo.prototype,"trailingIcon",void 0),vi([q({type:Boolean,reflect:!0})],mo.prototype,"fullwidth",void 0),vi([q({type:String})],mo.prototype,"icon",void 0),vi([q({type:String})],mo.prototype,"label",void 0),vi([Q("#button")],mo.prototype,"buttonElement",void 0),vi([J("mwc-ripple")],mo.prototype,"ripple",void 0),vi([K()],mo.prototype,"shouldRenderRipple",void 0),vi([te({passive:!0})],mo.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const po=re`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}:host{display:inline-flex;outline:none;vertical-align:top}:host([disabled]){pointer-events:none}:host([fullwidth]){width:100%}.mdc-button{flex:auto;overflow:hidden;padding:0 var(--mdc-button-horizontal-padding, 8px) 0 var(--mdc-button-horizontal-padding, 8px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding, 16px) 0 var(--mdc-button-horizontal-padding, 16px)}.mdc-button.mdc-button--raised mwc-ripple,.mdc-button.mdc-button--unelevated mwc-ripple{--mdc-ripple-color: var(--mdc-theme-on-primary, #fff);--mdc-ripple-hover-opacity: .08;--mdc-ripple-press-opacity: .24;--mdc-ripple-focus-opacity: .24}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px)) 0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));border-width:var(--mdc-button-outline-width, 1px);border-color:var(--mdc-button-outline-color, var(--mdc-theme-primary, #6200ee))}.mdc-button.mdc-button--outlined mwc-ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38));border-color:var(--mdc-button-disabled-outline-color, var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38)))}`;let ho=class extends mo{};ho.styles=po,ho=vi([Y("mwc-button")],ho);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class uo extends Mi{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const fo=new WeakMap,go=u(e=>t=>{const i=fo.get(t);if(void 0===e&&t instanceof E){if(void 0!==i||!fo.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==i&&t.setValue(e);fo.set(t,e)});class bo extends uo{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple.then(e=>this.rippleElement=e),this.ripple))}createAdapter(){return{}}update(e){const t=e.get("indeterminate"),i=e.get("checked"),o=e.get("disabled");if(void 0!==t||void 0!==i||void 0!==o){const e=this.calculateAnimationStateName(!!i,!!t,!!o),n=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${e}-${n}`}super.update(e)}calculateAnimationStateName(e,t,i){return i?"disabled":t?"indeterminate":e?"checked":"unchecked"}renderRipple(){const e=this.indeterminate||this.checked;return P`${this.shouldRenderRipple?P`
        <mwc-ripple
          .accent="${e}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:P``}`}render(){const e=this.indeterminate||this.checked,t={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":e,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-checkbox--focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},i=this.indeterminate?"mixed":void 0;return P`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${$i(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              aria-checked="${go(i)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this._changeHandler}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}_handleFocus(){this.focused=!0,this.handleRippleFocus()}_handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}}vi([Q(".mdc-checkbox")],bo.prototype,"mdcRoot",void 0),vi([Q("input")],bo.prototype,"formElement",void 0),vi([q({type:Boolean,reflect:!0})],bo.prototype,"checked",void 0),vi([q({type:Boolean})],bo.prototype,"indeterminate",void 0),vi([q({type:Boolean,reflect:!0})],bo.prototype,"disabled",void 0),vi([q({type:String})],bo.prototype,"value",void 0),vi([q({type:Boolean})],bo.prototype,"reducedTouchTarget",void 0),vi([K()],bo.prototype,"animationClass",void 0),vi([K()],bo.prototype,"shouldRenderRipple",void 0),vi([K()],bo.prototype,"focused",void 0),vi([J("mwc-ripple")],bo.prototype,"ripple",void 0),vi([te({passive:!0})],bo.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const _o=re`.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0,0,0,.38);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.38)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}:host{outline:none;display:inline-block}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{background-color:rgba(0, 0, 0, 0.54);background-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-checkbox .mdc-checkbox__background::before{content:none}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--m-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--m-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-color--m-checkbox-checked-color00000000--m-checkbox-checked-color{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--m-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--m-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-color--m-checkbox-checked-color00000000--m-checkbox-checked-color{0%,80%{border-color:#018786;border-color:var(--m-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--m-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-color--m-checkbox-checked-color00000000--m-checkbox-checked-color}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-color--m-checkbox-checked-color00000000--m-checkbox-checked-color}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-mark-color, #fff)}`;let xo=class extends bo{};xo.styles=_o,xo=vi([Y("mwc-checkbox")],xo);class vo extends de{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1,this.ariaLabel="",this.containerSideLength=0,this.circleRadius=0,this.determinateStrokeDashOffset=0,this.strokeWidth=0}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},t={width:`${this.containerSideLength}px`,height:`${this.containerSideLength}px`};return P`
      <div
        class="mdc-circular-progress ${$i(e)}"
        style="${ro(t)}"
        role="progressbar"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${go(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const e=this.containerSideLength/2;return P`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${this.containerSideLength} ${this.containerSideLength}">
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${e}" cy="${e}" r="${this.circleRadius}"
                  stroke-dasharray="${6.2831852*this.circleRadius}"
                  stroke-dashoffset="${this.determinateStrokeDashOffset}"
                  stroke-width="${this.strokeWidth}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return P`
      <div class="mdc-circular-progress__indeterminate-container">
        ${this.renderIndeterminateSpinnerLayer()}
      </div>`}renderIndeterminateSpinnerLayer(e=""){const t=this.containerSideLength/2,i=6.2831852*this.circleRadius,o=.5*i;return P`
      <div class="mdc-circular-progress__spinner-layer ${e}">
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${this.containerSideLength} ${this.containerSideLength}">
            <circle cx="${t}" cy="${t}" r="${this.circleRadius}"
                    stroke-dasharray="${i}"
                    stroke-dashoffset="${o}"
                    stroke-width="${this.strokeWidth}"></circle>
          </svg>
        </div><div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${this.containerSideLength} ${this.containerSideLength}">
            <circle cx="${t}" cy="${t}" r="${this.circleRadius}"
                    stroke-dasharray="${i}"
                    stroke-dashoffset="${o}"
                    stroke-width="${.8*this.strokeWidth}"></circle>
          </svg>
        </div><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${this.containerSideLength} ${this.containerSideLength}">
            <circle cx="${t}" cy="${t}" r="${this.circleRadius}"
                    stroke-dasharray="${i}"
                    stroke-dashoffset="${o}"
                    stroke-width="${this.strokeWidth}"></circle>
          </svg>
        </div>
      </div>`}update(e){super.update(e),this.containerSideLength=this.getContainerSideLength(),this.circleRadius=this.getCircleRadius(),this.determinateStrokeDashOffset=this.getDeterminateStrokeDashOffset(),this.strokeWidth=this.getStrokeWidth(),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}getContainerSideLength(){return 48+4*this.density}getDeterminateStrokeDashOffset(){const e=6.2831852*this.getCircleRadius();return(1-this.progress)*e}getCircleRadius(){return this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4}getStrokeWidth(){return this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6)}}vi([q({type:Boolean,reflect:!0})],vo.prototype,"indeterminate",void 0),vi([q({type:Number,reflect:!0})],vo.prototype,"progress",void 0),vi([q({type:Number,reflect:!0})],vo.prototype,"density",void 0),vi([q({type:Boolean,reflect:!0})],vo.prototype,"closed",void 0),vi([q({type:String})],vo.prototype,"ariaLabel",void 0),vi([K()],vo.prototype,"containerSideLength",void 0),vi([K()],vo.prototype,"circleRadius",void 0),vi([K()],vo.prototype,"determinateStrokeDashOffset",void 0),vi([K()],vo.prototype,"strokeWidth",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const yo=re`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-block;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}`;let wo=class extends vo{};wo.styles=yo,wo=vi([Y("mwc-circular-progress")],wo);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class ko extends vo{renderIndeterminateContainer(){return P`
      <div class="mdc-circular-progress__indeterminate-container">
             ${this.renderIndeterminateSpinnerLayer("mdc-circular-progress__color-1")}
     ${this.renderIndeterminateSpinnerLayer("mdc-circular-progress__color-2")}
     ${this.renderIndeterminateSpinnerLayer("mdc-circular-progress__color-3")}
     ${this.renderIndeterminateSpinnerLayer("mdc-circular-progress__color-4")}
      </div>`}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const Eo=re`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-block;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-1, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-2, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-3, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-4, var(--mdc-theme-primary, #6200ee))}:host{display:inline-flex}`;let Co=class extends ko{};Co.styles=Eo,Co=vi([Y("mwc-circular-progress-four-color")],Co),
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{var e,t,i;const o=Symbol(),n=Symbol(),r=Symbol(),a=Symbol(),d=Symbol(),c=Symbol(),s=Symbol(),l=Symbol(),m=Symbol(),p=Symbol(),h=Symbol(),u=Symbol(),f=Symbol();document.$blockingElements=new class{constructor(){this[e]=[],this[t]=[],this[i]=new Set}destructor(){this[m](this[r]);this[o]=null,this[r]=null,this[n]=null}get top(){const e=this[o];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[c](e),this[o].push(e))}remove(e){const t=this[o].indexOf(e);return-1!==t&&(this[o].splice(t,1),t===this[o].length&&this[c](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[o].indexOf(e)}[(e=o,t=r,i=n,c)](e){const t=this[n],i=this[r];if(!e)return this[m](i),t.clear(),void(this[r]=[]);const o=this[p](e);if(o[o.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[r]=o;const a=this[h](e);if(!i.length)return void this[l](o,a,t);let d=i.length-1,c=o.length-1;for(;d>0&&c>0&&i[d]===o[c];)d--,c--;i[d]!==o[c]&&this[s](i[d],o[c]),d>0&&this[m](i.slice(0,d)),c>0&&this[l](o.slice(0,c),a,null)}[s](e,t){const i=e[a];this[u](e)&&!e.inert&&(e.inert=!0,i.add(e)),i.has(t)&&(t.inert=!1,i.delete(t)),t[d]=e[d],t[a]=i,e[d]=void 0,e[a]=void 0}[m](e){for(const t of e){t[d].disconnect(),t[d]=void 0;const e=t[a];for(const t of e)t.inert=!1;t[a]=void 0}}[l](e,t,i){for(const o of e){const e=o.parentNode,n=e.children,r=new Set;for(let e=0;e<n.length;e++){const a=n[e];a===o||!this[u](a)||t&&t.has(a)||(i&&a.inert?i.add(a):(a.inert=!0,r.add(a)))}o[a]=r;const c=new MutationObserver(this[f].bind(this));o[d]=c;let s=e;const l=s;l.__shady&&l.host&&(s=l.host),c.observe(s,{childList:!0})}}[f](e){const t=this[r],i=this[n];for(const o of e){const e=o.target.host||o.target,n=e===document.body?t.length:t.indexOf(e),r=t[n-1],d=r[a];for(let e=0;e<o.removedNodes.length;e++){const t=o.removedNodes[e];if(t===r)return console.info("Detected removal of the top Blocking Element."),void this.pop();d.has(t)&&(t.inert=!1,d.delete(t))}for(let e=0;e<o.addedNodes.length;e++){const t=o.addedNodes[e];this[u](t)&&(i&&t.inert?i.add(t):(t.inert=!0,d.add(t)))}}}[u](e){return!1===/^(style|template|script)$/.test(e.localName)}[p](e){const t=[];let i=e;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&t.push(i),i.assignedSlot){for(;i=i.assignedSlot;)t.push(i);i=t.pop()}else i=i.parentNode||i.host;return t}[h](e){const t=e.shadowRoot;if(!t)return null;const i=new Set;let o,n,r;const a=t.querySelectorAll("slot");if(a.length&&a[0].assignedNodes)for(o=0;o<a.length;o++)for(r=a[o].assignedNodes({flatten:!0}),n=0;n<r.length;n++)r[n].nodeType===Node.ELEMENT_NODE&&i.add(r[n]);return i}}})(),function(){if("undefined"==typeof window)return;const e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");class o{constructor(e,t){this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}destructor(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}get managedNodes(){return new Set(this._managedNodes)}get hasSavedAriaHidden(){return null!==this._savedAriaHidden}set savedAriaHidden(e){this._savedAriaHidden=e}get savedAriaHidden(){return this._savedAriaHidden}_makeSubtreeUnfocusable(e){r(e,e=>this._visitNode(e));let t=document.activeElement;if(!document.body.contains(e)){let i=e,o=void 0;for(;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=i;break}i=i.parentNode}o&&(t=o.activeElement)}e.contains(t)&&(t.blur(),t===document.activeElement&&document.body.focus())}_visitNode(e){if(e.nodeType!==Node.ELEMENT_NODE)return;const o=e;o!==this._rootElement&&o.hasAttribute("inert")&&this._adoptInertRoot(o),(t.call(o,i)||o.hasAttribute("tabindex"))&&this._manageNode(o)}_manageNode(e){const t=this._inertManager.register(e,this);this._managedNodes.add(t)}_unmanageNode(e){const t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}_unmanageSubtree(e){r(e,e=>this._unmanageNode(e))}_adoptInertRoot(e){let t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}_onMutation(t,i){t.forEach((function(t){const i=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);const e=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(t){i.contains(t.node)&&e._manageNode(t.node)}))}}),this)}}class n{constructor(e,t){this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}destructor(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){const e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}get destroyed(){return this._destroyed}_throwIfDestroyed(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}get hasSavedTabIndex(){return null!==this._savedTabIndex}get node(){return this._throwIfDestroyed(),this._node}set savedTabIndex(e){this._throwIfDestroyed(),this._savedTabIndex=e}get savedTabIndex(){return this._throwIfDestroyed(),this._savedTabIndex}ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;const e=this.node;if(t.call(e,i)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}addInertRoot(e){this._throwIfDestroyed(),this._inertRoots.add(e)}removeInertRoot(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}}function r(e,t,i){if(e.nodeType==Node.ELEMENT_NODE){const i=e;t&&t(i);const o=i.shadowRoot;if(o)return void r(o,t);if("content"==i.localName){const e=i,o=e.getDistributedNodes?e.getDistributedNodes():[];for(let e=0;e<o.length;e++)r(o[e],t);return}if("slot"==i.localName){const e=i,o=e.assignedNodes?e.assignedNodes({flatten:!0}):[];for(let e=0;e<o.length;e++)r(o[e],t);return}}let o=e.firstChild;for(;null!=o;)r(o,t),o=o.nextSibling}function a(e){if(e.querySelector("style#inert-style, link#inert-style"))return;const t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t)}const d=new class{constructor(e){if(!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),a(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}setInert(e,t){if(t){if(this._inertRoots.has(e))return;const t=new o(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)){let t=e.parentNode;for(;t;)11===t.nodeType&&a(t),t=t.parentNode}}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}getInertRoot(e){return this._inertRoots.get(e)}register(e,t){let i=this._managedNodes.get(e);return void 0!==i?i.addInertRoot(t):i=new n(e,t),this._managedNodes.set(e,i),i}deregister(e,t){const i=this._managedNodes.get(e);return i?(i.removeInertRoot(t),i.destroyed&&this._managedNodes.delete(e),i):null}_onDocumentLoaded(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}_watchForInert(i,o){const n=this;i.forEach((function(i){switch(i.type){case"childList":e.call(i.addedNodes).forEach((function(i){if(i.nodeType!==Node.ELEMENT_NODE)return;const o=e.call(i.querySelectorAll("[inert]"));t.call(i,"[inert]")&&o.unshift(i),o.forEach((function(e){this.setInert(e,!0)}),n)}),n);break;case"attributes":if("inert"!==i.attributeName)return;const o=i.target,r=o.hasAttribute("inert");n.setInert(o,r)}}),this)}}(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){d.setInert(this,e)}})}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ao={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},So={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},To={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},Io=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.layoutFrame_=0,o.escapeKeyAction_=So.CLOSE_ACTION,o.scrimClickAction_=So.CLOSE_ACTION,o.autoStackButtons_=!0,o.areButtonsStacked_=!1,o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Ao},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return So},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return To},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(Ao.STACKED)&&this.setAutoStackButtons(!1)},t.prototype.destroy=function(){this.isOpen_&&this.close(So.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},t.prototype.open=function(){var e=this;this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.addClass(Ao.OPENING),this.runNextAnimationFrame_((function(){e.adapter.addClass(Ao.OPEN),e.adapter.addBodyClass(Ao.SCROLL_LOCK),e.layout(),e.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter.trapFocus(e.adapter.getInitialFocusEl()),e.adapter.notifyOpened()}),To.DIALOG_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.isOpen_&&(this.isOpen_=!1,this.adapter.notifyClosing(e),this.adapter.addClass(Ao.CLOSING),this.adapter.removeClass(Ao.OPEN),this.adapter.removeBodyClass(Ao.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){t.adapter.releaseFocus(),t.handleAnimationTimerEnd_(),t.adapter.notifyClosed(e)}),To.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},t.prototype.setEscapeKeyAction=function(e){this.escapeKeyAction_=e},t.prototype.getScrimClickAction=function(){return this.scrimClickAction_},t.prototype.setScrimClickAction=function(e){this.scrimClickAction_=e},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},t.prototype.setAutoStackButtons=function(e){this.autoStackButtons_=e},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.handleClick=function(e){if(this.adapter.eventTargetMatches(e.target,So.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var t=this.adapter.getActionFromEvent(e);t&&this.close(t)}},t.prototype.handleKeydown=function(e){var t="Enter"===e.key||13===e.keyCode;if(t&&!this.adapter.getActionFromEvent(e)){var i=!this.adapter.eventTargetMatches(e.target,So.SUPPRESS_DEFAULT_PRESS_SELECTOR);t&&i&&this.adapter.clickDefaultButton()}},t.prototype.handleDocumentKeydown=function(e){("Escape"===e.key||27===e.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},t.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},t.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(Ao.OPENING),this.adapter.removeClass(Ao.CLOSING)},t.prototype.runNextAnimationFrame_=function(e){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(e,0)}))},t.prototype.detectStackedButtons_=function(){this.adapter.removeClass(Ao.STACKED);var e=this.adapter.areButtonsStacked();e&&this.adapter.addClass(Ao.STACKED),e!==this.areButtonsStacked_&&(this.adapter.reverseButtons(),this.areButtonsStacked_=e)},t.prototype.detectScrollableContent_=function(){this.adapter.removeClass(Ao.SCROLLABLE),this.adapter.isContentScrollable()&&this.adapter.addClass(Ao.SCROLLABLE)},t}(Ci);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ro(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var i={get passive(){return t=!0,!1}},o=function(){};e.document.addEventListener("test",o,i),e.document.removeEventListener("test",o,i)}catch(e){t=!1}return t}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/(e)&&{passive:!0}}const Oo=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach((e,i)=>t.constructor._observers.set(i,e))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)})}}t.constructor._observers.set(i,e)},Lo=document.$blockingElements;class No extends Mi{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.mdcFoundationClass=Io,this.boundLayout=null,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}get primaryButton(){let e=this.primarySlot.assignedNodes();e=e.filter(e=>e instanceof HTMLElement);const t=e[0];return t||null}emitNotification(e,t){const i=new CustomEvent(e,{detail:t?{action:t}:{}});this.dispatchEvent(i)}getInitialFocusEl(){const e=`[${this.initialFocusAttribute}]`,t=this.querySelector(e);if(t)return t;const i=this.primarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(i,this.initialFocusAttribute);if(o)return o;const n=this.secondarySlot.assignedNodes({flatten:!0}),r=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(r)return r;const a=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(a,this.initialFocusAttribute)}searchNodeTreesForAttribute(e,t){for(const i of e)if(i instanceof HTMLElement){if(i.hasAttribute(t))return i;{const e=i.querySelector(`[${t}]`);if(e)return e}}return null}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const e=this.primaryButton;e&&e.click()},eventTargetMatches:(e,t)=>!!e&&Ti(e,t),getActionFromEvent:e=>{if(!e.target)return"";const t=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(e,t){if(e.closest)return e.closest(t);for(var i=e;i;){if(Ti(i,t))return i;i=i.parentElement}return null}(e.target,`[${this.actionAttribute}]`);return t&&t.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const e=this.contentElement;return!!e&&e.scrollHeight>e.offsetHeight},notifyClosed:e=>this.emitNotification("closed",e),notifyClosing:e=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",e)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{Lo.remove(this)},trapFocus:e=>{Lo.push(this),e&&e.focus()}})}render(){const e={[Ao.STACKED]:this.stacked};let t=P``;this.heading&&(t=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return P`
    <div class="mdc-dialog ${$i(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${t}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${$i(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}renderHeading(){return P`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,Lo.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const e=this.getInitialFocusEl();e&&e.focus()}blur(){if(!this.shadowRoot)return;const e=this.shadowRoot.activeElement;if(e)e instanceof HTMLElement&&e.blur();else{const e=this.getRootNode(),t=e instanceof Document?e.activeElement:null;t instanceof HTMLElement&&t.blur()}}setEventListeners(){this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundLayout=()=>{this.open&&this.mdcFoundation.layout.bind(this.mdcFoundation)},this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation),this.mdcRoot.addEventListener("click",this.boundHandleClick),window.addEventListener("resize",this.boundLayout,Ro()),window.addEventListener("orientationchange",this.boundLayout,Ro()),this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,Ro()),document.addEventListener("keydown",this.boundHandleDocumentKeydown,Ro())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundLayout&&(window.removeEventListener("resize",this.boundLayout),window.removeEventListener("orientationchange",this.boundLayout)),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}vi([Q(".mdc-dialog")],No.prototype,"mdcRoot",void 0),vi([Q('slot[name="primaryAction"]')],No.prototype,"primarySlot",void 0),vi([Q('slot[name="secondaryAction"]')],No.prototype,"secondarySlot",void 0),vi([Q("#contentSlot")],No.prototype,"contentSlot",void 0),vi([Q(".mdc-dialog__content")],No.prototype,"contentElement",void 0),vi([Q(".mdc-container")],No.prototype,"conatinerElement",void 0),vi([q({type:Boolean})],No.prototype,"hideActions",void 0),vi([q({type:Boolean}),Oo((function(){this.forceLayout()}))],No.prototype,"stacked",void 0),vi([q({type:String})],No.prototype,"heading",void 0),vi([q({type:String}),Oo((function(e){this.mdcFoundation.setScrimClickAction(e)}))],No.prototype,"scrimClickAction",void 0),vi([q({type:String}),Oo((function(e){this.mdcFoundation.setEscapeKeyAction(e)}))],No.prototype,"escapeKeyAction",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){this.mdcFoundation&&this.isConnected&&(e?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))}))],No.prototype,"open",void 0),vi([q()],No.prototype,"defaultAction",void 0),vi([q()],No.prototype,"actionAttribute",void 0),vi([q()],No.prototype,"initialFocusAttribute",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Fo=re`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;let zo=class extends No{};zo.styles=Fo,zo=vi([Y("mwc-dialog")],zo);class Po extends de{constructor(){super(...arguments),this.mini=!1,this.exited=!1,this.disabled=!1,this.extended=!1,this.showIconAtEnd=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple))}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const e={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended,"icon-end":this.showIconAtEnd};return P`
      <button
          class="mdc-fab ${$i(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}>
        ${this.renderBeforeRipple()}
        ${this.renderRipple()}
        ${this.showIconAtEnd?this.renderLabel():""}
        <slot name="icon">
          ${this.renderIcon()}
        </slot>
        ${this.showIconAtEnd?"":this.renderLabel()}
      </button>`}renderIcon(){return P`${this.icon?P`
          <span class="material-icons mdc-fab__icon">${this.icon}</span>`:""}`}renderLabel(){const e=""!==this.label&&this.extended;return P`${e?P`<span class="mdc-fab__label">${this.label}</span>`:""}`}renderBeforeRipple(){return P``}renderRipple(){return P`${this.shouldRenderRipple?P`<mwc-ripple></mwc-ripple>`:""}`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.handleRippleStartPress(e)}handleRippleStartPress(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}vi([J("mwc-ripple")],Po.prototype,"ripple",void 0),vi([q({type:Boolean})],Po.prototype,"mini",void 0),vi([q({type:Boolean})],Po.prototype,"exited",void 0),vi([q({type:Boolean})],Po.prototype,"disabled",void 0),vi([q({type:Boolean})],Po.prototype,"extended",void 0),vi([q({type:Boolean})],Po.prototype,"showIconAtEnd",void 0),vi([q()],Po.prototype,"icon",void 0),vi([q()],Po.prototype,"label",void 0),vi([K()],Po.prototype,"shouldRenderRipple",void 0),vi([te({passive:!0})],Po.prototype,"handleRippleStartPress",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Do=re`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-right:-8px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-right:-8px;margin-left:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:""}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab mwc-ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) mwc-ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended mwc-ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon,:host .mdc-fab ::slotted([slot=icon]){width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-left:20px;padding-left:var(--mdc-fab-extended-label-padding, 20px);padding-right:20px;padding-right:var(--mdc-fab-extended-label-padding, 20px)}:host .mdc-fab.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}[dir=rtl] :host .mdc-fab.mdc-fab--extended .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-right:-8px;margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px)}:host .mdc-fab.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-right:-8px;margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px)}[dir=rtl] :host .mdc-fab.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}:host .mdc-fab.mdc-fab--extended ::slotted([slot=icon]){margin-left:-8px;margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}[dir=rtl] :host .mdc-fab.mdc-fab--extended ::slotted([slot=icon]),:host .mdc-fab.mdc-fab--extended ::slotted([slot=icon])[dir=rtl]{margin-right:-8px;margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended ::slotted([slot=icon]),:host .mdc-fab.mdc-fab--extended ::slotted([slot=icon])[dir=rtl]{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px)}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-right:-8px;margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px)}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}:host .mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon]){margin-right:-8px;margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px)}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon]),:host .mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon])[dir=rtl]{margin-left:-8px;margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon]),:host .mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon])[dir=rtl]{margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}:host .mdc-fab.mdc-fab--exited ::slotted([slot=icon]){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}`;let Mo=class extends Po{};Mo.styles=Do,Mo=vi([Y("mwc-fab")],Mo);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bo={ROOT:"mdc-form-field"},Ho={LABEL_SELECTOR:".mdc-form-field > label"},$o=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.click=function(){o.handleClick()},o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Bo},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ho},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(Ci);
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo extends Mi{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=$o}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof uo){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof uo){const t=await e.ripple;t&&t.endPress()}}}}get input(){return Ri(this.slotEl,"*")}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return P`
      <div class="mdc-form-field ${$i(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}vi([q({type:Boolean})],Vo.prototype,"alignEnd",void 0),vi([q({type:Boolean})],Vo.prototype,"spaceBetween",void 0),vi([q({type:Boolean})],Vo.prototype,"nowrap",void 0),vi([q({type:String}),Oo((async function(e){const t=this.input;t&&("input"===t.localName?t.setAttribute("aria-label",e):t instanceof uo&&(await t.updateComplete,t.setAriaLabel(e)))}))],Vo.prototype,"label",void 0),vi([Q(".mdc-form-field")],Vo.prototype,"mdcRoot",void 0),vi([Q("slot")],Vo.prototype,"slotEl",void 0),vi([Q("label")],Vo.prototype,"labelEl",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Uo=re`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch)[dir=rtl]{margin-left:10px}`;let jo=class extends Vo{};jo.styles=Uo,jo=vi([Y("mwc-formfield")],jo);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xo={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},Wo={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},Yo=function(e){function t(i){return e.call(this,xi(xi({},t.defaultAdapter),i))||this}return _i(t,e),Object.defineProperty(t,"strings",{get:function(){return Wo},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return Xo},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked_(e),this.updateCheckedStyling_(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(Xo.DISABLED):this.adapter.removeClass(Xo.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked_(t.checked),this.updateCheckedStyling_(t.checked)},t.prototype.updateCheckedStyling_=function(e){e?this.adapter.addClass(Xo.CHECKED):this.adapter.removeClass(Xo.CHECKED)},t.prototype.updateAriaChecked_=function(e){this.adapter.setNativeControlAttr(Wo.ARIA_CHECKED_ATTR,""+!!e)},t}(Ci);class Go extends uo{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=Yo,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple))}changeHandler(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{setNativeControlChecked:e=>{this.formElement.checked=e},setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,t)=>{this.formElement.setAttribute(e,t)}})}renderRipple(){return P`${this.shouldRenderRipple?P`
        <mwc-ripple 
          .accent="${this.checked}" 
          .disabled="${this.disabled}" 
          unbounded>
        </mwc-ripple>`:P``}`}focus(){const e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return P`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation.setChecked(e)}))],Go.prototype,"checked",void 0),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation.setDisabled(e)}))],Go.prototype,"disabled",void 0),vi([Q(".mdc-switch")],Go.prototype,"mdcRoot",void 0),vi([Q("input")],Go.prototype,"formElement",void 0),vi([J("mwc-ripple")],Go.prototype,"ripple",void 0),vi([K()],Go.prototype,"shouldRenderRipple",void 0),vi([te({passive:!0})],Go.prototype,"handleRippleMouseDown",null),vi([te({passive:!0})],Go.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const qo=re`.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none}`;let Ko=class extends Go{};Ko.styles=qo,Ko=vi([Y("mwc-switch")],Ko);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Qo=re`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/,Jo=function(e,t){void 0===t&&(t=!1);var i,o=e.CSS;if("boolean"==typeof Ki&&!t)return Ki;if(!(o&&"function"==typeof o.supports))return!1;var n=o.supports("--css-vars","yes"),r=o.supports("(--css-vars: yes)")&&o.supports("color","#00000000");return i=n||r,t||(Ki=i),i}(window);class Zo{constructor(e){this.foundation=e}startPress(){this.foundation.activate()}endPress(){this.foundation.deactivate()}startFocus(){this.foundation.handleFocus()}endFocus(){this.foundation.handleBlur()}destroy(){this.foundation.destroy()}setUnbounded(e){this.foundation.setUnbounded(e)}}const en=navigator.userAgent.match(/Safari/);let tn=!1;const on=e=>{en&&!tn&&(()=>{tn=!0;const e=document.createElement("style"),t=new C({templateFactory:L});t.appendInto(e),t.setValue(Qo),t.commit(),document.head.appendChild(e)})();const t=e.surfaceNode,i=e.interactionNode||t;i.getRootNode()!==t.getRootNode()&&""===i.style.position&&(i.style.position="relative");const o=new oo({browserSupportsCssVars:()=>Jo,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>Ti(i,":active"),isSurfaceDisabled:()=>Boolean(i.hasAttribute("disabled")),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>i.contains(e),registerInteractionHandler:(e,t)=>i.addEventListener(e,t,Ro()),deregisterInteractionHandler:(e,t)=>i.removeEventListener(e,t,Ro()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,Ro()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,Ro()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,i)=>t.style.setProperty(e,i),computeBoundingRect:()=>t.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return o.init(),new Zo(o)},nn=new WeakMap,rn=u((e={})=>t=>{const i=t.committer.element,o=e.interactionNode||i;let n=t.value;const r=nn.get(n);void 0!==r&&r!==o&&(n.destroy(),n=g),n===g?(n=on(Object.assign({},e,{surfaceNode:i})),nn.set(n,o),t.setValue(n)):(void 0!==e.unbounded&&n.setUnbounded(e.unbounded),void 0!==e.disabled&&n.setUnbounded(e.disabled)),!0===e.active?n.startPress():!1===e.active&&n.endPress()});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var an={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},dn={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},cn=function(e){function t(i){return e.call(this,xi(xi({},t.defaultAdapter),i))||this}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return dn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return an},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setDisabled=function(e){var i=t.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(i):this.adapter.removeClass(i)},t}(Ci);
/**
 * @license
 *  Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *
 *     Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn=Symbol("selection controller");class ln{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class mn{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",e=>{this.keyDownHandler(e)}),e.addEventListener("mousedown",()=>{this.mousedownHandler()}),e.addEventListener("mouseup",()=>{this.mouseupHandler()})}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let i=t[sn];return void 0===i&&(i=new mn(t),t[sn]=i),i}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i-1]||t[t.length-1];return this.select(o),o}selectNext(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i+1]||t[0];return this.select(o),o}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0)),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new ln),this.sets[e]}register(e){const t=this.getSet(e.name);t.set.add(e),t.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(!this.updating){if(this.updating=!0,e.checked){const t=this.getSet(e.name);for(const i of t.set)i.checked=i==e;t.selected=e}this.updating=!1}}}class pn extends uo{constructor(){super(...arguments),this._checked=!1,this.global=!1,this.disabled=!1,this.value="",this.name="",this.mdcFoundationClass=cn}get checked(){return this._checked}set checked(e){const t=this._checked;!!e!=!!t&&(this._checked=e,this.formElement&&(this.formElement.checked=e),void 0!==this._selectionController&&this._selectionController.update(this),this.requestUpdate("checked",t),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(e){this.formElement.value=e}connectedCallback(){super.connectedCallback(),this._selectionController=mn.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.focusNative()}focusNative(){this.formElement.focus()}get ripple(){return this.rippleElement.ripple}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}_changeHandler(){this.checked=this.formElement.checked}_focusHandler(){void 0!==this._selectionController&&this._selectionController.focus(this)}_clickHandler(){this.formElement.focus()}render(){return P`
      <div class="mdc-radio" .ripple=${rn()}>
        <input
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          .checked="${this.checked}"
          .value="${this.value}"
          @change="${this._changeHandler}"
          @focus="${this._focusHandler}"
          @click="${this._clickHandler}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
      </div>`}firstUpdated(){super.firstUpdated(),this.formElement.checked=this.checked,void 0!==this._selectionController&&this._selectionController.update(this)}}vi([Q(".mdc-radio")],pn.prototype,"mdcRoot",void 0),vi([Q("input")],pn.prototype,"formElement",void 0),vi([Q(".mdc-radio__ripple")],pn.prototype,"rippleElement",void 0),vi([q({type:Boolean})],pn.prototype,"global",void 0),vi([q({type:Boolean,reflect:!0})],pn.prototype,"checked",null),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation.setDisabled(e)}))],pn.prototype,"disabled",void 0),vi([q({type:String}),Oo((function(e){this._handleUpdatedValue(e)}))],pn.prototype,"value",void 0),vi([q({type:String})],pn.prototype,"name",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const hn=re`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:10px;display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0,0,0,.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio .mdc-radio__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio:hover .mdc-radio__ripple::before{opacity:.04}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before{transition-duration:75ms;opacity:.12}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after{transition-duration:75ms;opacity:.12}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;let un=class extends pn{};un.styles=hn,un=vi([Y("mwc-radio")],un);class fn extends de{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return P`${this.shouldRenderRipple?P`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}`}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return P`<button
        class="mdc-icon-button"
        aria-label="${this.label||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
      ${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}vi([q({type:Boolean,reflect:!0})],fn.prototype,"disabled",void 0),vi([q({type:String})],fn.prototype,"icon",void 0),vi([q({type:String})],fn.prototype,"label",void 0),vi([Q("button")],fn.prototype,"buttonElement",void 0),vi([J("mwc-ripple")],fn.prototype,"ripple",void 0),vi([K()],fn.prototype,"shouldRenderRipple",void 0),vi([te({passive:!0})],fn.prototype,"handleRippleMouseDown",null),vi([te({passive:!0})],fn.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const gn=re`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let bn=class extends fn{};bn.styles=gn,bn=vi([Y("mwc-icon-button")],bn);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _n={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},xn={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},vn=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.hasToggledAriaLabel=!1,o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return _n},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return xn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this.adapter.getAttr(xn.DATA_ARIA_LABEL_ON),t=this.adapter.getAttr(xn.DATA_ARIA_LABEL_OFF);if(e&&t){if(null!==this.adapter.getAttr(xn.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(xn.ARIA_PRESSED,String(this.isOn()))},t.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},t.prototype.isOn=function(){return this.adapter.hasClass(_n.ICON_BUTTON_ON)},t.prototype.toggle=function(e){if(void 0===e&&(e=!this.isOn()),e?this.adapter.addClass(_n.ICON_BUTTON_ON):this.adapter.removeClass(_n.ICON_BUTTON_ON),this.hasToggledAriaLabel){var t=e?this.adapter.getAttr(xn.DATA_ARIA_LABEL_ON):this.adapter.getAttr(xn.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(xn.ARIA_LABEL,t||"")}else this.adapter.setAttr(xn.ARIA_PRESSED,""+e)},t}(Ci);class yn extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=vn,this.label="",this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple))}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{getAttr:e=>this.mdcRoot.getAttribute(e),setAttr:(e,t)=>{this.mdcRoot.setAttribute(e,t)},notifyChange:e=>{this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:e,bubbles:!0}))}})}handleClick(){this.on=!this.on,this.mdcFoundation.handleClick()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return P`${this.shouldRenderRipple?P`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}`}render(){return P`
      <button
          class="mdc-icon-button"
          @click="${this.handleClick}"
          aria-hidden="true"
          aria-label="${this.label}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="mdc-icon-button__icon">
          <slot name="offIcon">
            <i class="material-icons">${this.offIcon}</i>
          </slot>
        </span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on">
          <slot name="onIcon">
            <i class="material-icons">${this.onIcon}</i>
          </slot>
        </span>
      </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}vi([Q(".mdc-icon-button")],yn.prototype,"mdcRoot",void 0),vi([q({type:String})],yn.prototype,"label",void 0),vi([q({type:Boolean,reflect:!0})],yn.prototype,"disabled",void 0),vi([q({type:String})],yn.prototype,"onIcon",void 0),vi([q({type:String})],yn.prototype,"offIcon",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){this.mdcFoundation.toggle(e)}))],yn.prototype,"on",void 0),vi([J("mwc-ripple")],yn.prototype,"ripple",void 0),vi([K()],yn.prototype,"shouldRenderRipple",void 0),vi([te({passive:!0})],yn.prototype,"handleRippleMouseDown",null),vi([te({passive:!0})],yn.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let wn=class extends yn{};wn.styles=gn,wn=vi([Y("mwc-icon-button-toggle")],wn);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var kn={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function En(e,t){if(function(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}(e)&&t in kn){var i=e.document.createElement("div"),o=kn[t],n=o.standard,r=o.prefixed;return n in i.style?n:r}return t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cn={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},An={ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Sn=function(e){function t(i){return e.call(this,xi(xi({},t.defaultAdapter),i))||this}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Cn},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return An},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate=!this.adapter.hasClass(Cn.INDETERMINATE_CLASS),this.isReversed=this.adapter.hasClass(Cn.REVERSED_CLASS),this.progress=0,this.buffer=1},t.prototype.setDeterminate=function(e){if(this.isDeterminate=e,this.isDeterminate)return this.adapter.removeClass(Cn.INDETERMINATE_CLASS),this.adapter.setAttribute(An.ARIA_VALUENOW,this.progress.toString()),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.isReversed&&(this.adapter.removeClass(Cn.REVERSED_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Cn.REVERSED_CLASS)),this.adapter.addClass(Cn.INDETERMINATE_CLASS),this.adapter.removeAttribute(An.ARIA_VALUENOW),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},t.prototype.getDeterminate=function(){return this.isDeterminate},t.prototype.setProgress=function(e){this.progress=e,this.isDeterminate&&(this.setPrimaryBarProgress(e),this.adapter.setAttribute(An.ARIA_VALUENOW,e.toString()))},t.prototype.getProgress=function(){return this.progress},t.prototype.setBuffer=function(e){this.buffer=e,this.isDeterminate&&this.setBufferBarProgress(e)},t.prototype.setReverse=function(e){this.isReversed=e,this.isDeterminate||(this.adapter.removeClass(Cn.INDETERMINATE_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Cn.INDETERMINATE_CLASS)),this.isReversed?this.adapter.addClass(Cn.REVERSED_CLASS):this.adapter.removeClass(Cn.REVERSED_CLASS)},t.prototype.open=function(){this.adapter.removeClass(Cn.CLOSED_CLASS)},t.prototype.close=function(){this.adapter.addClass(Cn.CLOSED_CLASS)},t.prototype.setPrimaryBarProgress=function(e){var t="scaleX("+e+")",i="undefined"!=typeof window?En(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,t)},t.prototype.setBufferBarProgress=function(e){var t=100*e+"%";this.adapter.setBufferBarStyle(An.FLEX_BASIS,t)},t}(Ci);class Tn extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Sn,this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.ariaLabel="",this.bufferFlexBasisValue="",this.primaryTransformValue=""}render(){const e={"mdc-linear-progress--closed":this.closed,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--reversed":this.reverse},t={"flex-basis":this.bufferFlexBasisValue},i={transform:this.primaryTransformValue};return P`
      <div
          role="progressbar"
          class="mdc-linear-progress ${$i(e)}"
          aria-label="${this.ariaLabel}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="0">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${ro(t)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${ro(i)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}createAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:e=>this.mdcRoot.classList.contains(e),forceLayout:()=>this.mdcRoot.offsetWidth,removeAttribute:e=>{this.mdcRoot.removeAttribute(e)},setAttribute:(e,t)=>{this.mdcRoot.setAttribute(e,t)},setBufferBarStyle:(e,t)=>{this.bufferFlexBasisValue=t},setPrimaryBarStyle:(e,t)=>{this.primaryTransformValue=t}}}open(){this.closed=!1}close(){this.closed=!0}}vi([Q(".mdc-linear-progress")],Tn.prototype,"mdcRoot",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){this.mdcFoundation.setDeterminate(!e)}))],Tn.prototype,"indeterminate",void 0),vi([q({type:Number}),Oo((function(e){this.mdcFoundation.setProgress(e)}))],Tn.prototype,"progress",void 0),vi([q({type:Number}),Oo((function(e){this.mdcFoundation.setBuffer(e)}))],Tn.prototype,"buffer",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){this.mdcFoundation.setReverse(e)}))],Tn.prototype,"reverse",void 0),vi([q({type:Boolean,reflect:!0})],Tn.prototype,"closed",void 0),vi([q()],Tn.prototype,"ariaLabel",void 0),vi([K()],Tn.prototype,"bufferFlexBasisValue",void 0),vi([K()],Tn.prototype,"primaryTransformValue",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const In=re`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;order:0;transform:rotate(0)}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-bar{order:1}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;let Rn=class extends Tn{};Rn.styles=In,Rn=vi([Y("mwc-linear-progress")],Rn);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var On="Unknown",Ln="Backspace",Nn="Enter",Fn="Spacebar",zn="PageUp",Pn="PageDown",Dn="End",Mn="Home",Bn="ArrowLeft",Hn="ArrowUp",$n="ArrowRight",Vn="ArrowDown",Un="Delete",jn="Escape",Xn=new Set;Xn.add(Ln),Xn.add(Nn),Xn.add(Fn),Xn.add(zn),Xn.add(Pn),Xn.add(Dn),Xn.add(Mn),Xn.add(Bn),Xn.add(Hn),Xn.add($n),Xn.add(Vn),Xn.add(Un),Xn.add(jn);var Wn=8,Yn=13,Gn=32,qn=33,Kn=34,Qn=35,Jn=36,Zn=37,er=38,tr=39,ir=40,or=46,nr=27,rr=new Map;rr.set(Wn,Ln),rr.set(Yn,Nn),rr.set(Gn,Fn),rr.set(qn,zn),rr.set(Kn,Pn),rr.set(Qn,Dn),rr.set(Jn,Mn),rr.set(Zn,Bn),rr.set(er,Hn),rr.set(tr,$n),rr.set(ir,Vn),rr.set(or,Un),rr.set(nr,jn);var ar=new Set;function dr(e){var t=e.key;if(Xn.has(t))return t;var i=rr.get(e.keyCode);return i||On}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ar.add(zn),ar.add(Pn),ar.add(Dn),ar.add(Mn),ar.add(Bn),ar.add(Hn),ar.add($n),ar.add(Vn);var cr="mdc-list-item",sr="mdc-list-item--disabled",lr={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+cr+" button:not(:disabled),\n    ."+cr+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+cr+" button:not(:disabled),\n    ."+cr+" a,\n    ."+cr+' input[type="radio"]:not(:disabled),\n    .'+cr+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},mr={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const pr=["input","button","textarea","select"];function hr(e){return e instanceof Set}const ur=e=>{const t=e===mr.UNSET_INDEX?new Set:e;return hr(t)?new Set(t):new Set([t])};class fr extends Ci{constructor(e){super(Object.assign(Object.assign({},fr.defaultAdapter),e)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=mr.UNSET_INDEX,this.focusedItemIndex_=mr.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return lr}static get numbers(){return mr}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(e){this.wrapFocus_=e}setMulti(e){this.isMulti_=e;const t=this.selectedIndex_;if(e){if(!hr(t)){const e=t===mr.UNSET_INDEX;this.selectedIndex_=e?new Set:new Set([t])}}else if(hr(t))if(t.size){const e=Array.from(t).sort();this.selectedIndex_=e[0]}else this.selectedIndex_=mr.UNSET_INDEX}setVerticalOrientation(e){this.isVertical_=e}setUseActivatedClass(e){this.useActivatedClass_=e}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(e){this.isIndexValid_(e)&&(this.isMulti_?this.setMultiSelectionAtIndex_(ur(e)):this.setSingleSelectionAtIndex_(e))}handleFocusIn(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,0)}handleFocusOut(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,-1),setTimeout(()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(e,t,i){const o="ArrowLeft"===dr(e),n="ArrowUp"===dr(e),r="ArrowRight"===dr(e),a="ArrowDown"===dr(e),d="Home"===dr(e),c="End"===dr(e),s="Enter"===dr(e),l="Spacebar"===dr(e);if(this.adapter.isRootFocused())return void(n||c?(e.preventDefault(),this.focusLastElement()):(a||d)&&(e.preventDefault(),this.focusFirstElement()));let m,p=this.adapter.getFocusedElementIndex();if(!(-1===p&&(p=i,p<0))){if(this.isVertical_&&a||!this.isVertical_&&r)this.preventDefaultEvent(e),m=this.focusNextElement(p);else if(this.isVertical_&&n||!this.isVertical_&&o)this.preventDefaultEvent(e),m=this.focusPrevElement(p);else if(d)this.preventDefaultEvent(e),m=this.focusFirstElement();else if(c)this.preventDefaultEvent(e),m=this.focusLastElement();else if((s||l)&&t){const t=e.target;if(t&&"A"===t.tagName&&s)return;this.preventDefaultEvent(e),this.setSelectedIndexOnAction_(p,!0)}this.focusedItemIndex_=p,void 0!==m&&(this.setTabindexAtIndex_(m),this.focusedItemIndex_=m)}}handleSingleSelection(e,t,i){e!==mr.UNSET_INDEX&&(this.setSelectedIndexOnAction_(e,t,i),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}focusNextElement(e){let t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return e;t=0}return this.adapter.focusItemAtIndex(t),t}focusPrevElement(e){let t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(t),t}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const e=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(e),e}setEnabled(e,t){this.isIndexValid_(e)&&this.adapter.setDisabledStateForElementIndex(e,!t)}preventDefaultEvent(e){const t=`${e.target.tagName}`.toLowerCase();-1===pr.indexOf(t)&&e.preventDefault()}setSingleSelectionAtIndex_(e,t=!0){this.selectedIndex_!==e&&(this.selectedIndex_!==mr.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0),this.setAriaForSingleSelectionAtIndex_(e),this.selectedIndex_=e,this.adapter.notifySelected(e))}setMultiSelectionAtIndex_(e,t=!0){const i=((e,t)=>{const i=Array.from(e),o=Array.from(t),n={added:[],removed:[]},r=i.sort(),a=o.sort();let d=0,c=0;for(;d<r.length||c<a.length;){const e=r[d],t=a[c];e!==t?void 0!==e&&(void 0===t||e<t)?(n.removed.push(e),d++):void 0!==t&&(void 0===e||t<e)&&(n.added.push(t),c++):(d++,c++)}return n})(ur(this.selectedIndex_),e);if(i.removed.length||i.added.length){for(const e of i.removed)t&&this.adapter.setSelectedStateForElementIndex(e,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!1);for(const e of i.added)t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0);this.selectedIndex_=e,this.adapter.notifySelected(e,i)}}setAriaForSingleSelectionAtIndex_(e){this.selectedIndex_===mr.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(e,lr.ARIA_CURRENT));const t=null!==this.ariaCurrentAttrValue_,i=t?lr.ARIA_CURRENT:lr.ARIA_SELECTED;this.selectedIndex_!==mr.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const o=t?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(e,i,o)}setTabindexAtIndex_(e){this.focusedItemIndex_===mr.UNSET_INDEX&&0!==e?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(e,0)}setTabindexToFirstSelectedItem_(){let e=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==mr.UNSET_INDEX?e=this.selectedIndex_:hr(this.selectedIndex_)&&this.selectedIndex_.size>0&&(e=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(e)}isIndexValid_(e){if(e instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===e.size)return!0;{let t=!1;for(const i of e)if(t=this.isIndexInRange_(i),t)break;return t}}if("number"==typeof e){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return e===mr.UNSET_INDEX||this.isIndexInRange_(e)}return!1}isIndexInRange_(e){const t=this.adapter.getListItemCount();return e>=0&&e<t}setSelectedIndexOnAction_(e,t,i){if(this.adapter.getDisabledStateForElementIndex(e))return;let o=e;if(this.isMulti_&&(o=new Set([e])),this.isIndexValid_(o)){if(this.isMulti_)this.toggleMultiAtIndex(e,i,t);else if(t||i)this.setSingleSelectionAtIndex_(e,t);else{this.selectedIndex_===e&&this.setSingleSelectionAtIndex_(mr.UNSET_INDEX)}t&&this.adapter.notifyAction(e)}}toggleMultiAtIndex(e,t,i=!0){let o=!1;o=void 0===t?!this.adapter.getSelectedStateForElementIndex(e):t;const n=ur(this.selectedIndex_);o?n.add(e):n.delete(e),this.setMultiSelectionAtIndex_(n,i)}}
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const gr=e=>e.hasAttribute("mwc-list-item");class br extends Mi{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=fr,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const e=this.slotElement;return e?e.assignedNodes({flatten:!0}).filter(Ii):[]}get items(){return this.items_}updateItems(){const e=this.assignedElements,t=[];for(const i of e)gr(i)&&(t.push(i),i._managingList=this),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=t;const i=new Set;if(this.items_.forEach((e,t)=>{this.itemRoles?e.setAttribute("role",this.itemRoles):e.removeAttribute("role"),e.selected&&i.add(t)}),this.multi)this.select(i);else{const e=i.size?i.entries().next().value[1]:-1;this.select(e)}const o=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(o)}get selected(){const e=this.index;if(!hr(e))return-1===e?null:this.items[e];const t=[];for(const i of e)t.push(this.items[i]);return t}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const e=null===this.innerRole?void 0:this.innerRole,t=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return P`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${go(e)}"
          aria-label="${go(t)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
      </ul>
    `}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusIn(e,t)}}onFocusOut(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusOut(e,t)}}onKeydown(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e),i=e.target,o=gr(i);this.mdcFoundation.handleKeydown(e,o,t)}}onRequestSelected(e){if(this.mdcFoundation){let t=this.getIndexOfTarget(e);if(-1===t&&(this.layout(),t=this.getIndexOfTarget(e),-1===t))return;if(this.items[t].disabled)return;const i=e.detail.selected,o=e.detail.source;this.mdcFoundation.handleSingleSelection(t,"interaction"===o,i),e.stopPropagation()}}getIndexOfTarget(e){const t=this.items,i=e.composedPath();for(const e of i){let i=-1;if(Ii(e)&&gr(e)&&(i=t.indexOf(e)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(e,t)=>{if(!this.mdcRoot)return"";const i=this.items[e];return i?i.getAttribute(t):""},setAttributeForElementIndex:(e,t,i)=>{if(!this.mdcRoot)return;const o=this.items[e];o&&o.setAttribute(t,i)},focusItemAtIndex:e=>{const t=this.items[e];t&&t.focus()},setTabIndexForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.tabindex=t)},notifyAction:e=>{const t={bubbles:!0,composed:!0};t.detail={index:e};const i=new CustomEvent("action",t);this.dispatchEvent(i)},notifySelected:(e,t)=>{const i={bubbles:!0,composed:!0};i.detail={index:e,diff:t};const o=new CustomEvent("selected",i);this.dispatchEvent(o)},isFocusInsideList:()=>Di(this),isRootFocused:()=>{const e=this.mdcRoot;return e.getRootNode().activeElement===e},setDisabledStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.disabled=t)},getDisabledStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.disabled},setSelectedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.selected=t)},getSelectedStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.selected},setActivatedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.activated=t)}},this.mdcAdapter}selectUi(e,t=!1){const i=this.items[e];i&&(i.selected=!0,i.activated=t)}deselectUi(e){const t=this.items[e];t&&(t.selected=!1,t.activated=!1)}select(e){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(e)}toggle(e,t){this.multi&&this.mdcFoundation.toggleMultiAtIndex(e,t)}onListItemConnected(e){const t=e.target;this.layout(-1===this.items.indexOf(t))}layout(e=!0){e&&this.updateItems();const t=this.items[0];for(const e of this.items)e.tabindex=-1;t&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=t):t.tabindex=0)}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const e=Pi();if(!e.length)return-1;for(let t=e.length-1;t>=0;t--){const i=e[t];if(gr(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(e){for(const e of this.items)if(0===e.tabindex){e.tabindex=-1;break}this.items[e].tabindex=0,this.items[e].focus()}focus(){const e=this.mdcRoot;e&&e.focus()}blur(){const e=this.mdcRoot;e&&e.blur()}}vi([Q(".mdc-list")],br.prototype,"mdcRoot",void 0),vi([Q("slot")],br.prototype,"slotElement",void 0),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(e)}))],br.prototype,"activatable",void 0),vi([q({type:Boolean}),Oo((function(e,t){this.mdcFoundation&&this.mdcFoundation.setMulti(e),void 0!==t&&this.layout()}))],br.prototype,"multi",void 0),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(e)}))],br.prototype,"wrapFocus",void 0),vi([q({type:String}),Oo((function(e,t){void 0!==t&&this.updateItems()}))],br.prototype,"itemRoles",void 0),vi([q({type:String})],br.prototype,"innerRole",void 0),vi([q({type:String})],br.prototype,"innerAriaLabel",void 0),vi([q({type:Boolean})],br.prototype,"rootTabbable",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){const t=this.slotElement;if(e&&t){const e=Ri(t,'[tabindex="0"]');this.previousTabindex=e,e&&e.setAttribute("tabindex","-1")}else!e&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],br.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const _r=re`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let xr=class extends br{};xr.styles=_r,xr=vi([Y("mwc-list")],xr);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class vr extends de{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new lo(()=>(this.shouldRenderRipple=!0,this.ripple)),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:e=>{const t=e.type;this.onDown("mousedown"===t?"mouseup":"touchend",e)}}]}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():P``,i=this.hasMeta?this.renderMeta():P``;return P`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`}renderRipple(){return this.shouldRenderRipple?P`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?P`<div class="fake-activated-ripple"></div>`:P``}renderGraphic(){const e={multi:this.multipleGraphics};return P`
      <span class="mdc-list-item__graphic material-icons ${$i(e)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return P`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return P`
      <span class="mdc-list-item__text">
        ${e}
      </span>`}renderSingleLine(){return P`<slot></slot>`}renderTwoline(){return P`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(e,t){const i=()=>{window.removeEventListener(e,i),this.rippleHandlers.endPress()};window.addEventListener(e,i),this.rippleHandlers.startPress(t)}fireRequestSelected(e,t){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const e of this.listeners)for(const t of e.eventNames)e.target.addEventListener(t,e.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)for(const t of e.eventNames)e.target.removeEventListener(t,e.cb);this._managingList&&this._managingList.layout(!0)}firstUpdated(){const e=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}vi([Q("slot")],vr.prototype,"slotElement",void 0),vi([J("mwc-ripple")],vr.prototype,"ripple",void 0),vi([q({type:String})],vr.prototype,"value",void 0),vi([q({type:String,reflect:!0})],vr.prototype,"group",void 0),vi([q({type:Number,reflect:!0})],vr.prototype,"tabindex",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],vr.prototype,"disabled",void 0),vi([q({type:Boolean,reflect:!0})],vr.prototype,"twoline",void 0),vi([q({type:Boolean,reflect:!0})],vr.prototype,"activated",void 0),vi([q({type:String,reflect:!0})],vr.prototype,"graphic",void 0),vi([q({type:Boolean})],vr.prototype,"multipleGraphics",void 0),vi([q({type:Boolean})],vr.prototype,"hasMeta",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],vr.prototype,"noninteractive",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){const t=this.getAttribute("role"),i="gridcell"===t||"option"===t||"row"===t||"tab"===t;i&&e?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(e,"property")}))],vr.prototype,"selected",void 0),vi([K()],vr.prototype,"shouldRenderRipple",void 0),vi([K()],vr.prototype,"_managingList",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const yr=re`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta.multi{width:auto}.mdc-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic.multi,:host([graphic=large]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let wr=class extends vr{};wr.styles=yr,wr=vi([Y("mwc-list-item")],wr);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var kr,Er,Cr={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Ar={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Sr={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"}(kr||(kr={})),function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"}(Er||(Er={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Tr,Ir=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.isSurfaceOpen=!1,o.isQuickOpen=!1,o.isHoistedElement=!1,o.isFixedPosition=!1,o.openAnimationEndTimerId=0,o.closeAnimationEndTimerId=0,o.animationRequestId=0,o.anchorCorner=Er.TOP_START,o.originCorner=Er.TOP_START,o.anchorMargin={top:0,right:0,bottom:0,left:0},o.position={x:0,y:0},o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Cr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ar},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Sr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Corner",{get:function(){return Er},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=t.cssClasses,i=e.ROOT,o=e.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(o)&&(this.isSurfaceOpen=!0)},t.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},t.prototype.setAnchorCorner=function(e){this.anchorCorner=e},t.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^kr.RIGHT},t.prototype.setAnchorMargin=function(e){this.anchorMargin.top=e.top||0,this.anchorMargin.right=e.right||0,this.anchorMargin.bottom=e.bottom||0,this.anchorMargin.left=e.left||0},t.prototype.setIsHoisted=function(e){this.isHoistedElement=e},t.prototype.setFixedPosition=function(e){this.isFixedPosition=e},t.prototype.setAbsolutePosition=function(e,t){this.position.x=this.isFinite(e)?e:0,this.position.y=this.isFinite(t)?t:0},t.prototype.setQuickOpen=function(e){this.isQuickOpen=e},t.prototype.isOpen=function(){return this.isSurfaceOpen},t.prototype.open=function(){var e=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(t.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){e.adapter.addClass(t.cssClasses.OPEN),e.dimensions=e.adapter.getInnerDimensions(),e.autoposition(),e.openAnimationEndTimerId=setTimeout((function(){e.openAnimationEndTimerId=0,e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter.notifyOpen()}),Sr.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},t.prototype.close=function(e){var i=this;void 0===e&&(e=!1),this.isSurfaceOpen&&(this.isQuickOpen?(this.isSurfaceOpen=!1,e||this.maybeRestoreFocus(),this.adapter.removeClass(t.cssClasses.OPEN),this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose()):(this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter.removeClass(t.cssClasses.OPEN),i.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout((function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()}),Sr.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,e||this.maybeRestoreFocus()))},t.prototype.handleBodyClick=function(e){var t=e.target;this.adapter.isElementInContainer(t)||this.close()},t.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},t.prototype.autoposition=function(){var e;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),o=this.getMenuSurfaceMaxHeight(i),n=this.hasBit(i,kr.BOTTOM)?"bottom":"top",r=this.hasBit(i,kr.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),d=this.getVerticalOriginOffset(i),c=this.measurements,s=c.anchorSize,l=c.surfaceSize,m=((e={})[r]=a,e[n]=d,e);s.width/l.width>Sr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(r="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(m),this.adapter.setTransformOrigin(r+" "+n),this.adapter.setPosition(m),this.adapter.setMaxHeight(o?o+"px":""),this.hasBit(i,kr.BOTTOM)||this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW)},t.prototype.getAutoLayoutmeasurements=function(){var e=this.adapter.getAnchorDimensions(),t=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return e||(e={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:e,bodySize:t,surfaceSize:this.dimensions,viewportDistance:{top:e.top,right:i.width-e.right,bottom:i.height-e.bottom,left:e.left},viewportSize:i,windowScroll:o}},t.prototype.getoriginCorner=function(){var e,i,o=this.originCorner,n=this.measurements,r=n.viewportDistance,a=n.anchorSize,d=n.surfaceSize,c=t.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,kr.BOTTOM)?(e=r.top-c+a.height+this.anchorMargin.bottom,i=r.bottom-c-this.anchorMargin.bottom):(e=r.top-c+this.anchorMargin.top,i=r.bottom-c+a.height-this.anchorMargin.top),!(i-d.height>0)&&e>=i&&(o=this.setBit(o,kr.BOTTOM));var s,l,m=this.adapter.isRtl(),p=this.hasBit(this.anchorCorner,kr.FLIP_RTL),h=this.hasBit(this.anchorCorner,kr.RIGHT),u=!1;(u=m&&p?!h:h)?(s=r.left+a.width+this.anchorMargin.right,l=r.right-this.anchorMargin.right):(s=r.left+this.anchorMargin.left,l=r.right+a.width-this.anchorMargin.left);var f=s-d.width>0,g=l-d.width>0,b=this.hasBit(o,kr.FLIP_RTL)&&this.hasBit(o,kr.RIGHT);return g&&b&&m||!f&&b?o=this.unsetBit(o,kr.RIGHT):(f&&u&&m||f&&!u&&h||!g&&s>=l)&&(o=this.setBit(o,kr.RIGHT)),o},t.prototype.getMenuSurfaceMaxHeight=function(e){var i=this.measurements.viewportDistance,o=0,n=this.hasBit(e,kr.BOTTOM),r=this.hasBit(this.anchorCorner,kr.BOTTOM),a=t.numbers.MARGIN_TO_EDGE;return n?(o=i.top+this.anchorMargin.top-a,r||(o+=this.measurements.anchorSize.height)):(o=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,r&&(o-=this.measurements.anchorSize.height)),o},t.prototype.getHorizontalOriginOffset=function(e){var t=this.measurements.anchorSize,i=this.hasBit(e,kr.RIGHT),o=this.hasBit(this.anchorCorner,kr.RIGHT);if(i){var n=o?t.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return o?t.width-this.anchorMargin.right:this.anchorMargin.left},t.prototype.getVerticalOriginOffset=function(e){var t=this.measurements.anchorSize,i=this.hasBit(e,kr.BOTTOM),o=this.hasBit(this.anchorCorner,kr.BOTTOM);return i?o?t.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?t.height+this.anchorMargin.bottom:this.anchorMargin.top},t.prototype.adjustPositionForHoistedElement=function(e){var t,i,o=this.measurements,n=o.windowScroll,r=o.viewportDistance,a=Object.keys(e);try{for(var d=function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],o=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(a),c=d.next();!c.done;c=d.next()){var s=c.value,l=e[s]||0;l+=r[s],this.isFixedPosition||("top"===s?l+=n.y:"bottom"===s?l-=n.y:"left"===s?l+=n.x:l-=n.x),e[s]=l}}catch(e){t={error:e}}finally{try{c&&!c.done&&(i=d.return)&&i.call(d)}finally{if(t)throw t.error}}},t.prototype.maybeRestoreFocus=function(){var e=this.adapter.isFocused(),t=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||t)&&this.adapter.restoreFocus()},t.prototype.hasBit=function(e,t){return Boolean(e&t)},t.prototype.setBit=function(e,t){return e|t},t.prototype.unsetBit=function(e,t){return e^t},t.prototype.isFinite=function(e){return"number"==typeof e&&isFinite(e)},t}(Ci);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Rr={TOP_LEFT:Er.TOP_LEFT,TOP_RIGHT:Er.TOP_RIGHT,BOTTOM_LEFT:Er.BOTTOM_LEFT,BOTTOM_RIGHT:Er.BOTTOM_RIGHT,TOP_START:Er.TOP_START,TOP_END:Er.TOP_END,BOTTOM_START:Er.BOTTOM_START,BOTTOM_END:Er.BOTTOM_END};class Or extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Ir,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.bitwiseCorner=Er.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const e={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth};return P`
      <div
          class="mdc-menu-surface ${$i(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const e=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const e=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:e=>{const t=this.mdcRoot;if(!t)return;const i=`${function(e,t){if(void 0===t&&(t=!1),void 0===Tr||t){var i=e.document.createElement("div");Tr="transform"in i.style?"transform":"webkitTransform"}return Tr}(window)}-origin`;t.style.setProperty(i,e)},isFocused:()=>Di(this),saveFocus:()=>{const e=Pi(),t=e.length;t||(this.previouslyFocused=null),this.previouslyFocused=e[t-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const e=this.mdcRoot;return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const e=this.anchor;return e?e.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:e=>{const t=this.mdcRoot;t&&(t.style.left="left"in e?`${e.left}px`:"",t.style.right="right"in e?`${e.right}px`:"",t.style.top="top"in e?`${e.top}px`:"",t.style.bottom="bottom"in e?`${e.bottom}px`:"")},setMaxHeight:e=>{const t=this.mdcRoot;t&&(t.style.maxHeight=e)}})}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onBodyClick(e){-1===e.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}close(){this.open=!1}show(){this.open=!0}}vi([Q(".mdc-menu-surface")],Or.prototype,"mdcRoot",void 0),vi([Q("slot")],Or.prototype,"slotElement",void 0),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(e)}))],Or.prototype,"absolute",void 0),vi([q({type:Boolean})],Or.prototype,"fullwidth",void 0),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(e)}))],Or.prototype,"fixed",void 0),vi([q({type:Number}),Oo((function(e){this.mdcFoundation&&null!==this.y&&null!==e&&(this.mdcFoundation.setAbsolutePosition(e,this.y),this.mdcFoundation.setAnchorMargin({left:e,top:this.y,right:-e,bottom:this.y}))}))],Or.prototype,"x",void 0),vi([q({type:Number}),Oo((function(e){this.mdcFoundation&&null!==this.x&&null!==e&&(this.mdcFoundation.setAbsolutePosition(this.x,e),this.mdcFoundation.setAnchorMargin({left:this.x,top:e,right:-this.x,bottom:e}))}))],Or.prototype,"y",void 0),vi([q({type:Boolean}),Oo((function(e){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(e)}))],Or.prototype,"quick",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e,t){this.mdcFoundation&&(e?this.mdcFoundation.open():void 0!==t&&this.mdcFoundation.close())}))],Or.prototype,"open",void 0),vi([K(),Oo((function(e){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(e)}))],Or.prototype,"bitwiseCorner",void 0),vi([q({type:String}),Oo((function(e){if(this.mdcFoundation){const t="START"===e||"END"===e,i=null===this.previousMenuCorner,o=!i&&e!==this.previousMenuCorner,n=i&&"END"===e;t&&(o||n)&&(this.bitwiseCorner=this.bitwiseCorner^kr.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=e)}}))],Or.prototype,"menuCorner",void 0),vi([q({type:String}),Oo((function(e){if(this.mdcFoundation&&e){let t=Rr[e];"END"===this.menuCorner&&(t^=kr.RIGHT),this.bitwiseCorner=t}}))],Or.prototype,"corner",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Lr=re`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:var(--mdc-menu-z-index, 8)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Nr=class extends Or{};Nr.styles=Lr,Nr=vi([Y("mwc-menu-surface")],Nr);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fr,zr={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Pr={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},Dr={FOCUS_ROOT_INDEX:-1};!function(e){e[e.NONE=0]="NONE",e[e.LIST_ROOT=1]="LIST_ROOT",e[e.FIRST_ITEM=2]="FIRST_ITEM",e[e.LAST_ITEM=3]="LAST_ITEM"}(Fr||(Fr={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Mr=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.closeAnimationEndTimerId_=0,o.defaultFocusState_=Fr.LIST_ROOT,o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return zr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Pr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Dr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},t.prototype.handleKeydown=function(e){var t=e.key,i=e.keyCode;("Tab"===t||9===i)&&this.adapter.closeSurface(!0)},t.prototype.handleItemAction=function(e){var t=this,i=this.adapter.getElementIndex(e);i<0||(this.adapter.notifySelected({index:i}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=t.adapter.getElementIndex(e);i>=0&&t.adapter.isSelectableItemAtIndex(i)&&t.setSelectedIndex(i)}),Ir.numbers.TRANSITION_CLOSE_DURATION))},t.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case Fr.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Fr.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Fr.NONE:break;default:this.adapter.focusListRoot()}},t.prototype.setDefaultFocusState=function(e){this.defaultFocusState_=e},t.prototype.setSelectedIndex=function(e){if(this.validatedIndex_(e),!this.adapter.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter.getSelectedSiblingOfItemAtIndex(e);t>=0&&(this.adapter.removeAttributeFromElementAtIndex(t,Pr.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(t,zr.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(e,zr.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(e,Pr.ARIA_CHECKED_ATTR,"true")},t.prototype.setEnabled=function(e,t){this.validatedIndex_(e),t?(this.adapter.removeClassFromElementAtIndex(e,sr),this.adapter.addAttributeToElementAtIndex(e,Pr.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(e,sr),this.adapter.addAttributeToElementAtIndex(e,Pr.ARIA_DISABLED_ATTR,"true"))},t.prototype.validatedIndex_=function(e){var t=this.adapter.getMenuItemCount();if(!(e>=0&&e<t))throw new Error("MDCMenuFoundation: No list item at specified index.")},t}(Ci);class Br extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Mr,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const e=this.listElement;return e?e.items:[]}get index(){const e=this.listElement;return e?e.index:-1}get selected(){const e=this.listElement;return e?e.selected:null}render(){const e="menu"===this.innerRole?"menuitem":"option";return P`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const o=i.items[e];o&&("mdc-menu-item--selected"===t?this.forceGroupSelection&&!o.selected&&i.toggle(e,!0):o.classList.add(t))},removeClassFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const o=i.items[e];o&&("mdc-menu-item--selected"===t?o.selected&&i.toggle(e,!1):o.classList.remove(t))},addAttributeToElementAtIndex:(e,t,i)=>{const o=this.listElement;if(!o)return;const n=o.items[e];n&&n.setAttribute(t,i)},removeAttributeFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const o=i.items[e];o&&o.removeAttribute(t)},elementContainsClass:(e,t)=>e.classList.contains(t),closeSurface:()=>{this.open=!1},getElementIndex:e=>{const t=this.listElement;return t?t.items.indexOf(e):-1},notifySelected:()=>{},getMenuItemCount:()=>{const e=this.listElement;return e?e.items.length:0},focusItemAtIndex:e=>{const t=this.listElement;if(!t)return;const i=t.items[e];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:e=>{const t=this.listElement;if(!t)return-1;const i=t.items[e];if(!i||!i.group)return-1;for(let o=0;o<t.items.length;o++){if(o===e)continue;const n=t.items[o];if(n.selected&&n.group===i.group)return o}return-1},isSelectableItemAtIndex:e=>{const t=this.listElement;if(!t)return!1;const i=t.items[e];return!!i&&i.hasAttribute("group")}}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onAction(e){const t=this.listElement;if(this.mdcFoundation&&t){const i=e.detail.index,o=t.items[i];o&&this.mdcFoundation.handleItemAction(o)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const e=this.listElement;e&&(this._listUpdateComplete=e.updateComplete,await this._listUpdateComplete)}select(e){const t=this.listElement;t&&t.select(e)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const e=this.listElement;return e?e.getFocusedItemIndex():-1}focusItemAtIndex(e){const t=this.listElement;t&&t.focusItemAtIndex(e)}layout(e=!0){const t=this.listElement;t&&t.layout(e)}}vi([Q(".mdc-menu")],Br.prototype,"mdcRoot",void 0),vi([Q("slot")],Br.prototype,"slotElement",void 0),vi([q({type:Object})],Br.prototype,"anchor",void 0),vi([q({type:Boolean,reflect:!0})],Br.prototype,"open",void 0),vi([q({type:Boolean})],Br.prototype,"quick",void 0),vi([q({type:Boolean})],Br.prototype,"wrapFocus",void 0),vi([q({type:String})],Br.prototype,"innerRole",void 0),vi([q({type:String})],Br.prototype,"corner",void 0),vi([q({type:Number})],Br.prototype,"x",void 0),vi([q({type:Number})],Br.prototype,"y",void 0),vi([q({type:Boolean})],Br.prototype,"absolute",void 0),vi([q({type:Boolean})],Br.prototype,"multi",void 0),vi([q({type:Boolean})],Br.prototype,"activatable",void 0),vi([q({type:Boolean})],Br.prototype,"fixed",void 0),vi([q({type:Boolean})],Br.prototype,"forceGroupSelection",void 0),vi([q({type:Boolean})],Br.prototype,"fullwidth",void 0),vi([q({type:String})],Br.prototype,"menuCorner",void 0),vi([q({type:String}),Oo((function(e){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(Fr[e])}))],Br.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Hr=re`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let $r=class extends Br{};$r.styles=Hr,$r=vi([Y("mwc-menu")],$r);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vr={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Ur={NOTCH_ELEMENT_PADDING:8},jr={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Xr=function(e){function t(i){return e.call(this,xi(xi({},t.defaultAdapter),i))||this}return _i(t,e),Object.defineProperty(t,"strings",{get:function(){return Vr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return jr},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ur},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),t.prototype.notch=function(e){var i=t.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=Ur.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(e),this.adapter.addClass(i)},t.prototype.closeNotch=function(){var e=t.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(e),this.adapter.removeNotchWidthProperty()},t}(Ci);class Wr extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Xr,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:e=>this.mdcRoot.classList.add(e),removeClass:e=>this.mdcRoot.classList.remove(e),setNotchWidthProperty:e=>this.notchElement.style.setProperty("width",`${e}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(e,t){this.mdcFoundation&&(e&&void 0!==t?this.mdcFoundation.notch(t):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const e=$i({"mdc-notched-outline--notched":this.open});return P`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}vi([Q(".mdc-notched-outline")],Wr.prototype,"mdcRoot",void 0),vi([q({type:Number})],Wr.prototype,"width",void 0),vi([q({type:Boolean,reflect:!0})],Wr.prototype,"open",void 0),vi([Q(".mdc-notched-outline__notch")],Wr.prototype,"notchElement",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Yr=re`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;let Gr=class extends Wr{};Gr.styles=Yr,Gr=vi([Y("mwc-notched-outline")],Gr);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qr=["input","button","textarea","select"],Kr=function(e){var t=e.target;if(t){var i=(""+t.tagName).toLowerCase();-1===qr.indexOf(i)&&e.preventDefault()}};function Qr(e,t){for(var i=new Map,o=0;o<e;o++){var n=t(o).trim();if(n){var r=n[0].toLowerCase();i.has(r)||i.set(r,[]),i.get(r).push({text:n.toLowerCase(),index:o})}}return i.forEach((function(e){e.sort((function(e,t){return e.index-t.index}))})),i}function Jr(e,t){var i,o=e.nextChar,n=e.focusItemAtIndex,r=e.sortedIndexByFirstChar,a=e.focusedItemIndex,d=e.skipFocus,c=e.isItemAtIndexDisabled;return clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout((function(){!function(e){e.typeaheadBuffer=""}(t)}),mr.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+o,-1===(i=1===t.typeaheadBuffer.length?function(e,t,i,o){var n=o.typeaheadBuffer[0],r=e.get(n);if(!r)return-1;if(n===o.currentFirstChar&&r[o.sortedIndexCursor].index===t){o.sortedIndexCursor=(o.sortedIndexCursor+1)%r.length;var a=r[o.sortedIndexCursor].index;if(!i(a))return a}o.currentFirstChar=n;var d,c=-1;for(d=0;d<r.length;d++)if(!i(r[d].index)){c=d;break}for(;d<r.length;d++)if(r[d].index>t&&!i(r[d].index)){c=d;break}if(-1!==c)return o.sortedIndexCursor=c,r[o.sortedIndexCursor].index;return-1}(r,a,c,t):function(e,t,i){var o=i.typeaheadBuffer[0],n=e.get(o);if(!n)return-1;var r=n[i.sortedIndexCursor];if(0===r.text.lastIndexOf(i.typeaheadBuffer,0)&&!t(r.index))return r.index;var a=(i.sortedIndexCursor+1)%n.length,d=-1;for(;a!==i.sortedIndexCursor;){var c=n[a],s=0===c.text.lastIndexOf(i.typeaheadBuffer,0),l=!t(c.index);if(s&&l){d=a;break}a=(a+1)%n.length}if(-1!==d)return i.sortedIndexCursor=d,n[i.sortedIndexCursor].index;return-1}(r,c,t))||d||n(i),i}function Zr(e){return e.typeaheadBuffer.length>0}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ea={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},ta=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return ea},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},t.prototype.getWidth=function(){return this.adapter.getWidth()},t.prototype.shake=function(e){var i=t.cssClasses.LABEL_SHAKE;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.float=function(e){var i=t.cssClasses,o=i.LABEL_FLOAT_ABOVE,n=i.LABEL_SHAKE;e?this.adapter.addClass(o):(this.adapter.removeClass(o),this.adapter.removeClass(n))},t.prototype.setRequired=function(e){var i=t.cssClasses.LABEL_REQUIRED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.handleShakeAnimationEnd_=function(){var e=t.cssClasses.LABEL_SHAKE;this.adapter.removeClass(e)},t}(Ci);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const ia=new WeakMap,oa=u(e=>t=>{if(!ia.get(t)){const i=t.committer.element;i.classList.add("mdc-floating-label");const o=(e=>({addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),getWidth:()=>e.scrollWidth,registerInteractionHandler:(t,i)=>{e.addEventListener(t,i)},deregisterInteractionHandler:(t,i)=>{e.removeEventListener(t,i)}}))(i),n=new ta(o);n.init(),t.setValue(n),ia.set(t,{label:e,foundation:n})}});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var na={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},ra=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.transitionEndHandler_=function(e){return o.handleTransitionEnd(e)},o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return na},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler_)},t.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler_)},t.prototype.activate=function(){this.adapter.removeClass(na.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(na.LINE_RIPPLE_ACTIVE)},t.prototype.setRippleCenter=function(e){this.adapter.setStyle("transform-origin",e+"px center")},t.prototype.deactivate=function(){this.adapter.addClass(na.LINE_RIPPLE_DEACTIVATING)},t.prototype.handleTransitionEnd=function(e){var t=this.adapter.hasClass(na.LINE_RIPPLE_DEACTIVATING);"opacity"===e.propertyName&&t&&(this.adapter.removeClass(na.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(na.LINE_RIPPLE_DEACTIVATING))},t}(Ci);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const aa=new WeakMap,da=u(()=>e=>{if(!aa.get(e)){const t=e.committer.element;t.classList.add("mdc-line-ripple");const i=(e=>({addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),hasClass:t=>e.classList.contains(t),setStyle:(t,i)=>e.style.setProperty(t,i),registerEventHandler:(t,i)=>{e.addEventListener(t,i)},deregisterEventHandler:(t,i)=>{e.removeEventListener(t,i)}}))(t),o=new ra(i);o.init(),e.setValue(o),aa.set(e,o)}});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ca={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},sa={ARIA_CONTROLS:"aria-controls",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},la={LABEL_SCALE:.75,UNSET_INDEX:-1},ma=function(e){function t(i,o){void 0===o&&(o={});var n=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return n.disabled=!1,n.isMenuOpen=!1,n.useDefaultValidation=!0,n.customValidity=!0,n.lastSelectedIndex=la.UNSET_INDEX,n.leadingIcon=o.leadingIcon,n.helperText=o.helperText,n}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return ca},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return la},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return sa},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!0,configurable:!0}),t.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},t.prototype.setSelectedIndex=function(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1),e>=this.adapter.getMenuItemCount()||(e===la.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()),this.adapter.setSelectedIndex(e),t&&this.adapter.closeMenu(),i||this.lastSelectedIndex===e||this.handleChange(),this.lastSelectedIndex=e)},t.prototype.setValue=function(e){var t=this.adapter.getMenuItemValues().indexOf(e);this.setSelectedIndex(t)},t.prototype.getValue=function(){var e=this.adapter.getSelectedIndex(),t=this.adapter.getMenuItemValues();return e!==la.UNSET_INDEX?t[e]:""},t.prototype.getDisabled=function(){return this.disabled},t.prototype.setDisabled=function(e){this.disabled=e,this.disabled?(this.adapter.addClass(ca.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(ca.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},t.prototype.openMenu=function(){this.adapter.addClass(ca.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},t.prototype.setHelperTextContent=function(e){this.helperText&&this.helperText.setContent(e)},t.prototype.layout=function(){if(this.adapter.hasLabel()){var e=this.getValue().length>0,t=this.adapter.hasClass(ca.FOCUSED),i=e||t,o=this.adapter.hasClass(ca.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(o)}},t.prototype.layoutOptions=function(){var e=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(e,!1,!0)},t.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var e=this.getSelectedIndex(),t=e>=0?e:0;this.adapter.focusMenuItemAtIndex(t)}},t.prototype.handleMenuClosed=function(){this.adapter.removeClass(ca.ACTIVATED),this.isMenuOpen=!1,this.adapter.setSelectAnchorAttr("aria-expanded","false"),this.adapter.isSelectAnchorFocused()||this.blur()},t.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(ca.REQUIRED)&&this.useDefaultValidation&&(this.setValid(this.isValid()),this.helperText&&this.helperText.setValidity(this.isValid()))},t.prototype.handleMenuItemAction=function(e){this.setSelectedIndex(e,!0)},t.prototype.handleFocus=function(){this.adapter.addClass(ca.FOCUSED),this.layout(),this.adapter.activateBottomLine()},t.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},t.prototype.handleClick=function(e){this.disabled||(this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(e),this.openMenu()))},t.prototype.handleKeydown=function(e){if(!this.isMenuOpen&&this.adapter.hasClass(ca.FOCUSED)){var t=dr(e)===Nn,i=dr(e)===Fn,o=dr(e)===Hn,n=dr(e)===Vn;if(!i&&e.key&&1===e.key.length||i&&this.adapter.isTypeaheadInProgress()){var r=i?" ":e.key,a=this.adapter.typeaheadMatchItem(r,this.getSelectedIndex());return a>=0&&this.setSelectedIndex(a),void e.preventDefault()}(t||i||o||n)&&(o&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):n&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),e.preventDefault())}},t.prototype.notchOutline=function(e){if(this.adapter.hasOutline()){var t=this.adapter.hasClass(ca.FOCUSED);if(e){var i=la.LABEL_SCALE,o=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(o)}else t||this.adapter.closeOutline()}},t.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon&&this.leadingIcon.setAriaLabel(e)},t.prototype.setLeadingIconContent=function(e){this.leadingIcon&&this.leadingIcon.setContent(e)},t.prototype.setUseDefaultValidation=function(e){this.useDefaultValidation=e},t.prototype.setValid=function(e){this.useDefaultValidation||(this.customValidity=e),this.adapter.setSelectAnchorAttr("aria-invalid",(!e).toString()),e?(this.adapter.removeClass(ca.INVALID),this.adapter.removeMenuClass(ca.MENU_INVALID)):(this.adapter.addClass(ca.INVALID),this.adapter.addMenuClass(ca.MENU_INVALID))},t.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(ca.REQUIRED)&&!this.adapter.hasClass(ca.DISABLED)?this.getSelectedIndex()!==la.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},t.prototype.setRequired=function(e){e?this.adapter.addClass(ca.REQUIRED):this.adapter.removeClass(ca.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",e.toString()),this.adapter.setLabelRequired(e)},t.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},t.prototype.init=function(){var e=this.adapter.getAnchorElement();e&&(this.adapter.setMenuAnchorElement(e),this.adapter.setMenuAnchorCorner(Er.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(ca.DISABLED)),this.layout(),this.layoutOptions()},t.prototype.blur=function(){this.adapter.removeClass(ca.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(ca.REQUIRED)&&this.useDefaultValidation&&(this.setValid(this.isValid()),this.helperText&&this.helperText.setValidity(this.isValid()))},t}(Ci);const pa=(e={})=>{const t={};for(const i in e)t[i]=e[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class ha extends uo{constructor(){super(...arguments),this.mdcFoundationClass=ma,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalMenuWidth=!1,this.isUiValid=!0,this.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},this.sortedIndexByFirstChar=new Map,this.menuElement_=null,this.listeners=[],this.onBodyClickBound=()=>{},this._menuUpdateComplete=null,this.renderReady=!1,this.valueSetDirectly=!1,this.validityTransform=null,this._validity=pa()}get items(){return this.menuElement_||(this.menuElement_=this.menuElement),this.menuElement_?this.menuElement_.items:[]}get selected(){const e=this.menuElement;return e?e.selected:null}get index(){const e=this.menuElement;return e?e.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){const e={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--filled":!this.outlined,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},t={"mdc-select__menu--invalid":!this.isUiValid},i=this.shouldRenderHelperText?"helper-text":void 0;return P`
      <div
          class="mdc-select ${$i(e)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby="label"
            aria-required=${this.required}
            aria-describedby=${go(i)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined?this.renderOutline():this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text">${this.selectedText}</span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${$i(t)}"
            activatable
            .fullwidth=${!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`}renderRipple(){return this.outlined?b:P`
      <span class="mdc-select__ripple"></span>
    `}renderOutline(){return this.outlined?P`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:b}renderLabel(){return this.label?P`
      <span
          .floatingLabelFoundation=${oa(this.label)}
          id="label">${this.label}</span>
    `:b}renderLeadingIcon(){return this.icon?P`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`:b}renderLineRipple(){return this.outlined?b:P`
      <span .lineRippleFoundation=${da()}></span>
    `}renderHelperText(){if(!this.shouldRenderHelperText)return b;const e=this.validationMessage&&!this.isUiValid;return P`
        <p
          class="mdc-select-helper-text ${$i({"mdc-select-helper-text--validation-msg":e})}"
          id="helper-text">${e?this.validationMessage:this.helper}</p>`}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},hasLabel:()=>!!this.label,floatLabel:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(e)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)},hasOutline:()=>this.outlined,notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:e=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}},notifyChange:async e=>{if(!this.valueSetDirectly&&e===this.value)return;this.valueSetDirectly=!1,this.value=e,await this.updateComplete;const t=new Event("change",{bubbles:!0});this.dispatchEvent(t)},setSelectedText:e=>this.selectedText=e,isSelectAnchorFocused:()=>{const e=this.anchorElement;return!!e&&e.getRootNode().activeElement===e},getSelectAnchorAttr:e=>{const t=this.anchorElement;return t?t.getAttribute(e):null},setSelectAnchorAttr:(e,t)=>{const i=this.anchorElement;i&&i.setAttribute(e,t)},removeSelectAnchorAttr:e=>{const t=this.anchorElement;t&&t.removeAttribute(e)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},addMenuClass:()=>{},removeMenuClass:()=>{},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const e=this.menuElement;e&&(e.corner="BOTTOM_START")},setMenuWrapFocus:e=>{const t=this.menuElement;t&&(t.wrapFocus=e)},focusMenuItemAtIndex:e=>{const t=this.menuElement;if(!t)return;const i=t.items[e];i&&i.focus()},getMenuItemCount:()=>{const e=this.menuElement;return e?e.items.length:0},getMenuItemValues:()=>{const e=this.menuElement;return e?e.items.map(e=>e.value):[]},getMenuItemTextAtIndex:e=>{const t=this.menuElement;if(!t)return"";const i=t.items[e];return i?i.text:""},getSelectedIndex:()=>this.index,setSelectedIndex:()=>{},isTypeaheadInProgress:()=>Zr(this.typeaheadState),typeaheadMatchItem:(e,t)=>{if(!this.menuElement)return-1;const i=Jr({focusItemAtIndex:e=>{this.menuElement.focusItemAtIndex(e)},focusedItemIndex:t||this.menuElement.getFocusedItemIndex(),nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:!1,isItemAtIndexDisabled:e=>this.items[e].disabled},this.typeaheadState);return-1!==i&&this.select(i),i}})}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let i=pa(t);if(this.validityTransform){const t=this.validityTransform(e,i);i=Object.assign(Object.assign({},i),t)}return this._validity=i,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}async _getUpdateComplete(){await this._menuUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){const e=this.menuElement;if(e&&(this._menuUpdateComplete=e.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),!this.selected){!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:!0}).length&&(await new Promise(e=>requestAnimationFrame(e)),await this.layout());const e=this.items.length&&""===this.items[0].value;if(!this.value&&e)return void this.select(0);this.selectByValue(this.value)}this.sortedIndexByFirstChar=Qr(this.items.length,e=>this.items[e].text),this.renderReady=!0}onItemsUpdated(){this.sortedIndexByFirstChar=Qr(this.items.length,e=>this.items[e].text)}select(e){const t=this.menuElement;t&&t.select(e)}selectByValue(e){let t=-1;for(let i=0;i<this.items.length;i++){if(this.items[i].value===e){t=i;break}}this.valueSetDirectly=!0,this.select(t),this.mdcFoundation.handleChange()}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)e.target.removeEventListener(e.name,e.cb)}focus(){const e=new CustomEvent("focus"),t=this.anchorElement;t&&(t.dispatchEvent(e),t.focus())}blur(){const e=new CustomEvent("blur"),t=this.anchorElement;t&&(t.dispatchEvent(e),t.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const e=this.menuElement;e&&!e.open&&this.reportValidity()}onClick(e){if(this.mdcFoundation){this.focus();const t=e.target.getBoundingClientRect();let i=0;i="touches"in e?e.touches[0].clientX:e.clientX;const o=i-t.left;this.mdcFoundation.handleClick(o)}}onKeydown(e){const t=dr(e)===Hn,i=dr(e)===Vn;if(i||t){const o=t&&this.index>0,n=i&&this.index<this.items.length-1;return o?this.select(this.index-1):n&&this.select(this.index+1),e.preventDefault(),void this.mdcFoundation.openMenu()}this.mdcFoundation.handleKeydown(e)}handleTypeahead(e){if(!this.menuElement)return;const t=this.menuElement.getFocusedItemIndex(),i=Ii(e.target)?e.target:null;!function(e,t){var i=e.event,o=e.isTargetListItem,n=e.focusedItemIndex,r=e.focusItemAtIndex,a=e.sortedIndexByFirstChar,d=e.isItemAtIndexDisabled,c="ArrowLeft"===dr(i),s="ArrowUp"===dr(i),l="ArrowRight"===dr(i),m="ArrowDown"===dr(i),p="Home"===dr(i),h="End"===dr(i),u="Enter"===dr(i),f="Spacebar"===dr(i);c||s||l||m||p||h||u||(f||1!==i.key.length?f&&(o&&Kr(i),o&&Zr(t)&&Jr({focusItemAtIndex:r,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:d},t)):(Kr(i),Jr({focusItemAtIndex:r,focusedItemIndex:n,nextChar:i.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:d},t)))}({event:e,focusItemAtIndex:e=>{this.menuElement.focusItemAtIndex(e)},focusedItemIndex:t,isTargetListItem:!!i&&i.hasAttribute("mwc-list-item"),sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:e=>this.items[e].disabled},this.typeaheadState)}async onSelected(e){this.mdcFoundation||await this.updateComplete,this.mdcFoundation.handleMenuItemAction(e.detail.index);const t=this.items[e.detail.index];t&&(this.value=t.value)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}async layout(e=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const t=this.menuElement;t&&t.layout(e);const i=this.labelElement;if(!i)return void(this.outlineOpen=!1);const o=!!this.label&&!!this.value;if(i.floatingLabelFoundation.float(o),!this.outlined)return;this.outlineOpen=o,await this.updateComplete;const n=i.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=n)}}vi([Q(".mdc-select")],ha.prototype,"mdcRoot",void 0),vi([Q(".formElement")],ha.prototype,"formElement",void 0),vi([Q("slot")],ha.prototype,"slotElement",void 0),vi([Q("select")],ha.prototype,"nativeSelectElement",void 0),vi([Q("input")],ha.prototype,"nativeInputElement",void 0),vi([Q(".mdc-line-ripple")],ha.prototype,"lineRippleElement",void 0),vi([Q(".mdc-floating-label")],ha.prototype,"labelElement",void 0),vi([Q("mwc-notched-outline")],ha.prototype,"outlineElement",void 0),vi([Q(".mdc-menu")],ha.prototype,"menuElement",void 0),vi([Q(".mdc-select__anchor")],ha.prototype,"anchorElement",void 0),vi([q({type:Boolean,attribute:"disabled",reflect:!0}),Oo((function(e){this.renderReady&&this.mdcFoundation.setDisabled(e)}))],ha.prototype,"disabled",void 0),vi([q({type:Boolean}),Oo((function(e,t){void 0!==t&&this.outlined!==t&&this.layout(!1)}))],ha.prototype,"outlined",void 0),vi([q({type:String}),Oo((function(e,t){void 0!==t&&this.label!==t&&this.layout(!1)}))],ha.prototype,"label",void 0),vi([q({type:Boolean})],ha.prototype,"outlineOpen",void 0),vi([q({type:Number})],ha.prototype,"outlineWidth",void 0),vi([q({type:String}),Oo((function(e){if(this.mdcFoundation){const t=null===this.selected&&!!e,i=this.selected&&this.selected.value!==e;(t||i)&&this.selectByValue(e),this.reportValidity()}}))],ha.prototype,"value",void 0),vi([q({type:String})],ha.prototype,"selectedText",void 0),vi([q({type:String})],ha.prototype,"icon",void 0),vi([q({type:Boolean})],ha.prototype,"menuOpen",void 0),vi([q({type:String})],ha.prototype,"helper",void 0),vi([q({type:Boolean})],ha.prototype,"validateOnInitialRender",void 0),vi([q({type:String})],ha.prototype,"validationMessage",void 0),vi([q({type:Boolean})],ha.prototype,"required",void 0),vi([q({type:Boolean})],ha.prototype,"naturalMenuWidth",void 0),vi([q({type:Boolean})],ha.prototype,"isUiValid",void 0),vi([te({capture:!0})],ha.prototype,"handleTypeahead",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ua=re`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-select{min-width:200px;display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0,0,0,.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0,0,0,.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0,0,0,.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0,0,0,.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.38)}@media screen and (-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item,.mdc-select .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item__graphic,.mdc-select .mdc-select__menu .mdc-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:100%;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);box-sizing:border-box;width:auto;flex-grow:1;height:28px;border:none;outline:none;padding:0;white-space:nowrap;appearance:none;pointer-events:none;overflow:hidden;background-color:transparent;color:inherit}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-list .mdc-list-item--selected,.mdc-select__menu .mdc-list .mdc-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__graphic,.mdc-select__menu .mdc-list .mdc-list-item--activated .mdc-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42)}.mdc-select--filled:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0,0,0,.87)}.mdc-select__anchor:hover .mdc-select__ripple::before{opacity:.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:.12}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover .mdc-list-item__ripple::before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc(48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px))}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38));--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let fa=class extends ha{};fa.styles=ua,fa=vi([Y("mwc-select")],fa);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ga={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},ba={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function _a(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var xa=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),va={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",DISABLE_TOUCH_ACTION:"mdc-slider--disable-touch-action"},ya={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},wa={PAGE_FACTOR:4},ka="undefined"!=typeof window,Ea=ka&&!!window.PointerEvent,Ca=Ea?["pointerdown"]:["mousedown","touchstart"],Aa=Ea?["pointerup"]:["mouseup","touchend"],Sa={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},Ta="ArrowDown",Ia="ArrowLeft",Ra="ArrowRight",Oa="ArrowUp",La="End",Na="Home",Fa="PageDown",za="PageUp",Pa=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.savedTabIndex_=NaN,o.active_=!1,o.inTransit_=!1,o.isDiscrete_=!1,o.hasTrackMarker_=!1,o.handlingThumbTargetEvt_=!1,o.min_=0,o.max_=100,o.step_=0,o.value_=0,o.disabled_=!1,o.preventFocusState_=!1,o.thumbContainerPointerHandler_=function(){return o.handlingThumbTargetEvt_=!0},o.interactionStartHandler_=function(e){return o.handleDown_(e)},o.keydownHandler_=function(e){return o.handleKeydown_(e)},o.focusHandler_=function(){return o.handleFocus_()},o.blurHandler_=function(){return o.handleBlur_()},o.resizeHandler_=function(){return o.layout()},o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return va},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ya},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return wa},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter.hasClass(va.IS_DISCRETE),this.hasTrackMarker_=this.adapter.hasClass(va.HAS_TRACK_MARKER),Ca.forEach((function(t){e.adapter.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),Ea&&this.adapter.addClass(va.DISABLE_TOUCH_ACTION),this.adapter.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_),this.adapter.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},t.prototype.destroy=function(){var e=this;Ca.forEach((function(t){e.adapter.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(e){this.setValue_(e,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(ya.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(ya.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(va.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter.getTabIndex(),this.adapter.setAttribute(ya.ARIA_DISABLED,"true"),this.adapter.removeAttribute("tabindex")):(this.adapter.removeAttribute(ya.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(e){t.handleMove_(e)},o=Sa[e.type],n=function(){t.handleUp_(),t.adapter.deregisterBodyInteractionHandler(o,i),Aa.forEach((function(e){return t.adapter.deregisterBodyInteractionHandler(e,n)}))};this.adapter.registerBodyInteractionHandler(o,i),Aa.forEach((function(e){return t.adapter.registerBodyInteractionHandler(e,n)})),this.setValueFromEvt_(e)}},t.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter.notifyChange()},t.prototype.getClientX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].clientX:e.clientX},t.prototype.setValueFromEvt_=function(e){var t=this.getClientX_(e),i=this.computeValueFromClientX_(t);this.setValue_(i,!0)},t.prototype.computeValueFromClientX_=function(e){var t=this.max_,i=this.min_,o=(e-this.rect_.left)/this.rect_.width;return this.adapter.isRTL()&&(o=1-o),i+o*(t-i)},t.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),i=this.getValueForKeyId_(t);isNaN(i)||(e.preventDefault(),this.adapter.addClass(va.FOCUS),this.setValue_(i,!0),this.adapter.notifyChange())},t.prototype.getKeyId_=function(e){return e.key===Ia||37===e.keyCode?Ia:e.key===Ra||39===e.keyCode?Ra:e.key===Oa||38===e.keyCode?Oa:e.key===Ta||40===e.keyCode?Ta:e.key===Na||36===e.keyCode?Na:e.key===La||35===e.keyCode?La:e.key===za||33===e.keyCode?za:e.key===Fa||34===e.keyCode?Fa:""},t.prototype.getValueForKeyId_=function(e){var t=this.max_,i=this.min_,o=this.step_||(t-i)/100;switch(this.adapter.isRTL()&&(e===Ia||e===Ra)&&(o=-o),e){case Ia:case Ta:return this.value_-o;case Ra:case Oa:return this.value_+o;case Na:return this.min_;case La:return this.max_;case za:return this.value_+o*wa.PAGE_FACTOR;case Fa:return this.value_-o*wa.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter.addClass(va.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter.removeClass(va.FOCUS)},t.prototype.setValue_=function(e,t,i){if(void 0===i&&(i=!1),e!==this.value_||i){var o=this.min_,n=this.max_,r=e===o||e===n;this.step_&&!r&&(e=this.quantize_(e)),e<o?e=o:e>n&&(e=n),e=e||0,this.value_=e,this.adapter.setAttribute(ya.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter.notifyInput(),this.isDiscrete_&&this.adapter.setMarkerValue(e))}},t.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,i=this.min_,o=(this.value_-i)/(t-i),n=o*this.rect_.width;this.adapter.isRTL()&&(n=this.rect_.width-n);var r=ka?function(e,t){if(_a(e)&&t in ga){var i=e.document.createElement("div"),o=ga[t],n=o.standard,r=o.prefixed;return n in i.style?n:r}return t}(window,"transform"):"transform",a=ka?function(e,t){if(_a(e)&&t in ba){var i=e.document.createElement("div"),o=ba[t],n=o.standard,r=o.prefixed;return o.cssProperty in i.style?n:r}return t}(window,"transitionend"):"transitionend";if(this.inTransit_){var d=function(){e.setInTransit_(!1),e.adapter.deregisterThumbContainerInteractionHandler(a,d)};this.adapter.registerThumbContainerInteractionHandler(a,d)}requestAnimationFrame((function(){e.adapter.setThumbContainerStyleProperty(r,"translateX("+n+"px) translateX(-50%)"),e.adapter.setTrackStyleProperty(r,"scaleX("+o+")")}))},t.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(va.ACTIVE,this.active_)},t.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(va.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(e,t){t?this.adapter.addClass(e):this.adapter.removeClass(e)},t}(xa);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Da extends uo{constructor(){super(...arguments),this.mdcFoundationClass=Pa,this.min=0,this.max=100,this._value=0,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}set value(e){this.mdcFoundation&&this.mdcFoundation.setValue(e),this._value=e,this.requestUpdate("value",e)}get value(){return this.mdcFoundation?this.mdcFoundation.getValue():this._value}render(){const e=0!==this.step,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=P`
        <div
            class="mdc-slider__track-marker-container"
            style="${ro(this.trackMarkerContainerStyles)}">
        </div>`);let o="";return this.pin&&(o=P`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),P`
      <div class="mdc-slider ${$i(t)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${ro(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${ro(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${o}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}updated(e){const t=e.has("min"),i=e.has("max");t&&i?this.max<this.mdcFoundation.getMin()?(this.mdcFoundation.setMin(this.min),this.mdcFoundation.setMax(this.max)):(this.mdcFoundation.setMax(this.max),this.mdcFoundation.setMin(this.min)):t?this.mdcFoundation.setMin(this.min):i&&this.mdcFoundation.setMax(this.max),super.updated(e)}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{getAttribute:e=>this.mdcRoot.getAttribute(e),setAttribute:(e,t)=>this.mdcRoot.setAttribute(e,t),removeAttribute:e=>this.mdcRoot.removeAttribute(e),computeBoundingRect:()=>{const e=this.mdcRoot.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left+window.pageXOffset,right:e.right,top:e.top,width:e.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(e,t)=>{const i="touchstart"===e?Ro():void 0;this.mdcRoot.addEventListener(e,t,i)},deregisterInteractionHandler:(e,t)=>this.mdcRoot.removeEventListener(e,t),registerThumbContainerInteractionHandler:(e,t)=>{const i="touchstart"===e?Ro():void 0;this.thumbContainer.addEventListener(e,t,i)},deregisterThumbContainerInteractionHandler:(e,t)=>this.thumbContainer.removeEventListener(e,t),registerBodyInteractionHandler:(e,t)=>document.body.addEventListener(e,t),deregisterBodyInteractionHandler:(e,t)=>document.body.removeEventListener(e,t),registerResizeHandler:e=>window.addEventListener("resize",e,Ro()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),notifyInput:()=>{const e=this.mdcFoundation.getValue();e!==this._value&&(this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(e,t)=>{this.thumbContainerStyles[e]=t,this.requestUpdate()},setTrackStyleProperty:(e,t)=>{this.trackStyles[e]=t,this.requestUpdate()},setMarkerValue:e=>this.pinMarkerText=e.toLocaleString(),setTrackMarkers:(e,t,i)=>{const o=e.toLocaleString(),n=`linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${o})`}) 100% repeat-x`}`;this.trackMarkerContainerStyles.background=n,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction})}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}async firstUpdated(){await super.firstUpdated(),this.mdcFoundation.setValue(this._value)}layout(){this.mdcFoundation.layout()}}vi([Q(".mdc-slider")],Da.prototype,"mdcRoot",void 0),vi([Q(".mdc-slider")],Da.prototype,"formElement",void 0),vi([Q(".mdc-slider__thumb-container")],Da.prototype,"thumbContainer",void 0),vi([Q(".mdc-slider__pin-value-marker")],Da.prototype,"pinMarker",void 0),vi([q({type:Number})],Da.prototype,"min",void 0),vi([q({type:Number})],Da.prototype,"max",void 0),vi([q({type:Number})],Da.prototype,"value",null),vi([q({type:Number}),Oo((function(e,t){0!==t!==(0!==e)&&this.resetFoundation(),this.mdcFoundation.setStep(e)}))],Da.prototype,"step",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){this.mdcFoundation.setDisabled(e)}))],Da.prototype,"disabled",void 0),vi([q({type:Boolean,reflect:!0})],Da.prototype,"pin",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(){this.mdcFoundation.setupTrackMarker()}))],Da.prototype,"markers",void 0),vi([q({type:String})],Da.prototype,"pinMarkerText",void 0),vi([q({type:Object})],Da.prototype,"trackMarkerContainerStyles",void 0),vi([q({type:Object})],Da.prototype,"thumbContainerStyles",void 0),vi([q({type:Object})],Da.prototype,"trackStyles",void 0),vi([te({capture:!0,passive:!0})],Da.prototype,"layout",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ma=re`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let Ba=class extends Da{};Ba.styles=Ma,Ba=vi([Y("mwc-slider")],Ba);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ha={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},$a={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},Va={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},Ua=Ha.OPENING,ja=Ha.OPEN,Xa=Ha.CLOSING,Wa=$a.REASON_ACTION,Ya=$a.REASON_DISMISS,Ga=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.autoDismissTimer_=0,o.autoDismissTimeoutMs_=Va.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape_=!0,o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Ha},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return $a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Va},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(Ua),this.adapter.removeClass(ja),this.adapter.removeClass(Xa)},t.prototype.open=function(){var e=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Xa),this.adapter.addClass(Ua),this.adapter.announce(),this.runNextAnimationFrame_((function(){e.adapter.addClass(ja),e.animationTimer_=setTimeout((function(){var t=e.getTimeoutMs();e.handleAnimationTimerEnd_(),e.adapter.notifyOpened(),t!==Va.INDETERMINATE&&(e.autoDismissTimer_=setTimeout((function(){e.close(Ya)}),t))}),Va.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(e),this.adapter.addClass(Ha.CLOSING),this.adapter.removeClass(Ha.OPEN),this.adapter.removeClass(Ha.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter.notifyClosed(e)}),Va.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},t.prototype.setTimeoutMs=function(e){var t=Va.MIN_AUTO_DISMISS_TIMEOUT_MS,i=Va.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(e===Va.INDETERMINATE||e<=i&&e>=t))throw new Error("\n        timeoutMs must be an integer in the range "+t+"–"+i+"\n        (or "+Va.INDETERMINATE+" to disable), but got '"+e+"'");this.autoDismissTimeoutMs_=e},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},t.prototype.setCloseOnEscape=function(e){this.closeOnEscape_=e},t.prototype.handleKeyDown=function(e){("Escape"===e.key||27===e.keyCode)&&this.getCloseOnEscape()&&this.close(Ya)},t.prototype.handleActionButtonClick=function(e){this.close(Wa)},t.prototype.handleActionIconClick=function(e){this.close(Ya)},t.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},t.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(Ha.OPENING),this.adapter.removeClass(Ha.CLOSING)},t.prototype.runNextAnimationFrame_=function(e){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(e,0)}))},t}(Ci);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const{ARIA_LIVE_LABEL_TEXT_ATTR:qa}=Ga.strings,{ARIA_LIVE_DELAY_MS:Ka}=Ga.numbers,Qa=new WeakMap,Ja=u((e,t)=>i=>{if(!t)return;let o=Qa.get(i);if(void 0===o){const t=document.createElement("div");return t.setAttribute("class","mdc-snackbar__label"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.textContent=e,i.endNode.parentNode.insertBefore(t,i.endNode),o={labelEl:t,timerId:null},void Qa.set(i,o)}const n=o,r=n.labelEl;r.setAttribute("aria-live","off"),r.textContent="",r.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',r.setAttribute(qa,e),null!==n.timerId&&clearTimeout(n.timerId),n.timerId=window.setTimeout(()=>{n.timerId=null,r.setAttribute("aria-live","polite"),r.removeAttribute(qa),r.textContent=e},Ka)}),{OPENING_EVENT:Za,OPENED_EVENT:ed,CLOSING_EVENT:td,CLOSED_EVENT:id}=Ga.strings;class od extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Ga,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const e={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return P`
      <div class="mdc-snackbar ${$i(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${Ja(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{announce:()=>{},notifyClosed:e=>{this.dispatchEvent(new CustomEvent(id,{bubbles:!0,cancelable:!0,detail:{reason:e}}))},notifyClosing:e=>{this.open=!1,this.dispatchEvent(new CustomEvent(td,{bubbles:!0,cancelable:!0,detail:{reason:e}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(ed,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(Za,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(e=""){this.reason=e,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(e){this.mdcFoundation.handleKeyDown(e)}_handleActionClick(e){this.mdcFoundation.handleActionButtonClick(e)}_handleDismissClick(e){this.mdcFoundation.handleActionIconClick(e)}}vi([Q(".mdc-snackbar")],od.prototype,"mdcRoot",void 0),vi([Q(".mdc-snackbar__label")],od.prototype,"labelElement",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e){this.mdcFoundation&&(e?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))}))],od.prototype,"open",void 0),vi([Oo((function(e){this.mdcFoundation.setTimeoutMs(e)})),q({type:Number})],od.prototype,"timeoutMs",void 0),vi([Oo((function(e){this.mdcFoundation.setCloseOnEscape(e)})),q({type:Boolean})],od.prototype,"closeOnEscape",void 0),vi([q({type:String})],od.prototype,"labelText",void 0),vi([q({type:Boolean})],od.prototype,"stacked",void 0),vi([q({type:Boolean})],od.prototype,"leading",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const nd=re`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let rd=class extends od{};rd.styles=nd,rd=vi([Y("mwc-snackbar")],rd);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ad={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},dd={CONTENT_SELECTOR:".mdc-tab-indicator__content"},cd=function(e){function t(i){return e.call(this,xi(xi({},t.defaultAdapter),i))||this}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return ad},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return dd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!0,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(Ci),sd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _i(t,e),t.prototype.activate=function(){this.adapter.addClass(cd.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(cd.cssClasses.ACTIVE)},t}(cd),ld=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _i(t,e),t.prototype.activate=function(e){if(e){var t=this.computeContentClientRect(),i=e.width/t.width,o=e.left-t.left;this.adapter.addClass(cd.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+o+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(cd.cssClasses.NO_TRANSITION),this.adapter.addClass(cd.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(cd.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(cd.cssClasses.ACTIVE)},t}(cd);class md extends Mi{constructor(){super(...arguments),this.icon="",this.fade=!1}get mdcFoundationClass(){return this.fade?sd:ld}render(){const e={"mdc-tab-indicator__content--icon":this.icon,"material-icons":this.icon,"mdc-tab-indicator__content--underline":!this.icon};return P`
      <span class="mdc-tab-indicator ${$i({"mdc-tab-indicator--fade":this.fade})}">
        <span class="mdc-tab-indicator__content ${$i(e)}">${this.icon}</span>
      </span>
      `}updated(e){e.has("fade")&&this.createFoundation()}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{computeContentClientRect:()=>this.contentElement.getBoundingClientRect(),setContentStyleProperty:(e,t)=>this.contentElement.style.setProperty(e,t)})}computeContentClientRect(){return this.mdcFoundation.computeContentClientRect()}activate(e){this.mdcFoundation.activate(e)}deactivate(){this.mdcFoundation.deactivate()}}vi([Q(".mdc-tab-indicator")],md.prototype,"mdcRoot",void 0),vi([Q(".mdc-tab-indicator__content")],md.prototype,"contentElement",void 0),vi([q()],md.prototype,"icon",void 0),vi([q({type:Boolean})],md.prototype,"fade",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const pd=re`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;let hd=class extends md{};hd.styles=pd,hd=vi([Y("mwc-tab-indicator")],hd);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ud={ACTIVE:"mdc-tab--active"},fd={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},gd=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.focusOnActivate_=!0,o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return ud},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return fd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!0,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(ud.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate_=e},t.prototype.activate=function(e){this.adapter.addClass(ud.ACTIVE),this.adapter.setAttr(fd.ARIA_SELECTED,"true"),this.adapter.setAttr(fd.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate_&&this.adapter.focus()},t.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(ud.ACTIVE),this.adapter.setAttr(fd.ARIA_SELECTED,"false"),this.adapter.setAttr(fd.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),t=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),o=this.adapter.getContentOffsetLeft();return{contentLeft:t+o,contentRight:t+o+i,rootLeft:t,rootRight:t+e}},t}(Ci);let bd=0;class _d extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=gd,this.label="",this.icon="",this.hasImageIcon=!1,this.isFadingIndicator=!1,this.minWidth=!1,this.isMinWidthIndicator=!1,this.indicatorIcon="",this.stacked=!1,this.focusOnActivate=!0,this._active=!1,this.initFocus=!1}get active(){return this._active}_handleClick(){this.mdcFoundation.handleClick()}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}connectedCallback(){this.dir=document.dir,super.connectedCallback()}firstUpdated(){super.firstUpdated(),this.id=this.id||`mdc-tab-${++bd}`}render(){const e={"mdc-tab--min-width":this.minWidth,"mdc-tab--stacked":this.stacked};let t=P``;(this.hasImageIcon||this.icon)&&(t=P`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`);let i=P``;this.label&&(i=P`
        <span class="mdc-tab__text-label">${this.label}</span>`);const o=rn({interactionNode:this,unbounded:!1});return P`
      <button
        @click="${this._handleClick}"
        class="mdc-tab ${$i(e)}"
        role="tab"
        aria-selected="false"
        tabindex="-1">
        <span class="mdc-tab__content">
          ${t}
          ${i}
          ${this.isMinWidthIndicator?this.renderIndicator():""}
        </span>
        ${this.isMinWidthIndicator?"":this.renderIndicator()}
        <span class="mdc-tab__ripple" .ripple="${o}"></span>
      </button>`}renderIndicator(){return P`<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{setAttr:(e,t)=>this.mdcRoot.setAttribute(e,t),activateIndicator:e=>this._tabIndicator.activate(e),deactivateIndicator:()=>this._tabIndicator.deactivate(),notifyInteracted:()=>this.dispatchEvent(new CustomEvent(gd.strings.INTERACTED_EVENT,{detail:{tabId:this.id},bubbles:!0,composed:!0,cancelable:!0})),getOffsetLeft:()=>this.offsetLeft,getOffsetWidth:()=>this.mdcRoot.offsetWidth,getContentOffsetLeft:()=>this._contentElement.offsetLeft,getContentOffsetWidth:()=>this._contentElement.offsetWidth,focus:()=>{this.initFocus?this.initFocus=!1:this.mdcRoot.focus()}})}activate(e){e||(this.initFocus=!0),this.mdcFoundation.activate(e),this.setActive(this.mdcFoundation.isActive())}deactivate(){this.mdcFoundation.deactivate(),this.setActive(this.mdcFoundation.isActive())}setActive(e){const t=this.active;t!==e&&(this._active=e,this.requestUpdate("active",t))}computeDimensions(){return this.mdcFoundation.computeDimensions()}computeIndicatorClientRect(){return this.tabIndicator.computeContentClientRect()}focus(){this.mdcRoot.focus()}}vi([Q(".mdc-tab")],_d.prototype,"mdcRoot",void 0),vi([Q("mwc-tab-indicator")],_d.prototype,"tabIndicator",void 0),vi([q()],_d.prototype,"label",void 0),vi([q()],_d.prototype,"icon",void 0),vi([q({type:Boolean})],_d.prototype,"hasImageIcon",void 0),vi([q({type:Boolean})],_d.prototype,"isFadingIndicator",void 0),vi([q({type:Boolean})],_d.prototype,"minWidth",void 0),vi([q({type:Boolean})],_d.prototype,"isMinWidthIndicator",void 0),vi([q({type:Boolean,reflect:!0,attribute:"active"})],_d.prototype,"active",null),vi([q()],_d.prototype,"indicatorIcon",void 0),vi([q({type:Boolean})],_d.prototype,"stacked",void 0),vi([Oo((async function(e){await this.updateComplete,this.mdcFoundation.setFocusOnActivate(e)})),q({type:Boolean})],_d.prototype,"focusOnActivate",void 0),vi([Q("mwc-tab-indicator")],_d.prototype,"_tabIndicator",void 0),vi([Q(".mdc-tab__content")],_d.prototype,"_contentElement",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const xd=re`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding-right:24px;padding-left:24px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0,0,0,.6)}.mdc-tab .mdc-tab__icon{color:rgba(0,0,0,.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab__ripple{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple::before,.mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-tab__ripple.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple::before,.mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab__ripple:hover::before{opacity:.04}.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;let vd=class extends _d{};vd.styles=xd,vd=vi([Y("mwc-tab")],vd);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var yd={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},wd={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},kd=function(e){this.adapter=e},Ed=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _i(t,e),t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),t=this.calculateScrollEdges_().right;return Math.round(t-e)},t.prototype.scrollToRTL=function(e){var t=this.calculateScrollEdges_(),i=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue_(t.right-e);return{finalScrollPosition:o,scrollDelta:o-i}},t.prototype.incrementScrollRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t-e);return{finalScrollPosition:i,scrollDelta:i-t}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},t.prototype.clampScrollValue_=function(e){var t=this.calculateScrollEdges_();return Math.min(Math.max(t.left,e),t.right)},t}(kd),Cd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _i(t,e),t.prototype.getScrollPositionRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},t.prototype.scrollToRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(-e);return{finalScrollPosition:i,scrollDelta:i-t}},t.prototype.incrementScrollRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t-e);return{finalScrollPosition:i,scrollDelta:i-t}},t.prototype.getAnimatingScrollPosition=function(e,t){return e-t},t.prototype.calculateScrollEdges_=function(){var e=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-e,right:0}},t.prototype.clampScrollValue_=function(e){var t=this.calculateScrollEdges_();return Math.max(Math.min(t.right,e),t.left)},t}(kd),Ad=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _i(t,e),t.prototype.getScrollPositionRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},t.prototype.scrollToRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e);return{finalScrollPosition:i,scrollDelta:t-i}},t.prototype.incrementScrollRTL=function(e){var t=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t+e);return{finalScrollPosition:i,scrollDelta:t-i}},t.prototype.getAnimatingScrollPosition=function(e,t){return e+t},t.prototype.calculateScrollEdges_=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},t.prototype.clampScrollValue_=function(e){var t=this.calculateScrollEdges_();return Math.min(Math.max(t.right,e),t.left)},t}(kd),Sd=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.isAnimating_=!1,o}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return yd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return wd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var e=this.calculateCurrentTranslateX_();return this.adapter.getScrollAreaScrollLeft()-e},t.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},t.prototype.handleTransitionEnd=function(e){var i=e.target;this.isAnimating_&&this.adapter.eventTargetMatchesSelector(i,t.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){0!==e&&this.animate_(this.getIncrementScrollOperation_(e))},t.prototype.incrementScrollImmediate=function(e){if(0!==e){var t=this.getIncrementScrollOperation_(e);0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL_())return this.scrollToRTL_(e);this.scrollTo_(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},t.prototype.calculateCurrentTranslateX_=function(){var e=this.adapter.getScrollContentStyleValue("transform");if("none"===e)return 0;var t=/\((.+?)\)/.exec(e);if(!t)return 0;var i=function(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var o,n,r=i.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return a}(t[1].split(","),6),o=(i[0],i[1],i[2],i[3],i[4]);i[5];return parseFloat(o)},t.prototype.clampScrollValue_=function(e){var t=this.calculateScrollEdges_();return Math.min(Math.max(t.left,e),t.right)},t.prototype.computeCurrentScrollPositionRTL_=function(){var e=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},t.prototype.scrollTo_=function(e){var t=this.getScrollPosition(),i=this.clampScrollValue_(e),o=i-t;this.animate_({finalScrollPosition:i,scrollDelta:o})},t.prototype.scrollToRTL_=function(e){var t=this.getRTLScroller().scrollToRTL(e);this.animate_(t)},t.prototype.getIncrementScrollOperation_=function(e){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(e);var t=this.getScrollPosition(),i=e+t,o=this.clampScrollValue_(i);return{finalScrollPosition:o,scrollDelta:o-t}},t.prototype.animate_=function(e){var i=this;0!==e.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){i.adapter.addClass(t.cssClasses.ANIMATING),i.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating_=!0)},t.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var e=this.getAnimatingScrollPosition_();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition_=function(){var e=this.calculateCurrentTranslateX_(),t=this.adapter.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(t,e):t-e},t.prototype.rtlScrollerFactory_=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var t=this.adapter.getScrollAreaScrollLeft();if(t<0)return this.adapter.setScrollAreaScrollLeft(e),new Cd(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),o=this.adapter.computeScrollContentClientRect(),n=Math.round(o.right-i.right);return this.adapter.setScrollAreaScrollLeft(e),n===t?new Ad(this.adapter):new Ed(this.adapter)},t.prototype.isRTL_=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},t}(Ci);class Td extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=Sd,this._scrollbarHeight=-1}_handleInteraction(){this.mdcFoundation.handleInteraction()}_handleTransitionEnd(e){this.mdcFoundation.handleTransitionEnd(e)}render(){return P`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `}createAdapter(){return Object.assign(Object.assign({},Oi(this.mdcRoot)),{eventTargetMatchesSelector:(e,t)=>Ti(e,t),addScrollAreaClass:e=>this.scrollAreaElement.classList.add(e),setScrollAreaStyleProperty:(e,t)=>this.scrollAreaElement.style.setProperty(e,t),setScrollContentStyleProperty:(e,t)=>this.scrollContentElement.style.setProperty(e,t),getScrollContentStyleValue:e=>window.getComputedStyle(this.scrollContentElement).getPropertyValue(e),setScrollAreaScrollLeft:e=>this.scrollAreaElement.scrollLeft=e,getScrollAreaScrollLeft:()=>this.scrollAreaElement.scrollLeft,getScrollContentOffsetWidth:()=>this.scrollContentElement.offsetWidth,getScrollAreaOffsetWidth:()=>this.scrollAreaElement.offsetWidth,computeScrollAreaClientRect:()=>this.scrollAreaElement.getBoundingClientRect(),computeScrollContentClientRect:()=>this.scrollContentElement.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(-1===this._scrollbarHeight&&(this.scrollAreaElement.style.overflowX="scroll",this._scrollbarHeight=this.scrollAreaElement.offsetHeight-this.scrollAreaElement.clientHeight,this.scrollAreaElement.style.overflowX=""),this._scrollbarHeight)})}getScrollPosition(){return this.mdcFoundation.getScrollPosition()}getScrollContentWidth(){return this.scrollContentElement.offsetWidth}incrementScrollPosition(e){this.mdcFoundation.incrementScroll(e)}scrollToPosition(e){this.mdcFoundation.scrollTo(e)}}vi([Q(".mdc-tab-scroller")],Td.prototype,"mdcRoot",void 0),vi([Q(".mdc-tab-scroller__scroll-area")],Td.prototype,"scrollAreaElement",void 0),vi([Q(".mdc-tab-scroller__scroll-content")],Td.prototype,"scrollContentElement",void 0),vi([te({passive:!0})],Td.prototype,"_handleInteraction",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Id=re`.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`;let Rd=class extends Td{};Rd.styles=Id,Rd=vi([Y("mwc-tab-scroller")],Rd);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Od={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Ld={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},Nd=new Set;Nd.add(Od.ARROW_LEFT_KEY),Nd.add(Od.ARROW_RIGHT_KEY),Nd.add(Od.END_KEY),Nd.add(Od.HOME_KEY),Nd.add(Od.ENTER_KEY),Nd.add(Od.SPACE_KEY);var Fd=new Map;Fd.set(Ld.ARROW_LEFT_KEYCODE,Od.ARROW_LEFT_KEY),Fd.set(Ld.ARROW_RIGHT_KEYCODE,Od.ARROW_RIGHT_KEY),Fd.set(Ld.END_KEYCODE,Od.END_KEY),Fd.set(Ld.HOME_KEYCODE,Od.HOME_KEY),Fd.set(Ld.ENTER_KEYCODE,Od.ENTER_KEY),Fd.set(Ld.SPACE_KEYCODE,Od.SPACE_KEY);var zd=function(e){function t(i){var o=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return o.useAutomaticActivation_=!1,o}return _i(t,e),Object.defineProperty(t,"strings",{get:function(){return Od},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ld},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation_=e},t.prototype.activateTab=function(e){var t,i=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange_(e)&&e!==i&&(-1!==i&&(this.adapter.deactivateTabAtIndex(i),t=this.adapter.getTabIndicatorClientRectAtIndex(i)),this.adapter.activateTabAtIndex(e,t),this.scrollIntoView(e),this.adapter.notifyTabActivated(e))},t.prototype.handleKeyDown=function(e){var t=this.getKeyFromEvent_(e);if(void 0!==t)if(this.isActivationKey_(t)||e.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(t))return;var i=this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(),t);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var o=this.adapter.getFocusedTabIndex();if(this.isActivationKey_(t))this.adapter.setActiveTab(o);else{i=this.determineTargetFromKey_(o,t);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(this.indexIsInRange_(e))return 0===e?this.adapter.scrollTo(0):e===this.adapter.getTabListLength()-1?this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(e):void this.scrollIntoView_(e)},t.prototype.determineTargetFromKey_=function(e,t){var i=this.isRTL_(),o=this.adapter.getTabListLength()-1,n=e;return t===Od.END_KEY?n=o:t===Od.ARROW_LEFT_KEY&&!i||t===Od.ARROW_RIGHT_KEY&&i?n-=1:t===Od.ARROW_RIGHT_KEY&&!i||t===Od.ARROW_LEFT_KEY&&i?n+=1:n=0,n<0?n=o:n>o&&(n=0),n},t.prototype.calculateScrollIncrement_=function(e,t,i,o){var n=this.adapter.getTabDimensionsAtIndex(t),r=n.contentLeft-i-o,a=n.contentRight-i-Ld.EXTRA_SCROLL_AMOUNT,d=r+Ld.EXTRA_SCROLL_AMOUNT;return t<e?Math.min(a,0):Math.max(d,0)},t.prototype.calculateScrollIncrementRTL_=function(e,t,i,o,n){var r=this.adapter.getTabDimensionsAtIndex(t),a=n-r.contentLeft-i,d=n-r.contentRight-i-o+Ld.EXTRA_SCROLL_AMOUNT,c=a-Ld.EXTRA_SCROLL_AMOUNT;return t>e?Math.max(d,0):Math.min(c,0)},t.prototype.findAdjacentTabIndexClosestToEdge_=function(e,t,i,o){var n=t.rootLeft-i,r=t.rootRight-i-o,a=n+r;return n<0||a<0?e-1:r>0||a>0?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(e,t,i,o,n){var r=n-t.rootLeft-o-i,a=n-t.rootRight-i,d=r+a;return r>0||d>0?e+1:a<0||d<0?e-1:-1},t.prototype.getKeyFromEvent_=function(e){return Nd.has(e.key)?e.key:Fd.get(e.keyCode)},t.prototype.isActivationKey_=function(e){return e===Od.SPACE_KEY||e===Od.ENTER_KEY},t.prototype.indexIsInRange_=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL_=function(){return this.adapter.isRTL()},t.prototype.scrollIntoView_=function(e){var t=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(e),n=this.findAdjacentTabIndexClosestToEdge_(e,o,t,i);if(this.indexIsInRange_(n)){var r=this.calculateScrollIncrement_(e,n,t,i);this.adapter.incrementScroll(r)}},t.prototype.scrollIntoViewRTL_=function(e){var t=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(e),n=this.adapter.getScrollContentWidth(),r=this.findAdjacentTabIndexClosestToEdgeRTL_(e,o,t,i,n);if(this.indexIsInRange_(r)){var a=this.calculateScrollIncrementRTL_(e,r,t,i,n);this.adapter.incrementScroll(a)}},t}(Ci);class Pd extends Mi{constructor(){super(...arguments),this.mdcFoundationClass=zd,this.activeIndex=0,this._previousActiveIndex=-1}_handleTabInteraction(e){this.mdcFoundation.handleTabInteraction(e)}_handleKeydown(e){this.mdcFoundation.handleKeyDown(e)}render(){return P`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `}_getTabs(){return this.tabsSlot.assignedNodes({flatten:!0}).filter(e=>e instanceof vd)}_getTab(e){return this._getTabs()[e]}createAdapter(){return{scrollTo:e=>this.scrollerElement.scrollToPosition(e),incrementScroll:e=>this.scrollerElement.incrementScrollPosition(e),getScrollPosition:()=>this.scrollerElement.getScrollPosition(),getScrollContentWidth:()=>this.scrollerElement.getScrollContentWidth(),getOffsetWidth:()=>this.mdcRoot.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.mdcRoot).getPropertyValue("direction"),setActiveTab:e=>this.mdcFoundation.activateTab(e),activateTabAtIndex:(e,t)=>{const i=this._getTab(e);void 0!==i&&i.activate(t),this._previousActiveIndex=e},deactivateTabAtIndex:e=>{const t=this._getTab(e);void 0!==t&&t.deactivate()},focusTabAtIndex:e=>{const t=this._getTab(e);void 0!==t&&t.focus()},getTabIndicatorClientRectAtIndex:e=>{const t=this._getTab(e);return void 0!==t?t.computeIndicatorClientRect():new DOMRect},getTabDimensionsAtIndex:e=>{const t=this._getTab(e);return void 0!==t?t.computeDimensions():{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>this._previousActiveIndex,getFocusedTabIndex:()=>{const e=this._getTabs(),t=this.getRootNode().activeElement;return e.indexOf(t)},getIndexOfTabById:e=>{const t=this._getTabs();for(let i=0;i<t.length;i++)if(t[i].id===e)return i;return-1},getTabListLength:()=>this._getTabs().length,notifyTabActivated:e=>{this.activeIndex=e,this.dispatchEvent(new CustomEvent(zd.strings.TAB_ACTIVATED_EVENT,{detail:{index:e},bubbles:!0,cancelable:!0}))}}}firstUpdated(){}_getUpdateComplete(){return super._getUpdateComplete().then(()=>this.scrollerElement.updateComplete).then(()=>{void 0===this.mdcFoundation&&this.createFoundation()})}scrollIndexIntoView(e){this.mdcFoundation.scrollIntoView(e)}}vi([Q(".mdc-tab-bar")],Pd.prototype,"mdcRoot",void 0),vi([Q("mwc-tab-scroller")],Pd.prototype,"scrollerElement",void 0),vi([Q("slot")],Pd.prototype,"tabsSlot",void 0),vi([Oo((async function(){await this.updateComplete,this.activeIndex!==this._previousActiveIndex&&this.mdcFoundation.activateTab(this.activeIndex)})),q({type:Number})],Pd.prototype,"activeIndex",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Dd=re`.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`;let Md=class extends Pd{};Md.styles=Dd,Md=vi([Y("mwc-tab-bar")],Md);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bd={ARIA_CONTROLS:"aria-controls",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},Hd={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},$d={LABEL_SCALE:.75},Vd=["pattern","min","max","required","step","minlength","maxlength"],Ud=["color","date","datetime-local","month","range","time","week"],jd=["mousedown","touchstart"],Xd=["click","keydown"],Wd=function(e){function t(i,o){void 0===o&&(o={});var n=e.call(this,xi(xi({},t.defaultAdapter),i))||this;return n.isFocused_=!1,n.receivedUserInput_=!1,n.isValid_=!0,n.useNativeValidation_=!0,n.helperText_=o.helperText,n.characterCounter_=o.characterCounter,n.leadingIcon_=o.leadingIcon,n.trailingIcon_=o.trailingIcon,n.inputFocusHandler_=function(){return n.activateFocus()},n.inputBlurHandler_=function(){return n.deactivateFocus()},n.inputInputHandler_=function(){return n.handleInput()},n.setPointerXOffset_=function(e){return n.setTransformOrigin(e)},n.textFieldInteractionHandler_=function(){return n.handleTextFieldInteraction()},n.validationAttributeChangeHandler_=function(e){return n.handleValidationAttributeChange(e)},n}return _i(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Hd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Bd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return $d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldAlwaysFloat_",{get:function(){var e=this.getNativeInput_().type;return Ud.indexOf(e)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.adapter.hasLabel()&&this.getNativeInput_().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler_():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating_(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler_),jd.forEach((function(t){e.adapter.registerInputInteractionHandler(t,e.setPointerXOffset_)})),Xd.forEach((function(t){e.adapter.registerTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},t.prototype.destroy=function(){var e=this;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler_),jd.forEach((function(t){e.adapter.deregisterInputInteractionHandler(t,e.setPointerXOffset_)})),Xd.forEach((function(t){e.adapter.deregisterTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)})),this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)},t.prototype.handleTextFieldInteraction=function(){var e=this.adapter.getNativeInput();e&&e.disabled||(this.receivedUserInput_=!0)},t.prototype.handleValidationAttributeChange=function(e){var t=this;e.some((function(e){return Vd.indexOf(e)>-1&&(t.styleValidity_(!0),t.adapter.setLabelRequired(t.getNativeInput_().required),!0)})),e.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},t.prototype.notchOutline=function(e){if(this.adapter.hasOutline())if(e){var t=this.adapter.getLabelWidth()*$d.LABEL_SCALE;this.adapter.notchOutline(t)}else this.adapter.closeOutline()},t.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},t.prototype.setTransformOrigin=function(e){if(!this.isDisabled()&&!this.adapter.hasOutline()){var t=e.touches,i=t?t[0]:e,o=i.target.getBoundingClientRect(),n=i.clientX-o.left;this.adapter.setLineRippleTransformOrigin(n)}},t.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},t.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},t.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter.deactivateLineRipple();var e=this.isValid();this.styleValidity_(e),this.styleFocused_(this.isFocused_),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},t.prototype.getValue=function(){return this.getNativeInput_().value},t.prototype.setValue=function(e){this.getValue()!==e&&(this.getNativeInput_().value=e),this.setCharacterCounter_(e.length);var t=this.isValid();this.styleValidity_(t),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake))},t.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},t.prototype.setValid=function(e){this.isValid_=e,this.styleValidity_(e);var t=!e&&!this.isFocused_&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(t)},t.prototype.setUseNativeValidation=function(e){this.useNativeValidation_=e},t.prototype.isDisabled=function(){return this.getNativeInput_().disabled},t.prototype.setDisabled=function(e){this.getNativeInput_().disabled=e,this.styleDisabled_(e)},t.prototype.setHelperTextContent=function(e){this.helperText_&&this.helperText_.setContent(e)},t.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(e)},t.prototype.setLeadingIconContent=function(e){this.leadingIcon_&&this.leadingIcon_.setContent(e)},t.prototype.setTrailingIconAriaLabel=function(e){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(e)},t.prototype.setTrailingIconContent=function(e){this.trailingIcon_&&this.trailingIcon_.setContent(e)},t.prototype.setCharacterCounter_=function(e){if(this.characterCounter_){var t=this.getNativeInput_().maxLength;if(-1===t)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(e,t)}},t.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},t.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},t.prototype.styleValidity_=function(e){var i=t.cssClasses.INVALID;e?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText_&&this.helperText_.setValidity(e)},t.prototype.styleFocused_=function(e){var i=t.cssClasses.FOCUSED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.styleDisabled_=function(e){var i=t.cssClasses,o=i.DISABLED,n=i.INVALID;e?(this.adapter.addClass(o),this.adapter.removeClass(n)):this.adapter.removeClass(o),this.leadingIcon_&&this.leadingIcon_.setDisabled(e),this.trailingIcon_&&this.trailingIcon_.setDisabled(e)},t.prototype.styleFloating_=function(e){var i=t.cssClasses.LABEL_FLOATING;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.getNativeInput_=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},t}(Ci);
/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Yd=u(e=>t=>{let i;if(t instanceof R||t instanceof C)throw new Error("The `live` directive is not allowed on text or event bindings");if(t instanceof A)Gd(t.strings),i=t.element.hasAttribute(t.name),t.value=i;else{const{element:o,name:n,strings:r}=t.committer;if(Gd(r),t instanceof T){if(i=o[n],i===e)return}else t instanceof E&&(i=o.getAttribute(n));if(i===String(e))return}t.setValue(e)}),Gd=e=>{if(2!==e.length||""!==e[0]||""!==e[1])throw new Error("`live` bindings can only contain a single expression")},qd=["touchstart","touchmove","scroll","mousewheel"],Kd=(e={})=>{const t={};for(const i in e)t[i]=e[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class Qd extends uo{constructor(){super(...arguments),this.mdcFoundationClass=Wd,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this._validity=Kd(),this._outlineUpdateComplete=null,this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage||this.charCounterVisible}get charCounterVisible(){return this.charCounter&&-1!==this.maxLength}focus(){const e=new CustomEvent("focus");this.formElement.dispatchEvent(e),this.formElement.focus()}blur(){const e=new CustomEvent("blur");this.formElement.dispatchEvent(e),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(e,t,i){this.formElement.setSelectionRange(e,t,i)}update(e){e.has("value")&&"string"!=typeof this.value&&(this.value=`${this.value}`),super.update(e)}render(){const e={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return P`
      <label class="mdc-text-field ${$i(e)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput()}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(this.renderCharCounter())}
    `}updated(e){e.has("value")&&void 0!==e.get("value")&&this.mdcFoundation.setValue(this.value)}renderRipple(){return this.outlined?b:P`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?P`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:b}renderLabel(){return this.label?P`
      <span
          .floatingLabelFoundation=${oa(this.label)}
          id="label">${this.label}</span>
    `:b}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):b}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):b}renderIcon(e,t=!1){return P`<i class="material-icons mdc-text-field__icon ${$i({"mdc-text-field__icon--leading":!t,"mdc-text-field__icon--trailing":t})}">${e}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):b}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):b}renderAffix(e,t=!1){return P`<span class="mdc-text-field__affix ${$i({"mdc-text-field__affix--prefix":!t,"mdc-text-field__affix--suffix":t})}">
        ${e}</span>`}renderInput(){const e=-1===this.minLength?void 0:this.minLength,t=-1===this.maxLength?void 0:this.maxLength,i=this.autocapitalize?this.autocapitalize:void 0;return P`
      <input
          aria-labelledby="label"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Yd(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${go(e)}"
          maxlength="${go(t)}"
          pattern="${go(this.pattern?this.pattern:void 0)}"
          min="${go(""===this.min?void 0:this.min)}"
          max="${go(""===this.max?void 0:this.max)}"
          step="${go(null===this.step?void 0:this.step)}"
          size="${go(null===this.size?void 0:this.size)}"
          name="${go(""===this.name?void 0:this.name)}"
          inputmode="${go(this.inputMode)}"
          autocapitalize="${go(i)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?b:P`
      <span .lineRippleFoundation=${da()}></span>
    `}renderHelperText(e=b){if(!this.shouldRenderHelperText)return b;const t=this.validationMessage&&!this.isUiValid,i={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":t};return P`
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text ${$i(i)}">${t?this.validationMessage:this.helper}</div>
        ${e}
      </div>
    `}renderCharCounter(){if(!this.charCounterVisible)return b;const e=Math.min(this.value.length,this.maxLength);return P`<span class="mdc-text-field-character-counter">${e} / ${this.maxLength}</span>`}onInputBlur(){this.reportValidity()}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.mdcFoundation.setValid(e),this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let i=Kd(t);if(this.validityTransform){const t=this.validityTransform(e,i);i=Object.assign(Object.assign({},i),t),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}handleInputChange(){this.value=this.formElement.value,this.autoValidate&&this.reportValidity()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(e,t)=>this.addEventListener(e,t),deregisterTextFieldInteractionHandler:(e,t)=>this.removeEventListener(e,t),registerValidationAttributeChangeHandler:e=>{const t=new MutationObserver(t=>{e((e=>e.map(e=>e.attributeName).filter(e=>e))(t))});return t.observe(this.formElement,{attributes:!0}),t},deregisterValidationAttributeChangeHandler:e=>e.disconnect()},Oi(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(e,t)=>this.formElement.addEventListener(e,t,{passive:e in qd}),deregisterInputInteractionHandler:(e,t)=>this.formElement.removeEventListener(e,t)}}getLabelAdapterMethods(){return{floatLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(e),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(e),setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:e=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}}}async _getUpdateComplete(){await super._getUpdateComplete(),await this._outlineUpdateComplete}async firstUpdated(){const e=this.outlineElement;e&&(this._outlineUpdateComplete=e.updateComplete,await this._outlineUpdateComplete),super.firstUpdated(),this.validateOnInitialRender&&this.reportValidity()}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const e=this.labelElement;if(!e)return void(this.outlineOpen=!1);const t=!!this.label&&!!this.value;if(e.floatingLabelFoundation.float(t),!this.outlined)return;this.outlineOpen=t,await this.updateComplete;const i=e.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=i)}}vi([Q(".mdc-text-field")],Qd.prototype,"mdcRoot",void 0),vi([Q("input")],Qd.prototype,"formElement",void 0),vi([Q(".mdc-floating-label")],Qd.prototype,"labelElement",void 0),vi([Q(".mdc-line-ripple")],Qd.prototype,"lineRippleElement",void 0),vi([Q("mwc-notched-outline")],Qd.prototype,"outlineElement",void 0),vi([Q(".mdc-notched-outline__notch")],Qd.prototype,"notchElement",void 0),vi([q({type:String})],Qd.prototype,"value",void 0),vi([q({type:String})],Qd.prototype,"type",void 0),vi([q({type:String})],Qd.prototype,"placeholder",void 0),vi([q({type:String}),Oo((function(e,t){void 0!==t&&this.label!==t&&this.layout()}))],Qd.prototype,"label",void 0),vi([q({type:String})],Qd.prototype,"icon",void 0),vi([q({type:String})],Qd.prototype,"iconTrailing",void 0),vi([q({type:Boolean,reflect:!0})],Qd.prototype,"disabled",void 0),vi([q({type:Boolean})],Qd.prototype,"required",void 0),vi([q({type:Number})],Qd.prototype,"minLength",void 0),vi([q({type:Number})],Qd.prototype,"maxLength",void 0),vi([q({type:Boolean,reflect:!0}),Oo((function(e,t){void 0!==t&&this.outlined!==t&&this.layout()}))],Qd.prototype,"outlined",void 0),vi([q({type:String})],Qd.prototype,"helper",void 0),vi([q({type:Boolean})],Qd.prototype,"validateOnInitialRender",void 0),vi([q({type:String})],Qd.prototype,"validationMessage",void 0),vi([q({type:Boolean})],Qd.prototype,"autoValidate",void 0),vi([q({type:String})],Qd.prototype,"pattern",void 0),vi([q({type:Number})],Qd.prototype,"min",void 0),vi([q({type:Number})],Qd.prototype,"max",void 0),vi([q({type:Number})],Qd.prototype,"step",void 0),vi([q({type:Number})],Qd.prototype,"size",void 0),vi([q({type:Boolean})],Qd.prototype,"helperPersistent",void 0),vi([q({type:Boolean})],Qd.prototype,"charCounter",void 0),vi([q({type:Boolean})],Qd.prototype,"endAligned",void 0),vi([q({type:String})],Qd.prototype,"prefix",void 0),vi([q({type:String})],Qd.prototype,"suffix",void 0),vi([q({type:String})],Qd.prototype,"name",void 0),vi([q({type:String})],Qd.prototype,"inputMode",void 0),vi([q({type:Boolean})],Qd.prototype,"readOnly",void 0),vi([q({type:String})],Qd.prototype,"autocapitalize",void 0),vi([q({type:Boolean})],Qd.prototype,"outlineOpen",void 0),vi([q({type:Number})],Qd.prototype,"outlineWidth",void 0),vi([q({type:Boolean})],Qd.prototype,"isUiValid",void 0),vi([te({passive:!0})],Qd.prototype,"handleInputChange",null);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Jd={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class Zd extends Qd{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage||this.charCounterVisible&&"internal"!==this.charCounter}render(){const e="internal"===this.charCounter,t={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e},i=this.renderCharCounter();return P`
      <label class="mdc-text-field mdc-text-field--textarea ${$i(t)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${e?i:b}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e?b:i)}
    `}renderInput(){const e=-1===this.minLength?void 0:this.minLength,t=-1===this.maxLength?void 0:this.maxLength,i=this.autocapitalize?this.autocapitalize:void 0;return P`
      <textarea
          aria-labelledby="label"
          class="mdc-text-field__input"
          .value="${Yd(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${go(e)}"
          maxlength="${go(t)}"
          name="${go(""===this.name?void 0:this.name)}"
          inputmode="${go(this.inputMode)}"
          autocapitalize="${go(i)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}vi([Q("textarea")],Zd.prototype,"formElement",void 0),vi([q({type:Number})],Zd.prototype,"rows",void 0),vi([q({type:Number})],Zd.prototype,"cols",void 0),vi([q({converter:Jd})],Zd.prototype,"charCounter",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ec=re`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0,0,0,.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0,0,0,.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0,0,0,.87)}.mdc-text-field--filled:hover .mdc-text-field__ripple::before{opacity:.04}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:.12}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0,0,0,.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0,0,0,.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0,0,0,.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0,0,0,.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:12px;margin-right:12px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let tc=class extends Zd{};tc.styles=ec,tc=vi([Y("mwc-textarea")],tc);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ic=re`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0,0,0,.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0,0,0,.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0,0,0,.87)}.mdc-text-field--filled:hover .mdc-text-field__ripple::before{opacity:.04}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:.12}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0,0,0,.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0,0,0,.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0,0,0,.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0,0,0,.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0,0,0,.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:12px;margin-right:12px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let oc=class extends Qd{};oc.styles=ic,oc=vi([Y("mwc-textfield")],oc);const nc=Array.from(document.querySelectorAll(".component-section .ripple mwc-ripple:not(.customControls)")),rc=document.querySelector(".component-section .ripple .customControls"),ac=document.querySelector(".component-section .ripple .noRipple");nc.forEach(e=>{const t=new lo(async()=>e),i=e.parentNode;null==i||i.addEventListener("mouseenter",t.startHover),null==i||i.addEventListener("mouseleave",t.endHover),null==i||i.addEventListener("mousedown",e=>{const i=()=>{window.removeEventListener("mouseup",i),t.endPress()};window.addEventListener("mouseup",i),t.startPress(e)}),null==i||i.addEventListener("touchstart",e=>{const i=()=>{window.removeEventListener("touchend",i),t.endPress()};window.addEventListener("touchend",i),t.startPress(e)}),null==i||i.addEventListener("focus",t.startFocus),null==i||i.addEventListener("blur",t.endFocus)});const dc=new lo(async()=>rc),cc=null==rc?void 0:rc.parentNode;let sc=!1,lc=!1;null==ac||ac.addEventListener("mouseenter",()=>{lc=!0,dc.endHover()}),null==ac||ac.addEventListener("mouseleave",()=>{lc=!1,sc&&dc.startHover()}),null==cc||cc.addEventListener("mouseenter",()=>{sc=!0,sc&&!lc&&dc.startHover()}),null==cc||cc.addEventListener("mouseleave",()=>{sc=!1,dc.endHover()}),null==cc||cc.addEventListener("mousedown",e=>{const t=()=>{window.removeEventListener("mouseup",t),dc.endPress()};window.addEventListener("mouseup",t),e.target!==ac&&dc.startPress(e)}),null==cc||cc.addEventListener("touchstart",e=>{const t=()=>{window.removeEventListener("touchend",t),dc.endPress()};window.addEventListener("touchend",t),e.target!==ac&&dc.startPress(e)}),null==cc||cc.addEventListener("focus",dc.startFocus),null==cc||cc.addEventListener("blur",dc.endFocus);let mc=class extends de{static get styles(){return re`
      .formfield mwc-formfield {
        display: block;
      }

      .component-section,
      .card {
        border-width: 1px;
        border-style: solid;
        border-color: hsl(0, 0%, 87.8%);
        border-radius: 4px;
        padding: 8px 16px 16px 16px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
      }

      .sections-wrapper {
        /* two columns width + padading + gap */
        max-width: calc((450px + 16px * 2) * 2 + 24px);
        margin: 24px auto;
        columns: 2 400px;
        column-gap: 24px;
      }

      /* sections-wrapper max width + 48px margins + 15px scrollbar */
      @media (max-width: 1051px) {
        .sections-wrapper {
          /*     max-width: calc((450px + 16px * 2) * 2); */
          margin: 24px;
        }
      }

      #banner {
        background-color: rgb(245, 245, 245);
        color: rgb(0, 0, 0, 0.87);
        padding: 10px;
        text-align: center;
        font-size: 12px;
      }

      .section-header a {
        display: inline-flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.54);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        line-height: 36px;
        --mdc-icon-size: 16px;
        text-decoration: none;
      }

      .section-header a:hover,
      .section-header a:focus {
        color: rgba(0, 0, 0, 0.87);
      }

      .section-header {
        margin-bottom: 16px;
        letter-spacing: 1.2px;
      }

      .component-section {
        min-width: 240px;
        margin-bottom: 24px;
        box-sizing: border-box;
        break-inside: avoid;
      }

      .component-wrapper:not(.linear-progress) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .component-wrapper {
        margin-bottom: 16px;
      }

      .component-wrapper.button,
      .component-wrapper.fab,
      .component-wrapper.select,
      .component-wrapper.switch,
      .component-wrapper.textarea,
      .component-wrapper.textfield {
        justify-content: space-evenly;
      }

      .section-header mwc-icon {
        padding: 8px;
      }

      .material-divider {
        margin: 0px;
        border-color: rgba(0, 0, 0, 0.12);
        border-width: 0 0 1px 0;
      }
    `}constructor(){super()}render(){return P`
      <hr class="material-divider" />
      
      <div id="banner">
        Edit the code of this demo by
        <a href="https://glitch.com/edit/#!/remix/mwc-demos">remixing</a> this
        project, or view our API demos
        <a
          href="https://material-components.github.io/material-components-web-components/demos/"
          >here</a
        >!
        <!-- unbundled -->
      </div>

      <div class="sections-wrapper">
        <!-- Button -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/button"
                target="_blank"
              >
                Button
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .button {
                /* --mdc-theme-primary: red; */
              }
            </style>

            <div class="button component-wrapper">
              <mwc-button raised label="button"></mwc-button>
              <mwc-button label="button"></mwc-button>
              <mwc-button outlined label="button"></mwc-button>
            </div>
          </div>
        </section>

        <!-- Checkbox -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/checkbox"
                target="_blank"
              >
                Checkbox
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .checkbox {
                /* --mdc-theme-secondary: red; */
              }
            </style>

            <div class="checkbox component-wrapper">
              <mwc-checkbox></mwc-checkbox>
              <mwc-checkbox indeterminate></mwc-checkbox>
              <mwc-checkbox checked></mwc-checkbox>
            </div>
          </div>
        </section>

        <!-- Circular Progress -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/circular-progress"
                target="_blank"
              >
                Circular Progress
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .circular-progress {
                --mdc-circular-progress-bar-color-1: #2196f3;
                --mdc-circular-progress-bar-color-2: #e91e63;
                --mdc-circular-progress-bar-color-3: #ffc107;
                --mdc-circular-progress-bar-color-4: #03dac5;
              }
            </style>

            <div class="circular-progress component-wrapper">
              <mwc-circular-progress progress=".7"></mwc-circular-progress>
              <mwc-circular-progress indeterminate></mwc-circular-progress>
              <mwc-circular-progress-four-color
                indeterminate
              ></mwc-circular-progress-four-color>
            </div>
          </div>
        </section>

        <!-- Dialog -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/dialog"
                target="_blank"
              >
                Dialog
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .dialog {
                /* --mdc-theme-surface: gold; */
              }
            </style>

            <div class="dialog component-wrapper">
              <mwc-button
                outlined
                class="open"
                label="toggle dialog"
              ></mwc-button>
              <mwc-dialog heading="Title">
                <div>Here is some content!</div>
                <mwc-button
                  slot="primaryAction"
                  dialogaction="close"
                  label="primary action"
                >
                </mwc-button>
                <mwc-button
                  slot="secondaryAction"
                  dialogaction="close"
                  label="secondary action"
                >
                </mwc-button>
              </mwc-dialog>
            </div>
            <script type="module">
              const openButton = document.querySelector('.dialog .open');
              const dialog = document.querySelector('.dialog mwc-dialog');

              openButton.addEventListener('click', () => {
                dialog.open = !dialog.open;
              });
            </script>
          </div>
        </section>

        <!-- FAB -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/fab"
                target="_blank"
              >
                FAB
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .fab {
                /* --mdc-theme-secondary: red; */
              }

              .fab.component-wrapper mwc-fab {
                margin: 0 8px;
                align-self: center;
              }
            </style>

            <div class="fab component-wrapper">
              <mwc-fab icon="edit"></mwc-fab>
              <mwc-fab mini icon="edit"></mwc-fab>
              <mwc-fab extended icon="edit" label="edit"></mwc-fab>
            </div>
          </div>
        </section>

        <!-- Formfield -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/formfield"
                target="_blank"
              >
                Formfield
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .formfield {
                /* --mdc-theme-text-primary-on-background: red; */
              }
            </style>

            <div class="formfield component-wrapper">
              <span>
                <mwc-formfield label="switch"
                  ><mwc-switch></mwc-switch
                ></mwc-formfield>
                <mwc-formfield label="checkbox"
                  ><mwc-checkbox></mwc-checkbox
                ></mwc-formfield>
                <mwc-formfield label="radio 1"
                  ><mwc-radio group="a"></mwc-radio
                ></mwc-formfield>
                <mwc-formfield label="radio 2"
                  ><mwc-radio group="a"></mwc-radio
                ></mwc-formfield>
              </span>
            </div>
          </div>
        </section>

        <!-- Icon -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/icon"
                target="_blank"
              >
                Icon
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .icon {
                /* color: red; */
                /* --mdc-icon-size: 64px; */
              }
            </style>

            <div class="icon component-wrapper">
              <mwc-icon>shopping_cart</mwc-icon>
            </div>
          </div>
        </section>

        <!-- Icon Button -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/icon-button"
                target="_blank"
              >
                Icon Button
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .icon-button {
                /* color: red; */
                /* --mdc-icon-size: 64px; */
              }
            </style>

            <div class="icon-button component-wrapper">
              <mwc-icon-button icon="polymer"></mwc-icon-button>
            </div>
          </div>
        </section>

        <!-- Icon Button Toggle -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/icon-button-toggle"
                target="_blank"
              >
                Icon Button Toggle
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .icon-button-toggle {
                /* color: red; */
                /* --mdc-icon-size: 64px; */
              }
            </style>

            <div class="icon-button-toggle component-wrapper">
              <mwc-icon-button-toggle
                onicon="sentiment_very_satisfied"
                officon="sentiment_very_dissatisfied"
              >
              </mwc-icon-button-toggle>
              <mwc-icon-button-toggle>
                <svg
                  slot="onIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
                <svg
                  slot="offIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                  <path
                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  />
                </svg>
              </mwc-icon-button-toggle>
              <mwc-icon-button-toggle>
                <img slot="onIcon" src="https://picsum.photos/id/28/24/24" />
                <img
                  slot="offIcon"
                  src="https://picsum.photos/id/141/24/24?grayscale"
                />
              </mwc-icon-button-toggle>
            </div>
          </div>
        </section>

        <!-- Linear Progress -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/linear-progress"
                target="_blank"
              >
                Linear Progress
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .linear-progress {
                /* --mdc-theme-primary: red; */
              }
            </style>

            <div class="linear-progress component-wrapper">
              <mwc-linear-progress
                determinate
                progress="0.3"
                buffer="0.7"
                class="demo-progress-bar"
              ></mwc-linear-progress>
            </div>
          </div>
        </section>

        <!-- List -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/list"
                target="_blank"
              >
                List
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .list {
                /* --mdc-ripple-color: red; */
              }

              .component-section .list mwc-list {
                border: 1px solid lightgray;
                max-width: 300px;
                margin-bottom: 8px;
              }

              .component-section .list .inverted {
                color: white;
                background-color: gray;
              }
            </style>

            <div class="list component-wrapper">
              <mwc-list>
                <mwc-list-item twoline graphic="avatar" noninteractive>
                  <span>User Name</span>
                  <span slot="secondary">user@domain.tld</span>
                  <mwc-icon slot="graphic" class="inverted">tag_faces</mwc-icon>
                </mwc-list-item>
                <li divider role="separator"></li>
                <mwc-list-item graphic="icon">
                  <span>FAQ</span>
                  <mwc-icon slot="graphic">help_outline</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <span>Switch account</span>
                  <mwc-icon slot="graphic">people_alt_outline</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <span>Settings</span>
                  <mwc-icon slot="graphic">settings_outline</mwc-icon>
                </mwc-list-item>
                <li divider padded role="separator"></li>
                <mwc-list-item graphic="icon">
                  <span>Sign out</span>
                  <mwc-icon slot="graphic">exit_to_app</mwc-icon>
                </mwc-list-item>
              </mwc-list>
            </div>
          </div>
        </section>

        <!-- Menu -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/menu"
                target="_blank"
              >
                Menu
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .menu {
                /* --mdc-ripple-color: red; */
              }

              .component-section .menu mwc-list-item:not([selected]) mwc-icon {
                display: none;
              }
            </style>

            <div class="menu component-wrapper">
              <mwc-button outlined label="toggle menu"></mwc-button>

              <mwc-menu absolute multi>
                <mwc-list-item selected group="a" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>a-one</span>
                </mwc-list-item>
                <mwc-list-item group="a" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>a-two</span>
                </mwc-list-item>
                <mwc-list-item group="a" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>a-three</span>
                </mwc-list-item>
                <li divider></li>
                <mwc-list-item selected group="b" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>b-one</span>
                </mwc-list-item>
                <mwc-list-item group="b" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>b-two</span>
                </mwc-list-item>
              </mwc-menu>
            </div>

            <script type="module">
              const openButton = document.querySelector(
                '.component-section .menu mwc-button'
              );
              const menu = document.querySelector(
                '.component-section .menu mwc-menu'
              );

              menu.anchor = openButton;

              openButton.addEventListener('click', () => {
                menu.open = !menu.open;
              });
            </script>
          </div>
        </section>

        <!-- Radio -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/radio"
                target="_blank"
              >
                Radio
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .radio {
                /* --mdc-theme-secondary: red; */
              }
            </style>

            <div class="radio component-wrapper">
              <mwc-radio group="group1"></mwc-radio>
              <mwc-radio group="group1" checked></mwc-radio>
              <mwc-radio group="group1" disabled></mwc-radio>
            </div>
          </div>
        </section>

        <!-- Ripple -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/ripple"
                target="_blank"
              >
                Ripple
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .ripple {
                /* --mdc-ripple-color: red; */
              }

              .component-section .ripple .demo-box {
                min-width: 128px;
                min-height: 128px;
                display: inline-flex;
                position: relative;
                justify-content: center;
                text-align: center;
                flex-direction: column;
                margin: 4px;
              }

              .component-section .ripple.component-wrapper {
                align-items: center;
                user-select: none;
              }

              .component-section .ripple .unbounded {
                min-height: 64px;
              }
            </style>

            <div class="ripple component-wrapper">
              <div class="demo-box card" tabindex="0">
                Primary<mwc-ripple primary></mwc-ripple>
              </div>
              <div class="demo-box card" tabindex="0">
                Accent<mwc-ripple accent></mwc-ripple>
              </div>
              <div class="demo-box card" tabindex="0">
                <div
                  class="noRipple"
                  tabindex="0"
                  style="border: 1px solid black"
                >
                  box not ripple
                </div>
                <mwc-ripple class="customControls"></mwc-ripple>
              </div>
              <div class="demo-box card unbounded" tabindex="0">
                Unbounded<mwc-ripple unbounded></mwc-ripple>
              </div>
            </div>

            <script type="module" src="./ripple-logic.js"></script>
          </div>
        </section>

        <!-- Select -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/select"
                target="_blank"
              >
                Select
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .select {
                /* --mdc-theme-primary: red; */
              }
            </style>

            <div class="select component-wrapper">
              <mwc-select label="filled">
                <mwc-list-item></mwc-list-item>
                <mwc-list-item value="1">Option 1</mwc-list-item>
                <mwc-list-item value="2">Option 2</mwc-list-item>
                <mwc-list-item value="3">Option 3</mwc-list-item>
              </mwc-select>

              <mwc-select outlined label="outlined">
                <mwc-list-item></mwc-list-item>
                <mwc-list-item value="1">Option 1</mwc-list-item>
                <mwc-list-item value="2">Option 2</mwc-list-item>
                <mwc-list-item value="3">Option 3</mwc-list-item>
              </mwc-select>
            </div>
          </div>
        </section>

        <!-- Slider -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/slider"
                target="_blank"
              >
                Slider
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .slider {
                /* --mdc-theme-secondary: red; */
              }

              .component-section .slider mwc-slider {
                width: 100%;
              }
            </style>

            <div class="slider component-wrapper">
              <mwc-slider pin max="50" value="10" step="5"></mwc-slider>
            </div>
          </div>
        </section>

        <!-- Snackbar -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/snackbar"
                target="_blank"
              >
                Snackbar
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .snackbar {
                /* --mdc-snackbar-action-color: red; */
              }
            </style>

            <div class="snackbar component-wrapper">
              <!-- <mwc-button outlined ripple label="open snackbar"></mwc-button> -->

              <mwc-snackbar labeltext="Can't send photo. Retry in 5 seconds.">
                <mwc-button slot="action">RETRY</mwc-button>
                <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
              </mwc-snackbar>
            </div>
            <script type="module">
              const openButton = document.querySelector(
                '.component-section .snackbar mwc-button[outlined]'
              );
              const snackbar = document.querySelector(
                '.component-section .snackbar mwc-snackbar'
              );
              openButton.onclick = function () {
                snackbar.stacked = false;
                snackbar.leading = false;
                snackbar.open = true;
              };
            </script>
          </div>
        </section>

        <!-- Switch -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/switch"
                target="_blank"
              >
                Switch
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .switch {
                /* --mdc-theme-secondary: red; */
              }

              .component-section .switch mwc-switch {
                margin: 0 4px;
              }
            </style>

            <div class="switch component-wrapper">
              <mwc-switch></mwc-switch>
              <mwc-switch checked></mwc-switch>
              <mwc-switch disabled></mwc-switch>
              <mwc-switch disabled checked></mwc-switch>
            </div>
          </div>
        </section>

        <!-- Tabs -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/tab-bar"
                target="_blank"
              >
                Tabs
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .tabs {
                /* --mdc-theme-primary: red; */
              }

              .component-wrapper.tabs mwc-tab-bar {
                width: 100%;
              }
            </style>

            <div class="tabs component-wrapper">
              <mwc-tab-bar>
                <mwc-tab label="one"></mwc-tab>
                <mwc-tab label="two"></mwc-tab>
                <mwc-tab label="three"></mwc-tab>
              </mwc-tab-bar>
            </div>
          </div>
        </section>

        <!-- Textarea -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/textarea"
                target="_blank"
              >
                Textarea
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .textarea {
                /* --mdc-theme-secondary: red; */
              }

              .component-wrapper.textarea mwc-textarea {
                width: 200px;
              }
            </style>

            <div class="textarea component-wrapper">
              <mwc-textarea
                label="Standard"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textarea>
              <mwc-textarea
                outlined
                label="Outlined"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textarea>
            </div>
          </div>
        </section>

        <!-- Textfield -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/textfield"
                target="_blank"
              >
                Textfield
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .textfield {
                /* --mdc-theme-secondary: red; */
              }

              .component-wrapper.textfield mwc-textfield {
                display: inline-block;
                width: 200px;
              }
            </style>

            <div class="textfield component-wrapper">
              <mwc-textfield
                label="Standard"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textfield>
              <mwc-textfield
                outlined
                label="Outlined"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textfield>
            </div>
          </div>
        </section>
      </div>
    `}};mc=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([Y("material-demo")],mc);let pc=class extends de{static get styles(){return re`
      #header {
        --mdc-theme-primary: white;
        --mdc-theme-on-primary: #424242;
      }

      #header [slot='title'] span {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      mwc-top-app-bar-fixed [slot='title'] {
        display: flex;
        align-items: center;
      }

      mwc-top-app-bar-fixed img {
        margin-right: 8px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }

      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media (spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `}constructor(){super()}firstUpdated(){var e;new si(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"material-demo"},{path:"/about",component:"app-about",action:async()=>{await import("./app-about-1d35f1a7.js")}}]}])}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return P`
      <div>
        <mwc-top-app-bar-fixed id="header">
          <div slot="title">
            <img src="./assets/material-icon.svg" />
            <span>Material Web Components Playground</span>
          </div>
          ${"share"in navigator?P` <mwc-icon-button
                icon="share"
                slot="actionItems"
                @click="${this.share}"
              ></mwc-icon-button>`:null}
        </mwc-top-app-bar-fixed>

        <main>
          <div id="routerOutlet"></div>
        </main>
        <!-- @ts-ignore -->
        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `}};pc=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([Y("app-index")],pc);export{pc as A,de as L,Y as a,re as c,P as h};
