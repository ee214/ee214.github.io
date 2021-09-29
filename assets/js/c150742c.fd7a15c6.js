(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9526],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4613:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={title:"Sequential Circuit - 1"},l=void 0,c={unversionedId:"lab-handouts/exp-5-t",id:"lab-handouts/exp-5-t",isDocsHomePage:!1,title:"Sequential Circuit - 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-5-t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-5-t",permalink:"/docs/lab-handouts/exp-5-t",version:"current",frontMatter:{title:"Sequential Circuit - 1"},sidebar:"docs",previous:{title:"Combinational Circuit 4",permalink:"/docs/lab-handouts/exp-4-w"},next:{title:"Sequential Circuit - 1",permalink:"/docs/lab-handouts/exp-5-w"}},s=[{value:"Handout",id:"handout",children:[]},{value:"Tracefile format",id:"tracefile-format",children:[]},{value:"Flipflop Behavioural Modelling",id:"flipflop-behavioural-modelling",children:[]},{value:"Skeleton code",id:"skeleton-code",children:[{value:"Sequence Generator (Structural Modelling)",id:"sequence-generator-structural-modelling",children:[]},{value:"Sequence Generator (Behavioural Modelling)",id:"sequence-generator-behavioural-modelling",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,i.kt)("br",null),"\nThursday 28th September, 2021",(0,i.kt)("br",null)),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"handout"},"Handout"),(0,i.kt)("div",{class:"pdf-container"},(0,i.kt)("iframe",{src:"https://drive.google.com/file/d/1l__69WywP81wWtxM6NQJHQiwrzLCL6cO/preview",class:"responsive-iframe"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tracefile-format"},"Tracefile format"),(0,i.kt)("p",null,"{",(0,i.kt)("inlineCode",{parentName:"p"},"< reset clock >< y2y1y0 > 111"),"} ",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/1llRkVUddTDsJmWpRjTHXYV12Eg4KbgpM?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,i.kt)("h2",{id:"flipflop-behavioural-modelling"},"Flipflop Behavioural Modelling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\npackage flipflops is\n  \n  component dff2 is port(D,clk,reset:in std_logic;Q:out std_logic);\n  end component dff2;\n  \n-- Instantiate remaining components  \n  \n\nend package flipflops \n\n\n\n--D flip flop2\nlibrary ieee;\nuse ieee.std_logic_1164.all;\nentity dff2 is port(D,clk,reset:in std_logic;Q:out std_logic);\nend entity dff2;\narchitecture behav of dff2 is\nbegin\ndff2: process (clk,reset)\nbegin\n--on reset make Q 0 or 1 based on requirement \nif(reset='1')then\nQ <= '0';\nelsif (CLK'event and (CLK='1')) then\nQ <= D;\nend if;\nend process dff2;\nend behav;\n\n")),(0,i.kt)("h2",{id:"skeleton-code"},"Skeleton code"),(0,i.kt)("h3",{id:"sequence-generator-structural-modelling"},"Sequence Generator (Structural Modelling)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\nlibrary work;\nuse work.<user_Defined_package_name>.all; \n\nentity sequence_generator_structural is\nport (reset,clock: in std_logic;\ny:out std_logic_vector(2 downto 0));\nend entity sequence_generator_structural;\narchitecture struct of sequence_generator_structural is \nsignal D2,D1,D0 :std_logic;\nsignal Q:std_logic_vector(2 downto 0);\nbegin\n-- write the equations here\nD2<=\nD1<= \nD0<=\ny(2)<=\ny(1)<= \ny(0)<=\n\n-- Do the port mapping                          --asynchronous reset\n--Q0\ndff_0  : dff0 port map();\n\n--Q1\ndff_1  : dff1 port map();\n\n--Q2\ndff_2  : dff2 port map();\n\n\nend struct;\n")),(0,i.kt)("h3",{id:"sequence-generator-behavioural-modelling"},"Sequence Generator (Behavioural Modelling)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\n\nentity sequence_behavior is\nport (reset,clock: in std_logic;\ny:out std_logic_vector(2 downto 0));\nend entity sequence_behavior;\n\narchitecture behav  of sequence_behavior is\n--state binary encoding\nsignal state:std_logic_vector(2 downto 0);\nconstant s_2:std_logic_vector(2 downto 0):=\"010\";\n--write the remaining constant declarations    \nbegin \n-- process for next state and output logic\nreg_process: process(clock,reset)\nbegin\nif(reset='1')then \nstate<=; -- write the reset state\nelsif(clock'event and clock='1')then\ncase state is  \n      --reset\n      when s_2=>\n     state<=s_0;\n     -- write the remaining choices   \n       --DEFAULT CASE\n      when others=>\n        state<=;-- write the reset state\n      end case; \nend if;\nend process reg_process;\n-- output logic concurrent statemet or one more process\ny<=state;\nend behav;\n")))}d.isMDXComponent=!0}}]);