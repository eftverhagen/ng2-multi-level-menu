webpackJsonp([1],{0:function(n,t,e){n.exports=e("cDNt")},cDNt:function(n,t,e){"use strict";function l(n){return m._30(0,[(n()(),m._15(0,0,null,null,7,"header",[["class","header"]],null,null,null,null,null)),(n()(),m._29(-1,null,["\n  "])),(n()(),m._15(2,0,null,null,4,"div",[["class","btn toggle"]],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i._menu.toggleMenu(e)&&l}return l},null,null)),(n()(),m._29(-1,null,["\n      "])),(n()(),m._15(4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),m._29(5,null,["",""])),(n()(),m._29(-1,null,["\n  "])),(n()(),m._29(-1,null,["\n"])),(n()(),m._29(-1,null,["\n"]))],null,function(n,t){n(t,5,0,t.component._menu.state[0].active?"-":"+")})}function i(n){return m._30(0,[(n()(),m._15(0,0,null,null,1,"app-header",[],null,null,null,l,C)),m._13(1,114688,null,0,O,[h],null,null)],function(n,t){n(t,1,0)},null)}function u(n){return m._30(0,[(n()(),m._15(0,0,null,null,4,"li",[],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==m._26(n,1).onClick()&&l}if("click"===t){l=!1!==(n.context.$implicit.toggle&&i._menu.openLevel(e,n.context.$implicit.toggle))&&l}return l},null,null)),m._13(1,16384,null,0,M.l,[M.k,M.a,[8,null],m.N,m.n],{routerLink:[0,"routerLink"]},null),m._13(2,278528,null,0,P.m,[m.z,m.n,m.M],{ngStyle:[0,"ngStyle"]},null),m._27(3,{opacity:0,transform:1}),(n()(),m._29(4,null,["\n            "," \n        "]))],function(n,t){var e=t.component;n(t,1,0,t.context.$implicit.route),n(t,2,0,n(t,3,0,e._menu.isOverlapped(t.parent.context.$implicit.id)?"0":"1",e._menu.isOverlapped(t.parent.context.$implicit.id)?"translate3d(-"+e._menu.offset+"px, 0px, 0px)":"translate3d(0px, 0px, 0px)"))},function(n,t){n(t,4,0,t.context.$implicit.name)})}function o(n){return m._30(0,[(n()(),m._15(0,0,null,null,13,"div",[["class","level"]],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==(i._menu.isOverlapped(n.context.$implicit.id)&&i._menu.closeUntil(n.context.$implicit.id))&&l}return l},null,null)),(n()(),m._29(-1,null,["\n      \n    "])),(n()(),m._15(2,0,null,null,10,"ul",[],null,null,null,null,null)),m._13(3,278528,null,0,P.h,[m.y,m.z,m.n,m.M],{ngClass:[0,"ngClass"]},null),m._13(4,278528,null,0,P.m,[m.z,m.n,m.M],{ngStyle:[0,"ngStyle"]},null),m._27(5,{width:0,"background-color":1,transform:2}),(n()(),m._29(-1,null,["\n        "])),(n()(),m._15(7,0,null,null,1,"span",[["style","position: fixed; right: 0; top: 0;"]],null,null,null,null,null)),(n()(),m._29(8,null,[""," ",""])),(n()(),m._29(-1,null,["\n        "])),(n()(),m._9(16777216,null,null,1,null,u)),m._13(11,802816,null,0,P.i,[m.Y,m.V,m.y],{ngForOf:[0,"ngForOf"]},null),(n()(),m._29(-1,null,["\n    "])),(n()(),m._29(-1,null,["\n  "]))],function(n,t){n(t,3,0,t.context.$implicit.active?"active":"inactive"),n(t,4,0,n(t,5,0,t.context.$implicit.width+"px","rgba("+t.context.$implicit.color.r+","+t.context.$implicit.color.g+","+t.context.$implicit.color.b+", 1)",0===t.context.$implicit.active?"translate3d(-"+t.context.$implicit.width+"px, 0px, 0px)":"")),n(t,11,0,t.context.$implicit.items)},function(n,t){n(t,8,0,t.component._menu.isOverlapped(t.context.$implicit.id),t.context.$implicit.id)})}function r(n){return m._30(0,[(n()(),m._15(0,0,null,null,4,"nav",[["class","menu"]],null,null,null,null,null)),(n()(),m._29(-1,null,["\n  "])),(n()(),m._9(16777216,null,null,1,null,o)),m._13(3,802816,null,0,P.i,[m.Y,m.V,m.y],{ngForOf:[0,"ngForOf"]},null),(n()(),m._29(-1,null,["\n"]))],function(n,t){n(t,3,0,t.component._menu.state)},null)}function a(n){return m._30(0,[(n()(),m._15(0,0,null,null,1,"app-multi-level-menu",[],null,null,null,r,$)),m._13(1,114688,null,0,w,[h],null,null)],function(n,t){n(t,1,0)},null)}function c(n){return m._30(0,[(n()(),m._15(0,0,null,null,0,"div",[["class","overlay"]],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i._menu.toggleMenu(e)&&l}return l},null,null))],null,null)}function s(n){return m._30(0,[(n()(),m._15(0,0,null,null,1,"app-header",[],null,null,null,l,C)),m._13(1,114688,null,0,O,[h],null,null),(n()(),m._29(-1,null,["\n"])),(n()(),m._15(3,0,null,null,12,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),m._29(-1,null,["\n  "])),(n()(),m._9(16777216,null,null,1,null,c)),m._13(6,16384,null,0,P.j,[m.Y,m.V],{ngIf:[0,"ngIf"]},null),(n()(),m._29(-1,null,["\n  "])),(n()(),m._15(8,0,null,null,1,"app-multi-level-menu",[],null,null,null,r,$)),m._13(9,114688,null,0,w,[h],null,null),(n()(),m._29(-1,null,["\n  "])),(n()(),m._15(11,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),m._13(12,278528,null,0,P.m,[m.z,m.n,m.M],{ngStyle:[0,"ngStyle"]},null),m._27(13,{transform:0}),(n()(),m._29(-1,null,["\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero orci, euismod quis elit a, mattis condimentum leo. Sed id vehicula tellus. Curabitur consectetur dapibus quam, eu vestibulum orci gravida tristique. Morbi sodales dolor non nibh auctor, sit amet dictum mauris finibus. Nulla ut neque efficitur, placerat arcu vitae, aliquam diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed ligula eget augue commodo molestie.\n    Ut sagittis felis quis massa faucibus commodo eget sed lorem. Nunc eu faucibus elit. Cras gravida dignissim orci, vel blandit neque mattis at. Vestibulum at tempus velit. Proin commodo lobortis lobortis. Duis semper, nibh ac hendrerit tincidunt, augue lacus viverra erat, nec laoreet tellus nisl et urna. Nulla vel lorem eget eros ullamcorper tempus.\n    Praesent luctus leo ut auctor viverra. In eleifend consectetur neque, sit amet semper mauris iaculis sed. In elementum magna mauris, id aliquam leo placerat nec. Praesent sed volutpat erat. Ut sodales molestie ultrices. Nam vel imperdiet nisl. Nam tempor facilisis metus, vel laoreet ex hendrerit id. Ut posuere bibendum justo, in faucibus mauris aliquam eget.\n    Sed tempor metus sit amet nisi venenatis, eu lobortis mi ullamcorper. Pellentesque eu aliquam enim, a dignissim dolor. Nunc ut turpis condimentum, facilisis quam vel, euismod magna. Nunc mollis egestas lorem. Mauris tincidunt viverra orci, sit amet congue purus lacinia eu. Integer feugiat lobortis lectus, elementum tincidunt eros pretium eu. Vestibulum arcu arcu, accumsan sit amet est sed, rutrum tempor nisl. Quisque eget orci nec nibh imperdiet vestibulum. Aliquam quis nulla orci. Sed facilisis tortor et urna iaculis sodales. Pellentesque ullamcorper ullamcorper ex a lobortis. Praesent at dolor sed lectus dapibus ultricies. Donec sed auctor sapien. Aenean ultricies cursus nisi, ac finibus eros elementum vehicula. Phasellus aliquet elementum euismod.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero orci, euismod quis elit a, mattis condimentum leo. Sed id vehicula tellus. Curabitur consectetur dapibus quam, eu vestibulum orci gravida tristique. Morbi sodales dolor non nibh auctor, sit amet dictum mauris finibus. Nulla ut neque efficitur, placerat arcu vitae, aliquam diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed ligula eget augue commodo molestie.\n  "])),(n()(),m._29(-1,null,["\n"])),(n()(),m._29(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,1,0),n(t,6,0,e._menu.state[0].active),n(t,9,0),n(t,12,0,n(t,13,0,e._menu.state[0].active?"translate3d("+e._menu.contentLeft+"px, 0px, 0px)":"translate3d(0px, 0px, 0px)"))},null)}function p(n){return m._30(0,[(n()(),m._15(0,0,null,null,1,"app-root",[],null,null,null,s,N)),m._13(1,49152,null,0,v,[h],null,null)],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var m=e("/oeL"),d={production:!0},_=function(){function n(){}return n}(),f=[{id:0,items:[{name:"Clothing",toggle:1},{name:"Cars",toggle:3}]},{id:1,items:[{name:"Jeans",toggle:2},{name:"Sweater",route:"Sweater"}]},{id:2,items:[{name:"Levis",route:"Levis"},{name:"Wrangler",route:"Wrangler"}]},{id:3,items:[{name:"Audi",route:"Audi"},{name:"Volkswagen",route:"Volkswagen"}]}],g=e("xrDH"),h=function(){function n(){this.order=[],this.initialWidth=200,this.offset=40,this.init()}return n.prototype.init=function(){var n=this;this.colors=this.generateColors(!0,0,400,f.length),this.state=g.map(f,function(t,e){return t.active=0,t.width=n.initialWidth,t.color=n.colors[e],t})},n.prototype.calculateContentLeft=function(){this.contentLeft=g.max(g.map(this.state,function(n){return n.width}))},n.prototype.calculateWidth=function(n){var t=this;switch(void 0===n&&(n="open"),n){case"open":var e=g.map(this.order,function(n,e){return t.initialWidth+e*t.offset});this.state=g.map(this.state,function(n){return g.map(t.order,function(l){n.id===l&&(n.width=e[t.order.indexOf(l)])}),n});case"close":this.state=g.map(this.state,function(n){return n.width-=t.offset,n})}},n.prototype.isOverlapped=function(n){var t=this.order.indexOf(n);return void 0!==this.order[t-1]},n.prototype.toggleMenu=function(n){var t=this;n.stopPropagation(),this.state=g.map(this.state,function(n){return 0===n.id?(n.active=1-n.active,1===n.active&&(t.order=[0])):n.active=0,n}),console.log(this.order),this.calculateWidth(),this.calculateContentLeft()},n.prototype.openLevel=function(n,t){var e=this;n.stopPropagation(),this.state=g.map(this.state,function(n){return n.id===t&&-1===e.order.indexOf(n.id)&&(n.active=1,e.order.unshift(t)),n}),this.calculateWidth("open"),this.calculateContentLeft(),console.log(this.order)},n.prototype.closeUntil=function(n){var t=this,e=!1;this.order=g.filter(this.order,function(t){return t===n&&(e=!0),e}),this.state=g.map(this.state,function(e){return e.id===n?e.active=1:t.order.indexOf(e.id)>t.order.indexOf(n)?(console.log("overlaps: ",t.order.indexOf(e.id)>t.order.indexOf(n)),e.active=1):e.active=0,e}),this.calculateWidth("close"),this.calculateContentLeft(),console.log(this.order)},n.prototype.generateColors=function(n,t,e,l){var i=[],u=125,o=50,r=50,a=g.floor(g.difference([e],[t])/l),c=g.range(t,e,a).concat([e]),s=[{r:0,b:0,g:1},{r:-1,b:0,g:0},{r:0,b:1,g:0},{r:0,b:0,g:-1},{r:1,b:0,g:0},{r:0,b:-1,g:0}];return g.map(s,function(n){for(var t=0;t<=75;t++)0===t?i.push({r:u,b:r,g:o}):(u+=n.r,r+=n.b,o+=n.g,i.push({r:u,g:o,b:r}))}),n&&(i=g.map(c,function(n){return i[n]})),i},n.ctorParameters=function(){return[]},n}(),v=function(){function n(n){this._menu=n,this.title="app"}return n.ctorParameters=function(){return[{type:h}]},n}(),b=[".wrapper[_ngcontent-%COMP%]{overflow:hidden;margin-top:80px}.container[_ngcontent-%COMP%]{position:relative;transition:all .5s;background-color:green;padding:10px}.overlay[_ngcontent-%COMP%]{position:absolute;top:80px;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.2);z-index:999}"],x=[".header[_ngcontent-%COMP%]{position:fixed;z-index:999;top:0;left:0;right:0;height:80px;background-color:#2a4867}.toggle[_ngcontent-%COMP%]{position:relative;width:40px;height:40px;background-color:#306497;cursor:pointer;margin:20px}.toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;font-size:24px;font-family:monospace;line-height:20px;text-align:center;width:20px;height:20px;top:50%;left:50%;background:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}"],O=function(){function n(n){this._menu=n}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:h}]},n}(),y=[x],C=m._12({encapsulation:0,styles:y,data:{}}),P=(m._10("app-header",O,i,{},{},[]),e("qbdv")),k=[".menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:fixed;overflow:hidden;z-index:999;top:80px;bottom:0;left:0;background-color:#999;padding:0;margin:0;list-style:none}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{box-sizing:border-box;transition:all .5s}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:50px;line-height:50px;padding-left:10px;width:100%;background-color:rgba(0,0,0,.1);color:#efefef}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;color:#fff;height:100%;width:100%}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.2)}.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}"],M=e("BkNc"),w=function(){function n(n){this._menu=n}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:h}]},n}(),q=[k],$=m._12({encapsulation:0,styles:q,data:{animation:[{type:7,name:"anim",definitions:[{type:0,name:"0",styles:{type:6,styles:{left:"-300px"},offset:null},options:void 0},{type:0,name:"1",styles:{type:6,styles:{left:"0px"},offset:null},options:void 0}],options:{}}]}}),L=(m._10("app-multi-level-menu",w,a,{},{},[]),[b]),N=m._12({encapsulation:0,styles:L,data:{}}),j=m._10("app-root",v,p,{},{},[]),S=e("fc+i"),W=e("f9zQ"),z=e("fL27"),F=e("EyWH"),I=m._11(_,[v],function(n){return m._24([m._25(512,m.k,m._7,[[8,[j]],[3,m.k],m.E]),m._25(5120,m.A,m._23,[[3,m.A]]),m._25(4608,P.l,P.k,[m.A]),m._25(5120,m.c,m._16,[]),m._25(5120,m.y,m._21,[]),m._25(5120,m.z,m._22,[]),m._25(4608,S.c,S.t,[P.c]),m._25(6144,m.Q,null,[S.c]),m._25(4608,S.f,S.g,[]),m._25(5120,S.d,function(n,t,e,l){return[new S.l(n),new S.p(t),new S.o(e,l)]},[P.c,P.c,P.c,S.f]),m._25(4608,S.e,S.e,[S.d,m.G]),m._25(135680,S.n,S.n,[P.c]),m._25(4608,S.m,S.m,[S.e,S.n]),m._25(5120,W.a,z.d,[]),m._25(5120,W.c,z.e,[]),m._25(4608,W.b,z.c,[W.a,W.c]),m._25(5120,m.O,z.f,[S.m,W.b,m.G]),m._25(6144,S.q,null,[S.n]),m._25(4608,m.W,m.W,[m.G]),m._25(4608,S.h,S.h,[P.c]),m._25(4608,S.j,S.j,[P.c]),m._25(4608,F.b,z.b,[m.O,S.b]),m._25(5120,M.a,M.v,[M.k]),m._25(4608,M.d,M.d,[]),m._25(6144,M.f,null,[M.d]),m._25(135680,M.n,M.n,[M.k,m.D,m.j,m.w,M.f]),m._25(4608,M.e,M.e,[]),m._25(5120,M.h,M.y,[M.w]),m._25(5120,m.b,function(n){return[n]},[M.h]),m._25(4608,h,h,[]),m._25(1024,M.q,M.t,[[3,M.k]]),m._25(1024,m.o,S.r,[]),m._25(1024,m.F,function(){return[M.r()]},[]),m._25(512,M.w,M.w,[m.w]),m._25(1024,m.d,function(n,t,e){return[S.s(n,t),M.x(e)]},[[2,S.i],[2,m.F],M.w]),m._25(512,m.e,m.e,[[2,m.d]]),m._25(131584,m._14,m._14,[m.G,m._8,m.w,m.o,m.k,m.e]),m._25(2048,m.g,null,[m._14]),m._25(512,M.p,M.c,[]),m._25(512,M.b,M.b,[]),m._25(256,M.g,{enableTracing:!1},[]),m._25(1024,P.g,M.s,[P.o,[2,P.a],M.g]),m._25(512,P.f,P.f,[P.g]),m._25(512,m.j,m.j,[]),m._25(512,m.D,m.T,[m.j,[2,m.U]]),m._25(1024,M.i,function(){return[[{path:"aygo",redirectTo:"/"}]]},[]),m._25(1024,M.k,M.u,[m.g,M.p,M.b,P.f,m.w,m.D,m.j,M.i,M.g,[2,M.o],[2,M.j]]),m._25(512,M.m,M.m,[[2,M.q],[2,M.k]]),m._25(512,P.b,P.b,[]),m._25(512,m.f,m.f,[m.g]),m._25(512,S.a,S.a,[[3,S.a]]),m._25(512,z.a,z.a,[]),m._25(512,_,_,[])])});d.production&&Object(m._2)(),Object(S.k)().bootstrapModuleFactory(I).catch(function(n){return console.log(n)})},gFIY:function(n,t){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="gFIY"}},[0]);