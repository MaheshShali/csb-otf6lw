(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(19),s=(c(28),c(5)),i=c(4),a=c(0),j=(c(29),c(3));function r(e){return Object(j.jsx)("div",{children:e.itemList.map((function(t){return Object(j.jsxs)("div",{className:"Item",children:[Object(j.jsx)("p",{children:t.item}),Object(j.jsx)("button",{onClick:function(){return function(t){var c=e.itemList.filter((function(e){return e.key!==t}));e.updateItemList(c)}(t.key)},children:"X"})]},t.key)}))})}var o=c(2);function b(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],b=Object(a.useState)([]),l=Object(i.a)(b,2),u=l[0],d=l[1],O=Object(o.m)(),m=Object(o.j)().state;return Object(j.jsxs)("div",{className:"Home",children:[Object(j.jsxs)("h1",{children:["Welcome ",m.name]}),Object(j.jsxs)("div",{className:"Wrapper",children:[Object(j.jsxs)("div",{className:"InputWrapper",children:[Object(j.jsx)("input",{placeholder:"Add Item",value:c,onChange:function(e){n(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){""!==c&&(d([].concat(Object(s.a)(u),[{item:c,key:Date.now()}])),n(""))},children:"Add"})]}),Object(j.jsx)(r,{itemList:u,updateItemList:d})]}),Object(j.jsx)("button",{onClick:function(){O("/")},children:"Back"})]})}function l(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(o.m)();return Object(j.jsx)("div",{className:"Login",children:Object(j.jsxs)("div",{className:"Login-header",children:[Object(j.jsx)("h1",{children:"Welcome to the ToDo App"}),Object(j.jsx)("form",{onSubmit:function(){""!==c&&s("/Home",{state:{name:c}})},children:Object(j.jsxs)("div",{className:"username",children:[Object(j.jsx)("label",{children:"Please Enter your Name:"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter your name",value:c,onChange:function(e){n(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})]})})}var u=c(15);function d(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"App-header",children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsx)(o.a,{path:"/Home",element:Object(j.jsx)(b,{})})]})})})})}var O=document.getElementById("root");Object(n.createRoot)(O).render(Object(j.jsx)(d,{}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ef34f145.chunk.js.map