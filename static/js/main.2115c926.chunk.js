(this.webpackJsonpnote_editor_app=this.webpackJsonpnote_editor_app||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),n=c(8),s=c.n(n),o=c(9),r=c(3),l=(c(14),c(6)),j=c(4),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAA/9JREFUWEft1l1Mm1Ucx/EvW4VSNoFSNsfrYESBsgHxxivnhZkCm4CJWQK4QRaCmCxghxASDQkhQ0lQwqJyMQaldDRUU0jDkJeqARlGGKnAQEZdpqvxBbpEx1iN0JrnSUiG4taHDbKLntuenP+nv/N/zjk+brfbzWM4fLwwibviTUxiYHgT8yZ2bwLLy8soFAqpodx3/qZ6TDiT5+fnqa2tpauri5WVFaKioggLCyM1NZW6urqHRkqGmUwmztbWsri4yI83bvBMQgLO5WUCA4NxuV0sLd3GXy5nenoaHx+fTQMlwQYHB9FozuC45eBQciqHnn2O72emMJuMvPRyGs+/mIHT6cRk0OJ2rTI1NbW1sD/+vE3TBR11NVU4nXdRBOzC7XJzy7GAv7+CnLxcOvR6ThacIiI2np/tN7H0mklSx2M0GjeF8yix4dExqqur+WZkiCClkrz8Qpo/aaSnp4fUlGRkMhkpKSkIH8Ebb57mL7eMD9+vJi83h6jISEpLSyXjPIZlv3KU/bFxOBZ/JyJ8H8NDQ+uKTU5Okp6eTk1NDasyBeebPiYmJoprszOMj49vDexSn4VXMzM4kpbJ5a+/xG6/idzP7z/Fjh07hs1mo/B0GddtNr4avESAv5zh4WF8fX0l4TxKrPHcR1RWVhAWEY1C/gTfWa3/W0QAnK1v5O8VNx1t5wmQ+2IwGIiOjn70sIqKCrRtOlZdLg4mqTnX2Ihard6wUFpaGr/8tsDx10/R0/0pc1cnsVqthIeHP3pYWdnbtGq1qFQqsaFnZ2fR6/UbFhJ6TNeu50hGNv293fjJdiL0n9Th0VbOzc2RnJxMzXsfMNDbLfZMcXEx9fX16+q1tbUxNjaG/VcH1ivfYrf/xJ2lJcn9JSzqEUyYKEAsFguf91voMXfR3NxMZGQkZrMZl8vFyMgIWVlZHD78An39fezYsZO2dj3C17yZ4TFMWLyzs5OioiKmrs5wIi8XjUZDVVWVeG8qlUoSExNRqUIZtHzB0ezXMHW2i6f/U3v3SrZJggmrC5CGhgYq33kXw8WLqJMOYrfbCQndg9n0GfsPxJF7shDdhSau264ReyCOK+NjBAUFScJJhgmrT0xMkJmZKd6LiUkpLDoW+GF+juM5JzijeYun42IwdHRQUFAgYuLjExgdvSwJtynY2l8vLy9nYGAAVege8awKUQavS6W1tZWSkhJ27Q5EGRyITqcTry5PxkPBPCmwhtsXFoHz7h3xTPNkW7ccJuDz8/NF0O4ng1CFBCO86R40tgW2htNqtaKnpaVFxN5vbBtMQAj9JTzBO43GDR8B90K3FSb021p6j81WPgjy79+3NTEpOC9MSlrCXG9i3sSkJiB1/j+oQQKtRamdBAAAAABJRU5ErkJggg==",d=c(0),u=function(e){var t=e.onDeleteNote,c=e.activeNote,a=e.onUpdateNote,n=Object(i.useState)(c),s=Object(r.a)(n,2),o=s[0],u=s[1],A=function(e,t){u(Object(j.a)(Object(j.a)({},o),{},Object(l.a)({},e,t)))};return Object(i.useEffect)((function(){u(Object(j.a)({},c))}),[c]),c?Object(d.jsxs)("div",{className:"app-main",children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{type:"text",placeholder:"Search by title",className:"search-input"}),Object(d.jsx)("img",{src:b,alt:"search",style:{cursor:"pointer"}})]}),Object(d.jsxs)("div",{className:"app-main-note-edit",children:[Object(d.jsxs)("div",{className:"main-title-block",children:[Object(d.jsx)("p",{children:"Title"}),Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"Delete",height:50,width:41,onClick:function(){return t(c.id)},style:{cursor:"pointer"}})]}),Object(d.jsx)("input",{type:"text",id:"title",placeholder:"Note title",value:o.title,onChange:function(e){return A("title",e.target.value)},autoFocus:!0}),Object(d.jsx)("p",{children:"Description"}),Object(d.jsx)("textarea",{id:"body",placeholder:"Write your note here...",value:o.body,onChange:function(e){return A("body",e.target.value)}}),Object(d.jsx)("div",{className:"app-buttons",children:Object(d.jsx)("button",{onClick:function(){return a(Object(j.a)({},o))},className:"button-new-save",children:"Save"})})]})]}):Object(d.jsxs)("div",{className:"app-main",children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{type:"text",placeholder:"Search by title",className:"search-input"}),Object(d.jsx)("img",{src:b,alt:"search",style:{cursor:"pointer"}})]}),Object(d.jsx)("div",{className:"no-active-note",children:"No Active Note"})]})},A=function(e){var t=e.notes,c=e.onAddNote,i=e.activeNote,a=e.setActiveNote;return Object(d.jsxs)("div",{className:"app-sidebar",children:[Object(d.jsxs)("div",{className:"app-sidebar-header",children:[Object(d.jsx)("button",{children:"Title \u21c5"}),Object(d.jsx)("button",{children:"Date \u21c5"})]}),Object(d.jsx)("div",{className:"app-buttons",children:Object(d.jsx)("button",{onClick:c,className:"button-new-save",children:"+ New"})}),Object(d.jsx)("div",{className:"app-sidebar-notes",children:t.map((function(e){return Object(d.jsx)("div",{className:"app-sidebar-note",children:Object(d.jsx)("div",{className:"sidebar-note-title ".concat(e.id===i&&"active"),onClick:function(){return a(e.id)},children:Object(d.jsx)("strong",{className:"note-title",children:e.title})})},e.id)}))})]})},O=c(18);var p=function(){var e=Object(i.useState)(localStorage.notes?JSON.parse(localStorage.notes):[]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),s=Object(r.a)(n,2),l=s[0],j=s[1];return Object(i.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(c))}),[c]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"app-border",children:[Object(d.jsx)(A,{notes:c,onAddNote:function(){var e={id:Object(O.a)(),title:"Untitled Note",body:"",lastModified:Date.now()};a([e].concat(Object(o.a)(c)))},activeNote:l,setActiveNote:j}),Object(d.jsx)(u,{onDeleteNote:function(e){a(c.filter((function(t){return t.id!==e})))},activeNote:c.find((function(e){return e.id===l})),onUpdateNote:function(e){var t=c.map((function(t){return t.id===l?e:t}));a(t)}})]})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2115c926.chunk.js.map