(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8645],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,b=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(b,a(a({ref:n},d),{},{components:t})):r.createElement(b,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7968:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={sidebar_position:7,title:"Experiment 2 (Thursday Batch)"},s={unversionedId:"lab-handouts/exp2t",id:"lab-handouts/exp2t",isDocsHomePage:!1,title:"Experiment 2 (Thursday Batch)",description:'`vhdl title="Skeleton Code"',source:"@site/docs/lab-handouts/exp2t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp2t",permalink:"/docs/lab-handouts/exp2t",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Experiment 2 (Thursday Batch)"},sidebar:"Lab",previous:{title:"Experiment 2 (Wednesday Batch)",permalink:"/docs/lab-handouts/exp2w"},next:{title:"Experiment 3",permalink:"/docs/lab-handouts/exp3"}},l=[],c={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"pdf-container"},(0,i.kt)("iframe",{src:"https://drive.google.com/file/d/1wV91Gk2292FouvL3bs4xU_ZE4PotKf14/preview",class:"responsive-iframe"})),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl",metastring:'title="Skeleton Code"',title:'"Skeleton','Code"':!0},"library ieee;\nuse ieee.std_logic_1164.all;\n\nentity div is\n    generic(\n        N : integer:=4; -- operand width\n        NN : integer:=8 -- result width\n        );\n    port (\n        Nu: in std_logic_vector(N-1 downto 0);-- Nu (read numerator) is dividend\n        D: in std_logic_vector(N-1 downto 0);-- D (read Denominator) is divisor\n        RQ: out std_logic_vector((NN)-1 downto 0)--upper N bits of RQ will have remainder and\n                                                --lower N bits will have quotient\n    ) ;\nend div;\n\narchitecture beh of div is\n    -- unconstrained 1D x 1D array\n    type pr_type is array (natural range<>) of std_logic_vector(NN-1 downto 0);\n    \n    -- subtractor function. [Usage: var := sub(X,Y) where var is a variable\n    --                      and X,Y are two 4-bit inputs for subtractor]\n    function sub(A: in std_logic_vector; B: in std_logic_vector)\n        return std_logic_vector is\n            -- variable declaration\n            variable W : integer := A'length;\n            variable diff : std_logic_vector(W downto 0):= (others=>'0');\n            variable borrow : std_logic_vector(W downto 0):= (0 => '1', others=>'0');\n            variable B_sign: std_logic_vector(A'length-1 downto 0):=(others=>'0');\n        begin\n            B_sign(B'length-1 downto 0) := not B;\n            for i in 0 to W-1 loop\n                diff(i) := A(i) xor B_sign(i) xor borrow(i);\n                borrow(i+1) := (A(i) and B_sign(i)) or (borrow(i) and (A(i) xor B_sign(i)));\n            end loop;\n            diff(W) := not borrow(W);\n            return diff;\n    end sub;\n\nbegin\n\n\ndivision : process(Nu, D)\n-- Here Nu (read numerator) is dividend and D (read denominator) is divisor\n-- variable k holds length of dividend\nvariable k : integer := Nu'length;\n\n-- 1D x 1D array should be used, instead of reading and writing to same variable\n-- (This is a limitation of VHDL synthesizer)\n-- declare variable to hold partial remainder for subsequent iteration  \n--////////////TODO\n\n-- declare variable to hold difference from subtractor\n--////////////TODO\n\n-- declare temporary variable to hold prior partial product in case difference is negative\n--////////////TODO\nbegin\n    -- sequential statements to calculate quotient and remainder\n    --////////////TODO\n\n    RQ <= --////////////TODO-- final result assignment\nend process ; -- division\nend beh ; -- beh\n")))}d.isMDXComponent=!0}}]);