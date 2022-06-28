"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Combinational Circuit 3"},s=void 0,o={unversionedId:"lab-handouts/exp-3-t",id:"lab-handouts/exp-3-t",title:"Combinational Circuit 3",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-3-t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-3-t",permalink:"/docs/Summer22/lab-handouts/exp-3-t",draft:!1,tags:[],version:"current",frontMatter:{title:"Combinational Circuit 3"}},l={},c=[{value:"Multiplier",id:"multiplier",level:2},{value:'(i) Design <span class="marks">3 Marks</span>',id:"i-design-3-marks",level:4},{value:'(ii) VHDL description <span class="marks">5 Marks</span>',id:"ii-vhdl-description-5-marks",level:4},{value:'(iii) Simulation <span class="marks">5 Marks</span>',id:"iii-simulation-5-marks",level:4},{value:'(iv) Scanchain <span class="marks">5 Marks</span>',id:"iv-scanchain-5-marks",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,a.kt)("br",null),"\nTuesday 7th September, 2021",(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use structural modelling for this experiment; means instantiate components and use port map to connect those components")),(0,a.kt)("h2",{id:"multiplier"},"Multiplier"),(0,a.kt)("h4",{id:"i-design-3-marks"},"(i) Design ",(0,a.kt)("span",{class:"marks"},"[3 Marks]")),(0,a.kt)("p",null,"Design a multiplier circuit with one 4-bit input and one 3-bit input."),(0,a.kt)("div",{class:"fig_b"},(0,a.kt)("img",{src:n(6564).Z})),(0,a.kt)("h4",{id:"ii-vhdl-description-5-marks"},"(ii) VHDL description ",(0,a.kt)("span",{class:"marks"},"[5 Marks]")),(0,a.kt)("p",null,"Describe your designed circuit in VHDL."),(0,a.kt)("h4",{id:"iii-simulation-5-marks"},"(iii) Simulation ",(0,a.kt)("span",{class:"marks"},"[5 Marks]")),(0,a.kt)("p",null,"Simulate your design using the generic testbench to confirm the correctness of your description."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,a.kt)("h4",{id:"iv-scanchain-5-marks"},"(iv) Scanchain ",(0,a.kt)("span",{class:"marks"},"[5 Marks]")),(0,a.kt)("p",null,"Test the correctness of your design using Scanchain"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Tracefile format\n{",(0,a.kt)("inlineCode",{parentName:"p"},"<A3 A2 A1 A0 B2 B1 B0> <M6 M5 M4 M3 M2 M1 M0> 1111111"),"} ",(0,a.kt)("a",{href:"https://drive.google.com/drive/folders/1OSShpQvYhjPJ2LsqxH9q6eruMZte9Zv6?usp=sharing"},"Tracefile \ud83d\udcc3")))}u.isMDXComponent=!0},6564:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mul-4fc823e4f0c1dd1e17e973db61fa056e.png"}}]);