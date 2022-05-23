(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5704],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(h,c(c({ref:n},u),{},{components:t})):r.createElement(h,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3907:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),c={title:"Sequential Circuit - 2"},a=void 0,l={unversionedId:"lab-handouts/exp-6-w",id:"lab-handouts/exp-6-w",isDocsHomePage:!1,title:"Sequential Circuit - 2",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-6-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-6-w",permalink:"/docs/lab-handouts/exp-6-w",version:"current",frontMatter:{title:"Sequential Circuit - 2"}},s=[{value:"Handout",id:"handout",children:[]},{value:"Tracefile format",id:"tracefile-format",children:[]},{value:"Skeleton code",id:"skeleton-code",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,i.kt)("br",null),"\nWednesday 6th October, 2021",(0,i.kt)("br",null)),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"handout"},"Handout"),(0,i.kt)("div",{class:"pdf-container"},(0,i.kt)("iframe",{src:"https://drive.google.com/file/d/1SxdMQITaNRPCsuncktPaZrAP7xPjl0jf/preview",class:"responsive-iframe"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tracefile-format"},"Tracefile format"),(0,i.kt)("p",null,"{",(0,i.kt)("inlineCode",{parentName:"p"},"5bitinput < nospace > reset < nospace > clock < space > output < space > Maskbit"),"} ",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/1UBSftZ7v0Q9vysP58azPN_B9mx3AvA5Y?usp=sharing"},"Tracefile \ud83d\udcc3")),(0,i.kt)("h2",{id:"skeleton-code"},"Skeleton code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"library ieee;\nuse ieee.std_logic_1164.all;\nuse ieee.numeric_std.all;\n\nentity krypton is\nport(inp:in std_logic_vector(4 downto 0);\n        reset,clock:in std_logic;\n        outp: out std_logic);\nend krypton;\n\narchitecture rch of krypton is\n\n---------------Define state type here-----------------------------\ntype state is (rst,s1,      -- Fill the code here\n---------------Define signals of state type-----------------------\nsignal y_present,y_next: state:=rst;\n\nbegin\nclock_proc:process(clock,reset)\nbegin\n    if(clock='1' and clock' event) then\n        if(reset='1') then\n            y_present<=     -- Fill the code here\n        else\n                            -- Fill the code here\n        end if;\n    end if;\n    \nend process;\n\nstate_transition_proc:process(inp,y_present)\nbegin\n    case y_present is\n        when init=>\n            if(unsigned(inp)=11) then   --k\n                y_next<=-- Fill the code here\n            else\n                        -- Fill the code here\n            end if;\n                        -- Fill the code here\n\n")))}p.isMDXComponent=!0}}]);