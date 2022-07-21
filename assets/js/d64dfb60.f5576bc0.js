"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,v=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={title:"UrJTAG Usage"},i=void 0,l={unversionedId:"linux/urjtag_usage",id:"version-Summer22/linux/urjtag_usage",title:"UrJTAG Usage",description:"Common Commands to use Urjtag after Installation",source:"@site/versioned_docs/version-Summer22/linux/urjtag_usage.mdx",sourceDirName:"linux",slug:"/linux/urjtag_usage",permalink:"/docs/Summer22/linux/urjtag_usage",draft:!1,tags:[],version:"Summer22",frontMatter:{title:"UrJTAG Usage"},sidebar:"version-Summer22/sl",previous:{title:"UrJTAG installation on Ubuntu",permalink:"/docs/Summer22/linux/urjtag"},next:{title:"Virtual JTAG (dependency)",permalink:"/docs/Summer22/linux/vjtag"}},s={},m=[{value:"Common Commands to use Urjtag after Installation",id:"common-commands-to-use-urjtag-after-installation",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"common-commands-to-use-urjtag-after-installation"},"Common Commands to use Urjtag after Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect the Krypton board to your PC and Power it on using slide switch",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Open Terminal and type: ",(0,a.kt)("strong",{parentName:"li"},"sudo rmmod ftdi_sio")," (only Ubuntu 18.04, every time you connect/Power On the Board) and press enter",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Open Terminal and type: ",(0,a.kt)("strong",{parentName:"li"},"sudo jtag")," (ubuntu) and press enter",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Type the command ",(0,a.kt)("strong",{parentName:"li"},"cable ft2232 vid=0x0403 pid=0x6010")," and press enter",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Type the command ",(0,a.kt)("strong",{parentName:"li"},"detect")," and press enter",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Type the command ",(0,a.kt)("strong",{parentName:"li"},"svf ",(0,a.kt)("inlineCode",{parentName:"strong"},"<path to file>/"),"filename.svf progress")," and press enter",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"avoid giving \u201cspacebar\u201d in file/folder name, instead use \u201c_\u201d or \u201c-\u201d",(0,a.kt)("br",null)),(0,a.kt)("inlineCode",{parentName:"p"},"(\\)")," for Windows",(0,a.kt)("br",null),"\n**run all the commands everytime you program the HW, no shortcut",(0,a.kt)("br",null)))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"FAQ")),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},'If you encounter "TDO seems to stuck to 1" error, then disconnect Krypton board and reconnect to different USB port')))))}u.isMDXComponent=!0}}]);