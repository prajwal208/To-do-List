(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{18:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(20),i=n.n(s),d=(n(27),n(22)),o=n(10),r=(n(28),n.p+"static/media/giff.557982bd.gif"),l=(n(18),n(12)),j=n(0);function b(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:r,id:"image1",alt:r}),Object(j.jsx)("h2",{children:"Manage Your Daily Todo"}),Object(j.jsx)(l.b,{to:"/addtodo",children:Object(j.jsx)("button",{type:"button",class:"btn btn-primary",id:"btn1",children:Object(j.jsx)("span",{children:"\u2192"})})})]})})})}var u=n(17);var O=function(t){var e,n=t.addstodo,a=Object(c.useState)(""),s=Object(o.a)(a,2),i=s[0],d=s[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),b=l[0],O=l[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container1",children:Object(j.jsxs)("div",{className:"content1",children:[Object(j.jsx)("header",{children:"To-Do "}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===i||""===b?alert("task and date cannot be empty"):(n(i,b),d(""),O(""))},children:[Object(j.jsxs)("div",{className:"mb-3",id:"input",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Add Task"}),Object(j.jsx)("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:function(t){d(t.target.value)},value:i})]}),Object(j.jsxs)("div",(e={className:"mb-3",id:"space"},Object(u.a)(e,"id","input"),Object(u.a)(e,"children",[Object(j.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Add Date"}),Object(j.jsx)("input",{type:"date",className:"form-control",id:"exampleInputPassword1",onChange:function(t){O(t.target.value)},value:b})]),e)),Object(j.jsx)("button",{type:"submit",class:"btn btn-primary",id:"btn5",onSubmit:n,children:"Add Task"})]}),Object(j.jsx)("div",{className:"headings",children:Object(j.jsx)("h3",{children:"this is your to-do-list."})})]})})})},x=n(2);function h(t){var e=t.todo,n=t.deletetodo;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"border",children:[Object(j.jsx)("p",{children:e.task}),Object(j.jsx)("p",{children:e.date}),Object(j.jsx)("button",{type:"button",class:"btn btn-danger",id:"btn2",onClick:function(){n(e)},children:"Delete"})]})})}function m(t){var e=t.todos,n=t.deletetodo;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container2",children:Object(j.jsx)("div",{className:"content2",children:e.map((function(t){return Object(j.jsx)(h,{todo:t,deletetodo:n})}))})})})}var f=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todolist"));a(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todolist",JSON.stringify(n))})),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsxs)(x.a,{exact:!0,path:"/addtodo",children:[Object(j.jsx)(O,{addstodo:function(t,e){var c={task:t,date:e};a([].concat(Object(d.a)(n),[c]))}}),Object(j.jsx)(m,{todos:n,deletetodo:function(t){a(n.filter((function(e){return e!==t})))}})]})]})})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.52c8ff11.chunk.js.map