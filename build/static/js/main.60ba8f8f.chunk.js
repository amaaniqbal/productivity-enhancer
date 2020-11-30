(this["webpackJsonpmonday-integration-quickstart-app"]=this["webpackJsonpmonday-integration-quickstart-app"]||[]).push([[0],{207:function(e,t,a){e.exports=a(374)},212:function(e,t,a){},213:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(212),a(61)),i=a(62),u=a(65),m=a(64),s=(a(213),a(100)),d=a(426),E=a(419),f=a(414),p=a(420),v=a(422),g=a(418),b=a(423),h=a(421),x=a(417),y=a(415),k=a(376),C=a(193),j=a.n(C),w=a(192),M=a.n(w),O=a(428),_=a(410),P=a(194),S=a.n(P),H=a(409),I=a(427),T=a(416),z=a(412),A=a(413),B=a(191),D=a.n(B),F=a(190),N=a.n(F),q=a(429),L=a(69),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={};this.props.data.items.forEach((function(t){var a=t.column_values.find((function(e){return"Most Productive Hours"===e.title})).text;e[a]=e[a]+1||1}));var t=[];for(var a in e)t.push({productiveHour:a,count:e[a]});return l.a.createElement(L.Chart,{id:"bar",palette:"Soft",dataSource:t},l.a.createElement(L.CommonSeriesSettings,{argumentField:"productiveHour",valueField:"count",type:"bar",ignoreEmptyPoints:!0}),l.a.createElement(L.SeriesTemplate,{nameField:"productiveHour"}),l.a.createElement(L.Export,{enabled:!0}),l.a.createElement(L.Title,{text:"Most Productive Hours - Bar Chart"}))}}]),a}(l.a.Component),W=a(39),$=a.n(W),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={};this.props.data.items.forEach((function(t){var a=t.column_values.find((function(e){return"Most Productive Hours"===e.title})).text;e[a]=e[a]+1||1}));var t=[];for(var a in e)t.push({productiveHour:a,val:e[a]});return l.a.createElement($.a,{id:"pie",type:"doughnut",title:"Most Productive Hours - Donut Chart",palette:"Soft Pastel",dataSource:t},l.a.createElement(W.Series,{argumentField:"productiveHour"},l.a.createElement(W.Label,{visible:!0},l.a.createElement(W.Connector,{visible:!0}))),l.a.createElement(W.Export,{enabled:!0}),l.a.createElement(W.Legend,{margin:0,horizontalAlignment:"right",verticalAlignment:"top"}),l.a.createElement(W.Tooltip,{enabled:!0,customizeTooltip:this.customizeTooltip},l.a.createElement(W.Format,null)))}},{key:"customizeTooltip",value:function(e){return{text:"".concat(e.argument," : ").concat((100*e.percent).toFixed(2),"%")}}}]),a}(l.a.Component),V=Object(H.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),G=l.a.forwardRef((function(e,t){return l.a.createElement(q.a,Object.assign({direction:"up",ref:t},e))}));function K(e){var t=V(),a=l.a.useState(!1),n=Object(s.a)(a,2),r=n[0],c=n[1],o=function(){c(!1)};return l.a.createElement("div",null,l.a.createElement(_.a,{variant:"contained",color:"primary",onClick:function(){c(!0)},startIcon:l.a.createElement(N.a,null)},"Visualize Data"),l.a.createElement(I.a,{fullScreen:!0,open:r,onClose:o,TransitionComponent:G},l.a.createElement(z.a,{className:t.appBar},l.a.createElement(A.a,null,l.a.createElement(f.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"close"},l.a.createElement(D.a,null)),l.a.createElement(y.a,{variant:"h6",className:t.title},"Visualizations"))),l.a.createElement(d.a,{m:3,display:"flex",maxHeight:400},l.a.createElement(d.a,{width:.5,p:2},l.a.createElement(R,{data:e.data})),l.a.createElement(T.a,{orientation:"vertical",flexItem:!0}),l.a.createElement(d.a,{width:.5,p:2},l.a.createElement(J,{data:e.data})))))}function Q(e){var t,a=e.row,n=l.a.useState(!1),r=Object(s.a)(n,2),c=r[0],o=r[1],i=a.column_values.find((function(e){return"Name"===e.title})).text,u=a.column_values.find((function(e){return"Email"===e.title})).text,m=a.column_values.find((function(e){return"Role"===e.title})).text,b=a.column_values.find((function(e){return"Team"===e.title})).text,k=a.column_values.find((function(e){return"Most Productive Hours"===e.title})).text;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,{"aria-label":"expand row",size:"small",onClick:function(){return o(!c)}},c?l.a.createElement(M.a,null):l.a.createElement(j.a,null))),l.a.createElement(g.a,{scope:"row"},i),l.a.createElement(g.a,null,u),l.a.createElement(g.a,null,m),l.a.createElement(g.a,null,b),l.a.createElement(g.a,{style:{backgroundColor:(t=k,"Morning (9 - 12)"===t?"#00c875":"Afternoon (12 - 3)"===t?"#ffcb00":"#784bd1")}},k)),l.a.createElement(x.a,null,l.a.createElement(g.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},l.a.createElement(d.a,null,l.a.createElement(E.a,{in:c,timeout:"auto",unmountOnExit:!0},l.a.createElement(d.a,{margin:1},l.a.createElement(d.a,{display:"flex",justifyContent:"center"},l.a.createElement(y.a,{variant:"span",gutterBottom:!0,component:"div"},l.a.createElement("strong",null,"Productive Hours"))),l.a.createElement(p.a,{size:"small","aria-label":"purchases"},l.a.createElement(h.a,null,l.a.createElement(x.a,{style:{backgroundColor:"#c4c4c4"}},l.a.createElement(g.a,{align:"center"},"9 - 10 AM"),l.a.createElement(g.a,{align:"center"},"10 - 11 AM"),l.a.createElement(g.a,{align:"center"},"11 AM - 12 PM"),l.a.createElement(g.a,{align:"center"},"12 - 1 PM"),l.a.createElement(g.a,{align:"center"},"1 - 2 PM"),l.a.createElement(g.a,{align:"center"},"2 - 3 PM"),l.a.createElement(g.a,{align:"center"},"3 - 4 PM"),l.a.createElement(g.a,{align:"center"},"4 - 5 PM"),l.a.createElement(g.a,{align:"center"},"5 - 6 PM"))),l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(g.a,{scope:"row",align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"9-10"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"10-11"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"11-12"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"12-1"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"1-2"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"2-3"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"3-4"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"4-5"===e.title})).text})),l.a.createElement(g.a,{align:"center"},l.a.createElement(O.a,{disabled:!0,checked:"v"===a.column_values.find((function(e){return"5-6"===e.title})).text})))))))))))}function U(e){return l.a.createElement(d.a,{py:1,px:3},l.a.createElement(d.a,{my:1,display:"flex"},l.a.createElement(d.a,{component:"h2",flexGrow:1,color:"white"},""!==e.settings.heading?e.settings.heading:e.data.name),l.a.createElement(d.a,{display:"flex",flexDirection:"column",justifyContent:"center"},l.a.createElement(d.a,{display:"flex"},l.a.createElement(d.a,{mr:2},l.a.createElement(K,{data:e.data})),l.a.createElement(d.a,null,l.a.createElement(_.a,{variant:"contained",color:"secondary",href:"https://forms.monday.com/forms/ef29872dcd363e280ed03fff062d071f",startIcon:l.a.createElement(S.a,null)},"Create Entry"))))),l.a.createElement(d.a,{boxShadow:3},l.a.createElement(b.a,{component:k.a,style:{maxHeight:400}},l.a.createElement(p.a,{"aria-label":"collapsible table",stickyHeader:!0,style:{background:e.settings.tableColor}},l.a.createElement(h.a,null,l.a.createElement(x.a,null,l.a.createElement(g.a,null),l.a.createElement(g.a,null,l.a.createElement("strong",null,"Name")),l.a.createElement(g.a,null,l.a.createElement("strong",null,"Email")),l.a.createElement(g.a,null,l.a.createElement("strong",null,"Role")),l.a.createElement(g.a,null,l.a.createElement("strong",null,"Team")),l.a.createElement(g.a,null,l.a.createElement("strong",null,"Most Productive Hours")))),l.a.createElement(v.a,null,e.data.items.map((function(e){return l.a.createElement(Q,{key:e.name,row:e})})))))))}var X=a(425),Y=a(424),Z=a(195),ee=a.n(Z)()(),te=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={settings:{},context:{boardIds:[882172337]},name:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;ee.listen("settings",(function(t){e.setState({settings:t.data}),console.log(t.data)})),ee.listen("context",(function(t){e.setState({context:t.data}),console.log(t.data),ee.api("query ($boardIds: [Int]) {\n            boards(ids: $boardIds) {\n              name\n              items {\n                name\n                column_values {\n                  title\n                  text\n                }\n              }\n            }\n          }",{variables:{boardIds:e.state.context.boardIds}}).then((function(t){e.setState({boardData:t.data})}))}))}},{key:"render",value:function(){return console.log(this.state),this.state.boardData?l.a.createElement("div",{className:"App",style:{background:this.state.settings.background}},l.a.createElement(X.a,{maxWidth:"lg"},l.a.createElement(U,{settings:this.state.settings,data:this.state.boardData.boards[0]}))):l.a.createElement(d.a,{pt:5,display:"flex",justifyContent:"center"},l.a.createElement(Y.a,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[207,1,2]]]);
//# sourceMappingURL=main.60ba8f8f.chunk.js.map