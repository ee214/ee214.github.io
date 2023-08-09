"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(b,r(r({ref:t},c),{},{components:a})):n.createElement(b,r({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),i=a(6010),r=a(2389),o=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:r,block:d,defaultValue:m,values:b,groupId:f,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[x,A]=(0,l.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==x&&k.some((t=>t.value===e))&&A(e)}const Z=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==x&&(E(t),A(n),null!=f&&w(f,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var l;const t=O.indexOf(e.currentTarget)-1;a=null!=(l=O[t])?l:O[O.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:Z,onClick:Z},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},3271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),i=a(5488),r=a(5162);const o={},s=void 0,u={unversionedId:"linux/Installation",id:"linux/Installation",title:"Installation",description:"",source:"@site/docs/linux/Installation.mdx",sourceDirName:"linux",slug:"/linux/Installation",permalink:"/docs/linux/Installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sl",next:{title:"UrJTAG installation on Ubuntu",permalink:"/docs/linux/urjtag"}},c={},p=[],d={toc:p};function m(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to Quartus ",(0,l.kt)("a",{parentName:"li",href:"https://fpgasoftware.intel.com/?edition=lite"},"download")," page"),(0,l.kt)("li",{parentName:"ol"},"Make sure you have following options selected on download page",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"li"},"Edition"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Lite"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"li"},"Release"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"20.1.1"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"li"},"Operating System"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Linux"),(0,l.kt)("br",null))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(i.Z,{defaultValue:"broadband",values:[{label:"If you have fast internet",value:"broadband"},{label:"Slow Internet",value:"mobile"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"broadband",mdxType:"TabItem"},"Select ",(0,l.kt)("b",null,"combined files")," and click download button",(0,l.kt)("img",{src:a(4090).Z}),"."),(0,l.kt)(r.Z,{value:"mobile",mdxType:"TabItem"},"Select ",(0,l.kt)("b",null,"Individual files")," and download following components",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Quartus Prime"),(0,l.kt)("li",null,"ModelSim-Intel FPGA Edition"),(0,l.kt)("li",null,"MAX II, MAX V device support")))))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now you will be asked to login. If you already have an account on intel website, use that credentials to login; otherwise register for a new individual account."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can use your gmail ID for new account registration.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the files as mentioned in step-3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now before moving forward, run following commands on your terminal (assuming you have ",(0,l.kt)("strong",{parentName:"p"},"sudo")," privileges)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For Ubuntu 16.04",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg --add-architecture i386\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libxft2 libxft2:i386 libncurses5 libncurses5:i386 libxtst6 \\\n  libsm6:i386 libxtst6:i386 gcc-multilib g++-multilib lib32z1 lib32stdc++6 lib32gcc1 \\\n  expat:i386 fontconfig:i386 libfreetype6:i386 libexpat1:i386 libc6:i386 libgtk-3-0:i386 \\\n  libcanberra0:i386 libpng12-0:i386 libice6:i386 libsm6:i386 \\\n  libncurses5:i386 zlib1g:i386 libx11-6:i386 libxau6:i386 libxdmcp6:i386 \\\n  libxext6:i386 libxft2:i386 libxrender1:i386 libxt6:i386 libxtst6:i386 \\\n  \\\n"))),(0,l.kt)("li",{parentName:"ul"},"For Ubuntu 18.04 and above",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg --add-architecture i386\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libxft2 libxft2:i386 libncurses5 libncurses5:i386 libxtst6 libsm6:i386 libxtst6:i386 \\\n  gcc-multilib g++-multilib lib32z1 lib32stdc++6 lib32gcc1 \\\n  expat:i386 fontconfig:i386 libfreetype6:i386 libexpat1:i386 libc6:i386 \\\n  libgtk-3-0:i386 libcanberra0:i386 libice6:i386 libsm6:i386 \\\n  libncurses5:i386 zlib1g:i386 libx11-6:i386 libxau6:i386 libxdmcp6:i386 \\\n  libxext6:i386 libxft2:i386 libxrender1:i386 libxt6:i386 libxtst6:i386 \\\n  \\\n")))))),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once the file has been downloaded"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you have downloaded combined files, then extact the downloaded .tar file and run ",(0,l.kt)("code",null,"setup.sh")," file"),(0,l.kt)("li",{parentName:"ul"},"If you have downloaded individual files, then make sure all downloaded file are within same directory and run ",(0,l.kt)("code",null,"QuartusLiteSetup-20.1.1.720-linux.run")," file"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Follow the installation instruction and make sure to include support for MAX V devices."))))}m.isMDXComponent=!0},4090:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA85JREFUeNqcVs1LVUEUP2PyFmFEUNCibFHQIlwVVotwVQSKEAWBZEJZUrRKSGhZiBYZWFCbiiIQ7MMilKJ/oDKDQFoElfRStK7Z87O4M/Om33zdj/der+jqeffMOTPndz5mzlymlKL9PS/pL89eUD1oJ2gNqBqUBQWgF6Ah0LNyBh6276DKfwC5CKopoat2tBV0CjRKis4Q06AKQ1a0wIDl8/mUENMymH4N7NFIBqFSXq/wx6K3E9YwpZ6SYjcxOonZodIqVQQmnSdGk4GZ53jXxSadisUQen7eQ2FoDJtRHg6yTZDswTu0MKoATEUe3oCuzodow0mmRMXxs4TMr7dO1cGpG1h6uBhMRpE1QdysvfeR+KlXW2tLgv4MJXXceUM+ZYwipllvGnB93j8DJoU06QN1FRWX2fHGtStK7qAlgEntrK9C2k/YoweQhTGYiUwdgLA6WVCKc/nn/ar0epGKl8XIerc2gb+dAONaVc8KDCe2B5VDEwBjPiFxPj2vg4jBBNIIo41Fnrm6s7/g5blM1ZfShahTlKpZuBbqKvqPRxsSyEyZR9uFfZpykYmq2Bt/jog6DtbSlg2ry4Itz1TSrdO7Df/u8zRd6B92Vmx2XHaN/QobmQhBGpQE53ps6MrD11S5jNHmdav+CKY7i9ZX4N07MAIbdj3HO+I5DyMwCCdAoVFKDWQn5haW6NilQRoP5stGNzaZo+OXh2h2bpEkt45Kzq3zCCQvxUQcGRfYkGLYgoTaEwcoKPgxT4e7H9PUzGJJoC/BHLX2PKFgZiFylMOG3uHSRBYOw55MRoYih0OC65AT6dTeYTwZ5Kile4C+z/1MAX3LLVJL1wBNfM1F2eDSpk4Ia4sLMeTPoa+ZVvRxl0qba+m85CbSsfGAWjrv04/5X2bh9OwSNZ3rp+zkjDXs5rkaWV7CHud92ukILNRhC5EFSK/xStpUcLdRjMfw8t2nSTrSdY+yiOTQ+X76+GXaAPmUG0d9Zgyv7fEsInCdD615/b5Ov7dWYruOgNlUrl1lKpfBwXyBnBUe6Q+g7aAZU9tHZ/2hjnrbLDpGA96vsG4lFXcD2+kxX6Uwol7lG9wsBg0eKHV5ihgM50a9x+8uLBjEqmpzbSl3zBkreSkk26H+NsHsBsx9n7h1E+0q6trKn/5RcNvA9oCaqUTXi5Km4msIsrvg2iEMKNFfjZMpMEWpOwn/gbtpL4NOQNBoelzBPN3zwD8Bfx38W1IFFWQFaZS26yeULPq2AAMDqg1cGypSgygy9muLjSKgUOmvqsRNVuCIU1kPfgswAHtyjmCjiRZvAAAAAElFTkSuQmCC"}}]);