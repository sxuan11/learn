import{c as p,g as J,b as L,r as P,u as D,i as y,f as N,a as K,d as n,w as O,e as Q,T as W,h as X,j as w,l as Y,k as V,m as Z,n as B,o as d,p as k,F as A,q as C,s as h,t as $,v as x,x as z,E as T,y as E,z as ee,_ as F,A as oe,B as te,C as G,D as ne,G as se,H as ae,I as le,J as j,K as re,L as ie}from"./index.2be33d33.js";const ce=["","default","small","large"],q=Symbol("buttonGroupContextKey"),M=o=>{const s=J();return p(()=>{var t,a;return(a=((t=s.proxy)==null?void 0:t.$props)[o])!=null?a:void 0})},ue=L({type:String,values:ce,required:!1}),de=(o,s={})=>{const t=P(void 0),a=s.prop?t:M("size"),r=s.global?t:D("size"),e=s.form?{size:void 0}:y(N,void 0),i=s.formItem?{size:void 0}:y(K,void 0);return p(()=>a.value||n(o)||(i==null?void 0:i.size)||(e==null?void 0:e.size)||r.value||"")},R=o=>{const s=M("disabled"),t=y(N,void 0);return p(()=>s.value||n(o)||(t==null?void 0:t.disabled)||!1)},pe=({from:o,replacement:s,scope:t,version:a,ref:r,type:e="API"},i)=>{O(()=>n(i),m=>{},{immediate:!0})},me=()=>{const o=y(N,void 0),s=y(K,void 0);return{form:o,formItem:s}},be=(o,s)=>{pe({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},p(()=>o.type==="text"));const t=y(q,void 0),a=D("button"),{form:r}=me(),e=de(p(()=>t==null?void 0:t.size)),i=R(),m=P(),b=Q(),u=p(()=>o.type||(t==null?void 0:t.type)||""),_=p(()=>{var c,f,g;return(g=(f=o.autoInsertSpace)!=null?f:(c=a.value)==null?void 0:c.autoInsertSpace)!=null?g:!1}),S=p(()=>{var c;const f=(c=b.default)==null?void 0:c.call(b);if(_.value&&(f==null?void 0:f.length)===1){const g=f[0];if((g==null?void 0:g.type)===W){const H=g.children;return/^\p{Unified_Ideograph}{2}$/u.test(H.trim())}}return!1});return{_disabled:i,_size:e,_type:u,_ref:m,shouldAddSpace:S,handleClick:c=>{o.nativeType==="reset"&&(r==null||r.resetFields()),s("click",c)}}},fe=["default","primary","success","warning","info","danger","text",""],ve=["button","submit","reset"],I=X({size:ue,disabled:Boolean,type:{type:String,values:fe,default:""},icon:{type:w},nativeType:{type:String,values:ve,default:"button"},loading:Boolean,loadingIcon:{type:w,default:()=>Y},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),ge={click:o=>o instanceof MouseEvent};function v(o,s=20){return o.mix("#141414",s).toString()}function ye(o){const s=R(),t=V("button");return p(()=>{let a={};const r=o.color;if(r){const e=new Z(r),i=o.dark?e.tint(20).toString():v(e,20);if(o.plain)a=t.cssVarBlock({"bg-color":o.dark?v(e,90):e.tint(90).toString(),"text-color":r,"border-color":o.dark?v(e,50):e.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":i,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":i}),s.value&&(a[t.cssVarBlockName("disabled-bg-color")]=o.dark?v(e,90):e.tint(90).toString(),a[t.cssVarBlockName("disabled-text-color")]=o.dark?v(e,50):e.tint(50).toString(),a[t.cssVarBlockName("disabled-border-color")]=o.dark?v(e,80):e.tint(80).toString());else{const m=o.dark?v(e,30):e.tint(30).toString(),b=e.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(a=t.cssVarBlock({"bg-color":r,"text-color":b,"border-color":r,"hover-bg-color":m,"hover-text-color":b,"hover-border-color":m,"active-bg-color":i,"active-border-color":i}),s.value){const u=o.dark?v(e,50):e.tint(50).toString();a[t.cssVarBlockName("disabled-bg-color")]=u,a[t.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,a[t.cssVarBlockName("disabled-border-color")]=u}}}return a})}const ke=["aria-disabled","disabled","autofocus","type"],Be=B({name:"ElButton"}),_e=B({...Be,props:I,emits:ge,setup(o,{expose:s,emit:t}){const a=o,r=ye(a),e=V("button"),{_ref:i,_size:m,_type:b,_disabled:u,shouldAddSpace:_,handleClick:S}=be(a,t);return s({ref:i,size:m,type:b,disabled:u,shouldAddSpace:_}),(l,c)=>(d(),k("button",{ref_key:"_ref",ref:i,class:z([n(e).b(),n(e).m(n(b)),n(e).m(n(m)),n(e).is("disabled",n(u)),n(e).is("loading",l.loading),n(e).is("plain",l.plain),n(e).is("round",l.round),n(e).is("circle",l.circle),n(e).is("text",l.text),n(e).is("link",l.link),n(e).is("has-bg",l.bg)]),"aria-disabled":n(u)||l.loading,disabled:n(u)||l.loading,autofocus:l.autofocus,type:l.nativeType,style:ee(n(r)),onClick:c[0]||(c[0]=(...f)=>n(S)&&n(S)(...f))},[l.loading?(d(),k(A,{key:0},[l.$slots.loading?C(l.$slots,"loading",{key:0}):(d(),h(n(T),{key:1,class:z(n(e).is("loading"))},{default:$(()=>[(d(),h(x(l.loadingIcon)))]),_:1},8,["class"]))],64)):l.icon||l.$slots.icon?(d(),h(n(T),{key:1},{default:$(()=>[l.icon?(d(),h(x(l.icon),{key:0})):C(l.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),l.$slots.default?(d(),k("span",{key:2,class:z({[n(e).em("text","expand")]:n(_)})},[C(l.$slots,"default")],2)):E("v-if",!0)],14,ke))}});var Se=F(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const he={size:I.size,type:I.type},Ce=B({name:"ElButtonGroup"}),ze=B({...Ce,props:he,setup(o){const s=o;oe(q,te({size:G(s,"size"),type:G(s,"type")}));const t=V("button");return(a,r)=>(d(),k("div",{class:z(`${n(t).b("group")}`)},[C(a.$slots,"default")],2))}});var U=F(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const $e=ne(Se,{ButtonGroup:U});se(U);const Ie=ae("main",{state:()=>({counter:0}),getters:{count:({counter:o})=>o},actions:{incrementCounter(o){this.counter+=o}}}),Ne=j("p",null,"a page",-1),we=B({__name:"a",setup(o){const s=Ie();function t(){s.incrementCounter(1)}return(a,r)=>{const e=$e;return d(),k(A,null,[Ne,le(e,{type:"primary",onClick:t},{default:$(()=>[ie("add data")]),_:1}),j("div",null,"store data "+re(n(s).count),1)],64)}}});export{we as default};
