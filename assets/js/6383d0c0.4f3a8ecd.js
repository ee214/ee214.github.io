"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1638],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=i.createContext({}),c=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(o,".").concat(k)]||d[k]||p[k]||r;return n?i.createElement(m,l(l({ref:e},u),{},{components:n})):i.createElement(m,l({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6246:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Combinational Circuit 3"},l=void 0,s={unversionedId:"lab-handouts/exp-3-w",id:"version-Autumn22/lab-handouts/exp-3-w",title:"Combinational Circuit 3",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/versioned_docs/version-Autumn22/lab-handouts/exp-3-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-3-w",permalink:"/docs/Autumn22/lab-handouts/exp-3-w",draft:!1,tags:[],version:"Autumn22",frontMatter:{title:"Combinational Circuit 3"}},o={},c=[{value:"Universal Shifter",id:"universal-shifter",level:2},{value:'(i) Design <span class="marks">3 Marks</span>',id:"i-design-3-marks",level:4},{value:'(ii) VHDL description <span class="marks">5 Marks</span>',id:"ii-vhdl-description-5-marks",level:4},{value:'(iii) Simulation <span class="marks">5 Marks</span>',id:"iii-simulation-5-marks",level:4},{value:'(iv) Scanchain <span class="marks">5 Marks</span>',id:"iv-scanchain-5-marks",level:4}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,a.kt)("br",null),"\nWednesday 8th September, 2021",(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use structural modelling for this experiment; means instantiate components and use port map to connect those components")),(0,a.kt)("h2",{id:"universal-shifter"},"Universal Shifter"),(0,a.kt)("h4",{id:"i-design-3-marks"},"(i) Design ",(0,a.kt)("span",{class:"marks"},"[3 Marks]")),(0,a.kt)("p",null,"Design a universal shifter circuit, which can perform logical right shift or left shift on 8-bit input by the specified number of bits "),(0,a.kt)("div",{class:"flex-container"},(0,a.kt)("div",{class:"flex-child shift_img"},(0,a.kt)("div",{class:"fig_b"},(0,a.kt)("img",{src:n(218).Z})),(0,a.kt)("h5",{align:"center"},"Figure-1 : Block Diagram")),(0,a.kt)("div",{class:"flex-child shift_table"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"b2 b1 b0"),(0,a.kt)("th",null,"shift by # bits"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"000"),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"001"),(0,a.kt)("td",null,"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"010"),(0,a.kt)("td",null,"2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"011"),(0,a.kt)("td",null,"3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"100"),(0,a.kt)("td",null,"4")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"101"),(0,a.kt)("td",null,"5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"110"),(0,a.kt)("td",null,"6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"111"),(0,a.kt)("td",null,"7")))))),(0,a.kt)("br",null),(0,a.kt)("p",null,"For ",(0,a.kt)("b",null,"L = 0"),", output will be right shifted version of input",(0,a.kt)("br",null),"\nFor ",(0,a.kt)("b",null,"L = 1"),", output will be left shifted verison of input"),(0,a.kt)("p",null,"Let's understand the design of ",(0,a.kt)("inlineCode",{parentName:"p"},"Right shift by 4")," block"),(0,a.kt)("div",{class:"fig_b"},(0,a.kt)("img",{src:n(5141).Z})),(0,a.kt)("h5",{align:"center"},"Figure-2 : Right shift by 4 bits"),(0,a.kt)("p",null,"The output of this block will be ",(0,a.kt)("inlineCode",{parentName:"p"},"a7 a6 a5 a4 a3 a2 a1 a0")," for b2 = 0. For b2 = 1 its output will be ",(0,a.kt)("inlineCode",{parentName:"p"},"0 0 0 0 a7 a6 a5 a4")),(0,a.kt)("h4",{id:"ii-vhdl-description-5-marks"},"(ii) VHDL description ",(0,a.kt)("span",{class:"marks"},"[5 Marks]")),(0,a.kt)("p",null,"Describe your designed circuit in VHDL."),(0,a.kt)("p",null,"Block in figure-2 can be described in VHDL as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vhdl"},"    n4_bit : for i in 0 to 7 generate\n\n        lsb: if i < 4 generate\n            b2: mux port map(I(0) => a1(i), I(1) => a1(i+4), S => b(2), Y => s1(i));\n        end generate lsb;\n\n        msb: if i > 3 generate\n            b2: mux port map(I(0) => a1(i), I(1) => '0', S => b(2), Y => s1(i));\n        end generate msb;\n\n    end generate ; -- 4_bit\n")),(0,a.kt)("p",null,"Similarly you can describe Right shift by 2 bit/ 1 bit and Bit reversal block"),(0,a.kt)("h4",{id:"iii-simulation-5-marks"},"(iii) Simulation ",(0,a.kt)("span",{class:"marks"},"[5 Marks]")),(0,a.kt)("p",null,"Simulate your design using the generic testbench to confirm the correctness of your description."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,a.kt)("h4",{id:"iv-scanchain-5-marks"},"(iv) Scanchain ",(0,a.kt)("span",{class:"marks"},"[5 Marks]")),(0,a.kt)("p",null,"Test the correctness of your design using Scanchain"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Tracefile format\n{",(0,a.kt)("inlineCode",{parentName:"p"},"<L B2 B1 B0 A7 A6 A5 A4 A3 A2 A1 A0> <S7 S6 S5 S4 S3 S2 S1 S0> 11111111"),"} ",(0,a.kt)("a",{href:"https://drive.google.com/drive/folders/1O3dBsZPTSDqtR0IMo0k_pU2aBf_NulXc?usp=sharing"},"Tracefile \ud83d\udcc3")))}p.isMDXComponent=!0},5141:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/4shift-c5fc0c0070a873220eee85a3486dac5c.png"},218:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/bshift-76ac5e7459eebe7e94cf2d1e73344ab7.png"}}]);