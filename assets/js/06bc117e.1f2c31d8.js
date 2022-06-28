"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7978],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),k=s,u=d["".concat(m,".").concat(k)]||d[k]||c[k]||i;return t?n.createElement(u,r(r({ref:a},l),{},{components:t})):n.createElement(u,r({ref:a},l))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8310:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));const i={title:"Combinational Circuit 1"},r=void 0,o={unversionedId:"lab-handouts/exp-1-w",id:"lab-handouts/exp-1-w",title:"Combinational Circuit 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-1-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-1-w",permalink:"/docs/Summer22/lab-handouts/exp-1-w",draft:!1,tags:[],version:"current",frontMatter:{title:"Combinational Circuit 1"}},m={},p=[{value:"Part-A: 2 to 4 decoder",id:"part-a-2-to-4-decoder",level:2},{value:'(i) Design <span class="marks">3 Marks</span>',id:"i-design-3-marks",level:4},{value:'(ii) VHDL description <span class="marks">5 Marks</span>',id:"ii-vhdl-description-5-marks",level:4},{value:'(iii) Simulation <span class="marks">5 Marks</span>',id:"iii-simulation-5-marks",level:4},{value:"Part-B: 3 to 8 decoder",id:"part-b-3-to-8-decoder",level:2},{value:'(i) Design <span class="marks">3 Marks</span>',id:"i-design-3-marks-1",level:4},{value:'(ii) VHDL description <span class="marks">5 Marks</span>',id:"ii-vhdl-description-5-marks-1",level:4},{value:'(iii) Simulation <span class="marks">5 Marks</span>',id:"iii-simulation-5-marks-1",level:4},{value:"Part-C: Full adder using 3 to 8 decoder",id:"part-c-full-adder-using-3-to-8-decoder",level:2},{value:'(i) Design <span class="marks">3 Marks</span>',id:"i-design-3-marks-2",level:4},{value:'(ii) VHDL description <span class="marks">5 Marks</span>',id:"ii-vhdl-description-5-marks-2",level:4},{value:'(iii) Simulation <span class="marks">5 Marks</span>',id:"iii-simulation-5-marks-2",level:4}],l={toc:p};function c(e){let{components:a,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,s.kt)("br",null),"\nWednesday 11th August, 2021",(0,s.kt)("br",null)),(0,s.kt)("div",{class:"margin-1"},(0,s.kt)("a",{target:"_blank",href:t(9188).Z},"[Download this handout as PDF]")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Use structural modelling for this experiment; means instantiate components and use port map to connect those components")),(0,s.kt)("h2",{id:"part-a-2-to-4-decoder"},"Part-A: 2 to 4 decoder"),(0,s.kt)("h4",{id:"i-design-3-marks"},"(i) Design ",(0,s.kt)("span",{class:"marks"},"[3 Marks]")),(0,s.kt)("p",null,"Design a 2 to 4 decoder with enable input as shown in figure below. Use only 2 or 3 input AND / NAND gate and inverters. (Assume enable as active high input)"),(0,s.kt)("div",{class:"fig_b"},(0,s.kt)("img",{src:t(1384).Z})),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Decoders are combinational circuit which takes in binary information in the form of N input lines and change the binary information into ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"N"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8413em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8413em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"N"))))))))))))," output lines. ",(0,s.kt)("br",null)),(0,s.kt)("p",{parentName:"div"},"Hint: See Tracefile to understand the functionality of decoder"))),(0,s.kt)("h4",{id:"ii-vhdl-description-5-marks"},"(ii) VHDL description ",(0,s.kt)("span",{class:"marks"},"[5 Marks]")),(0,s.kt)("p",null,"Describe a 2 to 4 decoder with enable input in VHDL. "),(0,s.kt)("h4",{id:"iii-simulation-5-marks"},"(iii) Simulation ",(0,s.kt)("span",{class:"marks"},"[5 Marks]")),(0,s.kt)("p",null,"Simulate the decoder using the generic testbench to confirm the correctness of your description."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To do this, you need to use the given tracefile and modify the testbench given to you appropriately."))),(0,s.kt)("hr",null),"Tracefile format","<A1 A0><E> <Y3 Y2 Y1 Y0> 1111",(0,s.kt)("a",{href:"https://drive.google.com/drive/folders/1xZvx7i1RrTASNoK8Y1OGR772kL1aM2HN?usp=sharing"},"Tracefile \ud83d\udcc3"),(0,s.kt)("div",{class:"page-break"}),(0,s.kt)("h2",{id:"part-b-3-to-8-decoder"},"Part-B: 3 to 8 decoder"),(0,s.kt)("h4",{id:"i-design-3-marks-1"},"(i) Design ",(0,s.kt)("span",{class:"marks"},"[3 Marks]")),(0,s.kt)("p",null,"Design a 3 to 8 decoder with enable input using 2 to 4 decoder designed in part A"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"3 data input ",(0,s.kt)("br",null),"\n1 enable input ",(0,s.kt)("br",null),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"8")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^3 = 8")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"8")))))," output lines"))),(0,s.kt)("h4",{id:"ii-vhdl-description-5-marks-1"},"(ii) VHDL description ",(0,s.kt)("span",{class:"marks"},"[5 Marks]")),(0,s.kt)("p",null,"Describe a 3 to 8 decoder with enable input in VHDL. "),(0,s.kt)("h4",{id:"iii-simulation-5-marks-1"},"(iii) Simulation ",(0,s.kt)("span",{class:"marks"},"[5 Marks]")),(0,s.kt)("p",null,"Simulate the decoder using the generic testbench to confirm the correctness of your description."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To do this, you need to use the given tracefile and modify the testbench given to you appropriately."))),(0,s.kt)("hr",null),"Tracefile format","<A2 A1 A0><E> <Y7 Y6 Y5 Y4 Y3 Y2 Y1 Y0> 11111111",(0,s.kt)("a",{href:"https://drive.google.com/drive/folders/1_IeNXV6oVXXE65BFqepxA9m6W5bsbxFq?usp=sharing"},"Tracefile \ud83d\udcc3"),(0,s.kt)("h2",{id:"part-c-full-adder-using-3-to-8-decoder"},"Part-C: Full adder using 3 to 8 decoder"),(0,s.kt)("h4",{id:"i-design-3-marks-2"},"(i) Design ",(0,s.kt)("span",{class:"marks"},"[3 Marks]")),(0,s.kt)("p",null,"Design full adder using 3 to 8 decoder designed in part B"),(0,s.kt)("h4",{id:"ii-vhdl-description-5-marks-2"},"(ii) VHDL description ",(0,s.kt)("span",{class:"marks"},"[5 Marks]")),(0,s.kt)("p",null,"Describe full adder using 3 to 8 decoder in VHDL. "),(0,s.kt)("h4",{id:"iii-simulation-5-marks-2"},"(iii) Simulation ",(0,s.kt)("span",{class:"marks"},"[5 Marks]")),(0,s.kt)("p",null,"Simulate this full adder using the generic testbench to confirm the correctness of your description."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To do this, use the given tracefile (from full adder demo resources) and modify the testbench given to you appropriately."))),(0,s.kt)("hr",null),"Tracefile format","<A B Cin> <S Cout> 11")}c.isMDXComponent=!0},9188:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/exp_1_w-a51888fac5f41811e5aa9e17a860fe0a.pdf"},1384:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2_to_4_decoder-e2df384347de52fc3e5f1ed505dcdfbf.jpg"}}]);