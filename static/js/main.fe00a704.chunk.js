(this.webpackJsonpsendsay=this.webpackJsonpsendsay||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(16),i=n.n(r),o=(n(28),n(3)),l=n(11),u=n.n(l),d=n(14),m=n(7),p=n(8),b=n(6),j=n(10),h=n(9),f=(n(30),n(31),n(32),function(e){var t=e.input,n=e.tag,c=e.label,s=e.placeholder,r=e.position,i=e.meta,l=i.asyncValidating,u=i.touched,d=i.error;return Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("label",{className:"input-group__label",children:c}),Object(a.jsxs)("div",{className:l?"async-validating":"",children:["input"===n?Object(a.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{placeholder:s,className:"input-group__field input-group__field_input ".concat(r||"")})):Object(a.jsx)("textarea",Object(o.a)(Object(o.a)({},t),{},{placeholder:s,className:"input-group__field input-group__field_textarea ".concat(r||""),rows:"3"})),u&&d&&Object(a.jsx)("span",{className:"input-group__error",children:d})]})]})}),g=(n(33),"ADD_ATTACHMENT"),O="DELETE_ATTACHMENT",v="WIPE_ATTACHMENTS",x="ADD_MESSAGE",_="UPDATE_STATE",y=n(5),N=function(e){return-1!==["image/jpeg","image/jpg","image/png","image/gif","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/pdf","application/zip"].indexOf(e.type)&&e.size<=5242880},A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleAttach=a.handleAttach.bind(Object(b.a)(a)),a.handleDelete=a.handleDelete.bind(Object(b.a)(a)),a}return Object(p.a)(n,[{key:"handleAttach",value:function(e){var t=this,n=e.target.files[0];if(N(n)){var a=new FileReader;a.readAsDataURL(n),a.onload=function(){t.props.addAttachmentAction({name:n.name,content:a.result,encoding:"base64"})}}}},{key:"handleDelete",value:function(e){this.props.deleteAttachmentAction(e)}},{key:"render",value:function(){var e=this,t=this.props.attaches.map((function(t){return Object(a.jsxs)("li",{className:"attachment",children:[Object(a.jsx)("div",{className:"attachment__name",children:t.name}),Object(a.jsx)("button",{type:"button",className:"btn-delete",onClick:function(){return e.handleDelete(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.name)}));return Object(a.jsxs)(a.Fragment,{children:[0!==t.length&&Object(a.jsx)("ul",{className:"attachments",children:t}),Object(a.jsxs)("label",{htmlFor:"file-input",className:"file-label",children:["\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b",Object(a.jsx)("input",{id:"file-input",type:"file",onChange:this.handleAttach})]})]})}}]),n}(s.a.Component),E=Object(y.b)((function(e){return Object(o.a)({},e.attachment)}),(function(e){return{addAttachmentAction:function(t){return e(function(e){return{type:g,payload:e}}(t))},deleteAttachmentAction:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(A),k=(n(40),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={hidden:!0},a.dragEnter=a.dragEnter.bind(Object(b.a)(a)),a.dragOver=a.dragOver.bind(Object(b.a)(a)),a.dragLeave=a.dragLeave.bind(Object(b.a)(a)),a.fileDrop=a.fileDrop.bind(Object(b.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("drop-container").parentElement.addEventListener("dragenter",this.dragEnter)}},{key:"componentWillUnmount",value:function(){document.getElementById("drop-container").parentElement.removeEventListener("dragenter",this.dragEnter)}},{key:"dragEnter",value:function(e){e.preventDefault(),this.setState({hidden:!1})}},{key:"dragOver",value:function(e){e.preventDefault()}},{key:"dragLeave",value:function(e){e.preventDefault(),this.setState({hidden:!0})}},{key:"fileDrop",value:function(e){var t=this;e.preventDefault();var n=e.dataTransfer.files[0];if(n&&N(n)){var a=new FileReader;a.readAsDataURL(n),a.onload=function(){t.props.addAttachmentAction({name:n.name,content:a.result,encoding:"base64"})}}this.setState({hidden:!0})}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"drop-container",className:"drop-container ".concat(this.state.hidden?"hidden":""),onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDrop:this.fileDrop,children:Object(a.jsxs)("div",{className:"drop-message",children:[Object(a.jsx)("p",{children:"\u0411\u0440\u043e\u0441\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430, \u044f \u043b\u043e\u0432\u043b\u044e"}),Object(a.jsx)("p",{children:"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 (jpg, png, gif), \u043e\u0444\u0438\u0441\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (doc, xls, pdf) \u0438 zip-\u0430\u0440\u0445\u0438\u0432\u044b. \u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u0430 \u0434\u043e 5 \u041c\u0411"})]})})})}}]),n}(s.a.Component)),D=Object(y.b)((function(e){return Object(o.a)({},e.attachment)}),(function(e){return{addAttachmentAction:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))(k),w=n(12),S=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,T=function(e){var t={};return e.fromName||(t.fromName="\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),S.test(e.fromEmail)||(t.fromEmail="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Email"),e.fromEmail||(t.fromEmail="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),e.toName||(t.toName="\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),S.test(e.mca)||(t.mca="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Email"),e.mca||(t.mca="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),e.subject||(t.subject="\u0422\u0435\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"),e.message||(t.message="\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),t};var C=Object(y.b)(null,(function(e){return{wipeAttachmentsAction:function(){return e({type:v,payload:{}})}}}))((function(e){var t=e.handleSubmit;return Object(a.jsx)(w.b,{onSubmit:t,validate:T,render:function(t){var n=t.handleSubmit,c=t.form;t.submitting,t.pristine,t.values;return Object(a.jsxs)("form",{className:"sending-form",onSubmit:function(t){n(t).then((function(){c.restart(),e.wipeAttachmentsAction()}))},children:[Object(a.jsx)("h1",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)(w.a,{name:"fromName",tag:"input",component:f,label:"\u041e\u0442 \u043a\u043e\u0433\u043e",placeholder:"\u0418\u043c\u044f",position:"input-group__field_left"}),Object(a.jsx)(w.a,{name:"fromEmail",tag:"input",component:f,placeholder:"Email",position:"input-group__field_right"})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)(w.a,{name:"toName",tag:"input",component:f,label:"\u041a\u043e\u043c\u0443",placeholder:"\u0418\u043c\u044f",position:"input-group__field_left"}),Object(a.jsx)(w.a,{name:"mca",tag:"input",component:f,placeholder:"Email",position:"input-group__field_right"})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)(w.a,{name:"subject",tag:"input",component:f,label:"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430"})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)(w.a,{name:"message",tag:"textarea",component:f,label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(a.jsx)("div",{className:"input-field input-field_column",children:Object(a.jsx)(E,{})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{type:"submit",className:"btn-send",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})}),Object(a.jsx)(D,{})]})}})})),L=(n(41),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.messages.map((function(e){return Object(a.jsxs)("tr",{className:"messages-table__tr",children:[Object(a.jsx)("td",{className:"messages-table__td",children:e.date.toDateString()}),Object(a.jsx)("td",{className:"messages-table__td",children:e.subject}),Object(a.jsx)("td",{className:"messages-table__td\n                ".concat("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"===e.status?"messages-table__td_sent":"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"===e.status?"messages-table__td_queue":"messages-table__td_error"),children:e.status})]},e.trackId)})),t=Object(a.jsxs)("table",{className:"messages-table",children:[Object(a.jsx)("thead",{className:"messages-table__head",children:Object(a.jsxs)("tr",{className:"messages-table__tr",children:[Object(a.jsx)("th",{className:"messages-table__th",children:"\u0414\u0430\u0442\u0430"}),Object(a.jsx)("th",{className:"messages-table__th",children:"\u0422\u0435\u043c\u0430"}),Object(a.jsx)("th",{className:"messages-table__th",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),Object(a.jsx)("tbody",{children:e})]});return Object(a.jsxs)("div",{className:"messages",children:[Object(a.jsx)("h2",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),0===e.length?Object(a.jsx)("div",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438\u0441\u044c"}):t]})}}]),n}(s.a.Component)),I=Object(y.b)((function(e){return Object(o.a)({},e.message)}))(L),F=n.p+"static/media/logo.61ec3b45.svg",M=n(22),B=new(n.n(M).a)({apiKey:"19G37aBHzIr26V1NWF5kkqaVBguhD60740UgZmn_jXsLQrNuQkbPr79DPCqCu-5T2lBk5se4482wicksEcxteDx7M"}),P=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={action:"issue.send.test",letter:{subject:t.subject,"from.name":t.fromName,"from.email":t.fromEmail,"to.name":t.toName,message:{text:t.message},attaches:n},sendwhen:"test",mca:[t.mca]},console.log(a),e.next=4,B.request(a);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={action:"track.get",id:t},e.next=3,B.request(n);case 3:if(!((a=e.sent).obj.status>-1)){e.next=12;break}return e.next=7,new Promise((function(e){return setTimeout(e,1e3)}));case 7:return e.next=9,q(t);case 9:return e.abrupt("return",e.sent);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props.attaches,P(t,n).then((function(e){var n=e["track.id"];a.props.addMessageAction({date:new Date,subject:t.subject,status:"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438",trackId:n}),q(n).then((function(e){a.props.updateStatusAction({trackId:n,status:"-1"===e.obj.status?"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e":"\u041e\u0448\u0438\u0431\u043a\u0430"})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{className:"logo",src:F,alt:"logo"}),Object(a.jsx)(C,{handleSubmit:this.handleSubmit}),Object(a.jsx)(I,{})]})}}]),n}(s.a.Component),z=Object(y.b)((function(e){return Object(o.a)({},e.attachment)}),(function(e){return{addMessageAction:function(t){return e(function(e){return{type:x,payload:e}}(t))},updateStatusAction:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))(U),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},R=n(13),V=n(15),W=Object(R.b)({attachment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{attaches:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{attaches:[].concat(Object(V.a)(e.attaches),[t.payload])};case O:return Object(o.a)(Object(o.a)({},e),{},{attaches:Object(V.a)(e.attaches.filter((function(e){return e!==t.payload})))});case v:return{attaches:[]};default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{messages:[].concat(Object(V.a)(e.messages),[t.payload])};case _:return{messages:e.messages.map((function(e){return e.trackId===t.payload.trackId?Object(o.a)(Object(o.a)({},e),{},{status:t.payload.status}):e}))};default:return e}}}),G=Object(R.c)(W);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y.a,{store:G,children:Object(a.jsx)(z,{})})}),document.getElementById("root")),H()}},[[42,1,2]]]);
//# sourceMappingURL=main.fe00a704.chunk.js.map