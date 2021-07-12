(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[761],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8736:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={title:"ALU - Behavioural modelling"},l={unversionedId:"lab-handouts/test1",id:"lab-handouts/test1",isDocsHomePage:!1,title:"ALU - Behavioural modelling",description:"`vhdl",source:"@site/docs/lab-handouts/test1.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/test1",permalink:"/docs/lab-handouts/test1",version:"current",frontMatter:{title:"ALU - Behavioural modelling"},sidebar:"docs",previous:{title:"Prime Detector",permalink:"/docs/lab-handouts/lab4_a"},next:{title:"ALU - Homework (Use Behavioural Modelling)",permalink:"/docs/lab-handouts/beh1"}},c=[],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vhdl"},"\nlibrary ieee;\nuse ieee.std_logic_1164.all;\n\nlibrary work;\nuse work.Gates.all;\n\nentity alu is\n  generic(\n    N : integer:=4\n  );\n  port (\n    A : in std_logic_vector(N-1 downto 0);\n    B : in std_logic_vector(N-1 downto 0);\n    Y : out std_logic_vector(5 downto 0)\n  ) ;\nend alu;\n\narchitecture beh of alu is\n\n  function max(A: in std_logic_vector; B : in std_logic_vector)\n    return std_logic_vector is\n      variable is_max : std_logic_vector(N-1 downto 0):= (others => '0');\n    begin\n      for i in N-1 downto 0 loop\n        if ((A(i) xor B(i)) = '1') then\n          if (A(i) = '1') then\n            return A;\n          else\n            return B;\n          end if;\n        end if;\n      end loop;\n      return is_max;\n  end max;\n\n  function eq(A: in std_logic_vector; B : in std_logic_vector)\n    return std_logic_vector is\n      variable is_eq : std_logic_vector(N-1 downto 0):= (others => '0');\n    begin\n      for i in N-1 downto 0 loop\n        if ((A(i) xor B(i)) = '1') then\n          return is_eq;\n        end if;\n      end loop;\n      return A;\n  end eq;\n\n  alias a3 : std_logic is A(N-1);\n  alias b3 : std_logic is B(N-1);\nbegin\n\n  alu1 : process( A,B )\n  begin\n    if ((b3 = '0') and (a3 = '0')) then\n      Y <= \"00\"& max(A,B);\n    elsif ((b3 = '0') and (a3 = '1')) then\n      Y <= \"00\"& (A and B);\n    elsif ((b3 = '1') and (a3 = '0')) then\n      Y <= \"00\"& (not A);\n    elsif ((b3 = '1') and (a3 = '1')) then\n      Y <= \"00\"& eq(A,B);\n    else\n      Y <= (others => '0');\n    end if;\n  end process ; -- alu1\nend;\n\n")))}u.isMDXComponent=!0}}]);