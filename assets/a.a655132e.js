import{d as r,a as s,o as c,c as u,b as i,w as d,e as a,t as l,u as m,F as p,f as _}from"./index.5588238c.js";import{E as f}from"./el-button.139d9639.js";const C=r("main",{state:()=>({counter:0}),getters:{count:({counter:t})=>t},actions:{incrementCounter(t){this.counter+=t}}}),g=a("p",null,"a page",-1),k=s({__name:"a",setup(t){const e=C();function n(){e.incrementCounter(1)}return(h,x)=>{const o=f;return c(),u(p,null,[g,i(o,{type:"primary",onClick:n},{default:d(()=>[_("add data")]),_:1}),a("div",null,"store data "+l(m(e).count),1)],64)}}});export{k as default};
