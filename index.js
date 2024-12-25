import{A as y,S as a,i as E,a as k}from"./assets/vendor-B4peqJSK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const v=document.querySelector(".menu"),c=document.querySelector(".menu-list");v.addEventListener("click",L);document.addEventListener("click",S);function L(e){e.preventDefault(),c.classList.toggle("show"),document.querySelectorAll(".menu-list a").forEach(r=>{r.addEventListener("click",h)})}function S(e){!v.contains(e.target)&&!c.contains(e.target)&&c.classList.remove("show")}function h(e){e.preventDefault();const o=e.target.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth",block:"start"}),c.classList.remove("show")}const q=new y(".info-list");q.open(0);new a(".swiper",{direction:"horizontal",loop:!0,allowSlidePrev:!1,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0}});new a(".projects-container.swiper-container",{direction:"horizontal",slidesPerView:1,navigation:{nextEl:".button-next",prevEl:".button-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},mousewheel:!0});new y(".accordion-container");const C=document.querySelector(".covers-container"),b=document.querySelectorAll(".marquee__line"),I={root:null,threshold:0};function P(e){e.forEach(o=>{o.isIntersecting?[...b].forEach(r=>r.classList.add("is-active")):[...b].forEach(r=>r.classList.remove("is-active"))})}const B=new IntersectionObserver(P,I);B.observe(C);const g=document.getElementById("gallery-container"),V=document.getElementById("reviews");async function O(){return(await k.get("https://portfolio-js.b.goit.study/api/reviews")).data}async function x(){try{const e=await O();A(e);const o=new a(".reviews-container.swiper-container",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".reviews-btn.btn-next",prevEl:".reviews-btn.btn-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},mousewheel:!0})}catch{}}x();function A(e){const o=e.map(({avatar_url:r,author:s,review:t})=>`
    <li class="review-gallery-item swiper-slide">
            <img src="${r}" alt="${s}'s avatar" class="avatar"/>
              <h3 class='review-author'>${s}</h3>
              <p class='review-text'>${t}</p>
              </li>
        `).join("");g.insertAdjacentHTML("beforeend",o)}new a(".reviews-container.swiper-container",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".reviews-btn.btn-next",prevEl:".reviews-btn.btn-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},mousewheel:!0});const j=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&g.children.length===0&&E.error({title:"Error",message:"Reviews not found.",position:"topRight",backgroundColor:"red",theme:"dark",overlay:!1,titleColor:"white",messageColor:"white",overlayColor:"rgba(0, 0, 0, 0.6)"})})},{threshold:.1});j.observe(V);const m=document.getElementById("thankYouModal"),M=document.querySelector(".close-button"),l=document.getElementById("contactForm"),d=l.querySelector('input[type="email"]'),u=document.querySelector(".message.green"),f=document.querySelector(".message.red");function T(){m.style.display="flex"}function p(){m.style.display="none",u.style.display="none",d.style.borderBottomColor="rgba(250, 250, 250, 0.2)"}l.addEventListener("submit",function(e){e.preventDefault();const o=l.querySelector('input[type="email"]').value,r=l.querySelector('input[placeholder="comments"]').value,t={method:"POST",body:JSON.stringify({email:o,comment:r}),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",t).then(n=>n.ok?n.json():n.json().then(i=>{throw new Error(i.message||"Невідома помилка")})).then(()=>{u.style.display="block",f.style.display="none",d.style.borderBottomColor="#3CBC81",T(),l.reset()}).catch(()=>{u.style.display="none",f.style.display="block",d.style.borderBottomColor="#E74A3B"})});M.onclick=p;window.onclick=function(e){e.target===m&&p()};window.onkeydown=function(e){e.key==="Escape"&&p()};const D=document.querySelector(".menu-button"),w=document.querySelector(".mobile-menu"),$=document.querySelector(".mobile-button"),N=document.querySelectorAll(".mob-menu-list a");D.addEventListener("click",R);$.addEventListener("click",z);N.forEach(e=>{e.addEventListener("click",o=>{h(o),w.classList.remove("show")})});function R(e){e.preventDefault(),w.classList.add("show")}function z(e){e.preventDefault(),w.classList.remove("show")}
//# sourceMappingURL=index.js.map
