(this["webpackJsonpquiz-webapp"]=this["webpackJsonpquiz-webapp"]||[]).push([[0],{17:function(n,e,t){"use strict";var a=t(18),c=t.n(a);c.a.defaults.headers.post["Content-Type"]="application/json; charset=UTF-8";var i=c.a.create({baseURL:"https://opentdb.com/api.php",timeout:1e4});e.a=i},67:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t(26),i=t.n(c),r=t(22),o=t(17);var s,p,l=function(n){var e=Object(a.useRef)(!0);e.current&&n(),e.current=!1},b=t(35),j=t(24),d=t(2),h=t(10),u=t(8),x=t(1),O=Object(u.d)(s||(s=Object(h.a)([" \n  100% {\n    top: -10px;\n    text-shadow: 0 1px 0 #CCC,\n                 0 2px 0 #CCC,\n                 0 3px 0 #CCC,\n                 0 4px 0 #CCC,\n                 0 5px 0 #CCC,\n                 0 6px 0 #CCC,\n                 0 7px 0 #CCC,\n                 0 8px 0 #CCC,\n                 0 9px 0 #CCC,\n                 0 50px 25px rgba(0, 0, 0, .2);\n  }\n"]))),m=u.c.div(p||(p=Object(h.a)(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, 0.7);\n\n  span {\n    position: relative;\n    top: 20px;\n    display: inline-block;\n    animation: "," 0.3s ease infinite alternate;\n    font-size: 3rem;\n    color: #fff;\n    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,\n      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,\n      0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);\n\n    &:nth-child(2) {\n      animation-delay: 0.1s;\n    }\n    &:nth-child(3) {\n      animation-delay: 0.2s;\n    }\n    &:nth-child(4) {\n      animation-delay: 0.3s;\n    }\n    &:nth-child(5) {\n      animation-delay: 0.4s;\n    }\n    &:nth-child(6) {\n      animation-delay: 0.5s;\n    }\n    &:nth-child(7) {\n      animation-delay: 0.6s;\n    }\n    &:nth-child(8) {\n      animation-delay: 0.7s;\n    }\n  }\n"])),O);var f=function(n){return n.isLoading?Object(x.jsxs)(m,{children:[Object(x.jsx)("span",{children:"L"}),Object(x.jsx)("span",{children:"o"}),Object(x.jsx)("span",{children:"a"}),Object(x.jsx)("span",{children:"d"}),Object(x.jsx)("span",{children:"i"}),Object(x.jsx)("span",{children:"n"}),Object(x.jsx)("span",{children:"g"}),Object(x.jsx)("span",{children:"."}),Object(x.jsx)("span",{children:"."}),Object(x.jsx)("span",{children:"."})]}):Object(x.jsx)(x.Fragment,{})},C=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,312))})),g=Object(a.lazy)((function(){return Promise.all([t.e(4),t.e(7)]).then(t.bind(null,382))})),y=Object(a.lazy)((function(){return Promise.all([t.e(5),t.e(8)]).then(t.bind(null,383))})),v=Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(9)]).then(t.bind(null,384))}));var w=function(){return Object(x.jsx)(j.a,{basename:"/quiz-webapp",children:Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(f,{isLoading:!0}),children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",component:C,exact:!0}),Object(x.jsx)(d.a,{path:"/intro",component:g}),Object(x.jsx)(d.a,{path:"/quiz",component:y}),Object(x.jsx)(d.a,{path:"/result",component:v})]})})})};var z,k=function(){var n=Object(a.useState)(!1),e=Object(r.a)(n,2),t=e[0],c=e[1];l((function(){o.a.interceptors.request.use((function(n){return c(!0),n}),(function(n){return c(!1),Promise.reject(n)})),o.a.interceptors.response.use((function(n){return c(!1),n}),(function(n){return c(!1),Promise.reject(n)}))}));var i=Object(a.useMemo)((function(){return b.isMobile?Object(x.jsx)(w,{}):Object(x.jsx)("div",{children:"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc7a5\ube44\uc785\ub2c8\ub2e4."})}),[]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{isLoading:t}),i]})},F=function(n){n&&n instanceof Function&&t.e(10).then(t.bind(null,376)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),a(n),c(n),i(n),r(n)}))},L=Object(u.b)(z||(z=Object(h.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  html {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    height: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      color: #fff;\n    }\n  }\n  input, button {\n    background-color: transparent;\n    border: none;\n    outline: none;\n  }\n  ol, ul, li {\n    list-style: none;\n  }\n  span {\n    font-stretch: normal;\n    font-style: normal;\n    letter-spacing: normal;\n  }\n  #root {\n    width: 100%;\n    min-height: 100vh;\n  }\n  select { \n    -webkit-appearance: none; /* \ub124\uc774\ud2f0\ube0c \uc678\ud615 \uac10\ucd94\uae30 */ \n    -moz-appearance: none; \n    appearance: none; \n  }\n  /* IE 10, 11\uc758 \ub124\uc774\ud2f0\ube0c \ud654\uc0b4\ud45c \uc228\uae30\uae30 */ \n  select::-ms-expand { \n    display: none; \n  }\n"])));i.a.render(Object(x.jsxs)(u.a,{theme:{font:{family:"Noto Sans KR",size:"12px"},color:{red:"#DA291C",black:"#333333",fontGray:"#999999",backGray:"#E0E0E0"},border:{radius:"10px"}},children:[Object(x.jsx)(L,{}),Object(x.jsx)(k,{})]}),document.getElementById("root")),F()}},[[67,1,3]]]);
//# sourceMappingURL=main.21d9c7d5.chunk.js.map