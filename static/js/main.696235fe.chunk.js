(this.webpackJsonpclient_two=this.webpackJsonpclient_two||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(32),o=n.n(r),i=(n(39),n(40),n(2)),l=n(6),j=n.n(l),u=n(8),b=n(4),m=n(3),d=n.n(m),O=n(7),h=Object(a.createContext)(),x=function(e){var t=e.children,n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),b=u[0],m=u[1],x=Object(a.useState)(""),g=Object(i.a)(x,2),p=g[0],v=g[1],f=Object(a.useState)("https://snoringarvind-blog.herokuapp.com/api"),N=Object(i.a)(f,2),w=N[0],S=(N[1],Object(a.useState)(!0)),C=Object(i.a)(S,2),k=C[0],y=C[1],E=function(){var e=Object(O.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=JSON.parse(localStorage.getItem("jwtData")))){e.next=21;break}return e.prev=2,n={authorization:"Bearer ".concat(t.jwt.token)},e.next=6,j()({method:"POST",url:"".concat(w,"/blogs/is-guest-verified"),data:"",headers:n});case 6:c=e.sent,o(c),v(!1),m(!0),y(!1),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("context=",e.t0),v({Error:e.t0.message}),m(!1),y(!1);case 19:e.next=25;break;case 21:console.log("Context=","Couldn't find the jwt token"),v({Errors:["Couldn't find the jwt token"]}),m(!1),y(!1);case 25:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){E()}),[]);return Object(c.jsx)("div",{className:"Context",children:Object(c.jsxs)(h.Provider,{value:{isAuthValue:[b,m],jwtDataValue:[r,o],loginErrorValue:[p,v],serverUrl:w},children:[k&&"loading....",!k&&t]})})},g=function(){var e=Object(a.useContext)(h).isAuthValue,t=Object(i.a)(e,2),n=t[0];t[1];return Object(c.jsx)("div",{className:"AuthButton",children:function(){var e=Object(b.g)(),t=e.location.pathname;if(console.log(t),console.log(n),n||"/logout"!==t)return!n||"/login"!==t&&"/signup"!==t?void e.push(t):void e.push("/blogs");e.push("/blogs")}()})},p=(n(64),function(e){var t=e.to,n=e.label,a=Object(b.i)({path:t});return a=null!==a&&!0===a.isExact,Object(c.jsx)("div",{className:a?"active nav-links":"nav-links",children:Object(c.jsx)(u.b,{to:t,children:n})})}),v=n(13),f=n.n(v),N=(n(65),function(){console.log("hiiiiiiiii");var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1],m=Object(a.useContext)(h).serverUrl,x=Object(a.useState)(!0),g=Object(i.a)(x,2),p=g[0],v=g[1],N=function(){var e=Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()({url:"".concat(m,"/blogs"),method:"GET"});case 3:t=e.sent,s(t.data),v(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("List=",e.t0.message),b(e.t0.message),v(!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N()}),[]);return Object(c.jsxs)("div",{className:"List",children:[p&&"loading.....",!p&&(l?Object(c.jsx)("div",{className:"error",children:l}):function(){if(0==n.length)return Object(c.jsx)("div",{children:"No Blogs. You can add blogs by clicking on create"});for(var e=[],t=0;t<n.length;t++){var a=Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)(u.b,{to:"/blog/".concat(n[t]._id),className:"card-link",children:[Object(c.jsx)("div",{className:"title",children:n[t].title}),Object(c.jsx)("div",{className:"content list-content",children:n[t].content})]})},f()());e.push(a)}return e}())]})}),w=function(){return Object(c.jsxs)("div",{className:"Logout",children:[localStorage.clear(),window.location.reload()]})},S=n(15),C=n(14),k=(n(66),function(e){e.comment,e.setComment;var t=e.params,n=e.setGotComments,s=e.gotComments,r=e.setCommentsLoading,o=(e.commentsLoading,Object(a.useContext)(h)),l=o.isAuthValue,u=o.serverUrl,b=Object(i.a)(l,2),m=b[0],x=(b[1],Object(a.useState)({comment:""})),g=Object(i.a)(x,2),p=g[0],v=g[1],N=Object(a.useState)(!1),w=Object(i.a)(N,2),k=w[0],y=w[1],E=Object(a.useState)(""),L=Object(i.a)(E,2),P=L[0],F=L[1],D=Object(a.useState)([]),A=Object(i.a)(D,2),T=A[0],U=A[1],B=Object(a.useState)(""),G=Object(i.a)(B,2),I=G[0],J=G[1],V=function(){var e=Object(O.a)(d.a.mark((function e(c){var a,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),y(!0),a=JSON.parse(localStorage.getItem("jwtData")),m){e.next=7;break}return J("Please login to make a comment :)"),y(!1),e.abrupt("return");case 7:return e.prev=7,o={authorization:"Bearer ".concat(a.jwt.token)},e.next=11,j()({url:"".concat(u,"/blog/").concat(t.id,"/comment"),method:"POST",headers:o,data:p});case 11:i=e.sent,{comment:p.comment,user:{username:a.jwt.user}},i.data,v({comment:""}),n(!s),r(!0),y(!1),console.log(s),U([]),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(7),console.log("Detail=",e.t0.message),y(!1),e.t0.response?U(e.t0.response.data):F(e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[7,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"CommentForm",children:P?Object(c.jsx)("div",{className:"error",children:P}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"comment",children:"Comment:"}),Object(c.jsx)("textarea",{type:"text",name:"comment",id:"comment",placeholder:"Enter your comment here",onChange:function(e){return function(e){var t=e.target,n=t.name,c=t.value;v(Object(C.a)(Object(C.a)({},p),{},Object(S.a)({},n,c)))}(e)},value:p.comment})]}),Object(c.jsx)("div",{className:"error",children:function(){var e=[];if(Array.isArray(T)){if(0===T.length)return null;for(var t=0;t<T.length;t++)e.push(Object(c.jsx)("li",{children:T[t].msg},f()()));return Object(c.jsx)("ul",{children:e})}U([T])}()}),Object(c.jsx)("div",{className:"comment-btn",children:Object(c.jsx)("button",{onClick:V,children:k?"Adding Comment....":"Add Comment"})})]}),Object(c.jsx)("div",{children:I})]})})}),y=(n(67),function(e){var t=e.comment,n=(e.index,e.params),s=e.gotComments,r=e.setGotComments,o=e.setCommentsLoading,l=Object(a.useContext)(h).serverUrl,u=JSON.parse(localStorage.getItem("jwtData")),b=Object(a.useState)(null),m=Object(i.a)(b,2),x=m[0],g=m[1],p=Object(a.useState)(!0),v=Object(i.a)(p,2),f=(v[0],v[1],Object(a.useState)("")),N=Object(i.a)(f,2),w=N[0],S=N[1],C=function(){var e=Object(O.a)(d.a.mark((function e(c){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),null==(a=JSON.parse(localStorage.getItem("jwtData")))&&window.location.reload(),e.prev=3,i={authorization:"Bearer ".concat(a.jwt.token)},o(!0),e.next=8,j()({url:"".concat(l,"/blog/").concat(n.id,"/comment/").concat(t._id,"/guest"),method:"DELETE",headers:i});case 8:e.sent,r(!s),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),S(e.t0.message),console.log("CommentDisplay=",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){u&&(t.user._id===u.jwt.user?g(!0):g(!1))}),[x]);return Object(c.jsx)("div",{className:"comment-card",children:w?Object(c.jsx)("div",{className:"error",children:w}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"user",children:t.user.username}),Object(c.jsx)("div",{className:"comment",children:t.comment}),Object(c.jsx)("div",{className:"delete-comment-btn",onClick:C,children:x?Object(c.jsx)("span",{children:"\u274c"}):""})]})})}),E=(n(68),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!0),o=Object(i.a)(r,2),l=o[0],u=o[1],m=Object(b.h)(),x=Object(a.useState)(""),g=Object(i.a)(x,2),p=g[0],v=g[1],N=Object(a.useState)(""),w=Object(i.a)(N,2),S=w[0],C=w[1],E=Object(a.useContext)(h).serverUrl,L=Object(a.useState)([]),P=Object(i.a)(L,2),F=P[0],D=P[1],A=Object(a.useState)(!0),T=Object(i.a)(A,2),U=T[0],B=T[1],G=Object(a.useState)(!1),I=Object(i.a)(G,2),J=I[0],V=I[1],_=function(){var e=Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()({url:"".concat(E,"/blog/").concat(m.id),method:"GET"});case 3:t=e.sent,s(t.data),u(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Detail=",e.t0.message),u(!1),v(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()({url:"".concat(E,"/blog/").concat(m.id,"/comment"),method:"GET"});case 3:t=e.sent,console.log(t),D(t.data),B(!1),C(""),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),B(!1),C(e.t0.message),console.log("Detail=",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_()}),[]),Object(a.useEffect)((function(){z()}),[J]);return Object(c.jsxs)("div",{className:"Detail",children:[l&&"loading....",!l&&(p?Object(c.jsx)("div",{className:"error",children:p}):Object(c.jsxs)("div",{className:"blog",children:[Object(c.jsx)("div",{className:"title",children:n.title}),Object(c.jsx)("div",{className:"content",children:n.content})]})),Object(c.jsx)(k,{comment:F,setComment:D,setGotComments:V,gotComments:J,params:m,commentsLoading:U,setCommentsLoading:B}),U&&"comments loading....",!U&&(S?Object(c.jsx)("div",{className:"comment-error",children:S}):F.length>0?Object(c.jsx)("div",{className:"comments-container",children:Object(c.jsx)("div",{className:"comments",children:F.map((function(e,t){return Object(c.jsx)(y,{comment:e,index:t,params:m,gotComments:J,setGotComments:V,setCommentsLoading:B},f()())}))})}):Object(c.jsx)("div",{children:"No comments on this blog."}))]})}),L=(n(69),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)({username:"",password:""}),o=Object(i.a)(r,2),l=o[0],m=o[1],x=Object(a.useState)([]),g=Object(i.a)(x,2),p=g[0],v=g[1],N=Object(a.useState)(""),w=Object(i.a)(N,2),k=w[0],y=w[1],E=Object(a.useContext)(h).serverUrl,L=Object(a.useState)(!1),P=Object(i.a)(L,2),F=P[0],D=P[1],A=function(e){var t=e.target,n=t.name,c=t.value;m(Object(C.a)(Object(C.a)({},l),{},Object(S.a)({},n,c)))},T=function(){var e=Object(O.a)(d.a.mark((function e(t){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),e.prev=2,e.next=5,j.a.post("".concat(E,"/blogs/login"),l);case 5:c=e.sent,a=JSON.stringify(c.data),localStorage.setItem("jwtData",a),D(!1),v([]),s(!0),console.log(n),e.next=21;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),console.log("Login=",e.t0.messaage),D(!1),e.t0.response?v(e.t0.response.data):y(e.t0.messaage),s(!1);case 21:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();console.log(n),console.log("hello");return Object(c.jsx)("div",{className:"login-container",children:k?Object(c.jsx)("div",{className:"error",children:k}):Object(c.jsxs)("div",{className:"Login",children:[Object(c.jsx)("h1",{className:"head",children:"Login To Continue."}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(c.jsx)("input",{type:"text",id:"username",placeholder:"Enter username",name:"username",onChange:function(e){return A(e)}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(c.jsx)("input",{type:"text",id:"password",placeholder:"Enter Password",name:"password",onChange:function(e){return A(e)}})]}),Object(c.jsx)("div",{className:"errors",children:function(){var e=[];if(Array.isArray(p)){if(0===p.length)return null;for(var t=0;t<p.length;t++)e.push(Object(c.jsx)("li",{children:p[t].msg},f()()));return Object(c.jsx)("ul",{children:e})}v([p])}()}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{className:"login-btn",type:"submit",onClick:T,children:F?"Loging-in":"Login"}),Object(c.jsx)("button",{className:"signup-btn",children:Object(c.jsx)(u.b,{to:"/signup",children:"Signup"})})]})]}),n&&window.location.reload()&&Object(c.jsx)(b.a,{to:"/blogs"})]})})}),P=(n(70),function(){var e=Object(a.useState)({fname:"",lname:"",email:"",username:"",password:"",confirmPassword:""}),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),o=Object(i.a)(r,2),l=o[0],u=o[1],m=Object(a.useState)(""),x=Object(i.a)(m,2),g=x[0],p=x[1],v=Object(a.useState)(!1),N=Object(i.a)(v,2),w=N[0],k=N[1],y=Object(a.useState)(!1),E=Object(i.a)(y,2),L=E[0],P=E[1],F=Object(a.useContext)(h).serverUrl,D=function(e){var t=e.target,c=t.name,a=t.value;s(Object(C.a)(Object(C.a)({},n),{},Object(S.a)({},c,a)))},A=function(){var e=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k(!0),n.password===n.confirmPassword){e.next=5;break}return u({msg:"Passwords don't match :("}),e.abrupt("return");case 5:return e.prev=5,e.next=8,j()({url:"".concat(F,"/blogs/signup"),method:"POST",data:n});case 8:e.sent,u([]),p(""),P(!0),k(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),e.t0.response?u(e.t0.response.data):p(e.t0.message),k(!1);case 19:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"signup-container",children:g?Object(c.jsx)("div",{className:"error",children:g}):Object(c.jsxs)("div",{className:"Signup",children:[Object(c.jsx)("h1",{children:"Signup Page"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"fname",children:"First Name:"}),Object(c.jsx)("input",{type:"text",id:"fname",placeholder:"Enter your first name",name:"fname",onChange:D})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"lname",children:"Last Name:"}),Object(c.jsx)("input",{type:"text",id:"lname",placeholder:"Enter your last name",name:"lname",onChange:D})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(c.jsx)("input",{type:"text",id:"email",placeholder:"Enter your email",name:"email",onChange:D})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(c.jsx)("input",{type:"text",id:"username",placeholder:"Enter a unique username",name:"username",onChange:D})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(c.jsx)("input",{type:"text",id:"password",placeholder:"Enter Password",name:"password",onChange:D})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password:"}),Object(c.jsx)("input",{type:"text",id:"confirmPassword",placeholder:"Enter above password again",name:"confirmPassword",onChange:D})]}),Object(c.jsx)("div",{className:"errors",children:function(){var e=[];if(Array.isArray(l)){if(0===l.length)return null;for(var t=0;t<l.length;t++)e.push(Object(c.jsx)("li",{children:l[t].msg},f()()));return Object(c.jsx)("ul",{children:e})}u([l])}()}),Object(c.jsx)("button",{className:"signup-btn",onClick:A,children:w?"Signing-you-up":"Signup"})]}),L&&Object(c.jsx)(b.a,{to:"/login"})]})})}),F=function(){var e=Object(a.useContext)(h).isAuthValue,t=Object(i.a)(e,1)[0];return Object(c.jsx)("div",{className:"Home",children:Object(c.jsxs)(u.a,{children:[Object(c.jsxs)("div",{className:"Navigation",children:[Object(c.jsx)(p,{to:"/blogs",label:"Blogs"}),t&&Object(c.jsx)(p,{to:"/logout",label:"Logout"}),!t&&Object(c.jsx)(p,{to:"/login",label:"Login"})]}),Object(c.jsx)(g,{}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/",children:Object(c.jsx)(b.a,{to:"/blogs"})}),Object(c.jsx)(b.b,{path:"/blogs",children:Object(c.jsx)(N,{})}),Object(c.jsx)(b.b,{exact:!0,path:"/blog/:id",children:Object(c.jsx)(E,{})}),t&&Object(c.jsx)(b.b,{path:"/logout",children:Object(c.jsx)(w,{})}),!t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.b,{path:"/login",children:Object(c.jsx)(L,{})}),Object(c.jsx)(b.b,{path:"/signup",children:Object(c.jsx)(P,{})})]})]})]})})};var D=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x,{children:Object(c.jsx)(F,{})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),A()}},[[71,1,2]]]);
//# sourceMappingURL=main.696235fe.chunk.js.map