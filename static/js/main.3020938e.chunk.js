(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.f3ad7664.svg"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=(a(25),a(5)),i=a(1),o=function(e){var t=e.image,a=e.id,n=e.name,r=e.info,l=e.glass;return c.a.createElement("article",{className:"cocktail"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t,alt:n})),c.a.createElement("div",{className:"cocktail-footer"},c.a.createElement("h3",null,n),c.a.createElement("h4",null,l),c.a.createElement("p",null,r),c.a.createElement(s.b,{to:"/cocktail/".concat(a),className:"btn btn-primary"},"details")))},m=function(){return c.a.createElement("div",{className:"loader"})},u=a(9),E=a.n(u),d=a(11),p=a(8),f=c.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(p.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)("a"),o=Object(p.a)(i,2),m=o[0],u=o[1],b=Object(n.useState)([]),k=Object(p.a)(b,2),h=k[0],v=k[1],g=Object(n.useCallback)(Object(d.a)(E.a.mark((function e(){var t,a,n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,(n=a.drinks)?(c=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),v(c)):v([]),s(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),s(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[m]);return Object(n.useEffect)((function(){g()}),[m,g]),c.a.createElement(f.Provider,{value:{loading:l,cocktails:h,setSearchTerm:u}},t)},k=function(){return Object(n.useContext)(f)},h=function(){var e=k(),t=e.cocktails;return e.loading?c.a.createElement(m,null):t.length<1?c.a.createElement("h2",{className:"section-title"},"No cocktails matched your search criteria"):c.a.createElement("section",{className:"section"},c.a.createElement("h2",{className:"section-title"},"cocktails"),c.a.createElement("div",{className:"cocktails-center"},t.map((function(e){return c.a.createElement(o,Object.assign({key:e.id},e))}))))},v=function(){var e=k().setSearchTerm,t=c.a.useRef("");return c.a.useEffect((function(){t.current.focus()}),[]),c.a.createElement("section",{className:"section search"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"name"},"Search your favorite cocktail"),c.a.createElement("input",{type:"text",id:"name",ref:t,onChange:function(){e(t.current.value)}}))))},g=function(){return c.a.createElement("main",null,c.a.createElement(v,null),c.a.createElement(h,null))},N=function(){return c.a.createElement("section",{className:"section about-section"},c.a.createElement("h1",{className:"section-title"},"about us"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis optio dolorum hic voluptas itaque quia, recusandae tempore distinctio necessitatibus at natus nesciunt, inventore consequatur quam commodi autem assumenda. Architecto cum sunt autem commodi aliquam maiores est voluptate voluptas. Tempora."))},j="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",O=function(){var e=Object(i.f)().id,t=Object(n.useState)(!1),a=Object(p.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),u=Object(p.a)(o,2),f=u[0],b=u[1];if(Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(E.a.mark((function t(){var a,n,c,r,s,i,o,m,u,d,p,f,k,h;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(j).concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).drinks?(c=n.drinks[0],r=c.strDrink,s=c.strDrinkThumb,i=c.strAlcoholic,o=c.strCategory,m=c.strGlass,u=c.strInstructions,d=c.strIngredient1,p=c.strIngredient2,f=c.strIngredient3,k=c.strIngredient4,h=c.strIngredient5,b({name:r,image:s,info:i,category:o,glass:m,instructions:u,ingredients:[d,p,f,k,h]}),l(!1)):(b(null),l(!1)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),l(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}l(!0),function(){t.apply(this,arguments)}()}),[e]),r)return c.a.createElement(m,null);if(!f)return c.a.createElement("h2",{className:"section-title"},"no cocktail to display");var k=f.name,h=f.image,v=f.category,g=f.info,N=f.glass,O=f.instructions,y=f.ingredients;return c.a.createElement("section",{className:"section cocktail-section"},c.a.createElement(s.b,{to:"/cocktails",className:"btn btn-primary"},"back home"),c.a.createElement("h2",{className:"section-title"},k),c.a.createElement("div",{className:"drink"},c.a.createElement("img",{src:h,alt:k}),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"name :"),k),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"category :"),v),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"info :"),g),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"glass :"),N),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"instructions :"),O),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"ingredients :"),y.map((function(e,t){return e?c.a.createElement("span",{key:t},e):null}))))))},y=function(){return c.a.createElement("section",{className:"error-page section"},c.a.createElement("div",{className:"error-container"},c.a.createElement("h1",null,"oops! it's a dead end"),c.a.createElement(s.b,{to:"/cocktails",className:"btn btn-primary"},"back home")))},x=a(19),w=a.n(x),S=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-center"},c.a.createElement(s.b,{to:"/cocktails"},c.a.createElement("img",{src:w.a,alt:"cocktail db logo",className:"logo"}))),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/cocktails"},"Home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/cocktails/about"},"About"))))};var I=function(){return c.a.createElement(s.a,null,c.a.createElement(S,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/cocktails"},c.a.createElement(g,null)),c.a.createElement(i.a,{path:"/cocktails/about"},c.a.createElement(N,null)),c.a.createElement(i.a,{path:"/cocktail/:id"},c.a.createElement(O,null)),c.a.createElement(i.a,{path:"*"},c.a.createElement(y,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null,c.a.createElement(I,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3020938e.chunk.js.map