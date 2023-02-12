(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{385:function(t,e,r){},432:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return d})),r.d(e,"Request",(function(){return _})),r.d(e,"Response",(function(){return A})),r.d(e,"DOMException",(function(){return T})),r.d(e,"fetch",(function(){return B}));var o="URLSearchParams"in self,n="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in self,a="ArrayBuffer"in self;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,o=p(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=f(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[f(t)]},d.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},d.prototype.set=function(t,e){this.map[f(t)]=c(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),l(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),l(t)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){var r,o,n=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),v.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function A(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},w.call(_.prototype),w.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function B(t,e){return new Promise((function(r,o){var n=new _(t,e);if(n.signal&&n.signal.aborted)return o(new T("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,o={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};o.url="responseURL"in i?i.responseURL:o.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new A(n,o))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.onabort=function(){o(new T("Aborted","AbortError"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),n.headers.forEach((function(t,e){i.setRequestHeader(e,t)})),n.signal&&(n.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&n.signal.removeEventListener("abort",a)}),i.send(void 0===n._bodyInit?null:n._bodyInit)}))}B.polyfill=!0,self.fetch||(self.fetch=B,self.Headers=d,self.Request=_,self.Response=A)},433:function(t,e,r){"use strict";r(385)},462:function(t,e,r){"use strict";r.r(e);var o={props:{showTitle:{type:Boolean,default:!1},user:{type:String,require:!0},repo:{type:String,require:!0}},data:()=>({contributors:[]}),mounted(){this.getContributors()},methods:{getContributors(){r(432);const{user:t,repo:e}=this;fetch(`https://api.github.com/repos/${t}/${e}/contributors`).then((function(t){return t.json()})).then(t=>{this.contributors=t})}}},n=(r(433),r(2)),s=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contributors-wrapper"},[t.showTitle?e("h3",{staticClass:"contributors-title"},[t._v("\n    "+t._s(t.repo)+"\n    "),e("GitHubLink",{attrs:{repo:`${t.user}/${t.repo}`}})],1):t._e(),t._v(" "),t.contributors.length?e("ul",{staticClass:"contributors-list"},t._l(t.contributors,(function(r,o){return e("li",{key:o,staticClass:"contributors-item"},[e("a",{attrs:{href:r.html_url}},[e("img",{staticClass:"avatar",attrs:{src:r.avatar_url,alt:r.login}}),t._v(" "),e("a",{staticClass:"name"},[t._v(t._s(r.login))])])])})),0):t._e()])}),[],!1,null,"54f1c18e",null);e.default=s.exports}}]);