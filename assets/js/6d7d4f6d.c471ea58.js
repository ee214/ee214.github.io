(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3880],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||r;return n?i.createElement(u,o(o({ref:t},l),{},{components:n})):i.createElement(u,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2379:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={title:"Combinational Circuit 1"},s=void 0,c={unversionedId:"lab-handouts/exp-1-sc",id:"lab-handouts/exp-1-sc",isDocsHomePage:!1,title:"Combinational Circuit 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-1-sc.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-1-sc",permalink:"/docs/lab-handouts/exp-1-sc",version:"current",frontMatter:{title:"Combinational Circuit 1"},sidebar:"docs"},d=[{value:"Part-A: 4:2 Priority Encoder",id:"part-a-42-priority-encoder",children:[]},{value:"Part-B: 8:3 Priority Encoder",id:"part-b-83-priority-encoder",children:[]}],l={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,r.kt)("br",null),"\nMonday 23rd May, 2022",(0,r.kt)("br",null)),(0,r.kt)("div",{class:"margin-1"},(0,r.kt)("a",{target:"_blank",href:n(3197).Z},"[Download this handout as PDF]")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"part-a-42-priority-encoder"},"Part-A: 4:2 Priority Encoder"),(0,r.kt)("p",null,"Demonstrate the implementation of a priority encoder using the\nKrypton CPLD kit, and verify that the implementation is correct by using\nthe on-board switches and LED\u2019s in the kit. The circuit to be implemented\nis an 4-to-2 encoder which has 4 inputs signals x3,x2,x1,x0, and\nproduces 2 bit encoded output s1,s0 and a signal bit N indicating whether\nthe bits on s1,s0 are valid or not. "),(0,r.kt)("div",{class:"fig_b"},(0,r.kt)("img",{src:n(8973).Z,width:"300",height:"240"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If all the input bits to the encoder are 0,\nthen N=1 and s1,s0 are dont-cares. If at least one of the input bits to the\nencoder is 1, then N=0, and the bits s1,s0 indicate the binary code for the\nlowest index I for which the corresponding input xI is 1. So when multiple\ninput bits are 1, the encoded bit s1,s0 represent the binary representation\nof lowest index I such that xI is 1."))),(0,r.kt)("h4",{id:"i-write-the-vhdl-description-of-42-priority-encoder-10-marks"},"(i) Write the VHDL description of 4:2 Priority Encoder ",(0,r.kt)("span",{class:"marks"},"[10 Marks]")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use either behavioural or structural modelling"))),(0,r.kt)("h4",{id:"ii-simulation-5-marks"},"(ii) Simulation ",(0,r.kt)("span",{class:"marks"},"[5 Marks]")),(0,r.kt)("p",null,"Simulate the 4:2 Priority Encoder using the generic testbench to confirm the correctness of your description."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Tracefile format\n{",(0,r.kt)("inlineCode",{parentName:"p"},"<x3><x2><x1><x0> <s1><s0><N> 111"),"} ",(0,r.kt)("a",{href:"https://drive.google.com/drive/folders/1cgpoLz96wpL2i8ojBGiLe6eNFpZubmPE?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,r.kt)("h2",{id:"part-b-83-priority-encoder"},"Part-B: 8:3 Priority Encoder"),(0,r.kt)("p",null,"Repeat the above problem for 8:3 priority encoder"),(0,r.kt)("div",{class:"fig_b"},(0,r.kt)("img",{src:n(6005).Z,width:"300",height:"240"})),(0,r.kt)("h4",{id:"i-write-the-vhdl-description-of-83-priority-encoder-10-marks"},"(i) Write the VHDL description of 8:3 Priority Encoder ",(0,r.kt)("span",{class:"marks"},"[10 Marks]")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use either behavioural or structural modelling"))),(0,r.kt)("h4",{id:"ii-simulation-5-marks-1"},"(ii) Simulation ",(0,r.kt)("span",{class:"marks"},"[5 Marks]")),(0,r.kt)("p",null,"Simulate the 8:3 Priority Encoder using the generic testbench to confirm the correctness of your description."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Tracefile format\n{",(0,r.kt)("inlineCode",{parentName:"p"},"<x7><x6><x5><x4><x3><x2><x1><x0> <s2><s1><s0><N> 1111"),"} ",(0,r.kt)("a",{href:"https://drive.google.com/drive/folders/1XXWD1sutqei9gWWsTjuKKMSDJfDTDRnq?usp=sharing"},"Tracefile \ud83d\udcc3")))}p.isMDXComponent=!0},3197:function(e,t,n){"use strict";t.Z=n.p+"assets/files/exp_1_sc-9da0527a44bf1fd33641d356aea81469.pdf"},8973:function(e,t,n){"use strict";t.Z=n.p+"assets/images/P_Encoder_4_to_2-b86dee722c69540ab79978e2a5f41916.png"},6005:function(e,t,n){"use strict";t.Z=n.p+"assets/images/P_Encoder_8_to_3-a2b5956590d517e85994fd8403ec7e6c.png"}}]);