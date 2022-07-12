"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"UrJTAG Usage"},i=void 0,s={unversionedId:"windows/urjtag_usage",id:"version-1.0/windows/urjtag_usage",title:"UrJTAG Usage",description:"Common Commands to use Urjtag after Installation",source:"@site/versioned_docs/version-1.0/windows/urjtag_usage.mdx",sourceDirName:"windows",slug:"/windows/urjtag_usage",permalink:"/docs/1.0/windows/urjtag_usage",draft:!1,tags:[],version:"1.0",frontMatter:{title:"UrJTAG Usage"},sidebar:"sw",previous:{title:"UrJTAG installation on Windows",permalink:"/docs/1.0/windows/urjtag"}},l={},c=[{value:"Common Commands to use Urjtag after Installation",id:"common-commands-to-use-urjtag-after-installation",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"common-commands-to-use-urjtag-after-installation"},"Common Commands to use Urjtag after Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect the Krypton board to your PC and Power it on using slide switch",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("strong",{parentName:"li"},"jtag.exe")," (windows)",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Type the command ",(0,a.kt)("strong",{parentName:"li"},"cable ft2232 vid=0x0403 pid=0x6010")," and press enter",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Type the command ",(0,a.kt)("strong",{parentName:"li"},"detect")," and press enter",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Type the command ",(0,a.kt)("strong",{parentName:"li"},"svf ",(0,a.kt)("inlineCode",{parentName:"strong"},"<path to file>/"),"filename.svf progress")," and press enter",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Avoid giving \u201cspacebar\u201d in file\\folder name, instead use \u201c_\u201d or \u201c-\u201d"),(0,a.kt)("li",{parentName:"ul"},"Run all the commands everytime you program the HW, Do NOT skip any step"),(0,a.kt)("li",{parentName:"ul"},'If you see error "Couldn\'t connect to suitable USB device" as shown in figure below, then install krypton drivers and try again',(0,a.kt)("div",{class:"fig_b"},(0,a.kt)("img",{src:n(8813).Z,width:"345",height:"45"})))))))}p.isMDXComponent=!0},8813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nodriver-cf03ba286027baaaaf2afb17ddfc0b2f.png"}}]);