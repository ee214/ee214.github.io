(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1843],{6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),i=n(3727),u=n(2263),s=n(3919),c=n(412),l=(0,a.createContext)({collectLink:function(){}}),o=n(4996),d=n(8780);var f=function(e){var t,n,f=e.isNavLink,v=e.to,m=e.href,h=e.activeClassName,b=e.isActive,_=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,g=void 0===E||E,p=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,u.Z)().siteConfig,w=k.trailingSlash,y=k.baseUrl,C=(0,o.C)().withBaseUrl,N=(0,a.useContext)(l),Z=v||m,U=(0,s.Z)(Z),O=null==Z?void 0:Z.replace("pathname://",""),L=void 0!==O?(n=O,g&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;L&&U&&(L=(0,d.applyTrailingSlash)(L,{trailingSlash:w,baseUrl:y}));var S,j=(0,a.useRef)(!1),B=f?i.OL:i.rU,M=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!M&&U&&null!=L&&window.docusaurus.prefetch(L),function(){M&&S&&S.disconnect()}}),[L,M,U]);var W=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,P=!L||!U||W;return L&&U&&!W&&!_&&N.collectLink(L),P?a.createElement("a",Object.assign({href:L},Z&&!U&&{target:"_blank",rel:"noopener noreferrer"},p)):a.createElement(B,Object.assign({},p,{onMouseEnter:function(){j.current||null==L||(window.docusaurus.preload(L),j.current=!0)},innerRef:function(e){var t,n;M&&e&&U&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(S=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))}))).observe(t))},to:L||""},f&&{isActive:b,activeClassName:h}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,s=void 0!==u&&u,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var o=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+o:o}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5972:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(9105),i=n(6742),u="container_3Gti",s="nav_2hIU",c="navlink_XGn1",l=function(e){var t=e.to,n=e.children;return r.createElement(i.Z,{className:c,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};var o=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:s},r.createElement(l,{to:"/__docusaurus/debug"},"Config"),r.createElement(l,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(l,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(l,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(l,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(l,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:u},t)))}},9765:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(5972),i=n(2263),u="sectionTitle_1LKV",s="list_2cCX",c="listItem_2G0u",l="version_ZLFW",o="name_1F60";var d=function(){var e=(0,i.Z)().siteMetadata;return r.createElement(a.Z,null,r.createElement("h2",null,"Site Metadata"),r.createElement("div",null,"Docusaurus Version: ",r.createElement("code",null,e.docusaurusVersion)),r.createElement("div",null,"Site Version:"," ",r.createElement("code",null,e.siteVersion||"No version specified")),r.createElement("h3",{className:u},"Plugins and themes"),r.createElement("ul",{className:s},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return r.createElement("li",{key:t,className:c},n.version&&r.createElement("div",{className:l},r.createElement("code",null,n.version)),r.createElement("div",{className:o},t),r.createElement("div",null,"Type: ",n.type))}))))}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,u)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);