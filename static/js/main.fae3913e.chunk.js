(this.webpackJsonpsendsay=this.webpackJsonpsendsay||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(16),i=n.n(s),o=(n(28),n(3)),u=n(7),l=n.n(u),d=n(14),m=n(9),p=n(10),b=n(6),j=n(13),h=n(12),f=(n(30),n(31),n(32),function(e){var t=e.input,n=e.tag,r=e.label,c=e.placeholder,s=e.position,i=e.meta,u=i.asyncValidating,l=i.touched,d=i.error;return Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("label",{className:"input-group__label",children:r}),Object(a.jsxs)("div",{className:u?"async-validating":"",children:["input"===n?Object(a.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{placeholder:c,className:"input-group__field input-group__field_input ".concat(s||"")})):Object(a.jsx)("textarea",Object(o.a)(Object(o.a)({},t),{},{placeholder:c,className:"input-group__field input-group__field_textarea ".concat(s||""),rows:"3"})),l&&d&&Object(a.jsx)("span",{className:"input-group__error",children:d})]})]})}),g=(n(33),n(5)),O="ADD_ATTACHMENT",v="DELETE_ATTACHMENT",x="ATTACHMENT_ERROR",_="WIPE_ATTACHMENTS",N="ADD_MESSAGE",y="UPDATE_STATE",A=function(e){return{type:O,payload:e}},E=function(e){return{type:x,payload:e}},k=function(e){return-1===["image/jpeg","image/jpg","image/png","image/gif","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/pdf","application/zip"].indexOf(e.type)?{value:!1,error:"\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430"}:e.size>5242880?{value:!1,error:"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 (5 \u041c\u0411)"}:{value:!0,error:""}};var D=Object(g.b)((function(e){return Object(o.a)({},e.attachment)}),(function(e){return{addAttachmentAction:function(t){return e(A(t))},deleteAttachmentAction:function(t){return e(function(e){return{type:v,payload:e}}(t))},attachmentErrorAction:function(t){return e(E(t))}}}))((function(e){var t=e.attaches.map((function(t){return Object(a.jsxs)("li",{className:"attachment",children:[Object(a.jsx)("div",{className:"attachment__name",children:t.name}),Object(a.jsx)("button",{type:"button",className:"btn-delete",onClick:function(){return n=t,void e.deleteAttachmentAction(n);var n},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.name)}));return Object(a.jsxs)(a.Fragment,{children:[0!==t.length&&Object(a.jsx)("ul",{className:"attachments",children:t}),Object(a.jsxs)("div",{className:"file",children:[Object(a.jsxs)("label",{htmlFor:"file__input",className:"file__label",children:["\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b",Object(a.jsx)("input",{id:"file__input",type:"file",onChange:function(t){var n=t.target.files[0],a=k(n);if(a.value){var r=new FileReader;r.readAsDataURL(n),r.onload=function(){e.addAttachmentAction({name:n.name,content:r.result,encoding:"base64"})}}e.attachmentErrorAction(a.error)}})]}),e.error&&Object(a.jsx)("span",{className:"file__error",children:e.error})]})]})})),w=(n(40),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={hidden:!0},a.dragEnter=a.dragEnter.bind(Object(b.a)(a)),a.dragOver=a.dragOver.bind(Object(b.a)(a)),a.dragLeave=a.dragLeave.bind(Object(b.a)(a)),a.fileDrop=a.fileDrop.bind(Object(b.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("drop-container").parentElement.addEventListener("dragenter",this.dragEnter)}},{key:"componentWillUnmount",value:function(){document.getElementById("drop-container").parentElement.removeEventListener("dragenter",this.dragEnter)}},{key:"dragEnter",value:function(e){e.preventDefault(),this.setState({hidden:!1})}},{key:"dragOver",value:function(e){e.preventDefault()}},{key:"dragLeave",value:function(e){e.preventDefault(),this.setState({hidden:!0})}},{key:"fileDrop",value:function(e){var t=this;e.preventDefault();var n=e.dataTransfer.files[0],a=k(n);if(n&&a.value){var r=new FileReader;r.readAsDataURL(n),r.onload=function(){t.props.addAttachmentAction({name:n.name,content:r.result,encoding:"base64"})}}this.props.updateAttachmentErrorAction(a.error),this.setState({hidden:!0})}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"drop-container",className:"drop-container ".concat(this.state.hidden?"hidden":""),onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDrop:this.fileDrop,children:Object(a.jsxs)("div",{className:"drop-message",children:[Object(a.jsx)("p",{children:"\u0411\u0440\u043e\u0441\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430, \u044f \u043b\u043e\u0432\u043b\u044e"}),Object(a.jsx)("p",{children:"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 (jpg, png, gif), \u043e\u0444\u0438\u0441\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (doc, xls, pdf) \u0438 zip-\u0430\u0440\u0445\u0438\u0432\u044b. \u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u0430 \u0434\u043e 5 \u041c\u0411"})]})})})}}]),n}(c.a.Component)),S=Object(g.b)((function(e){return Object(o.a)({},e.attachment)}),(function(e){return{addAttachmentAction:function(t){return e(A(t))},updateAttachmentErrorAction:function(t){return e(E(t))}}}))(w),T=n(8),C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,L=function(e){var t={};return e.fromName||(t.fromName="\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),C.test(e.fromEmail)||(t.fromEmail="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Email"),e.fromEmail||(t.fromEmail="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),e.toName||(t.toName="\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),C.test(e.mca)||(t.mca="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Email"),e.mca||(t.mca="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),e.subject||(t.subject="\u0422\u0435\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"),e.message||(t.message="\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),t};var I=Object(g.b)(null,(function(e){return{wipeAttachmentsAction:function(){return e({type:_,payload:{}})}}}))((function(e){var t=e.handleSubmit;return Object(a.jsx)(T.b,{onSubmit:t,validate:L,render:function(t){var n=t.handleSubmit,r=t.form;t.submitting,t.pristine,t.values;return Object(a.jsxs)("form",{className:"sending-form",onSubmit:function(t){n(t).then((function(){r.restart(),e.wipeAttachmentsAction()}))},children:[Object(a.jsx)("h1",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)(T.a,{name:"fromName",tag:"input",component:f,label:"\u041e\u0442 \u043a\u043e\u0433\u043e",placeholder:"\u0418\u043c\u044f",position:"input-group__field_left"}),Object(a.jsx)(T.a,{name:"fromEmail",tag:"input",component:f,placeholder:"Email",position:"input-group__field_right"})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)(T.a,{name:"toName",tag:"input",component:f,label:"\u041a\u043e\u043c\u0443",placeholder:"\u0418\u043c\u044f",position:"input-group__field_left"}),Object(a.jsx)(T.a,{name:"mca",tag:"input",component:f,placeholder:"Email",position:"input-group__field_right"})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)(T.a,{name:"subject",tag:"input",component:f,label:"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430"})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)(T.a,{name:"message",tag:"textarea",component:f,label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(a.jsx)("div",{className:"input-field input-field_column",children:Object(a.jsx)(D,{})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{type:"submit",className:"btn-send",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})}),Object(a.jsx)(S,{})]})}})})),F=(n(41),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.messages.map((function(e){return Object(a.jsxs)("tr",{className:"messages-table__tr",children:[Object(a.jsx)("td",{className:"messages-table__td",children:e.date.toDateString()}),Object(a.jsx)("td",{className:"messages-table__td",children:e.subject}),Object(a.jsx)("td",{className:"messages-table__td\n                ".concat("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"===e.status?"messages-table__td_sent":"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"===e.status?"messages-table__td_queue":"messages-table__td_error"),children:e.status})]},e.trackId)})),t=Object(a.jsxs)("table",{className:"messages-table",children:[Object(a.jsx)("thead",{className:"messages-table__head",children:Object(a.jsxs)("tr",{className:"messages-table__tr",children:[Object(a.jsx)("th",{className:"messages-table__th",children:"\u0414\u0430\u0442\u0430"}),Object(a.jsx)("th",{className:"messages-table__th",children:"\u0422\u0435\u043c\u0430"}),Object(a.jsx)("th",{className:"messages-table__th",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),Object(a.jsx)("tbody",{children:e})]});return Object(a.jsxs)("div",{className:"messages",children:[Object(a.jsx)("h2",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),0===e.length?Object(a.jsx)("div",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438\u0441\u044c"}):t]})}}]),n}(c.a.Component)),M=Object(g.b)((function(e){return Object(o.a)({},e.message)}))(F),B=n.p+"static/media/logo.61ec3b45.svg",P=n(22),R=new(n.n(P).a)({apiKey:"19G37aBHzIr26V1NWF5kkqaVBguhD60740UgZmn_jXsLQrNuQkbPr79DPCqCu-5T2lBk5se4482wicksEcxteDx7M"}),q=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={action:"issue.send.test",letter:{subject:t.subject,"from.name":t.fromName,"from.email":t.fromEmail,"to.name":t.toName,message:{text:t.message},attaches:n},sendwhen:"test",mca:[t.mca]},console.log(a),e.next=4,R.request(a);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={action:"track.get",id:t},e.next=3,R.request(n);case 3:if(!((a=e.sent).obj.status>-1)){e.next=12;break}return e.next=7,new Promise((function(e){return setTimeout(e,1e3)}));case 7:return e.next=9,H(t);case 9:return e.abrupt("return",e.sent);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props.attaches,q(t,n).then((function(e){var n=e["track.id"];a.props.addMessageAction({date:new Date,subject:t.subject,status:"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438",trackId:n}),H(n).then((function(e){a.props.updateStatusAction({trackId:n,status:"-1"===e.obj.status?"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e":"\u041e\u0448\u0438\u0431\u043a\u0430"})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{className:"logo",src:B,alt:"logo"}),Object(a.jsx)(I,{handleSubmit:this.handleSubmit}),Object(a.jsx)(M,{})]})}}]),n}(c.a.Component),z=Object(g.b)((function(e){return Object(o.a)({},e.attachment)}),(function(e){return{addMessageAction:function(t){return e(function(e){return{type:N,payload:e}}(t))},updateStatusAction:function(t){return e(function(e){return{type:y,payload:e}}(t))}}}))(U),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},W=n(11),G=n(15),J=Object(W.b)({attachment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{attaches:[],error:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(o.a)(Object(o.a)({},e),{},{attaches:[].concat(Object(G.a)(e.attaches),[t.payload])});case v:return Object(o.a)(Object(o.a)({},e),{},{attaches:Object(G.a)(e.attaches.filter((function(e){return e!==t.payload})))});case _:return{attaches:[],error:""};case x:return Object(o.a)(Object(o.a)({},e),{},{error:t.payload});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{messages:[].concat(Object(G.a)(e.messages),[t.payload])};case y:return{messages:e.messages.map((function(e){return e.trackId===t.payload.trackId?Object(o.a)(Object(o.a)({},e),{},{status:t.payload.status}):e}))};default:return e}}}),Q=Object(W.c)(J);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g.a,{store:Q,children:Object(a.jsx)(z,{})})}),document.getElementById("root")),V()}},[[42,1,2]]]);
//# sourceMappingURL=main.fae3913e.chunk.js.map