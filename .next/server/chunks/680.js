"use strict";exports.id=680,exports.ids=[680],exports.modules={680:(e,t,r)=>{r(7561),r(9411);let a=r(9306);r(8849),r(2286),r(5628),r(4492),r(2254),r(7261),r(1041),r(7503);let n=0,i={START_BOUNDARY:n++,HEADER_FIELD_START:n++,HEADER_FIELD:n++,HEADER_VALUE_START:n++,HEADER_VALUE:n++,HEADER_VALUE_ALMOST_DONE:n++,HEADERS_ALMOST_DONE:n++,PART_DATA_START:n++,PART_DATA:n++,END:n++},A={PART_BOUNDARY:1,LAST_BOUNDARY:2},s=e=>32|e,o=()=>{};class E{constructor(e){this.index=0,this.flags=0,this.onHeaderEnd=o,this.onHeaderField=o,this.onHeadersEnd=o,this.onHeaderValue=o,this.onPartBegin=o,this.onPartData=o,this.onPartEnd=o,this.boundaryChars={},e="\r\n--"+e;let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r),this.boundaryChars[t[r]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=i.START_BOUNDARY}write(e){let t,r,a=0,n=e.length,o=this.index,{lookbehind:E,boundary:d,boundaryChars:D,index:h,state:l,flags:T}=this,_=this.boundary.length,R=_-1,f=e.length,c=e=>{this[e+"Mark"]=a},u=e=>{delete this[e+"Mark"]},H=(e,t,r,a)=>{(void 0===t||t!==r)&&this[e](a&&a.subarray(t,r))},L=(t,r)=>{let n=t+"Mark";n in this&&(r?(H(t,this[n],a,e),delete this[n]):(H(t,this[n],e.length,e),this[n]=0))};for(a=0;a<n;a++)switch(t=e[a],l){case i.START_BOUNDARY:if(h===d.length-2){if(45===t)T|=A.LAST_BOUNDARY;else if(13!==t)return;h++;break}if(h-1==d.length-2){if(T&A.LAST_BOUNDARY&&45===t)l=i.END,T=0;else{if(T&A.LAST_BOUNDARY||10!==t)return;h=0,H("onPartBegin"),l=i.HEADER_FIELD_START}break}t!==d[h+2]&&(h=-2),t===d[h+2]&&h++;break;case i.HEADER_FIELD_START:l=i.HEADER_FIELD,c("onHeaderField"),h=0;case i.HEADER_FIELD:if(13===t){u("onHeaderField"),l=i.HEADERS_ALMOST_DONE;break}if(h++,45===t)break;if(58===t){if(1===h)return;L("onHeaderField",!0),l=i.HEADER_VALUE_START;break}if((r=s(t))<97||r>122)return;break;case i.HEADER_VALUE_START:if(32===t)break;c("onHeaderValue"),l=i.HEADER_VALUE;case i.HEADER_VALUE:13===t&&(L("onHeaderValue",!0),H("onHeaderEnd"),l=i.HEADER_VALUE_ALMOST_DONE);break;case i.HEADER_VALUE_ALMOST_DONE:if(10!==t)return;l=i.HEADER_FIELD_START;break;case i.HEADERS_ALMOST_DONE:if(10!==t)return;H("onHeadersEnd"),l=i.PART_DATA_START;break;case i.PART_DATA_START:l=i.PART_DATA,c("onPartData");case i.PART_DATA:if(o=h,0===h){for(a+=R;a<f&&!(e[a]in D);)a+=_;a-=R,t=e[a]}if(h<d.length)d[h]===t?(0===h&&L("onPartData",!0),h++):h=0;else if(h===d.length)h++,13===t?T|=A.PART_BOUNDARY:45===t?T|=A.LAST_BOUNDARY:h=0;else if(h-1===d.length){if(T&A.PART_BOUNDARY){if(h=0,10===t){T&=~A.PART_BOUNDARY,H("onPartEnd"),H("onPartBegin"),l=i.HEADER_FIELD_START;break}}else T&A.LAST_BOUNDARY&&45===t?(H("onPartEnd"),l=i.END,T=0):h=0}h>0?E[h-1]=t:o>0&&(H("onPartData",0,o,new Uint8Array(E.buffer,E.byteOffset,E.byteLength)),o=0,c("onPartData"),a--);break;case i.END:break;default:throw Error(`Unexpected state entered: ${l}`)}L("onHeaderField"),L("onHeaderValue"),L("onPartData"),this.index=h,this.state=l,this.flags=T}end(){if(this.state===i.HEADER_FIELD_START&&0===this.index||this.state===i.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==i.END)throw Error("MultipartParser.end(): stream ended unexpectedly")}}async function d(e,t){let r,n,i,A,s,o;if(!/multipart/i.test(t))throw TypeError("Failed to fetch");let d=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!d)throw TypeError("no or bad content-type header, no multipart boundary");let D=new E(d[1]||d[2]),h=[],l=new a.FormData,T=e=>{i+=c.decode(e,{stream:!0})},_=e=>{h.push(e)},R=()=>{let e=new a.File(h,o,{type:s});l.append(A,e)},f=()=>{l.append(A,i)},c=new TextDecoder("utf-8");for await(let t of(c.decode(),D.onPartBegin=function(){D.onPartData=T,D.onPartEnd=f,r="",n="",i="",A="",s="",o=null,h.length=0},D.onHeaderField=function(e){r+=c.decode(e,{stream:!0})},D.onHeaderValue=function(e){n+=c.decode(e,{stream:!0})},D.onHeaderEnd=function(){if(n+=c.decode(),"content-disposition"===(r=r.toLowerCase())){let e=n.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);e&&(A=e[2]||e[3]||""),(o=function(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let r=t[2]||t[3]||"",a=r.slice(r.lastIndexOf("\\")+1);return(a=a.replace(/%22/g,'"')).replace(/&#(\d{4});/g,(e,t)=>String.fromCharCode(t))}(n))&&(D.onPartData=_,D.onPartEnd=R)}else"content-type"===r&&(s=n);n="",r=""},e))D.write(t);return D.end(),l}t.toFormData=d}};