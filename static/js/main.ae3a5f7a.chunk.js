(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=n(4),l=n(5),m=n(1),d=n(7),s=n(6);var u=function(e){return c.a.createElement("div",{className:"todo-item"},c.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.key)}}),c.a.createElement("p",{style:e.item.completed?{fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null}," ",e.item.task," in ",e.item.time))},h=[{key:1,task:"Learn CSS",time:"10hr",completed:!1},{key:2,task:"Learn React",time:"2.5hr",completed:!1},{key:3,task:"Learn Django",time:"5hr",completed:!1}],p=(n(13),function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={todos:h},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.key===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return c.a.createElement(u,{key:t.key,item:t,handleChange:e.handleChange})}));return c.a.createElement("div",{className:"todo-list"},t)}}]),n}(a.Component));r.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ae3a5f7a.chunk.js.map