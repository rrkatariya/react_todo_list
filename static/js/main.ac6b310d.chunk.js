(this.webpackJsonp1_react_app=this.webpackJsonp1_react_app||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),o=(n(15),n(6)),l=n(3),u=n(4),s=n(7),m=n(5),d=n(8);n(16),n(17);function p(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){return e.updateItem(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){return e.deleteItem(t.key)}},"X"))))}));return r.a.createElement("div",null,r.a.createElement("div",null,t))}var h=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){n.setState({currentItem:{text:e.target.value,key:Date.now()}})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(o.a)(n.state.items),[t]);n.setState({items:a,currentItem:{text:"",key:""}})}},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.updateItem=function(e,t){var a=n.state.items;a.map((function(n){n.key===t&&(n.text=e)})),n.setState({items:a})},n.state={items:[],currentItem:{text:"",key:""}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{className:"H1_cls"},"To-Do List"),r.a.createElement("form",{id:"to-do-form"},r.a.createElement("input",{type:"text",value:this.state.currentItem.text,placeholder:"Add Task",onChange:this.handleInput}),r.a.createElement("button",{type:"submit",onClick:this.addItem},"+")),r.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem,updateItem:this.updateItem})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.ac6b310d.chunk.js.map