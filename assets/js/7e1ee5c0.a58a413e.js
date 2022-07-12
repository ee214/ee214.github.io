"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3522],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"Sequential Circuit - 1"},l=void 0,i={unversionedId:"lab-handouts/exp-5-t",id:"version-1.0/lab-handouts/exp-5-t",title:"Sequential Circuit - 1",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/versioned_docs/version-1.0/lab-handouts/exp-5-t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-5-t",permalink:"/docs/1.0/lab-handouts/exp-5-t",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Sequential Circuit - 1"}},c={},s=[{value:"Handout",id:"handout",level:2},{value:"Tracefile format",id:"tracefile-format",level:2},{value:"Flipflop Behavioural Modelling",id:"flipflop-behavioural-modelling",level:2},{value:"Skeleton code",id:"skeleton-code",level:2},{value:"Sequence Generator (Structural Modelling)",id:"sequence-generator-structural-modelling",level:3},{value:"Sequence Generator (Behavioural Modelling)",id:"sequence-generator-behavioural-modelling",level:3}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,o.kt)("br",null),"\nTuesday 28th September, 2021",(0,o.kt)("br",null)),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"handout"},"Handout"),(0,o.kt)("div",{class:"pdf-container"},(0,o.kt)("iframe",{src:"https://drive.google.com/file/d/1l__69WywP81wWtxM6NQJHQiwrzLCL6cO/preview",class:"responsive-iframe"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"tracefile-format"},"Tracefile format"),(0,o.kt)("p",null,"{",(0,o.kt)("inlineCode",{parentName:"p"},"< reset clock >< y2y1y0 > 111"),"} ",(0,o.kt)("a",{href:"https://drive.google.com/drive/folders/1llRkVUddTDsJmWpRjTHXYV12Eg4KbgpM?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,o.kt)("h2",{id:"flipflop-behavioural-modelling"},"Flipflop Behavioural Modelling"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\npackage flipflops is\n  \n  component dff2 is port(D,clk,reset:in std_logic;Q:out std_logic);\n  end component dff2;\n  \n-- Instantiate remaining components  \n  \n\nend package flipflops \n\n\n\n--D flip flop2\nlibrary ieee;\nuse ieee.std_logic_1164.all;\nentity dff2 is port(D,clk,reset:in std_logic;Q:out std_logic);\nend entity dff2;\narchitecture behav of dff2 is\nbegin\ndff2: process (clk,reset)\nbegin\n--on reset make Q 0 or 1 based on requirement \nif(reset='1')then\nQ <= '0';\nelsif (CLK'event and (CLK='1')) then\nQ <= D;\nend if;\nend process dff2;\nend behav;\n\n")),(0,o.kt)("h2",{id:"skeleton-code"},"Skeleton code"),(0,o.kt)("h3",{id:"sequence-generator-structural-modelling"},"Sequence Generator (Structural Modelling)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\nlibrary work;\nuse work.<user_Defined_package_name>.all; \n\nentity sequence_generator_structural is\nport (reset,clock: in std_logic;\ny:out std_logic_vector(2 downto 0));\nend entity sequence_generator_structural;\narchitecture struct of sequence_generator_structural is \nsignal D2,D1,D0 :std_logic;\nsignal Q:std_logic_vector(2 downto 0);\nbegin\n-- write the equations here\nD2<=\nD1<= \nD0<=\ny(2)<=\ny(1)<= \ny(0)<=\n\n-- Do the port mapping                          --asynchronous reset\n--Q0\ndff_0  : dff0 port map();\n\n--Q1\ndff_1  : dff1 port map();\n\n--Q2\ndff_2  : dff2 port map();\n\n\nend struct;\n")),(0,o.kt)("h3",{id:"sequence-generator-behavioural-modelling"},"Sequence Generator (Behavioural Modelling)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\n\nentity sequence_behavior is\nport (reset,clock: in std_logic;\ny:out std_logic_vector(2 downto 0));\nend entity sequence_behavior;\n\narchitecture behav  of sequence_behavior is\n--state binary encoding\nsignal state:std_logic_vector(2 downto 0);\nconstant s_2:std_logic_vector(2 downto 0):=\"010\";\n--write the remaining constant declarations    \nbegin \n-- process for next state and output logic\nreg_process: process(clock,reset)\nbegin\nif(reset='1')then \nstate<=; -- write the reset state\nelsif(clock'event and clock='1')then\ncase state is  \n      --reset\n      when s_2=>\n     state<=s_0;\n     -- write the remaining choices   \n       --DEFAULT CASE\n      when others=>\n        state<=;-- write the reset state\n      end case; \nend if;\nend process reg_process;\n-- output logic concurrent statemet or one more process\ny<=state;\nend behav;\n")))}d.isMDXComponent=!0}}]);