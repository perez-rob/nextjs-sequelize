(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{DH47:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[slug]",function(){return n("p2hl")}])},p2hl:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("p46w"),s=n.n(o),i=n("YFqc"),l=n.n(i),c=n("nOHt"),u=n.n(c),p=n("oHpw"),f=r.a.createElement;var d=!0;t.default=function(e){var t=Object(c.useRouter)(),n=e.origin,o=(e.referer,e.user),i=Object(a.useState)("Profile"),d=i[0],m=i[1];return Object(a.useEffect)((function(){switch(t.asPath){case"/user/logout":s.a.remove("token"),u.a.push({pathname:"/",query:{}},"/");break;case"/user/login":m("Login");break;case"/user/register":m("Register")}}),[]),f(p.a,{title:"Next.js with Sequelize | User Page - ".concat(d),url:"".concat(n).concat(t.asPath),origin:n},f("div",{className:"container"},f("main",{className:"content-detail"},f(l.a,{href:{pathname:"/user"}},f("a",null,"\u2190 Back")),o.data&&f(r.a.Fragment,null,f("h1",null,o.data.firstName||""," ",o.data.lastName||""," @",o.data.username),f("h3",{className:"sub-title"},o.data.email,f("small",{style:{display:"block",fontWeight:"normal",marginTop:".75rem"}},"Member since ",o.data.createdAt)),o.data.posts.length>0&&f("div",{className:"grid"},f("h2",null,"Latest Posts"),o.data.posts.map((function(e,t){return f(l.a,{key:t,href:{pathname:"/post/".concat(e.slug),query:{}}},f("a",{className:"card"},f("h4",null,e.title),f("span",null,e.createdAt)))})))||f("small",{style:{color:"#999999"}},"No latest posts"),o.data.jobs.length>0&&f("div",{className:"grid"},f("h2",null,"Latest Jobs"),o.data.jobs.map((function(e,t){return f(l.a,{key:t,href:{pathname:"/job/".concat(e.slug),query:{}}},f("a",{className:"card"},f("h4",null,e.title),f("span",null,f("small",null,e.content)),f("span",null,f("small",null,e.reportManager)),f("span",null,f("small",null,e.emailTo)),f("span",null,f("span",null,e.createdAt))))})))||f("small",{style:{marginLeft:".5rem",color:"#999999"}},"No latest jobs")))))}},p46w:function(e,t,n){var a,r;!function(o){if(void 0===(r="function"===typeof(a=o)?a.call(t,n,t,e):a)||(e.exports=r),!0,e.exports=o(),!!0){var s=window.Cookies,i=window.Cookies=o();i.noConflict=function(){return window.Cookies=s,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(a){function r(){}function o(t,n,o){if("undefined"!==typeof document){"number"===typeof(o=e({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(c){}n=a.write?a.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var l in o)o[l]&&(i+="; "+l,!0!==o[l]&&(i+="="+o[l].split(";")[0]));return document.cookie=t+"="+n+i}}function s(e,n){if("undefined"!==typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var i=o[s].split("="),l=i.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(i[0]);if(l=(a.read||a)(l,c)||t(l),n)try{l=JSON.parse(l)}catch(u){}if(r[c]=l,e===c)break}catch(u){}}return e?r[e]:r}}return r.set=o,r.get=function(e){return s(e,!1)},r.getJSON=function(e){return s(e,!0)},r.remove=function(t,n){o(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))}},[["DH47",0,2,1,3]]]);