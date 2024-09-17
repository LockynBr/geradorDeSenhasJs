(()=>{"use strict";var n={958:(n,r,e)=>{e.d(r,{A:()=>c});var o=e(354),t=e.n(o),a=e(314),i=e.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(0, 81, 139);\n  --primary-color-darker: rgb(0, 50, 85);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container h1 {\n  display: flex;\n  justify-content: center;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\ndiv.container-respostas p {\n  margin: 5px;\n}\n\n#senha-gerada {\n  font-size: 1.5em;\n  color: var(--primary-color);\n  margin: 40px 0;\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n}\n\ninput[type=\"checkbox\"] {\n  width: 20px;\n  height: 20px;\n}\n\nbutton#gerar-senha  {\n  display: block;\n  margin: 25px auto 0px auto;\n  font-size: 1em;\n  width: 100%;\n  height: 40px;\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 5px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,gCAAgC;EAChC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,0BAA0B;EAC1B,cAAc;EACd,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(0, 81, 139);\n  --primary-color-darker: rgb(0, 50, 85);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container h1 {\n  display: flex;\n  justify-content: center;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\ndiv.container-respostas p {\n  margin: 5px;\n}\n\n#senha-gerada {\n  font-size: 1.5em;\n  color: var(--primary-color);\n  margin: 40px 0;\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n}\n\ninput[type=\"checkbox\"] {\n  width: 20px;\n  height: 20px;\n}\n\nbutton#gerar-senha  {\n  display: block;\n  margin: 25px auto 0px auto;\n  font-size: 1em;\n  width: 100%;\n  height: 40px;\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 5px;\n}"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),r.push(p))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=o.base?A[0]+o.base:A[0],p=a[s]||0,u="".concat(s," ").concat(p);a[s]=p+1;var d=e(u),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)r[d].references++,r[d].updater(l);else{var f=t(l,o);o.byIndex=c,r.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var A=o(n,t),s=0;s<a.length;s++){var p=e(a[s]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=A}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=function(n,r){return Math.floor(Math.random()*(r-n)+n)},t=document.querySelector("#senha-gerada"),a=document.querySelector("#qtd-caracter"),i=document.querySelector("#chk-maiusculas"),c=document.querySelector("#chk-minusculas"),A=document.querySelector("#chk-numeros"),s=document.querySelector("#chk-simbolos"),p=document.querySelector("#gerar-senha"),u=e(72),d=e.n(u),l=e(825),f=e.n(l),m=e(659),h=e.n(m),C=e(56),g=e.n(C),E=e(540),b=e.n(E),y=e(113),v=e.n(y),x=e(958),B={};B.styleTagTransform=v(),B.setAttributes=g(),B.insert=h().bind(null,"head"),B.domAPI=f(),B.insertStyleElement=b(),d()(x.A,B),x.A&&x.A.locals&&x.A.locals,p.addEventListener("click",(function(){t.innerHTML=function(n,r,e,t,a){var i=[];n=Number(n);for(var c=0;c<n;c++)r&&i.push(String.fromCharCode(o(65,91))),e&&i.push(String.fromCharCode(o(97,123))),t&&i.push(String.fromCharCode(o(48,58))),a&&i.push(",.;~^[]{}!@#$%&*()_-=+/?"[o(0,24)]);return n>20?"Quantidade maior que a permitida.":i.join("").slice(0,n)}(a.value,i.checked,c.checked,A.checked,s.checked)||"Nada Selecionado."}))})();
//# sourceMappingURL=bundle.js.map