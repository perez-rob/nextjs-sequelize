(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"HaE+":function(e,a,r){"use strict";function t(e,a,r,t,n,o,i){try{var l=e[o](i),s=l.value}catch(c){return void r(c)}l.done?a(s):Promise.resolve(s).then(t,n)}function n(e){return function(){var a=this,r=arguments;return new Promise((function(n,o){var i=e.apply(a,r);function l(e){t(i,n,o,l,s,"next",e)}function s(e){t(i,n,o,l,s,"throw",e)}l(void 0)}))}}r.d(a,"a",(function(){return n}))},WLnD:function(e,a,r){"use strict";r.r(a),r.d(a,"__N_SSP",(function(){return w}));var t=r("o0o1"),n=r.n(t),o=r("HaE+"),i=r("rePB"),l=r("q1tI"),s=r.n(l),c=r("YFqc"),u=r.n(c),m=r("nOHt"),d=r("oHpw"),v=s.a.createElement;var p=function(e){var a=e.props,r=a.onSubmitHandler,t=a.onChangeHandler,n=a.loading,o=a.stateFormData,i=a.stateFormError,l=a.stateFormMessage;return v("form",{onSubmit:r,className:"form-register card",method:"POST"},v("div",{className:"form-group"},v("h2",null,"Register"),v("hr",null),"error"===l.status&&v("h4",{className:"warning text-center"},l.error)),v("div",{className:"form-group"},v("label",{htmlFor:"email"},"Username"),v("input",{onChange:t,className:"form-control",type:"text",id:"username",name:"username",placeholder:"Username",readOnly:n&&!0,value:o.username.value}),i.username&&v("span",{className:"warning"},i.username.hint)),v("div",{className:"form-group"},v("label",{htmlFor:"email"},"Email"),v("input",{onChange:t,className:"form-control",type:"text",id:"email",name:"email",placeholder:"Email",readOnly:n&&!0,defaultValue:o.email.value}),i.email&&v("span",{className:"warning"},i.email.hint)),v("div",{className:"form-group"},v("label",{htmlFor:"password"},"Password"),v("input",{onChange:t,className:"form-control",type:"password",id:"password",name:"password",placeholder:"Password",readOnly:n&&!0,defaultValue:o.password.value}),i.password&&v("span",{className:"warning"},i.password.hint)),v("div",null,v("button",{type:"submit",className:"btn btn-block btn-warning",disabled:n},n?"Registering...":"Register")))},f=s.a.createElement;function b(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?b(Object(r),!0).forEach((function(a){Object(i.a)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var g={username:{value:"",label:"Username",min:10,max:36,required:!0,validator:{regEx:/^[a-z\sA-Z0-9\W\w]+$/,error:"Username fill correctly"}},email:{value:"",label:"Email",min:10,max:36,required:!0,validator:{regEx:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,error:"Email fill correctly"}},password:{value:"",label:"Password",min:6,max:36,required:!0,validator:{regEx:/^[a-z\sA-Z0-9\W\w]+$/,error:"Password fill correctly"}}};var w=!0;a.default=function(e){var a=Object(m.useRouter)(),r=e.origin,t=e.baseApiUrl,s=Object(l.useState)(!1),c=s[0],v=s[1],b=Object(l.useState)(g),w=b[0],O=b[1],y=Object(l.useState)([]),j=y[0],P=y[1],x=Object(l.useState)(!1),E=(x[0],x[1]),N=Object(l.useState)({}),S=N[0],q=N[1];function F(){return(F=Object(o.a)(n.a.mark((function e(a){var r,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=h({},w),!D(w)){e.next=18;break}if(r=h(h({},r),{},{username:r.username.value||""}),r=h(h({},r),{},{email:r.email.value||""}),r=h(h({},r),{},{password:r.password.value||""}),!D(w)){e.next=18;break}return v(!c),e.next=12,fetch("".concat(t,"/user"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).catch((function(e){console.error("Error:",e)}));case 12:return o=e.sent,e.next=15,o.json();case 15:"success"===(i=e.sent).status&&"done"===i.message?window.location.href="/":q(i),v(!1);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,a){var r=a&&a.target.name||"",t=[],n=!0;return r?(e[r].required&&(e[r].value||(t[r]={hint:"".concat(e[a.target.name].label," required"),isInvalid:!0},n=!1)),e[r].value&&e[r].min>e[r].value.length&&(t[r]={hint:"Min ".concat(e[r].label," length ").concat(e[r].min),isInvalid:!0},n=!1),e[r].value&&e[r].max<e[r].value.length&&(t[r]={hint:"Min ".concat(e[r].label," length ").concat(e[r].max),isInvalid:!0},n=!1),null!==e[r].validator&&"object"===typeof e[r].validator&&e[r].value&&!e[r].validator.regEx.test(e[r].value)&&(t[r]={hint:e[r].validator.error,isInvalid:!0},n=!1)):Object.entries(e).forEach((function(e){e.forEach((function(a){t[e[0]]="",a.required&&(a.value||(t[e[0]]={hint:"".concat(a.label," required"),isInvalid:!0},n=!1)),a.value&&a.min>=a.value.length&&(t[e[0]]={hint:"Min ".concat(a.label," length ").concat(a.min),isInvalid:!0},n=!1),a.value&&a.max<=a.value.length&&(t[e[0]]={hint:"Min ".concat(a.label," length ").concat(a.max),isInvalid:!0},n=!1),null!==a.validator&&"object"===typeof a.validator&&a.value&&!a.validator.regEx.test(a.value)&&(t[e[0]]={hint:a.validator.error,isInvalid:!0},n=!1)}))})),n&&E(n),P(h({},t)),n}return f(d.a,{title:"Next.js with Sequelize | Register page",url:"".concat(r).concat(a.asPath),origin:r},f("div",{className:"container"},f("main",{className:"content-detail"},f(u.a,{href:{pathname:"/user"}},f("a",null,"\u2190 Back")),f(p,{props:{onSubmitHandler:function(e){return F.apply(this,arguments)},onChangeHandler:function(e){var a=e.currentTarget,r=a.name,t=a.value;O(h(h({},w),{},Object(i.a)({},r,h(h({},w[r]),{},{value:t})))),D(w,e)},loading:c,stateFormData:w,stateFormError:j,stateFormMessage:S}}))))}},Yvev:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/register",function(){return r("WLnD")}])},rePB:function(e,a,r){"use strict";function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}r.d(a,"a",(function(){return t}))}},[["Yvev",0,2,1,3]]]);