(this["webpackJsonpnrp-test"]=this["webpackJsonpnrp-test"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(47),r=n.n(s),o=(n(61),n(62),n(26)),i=n.n(o),l=n(48),u=n(10),j=n(49),b=n.n(j),d=(n(36),n(3)),h=n(2);function O(){var e,t="json,1.1",n="03179000",c="00060",s=Object(a.useState)({}),r=Object(u.a)(s,2),o=r[0],j=r[1],O=Object(a.useState)(),p=Object(u.a)(O,2),f=p[0],x=p[1],v=Object(a.useState)([]),m=Object(u.a)(v,2),g=m[0],S=m[1],C=Object(a.useState)(!1),y=Object(u.a)(C,2),k=y[0],P=y[1],D=Object(a.useState)([]),w=Object(u.a)(D,2),N=w[0],T=w[1],E="";function I(){return G.apply(this,arguments)}function G(){return(G=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Sequence Started"),x(n),console.log("Target point: ".concat(f," SET!")),"03179000"===f||"01646500"===f){e.next=7;break}alert("Please use one of the two supported use cases available: \n 03179000 \n or \n 01646500."),e.next=9;break;case 7:return e.next=9,b.a.get("https://waterservices.usgs.gov/nwis/iv/?site=".concat(f,"&format=").concat(t,"&period=").concat("P7D","&parameterCd=").concat(c)).then((function(e){return j(e.data)})).then(console.log("Data Received"));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){console.log(o),void 0!==o&&null!==o?(S(o.value.timeSeries[0].values[0].value),void 0===o.value?alert("Please Gather Data first!"):console.log("Sample Point Name: ".concat(o.value.timeSeries[0].sourceInfo.siteName)),void 0===o.value?alert("Please Gather Data first!"):(E=o.value.timeSeries[0].variable.unit.unitCode,console.log("Measurment in: ".concat(E))),F()):alert("Cant do that just yet!")}function F(){var e=[];g.map((function(t){e.push({x:g.indexOf(t),y:t.value})})),T(e)}return Object(a.useEffect)((function(){I()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),null===f||void 0===f?alert("Please Enter a value"):(console.log("Submitting value ".concat(f)),I())},children:[Object(h.jsx)("label",{children:"Please provide the sample point:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Please Enter Code",value:f,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Get Outflow Data"})]}),Object(h.jsx)("button",{onClick:function(){return M()},children:"Grab all Data"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return F()},children:"Conversion Data"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return e=Math.max.apply(Math,N.map((function(e){return e.y})))+100,console.log(e),e},children:"Max graph height:"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){P(!k)},children:"GraphIT!"}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"chartWrapper",children:k?Object(h.jsxs)("div",{className:"chart",style:{},children:[Object(h.jsx)("h5",{className:"chartTitle",children:o.value.timeSeries[0].sourceInfo.siteName}),Object(h.jsxs)(d.a,{fill:"red",opacity:"1",dontCheckIfEmpty:!0,yDomain:[20,600],children:[Object(h.jsx)(d.e,{}),Object(h.jsx)(d.b,{}),Object(h.jsx)(d.c,{data:N,size:"1"}),Object(h.jsx)(d.f,{title:"X Axis",tickTotal:8}),Object(h.jsx)(d.h,{title:"Outflow ft^3/s",tickTotal:10})]})]}):Object(h.jsx)("h3",{children:"No data selected"})})]})}var p=n(51),f=n(52),x=n(54),v=n(53);a.Component;var m=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("div",{children:Object(h.jsx)(O,{targetPoint:"03179000"})})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),g()},61:function(e,t,n){},62:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.d5d2c8f3.chunk.js.map