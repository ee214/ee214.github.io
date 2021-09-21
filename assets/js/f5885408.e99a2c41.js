(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[394],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5817:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={title:"Combinational Circuit 4"},l=void 0,c={unversionedId:"lab-handouts/exp-4-t",id:"lab-handouts/exp-4-t",isDocsHomePage:!1,title:"Combinational Circuit 4",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-4-t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-4-t",permalink:"/docs/lab-handouts/exp-4-t",version:"current",frontMatter:{title:"Combinational Circuit 4"},sidebar:"docs",previous:{title:"Combinational Circuit 3",permalink:"/docs/lab-handouts/exp-3-w"}},s=[{value:"ALU",id:"alu",children:[]}],u={toc:s};function d(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,o.kt)("br",null),"\nThursday 21th September, 2021",(0,o.kt)("br",null)),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Behavioral and Dataflow modelling for this experiment")),(0,o.kt)("h2",{id:"alu"},"ALU"),(0,o.kt)("h4",{id:"i-describe-given-circuit-using-vhdl-5-marks"},"(i) Describe given circuit using VHDL ",(0,o.kt)("span",{class:"marks"},"[5 Marks]")),(0,o.kt)("p",null,"Describe given ALU circuit using VHDL which perform various functions based on select lines"),(0,o.kt)("div",{class:"fig_b"},(0,o.kt)("img",{src:n(5966).Z})),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"S1 S0"),(0,o.kt)("th",null,"ALU Output"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0 0"),(0,o.kt)("td",null,"Concatenate two 4-bit inputs A and B")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"0 1"),(0,o.kt)("td",null,"Performs A+B Operation")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"1 0"),(0,o.kt)("td",null,"Performs A xor B Operation")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"1 1"),(0,o.kt)("td",null,"Produces output as 2*A")))),(0,o.kt)("p",null,"You can use the skeleton code given below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vhdl"},'\nlibrary ieee;\nuse ieee.std_logic_1164.all;\n\nentity alu_beh is\n    generic(\n        operand_width : integer:=4;\n        sel_line : integer:=2\n        );\n    port (\n        A: in std_logic_vector(operand_width-1 downto 0);\n        B: in std_logic_vector(operand_width-1 downto 0);\n        sel: in std_logic_vector(sel_line-1 downto 0);\n        op: out std_logic_vector((operand_width*2)-1 downto 0)\n    ) ;\nend alu_beh;\n\narchitecture a1 of alu_beh is\n    function add(A: in std_logic_vector(operand_width-1 downto 0); B: in std_logic_vector(operand_width-1 downto 0))\n        return std_logic_vector is\n            -- Declare "sum" and "carry" variable\n        begin\n            -- write logic for addition\n            -- Hint: Use for loop\n            return sum;\n    end add;\n\n \nbegin\nalu : process( A, B, sel )\nbegin\n   -- complete VHDL code for various outputs of ALU based on select lines\n   -- Hint: use if/else statement\nend process ; -- alu\nend a1 ; -- a1\n\n')),(0,o.kt)("h4",{id:"ii-simulation-5-marks"},"(ii) Simulation ",(0,o.kt)("span",{class:"marks"},"[5 Marks]")),(0,o.kt)("p",null,"Simulate your design using the generic testbench to confirm the correctness of your description."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,o.kt)("h4",{id:"iii-scanchain-5-marks"},"(iii) Scanchain ",(0,o.kt)("span",{class:"marks"},"[5 Marks]")),(0,o.kt)("p",null,"Test the correctness of your design using Scanchain"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Tracefile format\n{",(0,o.kt)("inlineCode",{parentName:"p"},"<S1 S0 A3 A2 A1 A0 B3 B2 B1 B0> <Y7 Y6 Y5 Y4 Y3 Y2 Y1 Y0> 11111111"),"} ",(0,o.kt)("a",{href:"https://drive.google.com/drive/folders/12Unu5Vjohz08gSuUHaRxDvnazqPIHd6_?usp=sharing"},"Tracefile \ud83d\udcc3")))}d.isMDXComponent=!0},5966:function(e,t,n){"use strict";t.Z=n.p+"assets/images/alu1-721bd12d3118d74b282d35628b26db79.png"}}]);