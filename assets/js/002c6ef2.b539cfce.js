(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3199],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return l},kt:function(){return u}});var n=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},l=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,i=t.originalType,p=t.parentName,l=m(t,["components","mdxType","originalType","parentName"]),d=o(a),u=s,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(k,r(r({ref:e},l),{},{components:a})):n.createElement(k,r({ref:e},l))}));function u(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=a.length,r=new Array(i);r[0]=d;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:s,r[1]=m;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7028:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return r},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var n=a(2122),s=a(9756),i=(a(7294),a(3905)),r={title:"Combinational Circuit 1"},m=void 0,p={unversionedId:"lab-handouts/exp-1-t",id:"lab-handouts/exp-1-t",isDocsHomePage:!1,title:"Combinational Circuit 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-1-t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-1-t",permalink:"/docs/lab-handouts/exp-1-t",version:"current",frontMatter:{title:"Combinational Circuit 1"}},o=[{value:"Part-A: 2x1 Mux",id:"part-a-2x1-mux",children:[]},{value:"Part-B: 4x1 Mux",id:"part-b-4x1-mux",children:[]},{value:"Part-C: 4-bit 4x1 Mux",id:"part-c-4-bit-4x1-mux",children:[]}],l={toc:o};function c(t){var e=t.components,r=(0,s.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,i.kt)("br",null),"\nTuesday 10th August, 2021",(0,i.kt)("br",null)),(0,i.kt)("div",{class:"margin-1"},(0,i.kt)("a",{target:"_blank",href:a(6844).Z},"[Download this handout as PDF]")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use structural modelling for this experiment; means instantiate components and use port map to connect those components")),(0,i.kt)("h2",{id:"part-a-2x1-mux"},"Part-A: 2x1 Mux"),(0,i.kt)("h4",{id:"i-vhdl-description-5-marks"},"(i) VHDL description ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Write the VHDL  description of a  2x1 multiplexer  as shown  in figure below. "),(0,i.kt)("div",{class:"fig_b"},(0,i.kt)("img",{src:a(6887).Z,width:"300",height:"240"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Multiplexer is a combinational circuit that has maximum of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mi",{parentName:"msup"},"n"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.664392em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))))," data inputs, \u2018n\u2019 selection lines and single output line."))),(0,i.kt)("h4",{id:"ii-write-truth-table-and-boolean-expression-for-output-y-3-marks"},"(ii) Write Truth table and boolean expression for output Y ",(0,i.kt)("span",{class:"marks"},"[3 Marks]")),(0,i.kt)("h4",{id:"iii-simulation-5-marks"},"(iii) Simulation ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Simulate the 2x1 multiplexer using the generic testbench to confirm the correctness of your description."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Tracefile format\n{",(0,i.kt)("inlineCode",{parentName:"p"},"<In1><In0><S> <Y> 1"),"} ",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/14QxVhDWDks33huc3Ox7-i9kRpS78qk97?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,i.kt)("h2",{id:"part-b-4x1-mux"},"Part-B: 4x1 Mux"),(0,i.kt)("h4",{id:"i-design-3-marks"},"(i) Design ",(0,i.kt)("span",{class:"marks"},"[3 Marks]")),(0,i.kt)("p",null,"Design 4x1 Mux using only 2x1 Mux"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"2")),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"4")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^2 = 4")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4")))))," data inputs ",(0,i.kt)("br",null),"\n2 select lines  ",(0,i.kt)("br",null),"\n1 output line"))),(0,i.kt)("h4",{id:"ii-vhdl-description-5-marks"},"(ii) VHDL description ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Write the VHDL  description of a  4x1 multiplexer designed using 2x1 Mux."),(0,i.kt)("h4",{id:"iii-simulation-5-marks-1"},"(iii) Simulation ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Simulate the 4x1 multiplexer using the generic testbench to confirm the correctness of your description."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To do this, use the given tracefile and modify the testbench given to you appropriately."))),(0,i.kt)("hr",null),"Tracefile format","<In4><In3><In2><In1><S2><S1> <Y> 1",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/1Pku4Vqpq7Z9NBw5olnRQiKO5qDf_2dAG?usp=sharing"},"Tracefile \ud83d\udcc3"),(0,i.kt)("div",{class:"page-break"}),(0,i.kt)("h2",{id:"part-c-4-bit-4x1-mux"},"Part-C: 4-bit 4x1 Mux"),(0,i.kt)("h4",{id:"i-design-3-marks-1"},"(i) Design ",(0,i.kt)("span",{class:"marks"},"[3 Marks]")),(0,i.kt)("p",null,"Design 4-bit wide 4x1 Mux using only 4x1 Mux designed in part B."),(0,i.kt)("div",{class:"fig_b"},(0,i.kt)("img",{src:a(8313).Z,width:"300",height:"240"})),(0,i.kt)("h4",{id:"ii-vhdl-description-5-marks-1"},"(ii) VHDL description ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Write the VHDL description of a 4-bit wide 4x1 multiplexer designed using 4x1 Mux."),(0,i.kt)("h4",{id:"iii-simulation-5-marks-2"},"(iii) Simulation ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Simulate the 4-bit 4x1 multiplexer using the generic testbench to confirm the correctness of your description.    "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,i.kt)("hr",null),"Tracefile format","<d3 d2 d1 d0><c3 c2 c1 c0><b3 b2 b1 b0><a3 a2 a1 a0><sel1 sel0> <Y3Y2Y1Y0> 1111",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/1toAaAdVs45lxdaMdaAcUbjGsvY7jPioL?usp=sharing"},"Tracefile \ud83d\udcc3"))}c.isMDXComponent=!0},6844:function(t,e,a){"use strict";e.Z=a.p+"assets/files/exp_1_t-02264fbdb8111cdea3a71ecc63070b20.pdf"},8313:function(t,e,a){"use strict";e.Z=a.p+"assets/images/4x1_mux-b2ba25b400df6eac57ad7051b4377c85.png"},6887:function(t,e,a){"use strict";e.Z=a.p+"assets/images/mux21-159731bd9f04f3a58a3765282bc489be.png"}}]);