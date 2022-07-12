"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Combinational Circuit 2"},s=void 0,o={unversionedId:"lab-handouts/exp-2-w",id:"version-1.0/lab-handouts/exp-2-w",title:"Combinational Circuit 2",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/versioned_docs/version-1.0/lab-handouts/exp-2-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-2-w",permalink:"/docs/1.0/lab-handouts/exp-2-w",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Combinational Circuit 2"}},l={},c=[{value:"Scrabble",id:"scrabble",level:2},{value:'(i) Design <span class="marks">3 Marks + 3 Bonus</span>',id:"i-design-3-marks--3-bonus",level:4},{value:'(ii) VHDL description <span class="marks">5 Marks</span>',id:"ii-vhdl-description-5-marks",level:4},{value:'(iii) Simulation <span class="marks">5 Marks</span>',id:"iii-simulation-5-marks",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,r.kt)("br",null),"\nWednesday 18th August, 2021",(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use structural modelling for this experiment; means instantiate components and use port map to connect those components")),(0,r.kt)("h2",{id:"scrabble"},"Scrabble"),(0,r.kt)("h4",{id:"i-design-3-marks--3-bonus"},"(i) Design ",(0,r.kt)("span",{class:"marks"},"[3 Marks + 3 Bonus]")),(0,r.kt)("p",null,"Scrabble is an extremely popular word game where players score points by placing tiles on a board that make correct words. Each letter used in the word has some points attached to it, based on how frequently it occurs in the English language. For example, the most frequent alphabet E has only 1 point whereas the least frequent letter Z has 10 points."),(0,r.kt)("p",null,"The modified scoring system is as below"),(0,r.kt)("div",{class:"fig_b"},(0,r.kt)("img",{src:n(9493).Z})),(0,r.kt)("p",null,"Let us assume that we have only the first 16 letters of the English alphabets (i.e. A to P)\nLet 0000 represent A, 0001 represent B and so on. "),(0,r.kt)("p",null,"Design a system that gives output as \u20181\u2019 when a given alphabet has 3 points, and \u20180\u2019 in other cases"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You are only allowed to use pre-designed gates using port maps (NO DATAFLOW STATEMENTS).",(0,r.kt)("br",null),"\nMake an attempt to minimize the number of logic gates used."),(0,r.kt)("span",{class:"marks"},"[3 Marks]")," bonus will be given if designed using least number of 2-input gates and inverter.  (3-input gates will be counted as two 2-input gates)")),(0,r.kt)("h4",{id:"ii-vhdl-description-5-marks"},"(ii) VHDL description ",(0,r.kt)("span",{class:"marks"},"[5 Marks]")),(0,r.kt)("p",null,"Describe your designed circuit in VHDL."),(0,r.kt)("h4",{id:"iii-simulation-5-marks"},"(iii) Simulation ",(0,r.kt)("span",{class:"marks"},"[5 Marks]")),(0,r.kt)("p",null,"Simulate your design using the generic testbench to confirm the correctness of your description."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Tracefile format\n{",(0,r.kt)("inlineCode",{parentName:"p"},"<x3 x2 x1 x0> <Y> 1"),"} ",(0,r.kt)("a",{href:"https://drive.google.com/drive/folders/1Ds7VGrXtvh6mJKmY_cm_MM6hXphrWq5Z?usp=sharing"},"Tracefile \ud83d\udcc3")))}d.isMDXComponent=!0},9493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scrabble-e461e847b364b99e78c3db2a96799ef6.png"}}]);