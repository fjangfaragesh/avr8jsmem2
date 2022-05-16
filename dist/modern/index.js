(()=>{const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${s}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let d=0,p=-1,g=0;const{strings:f,values:{length:y}}=t;for(;g<y;){const t=l.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)o(e[t].name,n)&&s++;for(;s-- >0;){const e=f[g],i=h.exec(e)[2],s=i.toLowerCase()+n,r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(a);this.parts.push({type:"attribute",index:p,name:i,strings:o}),g+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(a),l=r.length-1;for(let e=0;e<l;e++){let s,a=r[e];if(""===a)s=c();else{const t=h.exec(a);null!==t&&o(t[2],n)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),s=document.createTextNode(a)}i.insertBefore(s,t),this.parts.push({type:"node",index:++p})}""===r[l]?(i.insertBefore(c(),t),s.push(t)):t.data=r[l],g+=l}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&p!==d||(p++,e.insertBefore(c(),t)),d=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(s.push(t),p--),g++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),g++}}else l.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:s}=t,a=document.createTreeWalker(i,133,null,!1);let n=g(s),r=s[n],o=-1,l=0;const c=[];let h=null;for(;a.nextNode();){o++;const t=a.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==r&&r.index===o;)r.index=null!==h?-1:r.index-l,n=g(s,n),r=s[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},g=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
const f=new WeakMap,y=t=>(...e)=>{const i=t(...e);return f.set(i,!0),i},u=t=>"function"==typeof t&&f.has(t),m={},x={};class w{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let n,r=0,o=0,c=a.nextNode();for(;r<s.length;)if(n=s[r],l(n)){for(;o<n.index;)o++,"TEMPLATE"===c.nodeName&&(i.push(c),a.currentNode=c.content),null===(c=a.nextNode())&&(a.currentNode=i.pop(),c=a.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${i} `;class C{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",a=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");a=(o>-1||a)&&-1===t.indexOf("--\x3e",o+1);const l=h.exec(t);e+=null===l?t+(a?b:s):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}class S extends C{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),((t,e,i=null,s=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,s),e=i}})(e,i.firstChild),t}}const k=t=>null===t||!("object"==typeof t||"function"==typeof t),P=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class R{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new D(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!P(t))return t}let s="";for(let a=0;a<e;a++){s+=t[a];const e=i[a];if(void 0!==e){const t=e.value;if(k(t)||!P(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class D{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||k(t)&&t===this.value||(this.value=t,u(t)||(this.committer.dirty=!0))}commit(){for(;u(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class A{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;u(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(k(t)?t!==this.value&&this.__commitText(t):t instanceof C?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):P(t)?this.__commitIterable(t):t===x?(this.value=x,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const i=new w(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const a of t)i=e[s],void 0===i&&(i=new A(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(a),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class O{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;u(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class $ extends R{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends D{}let V=!1;(()=>{try{const t={get capture(){return V=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class _{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;u(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(V?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function U(t){let e=B.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},B.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const a=t.strings.join(i);return s=e.keyString.get(a),void 0===s&&(s=new r(t,t.getTemplateElement()),e.keyString.set(a,s)),e.stringsArray.set(t.strings,s),s}const B=new Map,I=new WeakMap;const N=new class{handleAttributeExpressions(t,e,i,s){const a=e[0];if("."===a){return new $(t,e.slice(1),i).parts}if("@"===a)return[new _(t,e.slice(1),s.eventContext)];if("?"===a)return[new O(t,e.slice(1),i)];return new R(t,e,i).parts}handleTextExpression(t){return new A(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const j=(t,...e)=>new C(t,e,"html",N),z=(t,...e)=>new S(t,e,"svg",N),E=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const G=t=>e=>{const s=E(e.type,t);let a=B.get(s);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},B.set(s,a));let n=a.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(i);if(n=a.keyString.get(o),void 0===n){const i=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),n=new r(e,i),a.keyString.set(o,n)}return a.stringsArray.set(e.strings,n),n},H=["html","svg"],L=new Set,X=(t,e,i)=>{L.add(t);const s=i?i.element:document.createElement("template"),a=e.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=a[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{H.forEach((e=>{const i=B.get(E(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),d(t,i)}))}))})(t);const o=s.content;i?function(t,e,i=null){const{element:{content:s},parts:a}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=g(a),o=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(o=p(e),i.parentNode.insertBefore(e,i));-1!==r&&a[r].index===l;){if(o>0){for(;-1!==r;)a[r].index+=o,r=g(a,r);return}r=g(a,r)}}(i,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:q},Z="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=K){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const a=this[t];this[e]=s,this.requestUpdateInternal(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||K}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=q){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||W,a="function"==typeof s?s:s.fromAttribute;return a?a(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||W.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=K){const s=this.constructor,a=s._attributeNameForProperty(t,i);if(void 0!==a){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const a=this.constructor;i=i||a.getPropertyOptions(t),a._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
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
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),Q=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Q(t,e)}const et=(t,e,i)=>{Object.defineProperty(e,i,t)},it=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});const st=Element.prototype;st.msMatchesSelector||st.webkitMatchesSelector;const at=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol();class rt{constructor(t,e){if(e!==nt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(at?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ot=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof rt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);return new rt(i,nt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const lt={};class ct extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!at){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new rt(String(e),nt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?at?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==lt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return lt}}ct.finalized=!0,ct.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,n=I.has(i),r=F&&11===i.nodeType&&!!i.host,o=r&&!L.has(a),l=o?document.createDocumentFragment():i;if(((t,i,s)=>{let a=I.get(i);void 0===a&&(e(i,i.firstChild),I.set(i,a=new A(Object.assign({templateFactory:U},s))),a.appendInto(i)),a.setValue(t),a.commit()})(t,l,Object.assign({templateFactory:G(a)},s)),o){const t=I.get(l);I.delete(l);const s=t.value instanceof w?t.value.template:void 0;X(a,l,s),e(i,i.firstChild),i.appendChild(l),I.set(i,t)}!n&&r&&window.ShadyCSS.styleElement(i.host)},ct.shadowRootOptions={mode:"open"};var ht=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let dt=class extends ct{constructor(){super(...arguments),this.color="red",this.offColor="#444",this.background="black",this.digits=1,this.colon=!1,this.colonValue=!1,this.pins="top",this.values=[0,0,0,0,0,0,0,0]}get pinInfo(){const t=t=>{const{startX:e,cols:i,bottomY:s}=this.pinPositions,a=(t-1)%i,n=1-Math.floor((t-1)/i);return{number:t,x:3.78*(e+1.27+2.54*(n?a:i-a-1)),y:3.78*("top"===this.pins?n?s+1:1:n?s+2:0)}};switch(this.digits){case 4:return[Object.assign(Object.assign({name:"A"},t(13)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},t(9)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},t(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},t(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},t(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},t(12)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},t(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},t(3)),{signals:[],description:"Decimal Point"}),Object.assign(Object.assign({name:"DIG1"},t(14)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},t(11)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"DIG3"},t(10)),{signals:[],description:"Digit 3 Common"}),Object.assign(Object.assign({name:"DIG4"},t(6)),{signals:[],description:"Digit 4 Common"}),Object.assign(Object.assign({name:"COM"},t(7)),{signals:[],description:"Common pin"}),Object.assign(Object.assign({name:"CLN"},t(8)),{signals:[],description:"Colon"})];case 2:return[Object.assign(Object.assign({name:"DIG1"},t(8)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},t(7)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"A"},t(10)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},t(9)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},t(1)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},t(4)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},t(3)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},t(6)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},t(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},t(2)),{signals:[],description:"Decimal Point"})];default:return[Object.assign(Object.assign({name:"COM.1"},t(3)),{signals:[],description:"Common"}),Object.assign(Object.assign({name:"COM.2"},t(8)),{signals:[],description:"Common"}),Object.assign(Object.assign({name:"A"},t(7)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},t(6)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},t(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},t(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},t(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},t(9)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},t(10)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},t(5)),{signals:[],description:"Decimal Point"})]}}static get styles(){return ot`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `}get pinPositions(){const{digits:t}=this,e=4===t?14:10,i=Math.ceil(e/2);return{startX:(12.55*t-2.54*i)/2,bottomY:"extend"===this.pins?21:17,cols:i}}get yOffset(){return"extend"===this.pins?2:0}renderDigit(t,e){const i=t=>this.values[e+t]?this.color:this.offColor;return z`
      <g transform="skewX(-8) translate(${t}, ${this.yOffset+2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${i(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${i(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${i(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${i(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${i(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${i(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${i(6)} />
      </g>
      <circle cx="${t+7.4}" cy="${this.yOffset+16}" r="0.89" fill="${i(7)}" />
    `}renderColon(){const{yOffset:t}=this,e=1.5+12.7*Math.round(this.digits/2),i=this.colonValue?this.color:this.offColor;return z`
      <g transform="skewX(-8)"  fill="${i}">
        <circle cx="${e}" cy="${t+5.75}" r="0.89" />
        <circle cx="${e}" cy="${t+13.25}" r="0.89" />
      </g>
    `}renderPins(){const{cols:t,bottomY:e,startX:i}=this.pinPositions;return z`
      <g fill="url(#pin-pattern)" transform="translate(${i}, 0)">
        <rect height="2" width=${2.54*t} />
        <rect height="2" width=${2.54*t} transform="translate(0, ${e})" />
      </g>
    `}render(){const{digits:t,colon:e,pins:i,yOffset:s}=this,a=12.55*t,n="extend"===i?23:19,r=[];for(let e=0;e<t;e++)r.push(this.renderDigit(3.5+12.7*e,8*e));return j`
      <svg
        width="${a}mm"
        height="${n}mm"
        version="1.1"
        viewBox="0 0 ${a} ${n}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${"extend"===i?z`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`:z`<circle cx="1.27" cy="1" r=0.5 fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${s}" width="${a}" height="19" />
        ${r}<!-- -->
        ${e?this.renderColon():null}<!-- -->
        ${"none"!==i?this.renderPins():null}
      </svg>
    `}};ht([tt()],dt.prototype,"color",void 0),ht([tt()],dt.prototype,"offColor",void 0),ht([tt()],dt.prototype,"background",void 0),ht([tt({type:Number})],dt.prototype,"digits",void 0),ht([tt({type:Boolean})],dt.prototype,"colon",void 0),ht([tt({type:Boolean})],dt.prototype,"colonValue",void 0),ht([tt()],dt.prototype,"pins",void 0),ht([tt({type:Array})],dt.prototype,"values",void 0),dt=ht([J("wokwi-7segment")],dt);const pt=z`
  <pattern id="pins-female" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
    <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
    <path
      transform="translate(1.079, 1.658) rotate(180 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.25"
    ></path>
    <path
      transform="translate(1.841, 1.658) rotate(90 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.3; fill: #fff"
    ></path>
    <path
      transform="translate(1.841, 0.896)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.15; fill: #fff"
    ></path>
    <path
      transform="translate(1.079, 0.896) rotate(270 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.35"
    ></path>
  </pattern>
`,gt=t=>({type:"analog",channel:t}),ft=(t,e=0)=>({type:"i2c",signal:t,bus:e}),yt=(t,e=0)=>({type:"spi",signal:t,bus:e}),ut=(t,e=0)=>({type:"usart",signal:t,bus:e});var mt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let xt=class extends ct{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.pinInfo=[{name:"A5.2",x:87,y:9,signals:[gt(5),ft("SCL")]},{name:"A4.2",x:97,y:9,signals:[gt(4),ft("SDA")]},{name:"AREF",x:106,y:9,signals:[]},{name:"GND.1",x:115.5,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:125,y:9,signals:[yt("SCK")]},{name:"12",x:134.5,y:9,signals:[yt("MISO")]},{name:"11",x:144,y:9,signals:[yt("MOSI"),{type:"pwm"}]},{name:"10",x:153.5,y:9,signals:[yt("SS"),{type:"pwm"}]},{name:"9",x:163,y:9,signals:[{type:"pwm"}]},{name:"8",x:173,y:9,signals:[]},{name:"7",x:189,y:9,signals:[]},{name:"6",x:198.5,y:9,signals:[{type:"pwm"}]},{name:"5",x:208,y:9,signals:[{type:"pwm"}]},{name:"4",x:217.5,y:9,signals:[]},{name:"3",x:227,y:9,signals:[{type:"pwm"}]},{name:"2",x:236.5,y:9,signals:[]},{name:"1",x:246,y:9,signals:[ut("TX")]},{name:"0",x:255.5,y:9,signals:[ut("RX")]},{name:"IOREF",x:131,y:191.5,signals:[]},{name:"RESET",x:140.5,y:191.5,signals:[]},{name:"3.3V",x:150,y:191.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:160,y:191.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:169.5,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:179,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:188.5,y:191.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208,y:191.5,signals:[gt(0)]},{name:"A1",x:217.5,y:191.5,signals:[gt(1)]},{name:"A2",x:227,y:191.5,signals:[gt(2)]},{name:"A3",x:236.5,y:191.5,signals:[gt(3)]},{name:"A4",x:246,y:191.5,signals:[gt(4),ft("SCL")]},{name:"A5",x:255.5,y:191.5,signals:[gt(5),ft("SDA")]}]}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:s}=this;return j`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        style="font-size: 2px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${pt}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${.38+15.24}" height="2.54" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <circle cx="33.269" cy="36.847" r="1.016" fill="#252728" />
          <circle cx="59.939" cy="36.847" r="1.016" fill="#252728" />
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${t&&z`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${e&&z`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${s&&z`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${i&&z`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">~7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">
          UNO
        </text>
      </svg>
    `}};mt([tt()],xt.prototype,"led13",void 0),mt([tt()],xt.prototype,"ledRX",void 0),mt([tt()],xt.prototype,"ledTX",void 0),mt([tt()],xt.prototype,"ledPower",void 0),xt=mt([J("wokwi-arduino-uno")],xt);const wt=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,14,17,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,30,1,1,14,16,16,15,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,7,1,1,1,1,1,7,0,17,10,31,4,31,4,4,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,30,17,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,6,4,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,17,17,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,21,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,5,7,0,28,4,4,4,0,0,0,0,0,0,0,4,4,4,7,0,0,0,0,0,1,2,4,0,0,0,0,6,6,0,0,0,0,31,16,31,16,8,4,0,0,0,31,16,12,4,2,0,0,0,8,4,6,5,4,0,0,0,4,31,17,16,12,0,0,0,31,4,4,4,31,0,0,0,8,31,12,10,9,0,0,0,2,31,18,10,2,0,0,0,0,14,8,8,31,0,0,0,15,8,15,8,15,0,0,0,0,21,21,16,12,0,0,0,0,31,0,0,0,0,31,16,20,12,4,4,2,0,16,8,4,6,5,4,4,0,4,31,17,17,16,8,4,0,0,31,4,4,4,4,31,0,8,31,8,12,10,9,8,0,2,31,18,18,18,18,9,0,4,31,4,31,4,4,4,0,0,30,18,17,16,8,6,0,2,30,9,8,8,8,4,0,0,31,16,16,16,16,31,0,10,31,10,10,8,4,2,0,0,3,16,19,16,8,7,0,0,31,16,8,4,10,17,0,2,31,18,10,2,2,28,0,0,17,17,18,16,8,6,0,0,30,18,21,24,8,6,0,8,7,4,31,4,4,2,0,0,21,21,21,16,8,4,0,14,0,31,4,4,4,2,0,2,2,2,6,10,2,2,0,4,4,31,4,4,2,1,0,0,14,0,0,0,0,31,0,0,31,16,10,4,10,1,0,4,31,8,4,14,21,4,0,8,8,8,8,8,4,2,0,0,4,8,17,17,17,17,0,1,1,31,1,1,1,30,0,0,31,16,16,16,8,6,0,0,2,5,8,16,16,0,0,4,31,4,4,21,21,4,0,0,31,16,16,10,4,8,0,0,14,0,14,0,14,16,0,0,4,2,1,17,31,16,0,0,16,16,10,4,10,1,0,0,31,2,31,2,2,28,0,2,2,31,18,10,2,2,0,0,14,8,8,8,8,31,0,0,31,16,31,16,16,31,0,14,0,31,16,16,8,4,0,9,9,9,9,8,4,2,0,0,4,5,5,21,21,13,0,0,1,1,17,9,5,3,0,0,31,17,17,17,17,31,0,0,31,17,17,16,8,4,0,0,3,0,16,16,8,7,0,4,9,2,0,0,0,0,0,7,5,7,0,0,0,0,0,0,0,18,21,9,9,22,0,10,0,14,16,30,17,30,0,0,0,14,17,15,17,15,1,0,0,14,1,6,17,14,0,0,0,17,17,17,25,23,1,0,0,30,5,9,17,14,0,0,0,12,18,17,17,15,1,0,0,30,17,17,17,30,16,0,0,28,4,4,5,2,0,0,8,11,8,0,0,0,0,8,0,12,8,8,8,8,8,0,5,2,5,0,0,0,0,0,4,14,5,21,14,4,0,2,2,7,2,7,2,30,0,14,0,13,19,17,17,17,0,10,0,14,17,17,17,14,0,0,0,13,19,17,17,15,1,0,0,22,25,17,17,30,16,0,14,17,31,17,17,14,0,0,0,0,26,21,11,0,0,0,0,14,17,17,10,27,0,10,0,17,17,17,17,25,22,31,1,2,4,2,1,31,0,0,0,31,10,10,10,25,0,31,0,17,10,4,10,17,0,0,0,17,17,17,17,30,16,0,16,15,4,31,4,4,0,0,0,31,2,30,18,17,0,0,0,31,21,31,17,17,0,0,4,0,31,0,4,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31]);var vt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const bt={green:"#6cb201",blue:"#000eff"};let Ct=class extends ct{constructor(){super(...arguments),this.color="black",this.background="green",this.characters=new Uint8Array(32),this.font=wt,this.cursor=!1,this.blink=!1,this.cursorX=0,this.cursorY=0,this.backlight=!0,this.pins="full"}static get styles(){return ot`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}get pinInfo(){return"i2c"===this.pins?[{name:"GND",x:4,y:32,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:4,y:41.5,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"SDA",x:4,y:51,number:3,signals:[ft("SDA")]},{name:"SCL",x:4,y:60.5,number:4,signals:[ft("SCL")]}]:[{name:"VSS",x:32,y:131,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VDD",x:41.5,y:131,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"V0",x:51.5,y:131,number:3,signals:[]},{name:"RS",x:60.5,y:131,number:4,signals:[]},{name:"RW",x:70.5,y:131,number:5,signals:[]},{name:"E",x:80,y:131,number:6,signals:[]},{name:"D0",x:89.5,y:131,number:7,signals:[]},{name:"D1",x:99.5,y:131,number:8,signals:[]},{name:"D2",x:109,y:131,number:9,signals:[]},{name:"D3",x:118.5,y:131,number:10,signals:[]},{name:"D4",x:128,y:131,number:11,signals:[]},{name:"D5",x:137.5,y:131,number:12,signals:[]},{name:"D6",x:147,y:131,number:13,signals:[]},{name:"D7",x:156.5,y:131,number:14,signals:[]},{name:"A",x:166.5,y:131,number:15,signals:[]},{name:"K",x:176,y:131,number:16,signals:[]}]}path(t){const e=[];for(let i=0;i<t.length;i++){const s=i%16*3.55,a=5.95*Math.floor(i/16);for(let n=0;n<8;n++){const r=this.font[8*t[i]+n];for(let t=0;t<5;t++)if(r&1<<t){const i=(s+.6*t).toFixed(2),r=(a+.7*n).toFixed(2);e.push(`M ${i} ${r}h0.55v0.65h-0.55Z`)}}}return e.join(" ")}renderCursor(){const t=12.45+3.55*this.cursorX,e=12.55+5.95*this.cursorY;if(this.cursorX<0||this.cursorX>=16||this.cursorY<0||this.cursorY>=2)return null;const i=[];if(this.blink&&i.push(z`
        <rect x="${t}" y="${e}" width="2.95" height="5.55" fill="${this.color}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `),this.cursor){const s=e+.7*7;i.push(z`<rect x="${t}" y="${s}" width="2.95" height="0.65" fill="${this.color}" />`)}return i}renderI2CPins(){return z`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text y="6.8" x="0.7" fill="white">1</text>
      <text y="8.9" x="2.3" fill="white">GND</text>
      <text y="11.4" x="2.3" fill="white">VCC</text>
      <text y="14" x="2.3" fill="white">SDA</text>
      <text y="16.6" x="2.3" fill="white">SCL</text>
    `}renderPins(){return z`
      <rect x="7.55" y="33.5" height="2.5" width="40.64" fill="url(#pins)" />
      <text x="6" y="35.3" fill="white">1</text>
      <text x="7.2" y="33.3" fill="white">VSS</text>
      <text x="9.9" y="33.3" fill="white">VDD</text>
      <text x="12.7" y="33.3" fill="white">V0</text>
      <text x="15.2" y="33.3" fill="white">RS</text>
      <text x="17.8" y="33.3" fill="white">RW</text>
      <text x="20.8" y="33.3" fill="white">E</text>
      <text x="22.7" y="33.3" fill="white">D0</text>
      <text x="25.3" y="33.3" fill="white">D1</text>
      <text x="27.9" y="33.3" fill="white">D2</text>
      <text x="30.4" y="33.3" fill="white">D3</text>
      <text x="33" y="33.3" fill="white">D4</text>
      <text x="35.6" y="33.3" fill="white">D5</text>
      <text x="38.2" y="33.3" fill="white">D6</text>
      <text x="40.8" y="33.3" fill="white">D7</text>
      <text x="43.6" y="33.3" fill="white">A</text>
      <text x="46.2" y="33.3" fill="white">K</text>
      <text x="48" y="35.3" fill="white">16</text>
    `}render(){const{color:t,characters:e,background:i}=this,s=this.backlight?0:.5;return j`
      <svg
        width="80mm"
        height="36mm"
        version="1.1"
        viewBox="0 0 80 36"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="80" height="36" fill="#087f45" />
        <rect x="4.95" y="5.7" width="71.2" height="25.2" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" fill="${i in bt?bt[i]:bt}" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" opacity="${s}" />
        ${"i2c"===this.pins?this.renderI2CPins():null}
        ${"full"===this.pins?this.renderPins():null}
        <rect x="12.45" y="12.55" width="56.2" height="11.5" fill="url(#characters)" />
        <path d="${this.path(e)}" transform="translate(12.45, 12.55)" fill="${t}" />
        ${this.renderCursor()}
      </svg>
    `}};vt([tt()],Ct.prototype,"color",void 0),vt([tt()],Ct.prototype,"background",void 0),vt([tt({type:Array})],Ct.prototype,"characters",void 0),vt([tt()],Ct.prototype,"font",void 0),vt([tt()],Ct.prototype,"cursor",void 0),vt([tt()],Ct.prototype,"blink",void 0),vt([tt()],Ct.prototype,"cursorX",void 0),vt([tt()],Ct.prototype,"cursorY",void 0),vt([tt()],Ct.prototype,"backlight",void 0),vt([tt()],Ct.prototype,"pins",void 0),Ct=vt([J("wokwi-lcd1602")],Ct);new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,6,14,30,14,6,2,0,8,12,14,15,14,12,8,0,18,9,27,0,0,0,0,0,27,18,9,0,0,0,0,0,4,14,31,0,4,14,31,0,31,14,4,0,31,14,4,0,0,14,31,31,31,14,0,0,16,16,20,18,31,2,4,0,4,14,21,4,4,4,4,0,4,4,4,4,21,14,4,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,8,4,2,4,8,0,31,0,2,4,8,4,2,0,31,0,0,4,4,14,14,31,0,0,0,31,14,14,4,4,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,4,10,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,14,17,1,14,16,17,14,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,14,2,2,2,2,2,14,0,0,1,2,4,8,16,0,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,0,30,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,4,6,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,21,21,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,17,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,0,0,22,9,0,0,0,4,10,17,17,17,31,0,0,31,17,1,15,17,17,15,30,20,20,18,17,31,17,17,0,21,21,21,14,21,21,21,0,15,16,16,12,16,16,15,0,17,17,25,21,19,17,17,10,4,17,17,25,21,19,17,0,30,20,20,20,20,21,18,0,31,17,17,17,17,17,17,0,17,17,17,10,4,2,1,0,17,17,17,17,17,31,16,0,17,17,17,30,16,16,16,0,0,21,21,21,21,21,31,0,21,21,21,21,21,31,16,0,3,2,2,14,18,18,14,0,17,17,17,19,21,21,19,0,14,17,20,26,16,17,14,0,0,0,18,21,9,9,22,0,4,12,20,20,4,7,7,0,31,17,1,1,1,1,1,0,0,0,31,10,10,10,25,0,31,1,2,4,2,1,31,0,0,0,30,9,9,9,6,12,20,28,20,20,23,27,24,0,0,16,14,5,4,4,8,0,4,14,14,14,31,4,0,0,14,17,17,31,17,17,14,0,0,14,17,17,17,10,27,0,12,18,4,10,17,17,14,0,0,0,26,21,11,0,0,0,0,10,31,31,31,14,4,0,0,0,14,1,6,17,14,0,14,17,17,17,17,17,17,0,27,27,27,27,27,27,27,0,4,0,0,4,4,4,4,0,4,14,5,5,21,14,4,0,12,2,2,7,2,18,13,0,0,17,14,10,14,17,0,0,17,10,31,4,31,4,4,0,4,4,4,0,4,4,4,0,12,18,4,10,4,9,6,0,8,20,4,31,4,5,2,0,31,17,21,29,21,17,31,0,14,16,30,17,30,0,31,0,0,20,10,5,10,20,0,0,9,21,21,23,21,21,9,0,30,17,17,30,20,18,17,0,31,17,21,17,25,21,31,0,4,2,6,0,0,0,0,6,9,9,9,6,0,0,0,0,4,4,31,4,4,0,31,6,9,4,2,15,0,0,0,7,8,6,8,7,0,0,0,7,9,7,1,9,29,9,24,0,17,17,17,25,23,1,1,0,30,25,25,30,24,24,24,0,0,0,0,6,6,0,0,0,0,0,10,17,21,21,10,2,3,2,2,7,0,0,0,0,14,17,17,17,14,0,31,0,0,5,10,20,10,5,0,17,9,5,10,13,10,30,8,17,9,5,10,21,16,8,28,3,2,3,18,27,20,28,16,0,4,0,4,2,1,17,14,2,4,4,10,17,31,17,17,8,4,4,10,17,31,17,17,4,10,0,14,17,31,17,17,22,9,0,14,17,31,17,17,10,0,4,10,17,31,17,17,4,10,4,14,17,31,17,17,0,28,6,5,29,7,5,29,14,17,1,1,17,14,8,12,2,4,0,31,1,15,1,31,8,4,0,31,1,15,1,31,4,10,0,31,1,15,1,31,0,10,0,31,1,15,1,31,2,4,0,14,4,4,4,14,8,4,0,14,4,4,4,14,4,10,0,14,4,4,4,14,0,10,0,14,4,4,4,14,0,14,18,18,23,18,18,14,22,9,0,17,19,21,25,17,2,4,14,17,17,17,17,14,8,4,14,17,17,17,17,14,4,10,0,14,17,17,17,14,22,9,0,14,17,17,17,14,10,0,14,17,17,17,17,14,0,0,17,10,4,10,17,0,0,14,4,14,21,14,4,14,2,4,17,17,17,17,17,14,8,4,17,17,17,17,17,14,4,10,0,17,17,17,17,14,10,0,17,17,17,17,17,14,8,4,17,10,4,4,4,4,3,2,14,18,18,14,2,7,0,12,18,18,14,18,18,13,2,4,0,14,16,30,17,30,8,4,0,14,16,30,17,30,4,10,0,14,16,30,17,30,22,9,0,14,16,30,17,30,0,10,0,14,16,30,17,30,4,10,4,14,16,30,17,30,0,0,11,20,30,5,21,10,0,0,14,1,17,14,4,6,2,4,0,14,17,31,1,14,8,4,0,14,17,31,1,14,4,10,0,14,17,31,1,14,0,10,0,14,17,31,1,14,2,4,0,4,6,4,4,14,8,4,0,4,6,4,4,14,4,10,0,4,6,4,4,14,0,10,0,4,6,4,4,14,0,5,2,5,8,30,17,14,22,9,0,13,19,17,17,17,2,4,0,14,17,17,17,14,8,4,0,14,17,17,17,14,0,4,10,0,14,17,17,14,0,22,9,0,14,17,17,14,0,10,0,14,17,17,17,14,0,0,4,0,31,0,4,0,0,8,4,14,21,14,4,2,2,4,0,17,17,17,25,22,8,4,0,17,17,17,25,22,4,10,0,17,17,17,25,22,0,10,0,17,17,17,25,22,0,8,4,17,17,30,16,14,0,6,4,12,20,12,4,14,0,10,0,17,17,30,16,14]);var St=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const kt={red:"#ff8080",green:"#80ff80",blue:"#8080ff",yellow:"#ffff80",orange:"#ffcf80",white:"#ffffff"};let Pt=class extends ct{constructor(){super(...arguments),this.value=!1,this.brightness=1,this.color="red",this.lightColor=null,this.label="",this.pinInfo=[{name:"A",x:24,y:42,signals:[],description:"Anode"},{name:"C",x:16,y:42,signals:[],description:"Cathode"}]}static get styles(){return ot`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `}render(){const{color:t,lightColor:e}=this,i=e||kt[t]||"#ff8080",s=this.brightness?.3+.7*this.brightness:0,a=this.value&&this.brightness>Number.EPSILON;return j`
      <div class="led-container">
        <svg
          width="40"
          height="50"
          version="1.2"
          viewBox="-10 -5 35.456 39.618"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <rect x="3.451" y="19.379" width="2.1514" height="9.8273" fill="#8c8c8c" />
          <path
            d="m12.608 29.618c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
            fill="#8c8c8c"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            opacity=".3"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="#e6e6e6"
            opacity=".5"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            fill="#d1d1d1"
            opacity=".9"
          />
          <g>
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
              opacity=".7"
            />
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
              opacity=".25"
            />
            <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
          </g>
          <polygon
            points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
            fill="#666666"
          />
          <polygon
            points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
            fill="#666666"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="${t}"
            opacity=".65"
          />
          <g fill="#ffffff">
            <path
              d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
              opacity=".5"
            />
            <path
              d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
              opacity=".5"
            />
            <path
              d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
              opacity=".5"
            />
          </g>
          <g class="light" style="display: ${a?"":"none"}">
            <ellipse
              cx="8"
              cy="10"
              rx="10"
              ry="10"
              fill="${i}"
              filter="url(#light2)"
              style="opacity: ${s}"
            ></ellipse>
            <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
            <ellipse
              cx="8"
              cy="10"
              rx="3"
              ry="3"
              fill="white"
              filter="url(#light1)"
              style="opacity: ${s}"
            ></ellipse>
          </g>
        </svg>
        <span class="led-label">${this.label}</span>
      </div>
    `}};St([tt()],Pt.prototype,"value",void 0),St([tt()],Pt.prototype,"brightness",void 0),St([tt()],Pt.prototype,"color",void 0),St([tt()],Pt.prototype,"lightColor",void 0),St([tt()],Pt.prototype,"label",void 0),Pt=St([J("wokwi-led")],Pt);var Rt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Dt=class extends ct{constructor(){super(...arguments),this.r=0,this.g=0,this.b=0}render(){const{r:t,g:e,b:i}=this,s=t=>t>.001?.7+.3*t:0,a=Math.max(t,e,i),n=Math.min(t,e,i),r=a-n,o=Math.max(1,2-20*r),l=.1+Math.max(2*a-5*r,0),c=t=>a?Math.floor(255*Math.min((t=>t>.005?.1+.9*t:0)(t/a)*o,1)):255,h=`rgb(${c(t)}, ${c(e)}, ${c(i)})`,d=242-(a>.1&&r<.2?Math.floor(50*a*(1-r/.2)):0),p=`rgb(${d}, ${d}, ${d})`;return j`
      <svg
        width="5.6631mm"
        height="5mm"
        version="1.1"
        viewBox="0 0 5.6631 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="light1" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="${Math.max(.1,a)}" />
        </filter>
        <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <rect x=".33308" y="0" width="5" height="5" fill="${p}" />
        <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
        <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
        <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
        <g fill="#bfbfbf">
          <path
            d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
          />
          <path
            d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
          />
          <path
            d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
          />
          <path
            d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
          />
        </g>
        <path
          d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
          fill="#666"
        />
        <ellipse
          cx="2.5"
          cy="2.3"
          rx="0.3"
          ry="0.3"
          fill="red"
          opacity=${s(t)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.5"
          cy="3.2"
          rx="0.3"
          ry="0.3"
          fill="green"
          opacity=${s(e)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.3"
          cy="1.45"
          rx="0.3"
          ry="0.3"
          fill="blue"
          opacity=${s(i)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3"
          cy="2.5"
          rx="2.2"
          ry="2.2"
          opacity="${g=a,g>.005?l+g*(1-l):0}"
          fill="${h}"
          filter="url(#light2)"
        ></ellipse>
      </svg>
    `;var g}};Rt([tt()],Dt.prototype,"r",void 0),Rt([tt()],Dt.prototype,"g",void 0),Rt([tt()],Dt.prototype,"b",void 0),Dt=Rt([J("wokwi-neopixel")],Dt);const At=[" ","Spacebar"];var Ot=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let $t=class extends ct{constructor(){super(...arguments),this.color="red",this.pressed=!1,this.pinInfo=[{name:"1.l",x:2,y:9,signals:[]},{name:"2.l",x:2,y:36,signals:[]},{name:"1.r",x:65,y:9,signals:[]},{name:"2.r",x:65,y:36,signals:[]}]}static get styles(){return ot`
      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      button:active .button-circle {
        fill: url(#grad-down);
      }

      .clickable-element {
        cursor: pointer;
      }
    `}render(){const{color:t}=this,e=this.pressed?"url(#grad-down)":"url(#grad-up)";return j`
      <button
        aria-label="${t} pushbutton"
        @mousedown=${this.down}
        @mouseup=${t=>!t.ctrlKey&&this.up()}
        @touchstart=${this.down}
        @touchend=${this.up}
        @keydown=${t=>At.includes(t.key)&&this.down()}
        @keyup=${t=>At.includes(t.key)&&!t.ctrlKey&&this.up()}
      >
        <svg
          width="18mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="grad-up" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${t}" offset="0.3" />
              <stop stop-color="${t}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="grad-down"
              xlink:href="#grad-up"
              gradientTransform="rotate(180,0.5,0.5)"
            ></linearGradient>
          </defs>
          <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
          <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
          <g fill="#1b1b1">
            <circle cx="1.767" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="10.197" r=".37" />
            <circle cx="1.767" cy="10.197" r=".37" />
          </g>
          <g fill="#eaeaea">
            <path
              d="m-0.3538 1.4672c-0.058299 0-0.10523 0.0469-0.10523 0.10522v0.38698h-2.1504c-0.1166 0-0.21045 0.0938-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21045 0.21045 0.21045h2.1504v0.40101c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m-0.35376 8.6067c-0.058299 0-0.10523 0.0469-0.10523 0.10523v0.38697h-2.1504c-0.1166 0-0.21045 0.0939-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21046 0.21045 0.21046h2.1504v0.401c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m12.354 1.4672c0.0583 0 0.10522 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09385 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
            <path
              d="m12.354 8.6067c0.0583 0 0.10523 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09386 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle class="button-circle" cx="6" cy="6" r="3.822" fill="${e}" />
            <circle
              cx="6"
              cy="6"
              r="2.9"
              fill="${t}"
              stroke="#2f2f2f"
              stroke-opacity=".47"
              stroke-width=".08"
            />
          </g>
        </svg>
      </button>
    `}down(){this.pressed||(this.pressed=!0,this.dispatchEvent(new Event("button-press")))}up(){this.pressed&&(this.pressed=!1,this.dispatchEvent(new Event("button-release")))}};Ot([tt()],$t.prototype,"color",void 0),Ot([tt()],$t.prototype,"pressed",void 0),$t=Ot([J("wokwi-pushbutton")],$t);var Tt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const Vt={[-2]:"silver",[-1]:"#c4a000",0:"black",1:"brown",2:"red",3:"orange",4:"yellow",5:"green",6:"blue",7:"violet",8:"gray",9:"white"};let _t=class extends ct{constructor(){super(...arguments),this.value="1000",this.pinInfo=[{name:"1",x:0,y:9,signals:[]},{name:"2",x:59,y:9,signals:[]}]}breakValue(t){const e=t>=1e10?9:t>=1e9?8:t>=1e8?7:t>=1e7?6:t>=1e6?5:t>=1e5?4:t>=1e4?3:t>=1e3?2:t>=100?1:t>=10?0:t>=1?-1:-2,i=Math.round(t/10**e);return 0===t?[0,0]:e<0&&i%10==0?[i/10,e+1]:[Math.round(i%100),e]}render(){const{value:t}=this,e=parseFloat(t),[i,s]=this.breakValue(e),a=Vt[Math.floor(i/10)];return j`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.645" height=".63826" fill="#eaeaea" />
        <g stroke-width=".14479">
          <path
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
            fill="#d5b597"
          />
          <path
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
            fill="url(#a)"
            opacity=".44886"
          />
          <path
            d="m4.6917 0c-0.10922 0-0.21558 0.00884-0.31985 0.022624v2.955c0.10426 0.013705 0.21063 0.02234 0.31985 0.02234 0.15603 0 0.3074-0.015363 0.4522-0.043551v-2.9129c-0.1448-0.028193-0.29617-0.043551-0.4522-0.043552z"
            fill="${a}"
          />
          <path d="m6.4482 0.29411v2.4117h0.77205v-2.4117z" fill="${Vt[i%10]}" />
          <path d="m8.5245 0.29411v2.4117h0.77205v-2.4117z" fill="${Vt[s]}" />
          <path
            d="m11.054 0c-0.15608 0-0.30749 0.015253-0.45277 0.043268v2.9134c0.14527 0.028012 0.29669 0.043268 0.45277 0.043268 0.10912 0 0.21539-0.00867 0.31957-0.02234v-2.955c-0.10418-0.013767-0.21044-0.022624-0.31957-0.022624z"
            fill="#c4a000"
          />
        </g>
      </svg>
    `}};Tt([tt()],_t.prototype,"value",void 0),_t=Tt([J("wokwi-resistor")],_t);var Mt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const Ut=[10.7,25,39.3,53.6],Bt=[7,22,37,52];let It=class extends ct{constructor(){super(...arguments),this.columns="4",this.connector=!1,this.keys=["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"],this.pressedKeys=new Set}get pinInfo(){return"3"===this.columns?[{name:"R1",x:76.5,y:338,signals:[]},{name:"R2",x:86,y:338,signals:[]},{name:"R3",x:95.75,y:338,signals:[]},{name:"R4",x:105.25,y:338,signals:[]},{name:"C1",x:115,y:338,signals:[]},{name:"C2",x:124.5,y:338,signals:[]},{name:"C3",x:134,y:338,signals:[]}]:[{name:"R1",x:100,y:338,signals:[]},{name:"R2",x:110,y:338,signals:[]},{name:"R3",x:119.5,y:338,signals:[]},{name:"R4",x:129,y:338,signals:[]},{name:"C1",x:138.5,y:338,signals:[]},{name:"C2",x:148,y:338,signals:[]},{name:"C3",x:157.75,y:338,signals:[]},{name:"C4",x:167.5,y:338,signals:[]}]}renderKey(t,e){var i;const s=null!==(i=this.keys[4*t+e])&&void 0!==i?i:"",a=function(t){return!isNaN(parseFloat(t))}(s)?"blue-key":"red-key",n=s.toUpperCase();return z`<g
      transform="translate(${Bt[e]} ${Ut[t]})"
      tabindex="0"
      class=${a}
      data-key-name=${n}
      @blur=${t=>{this.up(s,t.currentTarget)}}
      @mousedown=${()=>this.down(s)}
      @mouseup=${()=>this.up(s)}
      @touchstart=${()=>this.down(s)}
      @touchend=${()=>this.up(s)}
      @keydown=${t=>At.includes(t.key)&&this.down(s,t.currentTarget)}
      @keyup=${t=>At.includes(t.key)&&this.up(s,t.currentTarget)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${s}</text>
    </g>`}render(){const{connector:t}=this,e="4"===this.columns,i=e?70.336:55.336,s=e?20.32:17.78,a=76+(t?15:0);return j`
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }

        g[tabindex] {
          cursor: pointer;
        }

        g[tabindex]:focus,
        g[tabindex]:active {
          stroke: white;
          outline: none;
        }

        .blue-key:focus,
        .red-key:focus {
          filter: url(#shadow);
        }

        .blue-key:active,
        .blue-key.pressed {
          fill: #4e50d7;
        }

        .red-key:active,
        .red-key.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text,
        .blue-key.pressed text,
        .red-key.pressed text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${i}mm"
        height="${a}mm"
        version="1.1"
        viewBox="0 0 ${i} ${a}"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${t=>this.keyStrokeDown(t.key)}
        @keyup=${t=>this.keyStrokeUp(t.key)}
      >
        <defs>
          <rect
            id="key"
            width="11.2"
            height="11"
            rx="1.4"
            ry="1.4"
            stroke="#b1b5b9"
            stroke-width=".75"
          />
          <pattern id="wires" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect width="2.54" height="8" fill="#eee" />
            <rect x="0.77" width="1" height="6" fill="#d9d5bc" />
            <circle cx="1.27" cy="6" r="0.75" fill="#d9d5bc" />
            <rect x="0.52" y="6" width="1.5" height="2" fill="#d9d5bc" />
          </pattern>
          <pattern id="wires-marks" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect x="0.52" y="6" width="1.5" height="2" fill="#746d41" />
          </pattern>
          ${pt}
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${i}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${e?65:50}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Connector -->
        ${t?z`
            <g transform="translate(${(i-s)/2}, 76)">
              <rect width="${s}" height="8" fill="url(#wires)" />
              <rect width="10.16" height="8" fill="url(#wires-marks)" />
              <rect y="8" width="${s}" height="7" fill="#333" />
              <rect transform="translate(0, 12)" width="${s}" height="2.54" fill="url(#pins-female)" />
            </g>
          `:null}

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey(0,0)}</g>
          <g>${this.renderKey(0,1)}</g>
          <g>${this.renderKey(0,2)}</g>
          <g>${this.renderKey(1,0)}</g>
          <g>${this.renderKey(1,1)}</g>
          <g>${this.renderKey(1,2)}</g>
          <g>${this.renderKey(2,0)}</g>
          <g>${this.renderKey(2,1)}</g>
          <g>${this.renderKey(2,2)}</g>
          <g>${this.renderKey(3,1)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey(3,0)}</g>
          <g>${this.renderKey(3,2)}</g>
          ${e&&z`
              <g>${this.renderKey(0,3)}</g>
              <g>${this.renderKey(1,3)}</g>
              <g>${this.renderKey(2,3)}</g>
              <g>${this.renderKey(3,3)}</g>
          `}
        </g>
      </svg>
    `}keyIndex(t){const e=this.keys.indexOf(t);return{row:Math.floor(e/4),column:e%4}}down(t,e){this.pressedKeys.has(t)||(e&&e.classList.add("pressed"),this.pressedKeys.add(t),this.dispatchEvent(new CustomEvent("button-press",{detail:Object.assign({key:t},this.keyIndex(t))})))}up(t,e){this.pressedKeys.has(t)&&(e&&e.classList.remove("pressed"),this.pressedKeys.delete(t),this.dispatchEvent(new CustomEvent("button-release",{detail:Object.assign({key:t},this.keyIndex(t))})))}keyStrokeDown(t){var e;const i=t.toUpperCase(),s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`[data-key-name="${i}"]`);s&&this.down(i,s)}keyStrokeUp(t){var e,i;const s=t.toUpperCase(),a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`[data-key-name="${s}"]`),n=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll(".pressed");"Shift"===t&&(null==n||n.forEach((t=>{const e=t.dataset.keyName;e&&this.up(e,t)}))),a&&this.up(s,a)}};Mt([tt()],It.prototype,"columns",void 0),Mt([tt()],It.prototype,"connector",void 0),Mt([tt({type:Array})],It.prototype,"keys",void 0),It=Mt([J("wokwi-membrane-keypad")],It);const Nt=new WeakMap,jt=y((t=>e=>{if(!(e instanceof D)||e instanceof T||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:s}=i.element;let a=Nt.get(e);void 0===a&&(s.cssText=i.strings.join(" "),Nt.set(e,a=new Set)),a.forEach((e=>{e in t||(a.delete(e),-1===e.indexOf("-")?s[e]=null:s.removeProperty(e))}));for(const e in t)a.add(e),-1===e.indexOf("-")?s[e]=t[e]:s.setProperty(e,t[e])}));var zt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Et=class extends ct{constructor(){super(...arguments),this.min=0,this.max=100,this.value=0,this.step=1,this.startDegree=-135,this.endDegree=135,this.center={x:0,y:0},this.pressed=!1,this.pinInfo=[{name:"GND",x:29,y:68.5,number:1,signals:[{type:"power",signal:"GND"}]},{name:"SIG",x:37,y:68.5,number:2,signals:[gt(0)]},{name:"VCC",x:44.75,y:68.5,number:3,signals:[{type:"power",signal:"VCC"}]}]}static get styles(){return ot`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `}clamp(t,e,i){return Math.min(Math.max(i,t),e)}mapToMinMax(t,e,i){return t*(i-e)+e}percentFromMinMax(t,e,i){return(t-e)/(i-e)}render(){const t=this.clamp(0,1,this.percentFromMinMax(this.value,this.min,this.max)),e=(this.endDegree-this.startDegree)*t+this.startDegree;return j`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg
        role="slider"
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="${this.focusInput}"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
        style=${jt({"--knob-angle":e+"deg"})}
      >
        <defs>
          <filter id="outline">
            <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
          </filter>
        </defs>
        <rect
          x=".15"
          y=".15"
          width="19.5"
          height="19.5"
          ry="1.23"
          fill="#045881"
          stroke="#045881"
          stroke-width=".30"
        />
        <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
        <ellipse
          id="knob"
          cx="9.91"
          cy="8.18"
          rx="7.27"
          ry="7.43"
          fill="#e4e8eb"
          stroke-width=".15"
        />
        <rect
          x="6.6"
          y="17"
          width="6.5"
          height="2"
          fill-opacity="0"
          stroke="#fff"
          stroke-width=".30"
        />
        <g stroke-width=".15">
          <text x="6.21" y="16.6">GND</text>
          <text x="8.75" y="16.63">SIG</text>
          <text x="11.25" y="16.59">VCC</text>
        </g>
        <g fill="#fff" stroke-width=".15">
          <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
          <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
          <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
          <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
        </g>
        <g fill="#b3b1b0" stroke-width=".15">
          <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
          <ellipse cx="9.75" cy="18" rx=".61" ry=".63" />
          <ellipse cx="11.87" cy="18" rx=".61" ry=".63" />
        </g>
        <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
        <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
      </svg>
    `}focusInput(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".hide-input");null==e||e.focus()}onValueChange(t){const e=t.target;this.updateValue(parseFloat(e.value))}down(t){(0===t.button||window.navigator.maxTouchPoints)&&(this.pressed=!0,this.updatePotentiometerPosition(t))}move(t){const{pressed:e}=this;e&&this.rotateHandler(t)}up(){this.pressed=!1}updatePotentiometerPosition(t){var e,i;t.stopPropagation(),t.preventDefault();const s=null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#knob"))||void 0===i?void 0:i.getBoundingClientRect();s&&(this.center={x:window.scrollX+s.left+s.width/2,y:window.scrollY+s.top+s.height/2})}rotateHandler(t){t.stopPropagation(),t.preventDefault();const e="touchmove"===t.type,i=e?t.touches[0].pageX:t.pageX,s=e?t.touches[0].pageY:t.pageY,a=this.center.x-i,n=this.center.y-s;let r=Math.round(180*Math.atan2(n,a)/Math.PI);r<0&&(r+=360),r-=90,a>0&&n<=0&&(r-=360),r=this.clamp(this.startDegree,this.endDegree,r);const o=this.percentFromMinMax(r,this.startDegree,this.endDegree),l=this.mapToMinMax(o,this.min,this.max);this.updateValue(l)}updateValue(t){const e=this.clamp(this.min,this.max,t),i=Math.round(e/this.step)*this.step;this.value=Math.round(100*i)/100,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}};zt([tt()],Et.prototype,"min",void 0),zt([tt()],Et.prototype,"max",void 0),zt([tt()],Et.prototype,"value",void 0),zt([tt()],Et.prototype,"step",void 0),zt([tt()],Et.prototype,"startDegree",void 0),zt([tt()],Et.prototype,"endDegree",void 0),Et=zt([J("wokwi-potentiometer")],Et);var Ft=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const Gt=5.66;let Ht=class extends ct{constructor(){super(...arguments),this.rows=8,this.cols=8,this.colSpacing=1,this.blurLight=!1,this.animation=!1,this.rowSpacing=1,this.pixelElements=null,this.animationFrame=null,this.animateStep=()=>{const t=(new Date).getTime(),{rows:e,cols:i}=this,s=t=>t%2e3>1e3?1-t%1e3/1e3:t%1e3/1e3;for(let a=0;a<e;a++)for(let n=0;n<i;n++){const r=Math.sqrt((a-e/2+.5)**2+(n-i/2+.5)**2);this.setPixel(a,n,{r:s(100*r+t),g:s(100*r+t+200),b:s(100*r+t+400)})}this.animationFrame=requestAnimationFrame(this.animateStep)}}static get styles(){return ot`
      :host {
        display: flex;
      }
    `}getPixelElements(){return this.shadowRoot?(this.pixelElements||(this.pixelElements=Array.from(this.shadowRoot.querySelectorAll("g.pixel")).map((t=>Array.from(t.querySelectorAll("ellipse"))))),this.pixelElements):null}reset(){const t=this.getPixelElements();if(t)for(const[e,i,s,a]of t)e.style.opacity="0",i.style.opacity="0",s.style.opacity="0",a.style.opacity="0"}setPixel(t,e,i){const s=this.getPixelElements();if(t<0||e<0||t>=this.rows||e>=this.cols||!s)return null;const{r:a,g:n,b:r}=i,o=t=>t>.001?.7+.3*t:0,l=Math.max(a,n,r),c=Math.min(a,n,r),h=l-c,d=Math.max(1,2-20*h),p=.1+Math.max(2*l-5*h,0),g=t=>l?Math.floor(255*Math.min((t=>t>.005?.1+.9*t:0)(t/l)*d,1)):255,f=`rgb(${g(a)}, ${g(n)}, ${g(r)})`,y=s[t*this.cols+e],[u,m,x,w]=y;var v;u.style.opacity=o(a).toFixed(2),m.style.opacity=o(n).toFixed(2),x.style.opacity=o(r).toFixed(2),w.style.opacity=(v=l,v>.005?p+v*(1-p):0).toFixed(2),w.style.fill=f}updated(){this.animation&&!this.animationFrame?this.animationFrame=requestAnimationFrame(this.animateStep):!this.animation&&this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}renderPixels(){const t=[],{cols:e,rows:i,colSpacing:s,rowSpacing:a}=this,n=Gt+s,r=5+a;for(let s=0;s<i;s++)for(let i=0;i<e;i++)t.push(z`
        <g transform="translate(${n*i}, ${r*s})" class="pixel">
          <ellipse cx="2.5" cy="2.3" rx="0.3" ry="0.3" fill="red" opacity="0" />
          <ellipse cx="3.5" cy="3.2" rx="0.3" ry="0.3" fill="green" opacity="0" />
          <ellipse cx="3.3" cy="1.45" rx="0.3" ry="0.3" fill="blue" opacity="0" />
          <ellipse cx="3" cy="2.5" rx="2.2" ry="2.2" opacity="0" />
        </g>`);return this.pixelElements=null,t}render(){const{cols:t,rows:e,rowSpacing:i,colSpacing:s,blurLight:a}=this,n=Gt*t+s*(t-1),r=5*e+i*(e-1);return j`
      <svg
        width="${n}mm"
        height="${r}mm"
        version="1.1"
        viewBox="0 0 ${n} ${r}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blurLight" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <pattern id="pixel" width="${Gt+s}" height="${5+i}" patternUnits="userSpaceOnUse">
          <rect x=".33308" y="0" width="5" height="5" fill="#fff" />
          <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
          <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
          <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
          <g fill="#bfbfbf">
            <path
              d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
            />
            <path
              d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
            />
            <path
              d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
            />
            <path
              d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
            />
          </g>
          <path
            d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
            fill="#666"
          />
        </pattern>
        <rect width="${n}" height="${r}" fill="url(#pixel)"></rect>
        <g style="${a?"filter: url(#blurLight)":""}">
          ${this.renderPixels()}
        </g>
      </svg>
    `}};Ft([tt()],Ht.prototype,"rows",void 0),Ft([tt()],Ht.prototype,"cols",void 0),Ft([tt({attribute:"colspacing"})],Ht.prototype,"colSpacing",void 0),Ft([tt()],Ht.prototype,"blurLight",void 0),Ft([tt()],Ht.prototype,"animation",void 0),Ft([tt({attribute:"rowspacing"})],Ht.prototype,"rowSpacing",void 0),Ht=Ft([J("wokwi-neopixel-matrix")],Ht);var Lt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Xt=class extends ct{constructor(){super(),this.width=150,this.height=116,this.screenWidth=128,this.screenHeight=64,this.canvas=void 0,this.ctx=null,this.pinInfo=[{name:"DATA",x:36.5,y:12.5,signals:[ft("SDA")]},{name:"CLK",x:45.5,y:12.5,signals:[ft("SCL")]},{name:"DC",x:54.5,y:12.5,signals:[]},{name:"RST",x:64.5,y:12.5,signals:[]},{name:"CS",x:74.5,y:12.5,signals:[]},{name:"3V3",x:83.5,y:12.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"VIN",x:93.5,y:12.5,signals:[{type:"power",signal:"VCC"}]},{name:"GND",x:103.5,y:12,signals:[{type:"power",signal:"GND"}]}],this.imageData=new ImageData(this.screenWidth,this.screenHeight)}static get styles(){return ot`
      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `}redraw(){var t;null===(t=this.ctx)||void 0===t||t.putImageData(this.imageData,0,0)}initContext(){var t,e;this.canvas=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("canvas"),this.ctx=null===(e=this.canvas)||void 0===e?void 0:e.getContext("2d")}firstUpdated(){var t;this.initContext(),null===(t=this.ctx)||void 0===t||t.putImageData(this.imageData,0,0)}updated(){this.imageData&&this.redraw()}render(){const{width:t,height:e,screenWidth:i,screenHeight:s,imageData:a}=this;return j`<svg width="${t}" height="${e}" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <g transform="translate(11.4 26)">
          <!-- 128 x 64 screen -->
          <rect fill="#1A1A1A" width="${i}" height="${s}" />
          <!-- image holder -->
          <foreignObject
            ?visibility="${a?"visible":"hidden"}"
            width="${i}"
            height="${s}"
          >
            <canvas width="${i}" height="${s}" class="pixelated"></canvas>
          </foreignObject>
        </g>

        <!-- All texts -->
        <g
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="MarkerFelt-Wide, Marker Felt, monospace"
        >
          <g transform="translate(37 3)">
            <text x="0" y="5">Data</text>
            <text x="19" y="5">SA0</text>
            <text x="41" y="5">CS</text>
            <text x="60" y="5">Vin</text>
          </g>

          <g transform="translate(41 17)">
            <text x="0" y="6">C1k</text>
            <text x="12" y="6">DC</text>
            <text x="23" y="6">Rst</text>
            <text x="39" y="6">3v3</text>
            <text x="58" y="6">Gnd</text>
          </g>
          <!-- Star -->
          <path
            d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
            stroke="#FFF"
          />
        </g>

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="41.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="31.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="21.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="12.5" cy="3.5" r="3.5" />
          <circle stroke="#E7DBDB" cx="3.5" cy="3.5" r="3.5" />
        </g>
      </g>
    </svg> `}};Lt([tt()],Xt.prototype,"imageData",void 0),Xt=Lt([J("wokwi-ssd1306")],Xt);var Wt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let qt=class extends ct{constructor(){super(...arguments),this.hasSignal=!1,this.pinInfo=[{name:"1",x:30,y:82,signals:[]},{name:"2",x:34,y:82,signals:[]}]}static get styles(){return ot`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `}render(){const t=this.hasSignal;return j`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${t?"":"hidden"}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>

        <svg
          width="17mm"
          height="20mm"
          version="1.1"
          viewBox="0 0 17 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m8 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
          <path d="m9 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
          <g stroke="#000">
            <g>
              <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
              <circle
                cx="8.5"
                cy="8.5"
                r="6.3472"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="4.3488"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
            </g>
            <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
          </g>
        </svg>
      </div>
    `}};Wt([tt()],qt.prototype,"hasSignal",void 0),qt=Wt([J("wokwi-buzzer")],qt);class Kt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const Zt=new WeakMap,Yt=y((t=>e=>{if(!(e instanceof D)||e instanceof T||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:s}=i;let a=Zt.get(e);void 0===a&&(s.setAttribute("class",i.strings.join(" ")),Zt.set(e,a=new Set));const n=s.classList||new Kt(s);a.forEach((e=>{e in t||(n.remove(e),a.delete(e))}));for(const e in t){const i=t[e];i!=a.has(e)&&(i?(n.add(e),a.add(e)):(n.remove(e),a.delete(e)))}"function"==typeof n.commit&&n.commit()}));var Jt=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Qt=class extends ct{constructor(){super(...arguments),this.digit="",this.stylesMapping={},this.classes={"rotate-path":!0},this.degrees=[320,56,87,115,143,173,204,232,260,290]}static get styles(){return ot`
      .text {
        cursor: grab;
        user-select: none;
      }
      input:focus + svg #container {
        stroke: #4e50d7;
        stroke-width: 3;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      .rotate-path {
        transform-origin: center;
        transition: transform 1000ms ease-in;
      }
      .dialer-anim {
        transform: rotate(var(--angle));
      }
    `}removeDialerAnim(){this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!1}),this.stylesMapping={"--angle":0},this.requestUpdate()}dial(t){this.digit=t,this.addDialerAnim(t)}onValueChange(t){const e=t.target;this.digit=parseInt(e.value),this.dial(this.digit),e.value=""}addDialerAnim(t){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("dial-start",{detail:{digit:this.digit}})),this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!0});const e=this.degrees[t];this.stylesMapping={"--angle":e+"deg"},this.requestUpdate()}))}focusInput(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".hide-input");null==e||e.focus()}render(){return j`
      <input
        tabindex="0"
        type="number"
        class="hide-input"
        value="${this.digit}"
        @input="${this.onValueChange}"
      />
      <svg width="266" height="266" @click="${this.focusInput}" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(1 1)">
          <circle stroke="#979797" stroke-width="3" fill="#1F1F1F" cx="133" cy="133" r="131" />
          <circle stroke="#fff" stroke-width="2" fill="#D8D8D8" cx="133" cy="133" r="72" />
          <path
            class=${Yt(this.classes)}
            @transitionstart="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial",{detail:{digit:this.digit}}))}}"
            @transitionend="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial-end",{detail:{digit:this.digit}})),this.removeDialerAnim()}}"
            d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,197 C96.4786916,197 107,207.521308 107,220.5 C107,233.478692 96.4786916,244 83.5,244 C70.5213084,244 60,233.478692 60,220.5 C60,207.521308 70.5213084,197 83.5,197 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M32.5,114 C45.4786916,114 56,124.521308 56,137.5 C56,150.478692 45.4786916,161 32.5,161 C19.5213084,161 9,150.478692 9,137.5 C9,124.521308 19.5213084,114 32.5,114 Z M234.5,93 C247.478692,93 258,103.521308 258,116.5 C258,129.478692 247.478692,140 234.5,140 C221.521308,140 211,129.478692 211,116.5 C211,103.521308 221.521308,93 234.5,93 Z M41.5,64 C54.4786916,64 65,74.5213084 65,87.5 C65,100.478692 54.4786916,111 41.5,111 C28.5213084,111 18,100.478692 18,87.5 C18,74.5213084 28.5213084,64 41.5,64 Z M214.5,46 C227.478692,46 238,56.5213084 238,69.5 C238,82.4786916 227.478692,93 214.5,93 C201.521308,93 191,82.4786916 191,69.5 C191,56.5213084 201.521308,46 214.5,46 Z M76.5,26 C89.4786916,26 100,36.5213084 100,49.5 C100,62.4786916 89.4786916,73 76.5,73 C63.5213084,73 53,62.4786916 53,49.5 C53,36.5213084 63.5213084,26 76.5,26 Z M173.5,15 C186.478692,15 197,25.5213084 197,38.5 C197,51.4786916 186.478692,62 173.5,62 C160.521308,62 150,51.4786916 150,38.5 C150,25.5213084 160.521308,15 173.5,15 Z M123.5,7 C136.478692,7 147,17.5213084 147,30.5 C147,43.4786916 136.478692,54 123.5,54 C110.521308,54 100,43.4786916 100,30.5 C100,17.5213084 110.521308,7 123.5,7 Z"
            id="slots"
            stroke="#fff"
            fill-opacity="0.5"
            fill="#D8D8D8"
            style=${jt(this.stylesMapping)}
          ></path>
        </g>
        <circle id="container" fill-opacity=".5" fill="#070707" cx="132.5" cy="132.5" r="132.5" />
        <g class="text" font-family="Marker Felt, monospace" font-size="21" fill="#FFF">
          <text @mouseup=${()=>this.dial(0)} x="129" y="243">0</text>
          <text @mouseup=${()=>this.dial(9)} x="78" y="230">9</text>
          <text @mouseup=${()=>this.dial(8)} x="40" y="194">8</text>
          <text @mouseup=${()=>this.dial(7)} x="28" y="145">7</text>
          <text @mouseup=${()=>this.dial(6)} x="35" y="97">6</text>
          <text @mouseup=${()=>this.dial(5)} x="72" y="58">5</text>
          <text @mouseup=${()=>this.dial(4)} x="117" y="41">4</text>
          <text @mouseup=${()=>this.dial(3)} x="168" y="47">3</text>
          <text @mouseup=${()=>this.dial(2)} x="210" y="79">2</text>
          <text @mouseup=${()=>this.dial(1)} x="230" y="126">1</text>
        </g>
        <path
          d="M182.738529,211.096297 L177.320119,238.659185 L174.670528,252.137377 L188.487742,252.137377 L182.738529,211.096297 Z"
          stroke="#979797"
          fill="#D8D8D8"
          transform="translate(181.562666, 230.360231) rotate(-22.000000) translate(-181.562666, -230.360231)"
        ></path>
      </svg>
    `}};Qt=Jt([J("wokwi-rotary-dialer")],Qt);var te=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ee=class extends ct{constructor(){super(...arguments),this.angle=0,this.horn="single",this.hornColor="#ccc",this.pinInfo=[{name:"GND",x:0,y:50,signals:[{type:"power",signal:"GND"}]},{name:"V+",x:0,y:59.5,signals:[{type:"power",signal:"VCC"}]},{name:"PWM",x:0,y:69,signals:[{type:"pwm"}]}]}hornPath(){switch(this.horn){case"cross":return"m119.54 50.354h-18.653v-18.653a8.4427 8.4427 0 0 0-8.4427-8.4427h-1.9537a8.4427 8.4427 0 0 0-8.4427 8.4427v18.653h-18.653a8.4427 8.4427 0 0 0-8.4427 8.4427v1.9537a8.4427 8.4427 0 0 0 8.4427 8.4427h18.653v18.653a8.4427 8.4427 0 0 0 8.4427 8.4427h1.9537a8.4427 8.4427 0 0 0 8.4427-8.4427v-18.653h18.653a8.4427 8.4427 0 0 0 8.4426-8.4427v-1.9537a8.4427 8.4427 0 0 0-8.4426-8.4427zm-57.447 12.136a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm20.621-34.813a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 8.7543a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 55.438a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm0-8.7543a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm5.9215-17.42a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843zm14.704-3.205a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165z";case"double":return"m101.63 57.808c-0.0768-0.48377-0.16978-0.8838-0.23258-1.1629l-4.112-51.454c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.1004 51.447c-0.07443 0.28607-0.16746 0.69774-0.24421 1.1629a12.473 12.473 0 0 0 0 3.9306c0.07675 0.48377 0.16978 0.8838 0.24421 1.1629l4.1004 51.461c0 2.8654 2.6026 5.1912 5.8145 5.1912s5.8145-2.3258 5.8145-5.1912l4.1004-51.447c0.0744-0.28607 0.16746-0.69774 0.23258-1.1629a12.473 12.473 0 0 0 0.0116-3.9376zm-4.2376 7.8868a8.3426 8.3426 0 0 1-3.5375 2.1072c-0.25816 0.07443-0.52098 0.13955-0.7838 0.19072a8.7217 8.7217 0 0 1-1.1978 0.1442c-0.26747 0.01163-0.53726 0.01163-0.80473 0a8.7217 8.7217 0 0 1-1.1978-0.1442c-0.26282-0.05117-0.52563-0.11629-0.78379-0.19072a8.3729 8.3729 0 0 1 0-16.048c0.25816-0.07675 0.52098-0.13955 0.78379-0.19072a8.7217 8.7217 0 0 1 1.1978-0.1442c0.26747-0.01163 0.53726-0.01163 0.80473 0a8.7217 8.7217 0 0 1 1.1978 0.1442c0.26282 0.05117 0.52563 0.11396 0.7838 0.19072a8.3729 8.3729 0 0 1 3.5375 13.955zm-5.9215-54.996a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 72.565a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.3729a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791z";default:return"m101.6 59.589-4.3167-54.166c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.3167 54.166a8.3264 8.3264 0 0 0-0.10234 1.2792c0 5.047 4.5818 9.1381 10.234 9.1381s10.234-4.0911 10.234-9.1381a8.3264 8.3264 0 0 0-0.10233-1.2792zm-10.131-48.658a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm5.9215 29.412a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843z"}}render(){var t;return j`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45mm"
        height="31.63mm"
        version="1.1"
        viewBox="0 0 170.08 119.55"
      >
        <defs>
          <g id="pin">
            <rect x="0" y="-1.91" width="3.72" height="3.71" />
            <path d="m2.026 -1.91h13.532l-13.425 0.51865z" />
            <path d="m2.026 1.80h13.532l-13.425-0.50702z" />
            <rect fill="#ccc" x="0.33" y="-1.23" width="3.04" height="2.46" rx=".15" />
          </g>
        </defs>
        <g stroke-width="2.7" fill="none">
          <path
            stroke="#b44200"
            d="m 83.32,56.6 c0,0 -32.99,0.96 -43.32,0 -6.20,-0.58 -10.60,-6.20 -14.87,-6.31"
          />
          <path stroke="#ff2300" d="m83.326 59.6h-62.971" />
          <path
            stroke="#f47b00"
            d="m 83.32,62.6 c0,0 -32.60,-0.61 -43.33,-0.15 -6.87,0.29 -12.01,6.82 -14.77,6.73"
          />
        </g>
        <rect fill="#666" y="45.5" width="25.71" height="28" rx="1.14" />
        <use xlink:href="#pin" x="4.7" y="50.06" />
        <use xlink:href="#pin" x="4.7" y="59.66" />
        <use xlink:href="#pin" x="4.7" y="69.26" />
        <path
          fill="#4d4d4d"
          d="m163.92 66.867a7.09 7.09 0 1 1 5.8145-11.136 0.18 0.18 0 0 0 0.33-0.10234v-14.346h-17.664v36.98h17.676v-14.346a0.18 0.18 0 0 0-0.333-0.107 7.08 7.08 0 0 1-5.83 3.06z"
        />
        <path
          fill="#4d4d4d"
          d="m55.068 66.75a7.09 7.09 0 1 0-5.8261-11.136 0.18 0.18 0 0 1-0.33-0.10234v-14.346h17.676v36.98h-17.676v-14.346a0.18 0.18 0 0 1 0.333-0.107 7.08 7.08 0 0 0 5.83 3.06z"
        />
        <rect fill="#666" x="64.255" y="37.911" width="90.241" height="43.725" rx="5.3331" />
        <path fill="gray" d="m110.07 50.005h-14.42v19.537h14.42a9.7684 9.7684 0 0 0 0-19.537z" />
        <circle fill="#999" cx="91.467" cy="59.773" r="18.606" />
        <path
          fill=${this.hornColor}
          transform="translate(91.467 59.773) rotate(${null!==(t=this.angle)&&void 0!==t?t:0}) translate(-91.467 -59.773)"
          d="${this.hornPath()}"
        />
        <circle fill="gray" cx="91.467" cy="59.773" r="8.3729" />
        <circle fill="#ccc" cx="91.467" cy="59.773" r="6.2494" />
        <path
          fill="#666"
          d="m94.911 62.543-2.3839-2.4165a0.42562 0.42562 0 0 1 0-0.60471l2.4281-2.3863a0.64657 0.64657 0 0 0 0.06512-0.8652 0.62797 0.62797 0 0 0-0.93032-0.05117l-2.4351 2.4049a0.4326 0.4326 0 0 1-0.60703 0l-2.3863-2.4165a0.6489 0.6489 0 0 0-0.8652-0.06512 0.63262 0.63262 0 0 0-0.05117 0.93032l2.4049 2.4328a0.42795 0.42795 0 0 1 0 0.60703l-2.4142 2.3863a0.65122 0.65122 0 0 0-0.06745 0.8652 0.63029 0.63029 0 0 0 0.93032 0.05117l2.4351-2.4049a0.42562 0.42562 0 0 1 0.60471 0l2.3863 2.4398a0.63262 0.63262 0 0 0 0.93032-0.04186 0.64657 0.64657 0 0 0-0.04419-0.8652z"
        />
      </svg>
    `}};te([tt()],ee.prototype,"angle",void 0),te([tt()],ee.prototype,"horn",void 0),te([tt()],ee.prototype,"hornColor",void 0),ee=te([J("wokwi-servo")],ee);var ie=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let se=class extends ct{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",x:10,y:114.9,signals:[{type:"power",signal:"VCC"}],number:1},{name:"SDA",x:22.4,y:114.9,signals:[],number:2},{name:"NC",x:35.3,y:114.9,signals:[],number:3},{name:"GND",x:48,y:114.9,signals:[{type:"power",signal:"GND"}],number:4}]}render(){return j`
      <svg
        width="15.1mm"
        height="30.885mm"
        version="1.1"
        viewBox="0 0 15.1 30.885"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="2.27" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="5.55" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="8.96" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="12.32" y="23.885" width=".75" height="7" rx=".2" />
        </g>
        <path
          d="M15.05 23.995V5.033m0 0c0-.107-1.069-4.962-2.662-4.96L2.803.09C1.193.09.05 4.926.05 5.033v18.962c0 .107.086.192.192.192h14.616a.192.192 0 00.192-.192M7.615.948h.004c1.08 0 1.956.847 1.956 1.892s-.876 1.892-1.956 1.892-1.956-.847-1.956-1.892c0-1.044.873-1.89 1.952-1.892zM4.967 8.66H5.9a.21.21 0 01.211.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.212-.21V8.87a.21.21 0 01.212-.211zm2.168 0h.934a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm2.152 0h.935a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm5.757 0v1.356m0 0h-3.217a.553.553 0 01-.554-.554v-.249a.55.55 0 01.554-.553h3.217M.05 8.66h3.282c.307 0 .554.247.554.553v.25a.552.552 0 01-.554.553H.05m0 1.054h3.282c.307 0 .554.247.554.554v.249a.552.552 0 01-.554.554H.05m4.917-1.357H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.212-.21v-.935a.21.21 0 01.212-.21zm2.168 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.211.211h-.934a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.153 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.539 0h3.217v1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553zM.05 13.547h3.282c.307 0 .553.247.553.554v.249a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.169 0h.933a.21.21 0 01.212.211v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm5.757 1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553h3.217m0 3.791h-3.218a.553.553 0 01-.553-.554v-.249c0-.306.247-.553.553-.553h3.218m-14.994 0h3.282c.307 0 .553.247.553.553v.25a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zm2.169 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.21h-.934a.21.21 0 01-.211-.21v-.934a.21.21 0 01.211-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zM.05 18.362h3.282c.307 0 .553.247.553.554v.25a.552.552 0 01-.553.552H.05m4.916-1.355H5.9a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm2.169 0h.933a.21.21 0 01.212.21v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.934a.21.21 0 01.21-.211zm2.152 0h.934a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm5.757 1.355h-3.218a.552.552 0 01-.553-.553v-.25c0-.306.247-.552.553-.552h3.218M10.49 5.056V7.31a.192.192 0 01-.193.193h-.85a.192.192 0 01-.193-.193V5.056H8.23v2.286a.192.192 0 01-.192.192h-.851a.192.192 0 01-.193-.192V5.056H5.94v2.286a.192.192 0 01-.193.192h-.85a.192.192 0 01-.193-.192V5.056C.033 5.025.05 5.033.05 5.033m15 0l-4.56.023v0"
          fill="#f2f2f2"
          stroke="#000"
          stroke-linecap="round"
          stroke-width=".1"
        />
        <text
          x="3.7415893"
          y="22.863354"
          fill="#000000"
          font-family="sans-serif"
          font-size="2.2px"
          stroke-width=".05"
          style="line-height:1.25"
        >
          DHT22
        </text>
      </svg>
    `}};se=ie([J("wokwi-dht22")],se);var ae=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ne=class extends ct{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.pinInfo=[{name:"SCL",x:90,y:9,signals:[ft("SCL")]},{name:"SDA",x:100,y:9,signals:[ft("SDA")]},{name:"AREF",x:109,y:9,signals:[]},{name:"GND.1",x:119,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:129,y:9,signals:[{type:"pwm"}]},{name:"12",x:138,y:9,signals:[{type:"pwm"}]},{name:"11",x:148,y:9,signals:[{type:"pwm"}]},{name:"10",x:157.5,y:9,signals:[{type:"pwm"}]},{name:"9",x:167.5,y:9,signals:[{type:"pwm"}]},{name:"8",x:177,y:9,signals:[{type:"pwm"}]},{name:"7",x:190,y:9,signals:[{type:"pwm"}]},{name:"6",x:200,y:9,signals:[{type:"pwm"}]},{name:"5",x:209.5,y:9,signals:[{type:"pwm"}]},{name:"4",x:219,y:9,signals:[{type:"pwm"}]},{name:"3",x:228.5,y:9,signals:[{type:"pwm"}]},{name:"2",x:238,y:9,signals:[{type:"pwm"}]},{name:"1",x:247.5,y:9,signals:[ut("TX")]},{name:"0",x:257.5,y:9,signals:[ut("RX")]},{name:"14",x:270.5,y:9,signals:[ut("TX",3)]},{name:"15",x:280,y:9,signals:[ut("RX",3)]},{name:"16",x:289.5,y:9,signals:[ut("TX",2)]},{name:"17",x:299,y:9,signals:[ut("RX",2)]},{name:"18",x:308.5,y:9,signals:[ut("TX",1)]},{name:"19",x:318.5,y:9,signals:[ut("RX",1)]},{name:"20",x:328,y:9,signals:[ft("SDA")]},{name:"21",x:337.5,y:9,signals:[ft("SCL")]},{name:"5V.1",x:361,y:8,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"5V.2",x:371,y:8,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"22",x:361,y:17.5,signals:[]},{name:"23",x:371,y:17.5,signals:[]},{name:"24",x:361,y:27.25,signals:[]},{name:"25",x:371,y:27.25,signals:[]},{name:"26",x:361,y:36.75,signals:[]},{name:"27",x:371,y:36.75,signals:[]},{name:"28",x:361,y:46.25,signals:[]},{name:"29",x:371,y:46.25,signals:[]},{name:"30",x:361,y:56,signals:[]},{name:"31",x:371,y:56,signals:[]},{name:"32",x:361,y:65.5,signals:[]},{name:"33",x:371,y:65.5,signals:[]},{name:"34",x:361,y:75,signals:[]},{name:"35",x:371,y:75,signals:[]},{name:"36",x:361,y:84.5,signals:[]},{name:"37",x:371,y:84.5,signals:[]},{name:"38",x:361,y:94.25,signals:[]},{name:"39",x:371,y:94.25,signals:[]},{name:"40",x:361,y:103.75,signals:[]},{name:"41",x:371,y:103.75,signals:[]},{name:"42",x:361,y:113.5,signals:[]},{name:"43",x:371,y:113.5,signals:[]},{name:"44",x:361,y:123,signals:[{type:"pwm"}]},{name:"45",x:371,y:123,signals:[{type:"pwm"}]},{name:"46",x:361,y:132.75,signals:[{type:"pwm"}]},{name:"47",x:371,y:132.75,signals:[]},{name:"48",x:361,y:142.25,signals:[]},{name:"49",x:371,y:142.25,signals:[]},{name:"50",x:361,y:152,signals:[yt("MISO")]},{name:"51",x:371,y:152,signals:[yt("MOSI")]},{name:"52",x:361,y:161.5,signals:[yt("SCK")]},{name:"53",x:371,y:161.5,signals:[yt("SS")]},{name:"GND.4",x:361,y:171.25,signals:[{type:"power",signal:"GND"}]},{name:"GND.5",x:371,y:171.25,signals:[{type:"power",signal:"GND"}]},{name:"IOREF",x:136,y:184.5,signals:[]},{name:"RESET",x:145.5,y:184.5,signals:[]},{name:"3.3V",x:155,y:184.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:164.5,y:184.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:174.25,y:184.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:183.75,y:184.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:193.5,y:184.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208.5,y:184.5,signals:[gt(0)]},{name:"A1",x:218,y:184.5,signals:[gt(1)]},{name:"A2",x:227.5,y:184.5,signals:[gt(2)]},{name:"A3",x:237.25,y:184.5,signals:[gt(3)]},{name:"A4",x:246.75,y:184.5,signals:[gt(4)]},{name:"A5",x:256.25,y:184.5,signals:[gt(5)]},{name:"A6",x:266,y:184.5,signals:[gt(6)]},{name:"A7",x:275.5,y:184.5,signals:[gt(7)]},{name:"A8",x:290.25,y:184.5,signals:[gt(8)]},{name:"A9",x:300,y:184.5,signals:[gt(9)]},{name:"A10",x:309.5,y:184.5,signals:[gt(10)]},{name:"A11",x:319.25,y:184.5,signals:[gt(11)]},{name:"A12",x:328.75,y:184.5,signals:[gt(12)]},{name:"A13",x:338.5,y:184.5,signals:[gt(13)]},{name:"A14",x:348,y:184.5,signals:[gt(14)]},{name:"A15",x:357.75,y:184.5,signals:[gt(15)]}]}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:s}=this;return j`
      <svg
        width="102.66mm"
        height="50.80mm"
        version="1.1"
        viewBox="-4 0 102.66 50.80"
        style="font-size: 2px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${pt}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <!-- PCB -->
        <path
          d="M2.105.075v50.653h94.068v-1.206l2.412-2.412V14.548l-2.412-2.413V2.487L93.785.075zm14.443.907a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.505 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0116.548.982zm71.154 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.505 1.505 1.505 0 01-1.505 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0187.702.982zM64.818 15.454a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm0 26.532a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm-49.476 4.825a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.504 1.505 1.505 0 01-1.506 1.506 1.505 1.505 0 01-1.505-1.506 1.505 1.505 0 011.476-1.504zm78.39 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.504 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506 1.505 1.505 0 011.476-1.504z"
          fill="#2b6b99"
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black" transform="translate(0 -4)">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(18.4 1.07)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.81 1.07)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(66 1.07)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(27.93 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.63 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(71.34 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(90.1 0.8)">
          <rect width="${5.46}" height="${45.72}" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <rect x="43" y="17.55" fill="#000" width="13.5" height="13.5" rx="0.5" />

        <!-- Programming Headers -->
        <g transform="translate(61.5 21.09)">
          <rect width="4.80" height="7" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(72.20 15.58)">
          <use xlink:href="#led-body" />
          ${t&&z`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="68" y="16.75">PWR</tspan>
        </text>

        <g transform="translate(26 13.86)">
          <use xlink:href="#led-body" />
          ${e&&z`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 18.52)">
          <use xlink:href="#led-body" />
          ${s&&z`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 20.75)">
          <use xlink:href="#led-body" />
          ${i&&z`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="29.4" y="15">L</tspan>
          <tspan x="29.4" y="19.8">TX</tspan>
          <tspan x="29.4" y="22">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="7.6" width="31.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.8">PWM</tspan>
        </text>

        <rect x="60.5" y="11.8" width="25.4" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="65" y="14.2">COMMUNICATION</tspan>
        </text>

        <text
          transform="translate(22.6 3.4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">11</tspan>
          <tspan x="0" dy="2.54">10</tspan>
          <tspan x="0" dy="2.54">9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">6</tspan>
          <tspan x="0" dy="2.54">5</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→ 1</tspan>
          <tspan x="0" dy="2.54">RX← 0</tspan>
          <tspan x="0" dy="3.34">TX3 14</tspan>
          <tspan x="0" dy="2.54">RX3 15</tspan>
          <tspan x="0" dy="2.54">TX2 16</tspan>
          <tspan x="0" dy="2.54">RX2 17</tspan>
          <tspan x="0" dy="2.54">TX1 18</tspan>
          <tspan x="0" dy="2.54">RX1 19</tspan>
          <tspan x="0" dy="2.54">SCL 20</tspan>
          <tspan x="0" dy="2.54">SDA 21</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="36" y="41.46" width="12.44" height="0.16" fill="#fff"></rect>
        <rect x="50" y="41.46" width="39" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="39" y="40.96">POWER</tspan>
          <tspan x="65" y="40.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(30.19 47) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="3.74">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">A6</tspan>
          <tspan x="0" dy="2.54">A7</tspan>
          <tspan x="0" dy="3.74">A8</tspan>
          <tspan x="0" dy="2.54">A9</tspan>
          <tspan x="0" dy="2.54">A10</tspan>
          <tspan x="0" dy="2.54">A11</tspan>
          <tspan x="0" dy="2.54">A12</tspan>
          <tspan x="0" dy="2.54">A13</tspan>
          <tspan x="0" dy="1.84">A14</tspan>
          <tspan x="0" dy="1.84">A15</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <text x="51.85" y="36" style="font-size:4px;font-weight:bold;line-height:1.25;fill:#fff">
          Arduino MEGA
        </text>
      </svg>
    `}};ae([tt()],ne.prototype,"led13",void 0),ae([tt()],ne.prototype,"ledRX",void 0),ae([tt()],ne.prototype,"ledTX",void 0),ae([tt()],ne.prototype,"ledPower",void 0),ne=ae([J("wokwi-arduino-mega")],ne);var re=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let oe=class extends ct{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"12",x:19.7,y:4.8,signals:[yt("MISO")]},{name:"11",x:29.3,y:4.8,signals:[yt("MOSI"),{type:"pwm"}]},{name:"10",x:38.9,y:4.8,signals:[yt("SS"),{type:"pwm"}]},{name:"9",x:48.5,y:4.8,signals:[{type:"pwm"}]},{name:"8",x:58.1,y:4.8,signals:[]},{name:"7",x:67.7,y:4.8,signals:[]},{name:"6",x:77.3,y:4.8,signals:[{type:"pwm"}]},{name:"5",x:86.9,y:4.8,signals:[{type:"pwm"}]},{name:"4",x:96.5,y:4.8,signals:[]},{name:"3",x:106.1,y:4.8,signals:[{type:"pwm"}]},{name:"2",x:115.7,y:4.8,signals:[]},{name:"GND.2",x:125.3,y:4.8,signals:[{type:"power",signal:"GND"}]},{name:"RESET.2",x:134.9,y:4.8,signals:[]},{name:"1",x:144.5,y:4.8,signals:[ut("TX")]},{name:"0",x:154.1,y:4.8,signals:[ut("RX")]},{name:"13",x:19.7,y:62.4,signals:[yt("SCK")]},{name:"3.3V",x:29.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"AREF",x:38.9,y:62.4,signals:[]},{name:"A0",x:48.5,y:62.4,signals:[gt(0)]},{name:"A1",x:58.1,y:62.4,signals:[gt(1)]},{name:"A2",x:67.7,y:62.4,signals:[gt(2)]},{name:"A3",x:77.3,y:62.4,signals:[gt(3)]},{name:"A4",x:86.9,y:62.4,signals:[gt(4),ft("SCL")]},{name:"A5",x:96.5,y:62.4,signals:[gt(5),ft("SDA")]},{name:"A6",x:106.1,y:62.4,signals:[gt(6)]},{name:"A7",x:115.7,y:62.4,signals:[gt(7)]},{name:"5V",x:125.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"RESET",x:134.9,y:62.4,signals:[]},{name:"GND.1",x:144.5,y:62.4,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:154.1,y:62.4,signals:[{type:"power",signal:"VCC"}]},{name:"12.2",x:163.7,y:43.2,signals:[yt("MISO")]},{name:"5V.2",x:154.1,y:43.2,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"13.2",x:163.7,y:33.6,signals:[yt("SCK")]},{name:"11.2",x:154.1,y:33.6,signals:[yt("MOSI"),{type:"pwm"}]},{name:"RESET.3",x:163.7,y:24,signals:[]},{name:"GND.3",x:154.1,y:24,signals:[{type:"power",signal:"GND"}]}]}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:s}=this;return j`
      <style>
        text {
          user-select: none;
        }
        circle[tabindex]:hover,
        circle[tabindex]:focus {
          stroke: white;
          outline: none;
        }
      </style>

      <svg
        width="44.9mm"
        height="17.8mm"
        viewBox="-1.4 0 44.9 17.8"
        font-size="1px"
        font-family="DejaVu Mono, Cascadia Mono, monospace"
        font-weight="bold"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="solderPlate" style="color-interpolation-filters:sRGB;">
            <feTurbulence result="r0" type="fractalNoise" baseFrequency="1" numOctaves="1" />
            <feComposite
              result="r1"
              in="r0"
              in2="SourceGraphic"
              operator="arithmetic"
              k1=".6"
              k2=".6"
              k3="1.2"
              k4=".25"
            />
            <feBlend result="r2" in="r1" in2="SourceGraphic" mode="luminosity" />
            <feComposite result="r3" in="r2" in2="SourceGraphic" operator="in" />
          </filter>
          <pattern id="pins-tqfp-0.5mm" width="1" height=".5" patternUnits="userSpaceOnUse">
            <rect fill="#333" width="1" height=".2" y=".17" />
          </pattern>
          <pattern id="pins-pth-0.75" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".375" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <pattern id="pins-pth-1.00" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".5" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#333" filter="url(#solderPlate)" />
            <rect x=".6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width=".05" />
          </g>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation=".5" />
          </filter>
        </defs>

        <!-- PCB -->
        <g id="pcb" fill="#fff">
          <rect width="43.5" height="17.8" x="0" y="0" fill="#1b7e84" />
          <circle cx="1" cy="1" r=".889" />
          <circle cx="42.42" cy="1" r=".889" />
          <circle cx="42.42" cy="16.6" r=".889" />
          <circle cx="1" cy="16.6" r=".889" />
        </g>

        <!-- silkscreen -->
        <g id="silkscreen" fill="#eee" text-anchor="middle">
          <rect x="30.48" y="0" width="2.54" height="3.2" />
          <rect x="35.56" y="14.6" width="2.54" height="3.2" />
          <g fill="#1b7e84" transform="translate(1.27 1.27)">
            <circle r=".85" cx="30.48" />
            <circle r=".85" cx="35.56" cy="15.24" />
          </g>
          <g transform="translate(1.27 3)">
            <text x="2.54">D12</text>
            <text x="5.08">D11</text>
            <text x="7.62">D10</text>
            <text x="10.16">D9</text>
            <text x="12.7">D8</text>
            <text x="15.24">D7</text>
            <text x="17.78">D6</text>
            <text x="20.32">D5</text>
            <text x="22.86">D4</text>
            <text x="25.4">D3</text>
            <text x="27.94">D2</text>
            <text x="30.48" fill="#1b7e84">GND</text>
            <text x="33.02">RST</text>
            <text x="35.56" y=".65" font-size="200%">↓</text>
            <text x="35.56" y="1.5">RX0</text>
            <text x="38.1" y=".65" font-size="200%">↑</text>
            <text x="38.1" y="1.5">TX0</text>
          </g>
          <g transform="translate(1.27 15.5)">
            <text x="2.54">D13</text>
            <text x="5.08">3V3</text>
            <text x="7.62">AREF</text>
            <text x="10.16">A0</text>
            <text x="12.7">A1</text>
            <text x="15.24">A2</text>
            <text x="17.78">A3</text>
            <text x="20.32">A4</text>
            <text x="22.86">A5</text>
            <text x="25.4">A6</text>
            <text x="27.94">A7</text>
            <text x="30.48">5V</text>
            <text x="33.02">RST</text>
            <text x="35.56" fill="#1b7e84">GND</text>
            <text x="38.1">VIN</text>
          </g>
          <g transform="rotate(90)">
            <text x="8.7" y="-22.5">RESET</text>
            <text x="5.6" y="-32.2">TX</text>
            <text x="5.6" y="-30.7" font-size="200%">↓</text>
            <text x="7.6" y="-32.2">RX</text>
            <text x="7.6" y="-30.7" font-size="200%">↑</text>
            <text x="9.6" y="-30.7">ON</text>
            <text x="11.6" y="-30.7">L</text>
          </g>
        </g>

        <!-- MCU -->
        <g id="mcu" transform="rotate(45 -2.978 23.39)">
          <g fill="url(#pins-tqfp-0.5mm)" filter="url(#solderPlate)">
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" />
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" transform="rotate(90)" />
          </g>
          <rect x="-2.275" y="-2.275" width="4.55" height="4.55" fill="#444" />
          <circle transform="rotate(45)" cx=".012" cy="-2.5" r=".35" fill="#222" />
        </g>

        <!-- pins -->
        <g id="pins" fill="url(#pins-pth-0.75)">
          <g id="pins-pin1" fill="#333" filter="url(#solderPlate)">
            <rect x="${38.495}" y="${.395}" width="1.75" height="1.75" />
            <rect x="${38.495}" y="${15.635000000000002}" width="1.75" height="1.75" />
          </g>
          <rect x="2.54" width="${38.1}" height="2.54" />
          <rect x="2.54" y="${15.24}" width="${38.1}" height="2.54" />
        </g>

        <!-- programming header -->
        <g id="pgm-header" fill="url(#pins-pth-1.00)" stroke="#eee" stroke-width=".1">
          <g id="pgm-pin1" stroke="none" fill="#333" filter="url(#solderPlate)">
            <rect x="${16.5*2.54-.875}" y="${10.555}" width="1.75" height="1.75" />
          </g>
          <rect x="${38.1}" y="${5.08}" width="${5.08}" height="${7.62}" />
        </g>

        <!-- USB mini type B -->
        <g id="usb-mini-b" stroke-width=".1" paint-order="stroke fill">
          <g fill="#333" filter="url(#solderPlate)">
            <rect x=".3" y="3.8" width="1.6" height="9.8" />
            <rect x="5.5" y="3.8" width="1.6" height="9.8" />
            <rect x="7.3" y="7.07" width="1.1" height=".48" />
            <rect x="7.3" y="7.82" width="1.1" height=".48" />
            <rect x="7.3" y="8.58" width="1.1" height=".48" />
            <rect x="7.3" y="9.36" width="1.1" height=".48" />
            <rect x="7.3" y="10.16" width="1.1" height=".48" />
          </g>
          <rect x="-1.4" y="4.8" width="8.9" height="7.8" fill="#999" stroke-width=".26" />
          <rect x="-1.25" y="5" width="8.6" height="7.4" fill="#ccc" stroke="#bbb" />
          <g fill="none" stroke="#333" stroke-width=".26" stroke-linecap="round">
            <path d="m2.6 5.9h-3.3v0.9h3.3m0 3.7h-3.3v0.9h3.3M-0.6 7.6l4.3 0.3v1.5l-4.3 0.3" />
            <path d="m3.3 7.9v1.5" stroke-width="1" stroke-linecap="butt" />
            <path d="m6 6.4v4.5" stroke-width=".35" />
          </g>
        </g>

        <!-- LEDs -->
        <g transform="translate(27.7 5)">
          <use xlink:href="#led-body" />
          ${s&&z`<circle cx="1.3" cy=".55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 7)">
          <use xlink:href="#led-body" />
          ${i&&z`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 9)">
          <use xlink:href="#led-body" />
          ${t&&z`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 11)">
          <use xlink:href="#led-body" />
          ${e&&z`<circle cx="1.3" cy=".55" r="1.3" fill="#ffff80" filter="url(#ledFilter)" />`}
        </g>

        <!-- reset button -->
        <g stroke-width=".1" paint-order="fill stroke">
          <rect x="24.3" y="6.3" width="1" height="4.8" filter="url(#solderPlate)" fill="#333" />
          <rect x="23.54" y="6.8" width="2.54" height="3.8" fill="#ccc" stroke="#888" />
          <circle
            id="reset-button"
            cx="24.8"
            cy="8.7"
            r="1"
            fill="#eeb"
            stroke="#777"
            tabindex="0"
            @mousedown=${()=>this.down()}
            @touchstart=${()=>this.down()}
            @mouseup=${()=>this.up()}
            @mouseleave=${()=>this.leave()}
            @touchend=${()=>this.leave()}
            @keydown=${t=>At.includes(t.key)&&this.down()}
            @keyup=${t=>At.includes(t.key)&&this.up()}
          />
        </g>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};var le,ce;re([tt()],oe.prototype,"led13",void 0),re([tt()],oe.prototype,"ledRX",void 0),re([tt()],oe.prototype,"ledTX",void 0),re([tt()],oe.prototype,"ledPower",void 0),re([tt()],oe.prototype,"resetPressed",void 0),re([(le="#reset-button",(t,e)=>{const i={get(){return this.renderRoot.querySelector(le)},enumerable:!0,configurable:!0};if(ce){const s=void 0!==e?e:t.key,a="symbol"==typeof s?Symbol():`__${s}`;i.get=function(){return void 0===this[a]&&(this[a]=this.renderRoot.querySelector(le)),this[a]}}return void 0!==e?et(i,t,e):it(i,t)})],oe.prototype,"resetButton",void 0),oe=re([J("wokwi-arduino-nano")],oe);class he{constructor(t,e=8192){this.progMem=t,this.sramBytes=e,this.data=new Uint8Array(this.sramBytes+256),this.data16=new Uint16Array(this.data.buffer),this.dataView=new DataView(this.data.buffer),this.progBytes=new Uint8Array(this.progMem.buffer),this.readHooks=[],this.writeHooks=[],this.pc22Bits=this.progBytes.length>131072,this.gpioTimerHooks=[],this.pc=0,this.cycles=0,this.reset()}reset(){this.data.fill(0),this.SP=this.data.length-1}readData(t){return t>=32&&this.readHooks[t]?this.readHooks[t](t):this.data[t]}writeData(t,e){const i=this.writeHooks[t];i&&i(e,this.data[t],t)||(this.data[t]=e)}get SP(){return this.dataView.getUint16(93,!0)}set SP(t){this.dataView.setUint16(93,t,!0)}get SREG(){return this.data[95]}get interruptsEnabled(){return!!(128&this.SREG)}}function de(t){return 36864==(65039&t)||37376==(65039&t)||37902==(65038&t)||37900==(65038&t)}function pe(t){const e=t.progMem[t.pc];if(7168==(64512&e)){const i=t.data[(496&e)>>4],s=t.data[15&e|(512&e)>>5],a=i+s+(1&t.data[95]),n=255&a;t.data[(496&e)>>4]=n;let r=192&t.data[95];r|=n?0:2,r|=128&n?4:0,r|=(n^s)&(i^n)&128?8:0,r|=r>>2&1^r>>3&1?16:0,r|=256&a?1:0,r|=1&(i&s|s&~n|~n&i)?32:0,t.data[95]=r}else if(3072==(64512&e)){const i=t.data[(496&e)>>4],s=t.data[15&e|(512&e)>>5],a=i+s&255;t.data[(496&e)>>4]=a;let n=192&t.data[95];n|=a?0:2,n|=128&a?4:0,n|=(a^s)&(a^i)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=i+s&256?1:0,n|=1&(i&s|s&~a|~a&i)?32:0,t.data[95]=n}else if(38400==(65280&e)){const i=2*((48&e)>>4)+24,s=t.dataView.getUint16(i,!0),a=s+(15&e|(192&e)>>2)&65535;t.dataView.setUint16(i,a,!0);let n=224&t.data[95];n|=a?0:2,n|=32768&a?4:0,n|=~s&a&32768?8:0,n|=n>>2&1^n>>3&1?16:0,n|=~a&s&32768?1:0,t.data[95]=n,t.cycles++}else if(8192==(64512&e)){const i=t.data[(496&e)>>4]&t.data[15&e|(512&e)>>5];t.data[(496&e)>>4]=i;let s=225&t.data[95];s|=i?0:2,s|=128&i?4:0,s|=s>>2&1^s>>3&1?16:0,t.data[95]=s}else if(28672==(61440&e)){const i=t.data[16+((240&e)>>4)]&(15&e|(3840&e)>>4);t.data[16+((240&e)>>4)]=i;let s=225&t.data[95];s|=i?0:2,s|=128&i?4:0,s|=s>>2&1^s>>3&1?16:0,t.data[95]=s}else if(37893==(65039&e)){const i=t.data[(496&e)>>4],s=i>>>1|128&i;t.data[(496&e)>>4]=s;let a=224&t.data[95];a|=s?0:2,a|=128&s?4:0,a|=1&i,a|=a>>2&1^1&a?8:0,a|=a>>2&1^a>>3&1?16:0,t.data[95]=a}else if(38024==(65423&e))t.data[95]&=~(1<<((112&e)>>4));else if(63488==(65032&e)){const i=7&e,s=(496&e)>>4;t.data[s]=~(1<<i)&t.data[s]|(t.data[95]>>6&1)<<i}else if(62464==(64512&e))t.data[95]&1<<(7&e)||(t.pc=t.pc+(((504&e)>>3)-(512&e?64:0)),t.cycles++);else if(61440==(64512&e))t.data[95]&1<<(7&e)&&(t.pc=t.pc+(((504&e)>>3)-(512&e?64:0)),t.cycles++);else if(37896==(65423&e))t.data[95]|=1<<((112&e)>>4);else if(64e3==(65032&e)){const i=t.data[(496&e)>>4],s=7&e;t.data[95]=191&t.data[95]|(i>>s&1?64:0)}else if(37902==(65038&e)){const i=t.progMem[t.pc+1]|(1&e)<<16|(496&e)<<13,s=t.pc+2,a=t.dataView.getUint16(93,!0),{pc22Bits:n}=t;t.data[a]=255&s,t.data[a-1]=s>>8&255,n&&(t.data[a-2]=s>>16&255),t.dataView.setUint16(93,a-(n?3:2),!0),t.pc=i-1,t.cycles+=n?4:3}else if(38912==(65280&e)){const i=248&e,s=7&e,a=t.readData(32+(i>>3));t.writeData(32+(i>>3),a&~(1<<s))}else if(37888==(65039&e)){const i=(496&e)>>4,s=255-t.data[i];t.data[i]=s;let a=225&t.data[95]|1;a|=s?0:2,a|=128&s?4:0,a|=a>>2&1^a>>3&1?16:0,t.data[95]=a}else if(5120==(64512&e)){const i=t.data[(496&e)>>4],s=t.data[15&e|(512&e)>>5],a=i-s;let n=192&t.data[95];n|=a?0:2,n|=128&a?4:0,n|=0!=((i^s)&(i^a)&128)?8:0,n|=n>>2&1^n>>3&1?16:0,n|=s>i?1:0,n|=1&(~i&s|s&a|a&~i)?32:0,t.data[95]=n}else if(1024==(64512&e)){const i=t.data[(496&e)>>4],s=t.data[15&e|(512&e)>>5];let a=t.data[95];const n=i-s-(1&a);a=192&a|(!n&&a>>1&1?2:0)|(s+(1&a)>i?1:0),a|=128&n?4:0,a|=(i^s)&(i^n)&128?8:0,a|=a>>2&1^a>>3&1?16:0,a|=1&(~i&s|s&n|n&~i)?32:0,t.data[95]=a}else if(12288==(61440&e)){const i=t.data[16+((240&e)>>4)],s=15&e|(3840&e)>>4,a=i-s;let n=192&t.data[95];n|=a?0:2,n|=128&a?4:0,n|=(i^s)&(i^a)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=s>i?1:0,n|=1&(~i&s|s&a|a&~i)?32:0,t.data[95]=n}else if(4096==(64512&e)){if(t.data[(496&e)>>4]===t.data[15&e|(512&e)>>5]){const e=de(t.progMem[t.pc+1])?2:1;t.pc+=e,t.cycles+=e}}else if(37898==(65039&e)){const i=t.data[(496&e)>>4],s=i-1;t.data[(496&e)>>4]=s;let a=225&t.data[95];a|=s?0:2,a|=128&s?4:0,a|=128===i?8:0,a|=a>>2&1^a>>3&1?16:0,t.data[95]=a}else if(38169===e){const e=t.pc+1,i=t.dataView.getUint16(93,!0),s=t.data[92];t.data[i]=255&e,t.data[i-1]=e>>8&255,t.data[i-2]=e>>16&255,t.dataView.setUint16(93,i-3,!0),t.pc=(s<<16|t.dataView.getUint16(30,!0))-1,t.cycles+=3}else if(37913===e){const e=t.data[92];t.pc=(e<<16|t.dataView.getUint16(30,!0))-1,t.cycles++}else if(38360===e){const e=t.data[91];t.data[0]=t.progBytes[e<<16|t.dataView.getUint16(30,!0)],t.cycles+=2}else if(36870==(65039&e)){const i=t.data[91];t.data[(496&e)>>4]=t.progBytes[i<<16|t.dataView.getUint16(30,!0)],t.cycles+=2}else if(36871==(65039&e)){const i=t.data[91],s=t.dataView.getUint16(30,!0);t.data[(496&e)>>4]=t.progBytes[i<<16|s],t.dataView.setUint16(30,s+1,!0),65535===s&&(t.data[91]=(i+1)%(t.progBytes.length>>16)),t.cycles+=2}else if(9216==(64512&e)){const i=t.data[(496&e)>>4]^t.data[15&e|(512&e)>>5];t.data[(496&e)>>4]=i;let s=225&t.data[95];s|=i?0:2,s|=128&i?4:0,s|=s>>2&1^s>>3&1?16:0,t.data[95]=s}else if(776==(65416&e)){const i=t.data[16+((112&e)>>4)],s=t.data[16+(7&e)],a=i*s<<1;t.dataView.setUint16(0,a,!0),t.data[95]=252&t.data[95]|(65535&a?0:2)|(i*s&32768?1:0),t.cycles++}else if(896==(65416&e)){const i=t.dataView.getInt8(16+((112&e)>>4)),s=t.dataView.getInt8(16+(7&e)),a=i*s<<1;t.dataView.setInt16(0,a,!0),t.data[95]=252&t.data[95]|(65535&a?0:2)|(i*s&32768?1:0),t.cycles++}else if(904==(65416&e)){const i=t.dataView.getInt8(16+((112&e)>>4)),s=t.data[16+(7&e)],a=i*s<<1;t.dataView.setInt16(0,a,!0),t.data[95]=252&t.data[95]|(65535&a?2:0)|(i*s&32768?1:0),t.cycles++}else if(38153===e){const e=t.pc+1,i=t.dataView.getUint16(93,!0),{pc22Bits:s}=t;t.data[i]=255&e,t.data[i-1]=e>>8&255,s&&(t.data[i-2]=e>>16&255),t.dataView.setUint16(93,i-(s?3:2),!0),t.pc=t.dataView.getUint16(30,!0)-1,t.cycles+=s?3:2}else if(37897===e)t.pc=t.dataView.getUint16(30,!0)-1,t.cycles++;else if(45056==(63488&e)){const i=t.readData(32+(15&e|(1536&e)>>5));t.data[(496&e)>>4]=i}else if(37891==(65039&e)){const i=t.data[(496&e)>>4],s=i+1&255;t.data[(496&e)>>4]=s;let a=225&t.data[95];a|=s?0:2,a|=128&s?4:0,a|=127===i?8:0,a|=a>>2&1^a>>3&1?16:0,t.data[95]=a}else if(37900==(65038&e))t.pc=(t.progMem[t.pc+1]|(1&e)<<16|(496&e)<<13)-1,t.cycles+=2;else if(37382==(65039&e)){const i=(496&e)>>4,s=t.data[i],a=t.readData(t.dataView.getUint16(30,!0));t.writeData(t.dataView.getUint16(30,!0),a&255-s),t.data[i]=a}else if(37381==(65039&e)){const i=(496&e)>>4,s=t.data[i],a=t.readData(t.dataView.getUint16(30,!0));t.writeData(t.dataView.getUint16(30,!0),a|s),t.data[i]=a}else if(37383==(65039&e)){const i=t.data[(496&e)>>4],s=t.readData(t.dataView.getUint16(30,!0));t.writeData(t.dataView.getUint16(30,!0),i^s),t.data[(496&e)>>4]=s}else if(57344==(61440&e))t.data[16+((240&e)>>4)]=15&e|(3840&e)>>4;else if(36864==(65039&e)){t.cycles++;const i=t.readData(t.progMem[t.pc+1]);t.data[(496&e)>>4]=i,t.pc++}else if(36876==(65039&e))t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(26,!0));else if(36877==(65039&e)){const i=t.dataView.getUint16(26,!0);t.cycles++,t.data[(496&e)>>4]=t.readData(i),t.dataView.setUint16(26,i+1,!0)}else if(36878==(65039&e)){const i=t.dataView.getUint16(26,!0)-1;t.dataView.setUint16(26,i,!0),t.cycles++,t.data[(496&e)>>4]=t.readData(i)}else if(32776==(65039&e))t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(28,!0));else if(36873==(65039&e)){const i=t.dataView.getUint16(28,!0);t.cycles++,t.data[(496&e)>>4]=t.readData(i),t.dataView.setUint16(28,i+1,!0)}else if(36874==(65039&e)){const i=t.dataView.getUint16(28,!0)-1;t.dataView.setUint16(28,i,!0),t.cycles++,t.data[(496&e)>>4]=t.readData(i)}else if(32776==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(28,!0)+(7&e|(3072&e)>>7|(8192&e)>>8));else if(32768==(65039&e))t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(30,!0));else if(36865==(65039&e)){const i=t.dataView.getUint16(30,!0);t.cycles++,t.data[(496&e)>>4]=t.readData(i),t.dataView.setUint16(30,i+1,!0)}else if(36866==(65039&e)){const i=t.dataView.getUint16(30,!0)-1;t.dataView.setUint16(30,i,!0),t.cycles++,t.data[(496&e)>>4]=t.readData(i)}else if(32768==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(30,!0)+(7&e|(3072&e)>>7|(8192&e)>>8));else if(38344===e)t.data[0]=t.progBytes[t.dataView.getUint16(30,!0)],t.cycles+=2;else if(36868==(65039&e))t.data[(496&e)>>4]=t.progBytes[t.dataView.getUint16(30,!0)],t.cycles+=2;else if(36869==(65039&e)){const i=t.dataView.getUint16(30,!0);t.data[(496&e)>>4]=t.progBytes[i],t.dataView.setUint16(30,i+1,!0),t.cycles+=2}else if(37894==(65039&e)){const i=t.data[(496&e)>>4],s=i>>>1;t.data[(496&e)>>4]=s;let a=224&t.data[95];a|=s?0:2,a|=1&i,a|=a>>2&1^1&a?8:0,a|=a>>2&1^a>>3&1?16:0,t.data[95]=a}else if(11264==(64512&e))t.data[(496&e)>>4]=t.data[15&e|(512&e)>>5];else if(256==(65280&e)){const i=2*(15&e),s=2*((240&e)>>4);t.data[s]=t.data[i],t.data[s+1]=t.data[i+1]}else if(39936==(64512&e)){const i=t.data[(496&e)>>4]*t.data[15&e|(512&e)>>5];t.dataView.setUint16(0,i,!0),t.data[95]=252&t.data[95]|(65535&i?0:2)|(32768&i?1:0),t.cycles++}else if(512==(65280&e)){const i=t.dataView.getInt8(16+((240&e)>>4))*t.dataView.getInt8(16+(15&e));t.dataView.setInt16(0,i,!0),t.data[95]=252&t.data[95]|(65535&i?0:2)|(32768&i?1:0),t.cycles++}else if(768==(65416&e)){const i=t.dataView.getInt8(16+((112&e)>>4))*t.data[16+(7&e)];t.dataView.setInt16(0,i,!0),t.data[95]=252&t.data[95]|(65535&i?0:2)|(32768&i?1:0),t.cycles++}else if(37889==(65039&e)){const i=(496&e)>>4,s=t.data[i],a=0-s;t.data[i]=a;let n=192&t.data[95];n|=a?0:2,n|=128&a?4:0,n|=128===a?8:0,n|=n>>2&1^n>>3&1?16:0,n|=a?1:0,n|=1&(a|s)?32:0,t.data[95]=n}else if(0===e);else if(10240==(64512&e)){const i=t.data[(496&e)>>4]|t.data[15&e|(512&e)>>5];t.data[(496&e)>>4]=i;let s=225&t.data[95];s|=i?0:2,s|=128&i?4:0,s|=s>>2&1^s>>3&1?16:0,t.data[95]=s}else if(24576==(61440&e)){const i=t.data[16+((240&e)>>4)]|15&e|(3840&e)>>4;t.data[16+((240&e)>>4)]=i;let s=225&t.data[95];s|=i?0:2,s|=128&i?4:0,s|=s>>2&1^s>>3&1?16:0,t.data[95]=s}else if(47104==(63488&e))t.writeData(32+(15&e|(1536&e)>>5),t.data[(496&e)>>4]);else if(36879==(65039&e)){const i=t.dataView.getUint16(93,!0)+1;t.dataView.setUint16(93,i,!0),t.data[(496&e)>>4]=t.data[i],t.cycles++}else if(37391==(65039&e)){const i=t.dataView.getUint16(93,!0);t.data[i]=t.data[(496&e)>>4],t.dataView.setUint16(93,i-1,!0),t.cycles++}else if(53248==(61440&e)){const i=(2047&e)-(2048&e?2048:0),s=t.pc+1,a=t.dataView.getUint16(93,!0),{pc22Bits:n}=t;t.data[a]=255&s,t.data[a-1]=s>>8&255,n&&(t.data[a-2]=s>>16&255),t.dataView.setUint16(93,a-(n?3:2),!0),t.pc+=i,t.cycles+=n?3:2}else if(38152===e){const{pc22Bits:e}=t,i=t.dataView.getUint16(93,!0)+(e?3:2);t.dataView.setUint16(93,i,!0),t.pc=(t.data[i-1]<<8)+t.data[i]-1,e&&(t.pc|=t.data[i-2]<<16),t.cycles+=e?4:3}else if(38168===e){const{pc22Bits:e}=t,i=t.dataView.getUint16(93,!0)+(e?3:2);t.dataView.setUint16(93,i,!0),t.pc=(t.data[i-1]<<8)+t.data[i]-1,e&&(t.pc|=t.data[i-2]<<16),t.cycles+=e?4:3,t.data[95]|=128}else if(49152==(61440&e))t.pc=t.pc+((2047&e)-(2048&e?2048:0)),t.cycles++;else if(37895==(65039&e)){const i=t.data[(496&e)>>4],s=i>>>1|(1&t.data[95])<<7;t.data[(496&e)>>4]=s;let a=224&t.data[95];a|=s?0:2,a|=128&s?4:0,a|=1&i?1:0,a|=a>>2&1^1&a?8:0,a|=a>>2&1^a>>3&1?16:0,t.data[95]=a}else if(2048==(64512&e)){const i=t.data[(496&e)>>4],s=t.data[15&e|(512&e)>>5];let a=t.data[95];const n=i-s-(1&a);t.data[(496&e)>>4]=n,a=192&a|(!n&&a>>1&1?2:0)|(s+(1&a)>i?1:0),a|=128&n?4:0,a|=(i^s)&(i^n)&128?8:0,a|=a>>2&1^a>>3&1?16:0,a|=1&(~i&s|s&n|n&~i)?32:0,t.data[95]=a}else if(16384==(61440&e)){const i=t.data[16+((240&e)>>4)],s=15&e|(3840&e)>>4;let a=t.data[95];const n=i-s-(1&a);t.data[16+((240&e)>>4)]=n,a=192&a|(!n&&a>>1&1?2:0)|(s+(1&a)>i?1:0),a|=128&n?4:0,a|=(i^s)&(i^n)&128?8:0,a|=a>>2&1^a>>3&1?16:0,a|=1&(~i&s|s&n|n&~i)?32:0,t.data[95]=a}else if(39424==(65280&e)){const i=32+((248&e)>>3);t.writeData(i,t.readData(i)|1<<(7&e)),t.cycles++}else if(39168==(65280&e)){if(!(t.readData(32+((248&e)>>3))&1<<(7&e))){const e=de(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(39680==(65280&e)){if(t.readData(32+((248&e)>>3))&1<<(7&e)){const e=de(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(38656==(65280&e)){const i=2*((48&e)>>4)+24,s=t.dataView.getUint16(i,!0),a=15&e|(192&e)>>2,n=s-a;t.dataView.setUint16(i,n,!0);let r=192&t.data[95];r|=n?0:2,r|=32768&n?4:0,r|=s&~n&32768?8:0,r|=r>>2&1^r>>3&1?16:0,r|=a>s?1:0,r|=1&(~s&a|a&n|n&~s)?32:0,t.data[95]=r,t.cycles++}else if(64512==(65032&e)){if(!(t.data[(496&e)>>4]&1<<(7&e))){const e=de(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(65024==(65032&e)){if(t.data[(496&e)>>4]&1<<(7&e)){const e=de(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(38280===e);else if(38376===e);else if(38392===e);else if(37376==(65039&e)){const i=t.data[(496&e)>>4],s=t.progMem[t.pc+1];t.writeData(s,i),t.pc++,t.cycles++}else if(37388==(65039&e))t.writeData(t.dataView.getUint16(26,!0),t.data[(496&e)>>4]),t.cycles++;else if(37389==(65039&e)){const i=t.dataView.getUint16(26,!0);t.writeData(i,t.data[(496&e)>>4]),t.dataView.setUint16(26,i+1,!0),t.cycles++}else if(37390==(65039&e)){const i=t.data[(496&e)>>4],s=t.dataView.getUint16(26,!0)-1;t.dataView.setUint16(26,s,!0),t.writeData(s,i),t.cycles++}else if(33288==(65039&e))t.writeData(t.dataView.getUint16(28,!0),t.data[(496&e)>>4]),t.cycles++;else if(37385==(65039&e)){const i=t.data[(496&e)>>4],s=t.dataView.getUint16(28,!0);t.writeData(s,i),t.dataView.setUint16(28,s+1,!0),t.cycles++}else if(37386==(65039&e)){const i=t.data[(496&e)>>4],s=t.dataView.getUint16(28,!0)-1;t.dataView.setUint16(28,s,!0),t.writeData(s,i),t.cycles++}else if(33288==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.writeData(t.dataView.getUint16(28,!0)+(7&e|(3072&e)>>7|(8192&e)>>8),t.data[(496&e)>>4]),t.cycles++;else if(33280==(65039&e))t.writeData(t.dataView.getUint16(30,!0),t.data[(496&e)>>4]),t.cycles++;else if(37377==(65039&e)){const i=t.dataView.getUint16(30,!0);t.writeData(i,t.data[(496&e)>>4]),t.dataView.setUint16(30,i+1,!0),t.cycles++}else if(37378==(65039&e)){const i=t.data[(496&e)>>4],s=t.dataView.getUint16(30,!0)-1;t.dataView.setUint16(30,s,!0),t.writeData(s,i),t.cycles++}else if(33280==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.writeData(t.dataView.getUint16(30,!0)+(7&e|(3072&e)>>7|(8192&e)>>8),t.data[(496&e)>>4]),t.cycles++;else if(6144==(64512&e)){const i=t.data[(496&e)>>4],s=t.data[15&e|(512&e)>>5],a=i-s;t.data[(496&e)>>4]=a;let n=192&t.data[95];n|=a?0:2,n|=128&a?4:0,n|=(i^s)&(i^a)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=s>i?1:0,n|=1&(~i&s|s&a|a&~i)?32:0,t.data[95]=n}else if(20480==(61440&e)){const i=t.data[16+((240&e)>>4)],s=15&e|(3840&e)>>4,a=i-s;t.data[16+((240&e)>>4)]=a;let n=192&t.data[95];n|=a?0:2,n|=128&a?4:0,n|=(i^s)&(i^a)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=s>i?1:0,n|=1&(~i&s|s&a|a&~i)?32:0,t.data[95]=n}else if(37890==(65039&e)){const i=(496&e)>>4,s=t.data[i];t.data[i]=(15&s)<<4|(240&s)>>>4}else if(38312===e);else if(37380==(65039&e)){const i=(496&e)>>4,s=t.data[i],a=t.data[t.dataView.getUint16(30,!0)];t.data[t.dataView.getUint16(30,!0)]=s,t.data[i]=a}t.pc=(t.pc+1)%t.progMem.length,t.cycles++}function ge(t,e){const i=t.dataView.getUint16(93,!0);t.data[i]=255&t.pc,t.data[i-1]=t.pc>>8&255,t.pc22Bits&&(t.data[i-2]=t.pc>>16&255),t.dataView.setUint16(93,i-(t.pc22Bits?3:2),!0),t.data[95]&=127,t.cycles+=2,t.pc=e}const fe={PIN:35,DDR:36,PORT:37},ye={PIN:38,DDR:39,PORT:40},ue={PIN:41,DDR:42,PORT:43};var me,xe;!function(t){t[t.Low=0]="Low",t[t.High=1]="High",t[t.Input=2]="Input",t[t.InputPullUp=3]="InputPullUp"}(me||(me={})),function(t){t[t.None=0]="None",t[t.Enable=1]="Enable",t[t.Set=2]="Set",t[t.Clear=3]="Clear",t[t.Toggle=4]="Toggle"}(xe||(xe={}));class we{constructor(t,e){this.cpu=t,this.portConfig=e,this.listeners=[],this.pinValue=0,this.overrideMask=255,this.lastValue=0,this.lastDdr=0,t.writeHooks[e.DDR]=i=>{const s=t.data[e.PORT];return t.data[e.DDR]=i,this.updatePinRegister(s,i),this.writeGpio(s,i),!0},t.writeHooks[e.PORT]=i=>{const s=t.data[e.DDR];return t.data[e.PORT]=i,this.updatePinRegister(i,s),this.writeGpio(i,s),!0},t.writeHooks[e.PIN]=i=>{const s=t.data[e.PORT],a=t.data[e.DDR],n=s^i;return t.data[e.PORT]=n,t.data[e.PIN]=t.data[e.PIN]&~a|n&a,this.writeGpio(n,a),!0},t.gpioTimerHooks[e.PORT]=(i,s)=>{const a=1<<i;if(s==xe.None)this.overrideMask|=a;else switch(this.overrideMask&=~a,s){case xe.Enable:this.overrideValue&=~a,this.overrideValue|=t.data[e.PORT]&a;break;case xe.Set:this.overrideValue|=a;break;case xe.Clear:this.overrideValue&=~a;break;case xe.Toggle:this.overrideValue^=a}this.writeGpio(t.data[e.PORT],t.data[e.DDR])}}addListener(t){this.listeners.push(t)}removeListener(t){this.listeners=this.listeners.filter((e=>e!==t))}pinState(t){const e=this.cpu.data[this.portConfig.DDR],i=this.cpu.data[this.portConfig.PORT],s=1<<t;return e&s?this.lastValue&s?me.High:me.Low:i&s?me.InputPullUp:me.Input}setPin(t,e){const i=1<<t;this.pinValue&=~i,e&&(this.pinValue|=i),this.updatePinRegister(this.cpu.data[this.portConfig.PORT],this.cpu.data[this.portConfig.DDR])}updatePinRegister(t,e){this.cpu.data[this.portConfig.PIN]=this.pinValue&~e|t&e}writeGpio(t,e){const i=(t&this.overrideMask|this.overrideValue)&e|t&~e,s=this.lastValue;if(i!==s||e!==this.lastDdr){this.lastValue=i,this.lastDdr=e;for(const t of this.listeners)t(i,s)}}}const ve={0:0,1:1,2:8,3:64,4:256,5:1024,6:0,7:0},be={bits:8,captureInterrupt:0,compAInterrupt:28,compBInterrupt:30,ovfInterrupt:32,TIFR:53,OCRA:71,OCRB:72,ICR:0,TCNT:70,TCCRA:68,TCCRB:69,TCCRC:0,TIMSK:110,dividers:ve,compPortA:ue.PORT,compPinA:6,compPortB:ue.PORT,compPinB:5},Ce={bits:16,captureInterrupt:20,compAInterrupt:22,compBInterrupt:24,ovfInterrupt:26,TIFR:54,OCRA:136,OCRB:138,ICR:134,TCNT:132,TCCRA:128,TCCRB:129,TCCRC:130,TIMSK:111,dividers:ve,compPortA:fe.PORT,compPinA:1,compPortB:fe.PORT,compPinB:2},Se={bits:8,captureInterrupt:0,compAInterrupt:14,compBInterrupt:16,ovfInterrupt:18,TIFR:55,OCRA:179,OCRB:180,ICR:0,TCNT:178,TCCRA:176,TCCRB:177,TCCRC:0,TIMSK:112,dividers:{0:0,1:1,2:8,3:32,4:64,5:128,6:256,7:1024},compPortA:fe.PORT,compPinA:3,compPortB:ue.PORT,compPinB:3};var ke,Pe,Re,De,Ae,Oe;(Pe=ke||(ke={}))[Pe.Normal=0]="Normal",Pe[Pe.PWMPhaseCorrect=1]="PWMPhaseCorrect",Pe[Pe.CTC=2]="CTC",Pe[Pe.FastPWM=3]="FastPWM",Pe[Pe.PWMPhaseFrequencyCorrect=4]="PWMPhaseFrequencyCorrect",Pe[Pe.Reserved=5]="Reserved",(De=Re||(Re={}))[De.Max=0]="Max",De[De.Top=1]="Top",De[De.Bottom=2]="Bottom",(Oe=Ae||(Ae={}))[Oe.Immediate=0]="Immediate",Oe[Oe.Top=1]="Top",Oe[Oe.Bottom=2]="Bottom";const $e=[[ke.Normal,255,Ae.Immediate,Re.Max],[ke.PWMPhaseCorrect,255,Ae.Top,Re.Bottom],[ke.CTC,1,Ae.Immediate,Re.Max],[ke.FastPWM,255,Ae.Bottom,Re.Max],[ke.Reserved,255,Ae.Immediate,Re.Max],[ke.PWMPhaseCorrect,1,Ae.Top,Re.Bottom],[ke.Reserved,255,Ae.Immediate,Re.Max],[ke.FastPWM,1,Ae.Bottom,Re.Top]],Te=[[ke.Normal,65535,Ae.Immediate,Re.Max],[ke.PWMPhaseCorrect,255,Ae.Top,Re.Bottom],[ke.PWMPhaseCorrect,511,Ae.Top,Re.Bottom],[ke.PWMPhaseCorrect,1023,Ae.Top,Re.Bottom],[ke.CTC,1,Ae.Immediate,Re.Max],[ke.FastPWM,255,Ae.Bottom,Re.Top],[ke.FastPWM,511,Ae.Bottom,Re.Top],[ke.FastPWM,1023,Ae.Bottom,Re.Top],[ke.PWMPhaseFrequencyCorrect,2,Ae.Bottom,Re.Bottom],[ke.PWMPhaseFrequencyCorrect,1,Ae.Bottom,Re.Bottom],[ke.PWMPhaseCorrect,2,Ae.Top,Re.Bottom],[ke.PWMPhaseCorrect,1,Ae.Top,Re.Bottom],[ke.CTC,2,Ae.Immediate,Re.Max],[ke.Reserved,65535,Ae.Immediate,Re.Max],[ke.FastPWM,2,Ae.Bottom,Re.Top],[ke.FastPWM,1,Ae.Bottom,Re.Top]];class Ve{constructor(t,e){if(this.cpu=t,this.config=e,this.lastCycle=0,this.ocrA=0,this.ocrB=0,this.icr=0,this.tcnt=0,this.tcntUpdated=!1,this.countingUp=!0,this.divider=0,this.pendingInterrupt=!1,this.highByteTemp=0,this.updateWGMConfig(),this.cpu.readHooks[e.TCNT]=t=>(this.tick(),16===this.config.bits&&(this.cpu.data[t+1]=this.tcnt>>8),this.cpu.data[t]=255&this.tcnt),this.cpu.writeHooks[e.TCNT]=t=>{this.tcnt=this.highByteTemp<<8|t,this.countingUp=!0,this.tcntUpdated=!0,this.timerUpdated()},this.cpu.writeHooks[e.OCRA]=t=>{this.ocrA=this.highByteTemp<<8|t},this.cpu.writeHooks[e.OCRB]=t=>{this.ocrB=this.highByteTemp<<8|t},this.cpu.writeHooks[e.ICR]=t=>{this.icr=this.highByteTemp<<8|t},16===this.config.bits){const t=t=>{this.highByteTemp=t};this.cpu.writeHooks[e.TCNT+1]=t,this.cpu.writeHooks[e.OCRA+1]=t,this.cpu.writeHooks[e.OCRB+1]=t,this.cpu.writeHooks[e.ICR+1]=t}t.writeHooks[e.TCCRA]=t=>(this.cpu.data[e.TCCRA]=t,this.compA=t>>6&3,this.updateCompA(this.compA?xe.Enable:xe.None),this.compB=t>>4&3,this.updateCompB(this.compB?xe.Enable:xe.None),this.updateWGMConfig(),!0),t.writeHooks[e.TCCRB]=t=>(this.cpu.data[e.TCCRB]=t,this.tcntUpdated=!0,this.divider=this.config.dividers[this.CS],this.updateWGMConfig(),!0)}reset(){this.divider=0,this.lastCycle=0,this.ocrA=0,this.ocrB=0}get TIFR(){return this.cpu.data[this.config.TIFR]}set TIFR(t){this.pendingInterrupt=t>0,this.cpu.data[this.config.TIFR]=t}get TCCRA(){return this.cpu.data[this.config.TCCRA]}get TCCRB(){return this.cpu.data[this.config.TCCRB]}get TIMSK(){return this.cpu.data[this.config.TIMSK]}get CS(){return 7&this.TCCRB}get WGM(){const t=16===this.config.bits?24:8;return(this.TCCRB&t)>>1|3&this.TCCRA}get TOP(){switch(this.topValue){case 1:return this.ocrA;case 2:return this.icr;default:return this.topValue}}updateWGMConfig(){const t=16===this.config.bits?Te:$e,[e,i]=t[this.WGM];this.timerMode=e,this.topValue=i}tick(){const{divider:t,lastCycle:e}=this,i=this.cpu.cycles-e;if(t&&i>=t){const e=Math.floor(i/t);this.lastCycle+=e*t;const s=this.tcnt,{timerMode:a}=this,n=a===ke.PWMPhaseCorrect||a===ke.PWMPhaseFrequencyCorrect?this.phasePwmCount(s,e):(s+e)%(this.TOP+1);this.tcntUpdated||(this.tcnt=n,this.timerUpdated()),(a===ke.Normal||a===ke.FastPWM)&&s>n&&(this.TIFR|=1)}if(this.tcntUpdated=!1,this.cpu.interruptsEnabled&&this.pendingInterrupt){const{TIFR:t,TIMSK:e}=this;1&t&&1&e&&(ge(this.cpu,this.config.ovfInterrupt),this.TIFR&=-2),2&t&&2&e&&(ge(this.cpu,this.config.compAInterrupt),this.TIFR&=-3),4&t&&4&e&&(ge(this.cpu,this.config.compBInterrupt),this.TIFR&=-5),this.pendingInterrupt=!1}}phasePwmCount(t,e){for(;e>0;)this.countingUp?++t!==this.TOP||this.tcntUpdated||(this.countingUp=!1):--t||this.tcntUpdated||(this.countingUp=!0,this.TIFR|=1),e--;return t}timerUpdated(){const t=this.tcnt;this.ocrA&&t===this.ocrA&&(this.TIFR|=2,this.timerMode===ke.CTC&&(this.tcnt=0,this.TIFR|=1),this.compA&&this.updateCompPin(this.compA,"A")),this.ocrB&&t===this.ocrB&&(this.TIFR|=4,this.compB&&this.updateCompPin(this.compB,"B"))}updateCompPin(t,e){let i=xe.None;const s=3===t,a=this.countingUp===s;switch(this.timerMode){case ke.Normal:case ke.CTC:case ke.FastPWM:i=function(t){switch(t){case 1:return xe.Toggle;case 2:return xe.Clear;case 3:return xe.Set;default:return xe.Enable}}(t);break;case ke.PWMPhaseCorrect:case ke.PWMPhaseFrequencyCorrect:i=a?xe.Set:xe.Clear}i!==xe.None&&("A"===e?this.updateCompA(i):this.updateCompB(i))}updateCompA(t){const{compPortA:e,compPinA:i}=this.config,s=this.cpu.gpioTimerHooks[e];s&&s(i,t,e)}updateCompB(t){const{compPortB:e,compPinB:i}=this.config,s=this.cpu.gpioTimerHooks[e];s&&s(i,t,e)}}const _e={rxCompleteInterrupt:36,dataRegisterEmptyInterrupt:38,txCompleteInterrupt:40,UCSRA:192,UCSRB:193,UCSRC:194,UBRRL:196,UBRRH:197,UDR:198};class Me{constructor(t,e,i){this.cpu=t,this.config=e,this.freqMHz=i,this.onByteTransmit=null,this.onLineTransmit=null,this.lineBuffer="",this.cpu.writeHooks[e.UCSRA]=t=>(this.cpu.data[e.UCSRA]=96|t,!0),this.cpu.writeHooks[e.UCSRB]=(t,i)=>{8&t&&!(8&i)&&(this.cpu.data[e.UCSRA]|=32)},this.cpu.writeHooks[e.UDR]=t=>{if(this.onByteTransmit&&this.onByteTransmit(t),this.onLineTransmit){const e=String.fromCharCode(t);"\n"===e?(this.onLineTransmit(this.lineBuffer),this.lineBuffer=""):this.lineBuffer+=e}this.cpu.data[e.UCSRA]|=96}}tick(){if(this.cpu.interruptsEnabled){const t=this.cpu.data[this.config.UCSRA],e=this.cpu.data[this.config.UCSRB];32&t&&32&e&&(ge(this.cpu,this.config.dataRegisterEmptyInterrupt),this.cpu.data[this.config.UCSRA]&=-33),64&t&&64&e&&(ge(this.cpu,this.config.txCompleteInterrupt),this.cpu.data[this.config.UCSRA]&=-65)}}get baudRate(){const t=this.cpu.data[this.config.UBRRH]<<8|this.cpu.data[this.config.UBRRL],e=2&this.cpu.data[this.config.UCSRA]?8:16;return Math.floor(this.freqMHz/(e*(1+t)))}get bitsPerChar(){switch((6&this.cpu.data[this.config.UCSRC])>>1|4&this.cpu.data[this.config.UCSRB]){case 0:return 5;case 1:return 6;case 2:return 7;case 3:return 8;default:return 9}}}class Ue{program=new Uint16Array(32768);port=new Map;MHZ=16e6;stopped=!1;constructor(t){!function(t,e){for(const i of t.split("\n"))if(":"===i[0]&&"00"===i.substr(7,2)){const t=parseInt(i.substr(1,2),16),s=parseInt(i.substr(3,4),16);for(let a=0;a<t;a++)e[s+a]=parseInt(i.substr(9+2*a,2),16)}}(t,new Uint8Array(this.program.buffer)),this.cpu=new he(this.program),this.timer0=new Ve(this.cpu,be),this.timer1=new Ve(this.cpu,Ce),this.timer2=new Ve(this.cpu,Se),this.port.set("B",new we(this.cpu,fe)),this.port.set("C",new we(this.cpu,ye)),this.port.set("D",new we(this.cpu,ue)),this.serialBuffer=[],this.usart=new Me(this.cpu,_e,this.MHZ),this.cpu.readHooks[_e.UDR]=()=>this.serialBuffer.shift()||0}async execute(t,e,i){for(this.stopped=!1;;){for(let t=0;t<e;t++){pe(this.cpu),this.timer0.tick(),this.timer1.tick(),this.timer2.tick(),this.usart.tick();const t=this.cpu.data[_e.UCSRA];this.cpu.interruptsEnabled&&32&t&&this.serialBuffer.length>0&&ge(this.cpu,_e.rxCompleteInterrupt)}if(t(this.cpu),await new Promise((t=>setTimeout(t,i))),this.stopped)break}}serial(t){for(var e=0;e<t.length;e++)this.serialBuffer.push(t.charCodeAt(e))}stop(){this.stopped=!0}}function Be(t,e){let i=t.toString();for(;i.length<e;)i="0"+i;return i}function Ie(t){let e,i=t.getAttribute("pin");return i=i?parseInt(i,10):null,e=null==i?null:i<8?"D":i<14?"B":i<20?"C":null,[i,e]}window.compileAndRun=async function(t,e,i,s,a,n,r){null==r&&(r=console.log),r("compiling...");let o=await AVR8js.build(t,[]);if(console.log(o),""===o.hex){let t=[];for(let e=0;e<name.length;e++)t.push([]);o.stderr.matchAll(/(\w+\.\w+):(\d+):(\d+): ([^:]+):(.+)/g);throw new Error(o.stderr+" "+t)}console.debug(o.stdout),r("ready!"),await new Promise((function(t,l){if(!o.hex)throw new Error("no hex!");{let l=AVR8js.execute(o.hex,r,e,void 0,1*i,1*s,a??1/0,(function(){r("simmulation ended"),t()}));n&&n((()=>l.stop()),(t=>l.serial(t)))}}))},window.extractBit=function(t,e){return t>>e&1},window.bytesToInt=function(t,e,i,s){return 255&t|(255&e)<<8|(255&i)<<16|(255&s)<<24},window.bitsToInt=function(){let t=0,e=0;for(let i of arguments)e|=(1&i)<<t,t++;return e},window.extractByte=function(t,e){return t>>8*e&255};const Ne={build:async function(t,e=[]){window.__AVR8jsCache||(window.__AVR8jsCache={});let i=JSON.stringify({sketch:t,files:e});if(window.__AVR8jsCache[i])return window.__AVR8jsCache[i];{const t=await fetch("https://hexi.wokwi.com/build",{method:"POST",mode:"cors",cache:"force-cache",headers:{"Content-Type":"application/json"},body:i}),e=await t.json();return window.__AVR8jsCache[i]=e,e}},buildASM:async function(t){const e=await fetch("https://hexi.wokwi.com/asm",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:t})});return await e.json()},execute:function(t,e,i,s,a,n){const r=["B","C","D"],o=document.getElementById(i)||document,l=o.querySelectorAll("wokwi-led"),c=o.querySelectorAll("wokwi-7segment"),h=o.querySelectorAll("wokwi-buzzer"),d=o.querySelectorAll("wokwi-pushbutton"),p=o.querySelectorAll("memout-element"),g=new Ue(t);s=s||16e6,a=a||5e5,n=n||0;for(const t of r){const e=g.port.get(t);e&&(d.forEach((i=>{let[s,a]=Ie(i);s&&a===t&&(e.setPin(s%8,!1),i.addEventListener("button-press",(()=>{g&&e.setPin(s%8,!0)})),i.addEventListener("button-release",(()=>{g&&e.setPin(s%8,!1)})))})),e.addListener((e=>{l.forEach((i=>{let[s,a]=Ie(i);s&&a===t&&(i.value=!!(e&1<<s-8))})),h.forEach((i=>{let[s,a]=Ie(i);s&&a===t&&(i.hasSignal=!!(e&1<<s-8))})),c.forEach((i=>{let[s,a]=Ie(i);s&&a===t&&(i.values=[1&e,2&e,4&e,16&e,32&e,64&e,128&e,256&e])}))})))}g.usart.onLineTransmit=t=>{e(t)};const f=o.querySelector("#simulation-time");return g.execute((t=>{for(let e of p)e.updateData(t.data,t.cycles);const e=function(t){const e=Math.floor(1e3*t)%1e3,i=Math.floor(t%60);return`${Be(Math.floor(t/60),2)}:${Be(i,2)}.${Be(e,3)}`}(t.cycles/s);f&&(f.textContent="Simulation time: "+e)}),a,n),g}};window.AVR8js=Ne})();
//# sourceMappingURL=index.js.map
