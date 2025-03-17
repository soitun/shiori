import{b as h,p as u,r as v,e as f,w as c,_ as p,f as a,i as e,t as d,l,g as i,m as b,q as w,h as x,F as k,s as y}from"./index-C8c580-n.js";const C={class:"flex justify-between items-center"},B={class:"text-xl font-bold"},L={class:"bg-white dark:bg-gray-800 p-6 rounded-md shadow-sm"},z={class:"mb-6"},E={class:"text-lg font-semibold mb-4"},F={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"},V=["onClick"],j={class:"flex items-center"},D={class:"flex-1"},N={class:"font-medium"},S={key:0,class:"text-red-500"},M=h({__name:"SettingsView",setup($){const{t:r,locale:m}=u(),_=[{code:"en",name:"English"},{code:"es",name:"Español"},{code:"fr",name:"Français"},{code:"de",name:"Deutsch"},{code:"ja",name:"日本語"}],t=v(m.value),g=o=>{t.value=o,y(o)};return(o,n)=>(a(),f(p,null,{header:c(()=>[e("div",C,[e("h1",B,d(l(r)("settings.title")),1)])]),default:c(()=>[e("div",L,[e("div",z,[e("h2",E,d(l(r)("settings.language")),1),e("div",F,[(a(),i(k,null,b(_,s=>e("div",{key:s.code,onClick:q=>g(s.code),class:w(["border rounded-md p-4 cursor-pointer transition-colors",t.value===s.code?"border-red-500 bg-red-50 dark:bg-red-900/20":"border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"])},[e("div",j,[e("div",D,[e("div",N,d(s.name),1)]),t.value===s.code?(a(),i("div",S,n[0]||(n[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)]))):x("",!0)])],10,V)),64))])])])]),_:1}))}});export{M as default};
