import{a as A,r as l,c as P,e as D,b as p,w as _,F as T,o as M,f as g}from"./index.b7c05205.js";import{E as j}from"./el-button.b5150a85.js";import{_ as O}from"./plugin-vueexport-helper.2444895f.js";const N=A({__name:"mix-screen",setup(q){const u=l(),d=l(),v=l(),o=l(document.createElement("canvas")),s=l(),m=l(!1),w=async()=>{v.value=await navigator.mediaDevices.getDisplayMedia()},C=async()=>{d.value=await navigator.mediaDevices.getUserMedia({video:{deviceId:"e9ae60563d15c7e9df5f8302b94665fac9830287a7792501783b8c01d332ab30"},audio:{deviceId:"bfdae929366b28c29504d9645c3db427da08e8aa3c73b103f5d4a1a4a0542b20"}})},h=(t,e=800,a=448)=>{const n=document.createElement("video");return n.autoplay=!0,n.srcObject=t,n.width=e,n.height=a,n.play(),n},S=async()=>{m.value=!1,await w(),await C(),await F();const t=o.value.captureStream();u.value&&(u.value.srcObject=t)},B=async()=>{var t,e,a,n;m.value=!0,(t=u.value)==null||t.pause(),(e=v.value)==null||e.getTracks().forEach(c=>{c.stop()}),(a=d.value)==null||a.getTracks().forEach(c=>{c.stop()}),(n=s.value)==null||n.clearRect(0,0,o.value.width,o.value.height)},F=async()=>{o.value.width=800,o.value.height=448,s.value=o.value.getContext("2d");const t=h(v.value),e=h(d.value,200,112);x(t,e)},x=(t,e)=>{m.value||(s.value.drawImage(t,0,0,800,448),s.value.drawImage(e,600,336,200,112),setTimeout(x.bind(void 0,t,e),100))},V=async()=>{await C(),await w();const t=[],e=h(v.value),a=y(v.value);e.stream=a;const n={videoContent:e,text:"\u5C4F\u5E55\u5171\u4EAB"};t.push(n);for(let r=0;r<3;r++){const f=`\u540D\u5B57${r+1}`,i=y(d.value),E=h(i);E.stream=i;const I={videoContent:E,text:f};t.push(I)}o.value.width=800,o.value.height=448,s.value=o.value.getContext("2d"),m.value=!1,b(t);const c=o.value.captureStream();u.value&&(u.value.srcObject=c)},y=t=>{const e=d.value;return e.onDraw=(a,n,c,r,f,i)=>{a.font='30px "\u5FAE\u8F6F\u96C5\u9ED1"',a.fillStyle="red",a.fillText(i,n+50,c+50)},e},b=t=>{m.value||(t.forEach((e,a)=>{var i;const r=a%2?400:0,f=a>=2?224:0;s.value.drawImage(e.videoContent,r,f,400,224),((i=e.videoContent)==null?void 0:i.stream)&&typeof e.videoContent.stream.onDraw=="function"&&e.videoContent.stream.onDraw(s.value,r,f,400,224,e.text)}),setTimeout(b.bind(void 0,t),100))},k=async()=>{u.value!==document.pictureInPictureElement?await u.value.requestPictureInPicture():await document.exitPictureInPicture()};return(t,e)=>{const a=j;return M(),P(T,null,[D("div",null,[p(a,{onClick:S,type:"success"},{default:_(()=>[g("\u83B7\u53D6\u5C4F\u5E55\u5171\u4EAB\u548C\u89C6\u9891\u6DF7\u5408\u6D41")]),_:1}),p(a,{onClick:V,type:"success"},{default:_(()=>[g("\u83B7\u53D6\u89C6\u9891\u5E73\u94FA")]),_:1}),p(a,{onClick:k},{default:_(()=>[g("\u5207\u6362\u753B\u4E2D\u753B\u6A21\u5F0F")]),_:1}),p(a,{onClick:B,type:"danger"},{default:_(()=>[g("\u505C\u6B62\u6DF7\u5408\u6D41")]),_:1})]),D("video",{id:"canvasVideo",ref_key:"video",ref:u,autoplay:""},null,512)],64)}}});const $=O(N,[["__scopeId","data-v-1981b745"]]);export{$ as default};
