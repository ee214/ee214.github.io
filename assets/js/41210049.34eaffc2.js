"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5856],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(b,o(o({ref:e},u),{},{components:n})):a.createElement(b,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3757:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Homework 1"},o=void 0,s={unversionedId:"lab-handouts/hw_1",id:"version-Autumn21/lab-handouts/hw_1",title:"Homework 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/versioned_docs/version-Autumn21/lab-handouts/hw_1.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/hw_1",permalink:"/docs/Autumn21/lab-handouts/hw_1",draft:!1,tags:[],version:"Autumn21",frontMatter:{title:"Homework 1"},sidebar:"version-Autumn21/docs",next:{title:"Combinational Circuit 1",permalink:"/docs/Autumn21/lab-handouts/exp-1-t"}},l={},c=[{value:"Instructions",id:"instructions",level:3},{value:"4-bit Adder-Subtractor",id:"4-bit-adder-subtractor",level:3}],u={toc:c};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,r.kt)("br",null),"\nThursday 4th August, 2021",(0,r.kt)("br",null)),(0,r.kt)("div",{class:"margin-1"},(0,r.kt)("a",{target:"_blank",href:n(3452).Z},"[Download this handout as PDF]")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Please complete the following assignment before your next lab turn")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Use structural modelling for this assignment; means instantiate components and use port map to connect those components"))),(0,r.kt)("h3",{id:"4-bit-adder-subtractor"},"4-bit Adder-Subtractor"),(0,r.kt)("h4",null,"(A) VHDL Description ",(0,r.kt)("span",{class:"marks"},"[5 Marks]")),(0,r.kt)("p",null,"\u200bYou have been given a full adder description as the reference design. Using this full adder and XOR gate (from ",(0,r.kt)("inlineCode",{parentName:"p"},"Gates.vhdl"),") as a component, describe a ",(0,r.kt)("br",null),"4-bit ripple carry adder-subtractor in VHDL. "),(0,r.kt)("p",null,"\u200b\t4-bit ripple carry adder-subtractor has following ports"),(0,r.kt)("ul",null,(0,r.kt)("div",{class:"margin-2"},(0,r.kt)("li",null,"Two 4-bit inputs : A (A",(0,r.kt)("sub",null,"3")," A",(0,r.kt)("sub",null,"2")," A",(0,r.kt)("sub",null,"1")," A",(0,r.kt)("sub",null,"0"),") , B (B",(0,r.kt)("sub",null,"3")," B",(0,r.kt)("sub",null,"2")," B",(0,r.kt)("sub",null,"1")," B",(0,r.kt)("sub",null,"0"),")")),(0,r.kt)("div",{class:"margin-2"},(0,r.kt)("li",null,"One 1-bit input: M")),(0,r.kt)("div",{class:"margin-2"},(0,r.kt)("li",null,"One 4-bit output : S (S",(0,r.kt)("sub",null,"3")," S",(0,r.kt)("sub",null,"2")," S",(0,r.kt)("sub",null,"1")," S",(0,r.kt)("sub",null,"0"),")")),(0,r.kt)("div",{class:"margin-2"},(0,r.kt)("li",null,"One 1-bit output: Cout"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is a simple binary adder-subtractor that can be implemented by cascading four full adders such that the the carry generated by the addition of lower significant bits forms the incoming carry for addition of the next significant bits."))),(0,r.kt)("div",{class:"fig_b"},(0,r.kt)("img",{src:n(5649).Z})),(0,r.kt)("h4",null,"(B) Explain briefly. How the functionality of the above circuit changes for different values of M ? ",(0,r.kt)("span",{class:"marks"},"[2 Marks]")),(0,r.kt)("h4",null,"(C) Simulation ",(0,r.kt)("span",{class:"marks"},"[5 Marks]")),(0,r.kt)("p",null,"Perform RTL and Gate level simulation of your dsign using the generic testbench to confirm the correctness of your description."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To do this, note that you need to use the given tracefile and modify the testbench given to you appropriately."))),(0,r.kt)("hr",null),"Tracefile format","<a3 a2 a1 a0><b3 b2 b1 b0><M> <Cout><S> 11111",(0,r.kt)("a",{href:"https://drive.google.com/drive/folders/118f9SOw_xYte5BZk31zeLvIgCcgCgXSy?usp=sharing"},"Tracefile \ud83d\udcc3"))}d.isMDXComponent=!0},3452:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/hw_1-f3eaa416dc4dd936b2b97589cbc2d40b.pdf"},5649:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/add_sub-aef1e2f9b07c9eeaa0c12419cb8aeda3.jpg"}}]);