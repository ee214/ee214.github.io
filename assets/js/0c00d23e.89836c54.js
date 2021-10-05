(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2851],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2660:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),l={title:"Sequential Circuit - 1"},a=void 0,c={unversionedId:"lab-handouts/exp-5-w",id:"lab-handouts/exp-5-w",isDocsHomePage:!1,title:"Sequential Circuit - 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-5-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-5-w",permalink:"/docs/lab-handouts/exp-5-w",version:"current",frontMatter:{title:"Sequential Circuit - 1"},sidebar:"docs",previous:{title:"Sequential Circuit - 1",permalink:"/docs/lab-handouts/exp-5-t"},next:{title:"Sequential Circuit - 1",permalink:"/docs/lab-handouts/exp-6-t"}},s=[{value:"Handout",id:"handout",children:[]},{value:"Tracefile format",id:"tracefile-format",children:[]},{value:"Flipflop Behavioural Modelling",id:"flipflop-behavioural-modelling",children:[]},{value:"Skeleton code",id:"skeleton-code",children:[{value:"Sequence Generator (Structural Modelling)",id:"sequence-generator-structural-modelling",children:[]},{value:"Sequence Generator (Behavioural Modelling)",id:"sequence-generator-behavioural-modelling",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,i.kt)("br",null),"\nThursday 29th September, 2021",(0,i.kt)("br",null)),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"handout"},"Handout"),(0,i.kt)("div",{class:"pdf-container"},(0,i.kt)("iframe",{src:"https://drive.google.com/file/d/1zrOi29VYjQBveVxpEwGfmv-o5MXbsL3L/preview",class:"responsive-iframe"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tracefile-format"},"Tracefile format"),(0,i.kt)("p",null,"{",(0,i.kt)("inlineCode",{parentName:"p"},"< reset clock >< y2y1y0 > 111"),"} ",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/1qSgOiXeBRLTrt57I0aX2TINpq8IE90ca?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,i.kt)("h2",{id:"flipflop-behavioural-modelling"},"Flipflop Behavioural Modelling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\npackage Flipflops is\n  component dff_set is port(D,clock,set:in std_logic;Q:out std_logic);\n  end component dff_set;\n  --write the component instantiation for the entity dff_reset\n end package Flipflops;\n \n--D flip flop with set\nlibrary ieee;\nuse ieee.std_logic_1164.all;\n\nentity dff_set is port(D,clock,set:in std_logic;Q:out std_logic);\nend entity dff_set;\n\narchitecture behav of dff_set is\nbegin\ndff_set_proc: process (clock,set)\nbegin\nif(set='1')then -- set implies flip flip output logic high\n    Q <= '1'; \nelsif (clock'event and (clock='1')) then\n    Q <= D;\nend if ;\nend process dff_set_proc;\nend behav;\n\n--D flip flop with reset\nlibrary ieee;\nuse ieee.std_logic_1164.all;\n\nentity dff_reset is port(D,clock,reset:in std_logic;Q:out std_logic);\nend entity dff_reset;\n\narchitecture behav of dff_reset is\nbegin\ndff_reset_proc: process () --write the sensitivity list\nbegin\nif(reset='1')then -- reset implies flip flip output logic low\n    Q <= ; -- write the D Flipflop output when reset\nelsif (clock'event and (clock='1')) then\n    Q <= ; ---- write the D Flipflop output when posedge clock is triggered end if ;\nend process dff_reset_proc;\nend behav;\n\n")),(0,i.kt)("h2",{id:"skeleton-code"},"Skeleton code"),(0,i.kt)("h3",{id:"sequence-generator-structural-modelling"},"Sequence Generator (Structural Modelling)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\n-- write the Flipflops packege declaration\n\nentity Sequence_generator_stru_dataflow is\nport (reset,clock: in std_logic;\ny:out std_logic_vector(2 downto 0));\nend entity Sequence_generator_stru_dataflow;\n\narchitecture struct of Sequence_generator_stru_dataflow is \nsignal D :std_logic_vector(2 downto 0); -- D flip flop inputs\nsignal Q:std_logic_vector(2 downto 0);  -- D flip flop outputs\nbegin\n\n-- write the eqations in dataflow  e.g z=a+bc written z<= a or (b and c)\nD(2)<=;\n\nD(1)<= ;\n\nD(0)<=;\n                                                                                                      \ny(2 downto 0)<= ;                                                                                    \n\n--Q0\ndff_0  : dff_reset port map(); \n\n--Q1\ndff_1  : dff_set port map();\n\n--Q2\ndff_2  : dff_set port map();\nend struct;                                                                                                   \n")),(0,i.kt)("h3",{id:"sequence-generator-behavioural-modelling"},"Sequence Generator (Behavioural Modelling)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\n\nentity sequence_generator_behavior is\nport (reset,clock: in std_logic;\ny:out std_logic_vector(2 downto 0));\nend entity sequence_generator_behavior;\n\narchitecture behav  of sequence_generator_behavior is\n--state binary encoding\nsignal state:std_logic_vector(2 downto 0);\nconstant s_2:std_logic_vector(2 downto 0):=\"010\";\n-- write the remaining constants \nbegin \n-- process for next state andflipflop logic\nreg_process: process(clock,reset)\nbegin\nif(reset='1')then \nstate<=; -- write the reset state\nelsif(clock'event and clock='1')then                                                                                                                                                           \ncase state is  \n      when s_6=>\n     state<=s_7;\n     -- write the remaining  all choices of states\n\n--this is needed  because std_logic can take values other than 0,1 i.e high imepedance\n      when others=>\n        state<=; -- write the reset state \n      end case; \nend if;\nend process reg_process;\n-- output logic concurrent statemet or one more process\ny<=state;\nend behav;\n")))}d.isMDXComponent=!0}}]);