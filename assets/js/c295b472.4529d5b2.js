(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7796],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},252:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"UrJTAG installation on Ubuntu"},l=void 0,u={unversionedId:"linux/urjtag",id:"linux/urjtag",isDocsHomePage:!1,title:"UrJTAG installation on Ubuntu",description:"Installation of UrJtag on Ubuntu 18.",source:"@site/docs/linux/urjtag.mdx",sourceDirName:"linux",slug:"/linux/urjtag",permalink:"/docs/linux/urjtag",version:"current",frontMatter:{title:"UrJTAG installation on Ubuntu"},sidebar:"sl",previous:{title:"Installation",permalink:"/docs/linux/Installation"},next:{title:"UrJTAG Usage",permalink:"/docs/linux/urjtag_usage"}},p=[{value:"Installation of UrJtag on Ubuntu 18.",id:"installation-of-urjtag-on-ubuntu-18",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation-of-urjtag-on-ubuntu-18"},"Installation of UrJtag on Ubuntu 18."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the folder: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_ubuntu_18.zip"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://drive.google.com/file/d/1syGX4OS8EsM2pVNdM3KaSHBy3IuHalgP/view?usp=sharing"},"UrJATG Installation Files (Ubuntu)")),(0,o.kt)("li",{parentName:"ol"},"Extract/Unzip the file: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_ubuntu_18.zip")),(0,o.kt)("li",{parentName:"ol"},"Move to the directory/folder: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_ubuntu_18/")),(0,o.kt)("li",{parentName:"ol"},"Right click and Open in Terminal"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"chmod +x dependency.sh")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"sudo ./dependency.sh")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Extract/Uncompress the file: ",(0,o.kt)("strong",{parentName:"li"},"urjtag-2019.12.tar.xz")),(0,o.kt)("li",{parentName:"ol"},"Move to the directory/folder: ",(0,o.kt)("strong",{parentName:"li"},"urjtag-2019.12/")),(0,o.kt)("li",{parentName:"ol"},"Right click and Open in Terminal"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"./configure")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"./configure --disable-dependency-tracking")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"./configure")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"make")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"sudo make install")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Move to the directory/folder: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_ubuntu_18/")),(0,o.kt)("li",{parentName:"ol"},"Right click and Open in Terminal"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"chmod +x urjtag.sh")," and press enter"),(0,o.kt)("li",{parentName:"ol"},"Type the command: ",(0,o.kt)("strong",{parentName:"li"},"sudo ./urjtag.sh")," and press enter")))}s.isMDXComponent=!0}}]);