(this["webpackJsonpquiz-webapp"]=this["webpackJsonpquiz-webapp"]||[]).push([[8],{165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mb_ic_select_arrow.9bd32fdd.svg"},379:function(e,t,n){"use strict";n.r(t);var a,r=n(64),l=n.n(r),i=n(82),o=n(17),u=n(0),c=n(164),s=n(40),b=n(11),d=n(1),m=n(165).default,p=b.c.div(a||(a=Object(o.a)(["\n  display: flex;\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1vh 0;\n  label {\n    margin-right: 2vw;\n    width: 25%;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  select {\n    width: 60%;\n    background-color: white;\n    border: 1px solid ",";\n    border-radius: ",";\n    background: url(",") no-repeat 90% 50%;\n    background-size: 3.5vw;\n    padding: 3vw 10vw 3vw 5vw;\n    color: ",";\n    font-weight: bold;\n    font-size: 1.2rem;\n    margin-right: 2vw;\n  }\n"])),(function(e){return e.theme.color.backGray}),(function(e){return e.theme.border.radius}),m,(function(e){return e.theme.color.red}));function v(e){var t=e.label,n=e.register,a=e.required,r=e.options,l=e.style,i=e.className,o=r.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label},e.value)}));return Object(d.jsxs)(p,{className:i,style:l,children:[Object(d.jsx)("label",{htmlFor:t,children:t}),Object(d.jsx)("select",Object(s.a)(Object(s.a)({},n(t,{required:a})),{},{children:o}))]})}var h,f=Object(u.memo)(v),j=b.c.div(h||(h=Object(o.a)(["\n  display: flex;\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1vh 0;\n  label {\n    margin-right: 2vw;\n    width: 25%;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  input {\n    width: 60%;\n    border: 1px solid ",";\n    border-radius: ",";\n    padding: 3vw 5vw;\n    font-size: 1.2rem;\n  }\n"])),(function(e){return e.theme.color.backGray}),(function(e){return e.theme.border.radius}));function g(e){var t=e.label,n=e.register,a=e.required,r=e.min,l=e.max,i=e.type,o=void 0===i?"text":i,u=e.style,c=e.className;return Object(d.jsxs)(j,{className:c,style:u,children:[Object(d.jsx)("label",{htmlFor:t,children:t}),Object(d.jsx)("input",Object(s.a)(Object(s.a)({type:o},n(t,{required:a,min:r,max:l})),{},{placeholder:"Input number"}))]})}var y=Object(u.memo)(g),w=n(166),x=n.n(w);x.a.defaults.headers.post["Content-Type"]="application/json; charset=UTF-8";var O=x.a.create({baseURL:"https://opentdb.com/api.php",timeout:1e4});function q(e){return O.get("/amount",{params:Object(s.a)(Object(s.a)({},e),{},{type:"multiple"})})}var k,z=n(2),E=n(46),S=b.c.form(k||(k=Object(o.a)(["\n  height: 100vh;\n  padding: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .title {\n    font-size: 1.4rem;\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 35px;\n  }\n  p {\n    color: ",";\n    font-weight: bold;\n  }\n"])),(function(e){return e.theme.color.red}));t.default=function(){var e,t,n,a=Object(c.a)(),r=a.register,o=a.formState.errors,s=a.handleSubmit,b=Object(z.f)(),m=Object(u.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.amount,a=t.category,r=t.difficulty,i={amount:n,category:"any"===a?void 0:Number(a),difficulty:"any"===r?void 0:r},e.next=5,q(i);case 5:o=e.sent,0===(u=o.data).response_code?b.push({pathname:"/quiz",state:{results:u.results}}):window.alert("Failed to generate quiz. please try again."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),window.alert("Please check the network status!");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(d.jsxs)(S,{onSubmit:s(m),children:[Object(d.jsxs)("div",{className:"title",children:["Please select the option of the quiz ",Object(d.jsx)("br",{}),"you want to solve"]}),Object(d.jsx)(y,{type:"number",label:"amount",register:r,required:!0,min:1,max:50}),"min"===(null===(e=o.amount)||void 0===e?void 0:e.type)&&Object(d.jsx)("p",{children:"Your input required to be more than 0"}),"max"===(null===(t=o.amount)||void 0===t?void 0:t.type)&&Object(d.jsx)("p",{children:"Your input required to be less than 50"}),"required"===(null===(n=o.amount)||void 0===n?void 0:n.type)&&Object(d.jsx)("p",{children:"Your input required"}),Object(d.jsx)(f,{label:"category",register:r,required:!0,options:[{value:"any",label:"Any Category"},{value:9,label:"General Knowledge"},{value:10,label:"Entertainment: Books"},{value:11,label:"Entertainment: Film"},{value:12,label:"Entertainment: Music"},{value:13,label:"Entertainment: Musicals &amp; Theatres"},{value:14,label:"Entertainment: Television"},{value:15,label:"Entertainment: Video Games"},{value:16,label:"Entertainment: Board Games"},{value:17,label:"Science &amp; Nature"},{value:18,label:"Science: Computers"},{value:19,label:"Science: Mathematics"},{value:20,label:"Mythology"},{value:21,label:"Sports"},{value:22,label:"Geography"},{value:23,label:"History"},{value:24,label:"Politics"},{value:25,label:"Art"},{value:26,label:"Celebrities"},{value:27,label:"Animals"},{value:28,label:"Vehicles"},{value:29,label:"Entertainment: Comics"},{value:30,label:"Science: Gadgets"},{value:31,label:"Entertainment: Japanese Anime &amp; Manga"},{value:32,label:"Entertainment: Cartoon &amp; Animations"}]}),Object(d.jsx)(f,{label:"difficulty",register:r,required:!0,options:[{value:"any",label:"Any Difficulty"},{value:"easy",label:"easy"},{value:"medium",label:"medium"},{value:"hard",label:"hard"}]}),Object(d.jsx)(E.a,{style:{marginTop:"30px"},children:"Getting Started"})]})}},46:function(e,t,n){"use strict";var a,r=n(40),l=n(17),i=n(11),o=n(1),u=i.c.button(a||(a=Object(l.a)(["\n  border-radius: ",";\n  background-color: ",";\n  color: white;\n  font-weight: bold;\n  padding: 1.5vh 15vw;\n  font-size: 1.2rem;\n"])),(function(e){return e.theme.border.radius}),(function(e){return e.theme.color.red}));t.a=function(e){return Object(o.jsx)(u,Object(r.a)({type:"submit"},e))}}}]);
//# sourceMappingURL=8.df89759d.chunk.js.map