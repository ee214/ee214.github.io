(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5119],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2744:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={title:"Combinational Circuit 2"},s=void 0,c={unversionedId:"lab-handouts/exp-2-w",id:"lab-handouts/exp-2-w",isDocsHomePage:!1,title:"Combinational Circuit 2",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-2-w.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-2-w",permalink:"/docs/lab-handouts/exp-2-w",version:"current",frontMatter:{title:"Combinational Circuit 2"},sidebar:"docs",previous:{title:"Combinational Circuit 2",permalink:"/docs/lab-handouts/exp-2-t"}},l=[{value:"Scrabble",id:"scrabble",children:[]}],p={toc:l};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,i.kt)("br",null),"\nThursday 18th August, 2021",(0,i.kt)("br",null)),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use structural modelling for this experiment; means instantiate components and use port map to connect those components")),(0,i.kt)("h2",{id:"scrabble"},"Scrabble"),(0,i.kt)("h4",{id:"i-design-3-marks--3-bonus"},"(i) Design ",(0,i.kt)("span",{class:"marks"},"[3 Marks + 3 Bonus]")),(0,i.kt)("p",null,"Scrabble is an extremely popular word game where players score points by placing tiles on a board that make correct words. Each letter used in the word has some points attached to it, based on how frequently it occurs in the English language. For example, the most frequent alphabet E has only 1 point whereas the least frequent letter Z has 10 points."),(0,i.kt)("p",null,"The modified scoring system is as below"),(0,i.kt)("div",{class:"fig_b"},(0,i.kt)("img",{src:n(9314).Z})),(0,i.kt)("p",null,"Let us assume that we have only the first 16 letters of the English alphabets (i.e. A to P)\nLet 0000 represent A, 0001 represent B and so on. "),(0,i.kt)("p",null,"Design a system that gives output as \u20181\u2019 when a given alphabet has 3 points, and \u20180\u2019 in other cases"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You are only allowed to use pre-designed gates using port maps (NO DATAFLOW STATEMENTS).",(0,i.kt)("br",null),"\nMake an attempt to minimize the number of logic gates used."),(0,i.kt)("span",{class:"marks"},"[3 Marks]")," bonus will be given if designed using least number of 2-input gates and inverter.  (3-input gates will be counted as two 2-input gates)")),(0,i.kt)("h4",{id:"ii-vhdl-description-5-marks"},"(ii) VHDL description ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Describe your designed circuit in VHDL."),(0,i.kt)("h4",{id:"iii-simulation-5-marks"},"(iii) Simulation ",(0,i.kt)("span",{class:"marks"},"[5 Marks]")),(0,i.kt)("p",null,"Simulate your design using the generic testbench to confirm the correctness of your description."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To do this, use the tracefile given below and modify the testbench given to you appropriately."))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Tracefile format\n{",(0,i.kt)("inlineCode",{parentName:"p"},"<x3 x2 x1 x0> <Y> 1"),"} ",(0,i.kt)("a",{href:"https://drive.google.com/drive/folders/1Ds7VGrXtvh6mJKmY_cm_MM6hXphrWq5Z?usp=sharing"},"Tracefile \ud83d\udcc3")))}u.isMDXComponent=!0},9314:function(e,t,n){"use strict";t.Z=n.p+"assets/images/scrabble-e461e847b364b99e78c3db2a96799ef6.png"}}]);