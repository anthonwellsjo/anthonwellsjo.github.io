(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/SQS":function(e,t,a){e.exports={icon:"contact-module--icon--XzsI9",move:"contact-module--move--1Ob6q"}},"6GSs":function(e,t,a){e.exports={div:"innerTextHolder-module--div--1CxAz"}},"77Tp":function(e,t,a){e.exports=a.p+"static/in-59ae856a1fb68884bbeeef4f1b37bc51.png"},DjRm:function(e,t,a){e.exports={container:"decoAnimFour-module--container--KFzAX",stick1:"decoAnimFour-module--stick1--7SqYf",roll:"decoAnimFour-module--roll--xyqTR"}},E0bz:function(e,t,a){e.exports={container:"idleMenu-module--container--3Q7ro",hide:"idleMenu-module--hide--3gn1l",line:"idleMenu-module--line--fxSN0",anim:"idleMenu-module--anim--2MTpO"}},GZgv:function(e,t,a){e.exports=a.p+"static/git-23f6710aaeebebe64f369d1fd2ea499c.png"},"I+fl":function(e,t,a){e.exports={centralizer:"centralizer-module--centralizer--1a2Ow",column:"centralizer-module--column--U6rEj",space:"centralizer-module--space--12Wh4"}},J99Z:function(e,t,a){e.exports={menu:"menu-module--menu--1LsDl",mobileMenu:"menu-module--mobileMenu--3Q5LJ",div:"menu-module--div--3LITh",hide:"menu-module--hide--2bxhJ",link1:"menu-module--link1--304-T",link2:"menu-module--link2--2vC41",link3:"menu-module--link3--26_eE",hideMobile:"menu-module--hideMobile--3QZmt"}},JUjU:function(e,t,a){e.exports={container:"decoAnimThree-module--container--2MKSY",stick1:"decoAnimThree-module--stick1--1wQZ4",roll:"decoAnimThree-module--roll--xoJqN"}},MunH:function(e,t,a){e.exports={meter:"progressMeter-module--meter--2Wm8G",span:"progressMeter-module--span--samE3"}},PWLS:function(e,t,a){e.exports={fade:"componentAnimation-module--fade--3fo9t",in:"componentAnimation-module--in--c-T5k"}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return we}));var n=a("q1tI"),l=a.n(n),c=a("J99Z"),r=a.n(c),i=a("TSYQ"),o=a.n(i),m=a("sUZN"),s=a.n(m),u=a("I+fl"),d=a.n(u),E=function(e){var t=d.a.centralizer;return e.column&&(t=o()(d.a.centralizer,d.a.column)),e.column&&e.space&&(t=o()(d.a.centralizer,d.a.column,d.a.space)),e.space&&(t=o()(d.a.centralizer,d.a.space)),l.a.createElement("div",{className:t},e.children)},p=function(e){return l.a.createElement("div",{className:e.in?o()(s.a.container):o()(s.a.container,s.a.hide)},l.a.createElement(E,null,l.a.createElement("div",{onClick:e.onClicked},l.a.createElement("div",{className:s.a.bar1}),l.a.createElement("div",{className:s.a.bar2}),l.a.createElement("div",{className:s.a.bar3}))))},f=a("E0bz"),k=a.n(f),b=function(e){return l.a.createElement("div",{className:e.in?k.a.container:o()(k.a.container,k.a.hide)},l.a.createElement(E,{column:!0},l.a.createElement("div",{className:k.a.line}),l.a.createElement("div",{className:k.a.line})))},v=function(e){var t=Object(n.useState)(!0),a=t[0],c=t[1],i=Object(n.useState)(!1),m=i[0],s=i[1],u=Object(n.useState)(!1),d=u[0],f=u[1],k=function(){var e=window.pageYOffset;f(!1),window.pageYOffset<7?(c(!0),s(!1)):(c(!1),setTimeout((function(){+e==+window.pageYOffset&&s(!0)}),2e3))},v=function(t){switch(t){case"skills":window.scrollTo(0,e.skills.current.offsetTop);break;case"work":window.scrollTo(0,e.work.current.offsetTop);break;case"contact":window.scrollTo(0,e.contact.current.offsetTop)}};return Object(n.useEffect)((function(){window.addEventListener("scroll",k),window.addEventListener("mousemove",(function(e){return function(e){e.clientY<150?(c(!0),s(!1)):window.pageYOffset>7&&c(!1)}(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{in:m}),l.a.createElement("section",{className:a?r.a.menu:o()(r.a.menu,r.a.hide)},l.a.createElement("div",{className:r.a.div},l.a.createElement("a",{onClick:function(){return v("skills")},className:r.a.link3},"Skills"),l.a.createElement("a",{onClick:function(){return v("work")},className:r.a.link3},"Work"),l.a.createElement("a",{onClick:function(){return v("contact")},className:r.a.link1},"Contact"))),l.a.createElement(p,{in:!d,onClicked:function(){return f(!0)}}),l.a.createElement("section",{className:d?r.a.mobileMenu:o()(r.a.mobileMenu,r.a.hideMobile)},l.a.createElement("div",{className:r.a.mobileDiv},l.a.createElement(E,null,l.a.createElement("a",{onClick:function(){return v("skills")},className:r.a.link3},"Skills"),l.a.createElement("a",{onClick:function(){return v("work")},className:r.a.link3},"Work"),l.a.createElement("a",{onClick:function(){return v("contact")},className:r.a.link1},"Contact")))))},w=a("ZE15"),g=a.n(w),h=a("jr3a"),N=a.n(h),x=a("ljiU"),j=a.n(x),S=function(e){return l.a.createElement("div",{className:e.reverse?o()(j.a.row,j.a.reverse):o()(j.a.row,j.a.normal)},e.children)},A=a("WPAw"),T=a.n(A),O=function(e){return l.a.createElement("div",{className:T.a.column},e.children)},C=a("6GSs"),y=a.n(C),M=function(e){return l.a.createElement("div",{className:y.a.div},e.children)},R=function(e){return l.a.createElement(S,{reverse:!0},l.a.createElement(O,null,l.a.createElement(E,{column:!0},l.a.createElement("header",null,l.a.createElement("h1",null,"Anthon Wellsjö")),l.a.createElement(M,null,l.a.createElement("p",null,"Swedish Web Developer based in Rome")))),l.a.createElement(O,null,l.a.createElement(E,{column:!0},l.a.createElement("img",{className:N.a.img,src:g.a,alt:"portrait"}))))},W=a("vKLn"),F=a.n(W),z=a("MunH"),P=a.n(z),J=function(e){var t=Object(n.useState)({width:"0",transition:"width 5s"}),a=t[0],c=t[1];return Object(n.useEffect)((function(){c({width:e.tot+"%",transition:"width 5s"}),console.log("set show anim")}),[]),console.log("render progressmeter"),l.a.createElement(E,null,l.a.createElement("div",{className:P.a.meter},l.a.createElement("span",{className:o()(P.a.span),style:e.in?a:null})))},L=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h2",null,"Skills")),l.a.createElement(M,null,[{skill:"JavaScript",tot:75},{skill:"TypeScript",tot:55},{skill:"C#",tot:65},{skill:"SQL",tot:50},{skill:"React.Js",tot:80},{skill:"Gatsby.Js",tot:60},{skill:"Xamarin",tot:50}].map((function(t){return l.a.createElement("figure",{key:t.skill},l.a.createElement(S,null,l.a.createElement(O,null,l.a.createElement("p",null,t.skill)),l.a.createElement(O,null,l.a.createElement("div",{className:F.a.progress},l.a.createElement(J,{in:e.showAnim,tot:t.tot})))))}))))},I=a("PWLS"),Y=a.n(I),Z=function(e){var t=Object(n.useState)(Y.a.fade),a=t[0],c=t[1],r=Object(n.useState)(!1),i=r[0],m=r[1];if(!i){switch(e.type){case"fade":default:c(Y.a.fade)}m(!0)}return l.a.createElement("div",{className:e.in?o()(Y.a.in):a},e.children)},B=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h2",null,"Who am I?")),l.a.createElement(M,null,l.a.createElement("p",null,"Born and raised in Åsa, Sweden. Have lived abroad since 2008. First Paris, and now Rome. Married with three kids.")))},D=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h2",null,"Work Experience")),l.a.createElement(M,null,[{title:"Photo Model",duration:"2009-Ongoing",city:"Paris & Rome"},{title:"Music Producer",duration:"2010-20015",city:"Paris"},{title:"7-Eleven Staff",duration:"2008-2009",city:"Gothenburg"},{title:"Deconstruction Worker",duration:"2007-2008",city:"Gothenburg"}].map((function(e){return l.a.createElement("figure",{key:e.title},l.a.createElement(S,null,l.a.createElement(O,null,l.a.createElement(M,null,l.a.createElement("p",null,e.title))),l.a.createElement(O,null,l.a.createElement(M,null,l.a.createElement("p",null,e.city))),l.a.createElement(O,null,l.a.createElement(M,null,l.a.createElement("p",null,e.duration)))))}))))},G=a("/SQS"),H=a.n(G),Q=a("p4wo"),U=a.n(Q),q=a("jpgM"),X=a.n(q),K=a("77Tp"),_=a.n(K),V=a("GZgv"),$=a.n(V),ee="mailto:anthonwellsjo@gmail.com",te="https://github.com/anthonwellsjo/",ae="https://www.linkedin.com/in/anthonwellsjo",ne="https://api.whatsapp.com/send?phone=393396479127",le=function(){var e=function(e){var t;t=e,window.open(t,"_blank").focus()};return l.a.createElement(E,{space:!0},l.a.createElement("img",{src:U.a,className:H.a.icon,onClick:function(){return e(ee)}}),l.a.createElement("img",{src:_.a,className:H.a.icon,onClick:function(){return e(ae)}}),l.a.createElement("img",{src:$.a,className:H.a.icon,onClick:function(){return e(te)}}),l.a.createElement("img",{src:X.a,className:H.a.icon,onClick:function(){return e(ne)}}))},ce=a("vGFT"),re=a.n(ce),ie=a("ndmd"),oe=a.n(ie),me=function(){return l.a.createElement("div",{className:oe.a.container},l.a.createElement("div",{className:oe.a.stick2}),l.a.createElement(E,{space:!0},l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick12}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1}),l.a.createElement("div",{className:oe.a.stick1})))},se=a("j6ZR"),ue=a.n(se),de=function(){return l.a.createElement("div",{className:ue.a.container},l.a.createElement(E,{column:!0,space:!0},l.a.createElement("div",{className:ue.a.stick1})))},Ee=a("JUjU"),pe=a.n(Ee),fe=function(){return l.a.createElement("div",{className:pe.a.container},l.a.createElement(E,{column:!0,space:!0},l.a.createElement("div",{className:pe.a.stick1})))},ke=a("DjRm"),be=a.n(ke),ve=function(){return l.a.createElement("div",{className:be.a.container},l.a.createElement(E,{column:!0,space:!0},l.a.createElement("div",{className:be.a.stick1})))};function we(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useState)(!0),o=i[0],m=i[1],s=Object(n.useState)(!1),u=s[0],d=s[1],p=Object(n.useState)(!1),f=p[0],k=p[1],b=Object(n.useState)(!0),w=b[0],g=b[1],h=Object(n.useState)(!1),N=h[0],x=h[1],j=Object(n.useState)(!1),S=j[0],A=j[1],T=function(e,t){switch(t){case"skills":e.top<window.innerHeight&&e.bottom>=0?(x(!0),A(!0)):x(!1);break;case"profile":e.top<window.innerHeight&&e.bottom>=0?m(!0):m(!1);break;case"presentation":e.top<window.innerHeight&&e.bottom>=0?g(!0):g(!1);break;case"work":e.top<window.innerHeight&&e.bottom>=0?k(!0):k(!1);break;case"contact":e.top<window.innerHeight&&e.bottom>=0?d(!0):d(!1)}};return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var n=a.current.getBoundingClientRect(),l=t.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),o=c.current.getBoundingClientRect(),m=r.current.getBoundingClientRect();T(n,"skills"),T(i,"profile"),T(o,"presentation"),T(m,"work"),T(l,"contact")}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{column:!0},l.a.createElement("div",{className:re.a.frame,style:{}},l.a.createElement(E,{column:!0},l.a.createElement(v,{work:r,contact:t,skills:a})),l.a.createElement(Z,{in:o},l.a.createElement("section",{ref:e,style:{textAlign:"center",maxWidth:"100%",backgroundColor:"#d0e3cc",padding:"50px 50px 50px 50px"}},l.a.createElement(R,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(de,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Z,{in:w},l.a.createElement("section",{ref:c,style:{textAlign:"center",maxWidth:"100%",backgroundColor:"#f7ffdd",padding:"20px 50px 50px 50px"}},l.a.createElement(E,{column:!0},l.a.createElement(B,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(fe,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Z,{in:N},l.a.createElement("section",{ref:a,style:{textAlign:"center",maxWidth:"100%",backgroundColor:"#fc9f5b",padding:"20px 50px 50px 50px"}},l.a.createElement(E,{column:!0},l.a.createElement(L,{showAnim:S})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ve,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Z,{in:f},l.a.createElement("section",{ref:r,style:{textAlign:"center",maxWidth:"100%",backgroundColor:"#FBD1A2",padding:"20px 50px 50px 50px"}},l.a.createElement(E,{column:!0},l.a.createElement(D,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(me,null),l.a.createElement("br",null),l.a.createElement(Z,{in:u},l.a.createElement("div",{ref:t,style:{textAlign:"center",maxWidth:"100%",padding:"20px 50px 50px 50px"}},l.a.createElement(E,{column:!0},l.a.createElement(le,null)))),l.a.createElement("br",null),l.a.createElement("br",null))))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var r=l.apply(null,n);r&&e.push(r)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},WPAw:function(e,t,a){e.exports={column:"cols-module--column--aTK9a"}},ZE15:function(e,t,a){e.exports=a.p+"static/portrait-32b6b2c8405e822d7f8fe128add704ce.jpg"},j6ZR:function(e,t,a){e.exports={container:"decoAnimTwo-module--container--2SN5q",fall:"decoAnimTwo-module--fall--o6EY9",stick1:"decoAnimTwo-module--stick1--3pgLo",spin:"decoAnimTwo-module--spin--20RvT",stick2:"decoAnimTwo-module--stick2--2dIhP",sweep:"decoAnimTwo-module--sweep--3Xa07"}},jpgM:function(e,t,a){e.exports=a.p+"static/app-b2868313ecdeea388bb8bc88c406802e.png"},jr3a:function(e,t,a){e.exports={img:"profile-module--img--2NhWI"}},ljiU:function(e,t,a){e.exports={row:"row-module--row--3cJ63",reverse:"row-module--reverse--zPixt",normal:"row-module--normal--1gp3r"}},ndmd:function(e,t,a){e.exports={container:"decoAnim-module--container--3gIEy",fall:"decoAnim-module--fall--8k4FI",stick1:"decoAnim-module--stick1--15SfR",stick12:"decoAnim-module--stick12--YyYgX",stick2:"decoAnim-module--stick2--DEPtP",sweep:"decoAnim-module--sweep--3Da0B"}},p4wo:function(e,t,a){e.exports=a.p+"static/google-0a1ae57a229d6099ebcb82144438fec6.png"},sUZN:function(e,t,a){e.exports={container:"hamburger-module--container--1J-hS",bar1:"hamburger-module--bar1--vgFCh",bar2:"hamburger-module--bar2--1w4I6",bar3:"hamburger-module--bar3--34uLE",hide:"hamburger-module--hide--3iQkn"}},vGFT:function(e,t,a){e.exports={frame:"index-module--frame--nqbyl"}},vKLn:function(e,t,a){e.exports={div:"skills-module--div--2D3oB",progress:"skills-module--progress--D760P",row:"skills-module--row--wwBHF",column:"skills-module--column--W35I9"}}}]);
//# sourceMappingURL=component---src-pages-index-js-497b11899ef254e1b09a.js.map