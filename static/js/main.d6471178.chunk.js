(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),s=n(1),u=(n(12),n(2)),l=n.n(u),i=n(3),m=n(6),d="https://jsonplaceholder.typicode.com/",p=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"todos")).then((function(e){return e.json()}));case 2:return t=e.sent,e.next=5,fetch("".concat(d,"users")).then((function(e){return e.json()}));case 5:return n=e.sent,e.abrupt("return",t.map((function(e){var t=n.find((function(t){return e.userId===t.id}));return Object(i.a)(Object(i.a)({},e),{},{user:t.name})})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){var t=e.todos;return c.a.createElement("div",{className:"todos_container"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"todo"},c.a.createElement("p",{className:"todo_title"},e.title),c.a.createElement("p",{className:"todo_user"},e.user),e.completed?c.a.createElement("p",{className:"todo_completed"},"completed"):c.a.createElement("p",{className:"todo_inprocess"},"in process"))})))},b=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),u=Object(s.a)(r,2),l=u[0],i=u[1],m=Object(a.useState)(!1),d=Object(s.a)(m,2),b=d[0],E=d[1],h=Object(a.useState)(""),y=Object(s.a)(h,2),j=y[0],N=y[1];switch(j){case"completed":p().then((function(e){return o(e.sort((function(e,t){return+e.completed-+t.completed})))}));break;case"user":case"title":p().then((function(e){return o(e.sort((function(e,t){return e[j].localeCompare(t[j])})))}))}return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Dynamic list of TODOs"),!b&&c.a.createElement("button",{type:"button",className:"button",onClick:function(){i(!l),E(!b),setTimeout((function(){p().then((function(e){return o(e)})).finally((function(){i(!1)}))}),1e3)}},"Load Todos"),l?c.a.createElement("div",{className:"loader"}):b&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"button",type:"button",onClick:function(){return N("user")}},"Sort by Name"),c.a.createElement("button",{className:"button",type:"button",onClick:function(){return N("title")}},"Sort by Title"),c.a.createElement("button",{className:"button",type:"button",onClick:function(){return N("completed")}},"Sort by Completed")),c.a.createElement(f,{todos:n})))};r.a.render(c.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d6471178.chunk.js.map