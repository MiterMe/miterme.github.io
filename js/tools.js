!function(t,e){if(t.global=t,"object"==typeof exports);else if("function"==typeof define)define("string",e);else{t.require||(t.require=function(e){return t[e]});var n={exports:{}};e(t.require||function(t){alert('需要实现 require(),加载模块:"'+t+'"')},n.exports,n),t.Strings=n.exports}}(this,function(t,e,n){var r="",i=[].slice;var o=function(t){return"[object String]"==function to(t){return u.toString.call(t)}(t)},u={},s=/((\d+)\-(\d+))/,p=/(?:\[(?:([^\[\],\{\}]+)|([^\[\]\{\}]+))\]|{(\d+)\-(\d+)}|([\w$]+)(=)\?)|{([^,\}\{]+),([^,]*),([^,]*)}/g,f=/(?:,)/,a={now:function(){return+new Date}};function iReplace(t,e,n,i,o,u,s,p,a,c){var l;if(this.groups&&t in this.groups)return this.groups[t];if(/^\d+$/.test(i+o))return iBetween(i,o);if(p)return this[p]?this[a]||a:this[c]||c;if(n)return(l=(n=n.split(f))[0])in this&&this[l]instanceof Function?this[n.shift()].apply(this,n):n[iBetween(0,n.length-1)];var h=e||u;return u||(u=r,s||(s=r)),this&&h?function isNil(t){return t===undefined}(l=this[h])?t:u+s+(l instanceof Function?l.call(this):l):(this.groups[t]=t,t)}function iBetween(t,e,n){o(t)&&t.search(s)>=0&&(t=RegExp.$2,e=RegExp.$3,n=RegExp.$1);var r,i,u,p=arguments.callee||this,f=p.__tmap_||(p.__tmap_={});if(n&&(r=f[n]))return r;+t<+e?(i=+t,u=+e):(i=+e,u=+t);var a=u-i+1;return r=(1e6*Math.random()>>0)%a+i,n&&(f[n]=r),r}function kv(t,e,n){return n||(n={}),e===undefined||(n[t]=e),kv}String.prototype.format||(String.prototype.format=function iStringFormat(t){t||(t={});var e=!!t.now;!function merge(t,e,n,r){var o,u,s,p,f;for(u=(f=i.call(arguments)).pop(),f.push(u),/false|true/gi.test(u)||f.push(!1),u=f.pop(),s=f.pop();p=f.shift();)for(o in s)!u&&p.hasOwnProperty&&p.hasOwnProperty(o)||(p[o]=s[o])}(t,a),t.groups={};var n=this.replace(p,iReplace.bind(t));return delete t.groups,e||delete t.now,n}),e.inner=iBetween,e.tokv=function(t){for(var e,n={},r=0,i=(t=t.split(/&|#|\?/g)).length;r<i;r++)(e=t[r].split(/=/))[2]=n,kv.apply(null,e);return n},e.kv2url=function(t){var e=[];for(var n in t)e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")}});