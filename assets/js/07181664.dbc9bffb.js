(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1867],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8011:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={sidebar_position:2,title:"4-bit Adder-Subtractor"},c={unversionedId:"lab-handouts/lab1",id:"lab-handouts/lab1",isDocsHomePage:!1,title:"4-bit Adder-Subtractor",description:"(i) - VHDL Description",source:"@site/docs/lab-handouts/lab1.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/lab1",permalink:"/docs/lab-handouts/lab1",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"4-bit Adder-Subtractor"},sidebar:"docs",next:{title:"Mux",permalink:"/docs/lab-handouts/lab1_c"}},s=[{value:"(i) - VHDL Description",id:"i---vhdl-description",children:[]},{value:"(ii) Simulation",id:"ii-simulation",children:[]}],l={toc:s};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"i---vhdl-description"},"(i) - VHDL Description"),(0,a.kt)("p",null,"You have been given a full adder description in the reference design. Using this full adder\nas a component, describe a 4-bit ripple carry adder-subtractor in VHDL. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is a simple binary adder-subtractor that can be implemented by cascading four 1-bit full\nadders such that the the carry generated by the addition of lower significant bits forms the\nincoming carry for addition of the next significant bits."),(0,a.kt)("p",{parentName:"div"},"If M = 0, output will be A + B",(0,a.kt)("br",null),"\nIf M = 1, output will be A - B"))),(0,a.kt)("div",{class:"fig_b"},(0,a.kt)("img",{src:n(1994).Z})),(0,a.kt)("h3",{id:"ii-simulation"},"(ii) Simulation"),(0,a.kt)("p",null," Simulate the adder using the generic testbench to confirm the correctness of your description.\nTo do this, note that you need to use the given tracefile and modify\nthe testbench given to you appropriately."),(0,a.kt)("hr",null),"Tracefile format ",(0,a.kt)("br",null),"<a3 a2 a1 a0><b3 b2 b1 b0><M> <Cout><S> 11111"," ",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/drive/folders/118f9SOw_xYte5BZk31zeLvIgCcgCgXSy?usp=sharing"},"Tracefile \ud83d\udcc3"))}u.isMDXComponent=!0},1994:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add_sub-2256aecc64123c72706d8efaa32f6a98.jpg"}}]);