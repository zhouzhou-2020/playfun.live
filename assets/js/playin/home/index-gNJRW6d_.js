import"../../reset-B5Qt9EMX.js";import{d as G,f as y,a as n,b as e,g as a,k as b,F as d,i as m,r as N,o,w as T,x as z,t as p,j as A,q as B,p as S,l as F,I as H,G as I,y as P,z as V,L as $}from"../../vendor-DCBWgBcd.js";import{s as h,C as j,_ as q,a as M,H as O,L as R,b as W,c as J,i as K}from"../../common-Bi0suO9m.js";const Q=c=>(S("data-v-3e80c419"),c=c(),F(),c),U={class:"home-page"},X={class:"sec recommend"},Y=Q(()=>e("div",{class:"sec-head"},[e("h3",null,"Recommend")],-1)),Z={class:"sec-body recommend-body"},ee=["href"],se={class:"cover"},te=["alt"],ae={class:"rating"},oe={class:"title"},ce={class:"sec"},ne={class:"sec-head"},ie=["href"],re={class:"sec-body"},le=G({__name:"Index",setup(c){const{gameLiteList:i,categoryList:L,shortTitle:C}=PAGE_DATA,u=y([]),f=y([]),v=L.map(s=>s.name),r={};v.forEach(s=>{r[s]=[]}),i.forEach(s=>{const l=s.tag.split(",");l.length?l.forEach(_=>{r[_].push(s)}):r[l[0]].push(s)});const E=h(v).slice(0,7).map(s=>({title:s,list:h(r[s]).slice(0,6)}));return u.value=E,f.value=h(i).slice(0,2),(s,l)=>{const _=H,k=I,w=P,x=N("lazy");return o(),n(d,null,[e("main",U,[a(j,{siteName:b(C)},null,8,["siteName"]),e("div",X,[Y,e("div",Z,[(o(!0),n(d,null,m(f.value,t=>(o(),n("div",{key:t.id,class:"item"},[e("a",{href:`/game/${t.id}/`},[e("div",se,[T(e("img",{src:q,alt:t.title},null,8,te),[[x,t.thumb]])]),e("div",ae,[a(_,{name:"star-o"}),z(p(t.rating),1)]),e("div",oe,p(t.title),1)],8,ee)]))),128))])]),a(M,{placement:"home1"}),a(O),(o(!0),n(d,null,m(u.value,t=>(o(),n("div",ce,[e("div",ne,[e("h3",null,p(t.title),1),e("a",{href:`/category/${t.title}/`,class:"more"},"More",8,ie)]),e("div",re,[a(w,{square:"",border:!1,"column-num":2},{default:A(()=>[(o(!0),n(d,null,m(t.list,g=>(o(),B(k,{key:g.id,class:"game-item"},{default:A(()=>[a(R,{item:g,type:"type4"},null,8,["item"])]),_:2},1024))),128))]),_:2},1024)])]))),256))]),a(W)],64)}}}),de=J(le,[["__scopeId","data-v-3e80c419"]]);PAGE_DATA;const{ad_channel:_e}=PAGE_DATA;_e!=5&&K({placement:"home1"});const D=V(de);D.use($,{filter:{webp(c,i){i.supportWebp&&(c.src+=".webp")}}});D.mount("#app");
