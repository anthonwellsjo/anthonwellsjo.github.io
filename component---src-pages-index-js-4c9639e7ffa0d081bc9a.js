(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"I+fl":function(e,t,n){e.exports={centralizer:"centralizer-module--centralizer--1a2Ow",column:"centralizer-module--column--U6rEj"}},J99Z:function(e,t,n){e.exports={menu:"menu-module--menu--1LsDl",hide:"menu-module--hide--2bxhJ",div:"menu-module--div--3LITh",link1:"menu-module--link1--304-T",link2:"menu-module--link2--2vC41",link3:"menu-module--link3--26_eE"}},MunH:function(e,t,n){e.exports={meter:"progressMeter-module--meter--2Wm8G",span:"progressMeter-module--span--samE3"}},PWLS:function(e,t,n){e.exports={fade:"componentAnimation-module--fade--3fo9t",in:"componentAnimation-module--in--c-T5k"}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var a=n("q1tI"),l=n.n(a),r=n("J99Z"),c=n.n(r),o=n("TSYQ"),m=n.n(o),i=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],o=function(){window.pageYOffset<7?n||r(!0):n&&r(!1)},i=function(t){switch(t){case"skills":window.scrollTo(0,e.skills.current.offsetTop);break;case"work":window.scrollTo(0,e.work.current.offsetTop);break;case"contact":window.scrollTo(0,e.contact.current.offsetTop)}};return Object(a.useEffect)((function(){window.addEventListener("scroll",o),window.addEventListener("mousemove",(function(e){return function(e){e.clientY<200&&r(!0)}(e)}))})),l.a.createElement("div",{className:n?c.a.menu:m()(c.a.menu,c.a.hide)},l.a.createElement("div",{className:c.a.div},l.a.createElement("a",{onClick:function(){return i("skills")},className:c.a.link3},"Skills"),l.a.createElement("a",{onClick:function(){return i("work")},className:c.a.link3},"Work"),l.a.createElement("a",{onClick:function(){return i("contact")},className:c.a.link1},"Contact")))},u=n("ZE15"),s=n.n(u),d=n("jr3a"),E=n.n(d),b=n("I+fl"),p=n.n(b),f=function(e){var t=p.a.centralizer;return e.column&&(t=m()(p.a.centralizer,p.a.column)),l.a.createElement("div",{className:t},e.children)},h=n("ljiU"),w=n.n(h),v=function(e){return l.a.createElement("div",{className:w.a.row},e.children)},g=n("WPAw"),k=n.n(g),x=function(e){return l.a.createElement("div",{className:k.a.column},e.children)},j=function(e){return l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("div",{style:{display:"block",textAlign:"left",margin:"auto"}},l.a.createElement("h1",null,"Anthon Wellsjö"),l.a.createElement("h3",null,"Swedish Web Developer based in Rome"))),l.a.createElement(x,null,l.a.createElement(f,{column:!0},l.a.createElement("img",{className:E.a.img,src:s.a,alt:"portrait"}))))},N=n("vKLn"),O=n.n(N),S=n("MunH"),A=n.n(S),W=function(e){var t=Object(a.useState)({width:"0",transition:"width 5s"}),n=t[0],r=t[1];return Object(a.useEffect)((function(){r({width:e.tot+"%",transition:"width 5s"}),console.log("set show anim")}),[]),console.log("render progressmeter"),l.a.createElement("div",{className:A.a.meter},l.a.createElement("span",{className:m()(A.a.span),style:e.in?n:null}))},y=function(e){return l.a.createElement("div",{className:O.a.div},l.a.createElement("h2",null,"Skills"),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"JavaScript")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:75})))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"TypeScript")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:50})))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"C#")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:65})))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"SQL")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:70})))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"React.js")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:75})))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"Gatsby.js")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:65})))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"Xamarin")),l.a.createElement(x,null,l.a.createElement("div",{className:O.a.progress},l.a.createElement(W,{in:e.showAnim,tot:55})))))},C=n("w3UN"),M=n.n(C),T=n("q9d7"),R=n.n(T),L=function(e){var t=e.show?m()(R.a.container,R.a.show):m()(R.a.container,R.a.hide);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t},l.a.createElement("div",{className:R.a.menuholder},l.a.createElement(f,{column:!0},l.a.createElement("a",{href:"/",className:R.a.link,to:"/contact"},"Contact"),l.a.createElement("a",{href:"/",className:R.a.link,to:"/contact"},"Bio"),l.a.createElement("a",{href:"/",className:R.a.link,to:"/contact"},"Work")))))},B=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:M.a.container},l.a.createElement("div",{onClick:function(){return r(!n)},className:n?M.a.turn:null},l.a.createElement("div",{className:M.a.bar1}),l.a.createElement("div",{className:M.a.bar2}),l.a.createElement("div",{className:M.a.bar3}))),l.a.createElement(L,{show:n}))},D=n("PWLS"),P=n.n(D),H=function(e){var t=Object(a.useState)(P.a.fade),n=t[0],r=t[1],c=Object(a.useState)(!1),o=c[0],i=c[1];if(!o){switch(e.type){case"fade":default:r(P.a.fade)}i(!0)}return l.a.createElement("div",{className:e.in?m()(P.a.in):n},e.children)},F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,"Who am I?")),l.a.createElement("p",null,"Born and raised in Åsa, Sweden. Have lived abroad since 2008. First Paris, and now Rome. Married with three kids."))},I=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Work experience:"),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"Photo Model")),l.a.createElement(x,null,l.a.createElement("h3",null,"Paris, Rome 2009-..."))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement("h3",null,"Deconstruction Worker")),l.a.createElement(x,null,l.a.createElement("h3",null,"Gothburg, Sweden 2005-2008"))))},J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Contact"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/anthonwellsjo/"},"Github"),l.a.createElement("a",{href:"https://www.linkedin.com/in/anthonwellsjo"},"LinkedIn"),l.a.createElement("a",{href:"mailto:anthonwellsjo@gmail.com"},"Mail me!"))};function z(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useState)(!0),m=o[0],u=o[1],s=Object(a.useState)(!1),d=s[0],E=s[1],b=Object(a.useState)(!1),p=b[0],h=b[1],w=Object(a.useState)(!1),v=w[0],g=w[1],k=Object(a.useState)(!1),x=k[0],N=k[1],O=Object(a.useState)(!1),S=O[0],A=O[1],W=function(e,t){switch(t){case"skills":e.top<window.innerHeight&&e.bottom>=0?(N(!0),A(!0)):N(!1);break;case"profile":e.top<window.innerHeight&&e.bottom>=0?u(!0):u(!1);break;case"presentation":e.top<window.innerHeight&&e.bottom>=0?g(!0):g(!1);break;case"work":e.top<window.innerHeight&&e.bottom>=0?h(!0):h(!1);break;case"contact":e.top<window.innerHeight&&e.bottom>=0?E(!0):E(!1)}};return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){var a=n.current.getBoundingClientRect(),l=t.current.getBoundingClientRect(),o=e.current.getBoundingClientRect(),m=r.current.getBoundingClientRect(),i=c.current.getBoundingClientRect();W(a,"skills"),W(o,"profile"),W(m,"presentation"),W(i,"work"),W(l,"contact")}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{column:!0},l.a.createElement("div",{style:{width:"95%",maxWidth:"850px"}},l.a.createElement(f,{column:!0},l.a.createElement(i,{work:c,contact:t,skills:n})),l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,{in:m},l.a.createElement("div",{ref:e,style:{border:"solid black 15px",textAlign:"center",maxWidth:"100%",backgroundColor:"#c15640",padding:"50px 50px 50px 50px"}},l.a.createElement(j,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,{in:v},l.a.createElement("div",{ref:r,style:{border:"solid black 15px",textAlign:"center",maxWidth:"100%",backgroundColor:"#003D73",padding:"20px 50px 50px 50px"}},l.a.createElement(f,{column:!0},l.a.createElement(F,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,{in:x},l.a.createElement("div",{ref:n,style:{border:"solid black 15px",textAlign:"center",maxWidth:"100%",backgroundColor:"#0878a4",padding:"20px 50px 50px 50px"}},l.a.createElement(f,{column:!0},l.a.createElement(y,{showAnim:S})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,{in:p},l.a.createElement("div",{ref:c,style:{border:"solid black 15px",textAlign:"center",maxWidth:"100%",backgroundColor:"#f092a5",padding:"20px 50px 50px 50px"}},l.a.createElement(f,{column:!0},l.a.createElement(I,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,{in:d},l.a.createElement("div",{ref:t,style:{border:"solid black 15px",textAlign:"center",maxWidth:"100%",backgroundColor:"#f092a5",padding:"20px 50px 50px 50px"}},l.a.createElement(f,{column:!0},l.a.createElement(J,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var c=l.apply(null,a);c&&e.push(c)}else if("object"===r)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},WPAw:function(e,t,n){e.exports={column:"cols-module--column--aTK9a"}},ZE15:function(e,t,n){e.exports=n.p+"static/portrait-32b6b2c8405e822d7f8fe128add704ce.jpg"},jr3a:function(e,t,n){e.exports={img:"profile-module--img--2NhWI"}},ljiU:function(e,t,n){e.exports={row:"row-module--row--3cJ63"}},q9d7:function(e,t,n){e.exports={container:"dropDownMenu-module--container--12w-4",hide:"dropDownMenu-module--hide--1Y2xc",show:"dropDownMenu-module--show--9ZBX5",link:"dropDownMenu-module--link--MJriT",menuholder:"dropDownMenu-module--menuholder--3_Txy"}},vKLn:function(e,t,n){e.exports={div:"skills-module--div--2D3oB",progress:"skills-module--progress--D760P",row:"skills-module--row--wwBHF",column:"skills-module--column--W35I9"}},w3UN:function(e,t,n){e.exports={container:"mobileMenu-module--container--1Zm3O",bar1:"mobileMenu-module--bar1--2-UPV",bar2:"mobileMenu-module--bar2--8L0eh",bar3:"mobileMenu-module--bar3--1BATK",turn:"mobileMenu-module--turn--1vDiL"}}}]);
//# sourceMappingURL=component---src-pages-index-js-4c9639e7ffa0d081bc9a.js.map