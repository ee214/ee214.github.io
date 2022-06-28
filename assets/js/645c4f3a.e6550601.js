"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8372],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,v=m["".concat(i,".").concat(f)]||m[f]||d[f]||l;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),o=t(3743);const l="tableOfContentsInline_prmo";function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return r.createElement("div",{className:l},r.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(7462),o=t(7294);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):r.push(o)})),r}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}var c=t(6668);function i(e){const n=e.getBoundingClientRect();return n.top===n.bottom?i(e.parentNode):n}function s(e,n){var t;let{anchorTopOffset:r}=n;const o=e.find((e=>i(e).top>=r));if(o){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(o))?o:null!=(l=e[e.indexOf(o)-1])?l:null}return null!=(t=e[e.length-1])?t:null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:a}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),i=s(c,{anchorTopOffset:t.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function m(e){let{toc:n,className:t,linkClassName:r,isChild:l}=e;return n.length?o.createElement("ul",{className:l?void 0:t},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(m,{isChild:!0,toc:e.children,className:t,linkClassName:r}))))):null}const f=o.memo(m);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:m,...v}=e;const p=(0,c.L)(),g=null!=u?u:p.tableOfContents.minHeadingLevel,y=null!=m?m:p.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>a({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:y});return d((0,o.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:y}}),[i,s,g,y])),o.createElement(f,(0,r.Z)({toc:h,className:t,linkClassName:i},v))}},6701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905)),l=t(3901);const a={title:"PDF Resources"},c=void 0,i={unversionedId:"resources/document/docx",id:"resources/document/docx",title:"PDF Resources",description:"",source:"@site/docs/resources/document/docx.mdx",sourceDirName:"resources/document",slug:"/resources/document/docx",permalink:"/docs/Summer22/resources/document/docx",draft:!1,tags:[],version:"current",frontMatter:{title:"PDF Resources"}},s={},u=[{value:"VHDL tutorial by Peter J Ashenden",id:"vhdl-tutorial-by-peter-j-ashenden",level:2},{value:"LCD control Made Easy",id:"lcd-control-made-easy",level:2}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",null," Table of Content "),(0,o.kt)(l.Z,{toc:u,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"vhdl-tutorial-by-peter-j-ashenden"},"VHDL tutorial by Peter J Ashenden"),(0,o.kt)("div",{class:"pdf-container"},(0,o.kt)("iframe",{src:"https://drive.google.com/file/d/1dBILA6DviY1yY-oS32iM5iC-pXFlQrSm/preview",class:"responsive-iframe"})),(0,o.kt)("h2",{id:"lcd-control-made-easy"},"LCD control Made Easy"),(0,o.kt)("div",{class:"pdf-container"},(0,o.kt)("iframe",{src:"https://drive.google.com/file/d/1RxRB-cs1lktodcQYRJH7-7E2Ju-LTfNm/preview",class:"responsive-iframe"})))}m.isMDXComponent=!0}}]);