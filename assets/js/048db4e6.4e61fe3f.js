"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"Sequential Circuit - 2"},a=void 0,l={unversionedId:"lab-handouts/exp-6-w",id:"version-Autumn21/lab-handouts/exp-6-w",title:"Sequential Circuit - 2",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/versioned_docs/version-Autumn21/lab-handouts/exp-6-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-6-w",permalink:"/docs/Autumn21/lab-handouts/exp-6-w",draft:!1,tags:[],version:"Autumn21",frontMatter:{title:"Sequential Circuit - 2"},sidebar:"version-Autumn21/docs",previous:{title:"Practice Problem - 1",permalink:"/docs/Autumn21/lab-handouts/pract-1-t"},next:{title:"Practice Problem - 1",permalink:"/docs/Autumn21/lab-handouts/pract-2-w"}},c={},s=[{value:"Handout",id:"handout",level:2},{value:"Tracefile format",id:"tracefile-format",level:2},{value:"Skeleton code",id:"skeleton-code",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,o.kt)("br",null),"\nWednesday 6th October, 2021",(0,o.kt)("br",null)),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"handout"},"Handout"),(0,o.kt)("div",{class:"pdf-container"},(0,o.kt)("iframe",{src:"https://drive.google.com/file/d/1SxdMQITaNRPCsuncktPaZrAP7xPjl0jf/preview",class:"responsive-iframe"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"tracefile-format"},"Tracefile format"),(0,o.kt)("p",null,"{",(0,o.kt)("inlineCode",{parentName:"p"},"5bitinput < nospace > reset < nospace > clock < space > output < space > Maskbit"),"} ",(0,o.kt)("a",{href:"https://drive.google.com/drive/folders/1UBSftZ7v0Q9vysP58azPN_B9mx3AvA5Y?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,o.kt)("h2",{id:"skeleton-code"},"Skeleton code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\nuse ieee.numeric_std.all;\n\nentity krypton is\nport(inp:in std_logic_vector(4 downto 0);\n        reset,clock:in std_logic;\n        outp: out std_logic);\nend krypton;\n\narchitecture rch of krypton is\n\n---------------Define state type here-----------------------------\ntype state is (rst,s1,      -- Fill the code here\n---------------Define signals of state type-----------------------\nsignal y_present,y_next: state:=rst;\n\nbegin\nclock_proc:process(clock,reset)\nbegin\n    if(clock='1' and clock' event) then\n        if(reset='1') then\n            y_present<=     -- Fill the code here\n        else\n                            -- Fill the code here\n        end if;\n    end if;\n    \nend process;\n\nstate_transition_proc:process(inp,y_present)\nbegin\n    case y_present is\n        when init=>\n            if(unsigned(inp)=11) then   --k\n                y_next<=-- Fill the code here\n            else\n                        -- Fill the code here\n            end if;\n                        -- Fill the code here\n\n")))}p.isMDXComponent=!0}}]);