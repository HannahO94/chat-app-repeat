(this["webpackJsonpchat-app-repeat"]=this["webpackJsonpchat-app-repeat"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),l=t.n(c),o=(t(17),t(1)),u=t(5),i=t(2);function s(){var e=Object(o.a)(["\n  display: block;\n  width: 50%;\n  padding: 12px;\n  border-radius: 6px;\n  margin: 5px 0;\n  background-color: #1e90ff;\n  border: 2px solid #1e90ff;\n  font-size: 16px;\n\n  color: white;\n"]);return s=function(){return e},e}function m(e){var n=e.label,t=e.handleOnClick;return r.a.createElement(d,{onClick:t},n)}var d=i.a.button(s());function f(){var e=Object(o.a)(["\n  width: 50%;\n  padding: 12px;\n  border: 1px solid #a0a0a0;\n  border-radius: 6px;\n"]);return f=function(){return e},e}function p(e){var n=e.label,t=e.placeholder,c=e.handleOnSuccess,l=Object(a.useRef)(),o=Object(a.useRef)();return r.a.createElement("div",null,r.a.createElement("label",null,n,":"),r.a.createElement("br",null),r.a.createElement(h,{ref:l,type:"text",placeholder:t}),r.a.createElement("br",null),r.a.createElement("label",null,"User:"),r.a.createElement("br",null),r.a.createElement(h,{ref:o,type:"text",placeholder:"User"}),r.a.createElement(m,{handleOnClick:function(){var e={message:l.current.value,user:o.current.value};fetch("https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json",{method:"POST",body:JSON.stringify(e)}).then((function(e){console.log("Data har skickats"),c(),l.current.value=null,o.current.value=null}))},label:"Send"}))}var h=i.a.input(f());function v(){var e=Object(o.a)(["\n  width: 50%;\n  border: 1px solid #C9C7C7;\n  padding 12px;\n  margin: 1px;\n  border-radius: 6px;\n  p{\n    margin: 0;\n    color: #9B9B9B;\n  }\n"]);return v=function(){return e},e}function b(e){var n=e.message;return r.a.createElement(g,null,"string"===typeof n.message?n.message:r.a.createElement("span",null,"Something went wrong"),r.a.createElement("p",null,"-",n.user?n.user:n.username?n.username:n.name?n.name:"Nameless user"))}var g=i.a.li(v());function E(){var e=Object(o.a)(["\n  list-style: none;\n  padding: 0;\n"]);return E=function(){return e},e}function O(e){var n=e.messages,t=Object.entries(n);return r.a.createElement(j,null,t.reverse().map((function(e){var n=e[0],t=e[1];return r.a.createElement(b,{key:n,message:t})})))}var j=i.a.ul(E());function x(){var e=Object(o.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return x=function(){return e},e}function k(){var e=Object(o.a)(["\n  cursor: pointer;\n"]);return k=function(){return e},e}function y(){var e=Object(o.a)(["\n  margin: 1rem;\n"]);return y=function(){return e},e}var w=function(){var e=Object(a.useState)({}),n=Object(u.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(!0),o=Object(u.a)(l,2),i=o[0];function s(){fetch("https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json").then((function(e){return e.json()})).then((function(e){c(e)}))}return o[1],console.log(i),Object(a.useEffect)((function(){s()}),[]),r.a.createElement(S,null,r.a.createElement(H,null,r.a.createElement(C,{animate:{x:100,opacity:1},initial:{opacity:0},transition:{duration:1,delay:1.2}},t.name)),r.a.createElement("div",null,r.a.createElement(p,{handleOnSuccess:s,label:"Enter you message",placeholder:"Ditt meddelande"})),r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-12"},t.messages?r.a.createElement(O,{messages:t.messages}):"")))},S=i.a.div(y()),C=i.a.h1(k()),H=i.a.div(x(),(function(e){return e?"100vh":"20vh"}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.790237b2.chunk.js.map