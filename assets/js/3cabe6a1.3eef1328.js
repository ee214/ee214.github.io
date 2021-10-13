(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8368],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return _}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(t),_=i,g=p["".concat(l,".").concat(_)]||p[_]||u[_]||c;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,r=new Array(c);r[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var s=2;s<c;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2461:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=t(2122),i=t(9756),c=(t(7294),t(3905)),r={title:"FSM"},a=void 0,l={unversionedId:"lab-handouts/exp-7-t",id:"lab-handouts/exp-7-t",isDocsHomePage:!1,title:"FSM",description:"Wadhwani Electronics Lab, IIT Bombay",source:"@site/docs/lab-handouts/exp-7-t.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/exp-7-t",permalink:"/docs/lab-handouts/exp-7-t",version:"current",frontMatter:{title:"FSM"},sidebar:"docs",previous:{title:"Practice Problem - 1",permalink:"/docs/lab-handouts/pract-2-w"},next:{title:"FSM",permalink:"/docs/lab-handouts/exp-7-w"}},s=[{value:"Handout",id:"handout",children:[]},{value:"Skeleton code",id:"skeleton-code",children:[{value:"Sequence Detector (&quot;covid&quot;)",id:"sequence-detector-covid",children:[]},{value:"Test module",id:"test-module",children:[]}]}],d={toc:s};function u(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Wadhwani Electronics Lab, IIT Bombay",(0,c.kt)("br",null),"\nTuesday 12th October, 2021",(0,c.kt)("br",null)),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"handout"},"Handout"),(0,c.kt)("p",null,'Today\'s experiment is a natural extension of the last week\'s experiment.\nIn previous experiment you had built the sequence detector to detect sequence "covid", today you are going to display same on LCD when "covid" is detected by the sequence detector.'),(0,c.kt)("div",{class:"fig_b"},(0,c.kt)("img",{src:t(4523).Z})),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Once 'c' is detected O/p on LCD should be ",(0,c.kt)("inlineCode",{parentName:"li"},"c<blankspace><blankspace><blankspace><blankspace>")),(0,c.kt)("li",{parentName:"ul"},"Take 5 bit input from switches(S5-S1)"),(0,c.kt)("li",{parentName:"ul"},'Letter Encoding a = "00001", b = "00010" and so on.')),(0,c.kt)("p",null,"Below are the pin mapping for the Krypton board"),(0,c.kt)("div",{class:"fig_b"},(0,c.kt)("img",{src:t(7387).Z})),(0,c.kt)("div",{class:"fig_b"},(0,c.kt)("img",{src:t(3344).Z})),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"To display 'a' on LCD, use ASCII representation of 'a'\nASCII 'a' = 97 => (01100001)2 =>(C1)16"))),(0,c.kt)("p",null,'Today\'s experiment is a natural extension of the previous experiment. So once the "covid" pattern is detected, you get the final output, and the state immediately changes to the init state in one clock cycle. So for a maximum of one clock cycle, LCD will display the sequence "covid". To observe the final output on LCD ("covid" sequence) a little longer, you need to add another if-else structure in the else part of the init state where you will display the final output once more when the out_sig signal is \'1\'. The other alternative can be to add one more state in your FSM, which will display the final output for one more clock cycle.\n:::'),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"skeleton-code"},"Skeleton code"),(0,c.kt)("h3",{id:"sequence-detector-covid"},'Sequence Detector ("covid")'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-vhdl"},'\n---------------Define state type here-----------------------------\ntype state is (init,s1,s2,s3,s4);\n---------------Define signals of state type-----------------------\nsignal y_present,y_next: state:=init;\nsignal out_sig: std_logic;\nbegin\nclock_proc:process(clock,reset)\nbegin\n    if(reset=\'1\') then\n        y_present<=init;\n    elsif(clock=\'1\' and clock\' event) then\n        y_present<=y_next;\n    end if;\n    \nend process;\n\n/// To display "abcde", the value of out_ascii = x"61_62_63_64_65"\n/// To display "ab", the value of out_ascii    = x"61_62_20_20_20"\n/// ASCII representation for blank space in Hex = x"20"\n\nstate_transition_proc:process(inp,y_present)\nbegin\n    case y_present is\n        when init=>\n            if(unsigned(inp)=3) then    --c\n                /////assign next state//////\n                /////assign out_ascii value /////// \n\n            else\n                if (out_sig = \'1\') then\n                    /////assign out_ascii value ///////\n                else            \n                    /////assign out_ascii value ///////\n                end if; \n                /////assign next state//////\n            end if;\n            out_sig<=\'0\';\n        when s1=>\n        /////// Fill the rest of the code //////\n        end case;\nend process;\n\noutp <= out_sig;\n\nend rch;\n\n')),(0,c.kt)("h3",{id:"test-module"},"Test module"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-vhdl"},"\nlibrary ieee;\nuse ieee.std_logic_1164.all;\nuse ieee.std_logic_unsigned.all; \nuse ieee.numeric_std.all;\n\nentity test is\n    port( clk_slow      : in std_logic;                             -- 1 Hz Clock\n          inp           : in std_logic_vector(4 downto 0);\n          clk           : in  std_logic;                            -- 50 Mhz Clock\n          rst           : in  std_logic;\n          lcd_rw        : out std_logic;                            --read & write control\n          lcd_en        : out std_logic;                            --enable control\n          lcd_rs        : out std_logic;                            --data or command control\n          lcd1          : out std_logic_vector(7 downto 0);         --see pin planning in krypton manual \n          b11           : out std_logic;\n          b12           : out std_logic;\n          detect        : out std_logic                             --To be mapped to LED 4\n          );\nend entity; \n\narchitecture behave of test is\n\n--  LCD Interfacing signals\n    signal erase        : std_logic := '0';                  \n    signal put_char     : std_logic := '1';\n    signal write_data   : std_logic_vector(7 downto 0)  := \"00000000\";\n    signal write_row    : std_logic_vector( 0 downto 0) := \"0\";\n    signal write_column : std_logic_vector(3 downto 0) := \"0000\";\n    signal ack          : std_logic;\n    signal i            : integer := 0;\n    \n-- covid_det signals\n    signal ascii_value  : std_logic_vector(39 downto 0);\n\n-- Clock signal for LCD module  \n    signal lcd_clk      : std_logic := '0';\n\n-- Component Declaration\n    component cov_detect is\n    port(   inp:in std_logic_vector(4 downto 0);\n            reset,clock:in std_logic;\n            outp: out std_logic;\n            out_ascii: out std_logic_vector(39 downto 0));\n    end component;\n\n    component lcd_controller is\n    port (  clk    : in std_logic;                          --clock i/p\n            rst    : in std_logic;                          -- reset\n            erase : in std_logic;                           --- clear position\n            put_char : in std_logic;\n            write_data : in std_logic_vector(7 downto 0) ;\n            write_row : in std_logic_vector(0 downto 0);\n            write_column : in std_logic_vector(3 downto 0);\n            ack : out std_logic;\n            lcd_rw : out std_logic;                         --read & write control\n            lcd_en : out std_logic;                         --enable control\n            lcd_rs : out std_logic;                         --data or command control\n            lcd1  : out std_logic_vector(7 downto 0);\n            b11 : out std_logic;\n            b12 : out std_logic);     --data line\n    end component lcd_controller;\n\nbegin\n        \n    -------------------------------------------------------------------------------------\n    --- CLOCK divider circuit\n    process(clk)--50Mhz/200000 = 250Hz\n        variable div_clk: integer := 0;\n    begin\n        if rising_edge(clk) then\n            div_clk := div_clk + 1;\n            if div_clk = 100000 then\n                lcd_clk <= '1';\n            elsif div_clk = 200000 then\n                lcd_clk <= '0';\n                div_clk := 0;\n            end if;\n        end if; \n    end process;\n\n    covid_det_instance : cov_detect port map(\n                    inp         => inp,\n                    reset       => rst,\n                    clock       => clk_slow,\n                    outp        => detect,\n                    out_ascii   => ascii_value);\n\n    \n    lcd_instance : lcd_controller port map (\n                    clk             => lcd_clk, \n                    rst             => rst, \n                    erase           => erase ,\n                    put_char        => put_char ,\n                    write_data      => write_data,\n                    write_row       => write_row,\n                    write_column    => write_column ,\n                    ack             => ack, \n                    lcd_rw          => lcd_rw,\n                    lcd_en          => lcd_en,\n                    lcd_rs          => lcd_rs,\n                    lcd1            => lcd1,\n                    b11             => b11,\n                    b12             => b12);\n\n    \n    process(ack,rst,lcd_clk)\n    begin\n\n        if (rising_edge(lcd_clk)) then\n        \n            -- If reset, then put 1st char in 1st row, 1st column.  \n            if (rst = '1') then\n                erase <= '0';\n                write_row <= \"0\";\n                write_column <= \"0000\";\n                write_data <= \"00111110\"; -- Denotes > character\n                put_char <= '1';\n            end if;\n\n            --Put next character only after you have recieve acknowledgment\n            --Sequence Position\n            --  Column Number       Character\n            --      6                   c\n            --      7                   o\n            --      8                   v\n            --      9                   i\n            --      10                  d\n            if(ack = '1') then \n\n                if ( i = 0 ) then\n                    i <=  i + 1;\n                    put_char <= '1';\n                    write_column <= \"0110\";\n                    write_row <= \"0\";\n                    write_data <= ascii_value(39 downto 32);\n                elsif (i = 1) then\n                //// Complete this for i = 1,2,3,4 ////\n    \n                end if;\n            end if;\n        end if;\n    end process;\n\nend behave;\n\n")))}u.isMDXComponent=!0},4523:function(e,n,t){"use strict";n.Z=t.p+"assets/images/cov-092d8cbbfd88c8583b4ea3a806c91103.png"},7387:function(e,n,t){"use strict";n.Z=t.p+"assets/images/pinmap1-9a45ced6ae1f7a07331c6abdddd84e64.png"},3344:function(e,n,t){"use strict";n.Z=t.p+"assets/images/pinmap2-5d9389f7be43d8e679cd531e6b987eb5.png"}}]);