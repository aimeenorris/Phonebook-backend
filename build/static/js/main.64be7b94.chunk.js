(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),l=t(14),c=t.n(l),r=t(4),u=t(2),i=function(e){var n=e.onClick,t=e.text;return console.log("Rendering button. onclick=".concat(onclick)),a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:n},t))},m=function(e){var n=e.person,t=e.onDelete;return a.a.createElement("li",{key:n.id},n.name," ",n.number," ","  ",a.a.createElement(i,{onClick:t,text:"Delete"}))},s=function(e){var n=e.peopleToShow,t=e.onDelete;return a.a.createElement("div",null,n.map((function(e){return a.a.createElement(m,{key:e.id,person:e,onDelete:function(){return t(e.id,e.name)}})})))},f=function(e){return a.a.createElement("div",null,"filter shown with:",a.a.createElement("input",{value:e.filterCriteria,onChange:e.handleFilterChange}))},d=function(e){var n=e.message;return null===n?null:a.a.createElement("div",{className:"error"},n)},g=function(e){var n=e.message;return null===n?null:a.a.createElement("div",{className:"message"},n)},h=t(3),b=t.n(h),p="/api/persons",E=function(){return b.a.get(p).then((function(e){return e.data}))},v=function(e){return b.a.post(p,e).then((function(e){return e.data}))},w=function(e,n){return b.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return b.a.delete("".concat(p,"/").concat(e)).then((function(e){return e}))},k=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],l=n[1],c=Object(o.useState)(""),i=Object(u.a)(c,2),m=i[0],h=i[1],b=Object(o.useState)(""),p=Object(u.a)(b,2),k=p[0],O=p[1],C=Object(o.useState)(null),D=Object(u.a)(C,2),S=D[0],T=D[1],y=Object(o.useState)(null),N=Object(u.a)(y,2),x=N[0],A=N[1],F=Object(o.useState)(""),I=Object(u.a)(F,2),J=I[0],L=I[1];Object(o.useEffect)((function(){console.log("effect"),E().then((function(e){console.log("promise fulfilled"),l(e)}))}),[]),console.log("render",t.length,"persons");var B=""===J?t:t.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())}));return a.a.createElement("div",null,a.a.createElement("h2",null," Phonebook "),a.a.createElement(d,{message:S}),a.a.createElement(g,{message:x}),a.a.createElement(f,{filterCriteria:J,handleFilterChange:function(e){console.log(e.target.value),L(e.target.value)}}),a.a.createElement("h2",null," Add a New Number"),a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),console.log("button clicked",e.target),t.some((function(e){return e.name===m})))if(!0===window.confirm("".concat(m," is already added to the phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===m})),o=Object(r.a)(Object(r.a)({},n),{},{number:k});w(o.id,o).then((function(e){console.log("updated person"),l(t.map((function(n){return n.name!==m?n:e}))),A("Changed ".concat(e.name,"'s number")),setTimeout((function(){A(null)}),5e3),h(""),O("")})).catch((function(e){T("Information of ".concat(o.name,"' has already been removed from the server")),h(""),O(""),setTimeout((function(){T(null)}),5e3)}))}else h(""),O("");else{var a={name:m,number:k,id:t.length+1};v(a).then((function(e){console.log("added person"),l(t.concat(a)),A("Added ".concat(a.name)),setTimeout((function(){A(null)}),5e3),h(""),O("")})).catch((function(e){T("Error creating ".concat(a.name)),h(""),O(""),setTimeout((function(){T(null)}),5e3)}))}console.log(t)}},a.a.createElement("div",null,a.a.createElement("p",null,"name: ",a.a.createElement("input",{value:m,onChange:function(e){console.log(e.target.value),h(e.target.value),console.log("new name: ".concat(m))}})),a.a.createElement("p",null,"number: ",a.a.createElement("input",{value:k,onChange:function(e){console.log(e.target.value),O(e.target.value),console.log("new number: ".concat(k))}}))),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Add"))),a.a.createElement("h2",null,"Numbers"),a.a.createElement("ul",null,a.a.createElement(s,{peopleToShow:B,onDelete:function(e,n){console.log(t),console.log("button clicked for ".concat(n)),!0===window.confirm("Delete ".concat(n," ?"))?j(e).then((function(o){console.log("deleted person"),l(t.filter((function(n){return n.id!==e}))),A("Deleted ".concat(n)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){T("Error deleting"),h(""),O(""),setTimeout((function(){T(null)}),5e3)})):console.log("Delete canceled")}})))};t(37);c.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.64be7b94.chunk.js.map